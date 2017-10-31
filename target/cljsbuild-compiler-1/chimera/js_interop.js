// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chimera.js_interop');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('goog.string');
/**
 * Convert json string to cljs object using transit.
 * Fast, but doesn't preserve keywords.
 */
chimera.js_interop.json__GT_cljs = (function chimera$js_interop$json__GT_cljs(s){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),s);
});
/**
 * Convert json to js using JSON.parse.
 * If error occurs, return the string unmodified.
 */
chimera.js_interop.str__GT_json = (function chimera$js_interop$str__GT_json(string){
try{return JSON.parse(string);
}catch (e14291){if((e14291 instanceof Error)){
var _ = e14291;
return string;
} else {
throw e14291;

}
}});
/**
 * Convert json string to cljs via js.
 * Slow method, but preserves keywords, and appropriate for small json.
 */
chimera.js_interop.json__GT_js__GT_cljs = (function chimera$js_interop$json__GT_js__GT_cljs(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(chimera.js_interop.str__GT_json(s),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});
/**
 * Formats a string using goog.string.format, so we can use format in cljx.
 */
chimera.js_interop.format = (function chimera$js_interop$format(var_args){
var args__11130__auto__ = [];
var len__11123__auto___14294 = arguments.length;
var i__11124__auto___14295 = (0);
while(true){
if((i__11124__auto___14295 < len__11123__auto___14294)){
args__11130__auto__.push((arguments[i__11124__auto___14295]));

var G__14296 = (i__11124__auto___14295 + (1));
i__11124__auto___14295 = G__14296;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return chimera.js_interop.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

chimera.js_interop.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

chimera.js_interop.format.cljs$lang$maxFixedArity = (1);

chimera.js_interop.format.cljs$lang$applyTo = (function (seq14292){
var G__14293 = cljs.core.first(seq14292);
var seq14292__$1 = cljs.core.next(seq14292);
return chimera.js_interop.format.cljs$core$IFn$_invoke$arity$variadic(G__14293,seq14292__$1);
});

/**
 * Create a safe (escaped) js regex out of a string.
 * By default, creates regex with ignore case option.
 */
chimera.js_interop.safe_regex = (function chimera$js_interop$safe_regex(var_args){
var args__11130__auto__ = [];
var len__11123__auto___14302 = arguments.length;
var i__11124__auto___14303 = (0);
while(true){
if((i__11124__auto___14303 < len__11123__auto___14302)){
args__11130__auto__.push((arguments[i__11124__auto___14303]));

var G__14304 = (i__11124__auto___14303 + (1));
i__11124__auto___14303 = G__14304;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return chimera.js_interop.safe_regex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

chimera.js_interop.safe_regex.cljs$core$IFn$_invoke$arity$variadic = (function (query_string,p__14299){
var map__14300 = p__14299;
var map__14300__$1 = ((((!((map__14300 == null)))?((((map__14300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14300):map__14300);
var ignore_case_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14300__$1,cljs.core.cst$kw$ignore_DASH_case_QMARK_,true);
return cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ignore_case_QMARK_)?"(?i)":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.regExpEscape(query_string))].join(''));
});

chimera.js_interop.safe_regex.cljs$lang$maxFixedArity = (1);

chimera.js_interop.safe_regex.cljs$lang$applyTo = (function (seq14297){
var G__14298 = cljs.core.first(seq14297);
var seq14297__$1 = cljs.core.next(seq14297);
return chimera.js_interop.safe_regex.cljs$core$IFn$_invoke$arity$variadic(G__14298,seq14297__$1);
});

