(ns milia.wrapper
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [chimera.js-interop :refer [json->js->cljs str->json]]
            [cljs.core.async :refer [<!]]
            [milia.api.dataset :as dataset-api]
            [milia.api.user :refer [user]]
            [milia.utils.remote :refer [*credentials*]]
            [milia.utils.remote :refer [set-hosts]]))

(defn ^:export set-host
  "Set request protocol and API data host."
  [request-protocol data-host]
  (set-hosts data-host nil nil request-protocol))

(defn ^:export get-form-data
  "Returns data from form data from data endpoint."
  [dataset-id query-params auth-token callback]
  (go
    (let [{:keys [status body]}
          (<! (dataset-api/data dataset-id
               :raw? true
               :query-params (json->js->cljs query-params)
               :must-revalidate? true
               :auth-token auth-token))
          error (when (not= status 200) (js/console.log body))]
      (callback error (str->json body)))))
