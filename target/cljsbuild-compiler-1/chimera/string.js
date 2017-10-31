// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chimera.string');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chimera.core');
/**
 * Checks if a variable is null
 */
chimera.string.is_null_QMARK_ = (function chimera$string$is_null_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("null",s);
});
chimera.string.is_not_null_QMARK_ = cljs.core.complement(chimera.string.is_null_QMARK_);
/**
 * True if substring is a substring of string
 */
chimera.string.substring_QMARK_ = (function chimera$string$substring_QMARK_(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17317 = arguments.length;
var i__11124__auto___17318 = (0);
while(true){
if((i__11124__auto___17318 < len__11123__auto___17317)){
args__11130__auto__.push((arguments[i__11124__auto___17318]));

var G__17319 = (i__11124__auto___17318 + (1));
i__11124__auto___17318 = G__17319;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return chimera.string.substring_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

chimera.string.substring_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (substring,string,p__17313){
var map__17314 = p__17313;
var map__17314__$1 = ((((!((map__17314 == null)))?((((map__17314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17314):map__17314);
var case_sensitive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17314__$1,cljs.core.cst$kw$case_DASH_sensitive_QMARK_,true);
if(cljs.core.truth_((function (){var or__10010__auto__ = cljs.core.empty_QMARK_(string);
if(or__10010__auto__){
return or__10010__auto__;
} else {
return chimera.string.is_null_QMARK_(string);
}
})())){
return false;
} else {
var G__17316 = cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(case_sensitive_QMARK_)?null:"(?i)")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(substring)].join('')),string);
return (chimera.core.not_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? chimera.core.not_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17316) : chimera.core.not_nil_QMARK_.call(null,G__17316));
}
});

chimera.string.substring_QMARK_.cljs$lang$maxFixedArity = (2);

chimera.string.substring_QMARK_.cljs$lang$applyTo = (function (seq17310){
var G__17311 = cljs.core.first(seq17310);
var seq17310__$1 = cljs.core.next(seq17310);
var G__17312 = cljs.core.first(seq17310__$1);
var seq17310__$2 = cljs.core.next(seq17310__$1);
return chimera.string.substring_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__17311,G__17312,seq17310__$2);
});

