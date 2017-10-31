// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('milia_wrappper');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chimera.js_interop');
goog.require('cljs.core.async');
goog.require('milia.api.dataset');
goog.require('milia.api.user');
goog.require('milia.utils.remote');
milia_wrappper.set_milia_credentials_BANG_ = (function milia_wrappper$set_milia_credentials_BANG_(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17796 = arguments.length;
var i__11124__auto___17797 = (0);
while(true){
if((i__11124__auto___17797 < len__11123__auto___17796)){
args__11130__auto__.push((arguments[i__11124__auto___17797]));

var G__17798 = (i__11124__auto___17797 + (1));
i__11124__auto___17797 = G__17798;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia_wrappper.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia_wrappper.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (username,temp_token,p__17792){
var vec__17793 = p__17792;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17793,(0),null);
return milia.utils.remote._STAR_credentials_STAR_ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$temp_DASH_token,temp_token,cljs.core.cst$kw$token,token], null);
});

milia_wrappper.set_milia_credentials_BANG_.cljs$lang$maxFixedArity = (2);

milia_wrappper.set_milia_credentials_BANG_.cljs$lang$applyTo = (function (seq17789){
var G__17790 = cljs.core.first(seq17789);
var seq17789__$1 = cljs.core.next(seq17789);
var G__17791 = cljs.core.first(seq17789__$1);
var seq17789__$2 = cljs.core.next(seq17789__$1);
return milia_wrappper.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17790,G__17791,seq17789__$2);
});

/**
 * Set ONA API host
 */
