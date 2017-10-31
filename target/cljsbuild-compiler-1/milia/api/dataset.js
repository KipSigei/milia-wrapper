// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('milia.api.dataset');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chimera.seq');
goog.require('clojure.string');
goog.require('milia.api.http');
goog.require('milia.utils.metadata');
goog.require('milia.utils.remote');
/**
 * Return all the datasets for an account.
 */
milia.api.dataset.all = (function milia$api$dataset$all(username){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("forms?owner="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)].join('')], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});
/**
 * Return all public datasets for a specific user.
 */
milia.api.dataset.public$ = (function milia$api$dataset$public(username){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",username], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});
/**
 * Clone the dataset given by ID into the account with the given username.
 */
milia.api.dataset.clone = (function milia$api$dataset$clone(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17736 = arguments.length;
var i__11124__auto___17737 = (0);
while(true){
if((i__11124__auto___17737 < len__11123__auto___17736)){
args__11130__auto__.push((arguments[i__11124__auto___17737]));

var G__17738 = (i__11124__auto___17737 + (1));
i__11124__auto___17737 = G__17738;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia.api.dataset.clone.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia.api.dataset.clone.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,username,p__17733){
var map__17734 = p__17733;
var map__17734__$1 = ((((!((map__17734 == null)))?((((map__17734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17734):map__17734);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17734__$1,cljs.core.cst$kw$project_DASH_id);
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,"clone"], 0));
var data_base = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$username,username], null)], null);
var data = (cljs.core.truth_(project_id)?cljs.core.assoc_in(data_base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_params,cljs.core.cst$kw$project_id], null),project_id):data_base);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,data,cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true], 0));
});

milia.api.dataset.clone.cljs$lang$maxFixedArity = (2);

milia.api.dataset.clone.cljs$lang$applyTo = (function (seq17730){
var G__17731 = cljs.core.first(seq17730);
var seq17730__$1 = cljs.core.next(seq17730);
var G__17732 = cljs.core.first(seq17730__$1);
var seq17730__$2 = cljs.core.next(seq17730__$1);
return milia.api.dataset.clone.cljs$core$IFn$_invoke$arity$variadic(G__17731,G__17732,seq17730__$2);
});

/**
 * Set the metadata for a dataset using PUT. All parameters must be passed.
 */
milia.api.dataset.update = (function milia$api$dataset$update(dataset_id,params){
if(cljs.core.truth_(chimera.seq.has_keys_QMARK_(params,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$created_by,cljs.core.cst$kw$description,cljs.core.cst$kw$downloadable,cljs.core.cst$kw$owner,cljs.core.cst$kw$project,cljs.core.cst$kw$public,cljs.core.cst$kw$public_data,cljs.core.cst$kw$title,cljs.core.cst$kw$uuid], null)))){
} else {
throw (new Error("Assert failed: (has-keys? params [:created_by :description :downloadable :owner :project :public :public_data :title :uuid])"));
}

var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$put,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,params], null)], 0));
});
/**
 * Update the title of a form
 */
milia.api.dataset.update_form_name = (function milia$api$dataset$update_form_name(dataset_id,params){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$put,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,params], null)], 0));
});
/**
 * Return the data associated with a dataset.
 */
milia.api.dataset.data = (function milia$api$dataset$data(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17744 = arguments.length;
var i__11124__auto___17745 = (0);
while(true){
if((i__11124__auto___17745 < len__11123__auto___17744)){
args__11130__auto__.push((arguments[i__11124__auto___17745]));

var G__17746 = (i__11124__auto___17745 + (1));
i__11124__auto___17745 = G__17746;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});
goog.exportSymbol('milia.api.dataset.data', milia.api.dataset.data);

milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,p__17741){
var map__17742 = p__17741;
var map__17742__$1 = ((((!((map__17742 == null)))?((((map__17742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17742):map__17742);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17742__$1,cljs.core.cst$kw$format);
var raw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17742__$1,cljs.core.cst$kw$raw_QMARK_);
var must_revalidate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17742__$1,cljs.core.cst$kw$must_DASH_revalidate_QMARK_);
var accept_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17742__$1,cljs.core.cst$kw$accept_DASH_header);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17742__$1,cljs.core.cst$kw$query_DASH_params);
var query_suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17742__$1,cljs.core.cst$kw$query_DASH_suffix);
var data_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17742__$1,cljs.core.cst$kw$data_DASH_id);
var dataset_suffix = (cljs.core.truth_(format)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataset_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(data_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_id)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join(''):dataset_id);
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["data",dataset_suffix], 0));
var url__$1 = (cljs.core.truth_(query_suffix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?query="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_suffix)].join(''):url);
var options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_params,query_params], null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url__$1,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,options,cljs.core.cst$kw$raw_DASH_response_QMARK_,raw_QMARK_,cljs.core.cst$kw$must_DASH_revalidate_QMARK_,must_revalidate_QMARK_,cljs.core.cst$kw$accept_DASH_header,accept_header], 0));
});

