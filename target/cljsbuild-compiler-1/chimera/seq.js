// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chimera.seq');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('chimera.string');
goog.require('clojure.set');
/**
 * Concat then turn into vector
 */
chimera.seq.concatv = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.concat);
chimera.seq.filter_first = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter);
chimera.seq.not_empty_QMARK_ = cljs.core.complement(cljs.core.empty_QMARK_);
chimera.seq.select_values = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.select_keys);
chimera.seq.select_value = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,chimera.seq.select_values);
/**
 * Return a list of all items that appear more than once in a sequence.
 */
chimera.seq.duplicates = (function chimera$seq$duplicates(l){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__17322_SHARP_){
if((cljs.core.last(p1__17322_SHARP_) > (1))){
return cljs.core.first(p1__17322_SHARP_);
} else {
return null;
}
}),cljs.core.frequencies(l));
});
/**
 * True is map has all these keys.
 */
chimera.seq.has_keys_QMARK_ = (function chimera$seq$has_keys_QMARK_(m,keys){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,m),keys);
});
/**
 * True if elem is in list, false otherwise.
 */
chimera.seq.in_QMARK_ = (function chimera$seq$in_QMARK_(list,elem){
return cljs.core.boolean$(cljs.core.some((function (p1__17323_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elem,p1__17323_SHARP_);
}),list));
});
chimera.seq.mapply = (function chimera$seq$mapply(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17326 = arguments.length;
var i__11124__auto___17327 = (0);
while(true){
if((i__11124__auto___17327 < len__11123__auto___17326)){
args__11130__auto__.push((arguments[i__11124__auto___17327]));

var G__17328 = (i__11124__auto___17327 + (1));
i__11124__auto___17327 = G__17328;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return chimera.seq.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

chimera.seq.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
});

chimera.seq.mapply.cljs$lang$maxFixedArity = (1);

chimera.seq.mapply.cljs$lang$applyTo = (function (seq17324){
var G__17325 = cljs.core.first(seq17324);
var seq17324__$1 = cljs.core.next(seq17324);
return chimera.seq.mapply.cljs$core$IFn$_invoke$arity$variadic(G__17325,seq17324__$1);
});

chimera.seq.sort_by_category = (function chimera$seq$sort_by_category(sort_by_key,collection){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (item){
var G__17330 = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(item);
return (sort_by_key.cljs$core$IFn$_invoke$arity$1 ? sort_by_key.cljs$core$IFn$_invoke$arity$1(G__17330) : sort_by_key.call(null,G__17330));
}),collection);
});
/**
 * Apply a function to each value of a map. From http://goo.gl/JdwzZf
 */
chimera.seq.update_values = (function chimera$seq$update_values(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17338 = arguments.length;
var i__11124__auto___17339 = (0);
while(true){
if((i__11124__auto___17339 < len__11123__auto___17338)){
args__11130__auto__.push((arguments[i__11124__auto___17339]));

var G__17340 = (i__11124__auto___17339 + (1));
i__11124__auto___17339 = G__17340;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return chimera.seq.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

chimera.seq.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__17334){
var vec__17335 = p__17334;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17335,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

chimera.seq.update_values.cljs$lang$maxFixedArity = (2);

chimera.seq.update_values.cljs$lang$applyTo = (function (seq17331){
var G__17332 = cljs.core.first(seq17331);
var seq17331__$1 = cljs.core.next(seq17331);
var G__17333 = cljs.core.first(seq17331__$1);
var seq17331__$2 = cljs.core.next(seq17331__$1);
return chimera.seq.update_values.cljs$core$IFn$_invoke$arity$variadic(G__17332,G__17333,seq17331__$2);
});

chimera.seq.sort_by_name = (function chimera$seq$sort_by_name(sort_by_key,collection){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__17341_SHARP_){
return clojure.string.lower_case((sort_by_key.cljs$core$IFn$_invoke$arity$1 ? sort_by_key.cljs$core$IFn$_invoke$arity$1(p1__17341_SHARP_) : sort_by_key.call(null,p1__17341_SHARP_)));
}),collection);
});
/**
 * Removes elem from a vector by its position.
 */
chimera.seq.dissoc_vec = (function chimera$seq$dissoc_vec(coll,pos){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
/**
 * Like core/assoc-in but accepting multiple key vectors and values
 * (assoc-in* coll & args)
 */
chimera.seq.assoc_in_multi = (function chimera$seq$assoc_in_multi(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17352 = arguments.length;
var i__11124__auto___17353 = (0);
while(true){
if((i__11124__auto___17353 < len__11123__auto___17352)){
args__11130__auto__.push((arguments[i__11124__auto___17353]));

var G__17354 = (i__11124__auto___17353 + (1));
i__11124__auto___17353 = G__17354;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return chimera.seq.assoc_in_multi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

chimera.seq.assoc_in_multi.cljs$core$IFn$_invoke$arity$variadic = (function (coll,args){
if(cljs.core.even_QMARK_){
} else {
throw (new Error("Assert failed: even?"));
}

if(cljs.core.truth_(cljs.core.count(args))){
} else {
throw (new Error("Assert failed: (count args)"));
}

var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args);
var reducer = ((function (pairs){
return (function (skeleton_map,p__17348){
var vec__17349 = p__17348;
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349,(1),null);
return cljs.core.assoc_in(skeleton_map,keys,value);
});})(pairs))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,coll,pairs);
});

chimera.seq.assoc_in_multi.cljs$lang$maxFixedArity = (1);

chimera.seq.assoc_in_multi.cljs$lang$applyTo = (function (seq17346){
var G__17347 = cljs.core.first(seq17346);
var seq17346__$1 = cljs.core.next(seq17346);
return chimera.seq.assoc_in_multi.cljs$core$IFn$_invoke$arity$variadic(G__17347,seq17346__$1);
});

/**
 * Deep merge any number of maps.
 */
chimera.seq.deep_merge = (function chimera$seq$deep_merge(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17356 = arguments.length;
var i__11124__auto___17357 = (0);
while(true){
if((i__11124__auto___17357 < len__11123__auto___17356)){
args__11130__auto__.push((arguments[i__11124__auto___17357]));

var G__17358 = (i__11124__auto___17357 + (1));
i__11124__auto___17357 = G__17358;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return chimera.seq.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

chimera.seq.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function (x,y){
if(cljs.core.map_QMARK_(y)){
return chimera.seq.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x,y], 0));
} else {
if(cljs.core.vector_QMARK_(y)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return y;

}
}
}),maps);
});

chimera.seq.deep_merge.cljs$lang$maxFixedArity = (0);

chimera.seq.deep_merge.cljs$lang$applyTo = (function (seq17355){
return chimera.seq.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17355));
});