milia_wrappper.set_host = (function milia_wrappper$set_host(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17806 = arguments.length;
var i__11124__auto___17807 = (0);
while(true){
if((i__11124__auto___17807 < len__11123__auto___17806)){
args__11130__auto__.push((arguments[i__11124__auto___17807]));

var G__17808 = (i__11124__auto___17807 + (1));
i__11124__auto___17807 = G__17808;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia_wrappper.set_host.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});
goog.exportSymbol('milia_wrappper.set_host', milia_wrappper.set_host);

milia_wrappper.set_host.cljs$core$IFn$_invoke$arity$variadic = (function (request_protocol,data_host,p__17802){
var vec__17803 = p__17802;
var client_host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17803,(0),null);
return milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic(data_host,cljs.core.array_seq([cljs.core.cst$kw$request_DASH_protocol,request_protocol,cljs.core.cst$kw$client_DASH_host,client_host], 0));
});

milia_wrappper.set_host.cljs$lang$maxFixedArity = (2);

milia_wrappper.set_host.cljs$lang$applyTo = (function (seq17799){
var G__17800 = cljs.core.first(seq17799);
var seq17799__$1 = cljs.core.next(seq17799);
var G__17801 = cljs.core.first(seq17799__$1);
var seq17799__$2 = cljs.core.next(seq17799__$1);
return milia_wrappper.set_host.cljs$core$IFn$_invoke$arity$variadic(G__17800,G__17801,seq17799__$2);
});

/**
 * Create an account map given a user's credentials.
 */
milia_wrappper.set_credentials = (function milia_wrappper$set_credentials(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17932 = arguments.length;
var i__11124__auto___17933 = (0);
while(true){
if((i__11124__auto___17933 < len__11123__auto___17932)){
args__11130__auto__.push((arguments[i__11124__auto___17933]));

var G__17934 = (i__11124__auto___17933 + (1));
i__11124__auto___17933 = G__17934;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia_wrappper.set_credentials.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});
goog.exportSymbol('milia_wrappper.set_credentials', milia_wrappper.set_credentials);

milia_wrappper.set_credentials.cljs$core$IFn$_invoke$arity$variadic = (function (username,password,p__17812){
var vec__17813 = p__17812;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17813,(0),null);
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14551__auto__,vec__17813,callback){
return (function (){
var f__14552__auto__ = (function (){var switch__14173__auto__ = ((function (c__14551__auto__,vec__17813,callback){
return (function (state_17883){
var state_val_17884 = (state_17883[(1)]);
if((state_val_17884 === (7))){
var state_17883__$1 = state_17883;
var statearr_17885_17935 = state_17883__$1;
(statearr_17885_17935[(2)] = false);

(statearr_17885_17935[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (20))){
var inst_17865 = (state_17883[(7)]);
var inst_17864 = (state_17883[(2)]);
var inst_17865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17864,cljs.core.cst$kw$username);
var inst_17866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17864,cljs.core.cst$kw$api_token);
var inst_17867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17864,cljs.core.cst$kw$temp_token);
var state_17883__$1 = (function (){var statearr_17886 = state_17883;
(statearr_17886[(7)] = inst_17865__$1);

(statearr_17886[(8)] = inst_17866);

(statearr_17886[(9)] = inst_17867);

return statearr_17886;
})();
if(cljs.core.truth_(inst_17865__$1)){
var statearr_17887_17936 = state_17883__$1;
(statearr_17887_17936[(1)] = (21));

} else {
var statearr_17888_17937 = state_17883__$1;
(statearr_17888_17937[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (27))){
var inst_17865 = (state_17883[(7)]);
var inst_17866 = (state_17883[(8)]);
var inst_17867 = (state_17883[(9)]);
var inst_17877 = milia_wrappper.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_17865,inst_17867,cljs.core.array_seq([inst_17866], 0));
var state_17883__$1 = state_17883;
var statearr_17889_17938 = state_17883__$1;
(statearr_17889_17938[(2)] = inst_17877);

(statearr_17889_17938[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (1))){
var inst_17818 = milia.api.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0));
var state_17883__$1 = state_17883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17883__$1,(2),inst_17818);
} else {
if((state_val_17884 === (24))){
var inst_17867 = (state_17883[(9)]);
var state_17883__$1 = state_17883;
var statearr_17890_17939 = state_17883__$1;
(statearr_17890_17939[(2)] = inst_17867);

(statearr_17890_17939[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (4))){
var state_17883__$1 = state_17883;
var statearr_17891_17940 = state_17883__$1;
(statearr_17891_17940[(2)] = false);

(statearr_17891_17940[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (15))){
var state_17883__$1 = state_17883;
var statearr_17892_17941 = state_17883__$1;
(statearr_17892_17941[(2)] = true);

(statearr_17892_17941[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (21))){
var inst_17866 = (state_17883[(8)]);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17866)){
var statearr_17893_17942 = state_17883__$1;
(statearr_17893_17942[(1)] = (24));

} else {
var statearr_17894_17943 = state_17883__$1;
(statearr_17894_17943[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (13))){
var state_17883__$1 = state_17883;
var statearr_17895_17944 = state_17883__$1;
(statearr_17895_17944[(2)] = false);

(statearr_17895_17944[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (22))){
var inst_17865 = (state_17883[(7)]);
var state_17883__$1 = state_17883;
var statearr_17896_17945 = state_17883__$1;
(statearr_17896_17945[(2)] = inst_17865);

(statearr_17896_17945[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (29))){
var inst_17843 = (state_17883[(10)]);
var inst_17880 = (state_17883[(2)]);
var inst_17881 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_17843) : callback.call(null,inst_17843));
var state_17883__$1 = (function (){var statearr_17897 = state_17883;
(statearr_17897[(11)] = inst_17880);

return statearr_17897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17883__$1,inst_17881);
} else {
if((state_val_17884 === (6))){
var state_17883__$1 = state_17883;
var statearr_17898_17946 = state_17883__$1;
(statearr_17898_17946[(2)] = true);

(statearr_17898_17946[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (28))){
var state_17883__$1 = state_17883;
var statearr_17899_17947 = state_17883__$1;
(statearr_17899_17947[(2)] = null);

(statearr_17899_17947[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (25))){
var inst_17866 = (state_17883[(8)]);
var state_17883__$1 = state_17883;
var statearr_17900_17948 = state_17883__$1;
(statearr_17900_17948[(2)] = inst_17866);

(statearr_17900_17948[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (17))){
var inst_17856 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
var statearr_17901_17949 = state_17883__$1;
(statearr_17901_17949[(2)] = inst_17856);

(statearr_17901_17949[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (3))){
var inst_17820 = (state_17883[(12)]);
var inst_17825 = inst_17820.cljs$lang$protocol_mask$partition0$;
var inst_17826 = (inst_17825 & (64));
var inst_17827 = inst_17820.cljs$core$ISeq$;
var inst_17828 = (cljs.core.PROTOCOL_SENTINEL === inst_17827);
var inst_17829 = (inst_17826) || (inst_17828);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17829)){
var statearr_17902_17950 = state_17883__$1;
(statearr_17902_17950[(1)] = (6));

} else {
var statearr_17903_17951 = state_17883__$1;
(statearr_17903_17951[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (12))){
var inst_17842 = (state_17883[(13)]);
var inst_17848 = inst_17842.cljs$lang$protocol_mask$partition0$;
var inst_17849 = (inst_17848 & (64));
var inst_17850 = inst_17842.cljs$core$ISeq$;
var inst_17851 = (cljs.core.PROTOCOL_SENTINEL === inst_17850);
var inst_17852 = (inst_17849) || (inst_17851);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17852)){
var statearr_17904_17952 = state_17883__$1;
(statearr_17904_17952[(1)] = (15));

} else {
var statearr_17905_17953 = state_17883__$1;
(statearr_17905_17953[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (2))){
var inst_17820 = (state_17883[(12)]);
var inst_17820__$1 = (state_17883[(2)]);
var inst_17822 = (inst_17820__$1 == null);
var inst_17823 = cljs.core.not(inst_17822);
var state_17883__$1 = (function (){var statearr_17906 = state_17883;
(statearr_17906[(12)] = inst_17820__$1);

return statearr_17906;
})();
if(inst_17823){
var statearr_17907_17954 = state_17883__$1;
(statearr_17907_17954[(1)] = (3));

} else {
var statearr_17908_17955 = state_17883__$1;
(statearr_17908_17955[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (23))){
var inst_17875 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17875)){
var statearr_17909_17956 = state_17883__$1;
(statearr_17909_17956[(1)] = (27));

} else {
var statearr_17910_17957 = state_17883__$1;
(statearr_17910_17957[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (19))){
var inst_17842 = (state_17883[(13)]);
var state_17883__$1 = state_17883;
var statearr_17911_17958 = state_17883__$1;
(statearr_17911_17958[(2)] = inst_17842);

(statearr_17911_17958[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (11))){
var inst_17842 = (state_17883[(13)]);
var inst_17841 = (state_17883[(2)]);
var inst_17842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17841,cljs.core.cst$kw$body);
var inst_17843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17841,cljs.core.cst$kw$status);
var inst_17845 = (inst_17842__$1 == null);
var inst_17846 = cljs.core.not(inst_17845);
var state_17883__$1 = (function (){var statearr_17912 = state_17883;
(statearr_17912[(13)] = inst_17842__$1);

(statearr_17912[(10)] = inst_17843);

return statearr_17912;
})();
if(inst_17846){
var statearr_17913_17959 = state_17883__$1;
(statearr_17913_17959[(1)] = (12));

} else {
var statearr_17914_17960 = state_17883__$1;
(statearr_17914_17960[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (9))){
var inst_17820 = (state_17883[(12)]);
var inst_17838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17820);
var state_17883__$1 = state_17883;
var statearr_17915_17961 = state_17883__$1;
(statearr_17915_17961[(2)] = inst_17838);

(statearr_17915_17961[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (5))){
var inst_17836 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17836)){
var statearr_17916_17962 = state_17883__$1;
(statearr_17916_17962[(1)] = (9));

} else {
var statearr_17917_17963 = state_17883__$1;
(statearr_17917_17963[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (14))){
var inst_17859 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17859)){
var statearr_17918_17964 = state_17883__$1;
(statearr_17918_17964[(1)] = (18));

} else {
var statearr_17919_17965 = state_17883__$1;
(statearr_17919_17965[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (26))){
var inst_17872 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
var statearr_17920_17966 = state_17883__$1;
(statearr_17920_17966[(2)] = inst_17872);

(statearr_17920_17966[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (16))){
var state_17883__$1 = state_17883;
var statearr_17921_17967 = state_17883__$1;
(statearr_17921_17967[(2)] = false);

(statearr_17921_17967[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (10))){
var inst_17820 = (state_17883[(12)]);
var state_17883__$1 = state_17883;
var statearr_17922_17968 = state_17883__$1;
(statearr_17922_17968[(2)] = inst_17820);

(statearr_17922_17968[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (18))){
var inst_17842 = (state_17883[(13)]);
var inst_17861 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17842);
var state_17883__$1 = state_17883;
var statearr_17923_17969 = state_17883__$1;
(statearr_17923_17969[(2)] = inst_17861);

(statearr_17923_17969[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17884 === (8))){
var inst_17833 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
var statearr_17924_17970 = state_17883__$1;
(statearr_17924_17970[(2)] = inst_17833);

(statearr_17924_17970[(1)] = (5));


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
});})(c__14551__auto__,vec__17813,callback))
;
return ((function (switch__14173__auto__,c__14551__auto__,vec__17813,callback){
return (function() {
var milia_wrappper$state_machine__14174__auto__ = null;
var milia_wrappper$state_machine__14174__auto____0 = (function (){
var statearr_17928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17928[(0)] = milia_wrappper$state_machine__14174__auto__);

(statearr_17928[(1)] = (1));

return statearr_17928;
});
var milia_wrappper$state_machine__14174__auto____1 = (function (state_17883){
while(true){
var ret_value__14175__auto__ = (function (){try{while(true){
var result__14176__auto__ = switch__14173__auto__(state_17883);
if(cljs.core.keyword_identical_QMARK_(result__14176__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14176__auto__;
}
break;
}
}catch (e17929){if((e17929 instanceof Object)){
var ex__14177__auto__ = e17929;
var statearr_17930_17971 = state_17883;
(statearr_17930_17971[(5)] = ex__14177__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17883);

return cljs.core.cst$kw$recur;
} else {
throw e17929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14175__auto__,cljs.core.cst$kw$recur)){
var G__17972 = state_17883;
state_17883 = G__17972;
continue;
} else {
return ret_value__14175__auto__;
}
break;
}
});
milia_wrappper$state_machine__14174__auto__ = function(state_17883){
switch(arguments.length){
case 0:
return milia_wrappper$state_machine__14174__auto____0.call(this);
case 1:
return milia_wrappper$state_machine__14174__auto____1.call(this,state_17883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
milia_wrappper$state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$0 = milia_wrappper$state_machine__14174__auto____0;
milia_wrappper$state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$1 = milia_wrappper$state_machine__14174__auto____1;
return milia_wrappper$state_machine__14174__auto__;
})()
;})(switch__14173__auto__,c__14551__auto__,vec__17813,callback))
})();
var state__14553__auto__ = (function (){var statearr_17931 = (f__14552__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14552__auto__.cljs$core$IFn$_invoke$arity$0() : f__14552__auto__.call(null));
(statearr_17931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14551__auto__);

return statearr_17931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(c__14551__auto__,vec__17813,callback))
);

return c__14551__auto__;
});

milia_wrappper.set_credentials.cljs$lang$maxFixedArity = (2);

milia_wrappper.set_credentials.cljs$lang$applyTo = (function (seq17809){
var G__17810 = cljs.core.first(seq17809);
var seq17809__$1 = cljs.core.next(seq17809);
var G__17811 = cljs.core.first(seq17809__$1);
var seq17809__$2 = cljs.core.next(seq17809__$1);
return milia_wrappper.set_credentials.cljs$core$IFn$_invoke$arity$variadic(G__17810,G__17811,seq17809__$2);
});

/**
 * Returns data from dataset-id
 */
milia_wrappper.get_form_data = (function milia_wrappper$get_form_data(dataset_id,query_params,callback){
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14551__auto__){
return (function (){
var f__14552__auto__ = (function (){var switch__14173__auto__ = ((function (c__14551__auto__){
return (function (state_18074){
var state_val_18075 = (state_18074[(1)]);
if((state_val_18075 === (7))){
var state_18074__$1 = state_18074;
var statearr_18076_18101 = state_18074__$1;
(statearr_18076_18101[(2)] = false);

(statearr_18076_18101[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (1))){
var inst_18038 = chimera.js_interop.json__GT_js__GT_cljs(query_params);
var inst_18039 = milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic(dataset_id,cljs.core.array_seq([cljs.core.cst$kw$raw_QMARK_,true,cljs.core.cst$kw$query_DASH_params,inst_18038,cljs.core.cst$kw$must_DASH_revalidate_QMARK_,true], 0));
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18074__$1,(2),inst_18039);
} else {
if((state_val_18075 === (4))){
var state_18074__$1 = state_18074;
var statearr_18077_18102 = state_18074__$1;
(statearr_18077_18102[(2)] = false);

(statearr_18077_18102[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (13))){
var state_18074__$1 = state_18074;
var statearr_18078_18103 = state_18074__$1;
(statearr_18078_18103[(2)] = null);

(statearr_18078_18103[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (6))){
var state_18074__$1 = state_18074;
var statearr_18079_18104 = state_18074__$1;
(statearr_18079_18104[(2)] = true);

(statearr_18079_18104[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (3))){
var inst_18041 = (state_18074[(7)]);
var inst_18046 = inst_18041.cljs$lang$protocol_mask$partition0$;
var inst_18047 = (inst_18046 & (64));
var inst_18048 = inst_18041.cljs$core$ISeq$;
var inst_18049 = (cljs.core.PROTOCOL_SENTINEL === inst_18048);
var inst_18050 = (inst_18047) || (inst_18049);
var state_18074__$1 = state_18074;
if(cljs.core.truth_(inst_18050)){
var statearr_18080_18105 = state_18074__$1;
(statearr_18080_18105[(1)] = (6));

} else {
var statearr_18081_18106 = state_18074__$1;
(statearr_18081_18106[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (12))){
var inst_18064 = (state_18074[(8)]);
var inst_18067 = console.log(inst_18064);
var state_18074__$1 = state_18074;
var statearr_18082_18107 = state_18074__$1;
(statearr_18082_18107[(2)] = inst_18067);

(statearr_18082_18107[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (2))){
var inst_18041 = (state_18074[(7)]);
var inst_18041__$1 = (state_18074[(2)]);
var inst_18043 = (inst_18041__$1 == null);
var inst_18044 = cljs.core.not(inst_18043);
var state_18074__$1 = (function (){var statearr_18083 = state_18074;
(statearr_18083[(7)] = inst_18041__$1);

return statearr_18083;
})();
if(inst_18044){
var statearr_18084_18108 = state_18074__$1;
(statearr_18084_18108[(1)] = (3));

} else {
var statearr_18085_18109 = state_18074__$1;
(statearr_18085_18109[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (11))){
var inst_18062 = (state_18074[(2)]);
var inst_18063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18062,cljs.core.cst$kw$status);
var inst_18064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18062,cljs.core.cst$kw$body);
var inst_18065 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_18063,(200));
var state_18074__$1 = (function (){var statearr_18086 = state_18074;
(statearr_18086[(8)] = inst_18064);

return statearr_18086;
})();
if(inst_18065){
var statearr_18087_18110 = state_18074__$1;
(statearr_18087_18110[(1)] = (12));

} else {
var statearr_18088_18111 = state_18074__$1;
(statearr_18088_18111[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (9))){
var inst_18041 = (state_18074[(7)]);
var inst_18059 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18041);
var state_18074__$1 = state_18074;
var statearr_18089_18112 = state_18074__$1;
(statearr_18089_18112[(2)] = inst_18059);

(statearr_18089_18112[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (5))){
var inst_18057 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
if(cljs.core.truth_(inst_18057)){
var statearr_18090_18113 = state_18074__$1;
(statearr_18090_18113[(1)] = (9));

} else {
var statearr_18091_18114 = state_18074__$1;
(statearr_18091_18114[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (14))){
var inst_18064 = (state_18074[(8)]);
var inst_18070 = (state_18074[(2)]);
var inst_18071 = chimera.js_interop.str__GT_json(inst_18064);
var inst_18072 = (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(inst_18070,inst_18071) : callback.call(null,inst_18070,inst_18071));
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18074__$1,inst_18072);
} else {
if((state_val_18075 === (10))){
var inst_18041 = (state_18074[(7)]);
var state_18074__$1 = state_18074;
var statearr_18092_18115 = state_18074__$1;
(statearr_18092_18115[(2)] = inst_18041);

(statearr_18092_18115[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (8))){
var inst_18054 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
var statearr_18093_18116 = state_18074__$1;
(statearr_18093_18116[(2)] = inst_18054);

(statearr_18093_18116[(1)] = (5));


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
});})(c__14551__auto__))
;
return ((function (switch__14173__auto__,c__14551__auto__){
return (function() {
var milia_wrappper$get_form_data_$_state_machine__14174__auto__ = null;
var milia_wrappper$get_form_data_$_state_machine__14174__auto____0 = (function (){
var statearr_18097 = [null,null,null,null,null,null,null,null,null];
(statearr_18097[(0)] = milia_wrappper$get_form_data_$_state_machine__14174__auto__);

(statearr_18097[(1)] = (1));

return statearr_18097;
});
var milia_wrappper$get_form_data_$_state_machine__14174__auto____1 = (function (state_18074){
while(true){
var ret_value__14175__auto__ = (function (){try{while(true){
var result__14176__auto__ = switch__14173__auto__(state_18074);
if(cljs.core.keyword_identical_QMARK_(result__14176__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14176__auto__;
}
break;
}
}catch (e18098){if((e18098 instanceof Object)){
var ex__14177__auto__ = e18098;
var statearr_18099_18117 = state_18074;
(statearr_18099_18117[(5)] = ex__14177__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18074);

return cljs.core.cst$kw$recur;
} else {
throw e18098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14175__auto__,cljs.core.cst$kw$recur)){
var G__18118 = state_18074;
state_18074 = G__18118;
continue;
} else {
return ret_value__14175__auto__;
}
break;
}
});
milia_wrappper$get_form_data_$_state_machine__14174__auto__ = function(state_18074){
switch(arguments.length){
case 0:
return milia_wrappper$get_form_data_$_state_machine__14174__auto____0.call(this);
case 1:
return milia_wrappper$get_form_data_$_state_machine__14174__auto____1.call(this,state_18074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
milia_wrappper$get_form_data_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$0 = milia_wrappper$get_form_data_$_state_machine__14174__auto____0;
milia_wrappper$get_form_data_$_state_machine__14174__auto__.cljs$core$IFn$_invoke$arity$1 = milia_wrappper$get_form_data_$_state_machine__14174__auto____1;
return milia_wrappper$get_form_data_$_state_machine__14174__auto__;
})()
;})(switch__14173__auto__,c__14551__auto__))
})();
var state__14553__auto__ = (function (){var statearr_18100 = (f__14552__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14552__auto__.cljs$core$IFn$_invoke$arity$0() : f__14552__auto__.call(null));
(statearr_18100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14551__auto__);

return statearr_18100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(c__14551__auto__))
);

return c__14551__auto__;
});
goog.exportSymbol('milia_wrappper.get_form_data', milia_wrappper.get_form_data);