milia.api.dataset.data.cljs$lang$maxFixedArity = (1);

milia.api.dataset.data.cljs$lang$applyTo = (function (seq17739){
var G__17740 = cljs.core.first(seq17739);
var seq17739__$1 = cljs.core.next(seq17739);
return milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic(G__17740,seq17739__$1);
});

/**
 * Retrieve a record from the dataset.
 */
milia.api.dataset.record = (function milia$api$dataset$record(dataset_id,record_id){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["data",dataset_id,record_id], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});
/**
 * Returns tags for a dataset
 */
milia.api.dataset.tags = (function milia$api$dataset$tags(dataset_id){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,"labels"], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});
/**
 * Add tags to a dataset
 */
milia.api.dataset.add_tags = (function milia$api$dataset$add_tags(dataset_id,tags){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,"labels"], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,tags], null)], 0));
});
/**
 * Return filename taking format special cases into account.
 */
milia.api.dataset.filename_for_format = (function milia$api$dataset$filename_for_format(dataset_id,format){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataset_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"csvzip"))?"zip":format))].join('');
});
/**
 * Return options needed to handle format.
 */
milia.api.dataset.options_for_format = (function milia$api$dataset$options_for_format(format){
if(cljs.core.truth_(chimera.seq.in_QMARK_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["csvzip","sav","xls","xlsx","zip"], null),format))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,cljs.core.cst$kw$byte_DASH_array], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Download form data in specified format. The synchronicity here refers to the
 * server side. This will still return a channel, not data, in CLJS.
 * The options map (last parameter) has the following keys:
 * :accept-header Defaults to application/json
 * :submission-id The id of the submission whose data the client requires. The
 *  function returns data for all submissions if this is not provided.
 * :dataview? Boolean flag indicating whether the data belongs to a filtered
 *  dataview
 */
milia.api.dataset.download_synchronously = (function milia$api$dataset$download_synchronously(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17753 = arguments.length;
var i__11124__auto___17754 = (0);
while(true){
if((i__11124__auto___17754 < len__11123__auto___17753)){
args__11130__auto__.push((arguments[i__11124__auto___17754]));

var G__17755 = (i__11124__auto___17754 + (1));
i__11124__auto___17754 = G__17755;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia.api.dataset.download_synchronously.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia.api.dataset.download_synchronously.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,format,p__17750){
var map__17751 = p__17750;
var map__17751__$1 = ((((!((map__17751 == null)))?((((map__17751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17751):map__17751);
var accept_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17751__$1,cljs.core.cst$kw$accept_DASH_header);
var submission_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17751__$1,cljs.core.cst$kw$submission_DASH_id);
var dataview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17751__$1,cljs.core.cst$kw$dataview_QMARK_);
var url = (cljs.core.truth_(dataview_QMARK_)?milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dataviews",dataset_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("data."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('')], 0)):(cljs.core.truth_(submission_id)?milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["data",dataset_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(submission_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('')], 0)):milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["data",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataset_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('')], 0))
));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$accept_DASH_header,accept_header,cljs.core.cst$kw$http_DASH_options,milia.api.dataset.options_for_format(format)], 0));
});

milia.api.dataset.download_synchronously.cljs$lang$maxFixedArity = (2);

milia.api.dataset.download_synchronously.cljs$lang$applyTo = (function (seq17747){
var G__17748 = cljs.core.first(seq17747);
var seq17747__$1 = cljs.core.next(seq17747);
var G__17749 = cljs.core.first(seq17747__$1);
var seq17747__$2 = cljs.core.next(seq17747__$1);
return milia.api.dataset.download_synchronously.cljs$core$IFn$_invoke$arity$variadic(G__17748,G__17749,seq17747__$2);
});

/**
 * Download form as JSON string or file in specified format if format passed.
 */