/**
 * Apply func to pred matching k value to v.
 */
chimera.seq.fn_collection = (function chimera$seq$fn_collection(func,k,v,collection){
if(cljs.core.truth_(v)){
var G__17362 = (function (p1__17359_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(p1__17359_SHARP_) : k.call(null,p1__17359_SHARP_)));
});
var G__17363 = collection;
return (func.cljs$core$IFn$_invoke$arity$2 ? func.cljs$core$IFn$_invoke$arity$2(G__17362,G__17363) : func.call(null,G__17362,G__17363));
} else {
return collection;
}
});
/**
 * Keeps values in list maps where k value matchs v
 */
chimera.seq.filter_collection = (function chimera$seq$filter_collection(k,v,collection){
return chimera.seq.fn_collection(cljs.core.filter,k,v,collection);
});
/**
 * Removes values in list maps where k value matchs cond
 */
chimera.seq.filter_out_collection = (function chimera$seq$filter_out_collection(k,v,collection){
return chimera.seq.fn_collection(cljs.core.remove,k,v,collection);
});
/**
 * Remove map entries where the value is falsey.
 */
chimera.seq.remove_falsey_values = (function chimera$seq$remove_falsey_values(a_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.second),a_map));
});
/**
 * Return collections with a key matching the query.
 */
chimera.seq.search_collection = (function chimera$seq$search_collection(var_args){
var args17364 = [];
var len__11123__auto___17373 = arguments.length;
var i__11124__auto___17374 = (0);
while(true){
if((i__11124__auto___17374 < len__11123__auto___17373)){
args17364.push((arguments[i__11124__auto___17374]));

var G__17375 = (i__11124__auto___17374 + (1));
i__11124__auto___17374 = G__17375;
continue;
} else {
}
break;
}

var G__17366 = args17364.length;
switch (G__17366) {
case 3:
return chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17364.length)].join('')));

}
});

chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$3 = (function (query,collection,k){
return chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$4(query,collection,k,true);
});

chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$4 = (function (query,collection,k,case_insensitive_QMARK_){
var query_cased = (cljs.core.truth_(case_insensitive_QMARK_)?clojure.string.lower_case(query):query);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__10798__auto__ = ((function (query_cased){
return (function chimera$seq$iter__17367(s__17368){
return (new cljs.core.LazySeq(null,((function (query_cased){
return (function (){
var s__17368__$1 = s__17368;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17368__$1);
if(temp__4657__auto__){
var s__17368__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17368__$2)){
var c__10796__auto__ = cljs.core.chunk_first(s__17368__$2);
var size__10797__auto__ = cljs.core.count(c__10796__auto__);
var b__17370 = cljs.core.chunk_buffer(size__10797__auto__);
if((function (){var i__17369 = (0);
while(true){
if((i__17369 < size__10797__auto__)){
var member = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10796__auto__,i__17369);
var v = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(member) : k.call(null,member));
var v_cased = (cljs.core.truth_(case_insensitive_QMARK_)?clojure.string.lower_case(v):v);
if(cljs.core.truth_(chimera.string.substring_QMARK_(query_cased,v_cased))){
cljs.core.chunk_append(b__17370,member);

var G__17377 = (i__17369 + (1));
i__17369 = G__17377;
continue;
} else {
var G__17378 = (i__17369 + (1));
i__17369 = G__17378;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17370),chimera$seq$iter__17367(cljs.core.chunk_rest(s__17368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17370),null);
}
} else {
var member = cljs.core.first(s__17368__$2);
var v = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(member) : k.call(null,member));
var v_cased = (cljs.core.truth_(case_insensitive_QMARK_)?clojure.string.lower_case(v):v);
if(cljs.core.truth_(chimera.string.substring_QMARK_(query_cased,v_cased))){
return cljs.core.cons(member,chimera$seq$iter__17367(cljs.core.rest(s__17368__$2)));
} else {
var G__17379 = cljs.core.rest(s__17368__$2);
s__17368__$1 = G__17379;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_cased))
,null,null));
});})(query_cased))
;
return iter__10798__auto__(collection);
})());
});

chimera.seq.search_collection.cljs$lang$maxFixedArity = 4;

/**
 * Returns the position of at which pred is true for items in coll.
 */
chimera.seq.positions = (function chimera$seq$positions(pred,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return idx;
} else {
return null;
}
}),coll);
});
/**
 * Returns index of an item within a collection.
 */
