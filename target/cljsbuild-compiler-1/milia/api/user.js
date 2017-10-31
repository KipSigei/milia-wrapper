// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('milia.api.user');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chimera.js_interop');
goog.require('clojure.string');
goog.require('chimera.seq');
goog.require('milia.api.http');
goog.require('milia.utils.remote');
milia.api.user.patch = (function milia$api$user$patch(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17698 = arguments.length;
var i__11124__auto___17699 = (0);
while(true){
if((i__11124__auto___17699 < len__11123__auto___17698)){
args__11130__auto__.push((arguments[i__11124__auto___17699]));

var G__17700 = (i__11124__auto___17699 + (1));
i__11124__auto___17699 = G__17700;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((2) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((2)),(0),null)):null);
return milia.api.user.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11131__auto__);
});

milia.api.user.patch.cljs$core$IFn$_invoke$arity$variadic = (function (username,params,p__17695){
var map__17696 = p__17695;
var map__17696__$1 = ((((!((map__17696 == null)))?((((map__17696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17696):map__17696);
var suppress_4xx_exceptions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17696__$1,cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_);
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["profiles",username], 0));
var options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$json_DASH_params,params], null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$patch,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,options,cljs.core.cst$kw$as_DASH_map_QMARK_,true,cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,suppress_4xx_exceptions_QMARK_], 0));
});

milia.api.user.patch.cljs$lang$maxFixedArity = (2);

milia.api.user.patch.cljs$lang$applyTo = (function (seq17692){
var G__17693 = cljs.core.first(seq17692);
var seq17692__$1 = cljs.core.next(seq17692);
var G__17694 = cljs.core.first(seq17692__$1);
var seq17692__$2 = cljs.core.next(seq17692__$1);
return milia.api.user.patch.cljs$core$IFn$_invoke$arity$variadic(G__17693,G__17694,seq17692__$2);
});

/**
 * Return the profile for the account username or the passed username.
 */
milia.api.user.profile = (function milia$api$user$profile(username){
if(cljs.core.truth_(username)){
} else {
throw (new Error("Assert failed: username"));
}

var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["profiles",username], 0));
var response = milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true], 0));
var temp__4655__auto__ = cljs.core.cst$kw$detail.cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return null;
} else {
return response;
}
});
/**
 * Return the profile for the account username or the passed username.
 */
milia.api.user.get_profiles_for_list_of_users = (function milia$api$user$get_profiles_for_list_of_users(users){
if(cljs.core.seq(users)){
} else {
throw (new Error("Assert failed: (seq users)"));
}

var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("profiles"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?users="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",users))].join('')], 0));
var response = milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true], 0));
var temp__4655__auto__ = cljs.core.cst$kw$detail.cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return error;
} else {
return response;
}
});
/**
 * Return the user profile with authentication details.
 */
milia.api.user.user = (function milia$api$user$user(var_args){
var args__11130__auto__ = [];
var len__11123__auto___17706 = arguments.length;
var i__11124__auto___17707 = (0);
while(true){
if((i__11124__auto___17707 < len__11123__auto___17706)){
args__11130__auto__.push((arguments[i__11124__auto___17707]));

var G__17708 = (i__11124__auto___17707 + (1));
i__11124__auto___17707 = G__17708;
continue;
} else {
}
break;
}

var argseq__11131__auto__ = ((((0) < args__11130__auto__.length))?(new cljs.core.IndexedSeq(args__11130__auto__.slice((0)),(0),null)):null);
return milia.api.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__11131__auto__);
});

milia.api.user.user.cljs$core$IFn$_invoke$arity$variadic = (function (p__17702){
var vec__17703 = p__17702;
var suppress_4xx_exceptions_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(0),null);
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["user"], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,suppress_4xx_exceptions_QMARK_], 0));
});

milia.api.user.user.cljs$lang$maxFixedArity = (0);

milia.api.user.user.cljs$lang$applyTo = (function (seq17701){
return milia.api.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17701));
});

/**
 * Create a new user.
 */
milia.api.user.create = (function milia$api$user$create(params){
var profile = cljs.core.select_keys(params,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$first_name,cljs.core.cst$kw$last_name,cljs.core.cst$kw$username,cljs.core.cst$kw$email,cljs.core.cst$kw$password], null));
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["profiles"], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,profile], null)], 0));
});
/**
 * return all users
 */
milia.api.user.all = (function milia$api$user$all(){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["users"], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});
/**
 * update user profile
 */
milia.api.user.update = (function milia$api$user$update(username,params){
if(cljs.core.truth_(chimera.seq.has_keys_QMARK_(params,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$city,cljs.core.cst$kw$country,cljs.core.cst$kw$email,cljs.core.cst$kw$gravatar,cljs.core.cst$kw$last_name,cljs.core.cst$kw$first_name,cljs.core.cst$kw$is_org,cljs.core.cst$kw$owner,cljs.core.cst$kw$require_auth,cljs.core.cst$kw$twitter,cljs.core.cst$kw$url,cljs.core.cst$kw$user,cljs.core.cst$kw$username,cljs.core.cst$kw$website,cljs.core.cst$kw$organization], null)))){
} else {
throw (new Error("Assert failed: (has-keys? params [:city :country :email :gravatar :last_name :first_name :is_org :owner :require_auth :twitter :url :user :username :website :organization])"));
}

