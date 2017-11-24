(ns milia.wrapper
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [chimera.js-interop :refer [json->js->cljs str->json]]
            [cljs.core.async :refer [<!]]
            [milia.api.dataset :as dataset-api]
            [milia.api.user :refer [user]]
            [milia.utils.remote :refer [*credentials*]]
            [milia.utils.remote :refer [set-hosts]]))

(defn set-milia-credentials!
  [username temp-token & [token]]
  (set! *credentials* {:username username
                       :temp-token temp-token
                       :token token}))

(defn ^:export set-host
  "Set ONA API host"
  [request-protocol data-host & [client-host]]
  (set-hosts
   data-host
   :request-protocol request-protocol
   :client-host client-host))

(defn ^:export set-credentials
  "Create an account map given a user's credentials."
  [username password & [callback]]
  (go
    (let [{:keys [body status]} (<! (user true))
          {:keys [username api_token temp_token]} body]
      (when (and username api_token temp_token)
        (set-milia-credentials! username temp_token api_token))
      (callback status))))

(defn ^:export get-form-data
  "Returns data from dataset-id"
  [dataset-id query-params callback] 
  (go
    (let [{:keys [status body]}
          (<! (dataset-api/data
               dataset-id
               :raw? true
               :query-params (json->js->cljs query-params)
               :must-revalidate? true))
          error (when (not= status 200) (js/console.log body))]
      (callback error (str->json body)))))
