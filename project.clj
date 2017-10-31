(defproject wrappers "0.0.1-SNAPSHOT"
  :description "Ona wrapper for milia"
  :url "https://github.com/onaio/esir-dashboard/wrappers"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}
  :min-lein-version "2.3.4"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.562"]
                 [org.clojure/core.async "0.2.391"]
                 [alandipert/storage-atom "1.2.4"]
                 [onaio/hatti "0.3.24"]
                 [onaio/chimera "0.0.6"]
                 [onaio/milia "0.3.30-wrapper-SNAPSHOT"]
                 [cljsjs/moment "2.17.1-0"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-cljfmt "0.5.6"]]
  :cljsbuild
  {:builds {:dev {:source-paths ["src/cljs"]
                  :compiler {:output-to "../dist/assets/js/wrappers.js"
                             :output-dir "../dist/assets/js/out"
                             :asset-path "./assets/js/out"
                             :main "wrappers.milia"
                             :optimizations :none
                             :pretty-print true
                             :source-map true}}
            :prod {:source-paths ["src/cljs"]
                   :compiler {:output-to "../dist/assets/js/wrappers.js"
                              :optimizations :advanced
                              :pretty-print false}}}})
