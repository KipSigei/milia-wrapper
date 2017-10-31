// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__9998__auto__ = v;
if(cljs.core.truth_(and__9998__auto__)){
return (v > (0));
} else {
return and__9998__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17002_SHARP_,p2__17001_SHARP_){
var vec__17006 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__17001_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17002_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17009_SHARP_){
return cljs_http.client.encode_val(k,p1__17009_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__17010){
var vec__17014 = p__17010;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17014,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__17017_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17017_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__9998__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__9998__auto__){
var and__9998__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__9998__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__9998__auto____$1;
}
} else {
return and__9998__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17019 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17019) : client.call(null,G__17019));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17020_SHARP_){
return cljs_http.client.decode_body(p1__17020_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17028 = arguments.length;
var i__11124__auto___17029 = (0);
while(true){
if((i__11124__auto___17029 < len__11123__auto___17028)){
args__11130__auto__.push((arguments[i__11124__auto___17029]));

var G__17030 = (i__11124__auto___17029 + (1));
i__11124__auto___17029 = G__17030;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17023){
var vec__17024 = p__17023;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17024,(0),null);
return ((function (vec__17024,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__10010__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__10010__auto__)){
return or__10010__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__17027 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17027) : client.call(null,G__17027));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17024,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq17021){
var G__17022 = cljs.core.first(seq17021);
var seq17021__$1 = cljs.core.next(seq17021);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__17022,seq17021__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17038 = arguments.length;
var i__11124__auto___17039 = (0);
while(true){
if((i__11124__auto___17039 < len__11123__auto___17038)){
args__11130__auto__.push((arguments[i__11124__auto___17039]));

var G__17040 = (i__11124__auto___17039 + (1));
i__11124__auto___17039 = G__17040;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17033){
var vec__17034 = p__17033;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17034,(0),null);
return ((function (vec__17034,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__10010__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__10010__auto__)){
return or__10010__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__17037 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17037) : client.call(null,G__17037));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17034,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq17031){
var G__17032 = cljs.core.first(seq17031);
var seq17031__$1 = cljs.core.next(seq17031);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__17032,seq17031__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17048 = arguments.length;
var i__11124__auto___17049 = (0);
while(true){
if((i__11124__auto___17049 < len__11123__auto___17048)){
args__11130__auto__.push((arguments[i__11124__auto___17049]));

var G__17050 = (i__11124__auto___17049 + (1));
i__11124__auto___17049 = G__17050;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17043){
var vec__17044 = p__17043;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17044,(0),null);
return ((function (vec__17044,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__10010__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__10010__auto__)){
return or__10010__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__17047 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17047) : client.call(null,G__17047));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17044,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq17041){
var G__17042 = cljs.core.first(seq17041);
var seq17041__$1 = cljs.core.next(seq17041);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__17042,seq17041__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__17054 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17054__$1 = ((((!((map__17054 == null)))?((((map__17054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17054):map__17054);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17054__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17054__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17056 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17056) : client.call(null,G__17056));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__17061 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17061__$1 = ((((!((map__17061 == null)))?((((map__17061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17061):map__17061);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17061__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17061__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__17061,map__17061__$1,decoding,decoding_opts){
return (function (p1__17057_SHARP_){
return cljs_http.util.transit_decode(p1__17057_SHARP_,decoding,decoding_opts);
});})(map__17061,map__17061__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__17061,map__17061__$1,decoding,decoding_opts,transit_decode){
return (function (p1__17058_SHARP_){
return cljs_http.client.decode_body(p1__17058_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__17061,map__17061__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17064 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17064) : client.call(null,G__17064));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17065_SHARP_){
return cljs_http.client.decode_body(p1__17065_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__17070){
var map__17071 = p__17070;
var map__17071__$1 = ((((!((map__17071 == null)))?((((map__17071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17071):map__17071);
var req = map__17071__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__17073 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17073) : client.call(null,G__17073));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__17078){
var map__17079 = p__17078;
var map__17079__$1 = ((((!((map__17079 == null)))?((((map__17079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17079):map__17079);
var request = map__17079__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17079__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17079__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17079__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__9998__auto__ = form_params;
if(cljs.core.truth_(and__9998__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__9998__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__17081 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17081) : client.call(null,G__17081));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__17092_17102 = cljs.core.seq(params);
var chunk__17093_17103 = null;
var count__17094_17104 = (0);
var i__17095_17105 = (0);
while(true){
if((i__17095_17105 < count__17094_17104)){
var vec__17096_17106 = chunk__17093_17103.cljs$core$IIndexed$_nth$arity$2(null,i__17095_17105);
var k_17107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096_17106,(0),null);
var v_17108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096_17106,(1),null);
if(cljs.core.coll_QMARK_(v_17108)){
form_data.append(cljs.core.name(k_17107),cljs.core.first(v_17108),cljs.core.second(v_17108));
} else {
form_data.append(cljs.core.name(k_17107),v_17108);
}

var G__17109 = seq__17092_17102;
var G__17110 = chunk__17093_17103;
var G__17111 = count__17094_17104;
var G__17112 = (i__17095_17105 + (1));
seq__17092_17102 = G__17109;
chunk__17093_17103 = G__17110;
count__17094_17104 = G__17111;
i__17095_17105 = G__17112;
continue;
} else {
var temp__4657__auto___17113 = cljs.core.seq(seq__17092_17102);
if(temp__4657__auto___17113){
var seq__17092_17114__$1 = temp__4657__auto___17113;
if(cljs.core.chunked_seq_QMARK_(seq__17092_17114__$1)){
var c__10829__auto___17115 = cljs.core.chunk_first(seq__17092_17114__$1);
var G__17116 = cljs.core.chunk_rest(seq__17092_17114__$1);
var G__17117 = c__10829__auto___17115;
var G__17118 = cljs.core.count(c__10829__auto___17115);
var G__17119 = (0);
seq__17092_17102 = G__17116;
chunk__17093_17103 = G__17117;
count__17094_17104 = G__17118;
i__17095_17105 = G__17119;
continue;
} else {
var vec__17099_17120 = cljs.core.first(seq__17092_17114__$1);
var k_17121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099_17120,(0),null);
var v_17122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099_17120,(1),null);
if(cljs.core.coll_QMARK_(v_17122)){
form_data.append(cljs.core.name(k_17121),cljs.core.first(v_17122),cljs.core.second(v_17122));
} else {
form_data.append(cljs.core.name(k_17121),v_17122);
}

var G__17123 = cljs.core.next(seq__17092_17114__$1);
var G__17124 = null;
var G__17125 = (0);
var G__17126 = (0);
seq__17092_17102 = G__17123;
chunk__17093_17103 = G__17124;
count__17094_17104 = G__17125;
i__17095_17105 = G__17126;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__17131){
var map__17132 = p__17131;
var map__17132__$1 = ((((!((map__17132 == null)))?((((map__17132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17132):map__17132);
var request = map__17132__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17132__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17132__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__9998__auto__ = multipart_params;
if(cljs.core.truth_(and__9998__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__9998__auto__;
}
})())){
var G__17134 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17134) : client.call(null,G__17134));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__17136 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17136) : client.call(null,G__17136));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__17137_SHARP_){
var G__17139 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17137_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17139) : client.call(null,G__17139));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__17145){
var map__17146 = p__17145;
var map__17146__$1 = ((((!((map__17146 == null)))?((((map__17146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17146):map__17146);
var req = map__17146__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17146__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__17148 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__17146,map__17146__$1,req,query_params){
return (function (p1__17140_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__17140_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__17146,map__17146__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17148) : client.call(null,G__17148));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17156 = arguments.length;
var i__11124__auto___17157 = (0);
while(true){
if((i__11124__auto___17157 < len__11123__auto___17156)){
args__11130__auto__.push((arguments[i__11124__auto___17157]));

var G__17158 = (i__11124__auto___17157 + (1));
i__11124__auto___17157 = G__17158;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17151){
var vec__17152 = p__17151;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17152,(0),null);
return ((function (vec__17152,credentials){
return (function (req){
var credentials__$1 = (function (){var or__10010__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__10010__auto__)){
return or__10010__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__17155 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17155) : client.call(null,G__17155));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__17152,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq17149){
var G__17150 = cljs.core.first(seq17149);
var seq17149__$1 = cljs.core.next(seq17149);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__17150,seq17149__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__17160 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17160) : client.call(null,G__17160));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17168 = arguments.length;
var i__11124__auto___17169 = (0);
while(true){
if((i__11124__auto___17169 < len__11123__auto___17168)){
args__11130__auto__.push((arguments[i__11124__auto___17169]));

var G__17170 = (i__11124__auto___17169 + (1));
i__11124__auto___17169 = G__17170;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17163){
var vec__17164 = p__17163;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17164,(0),null);
var G__17167 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17167) : cljs_http.client.request.call(null,G__17167));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq17161){
var G__17162 = cljs.core.first(seq17161);
var seq17161__$1 = cljs.core.next(seq17161);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__17162,seq17161__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17178 = arguments.length;
var i__11124__auto___17179 = (0);
while(true){
if((i__11124__auto___17179 < len__11123__auto___17178)){
args__11130__auto__.push((arguments[i__11124__auto___17179]));

var G__17180 = (i__11124__auto___17179 + (1));
i__11124__auto___17179 = G__17180;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17173){
var vec__17174 = p__17173;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17174,(0),null);
var G__17177 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17177) : cljs_http.client.request.call(null,G__17177));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq17171){
var G__17172 = cljs.core.first(seq17171);
var seq17171__$1 = cljs.core.next(seq17171);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__17172,seq17171__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17188 = arguments.length;
var i__11124__auto___17189 = (0);
while(true){
if((i__11124__auto___17189 < len__11123__auto___17188)){
args__11130__auto__.push((arguments[i__11124__auto___17189]));

var G__17190 = (i__11124__auto___17189 + (1));
i__11124__auto___17189 = G__17190;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17183){
var vec__17184 = p__17183;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17184,(0),null);
var G__17187 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17187) : cljs_http.client.request.call(null,G__17187));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq17181){
var G__17182 = cljs.core.first(seq17181);
var seq17181__$1 = cljs.core.next(seq17181);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__17182,seq17181__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17198 = arguments.length;
var i__11124__auto___17199 = (0);
while(true){
if((i__11124__auto___17199 < len__11123__auto___17198)){
args__11130__auto__.push((arguments[i__11124__auto___17199]));

var G__17200 = (i__11124__auto___17199 + (1));
i__11124__auto___17199 = G__17200;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17193){
var vec__17194 = p__17193;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17194,(0),null);
var G__17197 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17197) : cljs_http.client.request.call(null,G__17197));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq17191){
var G__17192 = cljs.core.first(seq17191);
var seq17191__$1 = cljs.core.next(seq17191);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__17192,seq17191__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17208 = arguments.length;
var i__11124__auto___17209 = (0);
while(true){
if((i__11124__auto___17209 < len__11123__auto___17208)){
args__11130__auto__.push((arguments[i__11124__auto___17209]));

var G__17210 = (i__11124__auto___17209 + (1));
i__11124__auto___17209 = G__17210;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17203){
var vec__17204 = p__17203;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17204,(0),null);
var G__17207 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17207) : cljs_http.client.request.call(null,G__17207));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq17201){
var G__17202 = cljs.core.first(seq17201);
var seq17201__$1 = cljs.core.next(seq17201);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__17202,seq17201__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17218 = arguments.length;
var i__11124__auto___17219 = (0);
while(true){
if((i__11124__auto___17219 < len__11123__auto___17218)){
args__11130__auto__.push((arguments[i__11124__auto___17219]));

var G__17220 = (i__11124__auto___17219 + (1));
i__11124__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17213){
var vec__17214 = p__17213;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17214,(0),null);
var G__17217 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17217) : cljs_http.client.request.call(null,G__17217));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq17211){
var G__17212 = cljs.core.first(seq17211);
var seq17211__$1 = cljs.core.next(seq17211);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__17212,seq17211__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17228 = arguments.length;
var i__11124__auto___17229 = (0);
while(true){
if((i__11124__auto___17229 < len__11123__auto___17228)){
args__11130__auto__.push((arguments[i__11124__auto___17229]));

var G__17230 = (i__11124__auto___17229 + (1));
i__11124__auto___17229 = G__17230;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17223){
var vec__17224 = p__17223;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17224,(0),null);
var G__17227 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17227) : cljs_http.client.request.call(null,G__17227));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq17221){
var G__17222 = cljs.core.first(seq17221);
var seq17221__$1 = cljs.core.next(seq17221);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__17222,seq17221__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17238 = arguments.length;
var i__11124__auto___17239 = (0);
while(true){
if((i__11124__auto___17239 < len__11123__auto___17238)){
args__11130__auto__.push((arguments[i__11124__auto___17239]));

var G__17240 = (i__11124__auto___17239 + (1));
i__11124__auto___17239 = G__17240;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17233){
var vec__17234 = p__17233;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17234,(0),null);
var G__17237 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17237) : cljs_http.client.request.call(null,G__17237));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq17231){
var G__17232 = cljs.core.first(seq17231);
var seq17231__$1 = cljs.core.next(seq17231);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__17232,seq17231__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17248 = arguments.length;
var i__11124__auto___17249 = (0);
while(true){
if((i__11124__auto___17249 < len__11123__auto___17248)){
args__11130__auto__.push((arguments[i__11124__auto___17249]));

var G__17250 = (i__11124__auto___17249 + (1));
i__11124__auto___17249 = G__17250;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17243){
var vec__17244 = p__17243;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17244,(0),null);
var G__17247 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17247) : cljs_http.client.request.call(null,G__17247));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq17241){
var G__17242 = cljs.core.first(seq17241);
var seq17241__$1 = cljs.core.next(seq17241);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__17242,seq17241__$1);
});

