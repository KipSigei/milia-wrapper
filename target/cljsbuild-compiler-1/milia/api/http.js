// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('milia.api.http');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('milia.api.io');
goog.require('cljs_hash.md5');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
/**
 * Send and parse an HTTP response as JSON.
 * Additional arguments modify beavior of parse-http:
 * In both: `raw-response?`, `filename`, `http-options`.
 * In CLJ: `suppress-4xx-exceptions?`, `as-map?`.
 * In CLJS: `accept-header` `callback`, `no-cache?`.
 * When a request fails for one of the following reasons, an exception is thrown
 * with a map containing a `:reason` key, and an optional `:detail` key
 *  1. No response: {:reason :no-http-response}
 *  2. 4xx response: {:reason :http-client-error
 *                    :detail {:status-code <status-code>
 *                             :response <parsed-json-from-server>}
 *  3. 5xx response: {:reason :http-server-error
 *                    :detail {:response <raw-response>
 *                             :status-code <status-code>}
 */
milia.api.http.parse_http = (function milia$api$http$parse_http(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17676 = arguments.length;
var i__11124__auto___17677 = (0);
while(true){
if((i__11124__auto___17677 < len__11123__auto___17676)){
args__11130__auto__.push((arguments[i__11124__auto___17677]));

var G__17678 = (i__11124__auto___17677 + (1));
i__11124__auto___17677 = G__17678;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,p__17660){
var map__17661 = p__17660;
var map__17661__$1 = ((((!((map__17661 == null)))?((((map__17661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17661):map__17661);
var http_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$http_DASH_options);
var accept_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$accept_DASH_header);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$callback);
var as_map_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$as_DASH_map_QMARK_);
var auth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$auth_DASH_token);
var suppress_4xx_exceptions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_);
var must_revalidate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$must_DASH_revalidate_QMARK_);
var no_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$no_DASH_cache_QMARK_);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$filename);
var raw_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,cljs.core.cst$kw$raw_DASH_response_QMARK_);
if(cljs.core.truth_(filename)){
throw (new Error("File downloads auth not supported via JS"));
} else {
var request_fn = (cljs.core.truth_(raw_response_QMARK_)?milia.api.io.raw_request:cljs_http.client.request);
var headers = milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$get_DASH_crsftoken_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,cljs.core.cst$kw$get),cljs.core.cst$kw$must_DASH_revalidate_QMARK_,must_revalidate_QMARK_,cljs.core.cst$kw$accept_DASH_header,accept_header,cljs.core.cst$kw$auth_DASH_token,auth_token], 0));
var ch = milia.api.io.http_request.cljs$core$IFn$_invoke$arity$variadic(request_fn,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([milia.api.io.build_http_options(http_options,method,no_cache_QMARK_),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$headers,headers,cljs.core.cst$kw$method,method,cljs.core.cst$kw$url,url], null)], 0))], 0));
if(cljs.core.truth_(callback)){
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14551__auto__,request_fn,headers,ch,map__17661,map__17661__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_){
return (function (){
var f__14552__auto__ = (function (){var switch__14173__auto__ = ((function (c__14551__auto__,request_fn,headers,ch,map__17661,map__17661__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_){
return (function (state_17667){
var state_val_17668 = (state_17667[(1)]);
if((state_val_17668 === (1))){
var state_17667__$1 = state_17667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17667__$1,(2),ch);
} else {
if((state_val_17668 === (2))){
var inst_17664 = (state_17667[(2)]);
var inst_17665 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_17664) : callback.call(null,inst_17664));
var state_17667__$1 = state_17667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17667__$1,inst_17665);
} else {
return null;
}
}
});})(c__14551__auto__,request_fn,headers,ch,map__17661,map__17661__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_))
;
return ((function (switch__14173__auto__,c__14551__auto__,request_fn,headers,ch,map__17661,map__17661__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_){
return (function() {
var milia$api$http$state_machine__14174__auto__ = null;
var milia$api$http$state_machine__14174__auto____0 = (function (){
var statearr_17672 = [null,null,null,null,null,null,null];
(statearr_17672[(0)] = milia$api$http$state_machine__14174__auto__);

(statearr_17672[(1)] = (1));

return statearr_17672;
});
var milia$api$http$state_machine__14174__auto____1 = (function (state_17667){
while(true){
var ret_value__14175__auto__ = (function (){try{while(true){
var result__14176__auto__ = switch__14173__auto__(state_17667);
if(cljs.core.keyword_identical_QMARK_(result__14176__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14176__auto__;
}
break;
}
}catch (e17673){if((e17673 instanceof Object)){
var ex__14177__auto__ = e17673;
var statearr_17674_17679 = state_17667;
(statearr_17674_17679[(5)] = ex__14177__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17667);

return cljs.core.cst$kw$recur;
} else {
throw e17673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14175__auto__,cljs.core.cst$kw$recur)){
var G__17680 = state_17667;
state_17667 = G__17680;
continue;
} else {
return ret_value__14175__auto__;
}
break;
}
});
milia$api$http$state_machine__14174__auto__ = function(state_17667){
switch(arguments.length){
case 0:
return milia$api$http$state_machine__14174__auto____0.call(this);
case 1:
return milia$api$http$state_machine__14174__auto____1.call(this,state_17667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
milia$api$http$state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$0 = milia$api$http$state_machine__14174__auto____0;
milia$api$http$state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$1 = milia$api$http$state_machine__14174__auto____1;
return milia$api$http$state_machine__14174__auto__;
})()
;})(switch__14173__auto__,c__14551__auto__,request_fn,headers,ch,map__17661,map__17661__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_))
})();
var state__14553__auto__ = (function (){var statearr_17675 = (f__14552__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14552__auto__.cljs$core$IFn$_invoke$arity$0() : f__14552__auto__.call(null));
(statearr_17675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14551__auto__);

return statearr_17675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(c__14551__auto__,request_fn,headers,ch,map__17661,map__17661__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_))
);

return c__14551__auto__;
} else {
return ch;
}
}
});

milia.api.http.parse_http.cljs$lang$maxFixedArity = (2);

milia.api.http.parse_http.cljs$lang$applyTo = (function (seq17657){
var G__17658 = cljs.core.first(seq17657);
var seq17657__$1 = cljs.core.next(seq17657);
var G__17659 = cljs.core.first(seq17657__$1);
var seq17657__$2 = cljs.core.next(seq17657__$1);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(G__17658,G__17659,seq17657__$2);
});

/**
 * Promise-based HTTP requests
 */
milia.api.http.parse_http_promise = (function milia$api$http$parse_http_promise(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17687 = arguments.length;
var i__11124__auto___17688 = (0);
while(true){
if((i__11124__auto___17688 < len__11123__auto___17687)){
args__11130__auto__.push((arguments[i__11124__auto___17688]));

var G__17689 = (i__11124__auto___17688 + (1));
i__11124__auto___17688 = G__17689;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia.api.http.parse_http_promise.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia.api.http.parse_http_promise.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,p__17684){
var map__17685 = p__17684;
var map__17685__$1 = ((((!((map__17685 == null)))?((((map__17685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17685):map__17685);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,cljs.core.cst$kw$callback);
var http_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,cljs.core.cst$kw$http_DASH_options);
var must_revalidate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,cljs.core.cst$kw$must_DASH_revalidate_QMARK_);
var accept_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,cljs.core.cst$kw$accept_DASH_header);
var auth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,cljs.core.cst$kw$auth_DASH_token);
var no_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,cljs.core.cst$kw$no_DASH_cache_QMARK_);
var headers = milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$get_DASH_crsftoken_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,cljs.core.cst$kw$get),cljs.core.cst$kw$must_DASH_revalidate_QMARK_,must_revalidate_QMARK_,cljs.core.cst$kw$accept_DASH_header,accept_header,cljs.core.cst$kw$auth_DASH_token,auth_token], 0));
var built_http_options = milia.api.io.build_http_options(http_options,method,no_cache_QMARK_);
var promise = milia.api.io.promise_http_request(method,url,built_http_options,headers);
return promise;
});

milia.api.http.parse_http_promise.cljs$lang$maxFixedArity = (2);

milia.api.http.parse_http_promise.cljs$lang$applyTo = (function (seq17681){
var G__17682 = cljs.core.first(seq17681);
var seq17681__$1 = cljs.core.next(seq17681);
var G__17683 = cljs.core.first(seq17681__$1);
var seq17681__$2 = cljs.core.next(seq17681__$1);
return milia.api.http.parse_http_promise.cljs$core$IFn$_invoke$arity$variadic(G__17682,G__17683,seq17681__$2);
});