var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["profiles",username], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$put,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form_DASH_params,params,cljs.core.cst$kw$content_DASH_type,cljs.core.cst$kw$json], null),cljs.core.cst$kw$as_DASH_map_QMARK_,true], 0));
});
/**
 * Change user password
 */
milia.api.user.change_password = (function milia$api$user$change_password(username,current_password,new_password){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["profiles",username,"change_password"], 0));
var options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_password,current_password,cljs.core.cst$kw$new_password,new_password], null)], null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,options,cljs.core.cst$kw$raw_DASH_response_QMARK_,true,cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true,cljs.core.cst$kw$as_DASH_map_QMARK_,true], 0));
});
milia.api.user.retrieve_metadata = (function milia$api$user$retrieve_metadata(username){
return cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(milia.api.user.profile(username));
});
milia.api.user.update_user_metadata = (function milia$api$user$update_user_metadata(username,metadata){
var current_metadata = milia.api.user.retrieve_metadata(username);
var updated_metadata = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([current_metadata,metadata], 0));
return milia.api.user.patch(username,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$metadata,updated_metadata], null));
});
/**
 * Return the user for this username
 */
milia.api.user.get = (function milia$api$user$get(username){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["users",username], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$get,url);
});
/**
 * Return the users that match this email address
 */
milia.api.user.get_by_email = (function milia$api$user$get_by_email(email){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["users"], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,email], null)], null),cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true], 0));
});
/**
 * Trigger a password reset email to the given email and given return URL.
 * Also takes an optional subject for the email message.
 */
milia.api.user.trigger_password_reset_email = (function milia$api$user$trigger_password_reset_email(var_args){
var args17709 = [];
var len__11123__auto___17712 = arguments.length;
var i__11124__auto___17713 = (0);
while(true){
if((i__11124__auto___17713 < len__11123__auto___17712)){
args17709.push((arguments[i__11124__auto___17713]));

var G__17714 = (i__11124__auto___17713 + (1));
i__11124__auto___17713 = G__17714;
continue;
} else {
}
break;
}

var G__17711 = args17709.length;
switch (G__17711) {
case 2:
return milia.api.user.trigger_password_reset_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return milia.api.user.trigger_password_reset_email.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17709.length)].join('')));

}
});

milia.api.user.trigger_password_reset_email.cljs$core$IFn$_invoke$arity$2 = (function (email,reset_url){
return milia.api.user.trigger_password_reset_email.cljs$core$IFn$_invoke$arity$3(email,reset_url,null);
});

milia.api.user.trigger_password_reset_email.cljs$core$IFn$_invoke$arity$3 = (function (email,reset_url,reset_subject){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["user","reset"], 0));
var form_params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$email,email,cljs.core.cst$kw$reset_url,reset_url], null),(cljs.core.truth_(reset_subject)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$email_subject,reset_subject], null):null)], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,form_params], null)], 0));
});

milia.api.user.trigger_password_reset_email.cljs$lang$maxFixedArity = 3;

milia.api.user.reset_password = (function milia$api$user$reset_password(new_password,token,uid){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["user","reset"], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$post,url,cljs.core.array_seq([cljs.core.cst$kw$http_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$new_password,new_password,cljs.core.cst$kw$token,token,cljs.core.cst$kw$uid,uid], null)], null)], 0));
});
/**
 * Change the user's email address. This requires a password so that the API
 * can successful update the authentication digest and email can be used to
 * login.
 */
milia.api.user.change_email_address = (function milia$api$user$change_email_address(username,email_address,password){
var params = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$email,email_address,cljs.core.cst$kw$password,password], null);
return milia.api.user.patch.cljs$core$IFn$_invoke$arity$variadic(username,params,cljs.core.array_seq([cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true], 0));
});
/**
 * Expire the user's temporary token.
 */
milia.api.user.expire_temp_token = (function milia$api$user$expire_temp_token(){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["user","expire"], 0));
return milia.api.http.parse_http(cljs.core.cst$kw$delete,url);
});
/**
 * Send a code to authorize a user to use google sheets
 */
milia.api.user.google_sheet_authorization = (function milia$api$user$google_sheet_authorization(code,redirect_uri){
var url = milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["google",chimera.js_interop.format.cljs$core$IFn$_invoke$arity$variadic("google_auth?code=%s&redirect_uri=%s",cljs.core.array_seq([code,redirect_uri], 0))], 0));
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$get,url,cljs.core.array_seq([cljs.core.cst$kw$as_DASH_map_QMARK_,true,cljs.core.cst$kw$suppress_DASH_4xx_DASH_exceptions_QMARK_,true], 0));
});
