// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('milia.utils.metadata');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('milia.api.http');
goog.require('milia.utils.remote');
/**
 * Fetch `metadata` with query key `id-key` and value `id`.
 */
milia.utils.metadata.metadata_files = (function milia$utils$metadata$metadata_files(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17725 = arguments.length;
var i__11124__auto___17726 = (0);
while(true){
if((i__11124__auto___17726 < len__11123__auto___17725)){
args__11130__auto__.push((arguments[i__11124__auto___17726]));

var G__17727 = (i__11124__auto___17726 + (1));
i__11124__auto___17726 = G__17727;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((3) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((3)),(0),null)):null);
return milia.utils.metadata.metadata_files.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11131__auto__);
});

milia.utils.metadata.metadata_files.cljs$core$IFn$_invoke$arity$variadic = (function (id_key,id,no_cache_QMARK_,p__17722){
var map__17723 = p__17722;
var map__17723__$1 = ((((!((map__17723 == null)))?((((map__17723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17723):map__17723);
var extra_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17723__$1,cljs.core.cst$kw$extra_DASH_params);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["metadata"], 0)),cljs.core.array_seq([cljs.core.cst$kw$no_DASH_cache_QMARK_,no_cache_QMARK_,cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_params,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,id]),extra_params),cljs.core.cst$kw$content_DASH_type,cljs.core.cst$kw$json], null)], 0));
});

milia.utils.metadata.metadata_files.cljs$lang$maxFixedArity = (3);

milia.utils.metadata.metadata_files.cljs$lang$applyTo = (function (seq17718){
var G__17719 = cljs.core.first(seq17718);
var seq17718__$1 = cljs.core.next(seq17718);
var G__17720 = cljs.core.first(seq17718__$1);
var seq17718__$2 = cljs.core.next(seq17718__$1);
var G__17721 = cljs.core.first(seq17718__$2);
var seq17718__$3 = cljs.core.next(seq17718__$2);
return milia.utils.metadata.metadata_files.cljs$core$IFn$_invoke$arity$variadic(G__17719,G__17720,G__17721,seq17718__$3);
});

