// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('milia.api.io');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.XhrIo');
goog.require('goog.net.IframeIo');
goog.require('chimera.seq');
goog.require('chimera.string');
goog.require('cljs.core.async');
goog.require('cljs_hash.md5');
goog.require('cljs_http.client');
goog.require('cljs_http.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.net.cookies');
goog.require('goog.events');
goog.require('milia.utils.remote');
/**
 * Build http-options based on arguments.
 */
milia.api.io.build_http_options = (function milia$api$io$build_http_options(http_options,method,no_cache_QMARK_){
var stateful_method_QMARK_ = chimera.seq.in_QMARK_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$post,cljs.core.cst$kw$put,cljs.core.cst$kw$patch], null),method);
var param_key = (cljs.core.truth_(stateful_method_QMARK_)?cljs.core.cst$kw$form_DASH_params:cljs.core.cst$kw$query_DASH_params);
var http_options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(http_options,cljs.core.cst$kw$with_DASH_credentials_QMARK_,false);
var G__17447 = http_options__$1;
if(cljs.core.truth_((function (){var and__9998__auto__ = no_cache_QMARK_;
if(cljs.core.truth_(and__9998__auto__)){
return (cljs.core.not(cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(http_options__$1))) && (cljs.core.not(stateful_method_QMARK_));
} else {
return and__9998__auto__;
}
})())){
return cljs.core.assoc_in(G__17447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_key,cljs.core.cst$kw$t], null),(function (){var G__17448 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())].join('');
return (cljs_hash.md5.md5.cljs$core$IFn$_invoke$arity$1 ? cljs_hash.md5.md5.cljs$core$IFn$_invoke$arity$1(G__17448) : cljs_hash.md5.md5.call(null,G__17448));
})());
} else {
return G__17447;
}
});
/**
 * An almost 'batteries-included' request, similar to cljs-http.client/request.
 * Contains everything except response decoding.
 */
milia.api.io.raw_request = cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_json_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(cljs_http.core.request))))))))));
/**
 * Builds request headers for the HTTP request by adding
 *   Authorization, X-CSRFToken and Cache-control headers where necessary
 */
milia.api.io.token__GT_headers = (function milia$api$io$token__GT_headers(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17453 = arguments.length;
var i__11124__auto___17454 = (0);
while(true){
if((i__11124__auto___17454 < len__11123__auto___17453)){
args__11130__auto__.push((arguments[i__11124__auto___17454]));

var G__17455 = (i__11124__auto___17454 + (1));
i__11124__auto___17454 = G__17455;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic = (function (p__17450){
var map__17451 = p__17450;
var map__17451__$1 = ((((!((map__17451 == null)))?((((map__17451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17451):map__17451);
var get_crsftoken_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,cljs.core.cst$kw$get_DASH_crsftoken_QMARK_);
var must_revalidate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,cljs.core.cst$kw$must_DASH_revalidate_QMARK_);
var accept_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,cljs.core.cst$kw$accept_DASH_header);
var auth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,cljs.core.cst$kw$auth_DASH_token);
var temp_token = cljs.core.cst$kw$temp_DASH_token.cljs$core$IFn$_invoke$arity$1(milia.utils.remote._STAR_credentials_STAR_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(auth_token)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Authorization",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Token "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth_token)].join('')], null):(cljs.core.truth_((function (){var and__9998__auto__ = cljs.core.not_empty(temp_token);
if(cljs.core.truth_(and__9998__auto__)){
return (chimera.string.is_not_null_QMARK_.cljs$core$IFn$_invoke$arity$1 ? chimera.string.is_not_null_QMARK_.cljs$core$IFn$_invoke$arity$1(temp_token) : chimera.string.is_not_null_QMARK_.call(null,temp_token));
} else {
return and__9998__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Authorization",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("TempToken "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(temp_token)].join('')], null):null)),(cljs.core.truth_(must_revalidate_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cache-control","must-revalidate"], null):null),(function (){var temp__4657__auto__ = (function (){var and__9998__auto__ = get_crsftoken_QMARK_;
if(cljs.core.truth_(and__9998__auto__)){
return goog.net.cookies.get("csrftoken");
} else {
return and__9998__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var crsf_token = temp__4657__auto__;
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X-CSRFToken",crsf_token], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X-CSRF-Token",crsf_token], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Accept",(function (){var or__10010__auto__ = accept_header;
if(cljs.core.truth_(or__10010__auto__)){
return or__10010__auto__;
} else {
return "application/json";
}
})()], null)], null));
});

milia.api.io.token__GT_headers.cljs$lang$maxFixedArity = (0);

milia.api.io.token__GT_headers.cljs$lang$applyTo = (function (seq17449){
return milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17449));
});

