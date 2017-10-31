// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('milia.utils.remote');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('chimera.urls');
/**
 * Store credentials used to authenticate API requests.
 * Based on existence in this atom credentials will be tried in top down order.
 */
milia.utils.remote._STAR_credentials_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$temp_DASH_token,null,cljs.core.cst$kw$token,null,cljs.core.cst$kw$username,null,cljs.core.cst$kw$password,null], null);
milia.utils.remote.invalid_token_msg = "Invalid token";
milia.utils.remote.token_expired_msg = "Token expired";
milia.utils.remote.bad_token_msgs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [milia.utils.remote.invalid_token_msg,milia.utils.remote.token_expired_msg], null);
/**
 * Store remote hosts that requests are made to.
 */
milia.utils.remote.hosts = (function (){var G__17407 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$client,"zebra.ona.io",cljs.core.cst$kw$data,"stage-api.ona.io",cljs.core.cst$kw$j2x,"j2x.ona.io",cljs.core.cst$kw$request_DASH_protocol,"https"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17407) : cljs.core.atom.call(null,G__17407));
})();
/**
 * Store customizable timeouts to use in the http libraries. In milliseconds.
 */
milia.utils.remote.timeouts = (function (){var G__17408 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$conn_DASH_timeout,(60000),cljs.core.cst$kw$socket_DASH_timeout,(60000)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17408) : cljs.core.atom.call(null,G__17408));
})();
/**
 * Swap values into hosts atom, requires data-host, other args are option but
 * must be provided in order. If an option arg is nil it is ignored, and not
 * swapped into hosts.
 * 
 * Built to support setting hosts from JavaScript.
 */
milia.utils.remote.set_hosts = (function milia$utils$remote$set_hosts(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17415 = arguments.length;
var i__11124__auto___17416 = (0);
while(true){
if((i__11124__auto___17416 < len__11123__auto___17415)){
args__11130__auto__.push((arguments[i__11124__auto___17416]));

var G__17417 = (i__11124__auto___17416 + (1));
i__11124__auto___17416 = G__17417;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});
goog.exportSymbol('milia.utils.remote.set_hosts', milia.utils.remote.set_hosts);

milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic = (function (data_host,p__17411){
var map__17412 = p__17411;
var map__17412__$1 = ((((!((map__17412 == null)))?((((map__17412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17412):map__17412);
var client_host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17412__$1,cljs.core.cst$kw$client_DASH_host);
var j2x_host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17412__$1,cljs.core.cst$kw$j2x_DASH_host);
var request_protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17412__$1,cljs.core.cst$kw$request_DASH_protocol);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(milia.utils.remote.hosts,cljs.core.merge,(function (){var G__17414 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data_host], null);
var G__17414__$1 = ((!((client_host == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17414,cljs.core.cst$kw$client,client_host):G__17414);
var G__17414__$2 = ((!((j2x_host == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17414__$1,cljs.core.cst$kw$j2x,j2x_host):G__17414__$1);
if(!((request_protocol == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17414__$2,cljs.core.cst$kw$request_DASH_protocol,request_protocol);
} else {
return G__17414__$2;
}
})());
});

milia.utils.remote.set_hosts.cljs$lang$maxFixedArity = (1);

milia.utils.remote.set_hosts.cljs$lang$applyTo = (function (seq17409){
var G__17410 = cljs.core.first(seq17409);
var seq17409__$1 = cljs.core.next(seq17409);
return milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic(G__17410,seq17409__$1);
});

/**
 * Set the dynamic credentials to include the username and optionally
 * any other arguments that are passed. If an argument is nil or not passed
 * it will be set to nil in the credentials.
 * 
 * Calling this from Clojure will break if not done from within a previous
 * binding of the *credentials* variable.
 * 
 * Built to support setting hosts from JavaScript.
 */
milia.utils.remote.set_credentials = (function milia$utils$remote$set_credentials(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17424 = arguments.length;
var i__11124__auto___17425 = (0);
while(true){
if((i__11124__auto___17425 < len__11123__auto___17424)){
args__11130__auto__.push((arguments[i__11124__auto___17425]));

var G__17426 = (i__11124__auto___17425 + (1));
i__11124__auto___17425 = G__17426;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return milia.utils.remote.set_credentials.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});
goog.exportSymbol('milia.utils.remote.set_credentials', milia.utils.remote.set_credentials);

milia.utils.remote.set_credentials.cljs$core$IFn$_invoke$arity$variadic = (function (username,p__17420){
var vec__17421 = p__17420;
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17421,(0),null);
var temp_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17421,(1),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17421,(2),null);
return milia.utils.remote._STAR_credentials_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password,cljs.core.cst$kw$temp_DASH_token,temp_token,cljs.core.cst$kw$token,token], null);
});

milia.utils.remote.set_credentials.cljs$lang$maxFixedArity = (1);

milia.utils.remote.set_credentials.cljs$lang$applyTo = (function (seq17418){
var G__17419 = cljs.core.first(seq17418);
var seq17418__$1 = cljs.core.next(seq17418);
return milia.utils.remote.set_credentials.cljs$core$IFn$_invoke$arity$variadic(G__17419,seq17418__$1);
});

/**
 * Prefix the resources with the protocol and format strings.
 */
milia.utils.remote.protocol_prefixed = (function milia$utils$remote$protocol_prefixed(resources){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$request_DASH_protocol.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(milia.utils.remote.hosts) : cljs.core.deref.call(null,milia.utils.remote.hosts))),"://",resources], null)));
});
milia.utils.remote.thumbor_host = "images.ona.io";
milia.utils.remote.thumbor_server = milia.utils.remote.protocol_prefixed(milia.utils.remote.thumbor_host);
milia.utils.remote.url_join = (function milia$utils$remote$url_join(host,args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [host], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chimera.urls.url,args)));
});
/**
 * Build an API url.
 */
