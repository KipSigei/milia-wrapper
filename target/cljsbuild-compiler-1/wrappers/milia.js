// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('wrappers.milia');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chimera.js_interop');
goog.require('cljs.core.async');
goog.require('milia.api.dataset');
goog.require('milia.api.user');
goog.require('milia.utils.remote');
wrappers.milia.set_milia_credentials_BANG_ = (function wrappers$milia$set_milia_credentials_BANG_(var_args){
var args__11131__auto__ = [];
var len__11124__auto___20766 = arguments.length;
var i__11125__auto___20767 = (0);
while(true){
if((i__11125__auto___20767 < len__11124__auto___20766)){
args__11131__auto__.push((arguments[i__11125__auto___20767]));

var G__20768 = (i__11125__auto___20767 + (1));
i__11125__auto___20767 = G__20768;
continue;
} else {
}
break;
}

var argseq__11132__auto__ = ((((2) < args__11131__auto__.length))?(new cljs.core.IndexedSeq(args__11131__auto__.slice((2)),(0),null)):null);
return wrappers.milia.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11132__auto__);
});

wrappers.milia.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (username,temp_token,p__20762){
var vec__20763 = p__20762;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20763,(0),null);
return milia.utils.remote._STAR_credentials_STAR_ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$temp_DASH_token,temp_token,cljs.core.cst$kw$token,token], null);
});

wrappers.milia.set_milia_credentials_BANG_.cljs$lang$maxFixedArity = (2);

wrappers.milia.set_milia_credentials_BANG_.cljs$lang$applyTo = (function (seq20759){
var G__20760 = cljs.core.first(seq20759);
var seq20759__$1 = cljs.core.next(seq20759);
var G__20761 = cljs.core.first(seq20759__$1);
var seq20759__$2 = cljs.core.next(seq20759__$1);
return wrappers.milia.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20760,G__20761,seq20759__$2);
});

/**
 * Set ONA API host
 */
wrappers.milia.set_host = (function wrappers$milia$set_host(var_args){
var args__11131__auto__ = [];
var len__11124__auto___20776 = arguments.length;
var i__11125__auto___20777 = (0);
while(true){
if((i__11125__auto___20777 < len__11124__auto___20776)){
args__11131__auto__.push((arguments[i__11125__auto___20777]));

var G__20778 = (i__11125__auto___20777 + (1));
i__11125__auto___20777 = G__20778;
continue;
} else {
}
break;
}

var argseq__11132__auto__ = ((((2) < args__11131__auto__.length))?(new cljs.core.IndexedSeq(args__11131__auto__.slice((2)),(0),null)):null);
return wrappers.milia.set_host.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11132__auto__);
});
goog.exportSymbol('wrappers.milia.set_host', wrappers.milia.set_host);

wrappers.milia.set_host.cljs$core$IFn$_invoke$arity$variadic = (function (request_protocol,data_host,p__20772){
var vec__20773 = p__20772;
var client_host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20773,(0),null);
return milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic(data_host,cljs.core.array_seq([cljs.core.cst$kw$request_DASH_protocol,request_protocol,cljs.core.cst$kw$client_DASH_host,client_host], 0));
});

wrappers.milia.set_host.cljs$lang$maxFixedArity = (2);

wrappers.milia.set_host.cljs$lang$applyTo = (function (seq20769){
var G__20770 = cljs.core.first(seq20769);
var seq20769__$1 = cljs.core.next(seq20769);
var G__20771 = cljs.core.first(seq20769__$1);
var seq20769__$2 = cljs.core.next(seq20769__$1);
return wrappers.milia.set_host.cljs$core$IFn$_invoke$arity$variadic(G__20770,G__20771,seq20769__$2);
});

/**
 * Create an account map given a user's credentials.
 */