/**
 * Get the response out of an object that watches an async/xhr request.
 * JsIoObject, Maybe {Keyword Bool} -> {:keyword }
 */
milia.api.io.get_xhr_io_response = (function milia$api$io$get_xhr_io_response(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17465 = arguments.length;
var i__11124__auto___17466 = (0);
while(true){
if((i__11124__auto___17466 < len__11123__auto___17465)){
args__11130__auto__.push((arguments[i__11124__auto___17466]));

var G__17467 = (i__11124__auto___17466 + (1));
i__11124__auto___17466 = G__17467;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic = (function (io_obj,p__17458){
var vec__17459 = p__17458;
var map__17462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17459,(0),null);
var map__17462__$1 = ((((!((map__17462 == null)))?((((map__17462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17462):map__17462);
var require_json_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17462__$1,cljs.core.cst$kw$require_DASH_json_QMARK_);
if(cljs.core.truth_(require_json_QMARK_)){
try{return io_obj.getResponseJson();
}catch (e17464){if((e17464 instanceof Error)){
var _ = e17464;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,io_obj.getResponseText()], null);
} else {
throw e17464;

}
}} else {
return io_obj.getResponseText();
}
});

milia.api.io.get_xhr_io_response.cljs$lang$maxFixedArity = (1);

milia.api.io.get_xhr_io_response.cljs$lang$applyTo = (function (seq17456){
var G__17457 = cljs.core.first(seq17456);
var seq17456__$1 = cljs.core.next(seq17456);
return milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic(G__17457,seq17456__$1);
});

milia.api.io.upload_via_iframe = (function milia$api$io$upload_via_iframe(form,form_api,event_chan){
var io_obj = (new goog.net.IframeIo());
var G__17474_17480 = io_obj;
var G__17475_17481 = goog.net.EventType.SUCCESS;
var G__17476_17482 = ((function (G__17474_17480,G__17475_17481,io_obj){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(event_chan,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,io_obj.getResponseText()], null));
});})(G__17474_17480,G__17475_17481,io_obj))
;
goog.events.listen(G__17474_17480,G__17475_17481,G__17476_17482);

var G__17477_17483 = io_obj;
var G__17478_17484 = goog.net.EventType.ERROR;
var G__17479_17485 = ((function (G__17477_17483,G__17478_17484,io_obj){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(event_chan,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,io_obj.getResponseText()], null));
});})(G__17477_17483,G__17478_17484,io_obj))
;
goog.events.listen(G__17477_17483,G__17478_17484,G__17479_17485);

return io_obj.sendFromForm(form,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_api),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?legacy=true")].join(''));
});
/**
 * Use goog.net.XhrIo to upload file. Receives an HTML form object,
 *   a core.async channel where result message will be put
 *   and (optionally) an id to include in the result message. Returns the
 *   XhrIo object that can be used to abort request. More XhrIo API
 *   docs at: https://goo.gl/B0fm2a
 */
