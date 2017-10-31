// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = (function (){var G__16873 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16873) : cljs.core.atom.call(null,G__16873));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__16878){
var vec__16879 = p__16878;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16879,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16883 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__16883)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__16883)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__16883)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__16883)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__16883)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16883)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16883)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16884){
var map__16888 = p__16884;
var map__16888__$1 = ((((!((map__16888 == null)))?((((map__16888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16888):map__16888);
var request = map__16888__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16888__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16888__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16888__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__10010__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__10010__auto__)){
return or__10010__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16890 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__16890,default_headers);

cljs_http.core.apply_response_type_BANG_(G__16890,response_type);

G__16890.setTimeoutInterval(timeout);

G__16890.setWithCredentials(send_credentials);

return G__16890;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16891){
var map__16920 = p__16891;
var map__16920__$1 = ((((!((map__16920 == null)))?((((map__16920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16920):map__16920);
var request = map__16920__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16920__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16920__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16920__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16920__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16920__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16920__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__10010__auto__ = request_method;
if(cljs.core.truth_(or__10010__auto__)){
return or__10010__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__16922 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__16922) : cljs_http.core.error_kw.call(null,G__16922));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_16948 = ((function (channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__16923_16949 = xhr;
G__16923_16949.setProgressEventsEnabled(true);

G__16923_16949.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_16948,cljs.core.cst$kw$upload));

G__16923_16949.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_16948,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14551__auto___16950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14551__auto___16950,channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__14552__auto__ = (function (){var switch__14173__auto__ = ((function (c__14551__auto___16950,channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_16934){
var state_val_16935 = (state_16934[(1)]);
if((state_val_16935 === (1))){
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16934__$1,(2),cancel);
} else {
if((state_val_16935 === (2))){
var inst_16925 = (state_16934[(2)]);
var inst_16926 = xhr.isComplete();
var inst_16927 = cljs.core.not(inst_16926);
var state_16934__$1 = (function (){var statearr_16936 = state_16934;
(statearr_16936[(7)] = inst_16925);

return statearr_16936;
})();
if(inst_16927){
var statearr_16937_16951 = state_16934__$1;
(statearr_16937_16951[(1)] = (3));

} else {
var statearr_16938_16952 = state_16934__$1;
(statearr_16938_16952[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (3))){
var inst_16929 = xhr.abort();
var state_16934__$1 = state_16934;
var statearr_16939_16953 = state_16934__$1;
(statearr_16939_16953[(2)] = inst_16929);

(statearr_16939_16953[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (4))){
var state_16934__$1 = state_16934;
var statearr_16940_16954 = state_16934__$1;
(statearr_16940_16954[(2)] = null);

(statearr_16940_16954[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (5))){
var inst_16932 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16934__$1,inst_16932);
} else {
return null;
}
}
}
}
}
});})(c__14551__auto___16950,channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__14173__auto__,c__14551__auto___16950,channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__14174__auto__ = null;
var cljs_http$core$xhr_$_state_machine__14174__auto____0 = (function (){
var statearr_16944 = [null,null,null,null,null,null,null,null];
(statearr_16944[(0)] = cljs_http$core$xhr_$_state_machine__14174__auto__);

(statearr_16944[(1)] = (1));

return statearr_16944;
});
var cljs_http$core$xhr_$_state_machine__14174__auto____1 = (function (state_16934){
while(true){
var ret_value__14175__auto__ = (function (){try{while(true){
var result__14176__auto__ = switch__14173__auto__(state_16934);
if(cljs.core.keyword_identical_QMARK_(result__14176__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14176__auto__;
}
break;
}
}catch (e16945){if((e16945 instanceof Object)){
var ex__14177__auto__ = e16945;
var statearr_16946_16955 = state_16934;
(statearr_16946_16955[(5)] = ex__14177__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16934);

return cljs.core.cst$kw$recur;
} else {
throw e16945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14175__auto__,cljs.core.cst$kw$recur)){
var G__16956 = state_16934;
state_16934 = G__16956;
continue;
} else {
return ret_value__14175__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__14174__auto__ = function(state_16934){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__14174__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__14174__auto____1.call(this,state_16934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__14174__auto____0;
cljs_http$core$xhr_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__14174__auto____1;
return cljs_http$core$xhr_$_state_machine__14174__auto__;
})()
;})(switch__14173__auto__,c__14551__auto___16950,channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__14553__auto__ = (function (){var statearr_16947 = (f__14552__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14552__auto__.cljs$core$IFn$_invoke$arity$0() : f__14552__auto__.call(null));
(statearr_16947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14551__auto___16950);

return statearr_16947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(c__14551__auto___16950,channel,request_url,method,headers__$1,xhr,map__16920,map__16920__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16957){
var map__16974 = p__16957;
var map__16974__$1 = ((((!((map__16974 == null)))?((((map__16974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16974):map__16974);
var request = map__16974__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16974__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_16990 = jsonp.send(null,((function (channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_16990], null));

if(cljs.core.truth_(cancel)){
var c__14551__auto___16991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14551__auto___16991,req_16990,channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__14552__auto__ = (function (){var switch__14173__auto__ = ((function (c__14551__auto___16991,req_16990,channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_16980){
var state_val_16981 = (state_16980[(1)]);
if((state_val_16981 === (1))){
var state_16980__$1 = state_16980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16980__$1,(2),cancel);
} else {
if((state_val_16981 === (2))){
var inst_16977 = (state_16980[(2)]);
var inst_16978 = jsonp.cancel(req_16990);
var state_16980__$1 = (function (){var statearr_16982 = state_16980;
(statearr_16982[(7)] = inst_16977);

return statearr_16982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16980__$1,inst_16978);
} else {
return null;
}
}
});})(c__14551__auto___16991,req_16990,channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__14173__auto__,c__14551__auto___16991,req_16990,channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__14174__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__14174__auto____0 = (function (){
var statearr_16986 = [null,null,null,null,null,null,null,null];
(statearr_16986[(0)] = cljs_http$core$jsonp_$_state_machine__14174__auto__);

(statearr_16986[(1)] = (1));

return statearr_16986;
});
var cljs_http$core$jsonp_$_state_machine__14174__auto____1 = (function (state_16980){
while(true){
var ret_value__14175__auto__ = (function (){try{while(true){
var result__14176__auto__ = switch__14173__auto__(state_16980);
if(cljs.core.keyword_identical_QMARK_(result__14176__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14176__auto__;
}
break;
}
}catch (e16987){if((e16987 instanceof Object)){
var ex__14177__auto__ = e16987;
var statearr_16988_16992 = state_16980;
(statearr_16988_16992[(5)] = ex__14177__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16980);

return cljs.core.cst$kw$recur;
} else {
throw e16987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14175__auto__,cljs.core.cst$kw$recur)){
var G__16993 = state_16980;
state_16980 = G__16993;
continue;
} else {
return ret_value__14175__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__14174__auto__ = function(state_16980){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__14174__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__14174__auto____1.call(this,state_16980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__14174__auto____0;
cljs_http$core$jsonp_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__14174__auto____1;
return cljs_http$core$jsonp_$_state_machine__14174__auto__;
})()
;})(switch__14173__auto__,c__14551__auto___16991,req_16990,channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__14553__auto__ = (function (){var statearr_16989 = (f__14552__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14552__auto__.cljs$core$IFn$_invoke$arity$0() : f__14552__auto__.call(null));
(statearr_16989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14551__auto___16991);

return statearr_16989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(c__14551__auto___16991,req_16990,channel,jsonp,map__16974,map__16974__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16994){
var map__16997 = p__16994;
var map__16997__$1 = ((((!((map__16997 == null)))?((((map__16997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16997):map__16997);
var request = map__16997__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16997__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
