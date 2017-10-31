// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chimera.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
chimera.core.any_QMARK_ = cljs.core.complement(cljs.core.not_any_QMARK_);
chimera.core.not_nil_QMARK_ = cljs.core.complement(cljs.core.nil_QMARK_);
chimera.core.strict_map = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.doall,cljs.core.map);