milia.api.io.upload_file = (function milia$api$io$upload_file(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17502 = arguments.length;
var i__11124__auto___17503 = (0);
while(true){
if((i__11124__auto___17503 < len__11123__auto___17502)){
args__11130__auto__.push((arguments[i__11124__auto___17503]));

var G__17504 = (i__11124__auto___17503 + (1));
i__11124__auto___17503 = G__17504;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia.api.io.upload_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia.api.io.upload_file.cljs$core$IFn$_invoke$arity$variadic = (function (form,chan,p__17490){
var map__17491 = p__17490;
var map__17491__$1 = ((((!((map__17491 == null)))?((((map__17491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17491):map__17491);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17491__$1,cljs.core.cst$kw$headers);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17491__$1,cljs.core.cst$kw$id);
var require_json_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17491__$1,cljs.core.cst$kw$require_DASH_json_QMARK_);
var io_obj = (new goog.net.XhrIo());
var data = (cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null):null);
var url = form.action;
io_obj.setProgressEventsEnabled(true);

var G__17493_17505 = io_obj;
var G__17494_17506 = goog.net.EventType.SUCCESS;
var G__17495_17507 = ((function (G__17493_17505,G__17494_17506,io_obj,data,url,map__17491,map__17491__$1,headers,id,require_json_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$data,milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic(io_obj,cljs.core.array_seq([require_json_QMARK_], 0)),cljs.core.array_seq([cljs.core.cst$kw$success_QMARK_,true], 0)));
});})(G__17493_17505,G__17494_17506,io_obj,data,url,map__17491,map__17491__$1,headers,id,require_json_QMARK_))
;
goog.events.listen(G__17493_17505,G__17494_17506,G__17495_17507);

var G__17496_17508 = io_obj;
var G__17497_17509 = goog.net.EventType.ERROR;
var G__17498_17510 = ((function (G__17496_17508,G__17497_17509,io_obj,data,url,map__17491,map__17491__$1,headers,id,require_json_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$data,milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic(io_obj,cljs.core.array_seq([require_json_QMARK_], 0)),cljs.core.array_seq([cljs.core.cst$kw$success_QMARK_,false], 0)));
});})(G__17496_17508,G__17497_17509,io_obj,data,url,map__17491,map__17491__$1,headers,id,require_json_QMARK_))
;
goog.events.listen(G__17496_17508,G__17497_17509,G__17498_17510);

var G__17499_17511 = io_obj;
var G__17500_17512 = goog.net.EventType.PROGRESS;
var G__17501_17513 = ((function (G__17499_17511,G__17500_17512,io_obj,data,url,map__17491,map__17491__$1,headers,id,require_json_QMARK_){
return (function (p1__17486_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$progress,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$length_DASH_computable,p1__17486_SHARP_.lengthComputable,cljs.core.cst$kw$loaded,p1__17486_SHARP_.loaded,cljs.core.cst$kw$total,p1__17486_SHARP_.total], null)));
});})(G__17499_17511,G__17500_17512,io_obj,data,url,map__17491,map__17491__$1,headers,id,require_json_QMARK_))
;
goog.events.listen(G__17499_17511,G__17500_17512,G__17501_17513);

io_obj.send(url,"POST",form,headers);

return io_obj;
});

milia.api.io.upload_file.cljs$lang$maxFixedArity = (2);

milia.api.io.upload_file.cljs$lang$applyTo = (function (seq17487){
var G__17488 = cljs.core.first(seq17487);
var seq17487__$1 = cljs.core.next(seq17487);
var G__17489 = cljs.core.first(seq17487__$1);
var seq17487__$2 = cljs.core.next(seq17487__$1);
return milia.api.io.upload_file.cljs$core$IFn$_invoke$arity$variadic(G__17488,G__17489,seq17487__$2);
});

/**
 * Assume 401s can be either login requests or the temp token has expired.
 */