milia.api.dataset.form = (function milia$api$dataset$form(var_args){
var args17756 = [];
var len__11123__auto___17759 = arguments.length;
var i__11124__auto___17760 = (0);
while(true){
if((i__11124__auto___17760 < len__11123__auto___17759)){
args17756.push((arguments[i__11124__auto___17760]));

var G__17761 = (i__11124__auto___17760 + (1));
i__11124__auto___17760 = G__17761;
continue;
} else {
}
break;
}

var G__17758 = args17756.length;
switch (G__17758) {
case 1:
return milia.api.dataset.form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return milia.api.dataset.form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17756.length)].join('')));

}
});

milia.api.dataset.form.cljs$core$IFn$_invoke$arity$1 = (function (dataset_id){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,"form.json"], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});

milia.api.dataset.form.cljs$core$IFn$_invoke$arity$2 = (function (dataset_id,format){
var suffix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('');
var options = milia.api.dataset.options_for_format(format);
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,suffix], 0));
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataset_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,options,cljs.core.cst$kw$filename,filename], 0));
});

milia.api.dataset.form.cljs$lang$maxFixedArity = 2;

/**
 * Show dataset metadata.
 */
milia.api.dataset.metadata = (function milia$api$dataset$metadata(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17768 = arguments.length;
var i__11124__auto___17769 = (0);
while(true){
if((i__11124__auto___17769 < len__11123__auto___17768)){
args__11130__auto__.push((arguments[i__11124__auto___17769]));

var G__17770 = (i__11124__auto___17769 + (1));
i__11124__auto___17769 = G__17770;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((1) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((1)),(0),null)):null);
return milia.api.dataset.metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11131__auto__);
});

milia.api.dataset.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,p__17765){
var map__17766 = p__17765;
var map__17766__$1 = ((((!((map__17766 == null)))?((((map__17766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17766):map__17766);
var no_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17766__$1,cljs.core.cst$kw$no_DASH_cache_QMARK_);
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataset_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".json")].join('')], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$no_DASH_cache_QMARK_,no_cache_QMARK_], 0));
});

milia.api.dataset.metadata.cljs$lang$maxFixedArity = (1);

milia.api.dataset.metadata.cljs$lang$applyTo = (function (seq17763){
var G__17764 = cljs.core.first(seq17763);
var seq17763__$1 = cljs.core.next(seq17763);
return milia.api.dataset.metadata.cljs$core$IFn$_invoke$arity$variadic(G__17764,seq17763__$1);
});

/**
 * Return link to online data entry.
 */
milia.api.dataset.online_data_entry_link = (function milia$api$dataset$online_data_entry_link(dataset_id){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,"enketo"], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});
/**
 * Return link to online data entry.
 */
milia.api.dataset.edit_link = (function milia$api$dataset$edit_link(username,project_id,dataset_id,instance_id){
var return_url = milia.utils.remote.make_client_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([username,project_id,dataset_id,"submission-editing-complete"], 0));
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["data",dataset_id,instance_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("enketo?return_url="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(return_url)].join('')], 0));
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(milia.api.http.parse_http(cljs.core.cst$kw$get,url));
});
/**
 * Delete a dataset by ID.
 */
milia.api.dataset.delete$ = (function milia$api$dataset$delete(dataset_id){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,"delete_async"], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$delete,url);
});
/**
 * Move a dataset to a project use account if no owner passed.
 */
milia.api.dataset.move_to_project = (function milia$api$dataset$move_to_project(dataset_id,project_id){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["projects",project_id,"forms"], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$formid,dataset_id], null)], null)], 0));
});
/**
 * Set a new form owner
 */
milia.api.dataset.new_form_owner = (function milia$api$dataset$new_form_owner(dataset_id,new_owner){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id], 0));
var new_owner__$1 = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["users",new_owner], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$patch,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$owner,new_owner__$1], null)], null)], 0));
});
/**
 * Share dataset with specific user
 */
milia.api.dataset.update_sharing = (function milia$api$dataset$update_sharing(dataset_id,username,role){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",dataset_id,"share"], 0));
var data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$role,role], null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,data], null)], 0));
});
/**
 * Link xform or dataview as media
 */
milia.api.dataset.link_xform_or_dataview_as_media = (function milia$api$dataset$link_xform_or_dataview_as_media(object_type,object_id,media_filename,xform_id){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["metadata"], 0));
var form_params = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_type,"media",cljs.core.cst$kw$data_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_type,object_id,media_filename], null)))].join(''),cljs.core.cst$kw$xform,xform_id], null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,form_params], null),cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true], 0));
});
/**
 * Add xls report link to dataset
 */
