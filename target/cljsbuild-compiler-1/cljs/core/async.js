// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14905 = [];
var len__11124__auto___14911 = arguments.length;
var i__11125__auto___14912 = (0);
while(true){
if((i__11125__auto___14912 < len__11124__auto___14911)){
args14905.push((arguments[i__11125__auto___14912]));

var G__14913 = (i__11125__auto___14912 + (1));
i__11125__auto___14912 = G__14913;
continue;
} else {
}
break;
}

var G__14907 = args14905.length;
switch (G__14907) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14905.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14908 = (function (f,blockable,meta14909){
this.f = f;
this.blockable = blockable;
this.meta14909 = meta14909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14910,meta14909__$1){
var self__ = this;
var _14910__$1 = this;
return (new cljs.core.async.t_cljs$core$async14908(self__.f,self__.blockable,meta14909__$1));
});

cljs.core.async.t_cljs$core$async14908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14910){
var self__ = this;
var _14910__$1 = this;
return self__.meta14909;
});

cljs.core.async.t_cljs$core$async14908.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14908.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14909], null);
});

cljs.core.async.t_cljs$core$async14908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14908";

cljs.core.async.t_cljs$core$async14908.cljs$lang$ctorPrWriter = (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async14908");
});

cljs.core.async.__GT_t_cljs$core$async14908 = (function cljs$core$async$__GT_t_cljs$core$async14908(f__$1,blockable__$1,meta14909){
return (new cljs.core.async.t_cljs$core$async14908(f__$1,blockable__$1,meta14909));
});

}

return (new cljs.core.async.t_cljs$core$async14908(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14917 = [];
var len__11124__auto___14920 = arguments.length;
var i__11125__auto___14921 = (0);
while(true){
if((i__11125__auto___14921 < len__11124__auto___14920)){
args14917.push((arguments[i__11125__auto___14921]));

var G__14922 = (i__11125__auto___14921 + (1));
i__11125__auto___14921 = G__14922;
continue;
} else {
}
break;
}

var G__14919 = args14917.length;
switch (G__14919) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14917.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14924 = [];
var len__11124__auto___14927 = arguments.length;
var i__11125__auto___14928 = (0);
while(true){
if((i__11125__auto___14928 < len__11124__auto___14927)){
args14924.push((arguments[i__11125__auto___14928]));

var G__14929 = (i__11125__auto___14928 + (1));
i__11125__auto___14928 = G__14929;
continue;
} else {
}
break;
}

var G__14926 = args14924.length;
switch (G__14926) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14924.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14931 = [];
var len__11124__auto___14934 = arguments.length;
var i__11125__auto___14935 = (0);
while(true){
if((i__11125__auto___14935 < len__11124__auto___14934)){
args14931.push((arguments[i__11125__auto___14935]));

var G__14936 = (i__11125__auto___14935 + (1));
i__11125__auto___14935 = G__14936;
continue;
} else {
}
break;
}

var G__14933 = args14931.length;
switch (G__14933) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14931.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14938 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14938) : fn1.call(null,val_14938));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14938,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14938) : fn1.call(null,val_14938));
});})(val_14938,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14939 = [];
var len__11124__auto___14942 = arguments.length;
var i__11125__auto___14943 = (0);
while(true){
if((i__11125__auto___14943 < len__11124__auto___14942)){
args14939.push((arguments[i__11125__auto___14943]));

var G__14944 = (i__11125__auto___14943 + (1));
i__11125__auto___14943 = G__14944;
continue;
} else {
}
break;
}

var G__14941 = args14939.length;
switch (G__14941) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14939.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__10934__auto___14946 = n;
var x_14947 = (0);
while(true){
if((x_14947 < n__10934__auto___14946)){
(a[x_14947] = (0));

var G__14948 = (x_14947 + (1));
x_14947 = G__14948;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14949 = (i + (1));
i = G__14949;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14953 = (function (flag,meta14954){
this.flag = flag;
this.meta14954 = meta14954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14955,meta14954__$1){
var self__ = this;
var _14955__$1 = this;
return (new cljs.core.async.t_cljs$core$async14953(self__.flag,meta14954__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14955){
var self__ = this;
var _14955__$1 = this;
return self__.meta14954;
});})(flag))
;

cljs.core.async.t_cljs$core$async14953.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14953.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14953.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14954], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14953";

cljs.core.async.t_cljs$core$async14953.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async14953");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14953 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14953(flag__$1,meta14954){
return (new cljs.core.async.t_cljs$core$async14953(flag__$1,meta14954));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14953(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14959 = (function (flag,cb,meta14960){
this.flag = flag;
this.cb = cb;
this.meta14960 = meta14960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14961,meta14960__$1){
var self__ = this;
var _14961__$1 = this;
return (new cljs.core.async.t_cljs$core$async14959(self__.flag,self__.cb,meta14960__$1));
});

cljs.core.async.t_cljs$core$async14959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14961){
var self__ = this;
var _14961__$1 = this;
return self__.meta14960;
});

cljs.core.async.t_cljs$core$async14959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14960], null);
});

cljs.core.async.t_cljs$core$async14959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14959";

cljs.core.async.t_cljs$core$async14959.cljs$lang$ctorPrWriter = (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async14959");
});

cljs.core.async.__GT_t_cljs$core$async14959 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14959(flag__$1,cb__$1,meta14960){
return (new cljs.core.async.t_cljs$core$async14959(flag__$1,cb__$1,meta14960));
});

}