wrappers.milia.set_credentials = (function wrappers$milia$set_credentials(var_args){
var args__11131__auto__ = [];
var len__11124__auto___20902 = arguments.length;
var i__11125__auto___20903 = (0);
while(true){
if((i__11125__auto___20903 < len__11124__auto___20902)){
args__11131__auto__.push((arguments[i__11125__auto___20903]));

var G__20904 = (i__11125__auto___20903 + (1));
i__11125__auto___20903 = G__20904;
continue;
} else {
}
break;
}

var argseq__11132__auto__ = ((((2) < args__11131__auto__.length))?(new cljs.core.IndexedSeq(args__11131__auto__.slice((2)),(0),null)):null);
return wrappers.milia.set_credentials.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11132__auto__);
});
goog.exportSymbol('wrappers.milia.set_credentials', wrappers.milia.set_credentials);

wrappers.milia.set_credentials.cljs$core$IFn$_invoke$arity$variadic = (function (username,password,p__20782){
var vec__20783 = p__20782;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783,(0),null);
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto__,vec__20783,callback){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto__,vec__20783,callback){
return (function (state_20853){
var state_val_20854 = (state_20853[(1)]);
if((state_val_20854 === (7))){
var state_20853__$1 = state_20853;
var statearr_20855_20905 = state_20853__$1;
(statearr_20855_20905[(2)] = false);

(statearr_20855_20905[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (20))){
var inst_20835 = (state_20853[(7)]);
var inst_20834 = (state_20853[(2)]);
var inst_20835__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20834,cljs.core.cst$kw$username);
var inst_20836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20834,cljs.core.cst$kw$api_token);
var inst_20837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20834,cljs.core.cst$kw$temp_token);
var state_20853__$1 = (function (){var statearr_20856 = state_20853;
(statearr_20856[(8)] = inst_20837);

(statearr_20856[(9)] = inst_20836);

(statearr_20856[(7)] = inst_20835__$1);

return statearr_20856;
})();
if(cljs.core.truth_(inst_20835__$1)){
var statearr_20857_20906 = state_20853__$1;
(statearr_20857_20906[(1)] = (21));

} else {
var statearr_20858_20907 = state_20853__$1;
(statearr_20858_20907[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (27))){
var inst_20837 = (state_20853[(8)]);
var inst_20836 = (state_20853[(9)]);
var inst_20835 = (state_20853[(7)]);
var inst_20847 = wrappers.milia.set_milia_credentials_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_20835,inst_20837,cljs.core.array_seq([inst_20836], 0));
var state_20853__$1 = state_20853;
var statearr_20859_20908 = state_20853__$1;
(statearr_20859_20908[(2)] = inst_20847);

(statearr_20859_20908[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (1))){
var inst_20788 = milia.api.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0));
var state_20853__$1 = state_20853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20853__$1,(2),inst_20788);
} else {
if((state_val_20854 === (24))){
var inst_20837 = (state_20853[(8)]);
var state_20853__$1 = state_20853;
var statearr_20860_20909 = state_20853__$1;
(statearr_20860_20909[(2)] = inst_20837);

(statearr_20860_20909[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (4))){
var state_20853__$1 = state_20853;
var statearr_20861_20910 = state_20853__$1;
(statearr_20861_20910[(2)] = false);

(statearr_20861_20910[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (15))){
var state_20853__$1 = state_20853;
var statearr_20862_20911 = state_20853__$1;
(statearr_20862_20911[(2)] = true);

(statearr_20862_20911[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (21))){
var inst_20836 = (state_20853[(9)]);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20836)){
var statearr_20863_20912 = state_20853__$1;
(statearr_20863_20912[(1)] = (24));

} else {
var statearr_20864_20913 = state_20853__$1;
(statearr_20864_20913[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (13))){
var state_20853__$1 = state_20853;
var statearr_20865_20914 = state_20853__$1;
(statearr_20865_20914[(2)] = false);

(statearr_20865_20914[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (22))){
var inst_20835 = (state_20853[(7)]);
var state_20853__$1 = state_20853;
var statearr_20866_20915 = state_20853__$1;
(statearr_20866_20915[(2)] = inst_20835);

(statearr_20866_20915[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (29))){
var inst_20813 = (state_20853[(10)]);
var inst_20850 = (state_20853[(2)]);
var inst_20851 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_20813) : callback.call(null,inst_20813));
var state_20853__$1 = (function (){var statearr_20867 = state_20853;
(statearr_20867[(11)] = inst_20850);

return statearr_20867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20853__$1,inst_20851);
} else {
if((state_val_20854 === (6))){
var state_20853__$1 = state_20853;
var statearr_20868_20916 = state_20853__$1;
(statearr_20868_20916[(2)] = true);

(statearr_20868_20916[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (28))){
var state_20853__$1 = state_20853;
var statearr_20869_20917 = state_20853__$1;
(statearr_20869_20917[(2)] = null);

(statearr_20869_20917[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (25))){
var inst_20836 = (state_20853[(9)]);
var state_20853__$1 = state_20853;
var statearr_20870_20918 = state_20853__$1;
(statearr_20870_20918[(2)] = inst_20836);

(statearr_20870_20918[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (17))){
var inst_20826 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
var statearr_20871_20919 = state_20853__$1;
(statearr_20871_20919[(2)] = inst_20826);

(statearr_20871_20919[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (3))){
var inst_20790 = (state_20853[(12)]);
var inst_20795 = inst_20790.cljs$lang$protocol_mask$partition0$;
var inst_20796 = (inst_20795 & (64));
var inst_20797 = inst_20790.cljs$core$ISeq$;
var inst_20798 = (cljs.core.PROTOCOL_SENTINEL === inst_20797);
var inst_20799 = (inst_20796) || (inst_20798);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20799)){
var statearr_20872_20920 = state_20853__$1;
(statearr_20872_20920[(1)] = (6));

} else {
var statearr_20873_20921 = state_20853__$1;
(statearr_20873_20921[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (12))){
var inst_20812 = (state_20853[(13)]);
var inst_20818 = inst_20812.cljs$lang$protocol_mask$partition0$;
var inst_20819 = (inst_20818 & (64));
var inst_20820 = inst_20812.cljs$core$ISeq$;
var inst_20821 = (cljs.core.PROTOCOL_SENTINEL === inst_20820);
var inst_20822 = (inst_20819) || (inst_20821);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20822)){
var statearr_20874_20922 = state_20853__$1;
(statearr_20874_20922[(1)] = (15));

} else {
var statearr_20875_20923 = state_20853__$1;
(statearr_20875_20923[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (2))){
var inst_20790 = (state_20853[(12)]);
var inst_20790__$1 = (state_20853[(2)]);
var inst_20792 = (inst_20790__$1 == null);
var inst_20793 = cljs.core.not(inst_20792);
var state_20853__$1 = (function (){var statearr_20876 = state_20853;
(statearr_20876[(12)] = inst_20790__$1);

return statearr_20876;
})();
if(inst_20793){
var statearr_20877_20924 = state_20853__$1;
(statearr_20877_20924[(1)] = (3));

} else {
var statearr_20878_20925 = state_20853__$1;
(statearr_20878_20925[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (23))){
var inst_20845 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20845)){
var statearr_20879_20926 = state_20853__$1;
(statearr_20879_20926[(1)] = (27));

} else {
var statearr_20880_20927 = state_20853__$1;
(statearr_20880_20927[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (19))){
var inst_20812 = (state_20853[(13)]);
var state_20853__$1 = state_20853;
var statearr_20881_20928 = state_20853__$1;
(statearr_20881_20928[(2)] = inst_20812);

(statearr_20881_20928[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (11))){
var inst_20812 = (state_20853[(13)]);
var inst_20811 = (state_20853[(2)]);
var inst_20812__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20811,cljs.core.cst$kw$body);
var inst_20813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20811,cljs.core.cst$kw$status);
var inst_20815 = (inst_20812__$1 == null);
var inst_20816 = cljs.core.not(inst_20815);
var state_20853__$1 = (function (){var statearr_20882 = state_20853;
(statearr_20882[(10)] = inst_20813);

(statearr_20882[(13)] = inst_20812__$1);

return statearr_20882;
})();
if(inst_20816){
var statearr_20883_20929 = state_20853__$1;
(statearr_20883_20929[(1)] = (12));

} else {
var statearr_20884_20930 = state_20853__$1;
(statearr_20884_20930[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (9))){
var inst_20790 = (state_20853[(12)]);
var inst_20808 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20790);
var state_20853__$1 = state_20853;
var statearr_20885_20931 = state_20853__$1;
(statearr_20885_20931[(2)] = inst_20808);

(statearr_20885_20931[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (5))){
var inst_20806 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20806)){
var statearr_20886_20932 = state_20853__$1;
(statearr_20886_20932[(1)] = (9));

} else {
var statearr_20887_20933 = state_20853__$1;
(statearr_20887_20933[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (14))){
var inst_20829 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20829)){
var statearr_20888_20934 = state_20853__$1;
(statearr_20888_20934[(1)] = (18));

} else {
var statearr_20889_20935 = state_20853__$1;
(statearr_20889_20935[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (26))){
var inst_20842 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
var statearr_20890_20936 = state_20853__$1;
(statearr_20890_20936[(2)] = inst_20842);

(statearr_20890_20936[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (16))){
var state_20853__$1 = state_20853;
var statearr_20891_20937 = state_20853__$1;
(statearr_20891_20937[(2)] = false);

(statearr_20891_20937[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (10))){
var inst_20790 = (state_20853[(12)]);
var state_20853__$1 = state_20853;
var statearr_20892_20938 = state_20853__$1;
(statearr_20892_20938[(2)] = inst_20790);

(statearr_20892_20938[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (18))){
var inst_20812 = (state_20853[(13)]);
var inst_20831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20812);
var state_20853__$1 = state_20853;
var statearr_20893_20939 = state_20853__$1;
(statearr_20893_20939[(2)] = inst_20831);

(statearr_20893_20939[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20854 === (8))){
var inst_20803 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
var statearr_20894_20940 = state_20853__$1;
(statearr_20894_20940[(2)] = inst_20803);

(statearr_20894_20940[(1)] = (5));


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
});})(c__14860__auto__,vec__20783,callback))
;
return ((function (switch__14736__auto__,c__14860__auto__,vec__20783,callback){
return (function() {
var wrappers$milia$state_machine__14737__auto__ = null;
var wrappers$milia$state_machine__14737__auto____0 = (function (){
var statearr_20898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20898[(0)] = wrappers$milia$state_machine__14737__auto__);

(statearr_20898[(1)] = (1));

return statearr_20898;
});
var wrappers$milia$state_machine__14737__auto____1 = (function (state_20853){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_20853);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e20899){if((e20899 instanceof Object)){
var ex__14740__auto__ = e20899;
var statearr_20900_20941 = state_20853;
(statearr_20900_20941[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20853);

return cljs.core.cst$kw$recur;
} else {
throw e20899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__20942 = state_20853;
state_20853 = G__20942;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
wrappers$milia$state_machine__14737__auto__ = function(state_20853){
switch(arguments.length){
case 0:
return wrappers$milia$state_machine__14737__auto____0.call(this);
case 1:
return wrappers$milia$state_machine__14737__auto____1.call(this,state_20853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
wrappers$milia$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = wrappers$milia$state_machine__14737__auto____0;
wrappers$milia$state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = wrappers$milia$state_machine__14737__auto____1;
return wrappers$milia$state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto__,vec__20783,callback))
})();
var state__14862__auto__ = (function (){var statearr_20901 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_20901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto__);

return statearr_20901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto__,vec__20783,callback))
);

return c__14860__auto__;
});

wrappers.milia.set_credentials.cljs$lang$maxFixedArity = (2);

wrappers.milia.set_credentials.cljs$lang$applyTo = (function (seq20779){
var G__20780 = cljs.core.first(seq20779);
var seq20779__$1 = cljs.core.next(seq20779);
var G__20781 = cljs.core.first(seq20779__$1);
var seq20779__$2 = cljs.core.next(seq20779__$1);
return wrappers.milia.set_credentials.cljs$core$IFn$_invoke$arity$variadic(G__20780,G__20781,seq20779__$2);
});

/**
 * Returns data from dataset-id
 */
wrappers.milia.get_form_data = (function wrappers$milia$get_form_data(dataset_id,query_params,callback){
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14860__auto__){
return (function (){
var f__14861__auto__ = (function (){var switch__14736__auto__ = ((function (c__14860__auto__){
return (function (state_21044){
var state_val_21045 = (state_21044[(1)]);
if((state_val_21045 === (7))){
var state_21044__$1 = state_21044;
var statearr_21046_21071 = state_21044__$1;
(statearr_21046_21071[(2)] = false);

(statearr_21046_21071[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (1))){
var inst_21008 = chimera.js_interop.json__GT_js__GT_cljs(query_params);
var inst_21009 = milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic(dataset_id,cljs.core.array_seq([cljs.core.cst$kw$raw_QMARK_,true,cljs.core.cst$kw$query_DASH_params,inst_21008,cljs.core.cst$kw$must_DASH_revalidate_QMARK_,true], 0));
var state_21044__$1 = state_21044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21044__$1,(2),inst_21009);
} else {
if((state_val_21045 === (4))){
var state_21044__$1 = state_21044;
var statearr_21047_21072 = state_21044__$1;
(statearr_21047_21072[(2)] = false);

(statearr_21047_21072[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (13))){
var state_21044__$1 = state_21044;
var statearr_21048_21073 = state_21044__$1;
(statearr_21048_21073[(2)] = null);

(statearr_21048_21073[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (6))){
var state_21044__$1 = state_21044;
var statearr_21049_21074 = state_21044__$1;
(statearr_21049_21074[(2)] = true);

(statearr_21049_21074[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (3))){
var inst_21011 = (state_21044[(7)]);
var inst_21016 = inst_21011.cljs$lang$protocol_mask$partition0$;
var inst_21017 = (inst_21016 & (64));
var inst_21018 = inst_21011.cljs$core$ISeq$;
var inst_21019 = (cljs.core.PROTOCOL_SENTINEL === inst_21018);
var inst_21020 = (inst_21017) || (inst_21019);
var state_21044__$1 = state_21044;
if(cljs.core.truth_(inst_21020)){
var statearr_21050_21075 = state_21044__$1;
(statearr_21050_21075[(1)] = (6));

} else {
var statearr_21051_21076 = state_21044__$1;
(statearr_21051_21076[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (12))){
var inst_21034 = (state_21044[(8)]);
var inst_21037 = console.log(inst_21034);
var state_21044__$1 = state_21044;
var statearr_21052_21077 = state_21044__$1;
(statearr_21052_21077[(2)] = inst_21037);

(statearr_21052_21077[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (2))){
var inst_21011 = (state_21044[(7)]);
var inst_21011__$1 = (state_21044[(2)]);
var inst_21013 = (inst_21011__$1 == null);
var inst_21014 = cljs.core.not(inst_21013);
var state_21044__$1 = (function (){var statearr_21053 = state_21044;
(statearr_21053[(7)] = inst_21011__$1);

return statearr_21053;
})();
if(inst_21014){
var statearr_21054_21078 = state_21044__$1;
(statearr_21054_21078[(1)] = (3));

} else {
var statearr_21055_21079 = state_21044__$1;
(statearr_21055_21079[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (11))){
var inst_21032 = (state_21044[(2)]);
var inst_21033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21032,cljs.core.cst$kw$status);
var inst_21034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21032,cljs.core.cst$kw$body);
var inst_21035 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_21033,(200));
var state_21044__$1 = (function (){var statearr_21056 = state_21044;
(statearr_21056[(8)] = inst_21034);

return statearr_21056;
})();
if(inst_21035){
var statearr_21057_21080 = state_21044__$1;
(statearr_21057_21080[(1)] = (12));

} else {
var statearr_21058_21081 = state_21044__$1;
(statearr_21058_21081[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (9))){
var inst_21011 = (state_21044[(7)]);
var inst_21029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21011);
var state_21044__$1 = state_21044;
var statearr_21059_21082 = state_21044__$1;
(statearr_21059_21082[(2)] = inst_21029);

(statearr_21059_21082[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (5))){
var inst_21027 = (state_21044[(2)]);
var state_21044__$1 = state_21044;
if(cljs.core.truth_(inst_21027)){
var statearr_21060_21083 = state_21044__$1;
(statearr_21060_21083[(1)] = (9));

} else {
var statearr_21061_21084 = state_21044__$1;
(statearr_21061_21084[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (14))){
var inst_21034 = (state_21044[(8)]);
var inst_21040 = (state_21044[(2)]);
var inst_21041 = chimera.js_interop.str__GT_json(inst_21034);
var inst_21042 = (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(inst_21040,inst_21041) : callback.call(null,inst_21040,inst_21041));
var state_21044__$1 = state_21044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21044__$1,inst_21042);
} else {
if((state_val_21045 === (10))){
var inst_21011 = (state_21044[(7)]);
var state_21044__$1 = state_21044;
var statearr_21062_21085 = state_21044__$1;
(statearr_21062_21085[(2)] = inst_21011);

(statearr_21062_21085[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21045 === (8))){
var inst_21024 = (state_21044[(2)]);
var state_21044__$1 = state_21044;
var statearr_21063_21086 = state_21044__$1;
(statearr_21063_21086[(2)] = inst_21024);

(statearr_21063_21086[(1)] = (5));


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
});})(c__14860__auto__))
;
return ((function (switch__14736__auto__,c__14860__auto__){
return (function() {
var wrappers$milia$get_form_data_$_state_machine__14737__auto__ = null;
var wrappers$milia$get_form_data_$_state_machine__14737__auto____0 = (function (){
var statearr_21067 = [null,null,null,null,null,null,null,null,null];
(statearr_21067[(0)] = wrappers$milia$get_form_data_$_state_machine__14737__auto__);

(statearr_21067[(1)] = (1));

return statearr_21067;
});
var wrappers$milia$get_form_data_$_state_machine__14737__auto____1 = (function (state_21044){
while(true){
var ret_value__14738__auto__ = (function (){try{while(true){
var result__14739__auto__ = switch__14736__auto__(state_21044);
if(cljs.core.keyword_identical_QMARK_(result__14739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14739__auto__;
}
break;
}
}catch (e21068){if((e21068 instanceof Object)){
var ex__14740__auto__ = e21068;
var statearr_21069_21087 = state_21044;
(statearr_21069_21087[(5)] = ex__14740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21044);

return cljs.core.cst$kw$recur;
} else {
throw e21068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14738__auto__,cljs.core.cst$kw$recur)){
var G__21088 = state_21044;
state_21044 = G__21088;
continue;
} else {
return ret_value__14738__auto__;
}
break;
}
});
wrappers$milia$get_form_data_$_state_machine__14737__auto__ = function(state_21044){
switch(arguments.length){
case 0:
return wrappers$milia$get_form_data_$_state_machine__14737__auto____0.call(this);
case 1:
return wrappers$milia$get_form_data_$_state_machine__14737__auto____1.call(this,state_21044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
wrappers$milia$get_form_data_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$0 = wrappers$milia$get_form_data_$_state_machine__14737__auto____0;
wrappers$milia$get_form_data_$_state_machine__14737__auto__.cljs$core$IFn$_invoke$arity$1 = wrappers$milia$get_form_data_$_state_machine__14737__auto____1;
return wrappers$milia$get_form_data_$_state_machine__14737__auto__;
})()
;})(switch__14736__auto__,c__14860__auto__))
})();
var state__14862__auto__ = (function (){var statearr_21070 = (f__14861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14861__auto__.cljs$core$IFn$_invoke$arity$0() : f__14861__auto__.call(null));
(statearr_21070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14860__auto__);

return statearr_21070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(c__14860__auto__))
);

return c__14860__auto__;
});
goog.exportSymbol('wrappers.milia.get_form_data', wrappers.milia.get_form_data);