milia.api.dataset.add_xls_report = (function milia$api$dataset$add_xls_report(dataset_id,uuid,filename){
var xls_url = milia.utils.remote.make_j2x_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["xls",uuid], 0));
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["metadata"], 0));
var data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$xform,dataset_id,cljs.core.cst$kw$data_type,"external_export",cljs.core.cst$kw$data_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xls_url)].join('')], null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,data], null)], 0));
});
/**
 * Download xls report from the j2x service
 */
milia.api.dataset.download_xls_report = (function milia$api$dataset$download_xls_report(var_args){
var args17771 = [];
var len__11123__auto___17774 = arguments.length;
var i__11124__auto___17775 = (0);
while(true){
if((i__11124__auto___17775 < len__11123__auto___17774)){
args17771.push((arguments[i__11124__auto___17775]));

var G__17776 = (i__11124__auto___17775 + (1));
i__11124__auto___17775 = G__17776;
continue;
} else {
}
break;
}

var G__17773 = args17771.length;
switch (G__17773) {
case 3:
return milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17771.length)].join('')));

}
});

milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$3 = (function (dataset_id,meta_id,filename){
return milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$4(dataset_id,meta_id,filename,null);
});

milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$4 = (function (dataset_id,meta_id,filename,data_id){
var suffix = (cljs.core.truth_(data_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataset_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".xls?meta="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(meta_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&data_id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_id)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataset_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".xls?meta="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(meta_id)].join(''));
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["forms",suffix], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,cljs.core.cst$kw$byte_DASH_array], null),cljs.core.cst$kw$as_DASH_map_QMARK_,true,cljs.core.cst$kw$filename,filename], 0));
});

milia.api.dataset.download_xls_report.cljs$lang$maxFixedArity = 4;

/**
 * Returns a submission's edit history
 */
milia.api.dataset.edit_history = (function milia$api$dataset$edit_history(dataset_id,instance_id){
return milia.api.http.parse_http(cljs.core.cst$kw$get,milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["data",dataset_id,instance_id,"history"], 0)));
});
milia.api.dataset.files = (function milia$api$dataset$files(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17784 = arguments.length;
var i__11124__auto___17785 = (0);
while(true){
if((i__11124__auto___17785 < len__11123__auto___17784)){
args__11130__auto__.push((arguments[i__11124__auto___17785]));

var G__17786 = (i__11124__auto___17785 + (1));
i__11124__auto___17785 = G__17786;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia.api.dataset.files.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia.api.dataset.files.cljs$core$IFn$_invoke$arity$variadic = (function (instance_id,project_id,p__17781){
var map__17782 = p__17781;
var map__17782__$1 = ((((!((map__17782 == null)))?((((map__17782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17782):map__17782);
var no_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17782__$1,cljs.core.cst$kw$no_DASH_cache_QMARK_);
var dataset_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17782__$1,cljs.core.cst$kw$dataset_DASH_id);
var extra_params = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$project,project_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xform,dataset_id], null));
return milia.utils.metadata.metadata_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$instance,instance_id,no_cache_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$extra_DASH_params,extra_params], 0));
});

milia.api.dataset.files.cljs$lang$maxFixedArity = (2);

milia.api.dataset.files.cljs$lang$applyTo = (function (seq17778){
var G__17779 = cljs.core.first(seq17778);
var seq17778__$1 = cljs.core.next(seq17778);
var G__17780 = cljs.core.first(seq17778__$1);
var seq17778__$2 = cljs.core.next(seq17778__$1);
return milia.api.dataset.files.cljs$core$IFn$_invoke$arity$variadic(G__17779,G__17780,seq17778__$2);
});

/**
 * Integer Integer String String -> Channel HttpResponse
 */
milia.api.dataset.update_xform_meta_permissions = (function milia$api$dataset$update_xform_meta_permissions(dataset_id,metadata_id,editor_meta_role,dataentry_meta_role){
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$put,milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["metadata",metadata_id], 0)),cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_type,"xform_meta_perms",cljs.core.cst$kw$xform,dataset_id,cljs.core.cst$kw$data_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(editor_meta_role),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataentry_meta_role)].join('')], null)], null)], 0));
});
/**
 * Integer String String -> Channel HttpResponse
 */
milia.api.dataset.create_xform_meta_permissions = (function milia$api$dataset$create_xform_meta_permissions(dataset_id,editor_meta_role,dataentry_meta_role){
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["metadata"], 0)),cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_type,"xform_meta_perms",cljs.core.cst$kw$xform,dataset_id,cljs.core.cst$kw$data_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(editor_meta_role),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataentry_meta_role)].join('')], null)], null)], 0));
});
