// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chimera.urls');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
/**
 * Get last parameter form url
 */
chimera.urls.last_url_param = (function chimera$urls$last_url_param(url){
var last_param = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\//));
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_param)].join(''),/.json/));
});
/**
 * Append string args with slashes and prefix with a slash.
 */
chimera.urls.url = (function chimera$urls$url(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17402 = arguments.length;
var i__11124__auto___17403 = (0);
while(true){
if((i__11124__auto___17403 < len__11123__auto___17402)){
args__11130__auto__.push((arguments[i__11124__auto___17403]));

var G__17404 = (i__11124__auto___17403 + (1));
i__11124__auto___17403 = G__17404;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return chimera.urls.url.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

chimera.urls.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,args)))].join('');
});

chimera.urls.url.cljs$lang$maxFixedArity = (0);

chimera.urls.url.cljs$lang$applyTo = (function (seq17401){
return chimera.urls.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17401));
});