chimera.seq.index_of = (function chimera$seq$index_of(coll,item){
return cljs.core.first(chimera.seq.positions(cljs.core.PersistentHashSet.createAsIfByAssoc([item]),coll));
});
/**
 * Update map value in list based on key match
 */
chimera.seq.update_map_in_list = (function chimera$seq$update_map_in_list(list,map_to_update,key_to_match){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17380_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((key_to_match.cljs$core$IFn$_invoke$arity$1 ? key_to_match.cljs$core$IFn$_invoke$arity$1(p1__17380_SHARP_) : key_to_match.call(null,p1__17380_SHARP_)),(key_to_match.cljs$core$IFn$_invoke$arity$1 ? key_to_match.cljs$core$IFn$_invoke$arity$1(map_to_update) : key_to_match.call(null,map_to_update)))){
return map_to_update;
} else {
return p1__17380_SHARP_;
}
}),list);
});
/**
 * Basically lifted from http://stackoverflow.com/a/17902228/420386
 */
chimera.seq.flatten_map = (function chimera$seq$flatten_map(var_args){
var args17381 = [];
var len__11123__auto___17388 = arguments.length;
var i__11124__auto___17389 = (0);
while(true){
if((i__11124__auto___17389 < len__11123__auto___17388)){
args17381.push((arguments[i__11124__auto___17389]));

var G__17390 = (i__11124__auto___17389 + (1));
i__11124__auto___17389 = G__17390;
continue;
} else {
}
break;
}

var G__17383 = args17381.length;
switch (G__17383) {
case 1:
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17381.length)].join('')));

}
});

chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$1 = (function (form){
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$2(form,"/");
});

chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$2 = (function (form,separator){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$3(form,separator,null));
});

chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$3 = (function (form,separator,prefix){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__17384){
var vec__17385 = p__17384;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17385,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17385,(1),null);
var full_prefix = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''):cljs.core.name(key));
if(cljs.core.map_QMARK_(value)){
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$3(value,separator,full_prefix);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_prefix,value], null)], null);
}
}),cljs.core.array_seq([form], 0));
});

chimera.seq.flatten_map.cljs$lang$maxFixedArity = 3;

/**
 * Return difference between 2 sequences.
 */
chimera.seq.diff = (function chimera$seq$diff(a,b){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(a),cljs.core.set(b));
});
/**
 * Return difference between 2 sequences. Preserves ordering in first seq.
 */
chimera.seq.ordered_diff = (function chimera$seq$ordered_diff(a,b){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17392_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.set(b),p1__17392_SHARP_));
}),a);
});
/**
 * Merges two sequeneces
 */
chimera.seq.union = (function chimera$seq$union(a,b){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(a),cljs.core.set(b));
});
/**
 * Remove nil values from a sequence.
 */
chimera.seq.remove_nil = (function chimera$seq$remove_nil(l){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,l);
});
/**
 * Removes x from coll if present, and adds if absent.
 */
chimera.seq.toggle = (function chimera$seq$toggle(coll,x){
if(cljs.core.contains_QMARK_(cljs.core.set(coll),x)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17393_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,p1__17393_SHARP_);
}),coll);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});
/**
 * Given a seq, produces a two-el seq. [a b c] => [[0 a] [1 b] [2 c]].
 */
chimera.seq.indexed = (function chimera$seq$indexed(coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
});
chimera.seq.transpose = (function chimera$seq$transpose(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,m);
});
/**
 * Get the first map from a list of maps with the given value for key.
 */
chimera.seq.map_list__GT_map = (function chimera$seq$map_list__GT_map(map_list,k,v){
var G__17397 = (function (p1__17394_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(p1__17394_SHARP_) : k.call(null,p1__17394_SHARP_)),v);
});
var G__17398 = map_list;
return (chimera.seq.filter_first.cljs$core$IFn$_invoke$arity$2 ? chimera.seq.filter_first.cljs$core$IFn$_invoke$arity$2(G__17397,G__17398) : chimera.seq.filter_first.call(null,G__17397,G__17398));
});