milia.api.io.handle_401_response = (function milia$api$io$handle_401_response(response_channel,response){
var map__17529 = milia.utils.remote._STAR_credentials_STAR_;
var map__17529__$1 = ((((!((map__17529 == null)))?((((map__17529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17529):map__17529);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17529__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17529__$1,cljs.core.cst$kw$password);
var temp_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17529__$1,cljs.core.cst$kw$temp_DASH_token);
var digest_auth = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$digest_DASH_auth,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [username,password], null)], null);
var login_ch = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["user"], 0)),cljs.core.array_seq([digest_auth], 0));
if(cljs.core.truth_(temp_token)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(response_channel,response);
} else {
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14551__auto__,map__17529,map__17529__$1,username,password,temp_token,digest_auth,login_ch){
return (function (){
var f__14552__auto__ = (function (){var switch__14173__auto__ = ((function (c__14551__auto__,map__17529,map__17529__$1,username,password,temp_token,digest_auth,login_ch){
return (function (state_17535){
var state_val_17536 = (state_17535[(1)]);
if((state_val_17536 === (1))){
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17535__$1,(2),login_ch);
} else {
if((state_val_17536 === (2))){
var inst_17532 = (state_17535[(2)]);
var inst_17533 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(response_channel,inst_17532);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17535__$1,inst_17533);
} else {
return null;
}
}
});})(c__14551__auto__,map__17529,map__17529__$1,username,password,temp_token,digest_auth,login_ch))
;
return ((function (switch__14173__auto__,c__14551__auto__,map__17529,map__17529__$1,username,password,temp_token,digest_auth,login_ch){
return (function() {
var milia$api$io$handle_401_response_$_state_machine__14174__auto__ = null;
var milia$api$io$handle_401_response_$_state_machine__14174__auto____0 = (function (){
var statearr_17540 = [null,null,null,null,null,null,null];
(statearr_17540[(0)] = milia$api$io$handle_401_response_$_state_machine__14174__auto__);

(statearr_17540[(1)] = (1));

return statearr_17540;
});
var milia$api$io$handle_401_response_$_state_machine__14174__auto____1 = (function (state_17535){
while(true){
var ret_value__14175__auto__ = (function (){try{while(true){
var result__14176__auto__ = switch__14173__auto__(state_17535);
if(cljs.core.keyword_identical_QMARK_(result__14176__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14176__auto__;
}
break;
}
}catch (e17541){if((e17541 instanceof Object)){
var ex__14177__auto__ = e17541;
var statearr_17542_17544 = state_17535;
(statearr_17542_17544[(5)] = ex__14177__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17535);

return cljs.core.cst$kw$recur;
} else {
throw e17541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14175__auto__,cljs.core.cst$kw$recur)){
var G__17545 = state_17535;
state_17535 = G__17545;
continue;
} else {
return ret_value__14175__auto__;
}
break;
}
});
milia$api$io$handle_401_response_$_state_machine__14174__auto__ = function(state_17535){
switch(arguments.length){
case 0:
return milia$api$io$handle_401_response_$_state_machine__14174__auto____0.call(this);
case 1:
return milia$api$io$handle_401_response_$_state_machine__14174__auto____1.call(this,state_17535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
milia$api$io$handle_401_response_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$0 = milia$api$io$handle_401_response_$_state_machine__14174__auto____0;
milia$api$io$handle_401_response_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$1 = milia$api$io$handle_401_response_$_state_machine__14174__auto____1;
return milia$api$io$handle_401_response_$_state_machine__14174__auto__;
})()
;})(switch__14173__auto__,c__14551__auto__,map__17529,map__17529__$1,username,password,temp_token,digest_auth,login_ch))
})();
var state__14553__auto__ = (function (){var statearr_17543 = (f__14552__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14552__auto__.cljs$core$IFn$_invoke$arity$0() : f__14552__auto__.call(null));
(statearr_17543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14551__auto__);

return statearr_17543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(c__14551__auto__,map__17529,map__17529__$1,username,password,temp_token,digest_auth,login_ch))
);

return c__14551__auto__;
}
});
/**
 * Wraps cljs-http.client/request and redirects if status is 401
 */
milia.api.io.http_request = (function milia$api$io$http_request(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17610 = arguments.length;
var i__11124__auto___17611 = (0);
while(true){
if((i__11124__auto___17611 < len__11123__auto___17610)){
args__11130__auto__.push((arguments[i__11124__auto___17611]));

var G__17612 = (i__11124__auto___17611 + (1));
i__11124__auto___17611 = G__17612;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return milia.api.io.http_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

milia.api.io.http_request.cljs$core$IFn$_invoke$arity$variadic = (function (request_fn,args){
var response_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__14551__auto___17613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14551__auto___17613,response_channel){
return (function (){
var f__14552__auto__ = (function (){var switch__14173__auto__ = ((function (c__14551__auto___17613,response_channel){
return (function (state_17583){
var state_val_17584 = (state_17583[(1)]);
if((state_val_17584 === (7))){
var state_17583__$1 = state_17583;
var statearr_17585_17614 = state_17583__$1;
(statearr_17585_17614[(2)] = false);

(statearr_17585_17614[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (1))){
var inst_17549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_fn,args);
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17583__$1,(2),inst_17549);
} else {
if((state_val_17584 === (4))){
var state_17583__$1 = state_17583;
var statearr_17586_17615 = state_17583__$1;
(statearr_17586_17615[(2)] = false);

(statearr_17586_17615[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (13))){
var inst_17572 = (state_17583[(7)]);
var inst_17579 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(response_channel,inst_17572);
var state_17583__$1 = state_17583;
var statearr_17587_17616 = state_17583__$1;
(statearr_17587_17616[(2)] = inst_17579);

(statearr_17587_17616[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (6))){
var state_17583__$1 = state_17583;
var statearr_17588_17617 = state_17583__$1;
(statearr_17588_17617[(2)] = true);

(statearr_17588_17617[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (3))){
var inst_17551 = (state_17583[(8)]);
var inst_17556 = inst_17551.cljs$lang$protocol_mask$partition0$;
var inst_17557 = (inst_17556 & (64));
var inst_17558 = inst_17551.cljs$core$ISeq$;
var inst_17559 = (cljs.core.PROTOCOL_SENTINEL === inst_17558);
var inst_17560 = (inst_17557) || (inst_17559);
var state_17583__$1 = state_17583;
if(cljs.core.truth_(inst_17560)){
var statearr_17589_17618 = state_17583__$1;
(statearr_17589_17618[(1)] = (6));

} else {
var statearr_17590_17619 = state_17583__$1;
(statearr_17590_17619[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (12))){
var inst_17576 = window.location.href;
var inst_17577 = window.location = inst_17576;
var state_17583__$1 = state_17583;
var statearr_17591_17620 = state_17583__$1;
(statearr_17591_17620[(2)] = inst_17577);

(statearr_17591_17620[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (2))){
var inst_17551 = (state_17583[(8)]);
var inst_17551__$1 = (state_17583[(2)]);
var inst_17553 = (inst_17551__$1 == null);
var inst_17554 = cljs.core.not(inst_17553);
var state_17583__$1 = (function (){var statearr_17592 = state_17583;
(statearr_17592[(8)] = inst_17551__$1);

return statearr_17592;
})();
if(inst_17554){
var statearr_17593_17621 = state_17583__$1;
(statearr_17593_17621[(1)] = (3));

} else {
var statearr_17594_17622 = state_17583__$1;
(statearr_17594_17622[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (11))){
var inst_17572 = (state_17583[(7)]);
var inst_17572__$1 = (state_17583[(2)]);
var inst_17573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17572__$1,cljs.core.cst$kw$status);
var inst_17574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17573,(401));
var state_17583__$1 = (function (){var statearr_17595 = state_17583;
(statearr_17595[(7)] = inst_17572__$1);

return statearr_17595;
})();
if(inst_17574){
var statearr_17596_17623 = state_17583__$1;
(statearr_17596_17623[(1)] = (12));

} else {
var statearr_17597_17624 = state_17583__$1;
(statearr_17597_17624[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (9))){
var inst_17551 = (state_17583[(8)]);
var inst_17569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17551);
var state_17583__$1 = state_17583;
var statearr_17598_17625 = state_17583__$1;
(statearr_17598_17625[(2)] = inst_17569);

(statearr_17598_17625[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (5))){
var inst_17567 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
if(cljs.core.truth_(inst_17567)){
var statearr_17599_17626 = state_17583__$1;
(statearr_17599_17626[(1)] = (9));

} else {
var statearr_17600_17627 = state_17583__$1;
(statearr_17600_17627[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (14))){
var inst_17581 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17583__$1,inst_17581);
} else {
if((state_val_17584 === (10))){
var inst_17551 = (state_17583[(8)]);
var state_17583__$1 = state_17583;
var statearr_17601_17628 = state_17583__$1;
(statearr_17601_17628[(2)] = inst_17551);

(statearr_17601_17628[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (8))){
var inst_17564 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
var statearr_17602_17629 = state_17583__$1;
(statearr_17602_17629[(2)] = inst_17564);

(statearr_17602_17629[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14551__auto___17613,response_channel))
;
return ((function (switch__14173__auto__,c__14551__auto___17613,response_channel){
return (function() {
var milia$api$io$state_machine__14174__auto__ = null;
var milia$api$io$state_machine__14174__auto____0 = (function (){
var statearr_17606 = [null,null,null,null,null,null,null,null,null];
(statearr_17606[(0)] = milia$api$io$state_machine__14174__auto__);

(statearr_17606[(1)] = (1));

return statearr_17606;
});
var milia$api$io$state_machine__14174__auto____1 = (function (state_17583){
while(true){
var ret_value__14175__auto__ = (function (){try{while(true){
var result__14176__auto__ = switch__14173__auto__(state_17583);
if(cljs.core.keyword_identical_QMARK_(result__14176__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14176__auto__;
}
break;
}
}catch (e17607){if((e17607 instanceof Object)){
var ex__14177__auto__ = e17607;
var statearr_17608_17630 = state_17583;
(statearr_17608_17630[(5)] = ex__14177__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17583);

return cljs.core.cst$kw$recur;
} else {
throw e17607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14175__auto__,cljs.core.cst$kw$recur)){
var G__17631 = state_17583;
state_17583 = G__17631;
continue;
} else {
return ret_value__14175__auto__;
}
break;
}
});
milia$api$io$state_machine__14174__auto__ = function(state_17583){
switch(arguments.length){
case 0:
return milia$api$io$state_machine__14174__auto____0.call(this);
case 1:
return milia$api$io$state_machine__14174__auto____1.call(this,state_17583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
milia$api$io$state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$0 = milia$api$io$state_machine__14174__auto____0;
milia$api$io$state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$1 = milia$api$io$state_machine__14174__auto____1;
return milia$api$io$state_machine__14174__auto__;
})()
;})(switch__14173__auto__,c__14551__auto___17613,response_channel))
})();
var state__14553__auto__ = (function (){var statearr_17609 = (f__14552__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14552__auto__.cljs$core$IFn$_invoke$arity$0() : f__14552__auto__.call(null));
(statearr_17609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14551__auto___17613);

return statearr_17609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(c__14551__auto___17613,response_channel))
);


return response_channel;
});

milia.api.io.http_request.cljs$lang$maxFixedArity = (1);

milia.api.io.http_request.cljs$lang$applyTo = (function (seq17546){
var G__17547 = cljs.core.first(seq17546);
var seq17546__$1 = cljs.core.next(seq17546);
return milia.api.io.http_request.cljs$core$IFn$_invoke$arity$variadic(G__17547,seq17546__$1);
});

/**
 * Promise-based http-requests
 */
milia.api.io.promise_http_request = (function milia$api$io$promise_http_request(method,url,http_options,headers){
var promise = (new Promise((function (resolve,reject){
var io_obj = (new goog.net.XhrIo());
var G__17640_17648 = io_obj;
var G__17641_17649 = goog.net.EventType.SUCCESS;
var G__17642_17650 = ((function (G__17640_17648,G__17641_17649,io_obj){
return (function (){
var G__17643 = milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic(io_obj,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$require_DASH_json_QMARK_,true], null)], 0));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__17643) : resolve.call(null,G__17643));
});})(G__17640_17648,G__17641_17649,io_obj))
;
goog.events.listen(G__17640_17648,G__17641_17649,G__17642_17650);

var G__17644_17651 = io_obj;
var G__17645_17652 = goog.net.EventType.ERROR;
var G__17646_17653 = ((function (G__17644_17651,G__17645_17652,io_obj){
return (function (){
var G__17647 = milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic(io_obj,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$require_DASH_json_QMARK_,true], null)], 0));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__17647) : reject.call(null,G__17647));
});})(G__17644_17651,G__17645_17652,io_obj))
;
goog.events.listen(G__17644_17651,G__17645_17652,G__17646_17653);

return io_obj.send(url,method,http_options,headers);
})));
return promise;
});
