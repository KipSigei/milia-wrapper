(ns milia.stats
  (:require [chimera.seq :refer [in?]]
            [cljsjs.moment]
            [clojure.string :refer [join]]))

(defn calc-percentage
  "Calculates percentage given number and total"
  [n total]
  (if (and (pos? n) (>= total n))
    (-> n
        (/ total)
        (* 100)
        float
        (.toFixed 0))
    "0"))

(def consent-field "survey_intro/consent")
(def consent-yes-value "1")
(def submission-date-field "today")
(def not_specified "not_specified")
(def missing-districts-field "survey_intro/District_miss")
(def possible-date-formats ["YYYY-MM-DD" "MM/DD/YYYY"])
(def invalid "invalid")
(def period "period")
(def value-count "value-count")
(def group-total "total")
(defn period-text
  [period-key]
  (str "Week " period-key))

(defn get-week
  "Get week number from date field in row object"
  [row]
  (let [date->week #(.week (js/moment (get row submission-date-field) % true))]
    (loop [i 0 fmt (get possible-date-formats i)]
      (let [week (date->week fmt)]
        (if-not (js/isNaN week)
          week
          (recur (inc i) (get possible-date-formats (inc i))))))))

(defn remove-invalid-week
  "Removes key/value pair from map where key = invalid"
  [data]
  (dissoc data invalid))

(defn create-groups
  "Groups data based on provided group-by field"
  [rows group-by-field]
  (let [grouped-by-field (group-by #(get % group-by-field) rows)
        ;; merge group-by-field field with not_specified group
        not_specified_districts
        (group-by #(get % missing-districts-field)
                  (get grouped-by-field not_specified))
        grouped-by-field (dissoc grouped-by-field not_specified)]
    (merge grouped-by-field not_specified_districts)))

(defn aggregate-datum
  [indicator-field aggregate-options period-key previous-group cumulative?]
  (fn [[group-key group-rows]]
    (let [{group-by-field :group-by
           filter-values :filter-values} aggregate-options
          get-prev-group-value
          (fn [field]
            (when cumulative?
              (get
               (first
                (filter
                 #(= (get % group-by-field)
                     group-key)
                 previous-group)) field)))
          prev-count (get-prev-group-value value-count) 
          prev-total (get-prev-group-value group-total)
          matching-rows-2 (filter #(true? (not (nil? (re-find (re-pattern (join " " filter-values)) (get % (str indicator-field)))))) group-rows)
          matching-rows
          (filter #(in? filter-values (get % indicator-field)) group-rows)
          active-matching-rows (if (> (count filter-values) 1) matching-rows matching-rows-2)
          maching-rows-count (+ (count active-matching-rows) (or prev-count 0))
          total-rows (+ (count group-rows) (or prev-total 0))
          percent (calc-percentage maching-rows-count total-rows)]
      {group-by-field  group-key
       indicator-field percent
       period          (period-text period-key)
       value-count     maching-rows-count
       group-total     total-rows})))

(defn create-aggregate-fn
  [indicator-field aggregate-options]
  (fn [[current-key current-rows] [period-key period-rows]]
    (let [;; checks if previous period data is grouped
          {group-by-field :group-by} aggregate-options
          grouped?
          (= (count (keys (group-by #(get % group-by-field)
                                    current-rows)))
             (count current-rows))
          cumulative? (and (= (-> aggregate-options :timeseries :type)
                         "cumulative"))
          ;; group in data using group-by-field
          groups (create-groups period-rows group-by-field)
          ;; aggregates data in the groups
          aggregated-data
          (map (aggregate-datum indicator-field
                                aggregate-options
                                period-key
                                current-rows
                                cumulative?)
               groups)
          ;; Includes groups from previous period
          rows-not-included (when cumulative?
                              (map #(assoc-in % [period]
                                              (period-text period-key))
                                   (when grouped?
                                     (remove
                                      (fn
                                        [datum]
                                        (in? (map #(get % group-by-field)
                                                  aggregated-data)
                                             (get datum group-by-field)))
                                      current-rows))))]
      ;; return aggregate period data
      [period-key (concat aggregated-data rows-not-included)])))

(defn ^:export aggregate-data
  [data indicator-field aggregate-options extra-props]
  (let [{min-val :min
         group-by-field :group-by
         :as aggregate-options} (js->clj aggregate-options
                                         :keywordize-keys true)
        ;; Minimum total value to show for groups
        minTotal (or min-val 0)
        jsData (js->clj data)
        ;; Filter data where survey_intro/consent = 1 (Yes)
        data (cond->> jsData
                    (not (empty? (filter #(= (contains? % consent-field) true) jsData)))
                    (filter #(= (get % consent-field) consent-yes-value)))
        ; ;; Select columns required for aggregation
        active-keys (vec (cond-> [submission-date-field
                                  indicator-field
                                  group-by-field
                                  missing-districts-field
                                  district-field] extra-props (concat extra-props)))
        data (map #(select-keys % active-keys) data)

        ;; Group rows by week number
        grouped-in-weeks (->> data
                              (group-by get-week)
                              (remove-invalid-week)
                              (sort-by key))
        ;; Aggregate first period
        [first-period-key first-group-rows] (first grouped-in-weeks)
        first-period-aggregated (map (aggregate-datum indicator-field
                                                      aggregate-options
                                                      first-period-key
                                                      nil nil)
                                     (create-groups
                                      first-group-rows
                                      group-by-field))
        ;; Get cumulative aggregation function
        group-field-fn (create-aggregate-fn indicator-field
                                            aggregate-options)
        ;; Aggregate data cumulatively from first period
        data (->> (rest grouped-in-weeks)
                  (reductions group-field-fn
                              [first-period-key first-period-aggregated])
                  (into {})
                  (sort-by key)
                  (vals)
                  (flatten)
                  (filter #(>= (get % group-total) minTotal)))
        ;; Convert to JSON object
        data (clj->js data)]
    data))