return (new cljs.core.async.t_cljs$core$async14959(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14962_SHARP_){
var G__14966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14962_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14966) : fret.call(null,G__14966));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14963_SHARP_){
var G__14967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14963_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14967) : fret.call(null,G__14967));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__10011__auto__ = wport;
if(cljs.core.truth_(or__10011__auto__)){
return or__10011__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14968 = (i + (1));
i = G__14968;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10011__auto__ = ret;
if(cljs.core.truth_(or__10011__auto__)){
return or__10011__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__9999__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__9999__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__9999__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__11131__auto__ = [];
var len__11124__auto___14974 = arguments.length;
var i__11125__auto___14975 = (0);
while(true){
if((i__11125__auto___14975 < len__11124__auto___14974)){
args__11131__auto__.push((arguments[i__11125__auto___14975]));

var G__14976 = (i__11125__auto___14975 + (1));
i__11125__auto___14975 = G__14976;
continue;
} else {
}
break;
}

var argseq__11132__auto__ = ((((1) < args__11131__auto__.length))?(new cljs.core.IndexedSeq(args__11131__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11132__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14971){
var map__14972 = p__14971;
var map__14972__$1 = ((((!((map__14972 == null)))?((((map__14972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14972):map__14972);
var opts = map__14972__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14969){
var G__14970 = cljs.core.first(seq14969);
var seq14969__$1 = cljs.core.next(seq14969);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14970,seq14969__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14977 = [];
var len__11124__auto___15027 = arguments.length;
var i__11125__auto___15028 = (0);
while(true){
if((i__11125__auto___15028 < len__11124__auto___15027)){
args14977.push((arguments[i__11125__auto___15028]));

var G__15029 = (i__11125__auto___15028 + (1));
i__11125__auto___15028 = G__15029;
continue;
} else {
}
break;
}

var G__14979 = args14977.length;
switch (G__14979) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14977.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14860__auto___15031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___15031){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___15031){
return (function (state_15003){
var state_val_15004 = (state_15003[(1)]);
if((state_val_15004 === (7))){
var inst_14999 = (state_15003[(2)]);
var state_15003__$1 = state_15003;
var statearr_15005_15032 = state_15003__$1;
(statearr_15005_15032[(2)] = inst_14999);

(statearr_15005_15032[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (1))){
var state_15003__$1 = state_15003;
var statearr_15006_15033 = state_15003__$1;
(statearr_15006_15033[(2)] = null);

(statearr_15006_15033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (4))){
var inst_14982 = (state_15003[(7)]);
var inst_14982__$1 = (state_15003[(2)]);
var inst_14983 = (inst_14982__$1 == null);
var state_15003__$1 = (function (){var statearr_15007 = state_15003;
(statearr_15007[(7)] = inst_14982__$1);

return statearr_15007;
})();
if(cljs.core.truth_(inst_14983)){
var statearr_15008_15034 = state_15003__$1;
(statearr_15008_15034[(1)] = (5));

} else {
var statearr_15009_15035 = state_15003__$1;
(statearr_15009_15035[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (13))){
var state_15003__$1 = state_15003;
var statearr_15010_15036 = state_15003__$1;
(statearr_15010_15036[(2)] = null);

(statearr_15010_15036[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (6))){
var inst_14982 = (state_15003[(7)]);
var state_15003__$1 = state_15003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15003__$1,(11),to,inst_14982);
} else {
if((state_val_15004 === (3))){
var inst_15001 = (state_15003[(2)]);
var state_15003__$1 = state_15003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15003__$1,inst_15001);
} else {
if((state_val_15004 === (12))){
var state_15003__$1 = state_15003;
var statearr_15011_15037 = state_15003__$1;
(statearr_15011_15037[(2)] = null);

(statearr_15011_15037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (2))){
var state_15003__$1 = state_15003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15003__$1,(4),from);
} else {
if((state_val_15004 === (11))){
var inst_14992 = (state_15003[(2)]);
var state_15003__$1 = state_15003;
if(cljs.core.truth_(inst_14992)){
var statearr_15012_15038 = state_15003__$1;
(statearr_15012_15038[(1)] = (12));

} else {
var statearr_15013_15039 = state_15003__$1;
(statearr_15013_15039[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (9))){
var state_15003__$1 = state_15003;
var statearr_15014_15040 = state_15003__$1;
(statearr_15014_15040[(2)] = null);

(statearr_15014_15040[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (5))){
var state_15003__$1 = state_15003;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15015_15041 = state_15003__$1;
(statearr_15015_15041[(1)] = (8));

} else {
var statearr_15016_15042 = state_15003__$1;
(statearr_15016_15042[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (14))){
var inst_14997 = (state_15003[(2)]);
var state_15003__$1 = state_15003;
var statearr_15017_15043 = state_15003__$1;
(statearr_15017_15043[(2)] = inst_14997);

(statearr_15017_15043[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (10))){
var inst_14989 = (state_15003[(2)]);
var state_15003__$1 = state_15003;
var statearr_15018_15044 = state_15003__$1;
(statearr_15018_15044[(2)] = inst_14989);

(statearr_15018_15044[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15004 === (8))){
var inst_14986 = cljs.core.async.close_BANG_(to);
var state_15003__$1 = state_15003;
var statearr_15019_15045 = state_15003__$1;
(statearr_15019_15045[(2)] = inst_14986);

(statearr_15019_15045[(1)] = (10));


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
});})(c__14860__auto___15031))
;
return ((function (switch__14736__auto__,c__14860__auto___15031){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_15023 = [null,null,null,null,null,null,null,null];
(statearr_15023[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_15023[(1)] = (1));

return statearr_15023;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_15003){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15003);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15024){if((e15024 instanceof Object)){
var ex__14740__auto__ = e15024;
var statearr_15025_15046 = state_15003;
(statearr_15025_15046[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15003);

return cljs.core.cst$kw$recur;
} else {
throw e15024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15047 = state_15003;
state_15003 = G__15047;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_15003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_15003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___15031))
})();
var state__14862__auto__ = (function (){var statearr_15026 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___15031);

return statearr_15026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___15031))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15235){
var vec__15236 = p__15235;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(1),null);
var job = vec__15236;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14860__auto___15422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___15422,res,vec__15236,v,p,job,jobs,results){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___15422,res,vec__15236,v,p,job,jobs,results){
return (function (state_15243){
var state_val_15244 = (state_15243[(1)]);
if((state_val_15244 === (1))){
var state_15243__$1 = state_15243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15243__$1,(2),res,v);
} else {
if((state_val_15244 === (2))){
var inst_15240 = (state_15243[(2)]);
var inst_15241 = cljs.core.async.close_BANG_(res);
var state_15243__$1 = (function (){var statearr_15245 = state_15243;
(statearr_15245[(7)] = inst_15240);

return statearr_15245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15243__$1,inst_15241);
} else {
return null;
}
}
});})(c__14860__auto___15422,res,vec__15236,v,p,job,jobs,results))
;
return ((function (switch__14736__auto__,c__14860__auto___15422,res,vec__15236,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0 = (function (){
var statearr_15249 = [null,null,null,null,null,null,null,null];
(statearr_15249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__);

(statearr_15249[(1)] = (1));

return statearr_15249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1 = (function (state_15243){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15243);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15250){if((e15250 instanceof Object)){
var ex__14740__auto__ = e15250;
var statearr_15251_15423 = state_15243;
(statearr_15251_15423[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15243);

return cljs.core.cst$kw$recur;
} else {
throw e15250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15424 = state_15243;
state_15243 = G__15424;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = function(state_15243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1.call(this,state_15243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___15422,res,vec__15236,v,p,job,jobs,results))
})();
var state__14862__auto__ = (function (){var statearr_15252 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___15422);

return statearr_15252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___15422,res,vec__15236,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15253){
var vec__15254 = p__15253;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15254,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15254,(1),null);
var job = vec__15254;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__10934__auto___15425 = n;
var __15426 = (0);
while(true){
if((__15426 < n__10934__auto___15425)){
var G__15257_15427 = type;
var G__15257_15428__$1 = (((G__15257_15427 instanceof cljs.core.Keyword))?G__15257_15427.fqn:null);
switch (G__15257_15428__$1) {
case "compute":
var c__14860__auto___15430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15426,c__14860__auto___15430,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (__15426,c__14860__auto___15430,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async){
return (function (state_15270){
var state_val_15271 = (state_15270[(1)]);
if((state_val_15271 === (1))){
var state_15270__$1 = state_15270;
var statearr_15272_15431 = state_15270__$1;
(statearr_15272_15431[(2)] = null);

(statearr_15272_15431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15271 === (2))){
var state_15270__$1 = state_15270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15270__$1,(4),jobs);
} else {
if((state_val_15271 === (3))){
var inst_15268 = (state_15270[(2)]);
var state_15270__$1 = state_15270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15270__$1,inst_15268);
} else {
if((state_val_15271 === (4))){
var inst_15260 = (state_15270[(2)]);
var inst_15261 = process(inst_15260);
var state_15270__$1 = state_15270;
if(cljs.core.truth_(inst_15261)){
var statearr_15273_15432 = state_15270__$1;
(statearr_15273_15432[(1)] = (5));

} else {
var statearr_15274_15433 = state_15270__$1;
(statearr_15274_15433[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15271 === (5))){
var state_15270__$1 = state_15270;
var statearr_15275_15434 = state_15270__$1;
(statearr_15275_15434[(2)] = null);

(statearr_15275_15434[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15271 === (6))){
var state_15270__$1 = state_15270;
var statearr_15276_15435 = state_15270__$1;
(statearr_15276_15435[(2)] = null);

(statearr_15276_15435[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15271 === (7))){
var inst_15266 = (state_15270[(2)]);
var state_15270__$1 = state_15270;
var statearr_15277_15436 = state_15270__$1;
(statearr_15277_15436[(2)] = inst_15266);

(statearr_15277_15436[(1)] = (3));


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
});})(__15426,c__14860__auto___15430,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async))
;
return ((function (__15426,switch__14736__auto__,c__14860__auto___15430,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0 = (function (){
var statearr_15281 = [null,null,null,null,null,null,null];
(statearr_15281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__);

(statearr_15281[(1)] = (1));

return statearr_15281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1 = (function (state_15270){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15270);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15282){if((e15282 instanceof Object)){
var ex__14740__auto__ = e15282;
var statearr_15283_15437 = state_15270;
(statearr_15283_15437[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15270);

return cljs.core.cst$kw$recur;
} else {
throw e15282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15438 = state_15270;
state_15270 = G__15438;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = function(state_15270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1.call(this,state_15270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__;
})()
;})(__15426,switch__14736__auto__,c__14860__auto___15430,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async))
})();
var state__14862__auto__ = (function (){var statearr_15284 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___15430);

return statearr_15284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(__15426,c__14860__auto___15430,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async))
);


break;
case "async":
var c__14860__auto___15439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15426,c__14860__auto___15439,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (__15426,c__14860__auto___15439,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async){
return (function (state_15297){
var state_val_15298 = (state_15297[(1)]);
if((state_val_15298 === (1))){
var state_15297__$1 = state_15297;
var statearr_15299_15440 = state_15297__$1;
(statearr_15299_15440[(2)] = null);

(statearr_15299_15440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15298 === (2))){
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15297__$1,(4),jobs);
} else {
if((state_val_15298 === (3))){
var inst_15295 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15297__$1,inst_15295);
} else {
if((state_val_15298 === (4))){
var inst_15287 = (state_15297[(2)]);
var inst_15288 = async(inst_15287);
var state_15297__$1 = state_15297;
if(cljs.core.truth_(inst_15288)){
var statearr_15300_15441 = state_15297__$1;
(statearr_15300_15441[(1)] = (5));

} else {
var statearr_15301_15442 = state_15297__$1;
(statearr_15301_15442[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15298 === (5))){
var state_15297__$1 = state_15297;
var statearr_15302_15443 = state_15297__$1;
(statearr_15302_15443[(2)] = null);

(statearr_15302_15443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15298 === (6))){
var state_15297__$1 = state_15297;
var statearr_15303_15444 = state_15297__$1;
(statearr_15303_15444[(2)] = null);

(statearr_15303_15444[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15298 === (7))){
var inst_15293 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15304_15445 = state_15297__$1;
(statearr_15304_15445[(2)] = inst_15293);

(statearr_15304_15445[(1)] = (3));


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
});})(__15426,c__14860__auto___15439,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async))
;
return ((function (__15426,switch__14736__auto__,c__14860__auto___15439,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0 = (function (){
var statearr_15308 = [null,null,null,null,null,null,null];
(statearr_15308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__);

(statearr_15308[(1)] = (1));

return statearr_15308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1 = (function (state_15297){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15297);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15309){if((e15309 instanceof Object)){
var ex__14740__auto__ = e15309;
var statearr_15310_15446 = state_15297;
(statearr_15310_15446[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15297);

return cljs.core.cst$kw$recur;
} else {
throw e15309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15447 = state_15297;
state_15297 = G__15447;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__;
})()
;})(__15426,switch__14736__auto__,c__14860__auto___15439,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async))
})();
var state__14862__auto__ = (function (){var statearr_15311 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___15439);

return statearr_15311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(__15426,c__14860__auto___15439,G__15257_15427,G__15257_15428__$1,n__10934__auto___15425,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15257_15428__$1)].join('')));

}

var G__15448 = (__15426 + (1));
__15426 = G__15448;
continue;
} else {
}
break;
}

var c__14860__auto___15449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___15449,jobs,results,process,async){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___15449,jobs,results,process,async){
return (function (state_15333){
var state_val_15334 = (state_15333[(1)]);
if((state_val_15334 === (1))){
var state_15333__$1 = state_15333;
var statearr_15335_15450 = state_15333__$1;
(statearr_15335_15450[(2)] = null);

(statearr_15335_15450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15334 === (2))){
var state_15333__$1 = state_15333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15333__$1,(4),from);
} else {
if((state_val_15334 === (3))){
var inst_15331 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15333__$1,inst_15331);
} else {
if((state_val_15334 === (4))){
var inst_15314 = (state_15333[(7)]);
var inst_15314__$1 = (state_15333[(2)]);
var inst_15315 = (inst_15314__$1 == null);
var state_15333__$1 = (function (){var statearr_15336 = state_15333;
(statearr_15336[(7)] = inst_15314__$1);

return statearr_15336;
})();
if(cljs.core.truth_(inst_15315)){
var statearr_15337_15451 = state_15333__$1;
(statearr_15337_15451[(1)] = (5));

} else {
var statearr_15338_15452 = state_15333__$1;
(statearr_15338_15452[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15334 === (5))){
var inst_15317 = cljs.core.async.close_BANG_(jobs);
var state_15333__$1 = state_15333;
var statearr_15339_15453 = state_15333__$1;
(statearr_15339_15453[(2)] = inst_15317);

(statearr_15339_15453[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15334 === (6))){
var inst_15319 = (state_15333[(8)]);
var inst_15314 = (state_15333[(7)]);
var inst_15319__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15321 = [inst_15314,inst_15319__$1];
var inst_15322 = (new cljs.core.PersistentVector(null,2,(5),inst_15320,inst_15321,null));
var state_15333__$1 = (function (){var statearr_15340 = state_15333;
(statearr_15340[(8)] = inst_15319__$1);

return statearr_15340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15333__$1,(8),jobs,inst_15322);
} else {
if((state_val_15334 === (7))){
var inst_15329 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
var statearr_15341_15454 = state_15333__$1;
(statearr_15341_15454[(2)] = inst_15329);

(statearr_15341_15454[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15334 === (8))){
var inst_15319 = (state_15333[(8)]);
var inst_15324 = (state_15333[(2)]);
var state_15333__$1 = (function (){var statearr_15342 = state_15333;
(statearr_15342[(9)] = inst_15324);

return statearr_15342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15333__$1,(9),results,inst_15319);
} else {
if((state_val_15334 === (9))){
var inst_15326 = (state_15333[(2)]);
var state_15333__$1 = (function (){var statearr_15343 = state_15333;
(statearr_15343[(10)] = inst_15326);

return statearr_15343;
})();
var statearr_15344_15455 = state_15333__$1;
(statearr_15344_15455[(2)] = null);

(statearr_15344_15455[(1)] = (2));


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
});})(c__14860__auto___15449,jobs,results,process,async))
;
return ((function (switch__14736__auto__,c__14860__auto___15449,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0 = (function (){
var statearr_15348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__);

(statearr_15348[(1)] = (1));

return statearr_15348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1 = (function (state_15333){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15333);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15349){if((e15349 instanceof Object)){
var ex__14740__auto__ = e15349;
var statearr_15350_15456 = state_15333;
(statearr_15350_15456[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15333);

return cljs.core.cst$kw$recur;
} else {
throw e15349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15457 = state_15333;
state_15333 = G__15457;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = function(state_15333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1.call(this,state_15333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___15449,jobs,results,process,async))
})();
var state__14862__auto__ = (function (){var statearr_15351 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___15449);

return statearr_15351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___15449,jobs,results,process,async))
);


var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto__,jobs,results,process,async){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto__,jobs,results,process,async){
return (function (state_15389){
var state_val_15390 = (state_15389[(1)]);
if((state_val_15390 === (7))){
var inst_15385 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15391_15458 = state_15389__$1;
(statearr_15391_15458[(2)] = inst_15385);

(statearr_15391_15458[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (20))){
var state_15389__$1 = state_15389;
var statearr_15392_15459 = state_15389__$1;
(statearr_15392_15459[(2)] = null);

(statearr_15392_15459[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (1))){
var state_15389__$1 = state_15389;
var statearr_15393_15460 = state_15389__$1;
(statearr_15393_15460[(2)] = null);

(statearr_15393_15460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (4))){
var inst_15354 = (state_15389[(7)]);
var inst_15354__$1 = (state_15389[(2)]);
var inst_15355 = (inst_15354__$1 == null);
var state_15389__$1 = (function (){var statearr_15394 = state_15389;
(statearr_15394[(7)] = inst_15354__$1);

return statearr_15394;
})();
if(cljs.core.truth_(inst_15355)){
var statearr_15395_15461 = state_15389__$1;
(statearr_15395_15461[(1)] = (5));

} else {
var statearr_15396_15462 = state_15389__$1;
(statearr_15396_15462[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (15))){
var inst_15367 = (state_15389[(8)]);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15389__$1,(18),to,inst_15367);
} else {
if((state_val_15390 === (21))){
var inst_15380 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15397_15463 = state_15389__$1;
(statearr_15397_15463[(2)] = inst_15380);

(statearr_15397_15463[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (13))){
var inst_15382 = (state_15389[(2)]);
var state_15389__$1 = (function (){var statearr_15398 = state_15389;
(statearr_15398[(9)] = inst_15382);

return statearr_15398;
})();
var statearr_15399_15464 = state_15389__$1;
(statearr_15399_15464[(2)] = null);

(statearr_15399_15464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (6))){
var inst_15354 = (state_15389[(7)]);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15389__$1,(11),inst_15354);
} else {
if((state_val_15390 === (17))){
var inst_15375 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
if(cljs.core.truth_(inst_15375)){
var statearr_15400_15465 = state_15389__$1;
(statearr_15400_15465[(1)] = (19));

} else {
var statearr_15401_15466 = state_15389__$1;
(statearr_15401_15466[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (3))){
var inst_15387 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15389__$1,inst_15387);
} else {
if((state_val_15390 === (12))){
var inst_15364 = (state_15389[(10)]);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15389__$1,(14),inst_15364);
} else {
if((state_val_15390 === (2))){
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15389__$1,(4),results);
} else {
if((state_val_15390 === (19))){
var state_15389__$1 = state_15389;
var statearr_15402_15467 = state_15389__$1;
(statearr_15402_15467[(2)] = null);

(statearr_15402_15467[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (11))){
var inst_15364 = (state_15389[(2)]);
var state_15389__$1 = (function (){var statearr_15403 = state_15389;
(statearr_15403[(10)] = inst_15364);

return statearr_15403;
})();
var statearr_15404_15468 = state_15389__$1;
(statearr_15404_15468[(2)] = null);

(statearr_15404_15468[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (9))){
var state_15389__$1 = state_15389;
var statearr_15405_15469 = state_15389__$1;
(statearr_15405_15469[(2)] = null);

(statearr_15405_15469[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (5))){
var state_15389__$1 = state_15389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15406_15470 = state_15389__$1;
(statearr_15406_15470[(1)] = (8));

} else {
var statearr_15407_15471 = state_15389__$1;
(statearr_15407_15471[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (14))){
var inst_15369 = (state_15389[(11)]);
var inst_15367 = (state_15389[(8)]);
var inst_15367__$1 = (state_15389[(2)]);
var inst_15368 = (inst_15367__$1 == null);
var inst_15369__$1 = cljs.core.not(inst_15368);
var state_15389__$1 = (function (){var statearr_15408 = state_15389;
(statearr_15408[(11)] = inst_15369__$1);

(statearr_15408[(8)] = inst_15367__$1);

return statearr_15408;
})();
if(inst_15369__$1){
var statearr_15409_15472 = state_15389__$1;
(statearr_15409_15472[(1)] = (15));

} else {
var statearr_15410_15473 = state_15389__$1;
(statearr_15410_15473[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (16))){
var inst_15369 = (state_15389[(11)]);
var state_15389__$1 = state_15389;
var statearr_15411_15474 = state_15389__$1;
(statearr_15411_15474[(2)] = inst_15369);

(statearr_15411_15474[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (10))){
var inst_15361 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15412_15475 = state_15389__$1;
(statearr_15412_15475[(2)] = inst_15361);

(statearr_15412_15475[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (18))){
var inst_15372 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15413_15476 = state_15389__$1;
(statearr_15413_15476[(2)] = inst_15372);

(statearr_15413_15476[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15390 === (8))){
var inst_15358 = cljs.core.async.close_BANG_(to);
var state_15389__$1 = state_15389;
var statearr_15414_15477 = state_15389__$1;
(statearr_15414_15477[(2)] = inst_15358);

(statearr_15414_15477[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__14860__auto__,jobs,results,process,async))
;
return ((function (switch__14736__auto__,c__14860__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0 = (function (){
var statearr_15418 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__);

(statearr_15418[(1)] = (1));

return statearr_15418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1 = (function (state_15389){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15389);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15419){if((e15419 instanceof Object)){
var ex__14740__auto__ = e15419;
var statearr_15420_15478 = state_15389;
(statearr_15420_15478[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15389);

return cljs.core.cst$kw$recur;
} else {
throw e15419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15479 = state_15389;
state_15389 = G__15479;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__ = function(state_15389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1.call(this,state_15389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto__,jobs,results,process,async))
})();
var state__14862__auto__ = (function (){var statearr_15421 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto__);

return statearr_15421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto__,jobs,results,process,async))
);

return c__14860__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15480 = [];
var len__11124__auto___15483 = arguments.length;
var i__11125__auto___15484 = (0);
while(true){
if((i__11125__auto___15484 < len__11124__auto___15483)){
args15480.push((arguments[i__11125__auto___15484]));

var G__15485 = (i__11125__auto___15484 + (1));
i__11125__auto___15484 = G__15485;
continue;
} else {
}
break;
}

var G__15482 = args15480.length;
switch (G__15482) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15480.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15487 = [];
var len__11124__auto___15490 = arguments.length;
var i__11125__auto___15491 = (0);
while(true){
if((i__11125__auto___15491 < len__11124__auto___15490)){
args15487.push((arguments[i__11125__auto___15491]));

var G__15492 = (i__11125__auto___15491 + (1));
i__11125__auto___15491 = G__15492;
continue;
} else {
}
break;
}

var G__15489 = args15487.length;
switch (G__15489) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15487.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15494 = [];
var len__11124__auto___15547 = arguments.length;
var i__11125__auto___15548 = (0);
while(true){
if((i__11125__auto___15548 < len__11124__auto___15547)){
args15494.push((arguments[i__11125__auto___15548]));

var G__15549 = (i__11125__auto___15548 + (1));
i__11125__auto___15548 = G__15549;
continue;
} else {
}
break;
}

var G__15496 = args15494.length;
switch (G__15496) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15494.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14860__auto___15551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___15551,tc,fc){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___15551,tc,fc){
return (function (state_15522){
var state_val_15523 = (state_15522[(1)]);
if((state_val_15523 === (7))){
var inst_15518 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15524_15552 = state_15522__$1;
(statearr_15524_15552[(2)] = inst_15518);

(statearr_15524_15552[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (1))){
var state_15522__$1 = state_15522;
var statearr_15525_15553 = state_15522__$1;
(statearr_15525_15553[(2)] = null);

(statearr_15525_15553[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (4))){
var inst_15499 = (state_15522[(7)]);
var inst_15499__$1 = (state_15522[(2)]);
var inst_15500 = (inst_15499__$1 == null);
var state_15522__$1 = (function (){var statearr_15526 = state_15522;
(statearr_15526[(7)] = inst_15499__$1);

return statearr_15526;
})();
if(cljs.core.truth_(inst_15500)){
var statearr_15527_15554 = state_15522__$1;
(statearr_15527_15554[(1)] = (5));

} else {
var statearr_15528_15555 = state_15522__$1;
(statearr_15528_15555[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (13))){
var state_15522__$1 = state_15522;
var statearr_15529_15556 = state_15522__$1;
(statearr_15529_15556[(2)] = null);

(statearr_15529_15556[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (6))){
var inst_15499 = (state_15522[(7)]);
var inst_15505 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15499) : p.call(null,inst_15499));
var state_15522__$1 = state_15522;
if(cljs.core.truth_(inst_15505)){
var statearr_15530_15557 = state_15522__$1;
(statearr_15530_15557[(1)] = (9));

} else {
var statearr_15531_15558 = state_15522__$1;
(statearr_15531_15558[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (3))){
var inst_15520 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15522__$1,inst_15520);
} else {
if((state_val_15523 === (12))){
var state_15522__$1 = state_15522;
var statearr_15532_15559 = state_15522__$1;
(statearr_15532_15559[(2)] = null);

(statearr_15532_15559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (2))){
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15522__$1,(4),ch);
} else {
if((state_val_15523 === (11))){
var inst_15499 = (state_15522[(7)]);
var inst_15509 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15522__$1,(8),inst_15509,inst_15499);
} else {
if((state_val_15523 === (9))){
var state_15522__$1 = state_15522;
var statearr_15533_15560 = state_15522__$1;
(statearr_15533_15560[(2)] = tc);

(statearr_15533_15560[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (5))){
var inst_15502 = cljs.core.async.close_BANG_(tc);
var inst_15503 = cljs.core.async.close_BANG_(fc);
var state_15522__$1 = (function (){var statearr_15534 = state_15522;
(statearr_15534[(8)] = inst_15502);

return statearr_15534;
})();
var statearr_15535_15561 = state_15522__$1;
(statearr_15535_15561[(2)] = inst_15503);

(statearr_15535_15561[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (14))){
var inst_15516 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15536_15562 = state_15522__$1;
(statearr_15536_15562[(2)] = inst_15516);

(statearr_15536_15562[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (10))){
var state_15522__$1 = state_15522;
var statearr_15537_15563 = state_15522__$1;
(statearr_15537_15563[(2)] = fc);

(statearr_15537_15563[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (8))){
var inst_15511 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
if(cljs.core.truth_(inst_15511)){
var statearr_15538_15564 = state_15522__$1;
(statearr_15538_15564[(1)] = (12));

} else {
var statearr_15539_15565 = state_15522__$1;
(statearr_15539_15565[(1)] = (13));

}

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
});})(c__14860__auto___15551,tc,fc))
;
return ((function (switch__14736__auto__,c__14860__auto___15551,tc,fc){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_15543 = [null,null,null,null,null,null,null,null,null];
(statearr_15543[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_15543[(1)] = (1));

return statearr_15543;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_15522){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15522);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15544){if((e15544 instanceof Object)){
var ex__14740__auto__ = e15544;
var statearr_15545_15566 = state_15522;
(statearr_15545_15566[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15522);

return cljs.core.cst$kw$recur;
} else {
throw e15544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15567 = state_15522;
state_15522 = G__15567;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_15522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_15522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___15551,tc,fc))
})();
var state__14862__auto__ = (function (){var statearr_15546 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___15551);

return statearr_15546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___15551,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto__){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto__){
return (function (state_15631){
var state_val_15632 = (state_15631[(1)]);
if((state_val_15632 === (7))){
var inst_15627 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
var statearr_15633_15654 = state_15631__$1;
(statearr_15633_15654[(2)] = inst_15627);

(statearr_15633_15654[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15632 === (1))){
var inst_15611 = init;
var state_15631__$1 = (function (){var statearr_15634 = state_15631;
(statearr_15634[(7)] = inst_15611);

return statearr_15634;
})();
var statearr_15635_15655 = state_15631__$1;
(statearr_15635_15655[(2)] = null);

(statearr_15635_15655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15632 === (4))){
var inst_15614 = (state_15631[(8)]);
var inst_15614__$1 = (state_15631[(2)]);
var inst_15615 = (inst_15614__$1 == null);
var state_15631__$1 = (function (){var statearr_15636 = state_15631;
(statearr_15636[(8)] = inst_15614__$1);

return statearr_15636;
})();
if(cljs.core.truth_(inst_15615)){
var statearr_15637_15656 = state_15631__$1;
(statearr_15637_15656[(1)] = (5));

} else {
var statearr_15638_15657 = state_15631__$1;
(statearr_15638_15657[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15632 === (6))){
var inst_15618 = (state_15631[(9)]);
var inst_15614 = (state_15631[(8)]);
var inst_15611 = (state_15631[(7)]);
var inst_15618__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15611,inst_15614) : f.call(null,inst_15611,inst_15614));
var inst_15619 = cljs.core.reduced_QMARK_(inst_15618__$1);
var state_15631__$1 = (function (){var statearr_15639 = state_15631;
(statearr_15639[(9)] = inst_15618__$1);

return statearr_15639;
})();
if(inst_15619){
var statearr_15640_15658 = state_15631__$1;
(statearr_15640_15658[(1)] = (8));

} else {
var statearr_15641_15659 = state_15631__$1;
(statearr_15641_15659[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15632 === (3))){
var inst_15629 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15631__$1,inst_15629);
} else {
if((state_val_15632 === (2))){
var state_15631__$1 = state_15631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15631__$1,(4),ch);
} else {
if((state_val_15632 === (9))){
var inst_15618 = (state_15631[(9)]);
var inst_15611 = inst_15618;
var state_15631__$1 = (function (){var statearr_15642 = state_15631;
(statearr_15642[(7)] = inst_15611);

return statearr_15642;
})();
var statearr_15643_15660 = state_15631__$1;
(statearr_15643_15660[(2)] = null);

(statearr_15643_15660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15632 === (5))){
var inst_15611 = (state_15631[(7)]);
var state_15631__$1 = state_15631;
var statearr_15644_15661 = state_15631__$1;
(statearr_15644_15661[(2)] = inst_15611);

(statearr_15644_15661[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15632 === (10))){
var inst_15625 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
var statearr_15645_15662 = state_15631__$1;
(statearr_15645_15662[(2)] = inst_15625);

(statearr_15645_15662[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15632 === (8))){
var inst_15618 = (state_15631[(9)]);
var inst_15621 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15618) : cljs.core.deref.call(null,inst_15618));
var state_15631__$1 = state_15631;
var statearr_15646_15663 = state_15631__$1;
(statearr_15646_15663[(2)] = inst_15621);

(statearr_15646_15663[(1)] = (10));


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
});})(c__14860__auto__))
;
return ((function (switch__14736__auto__,c__14860__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14737__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14737__auto____0 = (function (){
var statearr_15650 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15650[(0)] = cljs$core$async$reduce_$_state_machine__14737__auto__);

(statearr_15650[(1)] = (1));

return statearr_15650;
});
var cljs$core$async$reduce_$_state_machine__14737__auto____1 = (function (state_15631){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15631);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15651){if((e15651 instanceof Object)){
var ex__14740__auto__ = e15651;
var statearr_15652_15664 = state_15631;
(statearr_15652_15664[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15631);

return cljs.core.cst$kw$recur;
} else {
throw e15651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15665 = state_15631;
state_15631 = G__15665;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14737__auto__ = function(state_15631){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14737__auto____1.call(this,state_15631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14737__auto____0;
cljs$core$async$reduce_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14737__auto____1;
return cljs$core$async$reduce_$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto__))
})();
var state__14862__auto__ = (function (){var statearr_15653 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto__);

return statearr_15653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto__))
);

return c__14860__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15666 = [];
var len__11124__auto___15718 = arguments.length;
var i__11125__auto___15719 = (0);
while(true){
if((i__11125__auto___15719 < len__11124__auto___15718)){
args15666.push((arguments[i__11125__auto___15719]));

var G__15720 = (i__11125__auto___15719 + (1));
i__11125__auto___15719 = G__15720;
continue;
} else {
}
break;
}

var G__15668 = args15666.length;
switch (G__15668) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15666.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto__){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto__){
return (function (state_15693){
var state_val_15694 = (state_15693[(1)]);
if((state_val_15694 === (7))){
var inst_15675 = (state_15693[(2)]);
var state_15693__$1 = state_15693;
var statearr_15695_15722 = state_15693__$1;
(statearr_15695_15722[(2)] = inst_15675);

(statearr_15695_15722[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (1))){
var inst_15669 = cljs.core.seq(coll);
var inst_15670 = inst_15669;
var state_15693__$1 = (function (){var statearr_15696 = state_15693;
(statearr_15696[(7)] = inst_15670);

return statearr_15696;
})();
var statearr_15697_15723 = state_15693__$1;
(statearr_15697_15723[(2)] = null);

(statearr_15697_15723[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (4))){
var inst_15670 = (state_15693[(7)]);
var inst_15673 = cljs.core.first(inst_15670);
var state_15693__$1 = state_15693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15693__$1,(7),ch,inst_15673);
} else {
if((state_val_15694 === (13))){
var inst_15687 = (state_15693[(2)]);
var state_15693__$1 = state_15693;
var statearr_15698_15724 = state_15693__$1;
(statearr_15698_15724[(2)] = inst_15687);

(statearr_15698_15724[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (6))){
var inst_15678 = (state_15693[(2)]);
var state_15693__$1 = state_15693;
if(cljs.core.truth_(inst_15678)){
var statearr_15699_15725 = state_15693__$1;
(statearr_15699_15725[(1)] = (8));

} else {
var statearr_15700_15726 = state_15693__$1;
(statearr_15700_15726[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (3))){
var inst_15691 = (state_15693[(2)]);
var state_15693__$1 = state_15693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15693__$1,inst_15691);
} else {
if((state_val_15694 === (12))){
var state_15693__$1 = state_15693;
var statearr_15701_15727 = state_15693__$1;
(statearr_15701_15727[(2)] = null);

(statearr_15701_15727[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (2))){
var inst_15670 = (state_15693[(7)]);
var state_15693__$1 = state_15693;
if(cljs.core.truth_(inst_15670)){
var statearr_15702_15728 = state_15693__$1;
(statearr_15702_15728[(1)] = (4));

} else {
var statearr_15703_15729 = state_15693__$1;
(statearr_15703_15729[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (11))){
var inst_15684 = cljs.core.async.close_BANG_(ch);
var state_15693__$1 = state_15693;
var statearr_15704_15730 = state_15693__$1;
(statearr_15704_15730[(2)] = inst_15684);

(statearr_15704_15730[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (9))){
var state_15693__$1 = state_15693;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15705_15731 = state_15693__$1;
(statearr_15705_15731[(1)] = (11));

} else {
var statearr_15706_15732 = state_15693__$1;
(statearr_15706_15732[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (5))){
var inst_15670 = (state_15693[(7)]);
var state_15693__$1 = state_15693;
var statearr_15707_15733 = state_15693__$1;
(statearr_15707_15733[(2)] = inst_15670);

(statearr_15707_15733[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (10))){
var inst_15689 = (state_15693[(2)]);
var state_15693__$1 = state_15693;
var statearr_15708_15734 = state_15693__$1;
(statearr_15708_15734[(2)] = inst_15689);

(statearr_15708_15734[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15694 === (8))){
var inst_15670 = (state_15693[(7)]);
var inst_15680 = cljs.core.next(inst_15670);
var inst_15670__$1 = inst_15680;
var state_15693__$1 = (function (){var statearr_15709 = state_15693;
(statearr_15709[(7)] = inst_15670__$1);

return statearr_15709;
})();
var statearr_15710_15735 = state_15693__$1;
(statearr_15710_15735[(2)] = null);

(statearr_15710_15735[(1)] = (2));


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
});})(c__14860__auto__))
;
return ((function (switch__14736__auto__,c__14860__auto__){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_15714 = [null,null,null,null,null,null,null,null];
(statearr_15714[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_15714[(1)] = (1));

return statearr_15714;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_15693){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_15693);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e15715){if((e15715 instanceof Object)){
var ex__14740__auto__ = e15715;
var statearr_15716_15736 = state_15693;
(statearr_15716_15736[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15693);

return cljs.core.cst$kw$recur;
} else {
throw e15715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__15737 = state_15693;
state_15693 = G__15737;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_15693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_15693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto__))
})();
var state__14862__auto__ = (function (){var statearr_15717 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_15717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto__);

return statearr_15717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto__))
);

return c__14860__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__10679__auto__ = (((_ == null))?null:_);
var m__10680__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__10680__auto__.call(null,_));
} else {
var m__10680__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__10680__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10680__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__10680__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10680__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10680__auto__.call(null,m,ch));
} else {
var m__10680__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10680__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10680__auto__.call(null,m));
} else {
var m__10680__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10680__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15966 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15966) : cljs.core.atom.call(null,G__15966));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15967 = (function (ch,cs,meta15968){
this.ch = ch;
this.cs = cs;
this.meta15968 = meta15968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15969,meta15968__$1){
var self__ = this;
var _15969__$1 = this;
return (new cljs.core.async.t_cljs$core$async15967(self__.ch,self__.cs,meta15968__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15969){
var self__ = this;
var _15969__$1 = this;
return self__.meta15968;
});})(cs))
;

cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15967.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15970_16194 = self__.cs;
var G__15971_16195 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15970_16194,G__15971_16195) : cljs.core.reset_BANG_.call(null,G__15970_16194,G__15971_16195));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15967.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15968], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15967";

cljs.core.async.t_cljs$core$async15967.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async15967");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15967 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15967(ch__$1,cs__$1,meta15968){
return (new cljs.core.async.t_cljs$core$async15967(ch__$1,cs__$1,meta15968));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15967(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14860__auto___16196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___16196,cs,m,dchan,dctr,done){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___16196,cs,m,dchan,dctr,done){
return (function (state_16106){
var state_val_16107 = (state_16106[(1)]);
if((state_val_16107 === (7))){
var inst_16102 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16108_16197 = state_16106__$1;
(statearr_16108_16197[(2)] = inst_16102);

(statearr_16108_16197[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (20))){
var inst_16005 = (state_16106[(7)]);
var inst_16017 = cljs.core.first(inst_16005);
var inst_16018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16017,(0),null);
var inst_16019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16017,(1),null);
var state_16106__$1 = (function (){var statearr_16109 = state_16106;
(statearr_16109[(8)] = inst_16018);

return statearr_16109;
})();
if(cljs.core.truth_(inst_16019)){
var statearr_16110_16198 = state_16106__$1;
(statearr_16110_16198[(1)] = (22));

} else {
var statearr_16111_16199 = state_16106__$1;
(statearr_16111_16199[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (27))){
var inst_16047 = (state_16106[(9)]);
var inst_16049 = (state_16106[(10)]);
var inst_15974 = (state_16106[(11)]);
var inst_16054 = (state_16106[(12)]);
var inst_16054__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16047,inst_16049);
var inst_16055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16054__$1,inst_15974,done);
var state_16106__$1 = (function (){var statearr_16112 = state_16106;
(statearr_16112[(12)] = inst_16054__$1);

return statearr_16112;
})();
if(cljs.core.truth_(inst_16055)){
var statearr_16113_16200 = state_16106__$1;
(statearr_16113_16200[(1)] = (30));

} else {
var statearr_16114_16201 = state_16106__$1;
(statearr_16114_16201[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (1))){
var state_16106__$1 = state_16106;
var statearr_16115_16202 = state_16106__$1;
(statearr_16115_16202[(2)] = null);

(statearr_16115_16202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (24))){
var inst_16005 = (state_16106[(7)]);
var inst_16024 = (state_16106[(2)]);
var inst_16025 = cljs.core.next(inst_16005);
var inst_15983 = inst_16025;
var inst_15984 = null;
var inst_15985 = (0);
var inst_15986 = (0);
var state_16106__$1 = (function (){var statearr_16116 = state_16106;
(statearr_16116[(13)] = inst_15984);

(statearr_16116[(14)] = inst_15985);

(statearr_16116[(15)] = inst_16024);

(statearr_16116[(16)] = inst_15983);

(statearr_16116[(17)] = inst_15986);

return statearr_16116;
})();
var statearr_16117_16203 = state_16106__$1;
(statearr_16117_16203[(2)] = null);

(statearr_16117_16203[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (39))){
var state_16106__$1 = state_16106;
var statearr_16121_16204 = state_16106__$1;
(statearr_16121_16204[(2)] = null);

(statearr_16121_16204[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (4))){
var inst_15974 = (state_16106[(11)]);
var inst_15974__$1 = (state_16106[(2)]);
var inst_15975 = (inst_15974__$1 == null);
var state_16106__$1 = (function (){var statearr_16122 = state_16106;
(statearr_16122[(11)] = inst_15974__$1);

return statearr_16122;
})();
if(cljs.core.truth_(inst_15975)){
var statearr_16123_16205 = state_16106__$1;
(statearr_16123_16205[(1)] = (5));

} else {
var statearr_16124_16206 = state_16106__$1;
(statearr_16124_16206[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (15))){
var inst_15984 = (state_16106[(13)]);
var inst_15985 = (state_16106[(14)]);
var inst_15983 = (state_16106[(16)]);
var inst_15986 = (state_16106[(17)]);
var inst_16001 = (state_16106[(2)]);
var inst_16002 = (inst_15986 + (1));
var tmp16118 = inst_15984;
var tmp16119 = inst_15985;
var tmp16120 = inst_15983;
var inst_15983__$1 = tmp16120;
var inst_15984__$1 = tmp16118;
var inst_15985__$1 = tmp16119;
var inst_15986__$1 = inst_16002;
var state_16106__$1 = (function (){var statearr_16125 = state_16106;
(statearr_16125[(13)] = inst_15984__$1);

(statearr_16125[(14)] = inst_15985__$1);

(statearr_16125[(16)] = inst_15983__$1);

(statearr_16125[(18)] = inst_16001);

(statearr_16125[(17)] = inst_15986__$1);

return statearr_16125;
})();
var statearr_16126_16207 = state_16106__$1;
(statearr_16126_16207[(2)] = null);

(statearr_16126_16207[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (21))){
var inst_16028 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16130_16208 = state_16106__$1;
(statearr_16130_16208[(2)] = inst_16028);

(statearr_16130_16208[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (31))){
var inst_16054 = (state_16106[(12)]);
var inst_16058 = done(null);
var inst_16059 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16054);
var state_16106__$1 = (function (){var statearr_16131 = state_16106;
(statearr_16131[(19)] = inst_16058);

return statearr_16131;
})();
var statearr_16132_16209 = state_16106__$1;
(statearr_16132_16209[(2)] = inst_16059);

(statearr_16132_16209[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (32))){
var inst_16048 = (state_16106[(20)]);
var inst_16047 = (state_16106[(9)]);
var inst_16049 = (state_16106[(10)]);
var inst_16046 = (state_16106[(21)]);
var inst_16061 = (state_16106[(2)]);
var inst_16062 = (inst_16049 + (1));
var tmp16127 = inst_16048;
var tmp16128 = inst_16047;
var tmp16129 = inst_16046;
var inst_16046__$1 = tmp16129;
var inst_16047__$1 = tmp16128;
var inst_16048__$1 = tmp16127;
var inst_16049__$1 = inst_16062;
var state_16106__$1 = (function (){var statearr_16133 = state_16106;
(statearr_16133[(20)] = inst_16048__$1);

(statearr_16133[(22)] = inst_16061);

(statearr_16133[(9)] = inst_16047__$1);

(statearr_16133[(10)] = inst_16049__$1);

(statearr_16133[(21)] = inst_16046__$1);

return statearr_16133;
})();
var statearr_16134_16210 = state_16106__$1;
(statearr_16134_16210[(2)] = null);

(statearr_16134_16210[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (40))){
var inst_16074 = (state_16106[(23)]);
var inst_16078 = done(null);
var inst_16079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16074);
var state_16106__$1 = (function (){var statearr_16135 = state_16106;
(statearr_16135[(24)] = inst_16078);

return statearr_16135;
})();
var statearr_16136_16211 = state_16106__$1;
(statearr_16136_16211[(2)] = inst_16079);

(statearr_16136_16211[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (33))){
var inst_16065 = (state_16106[(25)]);
var inst_16067 = cljs.core.chunked_seq_QMARK_(inst_16065);
var state_16106__$1 = state_16106;
if(inst_16067){
var statearr_16137_16212 = state_16106__$1;
(statearr_16137_16212[(1)] = (36));

} else {
var statearr_16138_16213 = state_16106__$1;
(statearr_16138_16213[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (13))){
var inst_15995 = (state_16106[(26)]);
var inst_15998 = cljs.core.async.close_BANG_(inst_15995);
var state_16106__$1 = state_16106;
var statearr_16139_16214 = state_16106__$1;
(statearr_16139_16214[(2)] = inst_15998);

(statearr_16139_16214[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (22))){
var inst_16018 = (state_16106[(8)]);
var inst_16021 = cljs.core.async.close_BANG_(inst_16018);
var state_16106__$1 = state_16106;
var statearr_16140_16215 = state_16106__$1;
(statearr_16140_16215[(2)] = inst_16021);

(statearr_16140_16215[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (36))){
var inst_16065 = (state_16106[(25)]);
var inst_16069 = cljs.core.chunk_first(inst_16065);
var inst_16070 = cljs.core.chunk_rest(inst_16065);
var inst_16071 = cljs.core.count(inst_16069);
var inst_16046 = inst_16070;
var inst_16047 = inst_16069;
var inst_16048 = inst_16071;
var inst_16049 = (0);
var state_16106__$1 = (function (){var statearr_16141 = state_16106;
(statearr_16141[(20)] = inst_16048);

(statearr_16141[(9)] = inst_16047);

(statearr_16141[(10)] = inst_16049);

(statearr_16141[(21)] = inst_16046);

return statearr_16141;
})();
var statearr_16142_16216 = state_16106__$1;
(statearr_16142_16216[(2)] = null);

(statearr_16142_16216[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (41))){
var inst_16065 = (state_16106[(25)]);
var inst_16081 = (state_16106[(2)]);
var inst_16082 = cljs.core.next(inst_16065);
var inst_16046 = inst_16082;
var inst_16047 = null;
var inst_16048 = (0);
var inst_16049 = (0);
var state_16106__$1 = (function (){var statearr_16143 = state_16106;
(statearr_16143[(20)] = inst_16048);

(statearr_16143[(27)] = inst_16081);

(statearr_16143[(9)] = inst_16047);

(statearr_16143[(10)] = inst_16049);

(statearr_16143[(21)] = inst_16046);

return statearr_16143;
})();
var statearr_16144_16217 = state_16106__$1;
(statearr_16144_16217[(2)] = null);

(statearr_16144_16217[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (43))){
var state_16106__$1 = state_16106;
var statearr_16145_16218 = state_16106__$1;
(statearr_16145_16218[(2)] = null);

(statearr_16145_16218[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (29))){
var inst_16090 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16146_16219 = state_16106__$1;
(statearr_16146_16219[(2)] = inst_16090);

(statearr_16146_16219[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (44))){
var inst_16099 = (state_16106[(2)]);
var state_16106__$1 = (function (){var statearr_16147 = state_16106;
(statearr_16147[(28)] = inst_16099);

return statearr_16147;
})();
var statearr_16148_16220 = state_16106__$1;
(statearr_16148_16220[(2)] = null);

(statearr_16148_16220[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (6))){
var inst_16038 = (state_16106[(29)]);
var inst_16037 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16038__$1 = cljs.core.keys(inst_16037);
var inst_16039 = cljs.core.count(inst_16038__$1);
var inst_16040 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16039) : cljs.core.reset_BANG_.call(null,dctr,inst_16039));
var inst_16045 = cljs.core.seq(inst_16038__$1);
var inst_16046 = inst_16045;
var inst_16047 = null;
var inst_16048 = (0);
var inst_16049 = (0);
var state_16106__$1 = (function (){var statearr_16149 = state_16106;
(statearr_16149[(20)] = inst_16048);

(statearr_16149[(29)] = inst_16038__$1);

(statearr_16149[(9)] = inst_16047);

(statearr_16149[(10)] = inst_16049);

(statearr_16149[(30)] = inst_16040);

(statearr_16149[(21)] = inst_16046);

return statearr_16149;
})();
var statearr_16150_16221 = state_16106__$1;
(statearr_16150_16221[(2)] = null);

(statearr_16150_16221[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (28))){
var inst_16065 = (state_16106[(25)]);
var inst_16046 = (state_16106[(21)]);
var inst_16065__$1 = cljs.core.seq(inst_16046);
var state_16106__$1 = (function (){var statearr_16151 = state_16106;
(statearr_16151[(25)] = inst_16065__$1);

return statearr_16151;
})();
if(inst_16065__$1){
var statearr_16152_16222 = state_16106__$1;
(statearr_16152_16222[(1)] = (33));

} else {
var statearr_16153_16223 = state_16106__$1;
(statearr_16153_16223[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (25))){
var inst_16048 = (state_16106[(20)]);
var inst_16049 = (state_16106[(10)]);
var inst_16051 = (inst_16049 < inst_16048);
var inst_16052 = inst_16051;
var state_16106__$1 = state_16106;
if(cljs.core.truth_(inst_16052)){
var statearr_16154_16224 = state_16106__$1;
(statearr_16154_16224[(1)] = (27));

} else {
var statearr_16155_16225 = state_16106__$1;
(statearr_16155_16225[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (34))){
var state_16106__$1 = state_16106;
var statearr_16156_16226 = state_16106__$1;
(statearr_16156_16226[(2)] = null);

(statearr_16156_16226[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (17))){
var state_16106__$1 = state_16106;
var statearr_16157_16227 = state_16106__$1;
(statearr_16157_16227[(2)] = null);

(statearr_16157_16227[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (3))){
var inst_16104 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16106__$1,inst_16104);
} else {
if((state_val_16107 === (12))){
var inst_16033 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16158_16228 = state_16106__$1;
(statearr_16158_16228[(2)] = inst_16033);

(statearr_16158_16228[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (2))){
var state_16106__$1 = state_16106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16106__$1,(4),ch);
} else {
if((state_val_16107 === (23))){
var state_16106__$1 = state_16106;
var statearr_16159_16229 = state_16106__$1;
(statearr_16159_16229[(2)] = null);

(statearr_16159_16229[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (35))){
var inst_16088 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16160_16230 = state_16106__$1;
(statearr_16160_16230[(2)] = inst_16088);

(statearr_16160_16230[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (19))){
var inst_16005 = (state_16106[(7)]);
var inst_16009 = cljs.core.chunk_first(inst_16005);
var inst_16010 = cljs.core.chunk_rest(inst_16005);
var inst_16011 = cljs.core.count(inst_16009);
var inst_15983 = inst_16010;
var inst_15984 = inst_16009;
var inst_15985 = inst_16011;
var inst_15986 = (0);
var state_16106__$1 = (function (){var statearr_16161 = state_16106;
(statearr_16161[(13)] = inst_15984);

(statearr_16161[(14)] = inst_15985);

(statearr_16161[(16)] = inst_15983);

(statearr_16161[(17)] = inst_15986);

return statearr_16161;
})();
var statearr_16162_16231 = state_16106__$1;
(statearr_16162_16231[(2)] = null);

(statearr_16162_16231[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (11))){
var inst_15983 = (state_16106[(16)]);
var inst_16005 = (state_16106[(7)]);
var inst_16005__$1 = cljs.core.seq(inst_15983);
var state_16106__$1 = (function (){var statearr_16163 = state_16106;
(statearr_16163[(7)] = inst_16005__$1);

return statearr_16163;
})();
if(inst_16005__$1){
var statearr_16164_16232 = state_16106__$1;
(statearr_16164_16232[(1)] = (16));

} else {
var statearr_16165_16233 = state_16106__$1;
(statearr_16165_16233[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (9))){
var inst_16035 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16166_16234 = state_16106__$1;
(statearr_16166_16234[(2)] = inst_16035);

(statearr_16166_16234[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (5))){
var inst_15981 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15982 = cljs.core.seq(inst_15981);
var inst_15983 = inst_15982;
var inst_15984 = null;
var inst_15985 = (0);
var inst_15986 = (0);
var state_16106__$1 = (function (){var statearr_16167 = state_16106;
(statearr_16167[(13)] = inst_15984);

(statearr_16167[(14)] = inst_15985);

(statearr_16167[(16)] = inst_15983);

(statearr_16167[(17)] = inst_15986);

return statearr_16167;
})();
var statearr_16168_16235 = state_16106__$1;
(statearr_16168_16235[(2)] = null);

(statearr_16168_16235[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (14))){
var state_16106__$1 = state_16106;
var statearr_16169_16236 = state_16106__$1;
(statearr_16169_16236[(2)] = null);

(statearr_16169_16236[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (45))){
var inst_16096 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16170_16237 = state_16106__$1;
(statearr_16170_16237[(2)] = inst_16096);

(statearr_16170_16237[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (26))){
var inst_16038 = (state_16106[(29)]);
var inst_16092 = (state_16106[(2)]);
var inst_16093 = cljs.core.seq(inst_16038);
var state_16106__$1 = (function (){var statearr_16171 = state_16106;
(statearr_16171[(31)] = inst_16092);

return statearr_16171;
})();
if(inst_16093){
var statearr_16172_16238 = state_16106__$1;
(statearr_16172_16238[(1)] = (42));

} else {
var statearr_16173_16239 = state_16106__$1;
(statearr_16173_16239[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (16))){
var inst_16005 = (state_16106[(7)]);
var inst_16007 = cljs.core.chunked_seq_QMARK_(inst_16005);
var state_16106__$1 = state_16106;
if(inst_16007){
var statearr_16174_16240 = state_16106__$1;
(statearr_16174_16240[(1)] = (19));

} else {
var statearr_16175_16241 = state_16106__$1;
(statearr_16175_16241[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (38))){
var inst_16085 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16176_16242 = state_16106__$1;
(statearr_16176_16242[(2)] = inst_16085);

(statearr_16176_16242[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (30))){
var state_16106__$1 = state_16106;
var statearr_16177_16243 = state_16106__$1;
(statearr_16177_16243[(2)] = null);

(statearr_16177_16243[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (10))){
var inst_15984 = (state_16106[(13)]);
var inst_15986 = (state_16106[(17)]);
var inst_15994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15984,inst_15986);
var inst_15995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15994,(0),null);
var inst_15996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15994,(1),null);
var state_16106__$1 = (function (){var statearr_16178 = state_16106;
(statearr_16178[(26)] = inst_15995);

return statearr_16178;
})();
if(cljs.core.truth_(inst_15996)){
var statearr_16179_16244 = state_16106__$1;
(statearr_16179_16244[(1)] = (13));

} else {
var statearr_16180_16245 = state_16106__$1;
(statearr_16180_16245[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (18))){
var inst_16031 = (state_16106[(2)]);
var state_16106__$1 = state_16106;
var statearr_16181_16246 = state_16106__$1;
(statearr_16181_16246[(2)] = inst_16031);

(statearr_16181_16246[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (42))){
var state_16106__$1 = state_16106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16106__$1,(45),dchan);
} else {
if((state_val_16107 === (37))){
var inst_16074 = (state_16106[(23)]);
var inst_16065 = (state_16106[(25)]);
var inst_15974 = (state_16106[(11)]);
var inst_16074__$1 = cljs.core.first(inst_16065);
var inst_16075 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16074__$1,inst_15974,done);
var state_16106__$1 = (function (){var statearr_16182 = state_16106;
(statearr_16182[(23)] = inst_16074__$1);

return statearr_16182;
})();
if(cljs.core.truth_(inst_16075)){
var statearr_16183_16247 = state_16106__$1;
(statearr_16183_16247[(1)] = (39));

} else {
var statearr_16184_16248 = state_16106__$1;
(statearr_16184_16248[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16107 === (8))){
var inst_15985 = (state_16106[(14)]);
var inst_15986 = (state_16106[(17)]);
var inst_15988 = (inst_15986 < inst_15985);
var inst_15989 = inst_15988;
var state_16106__$1 = state_16106;
if(cljs.core.truth_(inst_15989)){
var statearr_16185_16249 = state_16106__$1;
(statearr_16185_16249[(1)] = (10));

} else {
var statearr_16186_16250 = state_16106__$1;
(statearr_16186_16250[(1)] = (11));

}

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
}
}
}
});})(c__14860__auto___16196,cs,m,dchan,dctr,done))
;
return ((function (switch__14736__auto__,c__14860__auto___16196,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14737__auto__ = null;
var cljs$core$async$mult_$_state_machine__14737__auto____0 = (function (){
var statearr_16190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16190[(0)] = cljs$core$async$mult_$_state_machine__14737__auto__);

(statearr_16190[(1)] = (1));

return statearr_16190;
});
var cljs$core$async$mult_$_state_machine__14737__auto____1 = (function (state_16106){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_16106);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e16191){if((e16191 instanceof Object)){
var ex__14740__auto__ = e16191;
var statearr_16192_16251 = state_16106;
(statearr_16192_16251[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16106);

return cljs.core.cst$kw$recur;
} else {
throw e16191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__16252 = state_16106;
state_16106 = G__16252;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14737__auto__ = function(state_16106){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14737__auto____1.call(this,state_16106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14737__auto____0;
cljs$core$async$mult_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14737__auto____1;
return cljs$core$async$mult_$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___16196,cs,m,dchan,dctr,done))
})();
var state__14862__auto__ = (function (){var statearr_16193 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_16193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___16196);

return statearr_16193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___16196,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16253 = [];
var len__11124__auto___16256 = arguments.length;
var i__11125__auto___16257 = (0);
while(true){
if((i__11125__auto___16257 < len__11124__auto___16256)){
args16253.push((arguments[i__11125__auto___16257]));

var G__16258 = (i__11125__auto___16257 + (1));
i__11125__auto___16257 = G__16258;
continue;
} else {
}
break;
}

var G__16255 = args16253.length;
switch (G__16255) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16253.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10680__auto__.call(null,m,ch));
} else {
var m__10680__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10680__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10680__auto__.call(null,m,ch));
} else {
var m__10680__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10680__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10680__auto__.call(null,m));
} else {
var m__10680__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10680__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10680__auto__.call(null,m,state_map));
} else {
var m__10680__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10680__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__10679__auto__ = (((m == null))?null:m);
var m__10680__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10680__auto__.call(null,m,mode));
} else {
var m__10680__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10680__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11131__auto__ = [];
var len__11124__auto___16270 = arguments.length;
var i__11125__auto___16271 = (0);
while(true){
if((i__11125__auto___16271 < len__11124__auto___16270)){
args__11131__auto__.push((arguments[i__11125__auto___16271]));

var G__16272 = (i__11125__auto___16271 + (1));
i__11125__auto___16271 = G__16272;
continue;
} else {
}
break;
}

var argseq__11132__auto__ = ((((3) < args__11131__auto__.length))?(new cljs.core.IndexedSeq(args__11131__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11132__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16264){
var map__16265 = p__16264;
var map__16265__$1 = ((((!((map__16265 == null)))?((((map__16265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16265):map__16265);
var opts = map__16265__$1;
var statearr_16267_16273 = state;
(statearr_16267_16273[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16265,map__16265__$1,opts){
return (function (val){
var statearr_16268_16274 = state;
(statearr_16268_16274[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16265,map__16265__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16269_16275 = state;
(statearr_16269_16275[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16260){
var G__16261 = cljs.core.first(seq16260);
var seq16260__$1 = cljs.core.next(seq16260);
var G__16262 = cljs.core.first(seq16260__$1);
var seq16260__$2 = cljs.core.next(seq16260__$1);
var G__16263 = cljs.core.first(seq16260__$2);
var seq16260__$3 = cljs.core.next(seq16260__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16261,G__16262,G__16263,seq16260__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16447 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16447) : cljs.core.atom.call(null,G__16447));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__16448 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16448) : cljs.core.atom.call(null,G__16448));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16449 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16450){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16450 = meta16450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16451,meta16450__$1){
var self__ = this;
var _16451__$1 = this;
return (new cljs.core.async.t_cljs$core$async16449(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16450__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16451){
var self__ = this;
var _16451__$1 = this;
return self__.meta16450;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16452_16618 = self__.cs;
var G__16453_16619 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16452_16618,G__16453_16619) : cljs.core.reset_BANG_.call(null,G__16452_16618,G__16453_16619));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16450], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16449";

cljs.core.async.t_cljs$core$async16449.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async16449");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16449 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16449(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16450){
return (new cljs.core.async.t_cljs$core$async16449(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16450));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16449(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14860__auto___16620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16555){
var state_val_16556 = (state_16555[(1)]);
if((state_val_16556 === (7))){
var inst_16470 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16557_16621 = state_16555__$1;
(statearr_16557_16621[(2)] = inst_16470);

(statearr_16557_16621[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (20))){
var inst_16482 = (state_16555[(7)]);
var state_16555__$1 = state_16555;
var statearr_16558_16622 = state_16555__$1;
(statearr_16558_16622[(2)] = inst_16482);

(statearr_16558_16622[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (27))){
var state_16555__$1 = state_16555;
var statearr_16559_16623 = state_16555__$1;
(statearr_16559_16623[(2)] = null);

(statearr_16559_16623[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (1))){
var inst_16457 = (state_16555[(8)]);
var inst_16457__$1 = calc_state();
var inst_16459 = (inst_16457__$1 == null);
var inst_16460 = cljs.core.not(inst_16459);
var state_16555__$1 = (function (){var statearr_16560 = state_16555;
(statearr_16560[(8)] = inst_16457__$1);

return statearr_16560;
})();
if(inst_16460){
var statearr_16561_16624 = state_16555__$1;
(statearr_16561_16624[(1)] = (2));

} else {
var statearr_16562_16625 = state_16555__$1;
(statearr_16562_16625[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (24))){
var inst_16515 = (state_16555[(9)]);
var inst_16529 = (state_16555[(10)]);
var inst_16506 = (state_16555[(11)]);
var inst_16529__$1 = (inst_16506.cljs$core$IFn$_invoke$arity$1 ? inst_16506.cljs$core$IFn$_invoke$arity$1(inst_16515) : inst_16506.call(null,inst_16515));
var state_16555__$1 = (function (){var statearr_16563 = state_16555;
(statearr_16563[(10)] = inst_16529__$1);

return statearr_16563;
})();
if(cljs.core.truth_(inst_16529__$1)){
var statearr_16564_16626 = state_16555__$1;
(statearr_16564_16626[(1)] = (29));

} else {
var statearr_16565_16627 = state_16555__$1;
(statearr_16565_16627[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (4))){
var inst_16473 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16473)){
var statearr_16566_16628 = state_16555__$1;
(statearr_16566_16628[(1)] = (8));

} else {
var statearr_16567_16629 = state_16555__$1;
(statearr_16567_16629[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (15))){
var inst_16500 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16500)){
var statearr_16568_16630 = state_16555__$1;
(statearr_16568_16630[(1)] = (19));

} else {
var statearr_16569_16631 = state_16555__$1;
(statearr_16569_16631[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (21))){
var inst_16505 = (state_16555[(12)]);
var inst_16505__$1 = (state_16555[(2)]);
var inst_16506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16505__$1,cljs.core.cst$kw$solos);
var inst_16507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16505__$1,cljs.core.cst$kw$mutes);
var inst_16508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16505__$1,cljs.core.cst$kw$reads);
var state_16555__$1 = (function (){var statearr_16570 = state_16555;
(statearr_16570[(13)] = inst_16507);

(statearr_16570[(11)] = inst_16506);

(statearr_16570[(12)] = inst_16505__$1);

return statearr_16570;
})();
return cljs.core.async.ioc_alts_BANG_(state_16555__$1,(22),inst_16508);
} else {
if((state_val_16556 === (31))){
var inst_16537 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16537)){
var statearr_16571_16632 = state_16555__$1;
(statearr_16571_16632[(1)] = (32));

} else {
var statearr_16572_16633 = state_16555__$1;
(statearr_16572_16633[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (32))){
var inst_16514 = (state_16555[(14)]);
var state_16555__$1 = state_16555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16555__$1,(35),out,inst_16514);
} else {
if((state_val_16556 === (33))){
var inst_16505 = (state_16555[(12)]);
var inst_16482 = inst_16505;
var state_16555__$1 = (function (){var statearr_16573 = state_16555;
(statearr_16573[(7)] = inst_16482);

return statearr_16573;
})();
var statearr_16574_16634 = state_16555__$1;
(statearr_16574_16634[(2)] = null);

(statearr_16574_16634[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (13))){
var inst_16482 = (state_16555[(7)]);
var inst_16489 = inst_16482.cljs$lang$protocol_mask$partition0$;
var inst_16490 = (inst_16489 & (64));
var inst_16491 = inst_16482.cljs$core$ISeq$;
var inst_16492 = (cljs.core.PROTOCOL_SENTINEL === inst_16491);
var inst_16493 = (inst_16490) || (inst_16492);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16493)){
var statearr_16575_16635 = state_16555__$1;
(statearr_16575_16635[(1)] = (16));

} else {
var statearr_16576_16636 = state_16555__$1;
(statearr_16576_16636[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (22))){
var inst_16515 = (state_16555[(9)]);
var inst_16514 = (state_16555[(14)]);
var inst_16513 = (state_16555[(2)]);
var inst_16514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16513,(0),null);
var inst_16515__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16513,(1),null);
var inst_16516 = (inst_16514__$1 == null);
var inst_16517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16515__$1,change);
var inst_16518 = (inst_16516) || (inst_16517);
var state_16555__$1 = (function (){var statearr_16577 = state_16555;
(statearr_16577[(9)] = inst_16515__$1);

(statearr_16577[(14)] = inst_16514__$1);

return statearr_16577;
})();
if(cljs.core.truth_(inst_16518)){
var statearr_16578_16637 = state_16555__$1;
(statearr_16578_16637[(1)] = (23));

} else {
var statearr_16579_16638 = state_16555__$1;
(statearr_16579_16638[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (36))){
var inst_16505 = (state_16555[(12)]);
var inst_16482 = inst_16505;
var state_16555__$1 = (function (){var statearr_16580 = state_16555;
(statearr_16580[(7)] = inst_16482);

return statearr_16580;
})();
var statearr_16581_16639 = state_16555__$1;
(statearr_16581_16639[(2)] = null);

(statearr_16581_16639[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (29))){
var inst_16529 = (state_16555[(10)]);
var state_16555__$1 = state_16555;
var statearr_16582_16640 = state_16555__$1;
(statearr_16582_16640[(2)] = inst_16529);

(statearr_16582_16640[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (6))){
var state_16555__$1 = state_16555;
var statearr_16583_16641 = state_16555__$1;
(statearr_16583_16641[(2)] = false);

(statearr_16583_16641[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (28))){
var inst_16525 = (state_16555[(2)]);
var inst_16526 = calc_state();
var inst_16482 = inst_16526;
var state_16555__$1 = (function (){var statearr_16584 = state_16555;
(statearr_16584[(7)] = inst_16482);

(statearr_16584[(15)] = inst_16525);

return statearr_16584;
})();
var statearr_16585_16642 = state_16555__$1;
(statearr_16585_16642[(2)] = null);

(statearr_16585_16642[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (25))){
var inst_16551 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16586_16643 = state_16555__$1;
(statearr_16586_16643[(2)] = inst_16551);

(statearr_16586_16643[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (34))){
var inst_16549 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16587_16644 = state_16555__$1;
(statearr_16587_16644[(2)] = inst_16549);

(statearr_16587_16644[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (17))){
var state_16555__$1 = state_16555;
var statearr_16588_16645 = state_16555__$1;
(statearr_16588_16645[(2)] = false);

(statearr_16588_16645[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (3))){
var state_16555__$1 = state_16555;
var statearr_16589_16646 = state_16555__$1;
(statearr_16589_16646[(2)] = false);

(statearr_16589_16646[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (12))){
var inst_16553 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16555__$1,inst_16553);
} else {
if((state_val_16556 === (2))){
var inst_16457 = (state_16555[(8)]);
var inst_16462 = inst_16457.cljs$lang$protocol_mask$partition0$;
var inst_16463 = (inst_16462 & (64));
var inst_16464 = inst_16457.cljs$core$ISeq$;
var inst_16465 = (cljs.core.PROTOCOL_SENTINEL === inst_16464);
var inst_16466 = (inst_16463) || (inst_16465);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16466)){
var statearr_16590_16647 = state_16555__$1;
(statearr_16590_16647[(1)] = (5));

} else {
var statearr_16591_16648 = state_16555__$1;
(statearr_16591_16648[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (23))){
var inst_16514 = (state_16555[(14)]);
var inst_16520 = (inst_16514 == null);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16520)){
var statearr_16592_16649 = state_16555__$1;
(statearr_16592_16649[(1)] = (26));

} else {
var statearr_16593_16650 = state_16555__$1;
(statearr_16593_16650[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (35))){
var inst_16540 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16540)){
var statearr_16594_16651 = state_16555__$1;
(statearr_16594_16651[(1)] = (36));

} else {
var statearr_16595_16652 = state_16555__$1;
(statearr_16595_16652[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (19))){
var inst_16482 = (state_16555[(7)]);
var inst_16502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16482);
var state_16555__$1 = state_16555;
var statearr_16596_16653 = state_16555__$1;
(statearr_16596_16653[(2)] = inst_16502);

(statearr_16596_16653[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (11))){
var inst_16482 = (state_16555[(7)]);
var inst_16486 = (inst_16482 == null);
var inst_16487 = cljs.core.not(inst_16486);
var state_16555__$1 = state_16555;
if(inst_16487){
var statearr_16597_16654 = state_16555__$1;
(statearr_16597_16654[(1)] = (13));

} else {
var statearr_16598_16655 = state_16555__$1;
(statearr_16598_16655[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (9))){
var inst_16457 = (state_16555[(8)]);
var state_16555__$1 = state_16555;
var statearr_16599_16656 = state_16555__$1;
(statearr_16599_16656[(2)] = inst_16457);

(statearr_16599_16656[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (5))){
var state_16555__$1 = state_16555;
var statearr_16600_16657 = state_16555__$1;
(statearr_16600_16657[(2)] = true);

(statearr_16600_16657[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (14))){
var state_16555__$1 = state_16555;
var statearr_16601_16658 = state_16555__$1;
(statearr_16601_16658[(2)] = false);

(statearr_16601_16658[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (26))){
var inst_16515 = (state_16555[(9)]);
var inst_16522 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16515);
var state_16555__$1 = state_16555;
var statearr_16602_16659 = state_16555__$1;
(statearr_16602_16659[(2)] = inst_16522);

(statearr_16602_16659[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (16))){
var state_16555__$1 = state_16555;
var statearr_16603_16660 = state_16555__$1;
(statearr_16603_16660[(2)] = true);

(statearr_16603_16660[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (38))){
var inst_16545 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16604_16661 = state_16555__$1;
(statearr_16604_16661[(2)] = inst_16545);

(statearr_16604_16661[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (30))){
var inst_16515 = (state_16555[(9)]);
var inst_16507 = (state_16555[(13)]);
var inst_16506 = (state_16555[(11)]);
var inst_16532 = cljs.core.empty_QMARK_(inst_16506);
var inst_16533 = (inst_16507.cljs$core$IFn$_invoke$arity$1 ? inst_16507.cljs$core$IFn$_invoke$arity$1(inst_16515) : inst_16507.call(null,inst_16515));
var inst_16534 = cljs.core.not(inst_16533);
var inst_16535 = (inst_16532) && (inst_16534);
var state_16555__$1 = state_16555;
var statearr_16605_16662 = state_16555__$1;
(statearr_16605_16662[(2)] = inst_16535);

(statearr_16605_16662[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (10))){
var inst_16457 = (state_16555[(8)]);
var inst_16478 = (state_16555[(2)]);
var inst_16479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16478,cljs.core.cst$kw$solos);
var inst_16480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16478,cljs.core.cst$kw$mutes);
var inst_16481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16478,cljs.core.cst$kw$reads);
var inst_16482 = inst_16457;
var state_16555__$1 = (function (){var statearr_16606 = state_16555;
(statearr_16606[(7)] = inst_16482);

(statearr_16606[(16)] = inst_16481);

(statearr_16606[(17)] = inst_16479);

(statearr_16606[(18)] = inst_16480);

return statearr_16606;
})();
var statearr_16607_16663 = state_16555__$1;
(statearr_16607_16663[(2)] = null);

(statearr_16607_16663[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (18))){
var inst_16497 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16608_16664 = state_16555__$1;
(statearr_16608_16664[(2)] = inst_16497);

(statearr_16608_16664[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (37))){
var state_16555__$1 = state_16555;
var statearr_16609_16665 = state_16555__$1;
(statearr_16609_16665[(2)] = null);

(statearr_16609_16665[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16556 === (8))){
var inst_16457 = (state_16555[(8)]);
var inst_16475 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16457);
var state_16555__$1 = state_16555;
var statearr_16610_16666 = state_16555__$1;
(statearr_16610_16666[(2)] = inst_16475);

(statearr_16610_16666[(1)] = (10));


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
});})(c__14860__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14736__auto__,c__14860__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14737__auto__ = null;
var cljs$core$async$mix_$_state_machine__14737__auto____0 = (function (){
var statearr_16614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16614[(0)] = cljs$core$async$mix_$_state_machine__14737__auto__);

(statearr_16614[(1)] = (1));

return statearr_16614;
});
var cljs$core$async$mix_$_state_machine__14737__auto____1 = (function (state_16555){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_16555);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e16615){if((e16615 instanceof Object)){
var ex__14740__auto__ = e16615;
var statearr_16616_16667 = state_16555;
(statearr_16616_16667[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16555);

return cljs.core.cst$kw$recur;
} else {
throw e16615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__16668 = state_16555;
state_16555 = G__16668;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14737__auto__ = function(state_16555){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14737__auto____1.call(this,state_16555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14737__auto____0;
cljs$core$async$mix_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14737__auto____1;
return cljs$core$async$mix_$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14862__auto__ = (function (){var statearr_16617 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_16617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___16620);

return statearr_16617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__10679__auto__ = (((p == null))?null:p);
var m__10680__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10680__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__10680__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10680__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__10679__auto__ = (((p == null))?null:p);
var m__10680__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10680__auto__.call(null,p,v,ch));
} else {
var m__10680__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10680__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16669 = [];
var len__11124__auto___16672 = arguments.length;
var i__11125__auto___16673 = (0);
while(true){
if((i__11125__auto___16673 < len__11124__auto___16672)){
args16669.push((arguments[i__11125__auto___16673]));

var G__16674 = (i__11125__auto___16673 + (1));
i__11125__auto___16673 = G__16674;
continue;
} else {
}
break;
}

var G__16671 = args16669.length;
switch (G__16671) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16669.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10679__auto__ = (((p == null))?null:p);
var m__10680__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__10680__auto__.call(null,p));
} else {
var m__10680__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__10680__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__10679__auto__ = (((p == null))?null:p);
var m__10680__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10679__auto__)]);
if(!((m__10680__auto__ == null))){
return (m__10680__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__10680__auto__.call(null,p,v));
} else {
var m__10680__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10680__auto____$1 == null))){
return (m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10680__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__10680__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16677 = [];
var len__11124__auto___16805 = arguments.length;
var i__11125__auto___16806 = (0);
while(true){
if((i__11125__auto___16806 < len__11124__auto___16805)){
args16677.push((arguments[i__11125__auto___16806]));

var G__16807 = (i__11125__auto___16806 + (1));
i__11125__auto___16806 = G__16807;
continue;
} else {
}
break;
}

var G__16679 = args16677.length;
switch (G__16679) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16677.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16680 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16680) : cljs.core.atom.call(null,G__16680));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__10011__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__10011__auto__)){
return or__10011__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__10011__auto__,mults){
return (function (p1__16676_SHARP_){
if(cljs.core.truth_((p1__16676_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16676_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16676_SHARP_.call(null,topic)))){
return p1__16676_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16676_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__10011__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16681 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16682){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16682 = meta16682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16683,meta16682__$1){
var self__ = this;
var _16683__$1 = this;
return (new cljs.core.async.t_cljs$core$async16681(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16682__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16683){
var self__ = this;
var _16683__$1 = this;
return self__.meta16682;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16684 = self__.mults;
var G__16685 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16684,G__16685) : cljs.core.reset_BANG_.call(null,G__16684,G__16685));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16682], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16681";

cljs.core.async.t_cljs$core$async16681.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async16681");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16681 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16681(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16682){
return (new cljs.core.async.t_cljs$core$async16681(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16682));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16681(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14860__auto___16809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___16809,mults,ensure_mult,p){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___16809,mults,ensure_mult,p){
return (function (state_16757){
var state_val_16758 = (state_16757[(1)]);
if((state_val_16758 === (7))){
var inst_16753 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
var statearr_16759_16810 = state_16757__$1;
(statearr_16759_16810[(2)] = inst_16753);

(statearr_16759_16810[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (20))){
var state_16757__$1 = state_16757;
var statearr_16760_16811 = state_16757__$1;
(statearr_16760_16811[(2)] = null);

(statearr_16760_16811[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (1))){
var state_16757__$1 = state_16757;
var statearr_16761_16812 = state_16757__$1;
(statearr_16761_16812[(2)] = null);

(statearr_16761_16812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (24))){
var inst_16736 = (state_16757[(7)]);
var inst_16745 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16736);
var state_16757__$1 = state_16757;
var statearr_16762_16813 = state_16757__$1;
(statearr_16762_16813[(2)] = inst_16745);

(statearr_16762_16813[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (4))){
var inst_16688 = (state_16757[(8)]);
var inst_16688__$1 = (state_16757[(2)]);
var inst_16689 = (inst_16688__$1 == null);
var state_16757__$1 = (function (){var statearr_16763 = state_16757;
(statearr_16763[(8)] = inst_16688__$1);

return statearr_16763;
})();
if(cljs.core.truth_(inst_16689)){
var statearr_16764_16814 = state_16757__$1;
(statearr_16764_16814[(1)] = (5));

} else {
var statearr_16765_16815 = state_16757__$1;
(statearr_16765_16815[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (15))){
var inst_16730 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
var statearr_16766_16816 = state_16757__$1;
(statearr_16766_16816[(2)] = inst_16730);

(statearr_16766_16816[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (21))){
var inst_16750 = (state_16757[(2)]);
var state_16757__$1 = (function (){var statearr_16767 = state_16757;
(statearr_16767[(9)] = inst_16750);

return statearr_16767;
})();
var statearr_16768_16817 = state_16757__$1;
(statearr_16768_16817[(2)] = null);

(statearr_16768_16817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (13))){
var inst_16712 = (state_16757[(10)]);
var inst_16714 = cljs.core.chunked_seq_QMARK_(inst_16712);
var state_16757__$1 = state_16757;
if(inst_16714){
var statearr_16769_16818 = state_16757__$1;
(statearr_16769_16818[(1)] = (16));

} else {
var statearr_16770_16819 = state_16757__$1;
(statearr_16770_16819[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (22))){
var inst_16742 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
if(cljs.core.truth_(inst_16742)){
var statearr_16771_16820 = state_16757__$1;
(statearr_16771_16820[(1)] = (23));

} else {
var statearr_16772_16821 = state_16757__$1;
(statearr_16772_16821[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (6))){
var inst_16688 = (state_16757[(8)]);
var inst_16736 = (state_16757[(7)]);
var inst_16738 = (state_16757[(11)]);
var inst_16736__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16688) : topic_fn.call(null,inst_16688));
var inst_16737 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16738__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16737,inst_16736__$1);
var state_16757__$1 = (function (){var statearr_16773 = state_16757;
(statearr_16773[(7)] = inst_16736__$1);

(statearr_16773[(11)] = inst_16738__$1);

return statearr_16773;
})();
if(cljs.core.truth_(inst_16738__$1)){
var statearr_16774_16822 = state_16757__$1;
(statearr_16774_16822[(1)] = (19));

} else {
var statearr_16775_16823 = state_16757__$1;
(statearr_16775_16823[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (25))){
var inst_16747 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
var statearr_16776_16824 = state_16757__$1;
(statearr_16776_16824[(2)] = inst_16747);

(statearr_16776_16824[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (17))){
var inst_16712 = (state_16757[(10)]);
var inst_16721 = cljs.core.first(inst_16712);
var inst_16722 = cljs.core.async.muxch_STAR_(inst_16721);
var inst_16723 = cljs.core.async.close_BANG_(inst_16722);
var inst_16724 = cljs.core.next(inst_16712);
var inst_16698 = inst_16724;
var inst_16699 = null;
var inst_16700 = (0);
var inst_16701 = (0);
var state_16757__$1 = (function (){var statearr_16777 = state_16757;
(statearr_16777[(12)] = inst_16701);

(statearr_16777[(13)] = inst_16700);

(statearr_16777[(14)] = inst_16698);

(statearr_16777[(15)] = inst_16723);

(statearr_16777[(16)] = inst_16699);

return statearr_16777;
})();
var statearr_16778_16825 = state_16757__$1;
(statearr_16778_16825[(2)] = null);

(statearr_16778_16825[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (3))){
var inst_16755 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16757__$1,inst_16755);
} else {
if((state_val_16758 === (12))){
var inst_16732 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
var statearr_16779_16826 = state_16757__$1;
(statearr_16779_16826[(2)] = inst_16732);

(statearr_16779_16826[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (2))){
var state_16757__$1 = state_16757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16757__$1,(4),ch);
} else {
if((state_val_16758 === (23))){
var state_16757__$1 = state_16757;
var statearr_16780_16827 = state_16757__$1;
(statearr_16780_16827[(2)] = null);

(statearr_16780_16827[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (19))){
var inst_16688 = (state_16757[(8)]);
var inst_16738 = (state_16757[(11)]);
var inst_16740 = cljs.core.async.muxch_STAR_(inst_16738);
var state_16757__$1 = state_16757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16757__$1,(22),inst_16740,inst_16688);
} else {
if((state_val_16758 === (11))){
var inst_16712 = (state_16757[(10)]);
var inst_16698 = (state_16757[(14)]);
var inst_16712__$1 = cljs.core.seq(inst_16698);
var state_16757__$1 = (function (){var statearr_16781 = state_16757;
(statearr_16781[(10)] = inst_16712__$1);

return statearr_16781;
})();
if(inst_16712__$1){
var statearr_16782_16828 = state_16757__$1;
(statearr_16782_16828[(1)] = (13));

} else {
var statearr_16783_16829 = state_16757__$1;
(statearr_16783_16829[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (9))){
var inst_16734 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
var statearr_16784_16830 = state_16757__$1;
(statearr_16784_16830[(2)] = inst_16734);

(statearr_16784_16830[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (5))){
var inst_16695 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16696 = cljs.core.vals(inst_16695);
var inst_16697 = cljs.core.seq(inst_16696);
var inst_16698 = inst_16697;
var inst_16699 = null;
var inst_16700 = (0);
var inst_16701 = (0);
var state_16757__$1 = (function (){var statearr_16785 = state_16757;
(statearr_16785[(12)] = inst_16701);

(statearr_16785[(13)] = inst_16700);

(statearr_16785[(14)] = inst_16698);

(statearr_16785[(16)] = inst_16699);

return statearr_16785;
})();
var statearr_16786_16831 = state_16757__$1;
(statearr_16786_16831[(2)] = null);

(statearr_16786_16831[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (14))){
var state_16757__$1 = state_16757;
var statearr_16790_16832 = state_16757__$1;
(statearr_16790_16832[(2)] = null);

(statearr_16790_16832[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (16))){
var inst_16712 = (state_16757[(10)]);
var inst_16716 = cljs.core.chunk_first(inst_16712);
var inst_16717 = cljs.core.chunk_rest(inst_16712);
var inst_16718 = cljs.core.count(inst_16716);
var inst_16698 = inst_16717;
var inst_16699 = inst_16716;
var inst_16700 = inst_16718;
var inst_16701 = (0);
var state_16757__$1 = (function (){var statearr_16791 = state_16757;
(statearr_16791[(12)] = inst_16701);

(statearr_16791[(13)] = inst_16700);

(statearr_16791[(14)] = inst_16698);

(statearr_16791[(16)] = inst_16699);

return statearr_16791;
})();
var statearr_16792_16833 = state_16757__$1;
(statearr_16792_16833[(2)] = null);

(statearr_16792_16833[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (10))){
var inst_16701 = (state_16757[(12)]);
var inst_16700 = (state_16757[(13)]);
var inst_16698 = (state_16757[(14)]);
var inst_16699 = (state_16757[(16)]);
var inst_16706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16699,inst_16701);
var inst_16707 = cljs.core.async.muxch_STAR_(inst_16706);
var inst_16708 = cljs.core.async.close_BANG_(inst_16707);
var inst_16709 = (inst_16701 + (1));
var tmp16787 = inst_16700;
var tmp16788 = inst_16698;
var tmp16789 = inst_16699;
var inst_16698__$1 = tmp16788;
var inst_16699__$1 = tmp16789;
var inst_16700__$1 = tmp16787;
var inst_16701__$1 = inst_16709;
var state_16757__$1 = (function (){var statearr_16793 = state_16757;
(statearr_16793[(12)] = inst_16701__$1);

(statearr_16793[(13)] = inst_16700__$1);

(statearr_16793[(17)] = inst_16708);

(statearr_16793[(14)] = inst_16698__$1);

(statearr_16793[(16)] = inst_16699__$1);

return statearr_16793;
})();
var statearr_16794_16834 = state_16757__$1;
(statearr_16794_16834[(2)] = null);

(statearr_16794_16834[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (18))){
var inst_16727 = (state_16757[(2)]);
var state_16757__$1 = state_16757;
var statearr_16795_16835 = state_16757__$1;
(statearr_16795_16835[(2)] = inst_16727);

(statearr_16795_16835[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16758 === (8))){
var inst_16701 = (state_16757[(12)]);
var inst_16700 = (state_16757[(13)]);
var inst_16703 = (inst_16701 < inst_16700);
var inst_16704 = inst_16703;
var state_16757__$1 = state_16757;
if(cljs.core.truth_(inst_16704)){
var statearr_16796_16836 = state_16757__$1;
(statearr_16796_16836[(1)] = (10));

} else {
var statearr_16797_16837 = state_16757__$1;
(statearr_16797_16837[(1)] = (11));

}

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
});})(c__14860__auto___16809,mults,ensure_mult,p))
;
return ((function (switch__14736__auto__,c__14860__auto___16809,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_16801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16801[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_16801[(1)] = (1));

return statearr_16801;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_16757){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_16757);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e16802){if((e16802 instanceof Object)){
var ex__14740__auto__ = e16802;
var statearr_16803_16838 = state_16757;
(statearr_16803_16838[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16757);

return cljs.core.cst$kw$recur;
} else {
throw e16802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__16839 = state_16757;
state_16757 = G__16839;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_16757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_16757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___16809,mults,ensure_mult,p))
})();
var state__14862__auto__ = (function (){var statearr_16804 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_16804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___16809);

return statearr_16804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___16809,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16840 = [];
var len__11124__auto___16843 = arguments.length;
var i__11125__auto___16844 = (0);
while(true){
if((i__11125__auto___16844 < len__11124__auto___16843)){
args16840.push((arguments[i__11125__auto___16844]));

var G__16845 = (i__11125__auto___16844 + (1));
i__11125__auto___16844 = G__16845;
continue;
} else {
}
break;
}

var G__16842 = args16840.length;
switch (G__16842) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16840.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16847 = [];
var len__11124__auto___16850 = arguments.length;
var i__11125__auto___16851 = (0);
while(true){
if((i__11125__auto___16851 < len__11124__auto___16850)){
args16847.push((arguments[i__11125__auto___16851]));

var G__16852 = (i__11125__auto___16851 + (1));
i__11125__auto___16851 = G__16852;
continue;
} else {
}
break;
}

var G__16849 = args16847.length;
switch (G__16849) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16847.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16854 = [];
var len__11124__auto___16925 = arguments.length;
var i__11125__auto___16926 = (0);
while(true){
if((i__11125__auto___16926 < len__11124__auto___16925)){
args16854.push((arguments[i__11125__auto___16926]));

var G__16927 = (i__11125__auto___16926 + (1));
i__11125__auto___16926 = G__16927;
continue;
} else {
}
break;
}

var G__16856 = args16854.length;
switch (G__16856) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16854.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14860__auto___16929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___16929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___16929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16895){
var state_val_16896 = (state_16895[(1)]);
if((state_val_16896 === (7))){
var state_16895__$1 = state_16895;
var statearr_16897_16930 = state_16895__$1;
(statearr_16897_16930[(2)] = null);

(statearr_16897_16930[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (1))){
var state_16895__$1 = state_16895;
var statearr_16898_16931 = state_16895__$1;
(statearr_16898_16931[(2)] = null);

(statearr_16898_16931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (4))){
var inst_16859 = (state_16895[(7)]);
var inst_16861 = (inst_16859 < cnt);
var state_16895__$1 = state_16895;
if(cljs.core.truth_(inst_16861)){
var statearr_16899_16932 = state_16895__$1;
(statearr_16899_16932[(1)] = (6));

} else {
var statearr_16900_16933 = state_16895__$1;
(statearr_16900_16933[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (15))){
var inst_16891 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
var statearr_16901_16934 = state_16895__$1;
(statearr_16901_16934[(2)] = inst_16891);

(statearr_16901_16934[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (13))){
var inst_16884 = cljs.core.async.close_BANG_(out);
var state_16895__$1 = state_16895;
var statearr_16902_16935 = state_16895__$1;
(statearr_16902_16935[(2)] = inst_16884);

(statearr_16902_16935[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (6))){
var state_16895__$1 = state_16895;
var statearr_16903_16936 = state_16895__$1;
(statearr_16903_16936[(2)] = null);

(statearr_16903_16936[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (3))){
var inst_16893 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16895__$1,inst_16893);
} else {
if((state_val_16896 === (12))){
var inst_16881 = (state_16895[(8)]);
var inst_16881__$1 = (state_16895[(2)]);
var inst_16882 = cljs.core.some(cljs.core.nil_QMARK_,inst_16881__$1);
var state_16895__$1 = (function (){var statearr_16904 = state_16895;
(statearr_16904[(8)] = inst_16881__$1);

return statearr_16904;
})();
if(cljs.core.truth_(inst_16882)){
var statearr_16905_16937 = state_16895__$1;
(statearr_16905_16937[(1)] = (13));

} else {
var statearr_16906_16938 = state_16895__$1;
(statearr_16906_16938[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (2))){
var inst_16858 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16859 = (0);
var state_16895__$1 = (function (){var statearr_16907 = state_16895;
(statearr_16907[(7)] = inst_16859);

(statearr_16907[(9)] = inst_16858);

return statearr_16907;
})();
var statearr_16908_16939 = state_16895__$1;
(statearr_16908_16939[(2)] = null);

(statearr_16908_16939[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (11))){
var inst_16859 = (state_16895[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16895,(10),Object,null,(9));
var inst_16868 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16859) : chs__$1.call(null,inst_16859));
var inst_16869 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16859) : done.call(null,inst_16859));
var inst_16870 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16868,inst_16869);
var state_16895__$1 = state_16895;
var statearr_16909_16940 = state_16895__$1;
(statearr_16909_16940[(2)] = inst_16870);


cljs.core.async.impl.ioc_helpers.process_exception(state_16895__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (9))){
var inst_16859 = (state_16895[(7)]);
var inst_16872 = (state_16895[(2)]);
var inst_16873 = (inst_16859 + (1));
var inst_16859__$1 = inst_16873;
var state_16895__$1 = (function (){var statearr_16910 = state_16895;
(statearr_16910[(7)] = inst_16859__$1);

(statearr_16910[(10)] = inst_16872);

return statearr_16910;
})();
var statearr_16911_16941 = state_16895__$1;
(statearr_16911_16941[(2)] = null);

(statearr_16911_16941[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (5))){
var inst_16879 = (state_16895[(2)]);
var state_16895__$1 = (function (){var statearr_16912 = state_16895;
(statearr_16912[(11)] = inst_16879);

return statearr_16912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16895__$1,(12),dchan);
} else {
if((state_val_16896 === (14))){
var inst_16881 = (state_16895[(8)]);
var inst_16886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16881);
var state_16895__$1 = state_16895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16895__$1,(16),out,inst_16886);
} else {
if((state_val_16896 === (16))){
var inst_16888 = (state_16895[(2)]);
var state_16895__$1 = (function (){var statearr_16913 = state_16895;
(statearr_16913[(12)] = inst_16888);

return statearr_16913;
})();
var statearr_16914_16942 = state_16895__$1;
(statearr_16914_16942[(2)] = null);

(statearr_16914_16942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (10))){
var inst_16863 = (state_16895[(2)]);
var inst_16864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16895__$1 = (function (){var statearr_16915 = state_16895;
(statearr_16915[(13)] = inst_16863);

return statearr_16915;
})();
var statearr_16916_16943 = state_16895__$1;
(statearr_16916_16943[(2)] = inst_16864);


cljs.core.async.impl.ioc_helpers.process_exception(state_16895__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16896 === (8))){
var inst_16877 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
var statearr_16917_16944 = state_16895__$1;
(statearr_16917_16944[(2)] = inst_16877);

(statearr_16917_16944[(1)] = (5));


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
}
}
});})(c__14860__auto___16929,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14736__auto__,c__14860__auto___16929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_16921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16921[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_16921[(1)] = (1));

return statearr_16921;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_16895){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_16895);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e16922){if((e16922 instanceof Object)){
var ex__14740__auto__ = e16922;
var statearr_16923_16945 = state_16895;
(statearr_16923_16945[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16895);

return cljs.core.cst$kw$recur;
} else {
throw e16922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__16946 = state_16895;
state_16895 = G__16946;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_16895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_16895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___16929,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14862__auto__ = (function (){var statearr_16924 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_16924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___16929);

return statearr_16924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___16929,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16948 = [];
var len__11124__auto___17006 = arguments.length;
var i__11125__auto___17007 = (0);
while(true){
if((i__11125__auto___17007 < len__11124__auto___17006)){
args16948.push((arguments[i__11125__auto___17007]));

var G__17008 = (i__11125__auto___17007 + (1));
i__11125__auto___17007 = G__17008;
continue;
} else {
}
break;
}

var G__16950 = args16948.length;
switch (G__16950) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16948.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14860__auto___17010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___17010,out){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___17010,out){
return (function (state_16982){
var state_val_16983 = (state_16982[(1)]);
if((state_val_16983 === (7))){
var inst_16961 = (state_16982[(7)]);
var inst_16962 = (state_16982[(8)]);
var inst_16961__$1 = (state_16982[(2)]);
var inst_16962__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16961__$1,(0),null);
var inst_16963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16961__$1,(1),null);
var inst_16964 = (inst_16962__$1 == null);
var state_16982__$1 = (function (){var statearr_16984 = state_16982;
(statearr_16984[(7)] = inst_16961__$1);

(statearr_16984[(9)] = inst_16963);

(statearr_16984[(8)] = inst_16962__$1);

return statearr_16984;
})();
if(cljs.core.truth_(inst_16964)){
var statearr_16985_17011 = state_16982__$1;
(statearr_16985_17011[(1)] = (8));

} else {
var statearr_16986_17012 = state_16982__$1;
(statearr_16986_17012[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16983 === (1))){
var inst_16951 = cljs.core.vec(chs);
var inst_16952 = inst_16951;
var state_16982__$1 = (function (){var statearr_16987 = state_16982;
(statearr_16987[(10)] = inst_16952);

return statearr_16987;
})();
var statearr_16988_17013 = state_16982__$1;
(statearr_16988_17013[(2)] = null);

(statearr_16988_17013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16983 === (4))){
var inst_16952 = (state_16982[(10)]);
var state_16982__$1 = state_16982;
return cljs.core.async.ioc_alts_BANG_(state_16982__$1,(7),inst_16952);
} else {
if((state_val_16983 === (6))){
var inst_16978 = (state_16982[(2)]);
var state_16982__$1 = state_16982;
var statearr_16989_17014 = state_16982__$1;
(statearr_16989_17014[(2)] = inst_16978);

(statearr_16989_17014[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16983 === (3))){
var inst_16980 = (state_16982[(2)]);
var state_16982__$1 = state_16982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16982__$1,inst_16980);
} else {
if((state_val_16983 === (2))){
var inst_16952 = (state_16982[(10)]);
var inst_16954 = cljs.core.count(inst_16952);
var inst_16955 = (inst_16954 > (0));
var state_16982__$1 = state_16982;
if(cljs.core.truth_(inst_16955)){
var statearr_16991_17015 = state_16982__$1;
(statearr_16991_17015[(1)] = (4));

} else {
var statearr_16992_17016 = state_16982__$1;
(statearr_16992_17016[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16983 === (11))){
var inst_16952 = (state_16982[(10)]);
var inst_16971 = (state_16982[(2)]);
var tmp16990 = inst_16952;
var inst_16952__$1 = tmp16990;
var state_16982__$1 = (function (){var statearr_16993 = state_16982;
(statearr_16993[(11)] = inst_16971);

(statearr_16993[(10)] = inst_16952__$1);

return statearr_16993;
})();
var statearr_16994_17017 = state_16982__$1;
(statearr_16994_17017[(2)] = null);

(statearr_16994_17017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16983 === (9))){
var inst_16962 = (state_16982[(8)]);
var state_16982__$1 = state_16982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16982__$1,(11),out,inst_16962);
} else {
if((state_val_16983 === (5))){
var inst_16976 = cljs.core.async.close_BANG_(out);
var state_16982__$1 = state_16982;
var statearr_16995_17018 = state_16982__$1;
(statearr_16995_17018[(2)] = inst_16976);

(statearr_16995_17018[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16983 === (10))){
var inst_16974 = (state_16982[(2)]);
var state_16982__$1 = state_16982;
var statearr_16996_17019 = state_16982__$1;
(statearr_16996_17019[(2)] = inst_16974);

(statearr_16996_17019[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16983 === (8))){
var inst_16961 = (state_16982[(7)]);
var inst_16963 = (state_16982[(9)]);
var inst_16962 = (state_16982[(8)]);
var inst_16952 = (state_16982[(10)]);
var inst_16966 = (function (){var cs = inst_16952;
var vec__16957 = inst_16961;
var v = inst_16962;
var c = inst_16963;
return ((function (cs,vec__16957,v,c,inst_16961,inst_16963,inst_16962,inst_16952,state_val_16983,c__14860__auto___17010,out){
return (function (p1__16947_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16947_SHARP_);
});
;})(cs,vec__16957,v,c,inst_16961,inst_16963,inst_16962,inst_16952,state_val_16983,c__14860__auto___17010,out))
})();
var inst_16967 = cljs.core.filterv(inst_16966,inst_16952);
var inst_16952__$1 = inst_16967;
var state_16982__$1 = (function (){var statearr_16997 = state_16982;
(statearr_16997[(10)] = inst_16952__$1);

return statearr_16997;
})();
var statearr_16998_17020 = state_16982__$1;
(statearr_16998_17020[(2)] = null);

(statearr_16998_17020[(1)] = (2));


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
});})(c__14860__auto___17010,out))
;
return ((function (switch__14736__auto__,c__14860__auto___17010,out){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_17002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17002[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_17002[(1)] = (1));

return statearr_17002;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_16982){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_16982);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e17003){if((e17003 instanceof Object)){
var ex__14740__auto__ = e17003;
var statearr_17004_17021 = state_16982;
(statearr_17004_17021[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16982);

return cljs.core.cst$kw$recur;
} else {
throw e17003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__17022 = state_16982;
state_16982 = G__17022;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_16982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_16982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___17010,out))
})();
var state__14862__auto__ = (function (){var statearr_17005 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_17005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___17010);

return statearr_17005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___17010,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17023 = [];
var len__11124__auto___17072 = arguments.length;
var i__11125__auto___17073 = (0);
while(true){
if((i__11125__auto___17073 < len__11124__auto___17072)){
args17023.push((arguments[i__11125__auto___17073]));

var G__17074 = (i__11125__auto___17073 + (1));
i__11125__auto___17073 = G__17074;
continue;
} else {
}
break;
}

var G__17025 = args17023.length;
switch (G__17025) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17023.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14860__auto___17076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___17076,out){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___17076,out){
return (function (state_17049){
var state_val_17050 = (state_17049[(1)]);
if((state_val_17050 === (7))){
var inst_17031 = (state_17049[(7)]);
var inst_17031__$1 = (state_17049[(2)]);
var inst_17032 = (inst_17031__$1 == null);
var inst_17033 = cljs.core.not(inst_17032);
var state_17049__$1 = (function (){var statearr_17051 = state_17049;
(statearr_17051[(7)] = inst_17031__$1);

return statearr_17051;
})();
if(inst_17033){
var statearr_17052_17077 = state_17049__$1;
(statearr_17052_17077[(1)] = (8));

} else {
var statearr_17053_17078 = state_17049__$1;
(statearr_17053_17078[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (1))){
var inst_17026 = (0);
var state_17049__$1 = (function (){var statearr_17054 = state_17049;
(statearr_17054[(8)] = inst_17026);

return statearr_17054;
})();
var statearr_17055_17079 = state_17049__$1;
(statearr_17055_17079[(2)] = null);

(statearr_17055_17079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (4))){
var state_17049__$1 = state_17049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17049__$1,(7),ch);
} else {
if((state_val_17050 === (6))){
var inst_17044 = (state_17049[(2)]);
var state_17049__$1 = state_17049;
var statearr_17056_17080 = state_17049__$1;
(statearr_17056_17080[(2)] = inst_17044);

(statearr_17056_17080[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (3))){
var inst_17046 = (state_17049[(2)]);
var inst_17047 = cljs.core.async.close_BANG_(out);
var state_17049__$1 = (function (){var statearr_17057 = state_17049;
(statearr_17057[(9)] = inst_17046);

return statearr_17057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17049__$1,inst_17047);
} else {
if((state_val_17050 === (2))){
var inst_17026 = (state_17049[(8)]);
var inst_17028 = (inst_17026 < n);
var state_17049__$1 = state_17049;
if(cljs.core.truth_(inst_17028)){
var statearr_17058_17081 = state_17049__$1;
(statearr_17058_17081[(1)] = (4));

} else {
var statearr_17059_17082 = state_17049__$1;
(statearr_17059_17082[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (11))){
var inst_17026 = (state_17049[(8)]);
var inst_17036 = (state_17049[(2)]);
var inst_17037 = (inst_17026 + (1));
var inst_17026__$1 = inst_17037;
var state_17049__$1 = (function (){var statearr_17060 = state_17049;
(statearr_17060[(8)] = inst_17026__$1);

(statearr_17060[(10)] = inst_17036);

return statearr_17060;
})();
var statearr_17061_17083 = state_17049__$1;
(statearr_17061_17083[(2)] = null);

(statearr_17061_17083[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (9))){
var state_17049__$1 = state_17049;
var statearr_17062_17084 = state_17049__$1;
(statearr_17062_17084[(2)] = null);

(statearr_17062_17084[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (5))){
var state_17049__$1 = state_17049;
var statearr_17063_17085 = state_17049__$1;
(statearr_17063_17085[(2)] = null);

(statearr_17063_17085[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (10))){
var inst_17041 = (state_17049[(2)]);
var state_17049__$1 = state_17049;
var statearr_17064_17086 = state_17049__$1;
(statearr_17064_17086[(2)] = inst_17041);

(statearr_17064_17086[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17050 === (8))){
var inst_17031 = (state_17049[(7)]);
var state_17049__$1 = state_17049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17049__$1,(11),out,inst_17031);
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
});})(c__14860__auto___17076,out))
;
return ((function (switch__14736__auto__,c__14860__auto___17076,out){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_17068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17068[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_17068[(1)] = (1));

return statearr_17068;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_17049){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_17049);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e17069){if((e17069 instanceof Object)){
var ex__14740__auto__ = e17069;
var statearr_17070_17087 = state_17049;
(statearr_17070_17087[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17049);

return cljs.core.cst$kw$recur;
} else {
throw e17069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__17088 = state_17049;
state_17049 = G__17088;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_17049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_17049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___17076,out))
})();
var state__14862__auto__ = (function (){var statearr_17071 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_17071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___17076);

return statearr_17071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___17076,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17098 = (function (f,ch,meta17099){
this.f = f;
this.ch = ch;
this.meta17099 = meta17099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17100,meta17099__$1){
var self__ = this;
var _17100__$1 = this;
return (new cljs.core.async.t_cljs$core$async17098(self__.f,self__.ch,meta17099__$1));
});

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17100){
var self__ = this;
var _17100__$1 = this;
return self__.meta17099;
});

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17101 = (function (f,ch,meta17099,_,fn1,meta17102){
this.f = f;
this.ch = ch;
this.meta17099 = meta17099;
this._ = _;
this.fn1 = fn1;
this.meta17102 = meta17102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17103,meta17102__$1){
var self__ = this;
var _17103__$1 = this;
return (new cljs.core.async.t_cljs$core$async17101(self__.f,self__.ch,self__.meta17099,self__._,self__.fn1,meta17102__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17103){
var self__ = this;
var _17103__$1 = this;
return self__.meta17102;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17089_SHARP_){
var G__17104 = (((p1__17089_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17089_SHARP_) : self__.f.call(null,p1__17089_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17104) : f1.call(null,G__17104));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17101.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17099,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17098], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17102], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17101";

cljs.core.async.t_cljs$core$async17101.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async17101");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17101 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17101(f__$1,ch__$1,meta17099__$1,___$2,fn1__$1,meta17102){
return (new cljs.core.async.t_cljs$core$async17101(f__$1,ch__$1,meta17099__$1,___$2,fn1__$1,meta17102));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17101(self__.f,self__.ch,self__.meta17099,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9999__auto__ = ret;
if(cljs.core.truth_(and__9999__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__9999__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17105 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17105) : self__.f.call(null,G__17105));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17099], null);
});

cljs.core.async.t_cljs$core$async17098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17098";

cljs.core.async.t_cljs$core$async17098.cljs$lang$ctorPrWriter = (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async17098");
});

cljs.core.async.__GT_t_cljs$core$async17098 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17098(f__$1,ch__$1,meta17099){
return (new cljs.core.async.t_cljs$core$async17098(f__$1,ch__$1,meta17099));
});

}

return (new cljs.core.async.t_cljs$core$async17098(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17109 = (function (f,ch,meta17110){
this.f = f;
this.ch = ch;
this.meta17110 = meta17110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17111,meta17110__$1){
var self__ = this;
var _17111__$1 = this;
return (new cljs.core.async.t_cljs$core$async17109(self__.f,self__.ch,meta17110__$1));
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17111){
var self__ = this;
var _17111__$1 = this;
return self__.meta17110;
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17110], null);
});

cljs.core.async.t_cljs$core$async17109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17109";

cljs.core.async.t_cljs$core$async17109.cljs$lang$ctorPrWriter = (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async17109");
});

cljs.core.async.__GT_t_cljs$core$async17109 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17109(f__$1,ch__$1,meta17110){
return (new cljs.core.async.t_cljs$core$async17109(f__$1,ch__$1,meta17110));
});

}

return (new cljs.core.async.t_cljs$core$async17109(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17115 = (function (p,ch,meta17116){
this.p = p;
this.ch = ch;
this.meta17116 = meta17116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17117,meta17116__$1){
var self__ = this;
var _17117__$1 = this;
return (new cljs.core.async.t_cljs$core$async17115(self__.p,self__.ch,meta17116__$1));
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17117){
var self__ = this;
var _17117__$1 = this;
return self__.meta17116;
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17116], null);
});

cljs.core.async.t_cljs$core$async17115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17115";

cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorPrWriter = (function (this__10622__auto__,writer__10623__auto__,opt__10624__auto__){
return cljs.core._write(writer__10623__auto__,"cljs.core.async/t_cljs$core$async17115");
});

cljs.core.async.__GT_t_cljs$core$async17115 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17115(p__$1,ch__$1,meta17116){
return (new cljs.core.async.t_cljs$core$async17115(p__$1,ch__$1,meta17116));
});

}

return (new cljs.core.async.t_cljs$core$async17115(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17118 = [];
var len__11124__auto___17162 = arguments.length;
var i__11125__auto___17163 = (0);
while(true){
if((i__11125__auto___17163 < len__11124__auto___17162)){
args17118.push((arguments[i__11125__auto___17163]));

var G__17164 = (i__11125__auto___17163 + (1));
i__11125__auto___17163 = G__17164;
continue;
} else {
}
break;
}

var G__17120 = args17118.length;
switch (G__17120) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17118.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14860__auto___17166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___17166,out){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___17166,out){
return (function (state_17141){
var state_val_17142 = (state_17141[(1)]);
if((state_val_17142 === (7))){
var inst_17137 = (state_17141[(2)]);
var state_17141__$1 = state_17141;
var statearr_17143_17167 = state_17141__$1;
(statearr_17143_17167[(2)] = inst_17137);

(statearr_17143_17167[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (1))){
var state_17141__$1 = state_17141;
var statearr_17144_17168 = state_17141__$1;
(statearr_17144_17168[(2)] = null);

(statearr_17144_17168[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (4))){
var inst_17123 = (state_17141[(7)]);
var inst_17123__$1 = (state_17141[(2)]);
var inst_17124 = (inst_17123__$1 == null);
var state_17141__$1 = (function (){var statearr_17145 = state_17141;
(statearr_17145[(7)] = inst_17123__$1);

return statearr_17145;
})();
if(cljs.core.truth_(inst_17124)){
var statearr_17146_17169 = state_17141__$1;
(statearr_17146_17169[(1)] = (5));

} else {
var statearr_17147_17170 = state_17141__$1;
(statearr_17147_17170[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (6))){
var inst_17123 = (state_17141[(7)]);
var inst_17128 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17123) : p.call(null,inst_17123));
var state_17141__$1 = state_17141;
if(cljs.core.truth_(inst_17128)){
var statearr_17148_17171 = state_17141__$1;
(statearr_17148_17171[(1)] = (8));

} else {
var statearr_17149_17172 = state_17141__$1;
(statearr_17149_17172[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (3))){
var inst_17139 = (state_17141[(2)]);
var state_17141__$1 = state_17141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17141__$1,inst_17139);
} else {
if((state_val_17142 === (2))){
var state_17141__$1 = state_17141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17141__$1,(4),ch);
} else {
if((state_val_17142 === (11))){
var inst_17131 = (state_17141[(2)]);
var state_17141__$1 = state_17141;
var statearr_17150_17173 = state_17141__$1;
(statearr_17150_17173[(2)] = inst_17131);

(statearr_17150_17173[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (9))){
var state_17141__$1 = state_17141;
var statearr_17151_17174 = state_17141__$1;
(statearr_17151_17174[(2)] = null);

(statearr_17151_17174[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (5))){
var inst_17126 = cljs.core.async.close_BANG_(out);
var state_17141__$1 = state_17141;
var statearr_17152_17175 = state_17141__$1;
(statearr_17152_17175[(2)] = inst_17126);

(statearr_17152_17175[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (10))){
var inst_17134 = (state_17141[(2)]);
var state_17141__$1 = (function (){var statearr_17153 = state_17141;
(statearr_17153[(8)] = inst_17134);

return statearr_17153;
})();
var statearr_17154_17176 = state_17141__$1;
(statearr_17154_17176[(2)] = null);

(statearr_17154_17176[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17142 === (8))){
var inst_17123 = (state_17141[(7)]);
var state_17141__$1 = state_17141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17141__$1,(11),out,inst_17123);
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
});})(c__14860__auto___17166,out))
;
return ((function (switch__14736__auto__,c__14860__auto___17166,out){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_17158 = [null,null,null,null,null,null,null,null,null];
(statearr_17158[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_17158[(1)] = (1));

return statearr_17158;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_17141){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_17141);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e17159){if((e17159 instanceof Object)){
var ex__14740__auto__ = e17159;
var statearr_17160_17177 = state_17141;
(statearr_17160_17177[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17141);

return cljs.core.cst$kw$recur;
} else {
throw e17159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__17178 = state_17141;
state_17141 = G__17178;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_17141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_17141);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___17166,out))
})();
var state__14862__auto__ = (function (){var statearr_17161 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_17161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___17166);

return statearr_17161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___17166,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17179 = [];
var len__11124__auto___17182 = arguments.length;
var i__11125__auto___17183 = (0);
while(true){
if((i__11125__auto___17183 < len__11124__auto___17182)){
args17179.push((arguments[i__11125__auto___17183]));

var G__17184 = (i__11125__auto___17183 + (1));
i__11125__auto___17183 = G__17184;
continue;
} else {
}
break;
}

var G__17181 = args17179.length;
switch (G__17181) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17179.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto__){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto__){
return (function (state_17351){
var state_val_17352 = (state_17351[(1)]);
if((state_val_17352 === (7))){
var inst_17347 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17353_17394 = state_17351__$1;
(statearr_17353_17394[(2)] = inst_17347);

(statearr_17353_17394[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (20))){
var inst_17317 = (state_17351[(7)]);
var inst_17328 = (state_17351[(2)]);
var inst_17329 = cljs.core.next(inst_17317);
var inst_17303 = inst_17329;
var inst_17304 = null;
var inst_17305 = (0);
var inst_17306 = (0);
var state_17351__$1 = (function (){var statearr_17354 = state_17351;
(statearr_17354[(8)] = inst_17303);

(statearr_17354[(9)] = inst_17328);

(statearr_17354[(10)] = inst_17305);

(statearr_17354[(11)] = inst_17304);

(statearr_17354[(12)] = inst_17306);

return statearr_17354;
})();
var statearr_17355_17395 = state_17351__$1;
(statearr_17355_17395[(2)] = null);

(statearr_17355_17395[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (1))){
var state_17351__$1 = state_17351;
var statearr_17356_17396 = state_17351__$1;
(statearr_17356_17396[(2)] = null);

(statearr_17356_17396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (4))){
var inst_17292 = (state_17351[(13)]);
var inst_17292__$1 = (state_17351[(2)]);
var inst_17293 = (inst_17292__$1 == null);
var state_17351__$1 = (function (){var statearr_17357 = state_17351;
(statearr_17357[(13)] = inst_17292__$1);

return statearr_17357;
})();
if(cljs.core.truth_(inst_17293)){
var statearr_17358_17397 = state_17351__$1;
(statearr_17358_17397[(1)] = (5));

} else {
var statearr_17359_17398 = state_17351__$1;
(statearr_17359_17398[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (15))){
var state_17351__$1 = state_17351;
var statearr_17363_17399 = state_17351__$1;
(statearr_17363_17399[(2)] = null);

(statearr_17363_17399[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (21))){
var state_17351__$1 = state_17351;
var statearr_17364_17400 = state_17351__$1;
(statearr_17364_17400[(2)] = null);

(statearr_17364_17400[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (13))){
var inst_17303 = (state_17351[(8)]);
var inst_17305 = (state_17351[(10)]);
var inst_17304 = (state_17351[(11)]);
var inst_17306 = (state_17351[(12)]);
var inst_17313 = (state_17351[(2)]);
var inst_17314 = (inst_17306 + (1));
var tmp17360 = inst_17303;
var tmp17361 = inst_17305;
var tmp17362 = inst_17304;
var inst_17303__$1 = tmp17360;
var inst_17304__$1 = tmp17362;
var inst_17305__$1 = tmp17361;
var inst_17306__$1 = inst_17314;
var state_17351__$1 = (function (){var statearr_17365 = state_17351;
(statearr_17365[(8)] = inst_17303__$1);

(statearr_17365[(10)] = inst_17305__$1);

(statearr_17365[(11)] = inst_17304__$1);

(statearr_17365[(14)] = inst_17313);

(statearr_17365[(12)] = inst_17306__$1);

return statearr_17365;
})();
var statearr_17366_17401 = state_17351__$1;
(statearr_17366_17401[(2)] = null);

(statearr_17366_17401[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (22))){
var state_17351__$1 = state_17351;
var statearr_17367_17402 = state_17351__$1;
(statearr_17367_17402[(2)] = null);

(statearr_17367_17402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (6))){
var inst_17292 = (state_17351[(13)]);
var inst_17301 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17292) : f.call(null,inst_17292));
var inst_17302 = cljs.core.seq(inst_17301);
var inst_17303 = inst_17302;
var inst_17304 = null;
var inst_17305 = (0);
var inst_17306 = (0);
var state_17351__$1 = (function (){var statearr_17368 = state_17351;
(statearr_17368[(8)] = inst_17303);

(statearr_17368[(10)] = inst_17305);

(statearr_17368[(11)] = inst_17304);

(statearr_17368[(12)] = inst_17306);

return statearr_17368;
})();
var statearr_17369_17403 = state_17351__$1;
(statearr_17369_17403[(2)] = null);

(statearr_17369_17403[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (17))){
var inst_17317 = (state_17351[(7)]);
var inst_17321 = cljs.core.chunk_first(inst_17317);
var inst_17322 = cljs.core.chunk_rest(inst_17317);
var inst_17323 = cljs.core.count(inst_17321);
var inst_17303 = inst_17322;
var inst_17304 = inst_17321;
var inst_17305 = inst_17323;
var inst_17306 = (0);
var state_17351__$1 = (function (){var statearr_17370 = state_17351;
(statearr_17370[(8)] = inst_17303);

(statearr_17370[(10)] = inst_17305);

(statearr_17370[(11)] = inst_17304);

(statearr_17370[(12)] = inst_17306);

return statearr_17370;
})();
var statearr_17371_17404 = state_17351__$1;
(statearr_17371_17404[(2)] = null);

(statearr_17371_17404[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (3))){
var inst_17349 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17351__$1,inst_17349);
} else {
if((state_val_17352 === (12))){
var inst_17337 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17372_17405 = state_17351__$1;
(statearr_17372_17405[(2)] = inst_17337);

(statearr_17372_17405[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (2))){
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17351__$1,(4),in$);
} else {
if((state_val_17352 === (23))){
var inst_17345 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17373_17406 = state_17351__$1;
(statearr_17373_17406[(2)] = inst_17345);

(statearr_17373_17406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (19))){
var inst_17332 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17374_17407 = state_17351__$1;
(statearr_17374_17407[(2)] = inst_17332);

(statearr_17374_17407[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (11))){
var inst_17303 = (state_17351[(8)]);
var inst_17317 = (state_17351[(7)]);
var inst_17317__$1 = cljs.core.seq(inst_17303);
var state_17351__$1 = (function (){var statearr_17375 = state_17351;
(statearr_17375[(7)] = inst_17317__$1);

return statearr_17375;
})();
if(inst_17317__$1){
var statearr_17376_17408 = state_17351__$1;
(statearr_17376_17408[(1)] = (14));

} else {
var statearr_17377_17409 = state_17351__$1;
(statearr_17377_17409[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (9))){
var inst_17339 = (state_17351[(2)]);
var inst_17340 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17351__$1 = (function (){var statearr_17378 = state_17351;
(statearr_17378[(15)] = inst_17339);

return statearr_17378;
})();
if(cljs.core.truth_(inst_17340)){
var statearr_17379_17410 = state_17351__$1;
(statearr_17379_17410[(1)] = (21));

} else {
var statearr_17380_17411 = state_17351__$1;
(statearr_17380_17411[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (5))){
var inst_17295 = cljs.core.async.close_BANG_(out);
var state_17351__$1 = state_17351;
var statearr_17381_17412 = state_17351__$1;
(statearr_17381_17412[(2)] = inst_17295);

(statearr_17381_17412[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (14))){
var inst_17317 = (state_17351[(7)]);
var inst_17319 = cljs.core.chunked_seq_QMARK_(inst_17317);
var state_17351__$1 = state_17351;
if(inst_17319){
var statearr_17382_17413 = state_17351__$1;
(statearr_17382_17413[(1)] = (17));

} else {
var statearr_17383_17414 = state_17351__$1;
(statearr_17383_17414[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (16))){
var inst_17335 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17384_17415 = state_17351__$1;
(statearr_17384_17415[(2)] = inst_17335);

(statearr_17384_17415[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (10))){
var inst_17304 = (state_17351[(11)]);
var inst_17306 = (state_17351[(12)]);
var inst_17311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17304,inst_17306);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17351__$1,(13),out,inst_17311);
} else {
if((state_val_17352 === (18))){
var inst_17317 = (state_17351[(7)]);
var inst_17326 = cljs.core.first(inst_17317);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17351__$1,(20),out,inst_17326);
} else {
if((state_val_17352 === (8))){
var inst_17305 = (state_17351[(10)]);
var inst_17306 = (state_17351[(12)]);
var inst_17308 = (inst_17306 < inst_17305);
var inst_17309 = inst_17308;
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17309)){
var statearr_17385_17416 = state_17351__$1;
(statearr_17385_17416[(1)] = (10));

} else {
var statearr_17386_17417 = state_17351__$1;
(statearr_17386_17417[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
});})(c__14860__auto__))
;
return ((function (switch__14736__auto__,c__14860__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14737__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14737__auto____0 = (function (){
var statearr_17390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17390[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14737__auto__);

(statearr_17390[(1)] = (1));

return statearr_17390;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14737__auto____1 = (function (state_17351){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_17351);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e17391){if((e17391 instanceof Object)){
var ex__14740__auto__ = e17391;
var statearr_17392_17418 = state_17351;
(statearr_17392_17418[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17351);

return cljs.core.cst$kw$recur;
} else {
throw e17391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__17419 = state_17351;
state_17351 = G__17419;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14737__auto__ = function(state_17351){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14737__auto____1.call(this,state_17351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14737__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14737__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto__))
})();
var state__14862__auto__ = (function (){var statearr_17393 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_17393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto__);

return statearr_17393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto__))
);

return c__14860__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17420 = [];
var len__11124__auto___17423 = arguments.length;
var i__11125__auto___17424 = (0);
while(true){
if((i__11125__auto___17424 < len__11124__auto___17423)){
args17420.push((arguments[i__11125__auto___17424]));

var G__17425 = (i__11125__auto___17424 + (1));
i__11125__auto___17424 = G__17425;
continue;
} else {
}
break;
}

var G__17422 = args17420.length;
switch (G__17422) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17420.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17427 = [];
var len__11124__auto___17430 = arguments.length;
var i__11125__auto___17431 = (0);
while(true){
if((i__11125__auto___17431 < len__11124__auto___17430)){
args17427.push((arguments[i__11125__auto___17431]));

var G__17432 = (i__11125__auto___17431 + (1));
i__11125__auto___17431 = G__17432;
continue;
} else {
}
break;
}

var G__17429 = args17427.length;
switch (G__17429) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17427.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17434 = [];
var len__11124__auto___17485 = arguments.length;
var i__11125__auto___17486 = (0);
while(true){
if((i__11125__auto___17486 < len__11124__auto___17485)){
args17434.push((arguments[i__11125__auto___17486]));

var G__17487 = (i__11125__auto___17486 + (1));
i__11125__auto___17486 = G__17487;
continue;
} else {
}
break;
}

var G__17436 = args17434.length;
switch (G__17436) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17434.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14860__auto___17489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___17489,out){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___17489,out){
return (function (state_17460){
var state_val_17461 = (state_17460[(1)]);
if((state_val_17461 === (7))){
var inst_17455 = (state_17460[(2)]);
var state_17460__$1 = state_17460;
var statearr_17462_17490 = state_17460__$1;
(statearr_17462_17490[(2)] = inst_17455);

(statearr_17462_17490[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17461 === (1))){
var inst_17437 = null;
var state_17460__$1 = (function (){var statearr_17463 = state_17460;
(statearr_17463[(7)] = inst_17437);

return statearr_17463;
})();
var statearr_17464_17491 = state_17460__$1;
(statearr_17464_17491[(2)] = null);

(statearr_17464_17491[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17461 === (4))){
var inst_17440 = (state_17460[(8)]);
var inst_17440__$1 = (state_17460[(2)]);
var inst_17441 = (inst_17440__$1 == null);
var inst_17442 = cljs.core.not(inst_17441);
var state_17460__$1 = (function (){var statearr_17465 = state_17460;
(statearr_17465[(8)] = inst_17440__$1);

return statearr_17465;
})();
if(inst_17442){
var statearr_17466_17492 = state_17460__$1;
(statearr_17466_17492[(1)] = (5));

} else {
var statearr_17467_17493 = state_17460__$1;
(statearr_17467_17493[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17461 === (6))){
var state_17460__$1 = state_17460;
var statearr_17468_17494 = state_17460__$1;
(statearr_17468_17494[(2)] = null);

(statearr_17468_17494[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17461 === (3))){
var inst_17457 = (state_17460[(2)]);
var inst_17458 = cljs.core.async.close_BANG_(out);
var state_17460__$1 = (function (){var statearr_17469 = state_17460;
(statearr_17469[(9)] = inst_17457);

return statearr_17469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17460__$1,inst_17458);
} else {
if((state_val_17461 === (2))){
var state_17460__$1 = state_17460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17460__$1,(4),ch);
} else {
if((state_val_17461 === (11))){
var inst_17440 = (state_17460[(8)]);
var inst_17449 = (state_17460[(2)]);
var inst_17437 = inst_17440;
var state_17460__$1 = (function (){var statearr_17470 = state_17460;
(statearr_17470[(7)] = inst_17437);

(statearr_17470[(10)] = inst_17449);

return statearr_17470;
})();
var statearr_17471_17495 = state_17460__$1;
(statearr_17471_17495[(2)] = null);

(statearr_17471_17495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17461 === (9))){
var inst_17440 = (state_17460[(8)]);
var state_17460__$1 = state_17460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17460__$1,(11),out,inst_17440);
} else {
if((state_val_17461 === (5))){
var inst_17440 = (state_17460[(8)]);
var inst_17437 = (state_17460[(7)]);
var inst_17444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17440,inst_17437);
var state_17460__$1 = state_17460;
if(inst_17444){
var statearr_17473_17496 = state_17460__$1;
(statearr_17473_17496[(1)] = (8));

} else {
var statearr_17474_17497 = state_17460__$1;
(statearr_17474_17497[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17461 === (10))){
var inst_17452 = (state_17460[(2)]);
var state_17460__$1 = state_17460;
var statearr_17475_17498 = state_17460__$1;
(statearr_17475_17498[(2)] = inst_17452);

(statearr_17475_17498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17461 === (8))){
var inst_17437 = (state_17460[(7)]);
var tmp17472 = inst_17437;
var inst_17437__$1 = tmp17472;
var state_17460__$1 = (function (){var statearr_17476 = state_17460;
(statearr_17476[(7)] = inst_17437__$1);

return statearr_17476;
})();
var statearr_17477_17499 = state_17460__$1;
(statearr_17477_17499[(2)] = null);

(statearr_17477_17499[(1)] = (2));


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
});})(c__14860__auto___17489,out))
;
return ((function (switch__14736__auto__,c__14860__auto___17489,out){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_17481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17481[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_17481[(1)] = (1));

return statearr_17481;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_17460){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_17460);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e17482){if((e17482 instanceof Object)){
var ex__14740__auto__ = e17482;
var statearr_17483_17500 = state_17460;
(statearr_17483_17500[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17460);

return cljs.core.cst$kw$recur;
} else {
throw e17482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__17501 = state_17460;
state_17460 = G__17501;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_17460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_17460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___17489,out))
})();
var state__14862__auto__ = (function (){var statearr_17484 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_17484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___17489);

return statearr_17484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___17489,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17502 = [];
var len__11124__auto___17572 = arguments.length;
var i__11125__auto___17573 = (0);
while(true){
if((i__11125__auto___17573 < len__11124__auto___17572)){
args17502.push((arguments[i__11125__auto___17573]));

var G__17574 = (i__11125__auto___17573 + (1));
i__11125__auto___17573 = G__17574;
continue;
} else {
}
break;
}

var G__17504 = args17502.length;
switch (G__17504) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17502.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14860__auto___17576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___17576,out){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___17576,out){
return (function (state_17542){
var state_val_17543 = (state_17542[(1)]);
if((state_val_17543 === (7))){
var inst_17538 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
var statearr_17544_17577 = state_17542__$1;
(statearr_17544_17577[(2)] = inst_17538);

(statearr_17544_17577[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (1))){
var inst_17505 = (new Array(n));
var inst_17506 = inst_17505;
var inst_17507 = (0);
var state_17542__$1 = (function (){var statearr_17545 = state_17542;
(statearr_17545[(7)] = inst_17507);

(statearr_17545[(8)] = inst_17506);

return statearr_17545;
})();
var statearr_17546_17578 = state_17542__$1;
(statearr_17546_17578[(2)] = null);

(statearr_17546_17578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (4))){
var inst_17510 = (state_17542[(9)]);
var inst_17510__$1 = (state_17542[(2)]);
var inst_17511 = (inst_17510__$1 == null);
var inst_17512 = cljs.core.not(inst_17511);
var state_17542__$1 = (function (){var statearr_17547 = state_17542;
(statearr_17547[(9)] = inst_17510__$1);

return statearr_17547;
})();
if(inst_17512){
var statearr_17548_17579 = state_17542__$1;
(statearr_17548_17579[(1)] = (5));

} else {
var statearr_17549_17580 = state_17542__$1;
(statearr_17549_17580[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (15))){
var inst_17532 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
var statearr_17550_17581 = state_17542__$1;
(statearr_17550_17581[(2)] = inst_17532);

(statearr_17550_17581[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (13))){
var state_17542__$1 = state_17542;
var statearr_17551_17582 = state_17542__$1;
(statearr_17551_17582[(2)] = null);

(statearr_17551_17582[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (6))){
var inst_17507 = (state_17542[(7)]);
var inst_17528 = (inst_17507 > (0));
var state_17542__$1 = state_17542;
if(cljs.core.truth_(inst_17528)){
var statearr_17552_17583 = state_17542__$1;
(statearr_17552_17583[(1)] = (12));

} else {
var statearr_17553_17584 = state_17542__$1;
(statearr_17553_17584[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (3))){
var inst_17540 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17542__$1,inst_17540);
} else {
if((state_val_17543 === (12))){
var inst_17506 = (state_17542[(8)]);
var inst_17530 = cljs.core.vec(inst_17506);
var state_17542__$1 = state_17542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17542__$1,(15),out,inst_17530);
} else {
if((state_val_17543 === (2))){
var state_17542__$1 = state_17542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17542__$1,(4),ch);
} else {
if((state_val_17543 === (11))){
var inst_17522 = (state_17542[(2)]);
var inst_17523 = (new Array(n));
var inst_17506 = inst_17523;
var inst_17507 = (0);
var state_17542__$1 = (function (){var statearr_17554 = state_17542;
(statearr_17554[(7)] = inst_17507);

(statearr_17554[(10)] = inst_17522);

(statearr_17554[(8)] = inst_17506);

return statearr_17554;
})();
var statearr_17555_17585 = state_17542__$1;
(statearr_17555_17585[(2)] = null);

(statearr_17555_17585[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (9))){
var inst_17506 = (state_17542[(8)]);
var inst_17520 = cljs.core.vec(inst_17506);
var state_17542__$1 = state_17542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17542__$1,(11),out,inst_17520);
} else {
if((state_val_17543 === (5))){
var inst_17507 = (state_17542[(7)]);
var inst_17510 = (state_17542[(9)]);
var inst_17515 = (state_17542[(11)]);
var inst_17506 = (state_17542[(8)]);
var inst_17514 = (inst_17506[inst_17507] = inst_17510);
var inst_17515__$1 = (inst_17507 + (1));
var inst_17516 = (inst_17515__$1 < n);
var state_17542__$1 = (function (){var statearr_17556 = state_17542;
(statearr_17556[(12)] = inst_17514);

(statearr_17556[(11)] = inst_17515__$1);

return statearr_17556;
})();
if(cljs.core.truth_(inst_17516)){
var statearr_17557_17586 = state_17542__$1;
(statearr_17557_17586[(1)] = (8));

} else {
var statearr_17558_17587 = state_17542__$1;
(statearr_17558_17587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (14))){
var inst_17535 = (state_17542[(2)]);
var inst_17536 = cljs.core.async.close_BANG_(out);
var state_17542__$1 = (function (){var statearr_17560 = state_17542;
(statearr_17560[(13)] = inst_17535);

return statearr_17560;
})();
var statearr_17561_17588 = state_17542__$1;
(statearr_17561_17588[(2)] = inst_17536);

(statearr_17561_17588[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (10))){
var inst_17526 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
var statearr_17562_17589 = state_17542__$1;
(statearr_17562_17589[(2)] = inst_17526);

(statearr_17562_17589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17543 === (8))){
var inst_17515 = (state_17542[(11)]);
var inst_17506 = (state_17542[(8)]);
var tmp17559 = inst_17506;
var inst_17506__$1 = tmp17559;
var inst_17507 = inst_17515;
var state_17542__$1 = (function (){var statearr_17563 = state_17542;
(statearr_17563[(7)] = inst_17507);

(statearr_17563[(8)] = inst_17506__$1);

return statearr_17563;
})();
var statearr_17564_17590 = state_17542__$1;
(statearr_17564_17590[(2)] = null);

(statearr_17564_17590[(1)] = (2));


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
}
});})(c__14860__auto___17576,out))
;
return ((function (switch__14736__auto__,c__14860__auto___17576,out){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_17568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17568[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_17568[(1)] = (1));

return statearr_17568;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_17542){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_17542);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e17569){if((e17569 instanceof Object)){
var ex__14740__auto__ = e17569;
var statearr_17570_17591 = state_17542;
(statearr_17570_17591[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17542);

return cljs.core.cst$kw$recur;
} else {
throw e17569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__17592 = state_17542;
state_17542 = G__17592;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_17542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_17542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___17576,out))
})();
var state__14862__auto__ = (function (){var statearr_17571 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_17571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___17576);

return statearr_17571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___17576,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17593 = [];
var len__11124__auto___17667 = arguments.length;
var i__11125__auto___17668 = (0);
while(true){
if((i__11125__auto___17668 < len__11124__auto___17667)){
args17593.push((arguments[i__11125__auto___17668]));

var G__17669 = (i__11125__auto___17668 + (1));
i__11125__auto___17668 = G__17669;
continue;
} else {
}
break;
}

var G__17595 = args17593.length;
switch (G__17595) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17593.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14860__auto___17671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto___17671,out){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto___17671,out){
return (function (state_17637){
var state_val_17638 = (state_17637[(1)]);
if((state_val_17638 === (7))){
var inst_17633 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17639_17672 = state_17637__$1;
(statearr_17639_17672[(2)] = inst_17633);

(statearr_17639_17672[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (1))){
var inst_17596 = [];
var inst_17597 = inst_17596;
var inst_17598 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17637__$1 = (function (){var statearr_17640 = state_17637;
(statearr_17640[(7)] = inst_17598);

(statearr_17640[(8)] = inst_17597);

return statearr_17640;
})();
var statearr_17641_17673 = state_17637__$1;
(statearr_17641_17673[(2)] = null);

(statearr_17641_17673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (4))){
var inst_17601 = (state_17637[(9)]);
var inst_17601__$1 = (state_17637[(2)]);
var inst_17602 = (inst_17601__$1 == null);
var inst_17603 = cljs.core.not(inst_17602);
var state_17637__$1 = (function (){var statearr_17642 = state_17637;
(statearr_17642[(9)] = inst_17601__$1);

return statearr_17642;
})();
if(inst_17603){
var statearr_17643_17674 = state_17637__$1;
(statearr_17643_17674[(1)] = (5));

} else {
var statearr_17644_17675 = state_17637__$1;
(statearr_17644_17675[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (15))){
var inst_17627 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17645_17676 = state_17637__$1;
(statearr_17645_17676[(2)] = inst_17627);

(statearr_17645_17676[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (13))){
var state_17637__$1 = state_17637;
var statearr_17646_17677 = state_17637__$1;
(statearr_17646_17677[(2)] = null);

(statearr_17646_17677[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (6))){
var inst_17597 = (state_17637[(8)]);
var inst_17622 = inst_17597.length;
var inst_17623 = (inst_17622 > (0));
var state_17637__$1 = state_17637;
if(cljs.core.truth_(inst_17623)){
var statearr_17647_17678 = state_17637__$1;
(statearr_17647_17678[(1)] = (12));

} else {
var statearr_17648_17679 = state_17637__$1;
(statearr_17648_17679[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (3))){
var inst_17635 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17637__$1,inst_17635);
} else {
if((state_val_17638 === (12))){
var inst_17597 = (state_17637[(8)]);
var inst_17625 = cljs.core.vec(inst_17597);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17637__$1,(15),out,inst_17625);
} else {
if((state_val_17638 === (2))){
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17637__$1,(4),ch);
} else {
if((state_val_17638 === (11))){
var inst_17605 = (state_17637[(10)]);
var inst_17601 = (state_17637[(9)]);
var inst_17615 = (state_17637[(2)]);
var inst_17616 = [];
var inst_17617 = inst_17616.push(inst_17601);
var inst_17597 = inst_17616;
var inst_17598 = inst_17605;
var state_17637__$1 = (function (){var statearr_17649 = state_17637;
(statearr_17649[(7)] = inst_17598);

(statearr_17649[(11)] = inst_17617);

(statearr_17649[(12)] = inst_17615);

(statearr_17649[(8)] = inst_17597);

return statearr_17649;
})();
var statearr_17650_17680 = state_17637__$1;
(statearr_17650_17680[(2)] = null);

(statearr_17650_17680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (9))){
var inst_17597 = (state_17637[(8)]);
var inst_17613 = cljs.core.vec(inst_17597);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17637__$1,(11),out,inst_17613);
} else {
if((state_val_17638 === (5))){
var inst_17605 = (state_17637[(10)]);
var inst_17598 = (state_17637[(7)]);
var inst_17601 = (state_17637[(9)]);
var inst_17605__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17601) : f.call(null,inst_17601));
var inst_17606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17605__$1,inst_17598);
var inst_17607 = cljs.core.keyword_identical_QMARK_(inst_17598,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17608 = (inst_17606) || (inst_17607);
var state_17637__$1 = (function (){var statearr_17651 = state_17637;
(statearr_17651[(10)] = inst_17605__$1);

return statearr_17651;
})();
if(cljs.core.truth_(inst_17608)){
var statearr_17652_17681 = state_17637__$1;
(statearr_17652_17681[(1)] = (8));

} else {
var statearr_17653_17682 = state_17637__$1;
(statearr_17653_17682[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (14))){
var inst_17630 = (state_17637[(2)]);
var inst_17631 = cljs.core.async.close_BANG_(out);
var state_17637__$1 = (function (){var statearr_17655 = state_17637;
(statearr_17655[(13)] = inst_17630);

return statearr_17655;
})();
var statearr_17656_17683 = state_17637__$1;
(statearr_17656_17683[(2)] = inst_17631);

(statearr_17656_17683[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (10))){
var inst_17620 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17657_17684 = state_17637__$1;
(statearr_17657_17684[(2)] = inst_17620);

(statearr_17657_17684[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17638 === (8))){
var inst_17605 = (state_17637[(10)]);
var inst_17601 = (state_17637[(9)]);
var inst_17597 = (state_17637[(8)]);
var inst_17610 = inst_17597.push(inst_17601);
var tmp17654 = inst_17597;
var inst_17597__$1 = tmp17654;
var inst_17598 = inst_17605;
var state_17637__$1 = (function (){var statearr_17658 = state_17637;
(statearr_17658[(7)] = inst_17598);

(statearr_17658[(14)] = inst_17610);

(statearr_17658[(8)] = inst_17597__$1);

return statearr_17658;
})();
var statearr_17659_17685 = state_17637__$1;
(statearr_17659_17685[(2)] = null);

(statearr_17659_17685[(1)] = (2));


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
}
});})(c__14860__auto___17671,out))
;
return ((function (switch__14736__auto__,c__14860__auto___17671,out){
return (function() {
var cljs$core$async$state_machine__14737__auto__ = null;
var cljs$core$async$state_machine__14737__auto____0 = (function (){
var statearr_17663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17663[(0)] = cljs$core$async$state_machine__14737__auto__);

(statearr_17663[(1)] = (1));

return statearr_17663;
});
var cljs$core$async$state_machine__14737__auto____1 = (function (state_17637){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_17637);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e17664){if((e17664 instanceof Object)){
var ex__14740__auto__ = e17664;
var statearr_17665_17686 = state_17637;
(statearr_17665_17686[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17637);

return cljs.core.cst$kw$recur;
} else {
throw e17664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__17687 = state_17637;
state_17637 = G__17687;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
cljs$core$async$state_machine__14737__auto__ = function(state_17637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14737__auto____1.call(this,state_17637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14737__auto____0;
cljs$core$async$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14737__auto____1;
return cljs$core$async$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto___17671,out))
})();
var state__14862__auto__ = (function (){var statearr_17666 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_17666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto___17671);

return statearr_17666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto___17671,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

