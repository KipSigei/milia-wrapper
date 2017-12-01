(defproject milia-wrapper "0.0.1-SNAPSHOT"
  :description "Javascript wrapper for the Ona API client library (Milia)"
  :url "https://github.com/onaio/esir-dashboard/wrappers"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}
  :min-lein-version "2.3.4"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.562"]
                 [org.clojure/core.async "0.2.391"]
                 [alandipert/storage-atom "1.2.4"]
                 [onaio/milia "0.3.34-SNAPSHOT"]
                 [cljsjs/moment "2.17.1-0"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-cljfmt "0.5.6"]]
  :cljsbuild
  {:builds {:dev {:source-paths ["src/cljs"]
                  :compiler {:output-to     "dist/milia-wrapper.js"
                             :output-dir    "dist/out"
                             :asset-path    "out"
                             :main          "milia.wrapper"
                             :optimizations :none
                             :pretty-print true
                             :source-map true}}
            :prod {:source-paths ["src/cljs"]
                   :compiler {:main          "milia.wrapper"
                              :output-to     "dist/milia-wrapper.js"
                              :optimizations :advanced
                              :pretty-print  false}}}})