milia.utils.remote.make_url = (function milia$utils$remote$make_url(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17428 = arguments.length;
var i__11124__auto___17429 = (0);
while(true){
if((i__11124__auto___17429 < len__11123__auto___17428)){
args__11130__auto__.push((arguments[i__11124__auto___17429]));

var G__17430 = (i__11124__auto___17429 + (1));
i__11124__auto___17429 = G__17430;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic = (function (postfix){
return milia.utils.remote.url_join([cljs.core.str.cljs$core$IFn$_invoke$arity$1(milia.utils.remote.protocol_prefixed(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(milia.utils.remote.hosts) : cljs.core.deref.call(null,milia.utils.remote.hosts))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/v1")].join(''),postfix);
});

milia.utils.remote.make_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_url.cljs$lang$applyTo = (function (seq17427){
return milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17427));
});

/**
 * Build a URL pointing to the client.
 */
milia.utils.remote.make_client_url = (function milia$utils$remote$make_client_url(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17432 = arguments.length;
var i__11124__auto___17433 = (0);
while(true){
if((i__11124__auto___17433 < len__11123__auto___17432)){
args__11130__auto__.push((arguments[i__11124__auto___17433]));

var G__17434 = (i__11124__auto___17433 + (1));
i__11124__auto___17433 = G__17434;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_client_url.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

milia.utils.remote.make_client_url.cljs$core$IFn$_invoke$arity$variadic = (function (postfix){
var client_host = ((window["location"])["origin"]);
return milia.utils.remote.url_join(client_host,postfix);
});

milia.utils.remote.make_client_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_client_url.cljs$lang$applyTo = (function (seq17431){
return milia.utils.remote.make_client_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17431));
});

/**
 * Like make-url, but ensures an ending in .json
 */
milia.utils.remote.make_json_url = (function milia$utils$remote$make_json_url(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17436 = arguments.length;
var i__11124__auto___17437 = (0);
while(true){
if((i__11124__auto___17437 < len__11123__auto___17436)){
args__11130__auto__.push((arguments[i__11124__auto___17437]));

var G__17438 = (i__11124__auto___17437 + (1));
i__11124__auto___17437 = G__17438;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_json_url.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

milia.utils.remote.make_json_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(milia.utils.remote.make_url,args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".json")].join('');
});

milia.utils.remote.make_json_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_json_url.cljs$lang$applyTo = (function (seq17435){
return milia.utils.remote.make_json_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17435));
});

/**
 * Build an API url.
 */
milia.utils.remote.make_j2x_url = (function milia$utils$remote$make_j2x_url(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17440 = arguments.length;
var i__11124__auto___17441 = (0);
while(true){
if((i__11124__auto___17441 < len__11123__auto___17440)){
args__11130__auto__.push((arguments[i__11124__auto___17441]));

var G__17442 = (i__11124__auto___17441 + (1));
i__11124__auto___17441 = G__17442;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_j2x_url.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

milia.utils.remote.make_j2x_url.cljs$core$IFn$_invoke$arity$variadic = (function (postfix){
return milia.utils.remote.url_join(milia.utils.remote.protocol_prefixed(cljs.core.cst$kw$j2x.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(milia.utils.remote.hosts) : cljs.core.deref.call(null,milia.utils.remote.hosts)))),postfix);
});

milia.utils.remote.make_j2x_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_j2x_url.cljs$lang$applyTo = (function (seq17439){
return milia.utils.remote.make_j2x_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17439));
});

