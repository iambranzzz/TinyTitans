(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qm={exports:{}},Vl={},Jm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),_v=Symbol.for("react.lazy"),Lh=Symbol.iterator;function yv(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tg=Object.assign,ng={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=Vs.prototype;function lf(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}var cf=lf.prototype=new ig;cf.constructor=lf;tg(cf,Vs.prototype);cf.isPureReactComponent=!0;var Dh=Array.isArray,rg=Object.prototype.hasOwnProperty,uf={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)rg.call(e,i)&&!sg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Xa,type:t,key:s,ref:a,props:r,_owner:uf.current}}function Sv(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ih=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function Xo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xa:case uv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+uc(a,0):i,Dh(r)?(n="",t!=null&&(n=t.replace(Ih,"$&/")+"/"),Xo(r,e,n,"",function(c){return c})):r!=null&&(df(r)&&(r=Sv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ih,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Dh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+uc(s,o);a+=Xo(s,e,n,l,r)}else if(l=yv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,o++),a+=Xo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(t,e,n){if(t==null)return t;var i=[],r=0;return Xo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},qo={transition:null},wv={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:qo,ReactCurrentOwner:uf};function og(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Vs;Ge.Fragment=dv;Ge.Profiler=hv;Ge.PureComponent=lf;Ge.StrictMode=fv;Ge.Suspense=xv;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;Ge.act=og;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)rg.call(e,l)&&!sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};Ge.createElement=ag;Ge.createFactory=function(t){var e=ag.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:gv,render:t}};Ge.isValidElement=df;Ge.lazy=function(t){return{$$typeof:_v,_payload:{_status:-1,_result:t},_init:Ev}};Ge.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=qo.transition;qo.transition={};try{t()}finally{qo.transition=e}};Ge.unstable_act=og;Ge.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ge.useContext=function(t){return rn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ge.useId=function(){return rn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ge.useRef=function(t){return rn.current.useRef(t)};Ge.useState=function(t){return rn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return rn.current.useTransition()};Ge.version="18.3.1";Jm.exports=Ge;var ve=Jm.exports;const bv=cv(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=ve,Av=Symbol.for("react.element"),Cv=Symbol.for("react.fragment"),Rv=Object.prototype.hasOwnProperty,Nv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Rv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:a,props:r,_owner:Nv.current}}Vl.Fragment=Cv;Vl.jsx=lg;Vl.jsxs=lg;Qm.exports=Vl;var h=Qm.exports,_u={},cg={exports:{}},En={},ug={exports:{}},dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,W){var Q=O.length;O.push(W);e:for(;0<Q;){var ae=Q-1>>>1,fe=O[ae];if(0<r(fe,W))O[ae]=W,O[Q]=fe,Q=ae;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var W=O[0],Q=O.pop();if(Q!==W){O[0]=Q;e:for(var ae=0,fe=O.length,Ve=fe>>>1;ae<Ve;){var je=2*(ae+1)-1,Pe=O[je],$=je+1,de=O[$];if(0>r(Pe,Q))$<fe&&0>r(de,Pe)?(O[ae]=de,O[$]=Q,ae=$):(O[ae]=Pe,O[je]=Q,ae=je);else if($<fe&&0>r(de,Q))O[ae]=de,O[$]=Q,ae=$;else break e}}return W}function r(O,W){var Q=O.sortIndex-W.sortIndex;return Q!==0?Q:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],p=1,u=null,d=3,m=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=O)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function E(O){if(y=!1,_(O),!v)if(n(l)!==null)v=!0,j(A);else{var W=n(c);W!==null&&z(E,W.startTime-O)}}function A(O,W){v=!1,y&&(y=!1,f(S),S=-1),m=!0;var Q=d;try{for(_(W),u=n(l);u!==null&&(!(u.expirationTime>W)||O&&!N());){var ae=u.callback;if(typeof ae=="function"){u.callback=null,d=u.priorityLevel;var fe=ae(u.expirationTime<=W);W=t.unstable_now(),typeof fe=="function"?u.callback=fe:u===n(l)&&i(l),_(W)}else i(l);u=n(l)}if(u!==null)var Ve=!0;else{var je=n(c);je!==null&&z(E,je.startTime-W),Ve=!1}return Ve}finally{u=null,d=Q,m=!1}}var b=!1,C=null,S=-1,R=5,P=-1;function N(){return!(t.unstable_now()-P<R)}function k(){if(C!==null){var O=t.unstable_now();P=O;var W=!0;try{W=C(!0,O)}finally{W?q():(b=!1,C=null)}}else b=!1}var q;if(typeof g=="function")q=function(){g(k)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,U=J.port2;J.port1.onmessage=k,q=function(){U.postMessage(null)}}else q=function(){x(k,0)};function j(O){C=O,b||(b=!0,q())}function z(O,W){S=x(function(){O(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,j(A))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var Q=d;d=W;try{return O()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=d;d=O;try{return W()}finally{d=Q}},t.unstable_scheduleCallback=function(O,W,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Q+fe,O={id:p++,callback:W,priorityLevel:O,startTime:Q,expirationTime:fe,sortIndex:-1},Q>ae?(O.sortIndex=Q,e(c,O),n(l)===null&&O===n(c)&&(y?(f(S),S=-1):y=!0,z(E,Q-ae))):(O.sortIndex=fe,e(l,O),v||m||(v=!0,j(A))),O},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(O){var W=d;return function(){var Q=d;d=W;try{return O.apply(this,arguments)}finally{d=Q}}}})(dg);ug.exports=dg;var Lv=ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=ve,Mn=Lv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fg=new Set,wa={};function Hr(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(wa[t]=e,t=0;t<e.length;t++)fg.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uh={},Fh={};function Uv(t){return yu.call(Fh,t)?!0:yu.call(Uh,t)?!1:Iv.test(t)?Fh[t]=!0:(Uh[t]=!0,!1)}function Fv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kv(t,e,n,i){if(e===null||typeof e>"u"||Fv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ff=/[\-:]([a-z])/g;function hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ff,hf);jt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ff,hf);jt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ff,hf);jt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kv(e,n,r,i)&&(n=null),i||r===null?Uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),cs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),kh=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,dc;function la(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function Ov(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case cs:return"Portal";case Su:return"Profiler";case mf:return"StrictMode";case Mu:return"Suspense";case Eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pg:return(t.displayName||"Context")+".Consumer";case hg:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:wu(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return wu(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=zv(t))}function xg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vg(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function Tu(t,e){vg(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Au(t,e.type,n):e.hasOwnProperty("defaultValue")&&Au(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Au(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ca(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function _g(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,Sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){Vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function Mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,Ms=null,Es=null;function Hh(t){if(t=$a(t)){if(typeof Du!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Xl(e),Du(t.stateNode,t.type,e))}}function wg(t){Ms?Es?Es.push(t):Es=[t]:Ms=t}function bg(){if(Ms){var t=Ms,e=Es;if(Es=Ms=null,Hh(t),e)for(t=0;t<e.length;t++)Hh(e[t])}}function Tg(t,e){return t(e)}function Ag(){}var pc=!1;function Cg(t,e,n){if(pc)return t(e,n);pc=!0;try{return Tg(t,e,n)}finally{pc=!1,(Ms!==null||Es!==null)&&(Ag(),bg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Iu=!1;if(Ci)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Iu=!1}function Gv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var ga=!1,fl=null,hl=!1,Uu=null,jv={onError:function(t){ga=!0,fl=t}};function Wv(t,e,n,i,r,s,a,o,l){ga=!1,fl=null,Gv.apply(jv,arguments)}function Xv(t,e,n,i,r,s,a,o,l){if(Wv.apply(this,arguments),ga){if(ga){var c=fl;ga=!1,fl=null}else throw Error(ne(198));hl||(hl=!0,Uu=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gh(t){if(Gr(t)!==t)throw Error(ne(188))}function qv(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gh(r),t;if(s===i)return Gh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Ng(t){return t=qv(t),t!==null?Pg(t):null}function Pg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pg(t);if(e!==null)return e;t=t.sibling}return null}var Lg=Mn.unstable_scheduleCallback,jh=Mn.unstable_cancelCallback,Yv=Mn.unstable_shouldYield,$v=Mn.unstable_requestPaint,At=Mn.unstable_now,Kv=Mn.unstable_getCurrentPriorityLevel,_f=Mn.unstable_ImmediatePriority,Dg=Mn.unstable_UserBlockingPriority,pl=Mn.unstable_NormalPriority,Zv=Mn.unstable_LowPriority,Ig=Mn.unstable_IdlePriority,Hl=null,si=null;function Qv(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:t_,Jv=Math.log,e_=Math.LN2;function t_(t){return t>>>=0,t===0?32:31-(Jv(t)/e_|0)|0}var lo=64,co=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ua(o):(s&=a,s!==0&&(i=ua(s)))}else a=n&~r,a!==0?i=ua(a):s!==0&&(i=ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function n_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Wn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=n_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ug(){var t=lo;return lo<<=1,!(lo&4194240)&&(lo=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function r_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,Sf,Og,Bg,zg,ku=!1,uo=[],er=null,tr=null,nr=null,Aa=new Map,Ca=new Map,Yi=[],s_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function a_(t,e,n,i,r){switch(e){case"focusin":return er=Ys(er,t,e,n,i,r),!0;case"dragenter":return tr=Ys(tr,t,e,n,i,r),!0;case"mouseover":return nr=Ys(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,Ys(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,Ys(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Vg(t){var e=Cr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rg(n),e!==null){t.blockedOn=e,zg(t.priority,function(){Og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ou(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lu=i,n.target.dispatchEvent(i),Lu=null}else return e=$a(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){Yo(t)&&n.delete(e)}function o_(){ku=!1,er!==null&&Yo(er)&&(er=null),tr!==null&&Yo(tr)&&(tr=null),nr!==null&&Yo(nr)&&(nr=null),Aa.forEach(Xh),Ca.forEach(Xh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,ku||(ku=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,o_)))}function Ra(t){function e(r){return $s(r,t)}if(0<uo.length){$s(uo[0],t);for(var n=1;n<uo.length;n++){var i=uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&$s(er,t),tr!==null&&$s(tr,t),nr!==null&&$s(nr,t),Aa.forEach(e),Ca.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&Yi.shift()}var ws=Ui.ReactCurrentBatchConfig,gl=!0;function l_(t,e,n,i){var r=nt,s=ws.transition;ws.transition=null;try{nt=1,Mf(t,e,n,i)}finally{nt=r,ws.transition=s}}function c_(t,e,n,i){var r=nt,s=ws.transition;ws.transition=null;try{nt=4,Mf(t,e,n,i)}finally{nt=r,ws.transition=s}}function Mf(t,e,n,i){if(gl){var r=Ou(t,e,n,i);if(r===null)bc(t,e,i,xl,n),Wh(t,i);else if(a_(r,t,e,n,i))i.stopPropagation();else if(Wh(t,i),e&4&&-1<s_.indexOf(t)){for(;r!==null;){var s=$a(r);if(s!==null&&kg(s),s=Ou(t,e,n,i),s===null&&bc(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var xl=null;function Ou(t,e,n,i){if(xl=null,t=vf(i),t=Cr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case _f:return 1;case Dg:return 4;case pl:case Zv:return 16;case Ig:return 536870912;default:return 16}default:return 16}}var Zi=null,Ef=null,$o=null;function Gg(){if($o)return $o;var t,e=Ef,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return $o=r.slice(t,1<i?1-i:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function qh(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fo:qh,this.isPropagationStopped=qh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=wn(Hs),Ya=_t({},Hs,{view:0,detail:0}),u_=wn(Ya),gc,xc,Ks,Gl=_t({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(gc=t.screenX-Ks.screenX,xc=t.screenY-Ks.screenY):xc=gc=0,Ks=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Yh=wn(Gl),d_=_t({},Gl,{dataTransfer:0}),f_=wn(d_),h_=_t({},Ya,{relatedTarget:0}),vc=wn(h_),p_=_t({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=wn(p_),g_=_t({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x_=wn(g_),v_=_t({},Hs,{data:0}),$h=wn(v_),__={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S_[t])?!!e[t]:!1}function bf(){return M_}var E_=_t({},Ya,{key:function(t){if(t.key){var e=__[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w_=wn(E_),b_=_t({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=wn(b_),T_=_t({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),A_=wn(T_),C_=_t({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),R_=wn(C_),N_=_t({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P_=wn(N_),L_=[9,13,27,32],Tf=Ci&&"CompositionEvent"in window,xa=null;Ci&&"documentMode"in document&&(xa=document.documentMode);var D_=Ci&&"TextEvent"in window&&!xa,jg=Ci&&(!Tf||xa&&8<xa&&11>=xa),Zh=" ",Qh=!1;function Wg(t,e){switch(t){case"keyup":return L_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function I_(t,e){switch(t){case"compositionend":return Xg(e);case"keypress":return e.which!==32?null:(Qh=!0,Zh);case"textInput":return t=e.data,t===Zh&&Qh?null:t;default:return null}}function U_(t,e){if(ds)return t==="compositionend"||!Tf&&Wg(t,e)?(t=Gg(),$o=Ef=Zi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jg&&e.locale!=="ko"?null:e.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F_[t.type]:e==="textarea"}function qg(t,e,n,i){wg(i),e=vl(e,"onChange"),0<e.length&&(n=new wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var va=null,Na=null;function k_(t){r0(t,0)}function jl(t){var e=ps(t);if(xg(e))return t}function O_(t,e){if(t==="change")return e}var Yg=!1;if(Ci){var _c;if(Ci){var yc="oninput"in document;if(!yc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),yc=typeof ep.oninput=="function"}_c=yc}else _c=!1;Yg=_c&&(!document.documentMode||9<document.documentMode)}function tp(){va&&(va.detachEvent("onpropertychange",$g),Na=va=null)}function $g(t){if(t.propertyName==="value"&&jl(Na)){var e=[];qg(e,Na,t,vf(t)),Cg(k_,e)}}function B_(t,e,n){t==="focusin"?(tp(),va=e,Na=n,va.attachEvent("onpropertychange",$g)):t==="focusout"&&tp()}function z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Na)}function V_(t,e){if(t==="click")return jl(e)}function H_(t,e){if(t==="input"||t==="change")return jl(e)}function G_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:G_;function Pa(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,e){var n=np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zg(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function j_(t){var e=Zg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(i!==null&&Af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ip(n,s);var a=ip(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W_=Ci&&"documentMode"in document&&11>=document.documentMode,fs=null,Bu=null,_a=null,zu=!1;function rp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||fs==null||fs!==dl(i)||(i=fs,"selectionStart"in i&&Af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Pa(_a,i)||(_a=i,i=vl(Bu,"onSelect"),0<i.length&&(e=new wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Sc={},Qg={};Ci&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Wl(t){if(Sc[t])return Sc[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qg)return Sc[t]=e[n];return t}var Jg=Wl("animationend"),e0=Wl("animationiteration"),t0=Wl("animationstart"),n0=Wl("transitionend"),i0=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){i0.set(t,e),Hr(e,[t])}for(var Mc=0;Mc<sp.length;Mc++){var Ec=sp[Mc],X_=Ec.toLowerCase(),q_=Ec[0].toUpperCase()+Ec.slice(1);hr(X_,"on"+q_)}hr(Jg,"onAnimationEnd");hr(e0,"onAnimationIteration");hr(t0,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(n0,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Xv(i,e,void 0,t),t.currentTarget=null}function r0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;ap(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;ap(r,o,c),s=l}}}if(hl)throw t=Uu,hl=!1,Uu=null,t}function ft(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(s0(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),s0(n,t,i,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[po]){t[po]=!0,fg.forEach(function(n){n!=="selectionchange"&&(Y_.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,wc("selectionchange",!1,e))}}function s0(t,e,n,i){switch(Hg(e)){case 1:var r=l_;break;case 4:r=c_;break;default:r=Mf}n=r.bind(null,e,n,t),r=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Cr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Cg(function(){var c=s,p=vf(n),u=[];e:{var d=i0.get(t);if(d!==void 0){var m=wf,v=t;switch(t){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":m=w_;break;case"focusin":v="focus",m=vc;break;case"focusout":v="blur",m=vc;break;case"beforeblur":case"afterblur":m=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=f_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=A_;break;case Jg:case e0:case t0:m=m_;break;case n0:m=R_;break;case"scroll":m=u_;break;case"wheel":m=P_;break;case"copy":case"cut":case"paste":m=x_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kh}var y=(e&4)!==0,x=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,_;g!==null;){_=g;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,f!==null&&(E=Ta(g,f),E!=null&&y.push(Da(g,E,_)))),x)break;g=g.return}0<y.length&&(d=new m(d,v,null,n,p),u.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Lu&&(v=n.relatedTarget||n.fromElement)&&(Cr(v)||v[Ri]))break e;if((m||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Cr(v):null,v!==null&&(x=Gr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(y=Yh,E="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Kh,E="onPointerLeave",f="onPointerEnter",g="pointer"),x=m==null?d:ps(m),_=v==null?d:ps(v),d=new y(E,g+"leave",m,n,p),d.target=x,d.relatedTarget=_,E=null,Cr(p)===c&&(y=new y(f,g+"enter",v,n,p),y.target=_,y.relatedTarget=x,E=y),x=E,m&&v)t:{for(y=m,f=v,g=0,_=y;_;_=qr(_))g++;for(_=0,E=f;E;E=qr(E))_++;for(;0<g-_;)y=qr(y),g--;for(;0<_-g;)f=qr(f),_--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=qr(y),f=qr(f)}y=null}else y=null;m!==null&&op(u,d,m,y,!1),v!==null&&x!==null&&op(u,x,v,y,!0)}}e:{if(d=c?ps(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=O_;else if(Jh(d))if(Yg)A=H_;else{A=z_;var b=B_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=V_);if(A&&(A=A(t,c))){qg(u,A,n,p);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Au(d,"number",d.value)}switch(b=c?ps(c):window,t){case"focusin":(Jh(b)||b.contentEditable==="true")&&(fs=b,Bu=c,_a=null);break;case"focusout":_a=Bu=fs=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,rp(u,n,p);break;case"selectionchange":if(W_)break;case"keydown":case"keyup":rp(u,n,p)}var C;if(Tf)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ds?Wg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(jg&&n.locale!=="ko"&&(ds||S!=="onCompositionStart"?S==="onCompositionEnd"&&ds&&(C=Gg()):(Zi=p,Ef="value"in Zi?Zi.value:Zi.textContent,ds=!0)),b=vl(c,S),0<b.length&&(S=new $h(S,t,null,n,p),u.push({event:S,listeners:b}),C?S.data=C:(C=Xg(n),C!==null&&(S.data=C)))),(C=D_?I_(t,n):U_(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(p=new $h("onBeforeInput","beforeinput",null,n,p),u.push({event:p,listeners:c}),p.data=C))}r0(u,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(Da(t,s,r)),s=Ta(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(Da(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(Da(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var $_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function lp(t){return(typeof t=="string"?t:""+t).replace($_,`
`).replace(K_,"")}function mo(t,e,n){if(e=lp(e),lp(t)!==e&&n)throw Error(ne(425))}function _l(){}var Vu=null,Hu=null;function Gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,Q_=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(t){return cp.resolve(null).then(t).catch(J_)}:ju;function J_(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Gs,Ia="__reactProps$"+Gs,Ri="__reactContainer$"+Gs,Wu="__reactEvents$"+Gs,ey="__reactListeners$"+Gs,ty="__reactHandles$"+Gs;function Cr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=up(t);t!==null;){if(n=t[ni])return n;t=up(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[ni]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Xl(t){return t[Ia]||null}var Xu=[],ms=-1;function pr(t){return{current:t}}function ht(t){0>ms||(t.current=Xu[ms],Xu[ms]=null,ms--)}function ut(t,e){ms++,Xu[ms]=t.current,t.current=e}var ur={},Jt=pr(ur),un=pr(!1),Ur=ur;function Ns(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function yl(){ht(un),ht(Jt)}function dp(t,e,n){if(Jt.current!==ur)throw Error(ne(168));ut(Jt,e),ut(un,n)}function a0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Bv(t)||"Unknown",r));return _t({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Ur=Jt.current,ut(Jt,t),ut(un,un.current),!0}function fp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=a0(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,ht(un),ht(Jt),ut(Jt,t)):ht(un),ut(un,n)}var yi=null,ql=!1,Ac=!1;function o0(t){yi===null?yi=[t]:yi.push(t)}function ny(t){ql=!0,o0(t)}function mr(){if(!Ac&&yi!==null){Ac=!0;var t=0,e=nt;try{var n=yi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,ql=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),Lg(_f,mr),r}finally{nt=e,Ac=!1}}return null}var gs=[],xs=0,Ml=null,El=0,An=[],Cn=0,Fr=null,Mi=1,Ei="";function Er(t,e){gs[xs++]=El,gs[xs++]=Ml,Ml=t,El=e}function l0(t,e,n){An[Cn++]=Mi,An[Cn++]=Ei,An[Cn++]=Fr,Fr=t;var i=Mi;t=Ei;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-Wn(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function Cf(t){t.return!==null&&(Er(t,1),l0(t,1,0))}function Rf(t){for(;t===Ml;)Ml=gs[--xs],gs[xs]=null,El=gs[--xs],gs[xs]=null;for(;t===Fr;)Fr=An[--Cn],An[Cn]=null,Ei=An[--Cn],An[Cn]=null,Mi=An[--Cn],An[Cn]=null}var Sn=null,yn=null,pt=!1,Hn=null;function c0(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(pt){var e=yn;if(e){var n=e;if(!hp(t,e)){if(qu(t))throw Error(ne(418));e=ir(n.nextSibling);var i=Sn;e&&hp(t,e)?c0(i,n):(t.flags=t.flags&-4097|2,pt=!1,Sn=t)}}else{if(qu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,pt=!1,Sn=t}}}function pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function go(t){if(t!==Sn)return!1;if(!pt)return pp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gu(t.type,t.memoizedProps)),e&&(e=yn)){if(qu(t))throw u0(),Error(ne(418));for(;e;)c0(t,e),e=ir(e.nextSibling)}if(pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?ir(t.stateNode.nextSibling):null;return!0}function u0(){for(var t=yn;t;)t=ir(t.nextSibling)}function Ps(){yn=Sn=null,pt=!1}function Nf(t){Hn===null?Hn=[t]:Hn.push(t)}var iy=Ui.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mp(t){var e=t._init;return e(t._payload)}function d0(t){function e(f,g){if(t){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=or(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,g,_,E){return g===null||g.tag!==6?(g=Ic(_,f.mode,E),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,E){var A=_.type;return A===us?p(f,g,_.props.children,E,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&mp(A)===g.type)?(E=r(g,_.props),E.ref=Zs(f,g,_),E.return=f,E):(E=il(_.type,_.key,_.props,null,f.mode,E),E.ref=Zs(f,g,_),E.return=f,E)}function c(f,g,_,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Uc(_,f.mode,E),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function p(f,g,_,E,A){return g===null||g.tag!==7?(g=Ir(_,f.mode,E,A),g.return=f,g):(g=r(g,_),g.return=f,g)}function u(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ic(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case so:return _=il(g.type,g.key,g.props,null,f.mode,_),_.ref=Zs(f,null,g),_.return=f,_;case cs:return g=Uc(g,f.mode,_),g.return=f,g;case Xi:var E=g._init;return u(f,E(g._payload),_)}if(ca(g)||Xs(g))return g=Ir(g,f.mode,_,null),g.return=f,g;xo(f,g)}return null}function d(f,g,_,E){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:o(f,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case so:return _.key===A?l(f,g,_,E):null;case cs:return _.key===A?c(f,g,_,E):null;case Xi:return A=_._init,d(f,g,A(_._payload),E)}if(ca(_)||Xs(_))return A!==null?null:p(f,g,_,E,null);xo(f,_)}return null}function m(f,g,_,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(_)||null,o(g,f,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case so:return f=f.get(E.key===null?_:E.key)||null,l(g,f,E,A);case cs:return f=f.get(E.key===null?_:E.key)||null,c(g,f,E,A);case Xi:var b=E._init;return m(f,g,_,b(E._payload),A)}if(ca(E)||Xs(E))return f=f.get(_)||null,p(g,f,E,A,null);xo(g,E)}return null}function v(f,g,_,E){for(var A=null,b=null,C=g,S=g=0,R=null;C!==null&&S<_.length;S++){C.index>S?(R=C,C=null):R=C.sibling;var P=d(f,C,_[S],E);if(P===null){C===null&&(C=R);break}t&&C&&P.alternate===null&&e(f,C),g=s(P,g,S),b===null?A=P:b.sibling=P,b=P,C=R}if(S===_.length)return n(f,C),pt&&Er(f,S),A;if(C===null){for(;S<_.length;S++)C=u(f,_[S],E),C!==null&&(g=s(C,g,S),b===null?A=C:b.sibling=C,b=C);return pt&&Er(f,S),A}for(C=i(f,C);S<_.length;S++)R=m(C,f,S,_[S],E),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?S:R.key),g=s(R,g,S),b===null?A=R:b.sibling=R,b=R);return t&&C.forEach(function(N){return e(f,N)}),pt&&Er(f,S),A}function y(f,g,_,E){var A=Xs(_);if(typeof A!="function")throw Error(ne(150));if(_=A.call(_),_==null)throw Error(ne(151));for(var b=A=null,C=g,S=g=0,R=null,P=_.next();C!==null&&!P.done;S++,P=_.next()){C.index>S?(R=C,C=null):R=C.sibling;var N=d(f,C,P.value,E);if(N===null){C===null&&(C=R);break}t&&C&&N.alternate===null&&e(f,C),g=s(N,g,S),b===null?A=N:b.sibling=N,b=N,C=R}if(P.done)return n(f,C),pt&&Er(f,S),A;if(C===null){for(;!P.done;S++,P=_.next())P=u(f,P.value,E),P!==null&&(g=s(P,g,S),b===null?A=P:b.sibling=P,b=P);return pt&&Er(f,S),A}for(C=i(f,C);!P.done;S++,P=_.next())P=m(C,f,S,P.value,E),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?S:P.key),g=s(P,g,S),b===null?A=P:b.sibling=P,b=P);return t&&C.forEach(function(k){return e(f,k)}),pt&&Er(f,S),A}function x(f,g,_,E){if(typeof _=="object"&&_!==null&&_.type===us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case so:e:{for(var A=_.key,b=g;b!==null;){if(b.key===A){if(A=_.type,A===us){if(b.tag===7){n(f,b.sibling),g=r(b,_.props.children),g.return=f,f=g;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&mp(A)===b.type){n(f,b.sibling),g=r(b,_.props),g.ref=Zs(f,b,_),g.return=f,f=g;break e}n(f,b);break}else e(f,b);b=b.sibling}_.type===us?(g=Ir(_.props.children,f.mode,E,_.key),g.return=f,f=g):(E=il(_.type,_.key,_.props,null,f.mode,E),E.ref=Zs(f,g,_),E.return=f,f=E)}return a(f);case cs:e:{for(b=_.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Uc(_,f.mode,E),g.return=f,f=g}return a(f);case Xi:return b=_._init,x(f,g,b(_._payload),E)}if(ca(_))return v(f,g,_,E);if(Xs(_))return y(f,g,_,E);xo(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,_),g.return=f,f=g):(n(f,g),g=Ic(_,f.mode,E),g.return=f,f=g),a(f)):n(f,g)}return x}var Ls=d0(!0),f0=d0(!1),wl=pr(null),bl=null,vs=null,Pf=null;function Lf(){Pf=vs=bl=null}function Df(t){var e=wl.current;ht(wl),t._currentValue=e}function $u(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){bl=t,Pf=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Pf!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(bl===null)throw Error(ne(308));vs=t,bl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Rr=null;function If(t){Rr===null?Rr=[t]:Rr.push(t)}function h0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,If(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,If(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}function gp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;a=0,p=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){p!==null&&(p=p.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(d=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){u=v.call(m,u,d);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(m,u,d):v,d==null)break e;u=_t({},u,d);break e;case 2:qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=m,l=u):p=p.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(p===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Or|=a,t.lanes=a,t.memoizedState=u}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Ka={},ai=pr(Ka),Ua=pr(Ka),Fa=pr(Ka);function Nr(t){if(t===Ka)throw Error(ne(174));return t}function Ff(t,e){switch(ut(Fa,e),ut(Ua,t),ut(ai,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ru(e,t)}ht(ai),ut(ai,e)}function Ds(){ht(ai),ht(Ua),ht(Fa)}function m0(t){Nr(Fa.current);var e=Nr(ai.current),n=Ru(e,t.type);e!==n&&(ut(Ua,t),ut(ai,n))}function kf(t){Ua.current===t&&(ht(ai),ht(Ua))}var xt=pr(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Of(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Qo=Ui.ReactCurrentDispatcher,Rc=Ui.ReactCurrentBatchConfig,kr=0,vt=null,Dt=null,Ot=null,Cl=!1,ya=!1,ka=0,ry=0;function Xt(){throw Error(ne(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function zf(t,e,n,i,r,s){if(kr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?ly:cy,t=n(i,r),ya){s=0;do{if(ya=!1,ka=0,25<=s)throw Error(ne(301));s+=1,Ot=Dt=null,e.updateQueue=null,Qo.current=uy,t=n(i,r)}while(ya)}if(Qo.current=Rl,e=Dt!==null&&Dt.next!==null,kr=0,Ot=Dt=vt=null,Cl=!1,e)throw Error(ne(300));return t}function Vf(){var t=ka!==0;return ka=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?vt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Un(){if(Dt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ot===null?vt.memoizedState:Ot.next;if(e!==null)Ot=e,Dt=t;else{if(t===null)throw Error(ne(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ot===null?vt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Oa(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var p=c.lane;if((kr&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=i):l=l.next=u,vt.lanes|=p,Or|=p}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,qn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Or|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);qn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function g0(){}function x0(t,e){var n=vt,i=Un(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Hf(y0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Ba(9,_0.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ne(349));kr&30||v0(n,e,r)}return r}function v0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _0(t,e,n,i){e.value=n,e.getSnapshot=i,S0(e)&&M0(t)}function y0(t,e,n){return n(function(){S0(e)&&M0(t)})}function S0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function M0(t){var e=Ni(t,1);e!==null&&Xn(e,t,1,-1)}function vp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=oy.bind(null,vt,t),[e.memoizedState,t]}function Ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function E0(){return Un().memoizedState}function Jo(t,e,n,i){var r=ei();vt.flags|=t,r.memoizedState=Ba(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Bf(i,a.deps)){r.memoizedState=Ba(e,n,s,i);return}}vt.flags|=t,r.memoizedState=Ba(1|e,n,s,i)}function _p(t,e){return Jo(8390656,8,t,e)}function Hf(t,e){return Yl(2048,8,t,e)}function w0(t,e){return Yl(4,2,t,e)}function b0(t,e){return Yl(4,4,t,e)}function T0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A0(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,T0.bind(null,e,t),n)}function Gf(){}function C0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function R0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N0(t,e,n){return kr&21?(qn(n,e)||(n=Ug(),vt.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function sy(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{nt=n,Rc.transition=i}}function P0(){return Un().memoizedState}function ay(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},L0(t))D0(e,n);else if(n=h0(t,e,n,i),n!==null){var r=nn();Xn(n,t,i,r),I0(n,e,i)}}function oy(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(L0(t))D0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,qn(o,a)){var l=e.interleaved;l===null?(r.next=r,If(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=h0(t,e,r,i),n!==null&&(r=nn(),Xn(n,t,i,r),I0(n,e,i))}}function L0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function D0(t,e){ya=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}var Rl={readContext:In,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},ly={readContext:In,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:_p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,T0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ay.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:vp,useDebugValue:Gf,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=vp(!1),e=t[0];return t=sy.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ei();if(pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Bt===null)throw Error(ne(349));kr&30||v0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_p(y0.bind(null,i,s,t),[t]),i.flags|=2048,Ba(9,_0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Bt.identifierPrefix;if(pt){var n=Ei,i=Mi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cy={readContext:In,useCallback:C0,useContext:In,useEffect:Hf,useImperativeHandle:A0,useInsertionEffect:w0,useLayoutEffect:b0,useMemo:R0,useReducer:Nc,useRef:E0,useState:function(){return Nc(Oa)},useDebugValue:Gf,useDeferredValue:function(t){var e=Un();return N0(e,Dt.memoizedState,t)},useTransition:function(){var t=Nc(Oa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:x0,useId:P0,unstable_isNewReconciler:!1},uy={readContext:In,useCallback:C0,useContext:In,useEffect:Hf,useImperativeHandle:A0,useInsertionEffect:w0,useLayoutEffect:b0,useMemo:R0,useReducer:Pc,useRef:E0,useState:function(){return Pc(Oa)},useDebugValue:Gf,useDeferredValue:function(t){var e=Un();return Dt===null?e.memoizedState=t:N0(e,Dt.memoizedState,t)},useTransition:function(){var t=Pc(Oa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:x0,useId:P0,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ar(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Xn(e,t,r,i),Zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ar(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Xn(e,t,r,i),Zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=ar(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Xn(e,t,i,n),Zo(e,t,i))}};function yp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function U0(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=dn(e)?Ur:Jt.current,i=e.contextTypes,s=(i=i!=null)?Ns(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=dn(e)?Ur:Jt.current,r.context=Ns(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ku(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$l.enqueueReplaceState(r,r.state,null),Tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dy=typeof WeakMap=="function"?WeakMap:Map;function F0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pl||(Pl=!0,ld=i),Qu(t,e)},n}function k0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qu(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Mp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=by.bind(null,t,e,n),e.then(t,t))}function Ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var fy=Ui.ReactCurrentOwner,cn=!1;function tn(t,e,n,i){e.child=t===null?f0(e,null,n,i):Ls(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=zf(t,e,n,i,s,r),n=Vf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(pt&&n&&Cf(e),e.flags|=1,tn(t,e,i,r),e.child)}function Tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O0(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function O0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Ju(t,e,n,i,r)}function B0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ys,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ys,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(ys,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(ys,vn),vn|=i;return tn(t,e,r,n),e.child}function z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ju(t,e,n,i,r){var s=dn(n)?Ur:Jt.current;return s=Ns(e,s),bs(e,r),n=zf(t,e,n,i,s,r),i=Vf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(pt&&i&&Cf(e),e.flags|=1,tn(t,e,n,r),e.child)}function Ap(t,e,n,i,r){if(dn(n)){var s=!0;Sl(e)}else s=!1;if(bs(e,r),e.stateNode===null)el(t,e),U0(e,n,i),Zu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=dn(n)?Ur:Jt.current,c=Ns(e,c));var p=n.getDerivedStateFromProps,u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Sp(e,a,i,c),qi=!1;var d=e.memoizedState;a.state=d,Tl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||un.current||qi?(typeof p=="function"&&(Ku(e,n,p,i),l=e.memoizedState),(o=qi||yp(e,n,o,i,d,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,p0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:zn(e.type,o),a.props=c,u=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=dn(n)?Ur:Jt.current,l=Ns(e,l));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||d!==l)&&Sp(e,a,i,l),qi=!1,d=e.memoizedState,a.state=d,Tl(e,i,a,r);var v=e.memoizedState;o!==u||d!==v||un.current||qi?(typeof m=="function"&&(Ku(e,n,m,i),v=e.memoizedState),(c=qi||yp(e,n,c,i,d,v,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ed(t,e,n,i,s,r)}function ed(t,e,n,i,r,s){z0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&fp(e,n,!1),Pi(t,e,s);i=e.stateNode,fy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ls(e,t.child,null,s),e.child=Ls(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&fp(e,n,!0),e.child}function V0(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Ff(t,e.containerInfo)}function Cp(t,e,n,i,r){return Ps(),Nf(r),e.flags|=256,tn(t,e,n,i),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function H0(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(xt,r&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):jf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return hy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=or(o,s):(s=Ir(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?nd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=td,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jf(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,i){return i!==null&&Nf(i),Ls(e,t.child,null,n),t=jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(ne(422))),vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ls(e,t.child,null,a),e.child.memoizedState=nd(a),e.memoizedState=td,s);if(!(e.mode&1))return vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Lc(s,i,void 0),vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),Xn(i,t,r,-1))}return Kf(),i=Lc(Error(ne(421))),vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ty.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=ir(r.nextSibling),Sn=e,pt=!0,Hn=null,t!==null&&(An[Cn++]=Mi,An[Cn++]=Ei,An[Cn++]=Fr,Mi=t.id,Ei=t.overflow,Fr=e),e=jf(e,i.children),e.flags|=4096,e)}function Rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$u(t.return,e,n)}function Dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function G0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,n,e);else if(t.tag===19)Rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function py(t,e,n){switch(e.tag){case 3:V0(e),Ps();break;case 5:m0(e);break;case 1:dn(e.type)&&Sl(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?H0(t,e,n):(ut(xt,xt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ut(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return G0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,B0(t,e,n)}return Pi(t,e,n)}var j0,id,W0,X0;j0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};W0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(ai.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Cu(t,r),i=Cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_l)}Nu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};X0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function my(t,e,n){var i=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return dn(e.type)&&yl(),qt(e),null;case 3:return i=e.stateNode,Ds(),ht(un),ht(Jt),Of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(dd(Hn),Hn=null))),id(t,e),qt(e),null;case 5:kf(e);var r=Nr(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)W0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return qt(e),null}if(t=Nr(ai.current),go(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)ft(da[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Oh(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":zh(i,s),ft("invalid",i)}Nu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&mo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&mo(i.textContent,o,t),r=["children",""+o]):wa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":ao(i),Bh(i,s,!0);break;case"textarea":ao(i),Vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ni]=e,t[Ia]=i,j0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Pu(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)ft(da[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Oh(t,i),r=bu(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ft("invalid",t);break;case"textarea":zh(t,i),r=Cu(t,i),ft("invalid",t);break;default:r=i}Nu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&pf(t,s,l,a))}switch(n){case"input":ao(t),Bh(t,i,!1);break;case"textarea":ao(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)X0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Nr(Fa.current),Nr(ai.current),go(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return qt(e),null;case 13:if(ht(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&yn!==null&&e.mode&1&&!(e.flags&128))u0(),Ps(),e.flags|=98560,s=!1;else if(s=go(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ni]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Hn!==null&&(dd(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?It===0&&(It=3):Kf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ds(),id(t,e),t===null&&La(e.stateNode.containerInfo),qt(e),null;case 10:return Df(e.type._context),qt(e),null;case 17:return dn(e.type)&&yl(),qt(e),null;case 19:if(ht(xt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qs(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Al(t),a!==null){for(e.flags|=128,Qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Us&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Al(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return qt(e),null}else 2*At()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=xt.current,ut(xt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function gy(t,e){switch(Rf(e),e.tag){case 1:return dn(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),ht(un),ht(Jt),Of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(ht(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(xt),null;case 4:return Ds(),null;case 10:return Df(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var _o=!1,Kt=!1,xy=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function rd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Np=!1;function vy(t,e){if(Vu=gl,t=Zg(),Af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,p=0,u=t,d=null;t:for(;;){for(var m;u!==n||r!==0&&u.nodeType!==3||(o=a+r),u!==s||i!==0&&u.nodeType!==3||(l=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(m=u.firstChild)!==null;)d=u,u=m;for(;;){if(u===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++p===i&&(l=a),(m=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},gl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),x);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){Mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=Np,Np=!1,v}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rd(e,n,s)}r=r.next}while(r!==i)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q0(t){var e=t.alternate;e!==null&&(t.alternate=null,q0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ia],delete e[Wu],delete e[ey],delete e[ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Y0(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var zt=null,Vn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)$0(t,e,n),n=n.sibling}function $0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Kt||_s(n,e);case 6:var i=zt,r=Vn;zt=null,Bi(t,e,n),zt=i,Vn=r,zt!==null&&(Vn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Vn?(t=zt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Ra(t)):Tc(zt,n.stateNode));break;case 4:i=zt,r=Vn,zt=n.stateNode.containerInfo,Vn=!0,Bi(t,e,n),zt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&rd(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Kt&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Bi(t,e,n),Kt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xy),e.forEach(function(i){var r=Ay.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,Vn=!1;break e;case 3:zt=o.stateNode.containerInfo,Vn=!0;break e;case 4:zt=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(zt===null)throw Error(ne(160));$0(s,a,r),zt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Zn(t),i&4){try{Sa(3,t,t.return),Kl(3,t)}catch(y){Mt(t,t.return,y)}try{Sa(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:Fn(e,t),Zn(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(Fn(e,t),Zn(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&vg(r,s),Pu(o,a);var c=Pu(o,s);for(a=0;a<l.length;a+=2){var p=l[a],u=l[a+1];p==="style"?Eg(r,u):p==="dangerouslySetInnerHTML"?Sg(r,u):p==="children"?ba(r,u):pf(r,p,u,c)}switch(o){case"input":Tu(r,s);break;case"textarea":_g(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ss(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(y){Mt(t,t.return,y)}}break;case 6:if(Fn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Mt(t,t.return,y)}}break;case 3:if(Fn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:Fn(e,t),Zn(t);break;case 13:Fn(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qf=At())),i&4&&Lp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||p,Fn(e,t),Kt=c):Fn(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(Ee=t,p=t.child;p!==null;){for(u=Ee=p;Ee!==null;){switch(d=Ee,m=d.child,d.tag){case 0:case 11:case 14:case 15:Sa(4,d,d.return);break;case 1:_s(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:_s(d,d.return);break;case 22:if(d.memoizedState!==null){Ip(u);continue}}m!==null?(m.return=d,Ee=m):Ip(u)}p=p.sibling}e:for(p=null,u=t;;){if(u.tag===5){if(p===null){p=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Mg("display",a))}catch(y){Mt(t,t.return,y)}}}else if(u.tag===6){if(p===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;p===u&&(p=null),u=u.return}p===u&&(p=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Fn(e,t),Zn(t),i&4&&Lp(t);break;case 21:break;default:Fn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Y0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=Pp(t);od(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Pp(t);ad(t,o,a);break;default:throw Error(ne(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _y(t,e,n){Ee=t,Z0(t)}function Z0(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||_o;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kt;o=_o;var c=Kt;if(_o=a,(Kt=l)&&!c)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?Up(r):l!==null?(l.return=a,Ee=l):Up(r);for(;s!==null;)Ee=s,Z0(s),s=s.sibling;Ee=r,_o=o,Kt=c}Dp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Dp(t)}}function Dp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var u=p.dehydrated;u!==null&&Ra(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Kt||e.flags&512&&sd(e)}catch(d){Mt(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Ip(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Up(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{sd(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{sd(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var yy=Math.ceil,Nl=Ui.ReactCurrentDispatcher,Wf=Ui.ReactCurrentOwner,Ln=Ui.ReactCurrentBatchConfig,Qe=0,Bt=null,Nt=null,Ht=0,vn=0,ys=pr(0),It=0,za=null,Or=0,Zl=0,Xf=0,Ma=null,ln=null,qf=0,Us=1/0,_i=null,Pl=!1,ld=null,sr=null,yo=!1,Qi=null,Ll=0,Ea=0,cd=null,tl=-1,nl=0;function nn(){return Qe&6?At():tl!==-1?tl:tl=At()}function ar(t){return t.mode&1?Qe&2&&Ht!==0?Ht&-Ht:iy.transition!==null?(nl===0&&(nl=Ug()),nl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Hg(t.type)),t):1}function Xn(t,e,n,i){if(50<Ea)throw Ea=0,cd=null,Error(ne(185));qa(t,n,i),(!(Qe&2)||t!==Bt)&&(t===Bt&&(!(Qe&2)&&(Zl|=n),It===4&&$i(t,Ht)),fn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Us=At()+500,ql&&mr()))}function fn(t,e){var n=t.callbackNode;i_(t,e);var i=ml(t,t===Bt?Ht:0);if(i===0)n!==null&&jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jh(n),e===1)t.tag===0?ny(Fp.bind(null,t)):o0(Fp.bind(null,t)),Q_(function(){!(Qe&6)&&mr()}),n=null;else{switch(Fg(i)){case 1:n=_f;break;case 4:n=Dg;break;case 16:n=pl;break;case 536870912:n=Ig;break;default:n=pl}n=sx(n,Q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q0(t,e){if(tl=-1,nl=0,Qe&6)throw Error(ne(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=ml(t,t===Bt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=Qe;Qe|=2;var s=ex();(Bt!==t||Ht!==e)&&(_i=null,Us=At()+500,Dr(t,e));do try{Ey();break}catch(o){J0(t,o)}while(!0);Lf(),Nl.current=s,Qe=r,Nt!==null?e=0:(Bt=null,Ht=0,e=It)}if(e!==0){if(e===2&&(r=Fu(t),r!==0&&(i=r,e=ud(t,r))),e===1)throw n=za,Dr(t,0),$i(t,i),fn(t,At()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sy(r)&&(e=Dl(t,i),e===2&&(s=Fu(t),s!==0&&(i=s,e=ud(t,s))),e===1))throw n=za,Dr(t,0),$i(t,i),fn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:wr(t,ln,_i);break;case 3:if($i(t,i),(i&130023424)===i&&(e=qf+500-At(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(wr.bind(null,t,ln,_i),e);break}wr(t,ln,_i);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Wn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yy(i/1960))-i,10<i){t.timeoutHandle=ju(wr.bind(null,t,ln,_i),i);break}wr(t,ln,_i);break;case 5:wr(t,ln,_i);break;default:throw Error(ne(329))}}}return fn(t,At()),t.callbackNode===n?Q0.bind(null,t):null}function ud(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=ln,ln=n,e!==null&&dd(e)),t}function dd(t){ln===null?ln=t:ln.push.apply(ln,t)}function Sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Xf,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function Fp(t){if(Qe&6)throw Error(ne(327));Ts();var e=ml(t,0);if(!(e&1))return fn(t,At()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=Fu(t);i!==0&&(e=i,n=ud(t,i))}if(n===1)throw n=za,Dr(t,0),$i(t,e),fn(t,At()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,ln,_i),fn(t,At()),null}function Yf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Us=At()+500,ql&&mr())}}function Br(t){Qi!==null&&Qi.tag===0&&!(Qe&6)&&Ts();var e=Qe;Qe|=1;var n=Ln.transition,i=nt;try{if(Ln.transition=null,nt=1,t)return t()}finally{nt=i,Ln.transition=n,Qe=e,!(Qe&6)&&mr()}}function $f(){vn=ys.current,ht(ys)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z_(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Ds(),ht(un),ht(Jt),Of();break;case 5:kf(i);break;case 4:Ds();break;case 13:ht(xt);break;case 19:ht(xt);break;case 10:Df(i.type._context);break;case 22:case 23:$f()}n=n.return}if(Bt=t,Nt=t=or(t.current,null),Ht=vn=e,It=0,za=null,Xf=Zl=Or=0,ln=Ma=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Rr=null}return t}function J0(t,e){do{var n=Nt;try{if(Lf(),Qo.current=Rl,Cl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(kr=0,Ot=Dt=vt=null,ya=!1,ka=0,Wf.current=null,n===null||n.return===null){It=1,za=e,Nt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,u=p.tag;if(!(p.mode&1)&&(u===0||u===11||u===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=Ep(a);if(m!==null){m.flags&=-257,wp(m,a,o,s,e),m.mode&1&&Mp(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Mp(s,c,e),Kf();break e}l=Error(ne(426))}}else if(pt&&o.mode&1){var x=Ep(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),wp(x,a,o,s,e),Nf(Is(l,o));break e}}s=l=Is(l,o),It!==4&&(It=2),Ma===null?Ma=[s]:Ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=F0(s,l,e);gp(s,f);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(sr===null||!sr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=k0(s,o,e);gp(s,E);break e}}s=s.return}while(s!==null)}nx(n)}catch(A){e=A,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function ex(){var t=Nl.current;return Nl.current=Rl,t===null?Rl:t}function Kf(){(It===0||It===3||It===2)&&(It=4),Bt===null||!(Or&268435455)&&!(Zl&268435455)||$i(Bt,Ht)}function Dl(t,e){var n=Qe;Qe|=2;var i=ex();(Bt!==t||Ht!==e)&&(_i=null,Dr(t,e));do try{My();break}catch(r){J0(t,r)}while(!0);if(Lf(),Qe=n,Nl.current=i,Nt!==null)throw Error(ne(261));return Bt=null,Ht=0,It}function My(){for(;Nt!==null;)tx(Nt)}function Ey(){for(;Nt!==null&&!Yv();)tx(Nt)}function tx(t){var e=rx(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?nx(t):Nt=e,Wf.current=null}function nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Nt=null;return}}else if(n=my(n,e,vn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);It===0&&(It=5)}function wr(t,e,n){var i=nt,r=Ln.transition;try{Ln.transition=null,nt=1,wy(t,e,n,i)}finally{Ln.transition=r,nt=i}return null}function wy(t,e,n,i){do Ts();while(Qi!==null);if(Qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r_(t,s),t===Bt&&(Nt=Bt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,sx(pl,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=nt;nt=1;var o=Qe;Qe|=4,Wf.current=null,vy(t,n),K0(n,t),j_(Hu),gl=!!Vu,Hu=Vu=null,t.current=n,_y(n),$v(),Qe=o,nt=a,Ln.transition=s}else t.current=n;if(yo&&(yo=!1,Qi=t,Ll=r),s=t.pendingLanes,s===0&&(sr=null),Qv(n.stateNode),fn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pl)throw Pl=!1,t=ld,ld=null,t;return Ll&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===cd?Ea++:(Ea=0,cd=t):Ea=0,mr(),null}function Ts(){if(Qi!==null){var t=Fg(Ll),e=Ln.transition,n=nt;try{if(Ln.transition=null,nt=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Ll=0,Qe&6)throw Error(ne(331));var r=Qe;for(Qe|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ee=c;Ee!==null;){var p=Ee;switch(p.tag){case 0:case 11:case 15:Sa(8,p,s)}var u=p.child;if(u!==null)u.return=p,Ee=u;else for(;Ee!==null;){p=Ee;var d=p.sibling,m=p.return;if(q0(p),p===c){Ee=null;break}if(d!==null){d.return=m,Ee=d;break}Ee=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){a=Ee;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Ee=_;else e:for(a=g;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Kl(9,o)}}catch(A){Mt(o,o.return,A)}if(o===a){Ee=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Ee=E;break e}Ee=o.return}}if(Qe=r,mr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{nt=n,Ln.transition=e}}return!1}function kp(t,e,n){e=Is(n,e),e=F0(t,e,1),t=rr(t,e,1),e=nn(),t!==null&&(qa(t,1,e),fn(t,e))}function Mt(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Is(n,t),t=k0(e,t,1),e=rr(e,t,1),t=nn(),e!==null&&(qa(e,1,t),fn(e,t));break}}e=e.return}}function by(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Ht&n)===n&&(It===4||It===3&&(Ht&130023424)===Ht&&500>At()-qf?Dr(t,0):Xf|=n),fn(t,e)}function ix(t,e){e===0&&(t.mode&1?(e=co,co<<=1,!(co&130023424)&&(co=4194304)):e=1);var n=nn();t=Ni(t,e),t!==null&&(qa(t,e,n),fn(t,n))}function Ty(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ix(t,n)}function Ay(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),ix(t,n)}var rx;rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,py(t,e,n);cn=!!(t.flags&131072)}else cn=!1,pt&&e.flags&1048576&&l0(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Ns(e,Jt.current);bs(e,n),r=zf(null,e,i,t,r,n);var s=Vf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=$l,e.stateNode=r,r._reactInternals=e,Zu(e,i,t,n),e=ed(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Cf(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ry(i),t=zn(i,t),r){case 0:e=Ju(null,e,i,t,n);break e;case 1:e=Ap(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Tp(null,e,i,zn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Ap(t,e,i,r,n);case 3:e:{if(V0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,p0(t,e),Tl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(ne(423)),e),e=Cp(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(ne(424)),e),e=Cp(t,e,i,n,r);break e}else for(yn=ir(e.stateNode.containerInfo.firstChild),Sn=e,pt=!0,Hn=null,n=f0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=Pi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return m0(e),t===null&&Yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Gu(i,r)?a=null:s!==null&&Gu(i,s)&&(e.flags|=32),z0(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return H0(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ls(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),bp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(wl,i._currentValue),i._currentValue=a,s!==null)if(qn(s.value,a)){if(s.children===r.children&&!un.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$u(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$u(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=In(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Tp(t,e,i,r,n);case 15:return O0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),el(t,e),e.tag=1,dn(i)?(t=!0,Sl(e)):t=!1,bs(e,n),U0(e,i,r),Zu(e,i,r,n),ed(null,e,i,!0,t,n);case 19:return G0(t,e,n);case 22:return B0(t,e,n)}throw Error(ne(156,e.tag))};function sx(t,e){return Lg(t,e)}function Cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new Cy(t,e,n,i)}function Zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ry(t){if(typeof t=="function")return Zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===xf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Zf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case us:return Ir(n.children,r,s,e);case mf:a=8,r|=8;break;case Su:return t=Pn(12,n,e,r|2),t.elementType=Su,t.lanes=s,t;case Mu:return t=Pn(13,n,e,r),t.elementType=Mu,t.lanes=s,t;case Eu:return t=Pn(19,n,e,r),t.elementType=Eu,t.lanes=s,t;case mg:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hg:a=10;break e;case pg:a=9;break e;case gf:a=11;break e;case xf:a=14;break e;case Xi:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Pn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ir(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=mg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ny(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,i,r,s,a,o,l){return t=new Ny(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),t}function Py(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ax(t){if(!t)return ur;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(dn(n))return a0(t,n,e)}return e}function ox(t,e,n,i,r,s,a,o,l){return t=Qf(n,i,!0,t,r,s,a,o,l),t.context=ax(null),n=t.current,i=nn(),r=ar(n),s=bi(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,qa(t,r,i),fn(t,i),t}function Jl(t,e,n,i){var r=e.current,s=nn(),a=ar(r);return n=ax(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,a),t!==null&&(Xn(t,r,a,s),Zo(t,r,a)),a}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jf(t,e){Op(t,e),(t=t.alternate)&&Op(t,e)}function Ly(){return null}var lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}ec.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Jl(t,e,null,null)};ec.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Jl(null,t,null,null)}),e[Ri]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Vg(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Il(a);s.call(c)}}var a=ox(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=a,t[Ri]=a.current,La(t.nodeType===8?t.parentNode:t),Br(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Il(l);o.call(c)}}var l=Qf(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[Ri]=l.current,La(t.nodeType===8?t.parentNode:t),Br(function(){Jl(e,l,n,i)}),l}function nc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Il(a);o.call(l)}}Jl(e,a,t,r)}else a=Dy(n,e,t,r,i);return Il(a)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(yf(e,n|1),fn(e,At()),!(Qe&6)&&(Us=At()+500,mr()))}break;case 13:Br(function(){var i=Ni(t,1);if(i!==null){var r=nn();Xn(i,t,1,r)}}),Jf(t,1)}};Sf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=nn();Xn(e,t,134217728,n)}Jf(t,134217728)}};Og=function(t){if(t.tag===13){var e=ar(t),n=Ni(t,e);if(n!==null){var i=nn();Xn(n,t,e,i)}Jf(t,e)}};Bg=function(){return nt};zg=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Du=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(ne(90));xg(i),Tu(i,r)}}}break;case"textarea":_g(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};Tg=Yf;Ag=Br;var Iy={usingClientEntryPoint:!1,Events:[$a,ps,Xl,wg,bg,Yf]},Js={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uy={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Hl=So.inject(Uy),si=So}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(ne(200));return Py(t,e,null,n)};En.createRoot=function(t,e){if(!th(t))throw Error(ne(299));var n=!1,i="",r=lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,La(t.nodeType===8?t.parentNode:t),new eh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Br(t)};En.hydrate=function(t,e,n){if(!tc(e))throw Error(ne(200));return nc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!th(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=lx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ox(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ec(e)};En.render=function(t,e,n){if(!tc(e))throw Error(ne(200));return nc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!tc(t))throw Error(ne(40));return t._reactRootContainer?(Br(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};En.unstable_batchedUpdates=Yf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return nc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cx)}catch(t){console.error(t)}}cx(),cg.exports=En;var ic=cg.exports,zp=ic;_u.createRoot=zp.createRoot,_u.hydrateRoot=zp.hydrateRoot;function ux(t){ve.useEffect(()=>{if(!t)return;const e=document.body.style.overflow,n=document.body.style.paddingRight,i=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",i>0&&(document.body.style.paddingRight=`${i}px`),()=>{document.body.style.overflow=e,document.body.style.paddingRight=n}},[t])}function Fy(t){const[e,n]=ve.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return ve.useEffect(()=>{const i=window.matchMedia(t),r=s=>n(s.matches);return n(i.matches),i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[t]),e}function dx({open:t,title:e,onClose:n,children:i}){const r=Fy("(min-width: 768px)"),s=ve.useRef(null),a=ve.useRef(null),o=ve.useMemo(()=>typeof document>"u"?null:document.body,[]);return ux(t),ve.useEffect(()=>{var c;if(!t)return;const l=document.activeElement;return(c=a.current)==null||c.focus(),()=>{l==null||l.focus()}},[t]),ve.useEffect(()=>{if(!t)return;const l=c=>{if(c.key==="Escape"&&n(),c.key!=="Tab"||!s.current)return;const p=s.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'),u=Array.from(p).filter(y=>!y.hasAttribute("disabled"));if(u.length===0)return;const d=u[0],m=u[u.length-1],v=document.activeElement;!c.shiftKey&&v===m?(c.preventDefault(),d.focus()):c.shiftKey&&v===d&&(c.preventDefault(),m.focus())};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t,n]),!t||!o?null:ic.createPortal(h.jsxs("div",{className:"fixed inset-0 z-50","aria-hidden":!t,onMouseDown:l=>{l.target===l.currentTarget&&n()},children:[h.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),h.jsxs("div",{className:["absolute liquid-glass rounded-3xl shadow-[0_35px_130px_rgba(0,0,0,0.75)]",r?"left-1/2 top-1/2 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2":"inset-x-0 bottom-0 w-full rounded-b-none rounded-t-3xl"].join(" "),role:"dialog","aria-modal":"true","aria-label":e,ref:s,children:[h.jsxs("div",{className:"flex items-start justify-between gap-4 border-b border-cream/10 px-5 py-4 sm:px-6",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Detail"}),h.jsx("div",{className:"mt-1 truncate font-grotesk text-xl uppercase tracking-[0.06em] text-cream",children:e})]}),h.jsx("button",{ref:a,type:"button",onClick:n,className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/75 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-0","aria-label":"Close",children:h.jsx("span",{"aria-hidden":"true",className:"text-xl leading-none",children:"×"})})]}),h.jsx("div",{className:"max-h-[70vh] overflow-auto px-5 py-5 sm:max-h-[75vh] sm:px-6",children:i})]})]}),o)}const ky={hostile:"border-rose-400/25 bg-rose-400/10 text-rose-100",neutral:"border-amber-300/25 bg-amber-300/10 text-amber-50",passive:"border-emerald-300/25 bg-emerald-300/10 text-emerald-50"},Oy=({rating:t})=>{const e=Number.isFinite(t)?Math.max(0,Math.min(5,Math.round(t))):0;return h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"flex gap-1",children:Array.from({length:5}).map((n,i)=>h.jsx("span",{className:["h-1.5 w-4 rounded-full",i<e?"bg-white/70":"bg-white/12"].join(" "),"aria-hidden":"true"},i))}),h.jsxs("div",{className:"text-xs font-medium text-white/55",children:["Danger ",e,"/5"]})]})},Vp=({items:t})=>t.length===0?null:h.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(e=>h.jsx("span",{className:"liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70",children:e},e))});function By({planet:t,creatures:e}){return h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Overview"}),h.jsx("div",{className:"mt-3 font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:t.tagline}),h.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/70",children:t.description})]}),h.jsxs("div",{className:"grid gap-4 lg:grid-cols-[1fr_0.95fr]",children:[h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85",children:"Environment"}),h.jsxs("div",{className:"mt-4 grid gap-3",children:[h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Biome"}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/85",children:t.environment.biome})]}),h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Atmosphere"}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/85",children:t.environment.atmosphere})]}),h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Hazards"}),h.jsx("div",{className:"mt-2",children:h.jsx(Vp,{items:t.environment.hazards})})]}),h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Resources"}),h.jsx("div",{className:"mt-2",children:h.jsx(Vp,{items:t.environment.resources})})]})]})]}),h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85",children:"Points of Interest"}),h.jsx("div",{className:"mt-4 space-y-3",children:t.pointsOfInterest.map(n=>h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.08em] text-cream",children:n.name}),h.jsx("div",{className:"mt-2 font-mono text-sm leading-relaxed text-cream/70",children:n.detail})]},n.id))})]})]}),h.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-glow backdrop-blur-xl",children:[h.jsxs("div",{className:"flex items-end justify-between gap-4",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-sm font-medium text-white/70",children:"Native Creatures"}),h.jsx("div",{className:"mt-1 text-sm text-white/55",children:"Field notes from the planet index."})]}),h.jsxs("div",{className:"text-xs font-medium text-white/45",children:[e.length," total"]})]}),e.length===0?h.jsx("div",{className:"mt-4 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70",children:"No creature entries found for this planet."}):h.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:e.map(n=>h.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"truncate text-sm font-semibold text-white",children:n.name}),h.jsx("div",{className:"mt-1 text-sm leading-relaxed text-white/70",children:n.behavior})]}),h.jsx("span",{className:["shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold",ky[n.role]].join(" "),children:n.role})]}),h.jsx("div",{className:"mt-3",children:h.jsx(Oy,{rating:n.dangerRating})}),h.jsx("div",{className:"mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-white/75",children:n.fieldNote}),n.tags.length>0?h.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:n.tags.map(i=>h.jsx("span",{className:"rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/65",children:i},i))}):null]},n.id))})]})]})}const Hp={"crystal-planet":{band:"from-cyan-300/15 via-sky-200/10 to-fuchsia-300/15",glow:"bg-cyan-300/70 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]",dot:"bg-cyan-200/75"},"mushroom-planet":{band:"from-fuchsia-300/15 via-emerald-200/10 to-cyan-300/15",glow:"bg-fuchsia-300/70 shadow-[0_0_0_3px_rgba(232,121,249,0.10)]",dot:"bg-fuchsia-200/75"},"ember-planet":{band:"from-orange-300/15 via-amber-200/10 to-rose-300/15",glow:"bg-orange-300/70 shadow-[0_0_0_3px_rgba(251,146,60,0.10)]",dot:"bg-orange-200/75"}};function zy({planets:t,onSelect:e}){return h.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:t.map(n=>{const i=Hp[n.id]??Hp["crystal-planet"];return h.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:[h.jsx("div",{className:["pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100","bg-gradient-to-br",i.band].join(" ")}),h.jsx("div",{className:"pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.10),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(232,121,249,0.10),transparent_60%)] opacity-70 blur-2xl transition duration-300 group-hover:opacity-95"}),h.jsxs("div",{className:"relative",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:["h-2 w-2 rounded-full",i.dot].join(" ")}),h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:"Planet Brief"})]}),h.jsx("div",{className:"mt-3 truncate font-grotesk text-[18px] uppercase tracking-[0.08em] text-cream",children:n.name})]}),h.jsx("div",{className:"text-cream/45 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80",children:"→"})]}),h.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/65",children:n.tagline}),h.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[h.jsxs("span",{className:["inline-flex items-center gap-2 rounded-full border border-cream/10 bg-black/30 px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70","backdrop-blur-sm"].join(" "),children:[h.jsx("span",{className:["h-1.5 w-1.5 rounded-full",i.glow].join(" ")}),h.jsx("span",{className:"truncate",children:n.environment.biome})]}),h.jsxs("span",{className:"inline-flex items-center rounded-full border border-cream/10 bg-black/30 px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70 backdrop-blur-sm",children:[n.nativeCreatureIds.length," creatures"]})]})]})]},n.id)})})}function fd(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function fx(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:fd()?"auto":"smooth",block:"start"})}function Vy(t){const e=ve.useRef(null),[n,i]=ve.useState(()=>typeof window>"u"?!0:fd());return ve.useEffect(()=>{if(fd()){i(!0);return}const r=e.current;if(!r)return;if(typeof IntersectionObserver>"u"){i(!0);return}const s=new IntersectionObserver(a=>{const o=a[0];o!=null&&o.isIntersecting&&(i(!0),s.disconnect())},{threshold:.12,rootMargin:"0px 0px -20% 0px",...t});return s.observe(r),()=>s.disconnect()},[t]),{ref:e,visible:n}}function xr({id:t,kicker:e,title:n,subtitle:i,children:r}){const{ref:s,visible:a}=Vy(),o=t==="planets"?"from-neon/14 via-cream/5 to-transparent":t==="prototype"?"from-neon/16 via-cream/6 to-transparent":t==="weapons"?"from-neon/12 via-cream/6 to-transparent":t==="mounts"?"from-neon/10 via-cream/4 to-transparent":t==="creatures"?"from-neon/10 via-cream/5 to-transparent":t==="vote"?"from-neon/12 via-cream/6 to-transparent":"from-neon/10 via-cream/4 to-transparent",l=t==="planets"?"World Atlas":t==="prototype"?"Arena":t==="weapons"?"Armory":t==="mounts"?"Ride Log":t==="creatures"?"Field Notes":t==="vote"?"Signal":"Guide";return h.jsxs("section",{ref:s,id:t,className:["section-anchor relative py-16 sm:py-24","motion-safe:transition motion-safe:duration-700 motion-safe:ease-out",a?"opacity-100 translate-y-0 blur-none":"motion-safe:opacity-0 motion-safe:translate-y-4 motion-safe:blur-sm motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-none"].join(" "),children:[h.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 -top-40 h-80",children:[h.jsx("div",{className:["absolute inset-0 bg-gradient-to-b blur-3xl",o].join(" ")}),h.jsx("div",{className:"absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent"})]}),t==="creatures"?h.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen [background-image:url('/creature-silhouettes.png')] bg-no-repeat [background-size:min(980px,92vw)_auto] [background-position:center_18%] [mask-image:radial-gradient(circle_at_center,black_0%,black_55%,transparent_78%)] [filter:brightness(1.15)_contrast(1.1)]"}):null,h.jsxs("div",{className:"mx-auto w-full max-w-6xl px-5 sm:px-8",children:[h.jsx("div",{className:"flex items-start justify-between gap-6",children:h.jsxs("div",{className:"max-w-3xl",children:[e?h.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/75",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-neon/85 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]"}),h.jsx("span",{children:e})]}):null,h.jsxs("div",{className:"relative mt-5",children:[h.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -top-6 left-0 font-condiment text-3xl text-neon/70 mix-blend-screen sm:-top-7 sm:text-4xl",children:l}),h.jsx("h2",{className:"relative text-balance font-grotesk text-3xl uppercase tracking-[0.08em] text-cream sm:text-4xl",children:n})]}),i?h.jsx("p",{className:"mt-4 max-w-2xl text-pretty font-mono text-base leading-relaxed text-cream/70 sm:text-lg",children:i}):null]})}),r?h.jsx("div",{className:"mt-10",children:r}):null]})]})}function Hy({brand:t,sections:e}){var p;const n=ve.useRef(null),[i,r]=ve.useState(((p=e[0])==null?void 0:p.id)??""),[s,a]=ve.useState(!1),o=ve.useMemo(()=>e.map(u=>u.id),[e]);(typeof window>"u"?ve.useEffect:ve.useLayoutEffect)(()=>{const u=n.current;if(!u)return;const d=()=>{const v=u.getBoundingClientRect().height;document.documentElement.style.setProperty("--nav-h",`${Math.round(v)}px`)};d();const m=new ResizeObserver(d);return m.observe(u),()=>m.disconnect()},[]),ve.useEffect(()=>{const u=o.map(m=>document.getElementById(m)).filter(m=>!!m);if(u.length===0)return;const d=new IntersectionObserver(m=>{var x;const v=m.filter(f=>f.isIntersecting).sort((f,g)=>(g.intersectionRatio??0)-(f.intersectionRatio??0))[0],y=(x=v==null?void 0:v.target)==null?void 0:x.id;y&&r(y)},{root:null,threshold:[.15,.35,.55],rootMargin:"-20% 0px -65% 0px"});return u.forEach(m=>d.observe(m)),()=>d.disconnect()},[o]);const c=u=>{a(!1),fx(u)};return h.jsxs(h.Fragment,{children:[h.jsx("header",{ref:n,className:"sticky top-0 z-40",children:h.jsx("div",{className:"mx-auto w-full max-w-6xl px-5 py-4 sm:px-8",children:h.jsxs("div",{className:"grid grid-cols-[auto_1fr_auto] items-center gap-4",children:[h.jsxs("button",{type:"button",onClick:()=>c("top"),className:"group inline-flex items-center gap-3 rounded-2xl px-2 py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"Back to top",children:[h.jsx("img",{src:"/tiny-titan-logo.png",alt:"",className:"h-8 w-8 rounded-xl opacity-95 shadow-[0_10px_40px_rgba(0,0,0,0.55)]"}),h.jsx("span",{className:"font-grotesk text-sm uppercase tracking-[0.22em] text-cream",children:t})]}),h.jsx("nav",{className:"hidden items-center justify-self-center rounded-full px-2 py-2 liquid-glass lg:flex","aria-label":"Primary",children:h.jsx("div",{className:"flex max-w-[min(46vw,640px)] items-center gap-1 overflow-hidden",children:e.map(u=>{const d=u.id===i;return h.jsx("button",{type:"button",onClick:()=>c(u.id),className:["relative shrink-0 rounded-full px-3 py-2 font-grotesk text-[13px] uppercase tracking-[0.18em]","text-cream/75 hover:text-neon motion-safe:transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",d?"text-neon after:absolute after:inset-x-3 after:-bottom-[3px] after:h-px after:bg-neon after:opacity-80":""].join(" "),children:u.label},u.id)})})}),h.jsxs("div",{className:"flex items-center justify-end gap-2",children:[h.jsxs("div",{className:"hidden flex-nowrap items-center gap-2 lg:flex",children:[h.jsx("a",{href:"mailto:press@tinytitan.game",className:"liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"Email",children:h.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M4 6h16v12H4z"}),h.jsx("path",{d:"m4 7 8 6 8-6"})]})}),h.jsx("a",{href:"https://x.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"X",children:h.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M4 4l16 16"}),h.jsx("path",{d:"M20 4 4 20"})]})}),h.jsx("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"GitHub",children:h.jsx("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"currentColor","aria-hidden":"true",children:h.jsx("path",{d:"M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.25 5.71.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})})})]}),h.jsxs("button",{type:"button",onClick:()=>a(!0),className:"liquid-glass glass-float inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 lg:hidden","aria-label":"Open navigation",children:[h.jsx("span",{className:"text-base leading-none","aria-hidden":"true",children:"≡"}),h.jsx("span",{children:"Menu"})]})]})]})})}),h.jsx(dx,{open:s,onClose:()=>a(!1),title:"Navigate",children:h.jsx("div",{className:"grid gap-2",children:e.map(u=>{const d=u.id===i;return h.jsx("button",{type:"button",onClick:()=>c(u.id),className:["liquid-glass glass-float w-full rounded-2xl px-4 py-4 text-left font-grotesk text-[14px] uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",d?"text-neon":"text-cream/80 hover:text-neon"].join(" "),children:u.label},u.id)})})})]})}function Gy({onExploreUniverse:t}){const e="/trailer.mp4",[n,i]=ve.useState(!1),[r,s]=ve.useState(!1),a=ve.useRef(null),o=ve.useRef(null),l=ve.useRef(null),c=ve.useRef(null),p=ve.useRef(null),u=ve.useRef(null),d=ve.useMemo(()=>typeof document>"u"?null:document.body,[]),m=typeof document<"u"&&!!document.fullscreenEnabled,v=x=>{const f=x==null?void 0:x.trim();return f?/\.(mp4|webm|ogg)(\?.*)?$/i.test(f):!1};ve.useEffect(()=>{const x=()=>{typeof document>"u"||s(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",x),()=>document.removeEventListener("fullscreenchange",x)},[]),ve.useEffect(()=>{var f;if(!n)return;const x=document.activeElement;return(f=o.current)==null||f.focus(),()=>{x==null||x.focus()}},[n]),ve.useEffect(()=>{if(!n)return;const x=f=>{if(f.key==="Escape"){f.preventDefault(),i(!1);return}if(f.key!=="Tab"||!a.current)return;const g=a.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'),_=Array.from(g).filter(C=>!C.hasAttribute("disabled"));if(_.length===0)return;const E=_[0],A=_[_.length-1],b=document.activeElement;!f.shiftKey&&b===A?(f.preventDefault(),E.focus()):f.shiftKey&&b===E&&(f.preventDefault(),A.focus())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[n]),ve.useEffect(()=>{if(n)return()=>{typeof document>"u"||document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}},[n]);const y=({title:x,fullscreenRef:f})=>{const g=e==null?void 0:e.trim(),_=v(g);return h.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl",children:[h.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neon/8 via-cream/5 to-transparent"}),h.jsxs("div",{className:"relative",children:[h.jsxs("div",{className:"flex items-center justify-between gap-4 border-b border-cream/10 px-4 py-4 sm:px-6",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Trailer"}),h.jsx("div",{className:"mt-1 truncate font-grotesk text-[14px] uppercase tracking-[0.12em] text-cream/85",children:x})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{type:"button",onClick:()=>i(!0),className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_60px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Play"}),h.jsx("button",{type:"button",onClick:async()=>{const E=_?p.current:f.current;E&&m&&await E.requestFullscreen().catch(()=>{})},disabled:!m,className:"liquid-glass glass-float inline-flex items-center justify-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 disabled:cursor-not-allowed disabled:opacity-60",children:"Fullscreen"})]})]}),h.jsxs("div",{ref:f,className:"relative aspect-video w-full",children:[g?_?h.jsx("video",{ref:p,className:"absolute inset-0 h-full w-full",src:g,controls:!0,playsInline:!0,preload:"metadata"}):h.jsx("iframe",{title:"Tiny Titan trailer",className:"absolute inset-0 h-full w-full",src:g,allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,loading:"lazy",referrerPolicy:"strict-origin-when-cross-origin"}):h.jsx("div",{className:"absolute inset-0 grid place-items-center px-6 text-center",children:h.jsxs("div",{children:[h.jsx("div",{className:"text-sm font-semibold text-white/90",children:"Trailer embed not configured"}),h.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/60",children:"Set VITE_PIXVERSE_EMBED_URL to a PixVerse embed link to enable playback."})]})}),h.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/55 to-transparent"})]})]})]})};return h.jsxs(h.Fragment,{children:[h.jsxs("section",{id:"trailer",className:"section-anchor relative overflow-hidden",children:[h.jsxs("div",{className:"absolute inset-0",children:[h.jsx("video",{className:"absolute inset-0 h-full w-full object-cover opacity-[0.08] blur-[0.5px] motion-reduce:hidden",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true",children:h.jsx("source",{src:"/atmosphere-loop.mp4",type:"video/mp4"})}),h.jsx("div",{className:"absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-neon/10 via-cream/6 to-transparent blur-3xl"}),h.jsx("div",{className:"absolute -bottom-72 left-1/2 h-[620px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cream/5 via-neon/8 to-transparent blur-3xl"})]}),h.jsx("div",{className:"relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20",children:h.jsxs("div",{className:"grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/75",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-neon/85 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]"}),h.jsx("span",{children:"Reveal Trailer"})]}),h.jsxs("div",{className:"relative mt-6",children:[h.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -top-7 left-0 font-condiment text-5xl text-neon/70 mix-blend-screen sm:-top-10 sm:text-6xl",children:"Neon Drift"}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("img",{src:"/tiny-titan-logo.png",alt:"",className:"h-14 w-14 rounded-3xl opacity-95 shadow-[0_18px_70px_rgba(0,0,0,0.55)] sm:h-16 sm:w-16"}),h.jsx("h1",{className:"text-balance font-grotesk text-5xl uppercase tracking-[0.06em] text-cream sm:text-6xl",children:"Tiny Titan"})]})]}),h.jsx("p",{className:"mt-5 max-w-xl text-pretty font-grotesk text-lg uppercase tracking-[0.14em] text-cream/80 sm:text-xl",children:"Small Explorer. Massive Adventure."}),h.jsx("p",{className:"mt-3 max-w-xl text-pretty font-mono text-base leading-relaxed text-cream/65 sm:text-lg",children:"Watch the cinematic reveal, then scroll through planets, gadgets, mounts, and field notes from the edges of the map."}),h.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3",children:[h.jsx("button",{type:"button",onClick:()=>i(!0),className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Watch Trailer"}),h.jsx("button",{type:"button",onClick:t,className:"liquid-glass glass-float inline-flex items-center justify-center rounded-full px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Explore the Universe"})]}),h.jsxs("div",{className:"mt-8 grid gap-4",children:[h.jsxs("div",{className:"flex items-start gap-3 rounded-3xl liquid-glass p-5 font-mono text-sm text-cream/65",children:[h.jsx("div",{className:"mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-neon/80 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]"}),h.jsx("div",{className:"leading-relaxed",children:"Best with audio. Fullscreen is available via browser support or the player controls."})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[h.jsx("a",{href:"mailto:press@tinytitan.game",className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"Email",children:h.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M4 6h16v12H4z"}),h.jsx("path",{d:"m4 7 8 6 8-6"})]})}),h.jsx("a",{href:"https://x.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"X",children:h.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M4 4l16 16"}),h.jsx("path",{d:"M20 4 4 20"})]})}),h.jsx("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"GitHub",children:h.jsx("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"currentColor","aria-hidden":"true",children:h.jsx("path",{d:"M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.25 5.71.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})})})]})]})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -inset-5 rounded-3xl bg-gradient-to-b from-neon/10 via-cream/5 to-transparent blur-2xl"}),h.jsx("div",{className:"relative",children:h.jsx(y,{title:"Cinematic reveal",fullscreenRef:l})})]})]})})]}),n&&d?ic.createPortal(h.jsxs("div",{className:"fixed inset-0 z-50",onMouseDown:x=>{x.target===x.currentTarget&&i(!1)},"aria-hidden":!n,children:[h.jsx("div",{className:"absolute inset-0 bg-black/65 backdrop-blur-md"}),h.jsx("div",{ref:a,role:"dialog","aria-modal":"true","aria-label":"Trailer player",className:"absolute inset-0 mx-auto flex max-w-6xl items-center justify-center px-4 py-10 sm:px-8",children:h.jsxs("div",{className:"liquid-glass w-full overflow-hidden rounded-[28px] shadow-[0_45px_160px_rgba(0,0,0,0.78)]",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-cream/10 px-4 py-4 sm:px-6",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Cinematic Trailer"}),h.jsx("div",{className:"mt-1 truncate font-grotesk text-[14px] uppercase tracking-[0.12em] text-cream/85",children:"Tiny Titan — Reveal"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{type:"button",onClick:async()=>{const x=v(e)?u.current:c.current;if(x){if(r){if(typeof document>"u")return;await document.exitFullscreen().catch(()=>{});return}m&&await x.requestFullscreen().catch(()=>{})}},disabled:!m,className:"liquid-glass glass-float inline-flex items-center justify-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 disabled:cursor-not-allowed disabled:opacity-60",children:r?"Exit Fullscreen":"Fullscreen"}),h.jsx("button",{ref:o,type:"button",onClick:()=>i(!1),className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/75 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-0","aria-label":"Close",children:h.jsx("span",{"aria-hidden":"true",className:"text-xl leading-none",children:"×"})})]})]}),h.jsx("div",{className:"px-4 py-4 sm:px-5 sm:py-5",children:h.jsxs("div",{className:"mx-auto w-full max-w-5xl",children:[h.jsx("div",{ref:c,className:"aspect-video w-full overflow-hidden rounded-3xl border border-cream/10 bg-black/45 shadow-[0_25px_100px_rgba(0,0,0,0.55)]",children:h.jsx("div",{className:"h-full w-full",children:e!=null&&e.trim()?v(e)?h.jsx("video",{ref:u,className:"h-full w-full",src:e.trim(),controls:!0,playsInline:!0,autoPlay:!0,preload:"auto"}):h.jsx("iframe",{title:"Tiny Titan trailer fullscreen",className:"h-full w-full",src:e.trim(),allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin"}):h.jsx("div",{className:"grid h-full place-items-center px-6 text-center",children:h.jsxs("div",{children:[h.jsx("div",{className:"text-sm font-semibold text-white/90",children:"Trailer embed not configured"}),h.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/60",children:"Set VITE_PIXVERSE_EMBED_URL to a PixVerse embed link to enable playback."})]})})})}),h.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55",children:[h.jsx("div",{children:"Tip: Use the player controls for picture-in-picture where available."}),h.jsx("div",{className:"text-white/45",children:"Esc closes"})]})]})})]})})]}),d):null]})}const jy=[{id:"crystal-planet",name:"Crystal Planet",tagline:"Glittering shards and harmonic storms.",description:"A frozen world of prismatic glass dunes and singing quartz ridges. Lightning skates across crystal spires, turning the horizon into a shifting aurora.",environment:{biome:"Prismatic tundra",atmosphere:"Thin, ionized, and bright with static haze",hazards:["Shard squalls","Resonance lightning","Mirror crevasses"],resources:["Singing quartz","Refraction ice","Polar starlight moss"]},pointsOfInterest:[{id:"crown-ridge",name:"Crown Ridge",detail:"A ring of crown-like spires that hum in chords when the wind passes through."},{id:"the-prism-well",name:"The Prism Well",detail:"A deep sinkhole lined with faceted ice that bends light into impossible colors."}],nativeCreatureIds:["glowtail","orb-moth"]},{id:"mushroom-planet",name:"Mushroom Planet",tagline:"A bioluminescent forest that breathes.",description:"Towering fungal trunks form a living canopy, pulsing with soft light and drifting spores. The ground is springy, warm, and full of hidden tunnels.",environment:{biome:"Myco-jungle",atmosphere:"Humid and spore-rich with gentle updrafts",hazards:["Spore blooms","Sinkroot pits","Hallucination pollen"],resources:["Glow caps","Elastic mycelium","Spore ink"]},pointsOfInterest:[{id:"lantern-grove",name:"Lantern Grove",detail:"A clearing where mushrooms glow in synchrony, mapping star patterns onto the forest floor."},{id:"the-mycelium-cathedral",name:"The Mycelium Cathedral",detail:"A vaulted network of root-arches that echoes like a drum when creatures pass above."}],nativeCreatureIds:["chomper","blink-hopper","plasma-slime"]},{id:"ember-planet",name:"Ember Planet",tagline:"Heat, ash, and glowing tides of sand.",description:"A scorched planet of basalt shelves and ember dunes where heat shimmers like water. Volcanic vents exhale orange mist, and the night sky is painted by falling sparks.",environment:{biome:"Volcanic badlands",atmosphere:"Dense with ash and warm pressure fronts",hazards:["Lava vents","Ash cyclones","Glass sand tides"],resources:["Emberstone","Basalt fiber","Thermal salts"]},pointsOfInterest:[{id:"the-breathing-rift",name:"The Breathing Rift",detail:"A crack in the crust that exhales in rhythmic bursts, like a giant sleeping beast."},{id:"cinder-shore",name:"Cinder Shore",detail:"A coastline of black sand where molten beads cool into tiny pearls at the waterline."}],nativeCreatureIds:["titan-crab"]}],Wy=[{id:"bubble-blaster",name:"Bubble Blaster",category:"gadget",tagline:"Contain chaos in a pop of foam.",description:"Fires elastic bubbles that trap small creatures and suspend loose objects for a few seconds.",primaryEffect:"Creates a buoyant bubble snare on hit",secondaryEffect:"Bubbles can be bounced into hazards or used as temporary stepping stones",energySource:"Compressed foam cells",unlockHint:"Perfect for the Mushroom Planet’s bouncy terrain."},{id:"gravity-hammer",name:"Gravity Hammer",category:"weapon",tagline:"One swing, one tiny moonquake.",description:"A compact hammer that generates a localized gravity pulse when it strikes, pulling enemies inward before launching them away.",primaryEffect:"Area gravity pulse on impact",secondaryEffect:"Can collapse brittle crystal formations to reveal paths",energySource:"Mini singularity coil",unlockHint:"Best used when you want enemies grouped and confused."},{id:"comet-cannon",name:"Comet Cannon",category:"weapon",tagline:"Throw a star and keep moving.",description:"Charges a streaking comet shot that pierces lines of targets and leaves a chilly wake.",primaryEffect:"Piercing projectile with a frost trail",secondaryEffect:"The wake briefly slows hazards like shard squalls or ash gusts",energySource:"Cryo-charge capacitor",unlockHint:"Pairs well with open arenas and long sightlines."},{id:"disco-ray",name:"Disco Ray",category:"weapon",tagline:"Dazzle first. Ask questions never.",description:"Emits a sweeping prism beam that stuns, confuses, and paints targets with neon marks visible through terrain.",primaryEffect:"Cone beam that stuns and applies a reveal mark",secondaryEffect:"Marked targets take bonus damage from follow-up hits",energySource:"Spectrum lens array",unlockHint:"For explorers who like their danger loud and colorful."}],Xy=[{id:"chomper",name:"Chomper",role:"hostile",behavior:"An ambush predator that hides beneath mushroom mats and snaps upward when footsteps vibrate the ground.",fieldNote:"If the spores suddenly go quiet, stop moving. The quiet is the trap.",habitatPlanetIds:["mushroom-planet"],dangerRating:4,tags:["ambush","predator","fungal-forest"]},{id:"plasma-slime",name:"Plasma Slime",role:"passive",behavior:"A gelatinous drifter that absorbs ambient charge and sheds it as harmless sparkles when startled.",fieldNote:"It loves warmth. Your visor heater will attract them like tiny living lanterns.",habitatPlanetIds:["mushroom-planet"],dangerRating:1,tags:["bioluminescent","electric","curious"]},{id:"blink-hopper",name:"Blink Hopper",role:"neutral",behavior:"Skips between short-range positions in flickers of light, usually to avoid predators or to steal shiny gear.",fieldNote:"Do not chase. It will always appear behind you, as if offended by physics.",habitatPlanetIds:["mushroom-planet"],dangerRating:2,tags:["teleport","mischief","fast"]},{id:"titan-crab",name:"Titan Crab",role:"hostile",behavior:"A massive crustacean that patrols basalt shelves, defending thermal vents like territory markers.",fieldNote:"Its shell isn’t armor; it’s a furnace. Keep distance, or your tools will soften in your hands.",habitatPlanetIds:["ember-planet"],dangerRating:5,tags:["boss","armored","heat"]},{id:"glowtail",name:"Glowtail",role:"passive",behavior:"A skittish, comet-tailed scavenger that feeds on starlight moss and leaves a ribbon of luminescence behind it.",fieldNote:"Follow its trail to find safe footing; it avoids mirror crevasses instinctively.",habitatPlanetIds:["crystal-planet"],dangerRating:1,tags:["guide","luminescent","scavenger"]},{id:"orb-moth",name:"Orb Moth",role:"neutral",behavior:"Floats in slow spirals around crystal spires, bathing them in soft, refracted light that calms storm charge.",fieldNote:"When they gather, lightning sleeps. When they scatter, brace for a shard squall.",habitatPlanetIds:["crystal-planet"],dangerRating:2,tags:["weather","swarm","aerial"]}],qy=[{id:"rocket-snail",name:"Rocket Snail",tagline:"Slow until it isn’t.",traversal:"ground",capabilities:["Bursts of straight-line speed","Sticky climbing on smooth surfaces","Shell shield when bracing"],habitatPlanetIds:["mushroom-planet"],temperament:"docile",handling:"stable",topSpeedRating:3,travelFantasy:"Ride a gentle snail that can suddenly blast forward like a pocket rocket, leaving a glittery contrail of spores."},{id:"plasma-beetle",name:"Plasma Beetle",tagline:"Armored sprint with a spark.",traversal:"ground",capabilities:["Dash through light obstacles","Short shockwave stomp","Carries heavy cargo"],habitatPlanetIds:["ember-planet"],temperament:"bold",handling:"agile",topSpeedRating:4,travelFantasy:"A crackling beetle mount that skitters over hot stone and dares the vents to keep up."},{id:"sky-whale",name:"Sky Whale",tagline:"Drift above the danger.",traversal:"air",capabilities:["Sustained gliding","Updraft surfing","Calming aura for nearby wildlife"],habitatPlanetIds:["crystal-planet"],temperament:"gentle",handling:"floaty",topSpeedRating:2,travelFantasy:"Climb onto a serene sky whale and glide through auroras like you’re swimming through light."},{id:"sand-worm",name:"Sand Worm",tagline:"Dive into the dune sea.",traversal:"burrow",capabilities:["Fast underground travel","Erupt leap to clear chasms","Detects nearby heat signatures"],habitatPlanetIds:["ember-planet"],temperament:"wild",handling:"unpredictable",topSpeedRating:5,travelFantasy:"Hold tight as a sand worm pulls you beneath the ember dunes and launches you out in a shower of glowing grit."}],hx=[{id:"small-explorer-manifesto",title:"Small Explorer. Massive Adventure.",category:"history",snippet:"Tiny Titan’s first rule: if you can carry it, you can conquer it.",body:`Tiny Titans don’t win by being bigger. They win by being curious, quick, and stubborn enough to turn weird problems into wonderful solutions. The universe is full of places that look impossible until you take the first tiny step and realize the rules are bendier than they seem.

If a cliff is too tall, climb it. If the air is too thin, bottle it. If the monsters are too mean, distract them with something shinier. Adventure is not about the size of the danger; it’s about the size of the grin you wear while outsmarting it.`,tags:["tone","brand","exploration"],related:{planets:["crystal-planet","mushroom-planet","ember-planet"],weapons:[],creatures:[],mounts:[]}},{id:"prismwell-resonance",title:"The Prism Well and the Quiet Storm",category:"mystery",snippet:"When the Orb Moths gather, the storm charge settles like a lullaby.",body:`On the Crystal Planet, storms don’t just strike. They sing. The Prism Well refracts more than light; it bends vibration. Travelers report that lightning slows when Orb Moths spiral around the nearest spires, as if the moths are tuning the air.

Glowtails seem to know the pattern. They trace safe arcs across the ice right before the resonance peaks, leaving bright trails that mark routes through mirror crevasses. Some explorers believe the Prism Well is not a hole, but an instrument waiting for the right chord.`,tags:["crystal","weather","mystery"],related:{planets:["crystal-planet"],weapons:[],creatures:["orb-moth","glowtail"],mounts:["sky-whale"]}},{id:"mycelium-memory",title:"Mycelium Memory: The Forest That Remembers",category:"history",snippet:"The Mushroom Planet records footsteps like ink on paper, then hides the page.",body:`The myco-jungle isn’t just alive; it’s connected. Every trunk and thread of mycelium shares pressure, warmth, and chemical messages. Old-timers say you can ask the Lantern Grove a question by walking a pattern through the clearing, then waiting for the glow to answer.

The Blink Hoppers treat the network like a playground. They flicker from root to root, teasing predators into chasing shadows. Chompers, on the other hand, listen for panic. The difference between a safe hike and a sudden snap is often the rhythm of your steps.`,tags:["mushroom","network","survival"],related:{planets:["mushroom-planet"],weapons:["bubble-blaster","disco-ray"],creatures:["blink-hopper","chomper","plasma-slime"],mounts:["rocket-snail"]}},{id:"emberstone-craft",title:"Emberstone Craft and Basalt Fiber",category:"tech",snippet:"The Ember Planet’s heat makes tools, not just trouble.",body:`Emberstone looks like rock until it warms up, then it behaves like a living ember trapped under glass. Blacksmiths who dare the vents spin basalt fibers into cords that don’t burn and don’t snap, perfect for gear that needs to survive ash cyclones.

The best builders learn to work with thermal breath instead of against it. Plasma Beetle riders use vent bursts like ramps. Gravity Hammer engineers swear the mini singularity coil stays stable longer when wrapped in basalt fiber, like the planet itself is holding the tool together.`,tags:["ember","crafting","gear"],related:{planets:["ember-planet"],weapons:["gravity-hammer"],creatures:["titan-crab"],mounts:["plasma-beetle","sand-worm"]}},{id:"bubble-foam-fieldwork",title:"Bubble Foam Fieldwork",category:"tech",snippet:"Foam isn’t a toy if it can hold a falling boulder.",body:`The Bubble Blaster’s foam cells expand into perfect spheres that distribute force across a smooth surface. That’s why bubbles can catch loose debris, cushion hard falls, and sometimes even suspend a grumpy creature long enough to escape.

Veteran explorers don’t shoot bubbles at enemies; they shoot bubbles at the world. A bubble on a ledge becomes a step. A bubble in a vent stream becomes a drifting platform. Foam is the polite way to tell physics to calm down.`,tags:["gadget","movement","improvisation"],related:{planets:["mushroom-planet","crystal-planet"],weapons:["bubble-blaster"],creatures:[],mounts:[]}},{id:"disco-ray-marks",title:"Neon Marks and the Disco Ray",category:"tech",snippet:"A bright target is a safer target—because you can see it coming.",body:`The Disco Ray doesn’t just stun. Its spectrum lens array paints a persistent neon mark that clings to armor, fur, or chitin and glows through dust and foliage. Explorers use the mark to track fleeing threats, but also to tag hazards for friends.

In the Lantern Grove, the light isn’t decoration. It’s language. Some swear the Grove responds better when a Disco Ray sweep matches the glow rhythm, as if the forest prefers messages in color instead of footsteps.`,tags:["weapon","tracking","light"],related:{planets:["mushroom-planet"],weapons:["disco-ray"],creatures:["blink-hopper"],mounts:[]}},{id:"titan-crab-wardens",title:"The Vent Wardens",category:"mystery",snippet:"Titan Crabs don’t guard vents for warmth. They guard them for something older.",body:`Titan Crabs move like living fortresses, but their patrol routes are too consistent to be instinct. They circle the same vents in the same order, stopping to tap their claws against basalt like they’re checking locks.

Somewhere beneath the Breathing Rift, something answers. The taps echo back with a delay that feels intentional. Explorers who linger claim the heat changes, as if the planet is listening.`,tags:["boss","ember","secrets"],related:{planets:["ember-planet"],weapons:["comet-cannon"],creatures:["titan-crab"],mounts:["sand-worm"]}},{id:"sky-whale-migration",title:"Sky Whale Migration Lines",category:"history",snippet:"Sky Whales glide along invisible lanes that only crystals can reveal.",body:`Sky Whales don’t wander. They follow migration lines, as if the air itself has roads. On the Crystal Planet, Crown Ridge spires bend light into bands that match the whales’ routes. When the aurora is bright, the lanes are clear.

Explorers who ride a Sky Whale learn quickly: you can’t force a lane. You have to trust it. The whale will drift toward the path that keeps you safe, even if it looks like it’s taking the long way around a storm.`,tags:["mount","navigation","crystal"],related:{planets:["crystal-planet"],weapons:[],creatures:["orb-moth"],mounts:["sky-whale"]}}],Yy=t=>typeof t=="object"&&t!==null&&!Array.isArray(t),Li=(t,e,n)=>{t.issues.push({path:e?`${t.path}.${e}`:t.path,message:n})},et=(t,e,n)=>typeof t=="string"&&t.length>0?t:(Li(e,n,"Expected non-empty string"),null),px=(t,e,n)=>typeof t=="number"&&Number.isFinite(t)?t:(Li(e,n,"Expected number"),null),Nn=(t,e,n)=>{if(!Array.isArray(t))return Li(e,n,"Expected string[]"),null;const i=[];for(let r=0;r<t.length;r++){const s=t[r];typeof s=="string"&&s.length>0?i.push(s):Li(e,`${n}[${r}]`,"Expected non-empty string")}return i},rc=(t,e,n,i)=>typeof t=="string"&&e.includes(t)?t:(Li(n,i,`Expected one of: ${e.join(", ")}`),null),Fs=(t,e,n)=>Array.isArray(t)?t:(Li(e,n,"Expected array"),null),lr=(t,e,n)=>Yy(t)?t:(Li(e,n,"Expected object"),null),$y=(t,e)=>{const i=Fs(t,{issues:e,path:"planets"},"");if(!i)return null;const r=[];for(let s=0;s<i.length;s++){const a=i[s],o={issues:e,path:`planets[${s}]`},l=lr(a,o,"");if(!l)continue;const c=et(l.id,o,"id"),p=et(l.name,o,"name"),u=et(l.tagline,o,"tagline"),d=et(l.description,o,"description"),m=lr(l.environment,o,"environment");let v=null;if(m){const g={issues:e,path:`${o.path}.environment`},_=et(m.biome,g,"biome"),E=et(m.atmosphere,g,"atmosphere"),A=Nn(m.hazards,g,"hazards"),b=Nn(m.resources,g,"resources");_&&E&&A&&b&&(v={biome:_,atmosphere:E,hazards:A,resources:b})}const y=Fs(l.pointsOfInterest,o,"pointsOfInterest"),x=[];if(y)for(let g=0;g<y.length;g++){const _=y[g],E={issues:e,path:`${o.path}.pointsOfInterest[${g}]`},A=lr(_,E,"");if(!A)continue;const b=et(A.id,E,"id"),C=et(A.name,E,"name"),S=et(A.detail,E,"detail");b&&C&&S&&x.push({id:b,name:C,detail:S})}const f=Nn(l.nativeCreatureIds,o,"nativeCreatureIds");c&&p&&u&&d&&v&&f&&r.push({id:c,name:p,tagline:u,description:d,environment:v,pointsOfInterest:x,nativeCreatureIds:f})}return r},Ky=(t,e)=>{const i=Fs(t,{issues:e,path:"weapons"},"");if(!i)return null;const r=[],s=["weapon","gadget"];for(let a=0;a<i.length;a++){const o={issues:e,path:`weapons[${a}]`},l=lr(i[a],o,"");if(!l)continue;const c=et(l.id,o,"id"),p=et(l.name,o,"name"),u=rc(l.category,s,o,"category"),d=et(l.tagline,o,"tagline"),m=et(l.description,o,"description"),v=et(l.primaryEffect,o,"primaryEffect"),y=et(l.secondaryEffect,o,"secondaryEffect"),x=et(l.energySource,o,"energySource"),f=et(l.unlockHint,o,"unlockHint");c&&p&&u&&d&&m&&v&&y&&x&&f&&r.push({id:c,name:p,category:u,tagline:d,description:m,primaryEffect:v,secondaryEffect:y,energySource:x,unlockHint:f})}return r},Zy=(t,e)=>{const i=Fs(t,{issues:e,path:"creatures"},"");if(!i)return null;const r=[],s=["hostile","neutral","passive"];for(let a=0;a<i.length;a++){const o={issues:e,path:`creatures[${a}]`},l=lr(i[a],o,"");if(!l)continue;const c=et(l.id,o,"id"),p=et(l.name,o,"name"),u=rc(l.role,s,o,"role"),d=et(l.behavior,o,"behavior"),m=et(l.fieldNote,o,"fieldNote"),v=Nn(l.habitatPlanetIds,o,"habitatPlanetIds"),y=px(l.dangerRating,o,"dangerRating"),x=Nn(l.tags,o,"tags");y!==null&&(y<1||y>5)&&Li(o,"dangerRating","Expected dangerRating to be between 1 and 5"),c&&p&&u&&d&&m&&v&&y!==null&&x&&r.push({id:c,name:p,role:u,behavior:d,fieldNote:m,habitatPlanetIds:v,dangerRating:y,tags:x})}return r},Qy=(t,e)=>{const i=Fs(t,{issues:e,path:"mounts"},"");if(!i)return null;const r=[],s=["ground","air","burrow","water"];for(let a=0;a<i.length;a++){const o={issues:e,path:`mounts[${a}]`},l=lr(i[a],o,"");if(!l)continue;const c=et(l.id,o,"id"),p=et(l.name,o,"name"),u=et(l.tagline,o,"tagline"),d=rc(l.traversal,s,o,"traversal"),m=Nn(l.capabilities,o,"capabilities"),v=Nn(l.habitatPlanetIds,o,"habitatPlanetIds"),y=et(l.temperament,o,"temperament"),x=et(l.handling,o,"handling"),f=px(l.topSpeedRating,o,"topSpeedRating"),g=et(l.travelFantasy,o,"travelFantasy");f!==null&&(f<1||f>5)&&Li(o,"topSpeedRating","Expected topSpeedRating to be between 1 and 5"),c&&p&&u&&d&&m&&v&&y&&x&&f!==null&&g&&r.push({id:c,name:p,tagline:u,traversal:d,capabilities:m,habitatPlanetIds:v,temperament:y,handling:x,topSpeedRating:f,travelFantasy:g})}return r},Jy=(t,e)=>{const i=Fs(t,{issues:e,path:"lore"},"");if(!i)return null;const r=[],s=["history","tech","mystery"];for(let a=0;a<i.length;a++){const o={issues:e,path:`lore[${a}]`},l=lr(i[a],o,"");if(!l)continue;const c=et(l.id,o,"id"),p=et(l.title,o,"title"),u=rc(l.category,s,o,"category"),d=et(l.snippet,o,"snippet"),m=et(l.body,o,"body"),v=Nn(l.tags,o,"tags"),y=lr(l.related,o,"related");let x=null;if(y){const f={issues:e,path:`${o.path}.related`},g=Nn(y.planets,f,"planets")??[],_=Nn(y.weapons,f,"weapons")??[],E=Nn(y.creatures,f,"creatures")??[],A=Nn(y.mounts,f,"mounts")??[];x={planets:g,weapons:_,creatures:E,mounts:A}}c&&p&&u&&d&&m&&v&&x&&r.push({id:c,title:p,category:u,snippet:d,body:m,tags:v,related:x})}return r},ea=(t,e,n)=>{const i=new Set;for(const r of e)i.has(r)&&n.push({path:t,message:`Duplicate id: ${r}`}),i.add(r)},vr=(t,e,n,i,r)=>{for(const s of e)n.has(s)||i.push({path:r,message:`${t} references missing id: ${s}`})},eS=t=>{const e=[],n=$y(t.planets,e),i=Ky(t.weapons,e),r=Zy(t.creatures,e),s=Qy(t.mounts,e),a=Jy(t.lore,e);if(!n||!i||!r||!s||!a)return{ok:!1,issues:e};ea("planets",n.map(u=>u.id),e),ea("weapons",i.map(u=>u.id),e),ea("creatures",r.map(u=>u.id),e),ea("mounts",s.map(u=>u.id),e),ea("lore",a.map(u=>u.id),e);const o=new Set(n.map(u=>u.id)),l=new Set(i.map(u=>u.id)),c=new Set(r.map(u=>u.id)),p=new Set(s.map(u=>u.id));for(let u=0;u<n.length;u++)vr("Planet.nativeCreatureIds",n[u].nativeCreatureIds,c,e,`planets[${u}].nativeCreatureIds`);for(let u=0;u<r.length;u++)vr("Creature.habitatPlanetIds",r[u].habitatPlanetIds,o,e,`creatures[${u}].habitatPlanetIds`);for(let u=0;u<s.length;u++)vr("Mount.habitatPlanetIds",s[u].habitatPlanetIds,o,e,`mounts[${u}].habitatPlanetIds`);for(let u=0;u<a.length;u++)vr("Lore.related.planets",a[u].related.planets,o,e,`lore[${u}].related.planets`),vr("Lore.related.weapons",a[u].related.weapons,l,e,`lore[${u}].related.weapons`),vr("Lore.related.creatures",a[u].related.creatures,c,e,`lore[${u}].related.creatures`),vr("Lore.related.mounts",a[u].related.mounts,p,e,`lore[${u}].related.mounts`);return e.length>0?{ok:!1,issues:e}:{ok:!0,content:{planets:n,weapons:i,creatures:r,mounts:s,lore:a},issues:e}},tS=()=>{const t=eS({planets:jy,weapons:Wy,creatures:Xy,mounts:qy,lore:hx});return t.ok?t:{ok:!1,issues:t.issues}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="184",nS=0,Gp=1,iS=2,rl=1,rS=2,fa=3,dr=0,hn=1,Si=2,Ti=0,As=1,jp=2,Wp=3,Xp=4,sS=5,Tr=100,aS=101,oS=102,lS=103,cS=104,uS=200,dS=201,fS=202,hS=203,hd=204,pd=205,pS=206,mS=207,gS=208,xS=209,vS=210,_S=211,yS=212,SS=213,MS=214,md=0,gd=1,xd=2,ks=3,vd=4,_d=5,yd=6,Sd=7,mx=0,ES=1,wS=2,oi=0,gx=1,xx=2,vx=3,_x=4,yx=5,Sx=6,Mx=7,Ex=300,zr=301,Os=302,Fc=303,kc=304,sc=306,Va=1e3,wi=1001,Md=1002,Vt=1003,bS=1004,Mo=1005,Zt=1006,Oc=1007,Pr=1008,_n=1009,wx=1010,bx=1011,Ha=1012,ih=1013,ui=1014,ii=1015,Di=1016,rh=1017,sh=1018,Ga=1020,Tx=35902,Ax=35899,Cx=1021,Rx=1022,jn=1023,Ii=1026,Lr=1027,Nx=1028,ah=1029,Vr=1030,oh=1031,lh=1033,sl=33776,al=33777,ol=33778,ll=33779,Ed=35840,wd=35841,bd=35842,Td=35843,Ad=36196,Cd=37492,Rd=37496,Nd=37488,Pd=37489,Ul=37490,Ld=37491,Dd=37808,Id=37809,Ud=37810,Fd=37811,kd=37812,Od=37813,Bd=37814,zd=37815,Vd=37816,Hd=37817,Gd=37818,jd=37819,Wd=37820,Xd=37821,qd=36492,Yd=36494,$d=36495,Kd=36283,Zd=36284,Fl=36285,Qd=36286,TS=3200,Jd=0,AS=1,Ki="",on="srgb",kl="srgb-linear",Ol="linear",tt="srgb",Yr=7680,qp=519,CS=512,RS=513,NS=514,ch=515,PS=516,LS=517,uh=518,DS=519,Yp=35044,$p="300 es",ri=2e3,ja=2001;function IS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function US(){const t=Wa("canvas");return t.style.display="block",t}const Kp={};function Zp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Px(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=Px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=Px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ef(...t){const e=t.join(" ");e in Kp||(Kp[e]=!0,Ne(...t))}function FS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const kS={[md]:gd,[xd]:yd,[vd]:Sd,[ks]:_d,[gd]:md,[yd]:xd,[Sd]:vd,[_d]:ks};class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,tf=180/Math.PI;function Za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function OS(t,e){return(t%e+e)%e}function zc(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const _h=class _h{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;let $e=_h;class js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],u=i[r+3],d=s[a+0],m=s[a+1],v=s[a+2],y=s[a+3];if(u!==y||l!==d||c!==m||p!==v){let x=l*d+c*m+p*v+u*y;x<0&&(d=-d,m=-m,v=-v,y=-y,x=-x);let f=1-o;if(x<.9995){const g=Math.acos(x),_=Math.sin(g);f=Math.sin(f*g)/_,o=Math.sin(o*g)/_,l=l*f+d*o,c=c*f+m*o,p=p*f+v*o,u=u*f+y*o}else{l=l*f+d*o,c=c*f+m*o,p=p*f+v*o,u=u*f+y*o;const g=1/Math.sqrt(l*l+c*c+p*p+u*u);l*=g,c*=g,p*=g,u*=g}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],u=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+p*u+l*m-c*d,e[n+1]=l*v+p*d+c*u-o*m,e[n+2]=c*v+p*m+o*d-l*u,e[n+3]=p*v-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),u=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*p*u+c*m*v,this._y=c*m*u-d*p*v,this._z=c*p*v+d*m*u,this._w=c*p*u-d*m*v;break;case"YXZ":this._x=d*p*u+c*m*v,this._y=c*m*u-d*p*v,this._z=c*p*v-d*m*u,this._w=c*p*u+d*m*v;break;case"ZXY":this._x=d*p*u-c*m*v,this._y=c*m*u+d*p*v,this._z=c*p*v+d*m*u,this._w=c*p*u-d*m*v;break;case"ZYX":this._x=d*p*u-c*m*v,this._y=c*m*u+d*p*v,this._z=c*p*v-d*m*u,this._w=c*p*u+d*m*v;break;case"YZX":this._x=d*p*u+c*m*v,this._y=c*m*u+d*p*v,this._z=c*p*v-d*m*u,this._w=c*p*u-d*m*v;break;case"XZY":this._x=d*p*u-c*m*v,this._y=c*m*u-d*p*v,this._z=c*p*v+d*m*u,this._w=c*p*u+d*m*v;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],u=n[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(p-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(p-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+p)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yh=class yh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),p=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+l*c+a*u-o*p,this.y=i+l*p+o*c-s*u,this.z=r+l*u+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;let B=yh;const Vc=new B,Qp=new js,Sh=class Sh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],u=i[7],d=i[2],m=i[5],v=i[8],y=r[0],x=r[3],f=r[6],g=r[1],_=r[4],E=r[7],A=r[2],b=r[5],C=r[8];return s[0]=a*y+o*g+l*A,s[3]=a*x+o*_+l*b,s[6]=a*f+o*E+l*C,s[1]=c*y+p*g+u*A,s[4]=c*x+p*_+u*b,s[7]=c*f+p*E+u*C,s[2]=d*y+m*g+v*A,s[5]=d*x+m*_+v*b,s[8]=d*f+m*E+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],u=p*a-o*c,d=o*l-p*s,m=c*s-a*l,v=n*u+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=u*y,e[1]=(r*c-p*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(p*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;let Ie=Sh;const Hc=new Ie,Jp=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BS(){const t={enabled:!0,workingColorSpace:kl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Cs(r.r),r.g=Cs(r.g),r.b=Cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Ol:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ef("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ef("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[kl]:{primaries:e,whitePoint:i,transfer:Ol,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),t}const Ye=BS();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class zS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=Wa("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gc(r[a].image)):s.push(Gc(r[a]))}else s=Gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let HS=0;const jc=new B;class Qt extends jr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=wi,r=wi,s=Zt,a=Pr,o=jn,l=_n,c=Qt.DEFAULT_ANISOTROPY,p=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Za(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Ex;Qt.DEFAULT_ANISOTROPY=1;const Mh=class Mh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],u=l[8],d=l[1],m=l[5],v=l[9],y=l[2],x=l[6],f=l[10];if(Math.abs(p-d)<.01&&Math.abs(u-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(p+d)<.1&&Math.abs(u+y)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,E=(m+1)/2,A=(f+1)/2,b=(p+d)/4,C=(u+y)/4,S=(v+x)/4;return _>E&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=S/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-v)*(x-v)+(u-y)*(u-y)+(d-p)*(d-p));return Math.abs(g)<.001&&(g=1),this.x=(x-v)/g,this.y=(u-y)/g,this.z=(d-p)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;let Et=Mh;class GS extends jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new dh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends GS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Lx extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jS extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zl=class zl{constructor(e,n,i,r,s,a,o,l,c,p,u,d,m,v,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,p,u,d,m,v,y,x)}set(e,n,i,r,s,a,o,l,c,p,u,d,m,v,y,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=p,f[10]=u,f[14]=d,f[3]=m,f[7]=v,f[11]=y,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*p,m=a*u,v=o*p,y=o*u;n[0]=l*p,n[4]=-l*u,n[8]=c,n[1]=m+v*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*p,m=l*u,v=c*p,y=c*u;n[0]=d+y*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*u,n[5]=a*p,n[9]=-o,n[2]=m*o-v,n[6]=y+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*p,m=l*u,v=c*p,y=c*u;n[0]=d-y*o,n[4]=-a*u,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*p,n[9]=y-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*p,m=a*u,v=o*p,y=o*u;n[0]=l*p,n[4]=v*c-m,n[8]=d*c+y,n[1]=l*u,n[5]=y*c+d,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,y=o*c;n[0]=l*p,n[4]=y-d*u,n[8]=v*u+m,n[1]=u,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=m*u+v,n[10]=d-y*u}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,y=o*c;n[0]=l*p,n[4]=-u,n[8]=c*p,n[1]=d*u+y,n[5]=a*p,n[9]=m*u-v,n[2]=v*u-m,n[6]=o*p,n[10]=y*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WS,e,XS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),zi.crossVectors(i,gn),zi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),zi.crossVectors(i,gn)),zi.normalize(),Eo.crossVectors(gn,zi),r[0]=zi.x,r[4]=Eo.x,r[8]=gn.x,r[1]=zi.y,r[5]=Eo.y,r[9]=gn.y,r[2]=zi.z,r[6]=Eo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],u=i[5],d=i[9],m=i[13],v=i[2],y=i[6],x=i[10],f=i[14],g=i[3],_=i[7],E=i[11],A=i[15],b=r[0],C=r[4],S=r[8],R=r[12],P=r[1],N=r[5],k=r[9],q=r[13],J=r[2],U=r[6],j=r[10],z=r[14],O=r[3],W=r[7],Q=r[11],ae=r[15];return s[0]=a*b+o*P+l*J+c*O,s[4]=a*C+o*N+l*U+c*W,s[8]=a*S+o*k+l*j+c*Q,s[12]=a*R+o*q+l*z+c*ae,s[1]=p*b+u*P+d*J+m*O,s[5]=p*C+u*N+d*U+m*W,s[9]=p*S+u*k+d*j+m*Q,s[13]=p*R+u*q+d*z+m*ae,s[2]=v*b+y*P+x*J+f*O,s[6]=v*C+y*N+x*U+f*W,s[10]=v*S+y*k+x*j+f*Q,s[14]=v*R+y*q+x*z+f*ae,s[3]=g*b+_*P+E*J+A*O,s[7]=g*C+_*N+E*U+A*W,s[11]=g*S+_*k+E*j+A*Q,s[15]=g*R+_*q+E*z+A*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],u=e[6],d=e[10],m=e[14],v=e[3],y=e[7],x=e[11],f=e[15],g=l*m-c*d,_=o*m-c*u,E=o*d-l*u,A=a*m-c*p,b=a*d-l*p,C=a*u-o*p;return n*(y*g-x*_+f*E)-i*(v*g-x*A+f*b)+r*(v*_-y*A+f*C)-s*(v*E-y*b+x*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],u=e[9],d=e[10],m=e[11],v=e[12],y=e[13],x=e[14],f=e[15],g=n*o-i*a,_=n*l-r*a,E=n*c-s*a,A=i*l-r*o,b=i*c-s*o,C=r*c-s*l,S=p*y-u*v,R=p*x-d*v,P=p*f-m*v,N=u*x-d*y,k=u*f-m*y,q=d*f-m*x,J=g*q-_*k+E*N+A*P-b*R+C*S;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/J;return e[0]=(o*q-l*k+c*N)*U,e[1]=(r*k-i*q-s*N)*U,e[2]=(y*C-x*b+f*A)*U,e[3]=(d*b-u*C-m*A)*U,e[4]=(l*P-a*q-c*R)*U,e[5]=(n*q-r*P+s*R)*U,e[6]=(x*E-v*C-f*_)*U,e[7]=(p*C-d*E+m*_)*U,e[8]=(a*k-o*P+c*S)*U,e[9]=(i*P-n*k-s*S)*U,e[10]=(v*b-y*E+f*g)*U,e[11]=(u*E-p*b-m*g)*U,e[12]=(o*R-a*N-l*S)*U,e[13]=(n*N-i*R+r*S)*U,e[14]=(y*_-v*A-x*g)*U,e[15]=(p*A-u*_+d*g)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,p=a+a,u=o+o,d=s*c,m=s*p,v=s*u,y=a*p,x=a*u,f=o*u,g=l*c,_=l*p,E=l*u,A=i.x,b=i.y,C=i.z;return r[0]=(1-(y+f))*A,r[1]=(m+E)*A,r[2]=(v-_)*A,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(d+f))*b,r[6]=(x+g)*b,r[7]=0,r[8]=(v+_)*C,r[9]=(x-g)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),l=Kr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const c=1/a,p=1/o,u=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=p,kn.elements[5]*=p,kn.elements[6]*=p,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ri,l=!1){const c=this.elements,p=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let v,y;if(l)v=s/(a-s),y=a*s/(a-s);else if(o===ri)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ja)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ri,l=!1){const c=this.elements,p=2/(n-e),u=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,y;if(l)v=1/(a-s),y=a/(a-s);else if(o===ri)v=-2/(a-s),y=-(a+s)/(a-s);else if(o===ja)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};zl.prototype.isMatrix4=!0;let Ct=zl;const Kr=new B,kn=new Ct,WS=new B(0,0,0),XS=new B(1,1,1),zi=new B,Eo=new B,gn=new B,tm=new Ct,nm=new js;class fr{constructor(e=0,n=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],u=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qS=0;const im=new B,Zr=new js,pi=new Ct,wo=new B,na=new B,YS=new B,$S=new js,rm=new B(1,0,0),sm=new B(0,1,0),am=new B(0,0,1),om={type:"added"},KS={type:"removed"},Qr={type:"childadded",child:null},Wc={type:"childremoved",child:null};class Gt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,n=new fr,i=new js,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ie}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(na,wo,this.up):pi.lookAt(wo,na,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(pi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(KS),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,YS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,$S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bo extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const x=n.getJointPose(y,i),f=this._getHandJoint(c,y);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const p=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=p.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},To={h:0,s:0,l:0};function qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=OS(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=qc(a,s,e+1/3),this.g=qc(a,s,e),this.b=qc(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=on){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=on){const i=Ix[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Ye.workingToColorSpace($t.copy(this),e),Math.round(qe($t.r*255,0,255))*65536+Math.round(qe($t.g*255,0,255))*256+Math.round(qe($t.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=p<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=on){Ye.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==on?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(To);const i=zc(Vi.h,To.h,n),r=zc(Vi.s,To.s,n),s=zc(Vi.l,To.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ze;ze.NAMES=Ix;class fh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=n}clone(){return new fh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class QS extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const On=new B,mi=new B,Yc=new B,gi=new B,Jr=new B,es=new B,lm=new B,$c=new B,Kc=new B,Zc=new B,Qc=new Et,Jc=new Et,eu=new Et;class Gn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),mi.subVectors(i,n),Yc.subVectors(e,n);const a=On.dot(On),o=On.dot(mi),l=On.dot(Yc),c=mi.dot(mi),p=mi.dot(Yc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-o*p)*d,v=(a*p-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qc.setScalar(0),Jc.setScalar(0),eu.setScalar(0),Qc.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qc,s.x),a.addScaledVector(Jc,s.y),a.addScaledVector(eu,s.z),a}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),mi.subVectors(e,n),On.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),On.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),$c.subVectors(e,i);const l=Jr.dot($c),c=es.dot($c);if(l<=0&&c<=0)return n.copy(i);Kc.subVectors(e,r);const p=Jr.dot(Kc),u=es.dot(Kc);if(p>=0&&u<=p)return n.copy(r);const d=l*u-p*c;if(d<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Jr,a);Zc.subVectors(e,s);const m=Jr.dot(Zc),v=es.dot(Zc);if(v>=0&&m<=v)return n.copy(s);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(es,o);const x=p*v-m*u;if(x<=0&&u-p>=0&&m-v>=0)return lm.subVectors(s,r),o=(u-p)/(u-p+(m-v)),n.copy(r).addScaledVector(lm,o);const f=1/(x+y+d);return a=y*f,o=d*f,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qa{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Co.subVectors(this.max,ia),ts.subVectors(e.a,ia),ns.subVectors(e.b,ia),is.subVectors(e.c,ia),Hi.subVectors(ns,ts),Gi.subVectors(is,ns),_r.subVectors(ts,is);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-_r.z,_r.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,_r.z,0,-_r.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-_r.y,_r.x,0];return!tu(n,ts,ns,is,Co)||(n=[1,0,0,0,1,0,0,0,1],!tu(n,ts,ns,is,Co))?!1:(Ro.crossVectors(Hi,Gi),n=[Ro.x,Ro.y,Ro.z],tu(n,ts,ns,is,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new B,new B,new B,new B,new B,new B,new B,new B],Bn=new B,Ao=new Qa,ts=new B,ns=new B,is=new B,Hi=new B,Gi=new B,_r=new B,ia=new B,Co=new B,Ro=new B,yr=new B;function tu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){yr.fromArray(t,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),p=i.dot(yr);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const Rt=new B,No=new $e;let JS=0;class ci extends jr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yp,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)No.fromBufferAttribute(this,n),No.applyMatrix3(e),this.setXY(n,No.x,No.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ux extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fx extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dn extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}const eM=new Qa,ra=new B,nu=new B;class hh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const n=ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(nu)),this.expandByPoint(ra.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tM=0;const Tn=new Ct,iu=new Gt,rs=new B,xn=new Qa,sa=new Qa,kt=new B;class fi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IS(e)?Fx:Ux)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(xn.min,sa.min),xn.expandByPoint(kt),kt.addVectors(xn.max,sa.max),xn.expandByPoint(kt)):(xn.expandByPoint(sa.min),xn.expandByPoint(sa.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)kt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),kt.add(rs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new B,l[S]=new B;const c=new B,p=new B,u=new B,d=new $e,m=new $e,v=new $e,y=new B,x=new B;function f(S,R,P){c.fromBufferAttribute(i,S),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,P),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,R),v.fromBufferAttribute(s,P),p.sub(c),u.sub(c),m.sub(d),v.sub(d);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(y.copy(p).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(N),x.copy(u).multiplyScalar(m.x).addScaledVector(p,-v.x).multiplyScalar(N),o[S].add(y),o[R].add(y),o[P].add(y),l[S].add(x),l[R].add(x),l[P].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let S=0,R=g.length;S<R;++S){const P=g[S],N=P.start,k=P.count;for(let q=N,J=N+k;q<J;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const _=new B,E=new B,A=new B,b=new B;function C(S){A.fromBufferAttribute(r,S),b.copy(A);const R=o[S];_.copy(R),_.sub(A.multiplyScalar(A.dot(R))).normalize(),E.crossVectors(b,R);const N=E.dot(l[S])<0?-1:1;a.setXYZW(S,_.x,_.y,_.z,N)}for(let S=0,R=g.length;S<R;++S){const P=g[S],N=P.start,k=P.count;for(let q=N,J=N+k;q<J;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,p=new B,u=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),p.subVectors(a,s),u.subVectors(r,s),p.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),o.add(p),l.add(p),c.add(p),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),p.subVectors(a,s),u.subVectors(r,s),p.cross(u),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,u=o.normalized,d=new c.constructor(l.length*p);let m=0,v=0;for(let y=0,x=l.length;y<x;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*p;for(let f=0;f<p;f++)d[v++]=c[m++]}return new ci(d,p,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,u=c.length;p<u;p++){const d=c[p],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];p.push(m.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],u=s[c];for(let d=0,m=u.length;d<m;d++)p.push(u[d].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nM=0;class Ja extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=As,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hd&&(i.blendSrc=this.blendSrc),this.blendDst!==pd&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new B,ru=new B,Po=new B,ji=new B,su=new B,Lo=new B,au=new B;class iM{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ru.copy(e).add(n).multiplyScalar(.5),Po.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(ru);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Po),o=ji.dot(this.direction),l=-ji.dot(Po),c=ji.lengthSq(),p=Math.abs(1-a*a);let u,d,m,v;if(p>0)if(u=a*l-o,d=a*o-l,v=s*p,u>=0)if(d>=-v)if(d<=v){const y=1/p;u*=y,d*=y,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ru).addScaledVector(Po,d),m}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),p>=0?(s=(e.min.y-d.y)*p,a=(e.max.y-d.y)*p):(s=(e.max.y-d.y)*p,a=(e.min.y-d.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){su.subVectors(n,e),Lo.subVectors(i,e),au.crossVectors(su,Lo);let a=this.direction.dot(au),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ji.subVectors(this.origin,e);const l=o*this.direction.dot(Lo.crossVectors(ji,Lo));if(l<0)return null;const c=o*this.direction.dot(su.cross(ji));if(c<0||l+c>a)return null;const p=-o*ji.dot(au);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kx extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cm=new Ct,Sr=new iM,Do=new hh,um=new B,Io=new B,Uo=new B,Fo=new B,ou=new B,ko=new B,dm=new B,Oo=new B;class Yn extends Gt{constructor(e=new fi,n=new kx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],u=s[l];p!==0&&(ou.fromBufferAttribute(u,e),a?ko.addScaledVector(ou,p):ko.addScaledVector(ou.sub(n),p))}n.add(ko)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Do.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Do,um)===null||Sr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const x=d[v],f=a[x.materialIndex],g=Math.max(x.start,m.start),_=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let E=g,A=_;E<A;E+=3){const b=o.getX(E),C=o.getX(E+1),S=o.getX(E+2);r=Bo(this,f,e,i,c,p,u,b,C,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=v,f=y;x<f;x+=3){const g=o.getX(x),_=o.getX(x+1),E=o.getX(x+2);r=Bo(this,a,e,i,c,p,u,g,_,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const x=d[v],f=a[x.materialIndex],g=Math.max(x.start,m.start),_=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let E=g,A=_;E<A;E+=3){const b=E,C=E+1,S=E+2;r=Bo(this,f,e,i,c,p,u,b,C,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=v,f=y;x<f;x+=3){const g=x,_=x+1,E=x+2;r=Bo(this,a,e,i,c,p,u,g,_,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function rM(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===dr,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oo);return c<n.near||c>n.far?null:{distance:c,point:Oo.clone(),object:t}}function Bo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Io),t.getVertexPosition(l,Uo),t.getVertexPosition(c,Fo);const p=rM(t,e,n,i,Io,Uo,Fo,dm);if(p){const u=new B;Gn.getBarycoord(dm,Io,Uo,Fo,u),r&&(p.uv=Gn.getInterpolatedAttribute(r,o,l,c,u,new $e)),s&&(p.uv1=Gn.getInterpolatedAttribute(s,o,l,c,u,new $e)),a&&(p.normal=Gn.getInterpolatedAttribute(a,o,l,c,u,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};Gn.getNormal(Io,Uo,Fo,d.normal),p.face=d,p.barycoord=u}return p}class sM extends Qt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Vt,p=Vt,u,d){super(null,a,o,l,c,p,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=new B,aM=new B,oM=new Ie;class br{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lu.subVectors(i,n).cross(aM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(lu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oM.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new hh,lM=new $e(.5,.5),zo=new B;class ph{constructor(e=new br,n=new br,i=new br,r=new br,s=new br,a=new br){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],u=s[5],d=s[6],m=s[7],v=s[8],y=s[9],x=s[10],f=s[11],g=s[12],_=s[13],E=s[14],A=s[15];if(r[0].setComponents(c-a,m-p,f-v,A-g).normalize(),r[1].setComponents(c+a,m+p,f+v,A+g).normalize(),r[2].setComponents(c+o,m+u,f+y,A+_).normalize(),r[3].setComponents(c-o,m-u,f-y,A-_).normalize(),i)r[4].setComponents(l,d,x,E).normalize(),r[5].setComponents(c-l,m-d,f-x,A-E).normalize();else if(r[4].setComponents(c-l,m-d,f-x,A-E).normalize(),n===ri)r[5].setComponents(c+l,m+d,f+x,A+E).normalize();else if(n===ja)r[5].setComponents(l,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const n=lM.distanceTo(e.center);return Mr.radius=.7071067811865476+n,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ox extends Qt{constructor(e=[],n=zr,i,r,s,a,o,l,c,p){super(e,n,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bs extends Qt{constructor(e,n,i=ui,r,s,a,o=Vt,l=Vt,c,p=Ii,u=1){if(p!==Ii&&p!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:u};super(d,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cM extends Bs{constructor(e,n=ui,i=zr,r,s,a=Vt,o=Vt,l,c=Ii){const p={width:e,height:e,depth:1},u=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bx extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends fi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(p,3)),this.setAttribute("uv",new Dn(u,2));function v(y,x,f,g,_,E,A,b,C,S,R){const P=E/C,N=A/S,k=E/2,q=A/2,J=b/2,U=C+1,j=S+1;let z=0,O=0;const W=new B;for(let Q=0;Q<j;Q++){const ae=Q*N-q;for(let fe=0;fe<U;fe++){const Ve=fe*P-k;W[y]=Ve*g,W[x]=ae*_,W[f]=J,c.push(W.x,W.y,W.z),W[y]=0,W[x]=0,W[f]=b>0?1:-1,p.push(W.x,W.y,W.z),u.push(fe/C),u.push(1-Q/S),z+=1}}for(let Q=0;Q<S;Q++)for(let ae=0;ae<C;ae++){const fe=d+ae+U*Q,Ve=d+ae+U*(Q+1),je=d+(ae+1)+U*(Q+1),Pe=d+(ae+1)+U*Q;l.push(fe,Ve,Pe),l.push(Ve,je,Pe),O+=6}o.addGroup(m,O,R),m+=O,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mh extends fi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),p(),this.setAttribute("position",new Dn(s,3)),this.setAttribute("normal",new Dn(s.slice(),3)),this.setAttribute("uv",new Dn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new B,E=new B,A=new B;for(let b=0;b<n.length;b+=3)m(n[b+0],_),m(n[b+1],E),m(n[b+2],A),l(_,E,A,g)}function l(g,_,E,A){const b=A+1,C=[];for(let S=0;S<=b;S++){C[S]=[];const R=g.clone().lerp(E,S/b),P=_.clone().lerp(E,S/b),N=b-S;for(let k=0;k<=N;k++)k===0&&S===b?C[S][k]=R:C[S][k]=R.clone().lerp(P,k/N)}for(let S=0;S<b;S++)for(let R=0;R<2*(b-S)-1;R++){const P=Math.floor(R/2);R%2===0?(d(C[S][P+1]),d(C[S+1][P]),d(C[S][P])):(d(C[S][P+1]),d(C[S+1][P+1]),d(C[S+1][P]))}}function c(g){const _=new B;for(let E=0;E<s.length;E+=3)_.x=s[E+0],_.y=s[E+1],_.z=s[E+2],_.normalize().multiplyScalar(g),s[E+0]=_.x,s[E+1]=_.y,s[E+2]=_.z}function p(){const g=new B;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const E=x(g)/2/Math.PI+.5,A=f(g)/Math.PI+.5;a.push(E,1-A)}v(),u()}function u(){for(let g=0;g<a.length;g+=6){const _=a[g+0],E=a[g+2],A=a[g+4],b=Math.max(_,E,A),C=Math.min(_,E,A);b>.9&&C<.1&&(_<.2&&(a[g+0]+=1),E<.2&&(a[g+2]+=1),A<.2&&(a[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function m(g,_){const E=g*3;_.x=e[E+0],_.y=e[E+1],_.z=e[E+2]}function v(){const g=new B,_=new B,E=new B,A=new B,b=new $e,C=new $e,S=new $e;for(let R=0,P=0;R<s.length;R+=9,P+=6){g.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),E.set(s[R+6],s[R+7],s[R+8]),b.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),S.set(a[P+4],a[P+5]),A.copy(g).add(_).add(E).divideScalar(3);const N=x(A);y(b,P+0,g,N),y(C,P+2,_,N),y(S,P+4,E,N)}}function y(g,_,E,A){A<0&&g.x===1&&(a[_]=g.x-1),E.x===0&&E.z===0&&(a[_]=A/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.vertices,e.indices,e.radius,e.detail)}}class gh extends mh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new gh(e.radius,e.detail)}}class to extends fi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,u=e/o,d=n/l,m=[],v=[],y=[],x=[];for(let f=0;f<p;f++){const g=f*d-a;for(let _=0;_<c;_++){const E=_*u-s;v.push(E,-g,0),y.push(0,0,1),x.push(_/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const _=g+c*f,E=g+c*(f+1),A=g+1+c*(f+1),b=g+1+c*f;m.push(_,E,b),m.push(E,A,b)}this.setIndex(m),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(fm(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(fm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function fm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function uM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const dM={clone:zs,merge:en};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=uM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pM extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vx extends Ja{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mM extends Vx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gM extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xM extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(hm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!hm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function hm(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class vM{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(p){o++,s===!1&&r.onStart!==void 0&&r.onStart(p,a,o),s=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,u){return c.push(p,u),this},this.removeHandler=function(p){const u=c.indexOf(p);return u!==-1&&c.splice(u,2),this},this.getHandler=function(p){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _M=new vM;class xh{constructor(e){this.manager=e!==void 0?e:_M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ss=new WeakMap;class yM extends xh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cu.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let u=ss.get(a);u===void 0&&(u=[],ss.set(a,u)),u.push({onLoad:n,onError:r})}return a}const o=Wa("img");function l(){p(),n&&n(this);const u=ss.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}ss.delete(this),s.manager.itemEnd(e)}function c(u){p(),r&&r(u),cu.remove(`image:${e}`);const d=ss.get(this)||[];for(let m=0;m<d.length;m++){const v=d[m];v.onError&&v.onError(u)}ss.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),cu.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class SM extends xh{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,a=new yM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Hx extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class MM extends Hx{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const uu=new Ct,pm=new B,mm=new B;class EM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mm),n.updateMatrixWorld(),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ja||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new B,Ho=new js,Qn=new B;class Gx extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Ho,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Vo,Ho,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new B,gm=new $e,xm=new $e;class Rn extends Gx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,gm,xm),n.subVectors(xm,gm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vh extends Gx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wM extends EM{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bM extends Hx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new wM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const as=-90,os=1;class TM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(as,os,e,n);r.layers=this.layers,this.add(r);const s=new Rn(as,os,e,n);s.layers=this.layers,this.add(s);const a=new Rn(as,os,e,n);a.layers=this.layers,this.add(a);const o=new Rn(as,os,e,n);o.layers=this.layers,this.add(o);const l=new Rn(as,os,e,n);l.layers=this.layers,this.add(l);const c=new Rn(as,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(u,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class AM extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class CM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Eh=class Eh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Eh.prototype.isMatrix2=!0;let vm=Eh;function _m(t,e,n,i){const r=RM(i);switch(n){case Cx:return t*e;case Nx:return t*e/r.components*r.byteLength;case ah:return t*e/r.components*r.byteLength;case Vr:return t*e*2/r.components*r.byteLength;case oh:return t*e*2/r.components*r.byteLength;case Rx:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case lh:return t*e*4/r.components*r.byteLength;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:case Td:return Math.max(t,16)*Math.max(e,8)/4;case Ed:case bd:return Math.max(t,8)*Math.max(e,8)/2;case Ad:case Cd:case Nd:case Pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rd:case Ul:case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qd:case Yd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kd:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fl:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RM(t){switch(t){case _n:case wx:return{byteLength:1,components:1};case Ha:case bx:case Di:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case ui:case ih:case ii:return{byteLength:4,components:1};case Tx:case Ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NM(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,p),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const p=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,p);else{u.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<u.length;m++){const v=u[d],y=u[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,u[d]=y)}u.length=d+1;for(let m=0,v=u.length;m<v;m++){const y=u[m];t.bufferSubData(c,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",l1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,E1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ow=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:PM,alphahash_pars_fragment:LM,alphamap_fragment:DM,alphamap_pars_fragment:IM,alphatest_fragment:UM,alphatest_pars_fragment:FM,aomap_fragment:kM,aomap_pars_fragment:OM,batching_pars_vertex:BM,batching_vertex:zM,begin_vertex:VM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:jM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:$M,color_fragment:KM,color_pars_fragment:ZM,color_pars_vertex:QM,color_vertex:JM,common:e1,cube_uv_reflection_fragment:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:a1,colorspace_fragment:o1,colorspace_pars_fragment:l1,envmap_fragment:c1,envmap_common_pars_fragment:u1,envmap_pars_fragment:d1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:E1,envmap_vertex:h1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:x1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:S1,lights_pars_begin:M1,lights_toon_fragment:w1,lights_toon_pars_fragment:b1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:C1,lights_physical_pars_fragment:R1,lights_fragment_begin:N1,lights_fragment_maps:P1,lights_fragment_end:L1,lightprobes_pars_fragment:D1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:k1,map_fragment:O1,map_pars_fragment:B1,map_particle_fragment:z1,map_particle_pars_fragment:V1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:G1,morphinstance_vertex:j1,morphcolor_vertex:W1,morphnormal_vertex:X1,morphtarget_pars_vertex:q1,morphtarget_vertex:Y1,normal_fragment_begin:$1,normal_fragment_maps:K1,normal_pars_fragment:Z1,normal_pars_vertex:Q1,normal_vertex:J1,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:aE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:xE,skinning_pars_vertex:vE,skinning_vertex:_E,skinnormal_vertex:yE,specularmap_fragment:SE,specularmap_pars_fragment:ME,tonemapping_fragment:EE,tonemapping_pars_fragment:wE,transmission_fragment:bE,transmission_pars_fragment:TE,uv_pars_fragment:AE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:NE,background_vert:PE,background_frag:LE,backgroundCube_vert:DE,backgroundCube_frag:IE,cube_vert:UE,cube_frag:FE,depth_vert:kE,depth_frag:OE,distance_vert:BE,distance_frag:zE,equirect_vert:VE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:jE,meshbasic_vert:WE,meshbasic_frag:XE,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:$E,meshmatcap_frag:KE,meshnormal_vert:ZE,meshnormal_frag:QE,meshphong_vert:JE,meshphong_frag:ew,meshphysical_vert:tw,meshphysical_frag:nw,meshtoon_vert:iw,meshtoon_frag:rw,points_vert:sw,points_frag:aw,shadow_vert:ow,shadow_frag:lw,sprite_vert:cw,sprite_frag:uw},pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ti={basic:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:en([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:en([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:en([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:en([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:en([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:en([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:en([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:en([pe.lights,pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:en([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Go={r:0,b:0,g:0},dw=new Ct,Wx=new Ie;Wx.set(-1,0,0,0,1,0,0,0,1);function fw(t,e,n,i,r,s){const a=new ze(0);let o=r===!0?0:1,l,c,p=null,u=0,d=null;function m(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const E=g.backgroundBlurriness>0;_=e.get(_,E)}return _}function v(g){let _=!1;const E=m(g);E===null?x(a,o):E&&E.isColor&&(x(E,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(g,_){const E=m(_);E&&(E.isCubeTexture||E.mapping===sc)?(c===void 0&&(c=new Yn(new eo(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dw.makeRotationFromEuler(_.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wx),c.material.toneMapped=Ye.getTransfer(E.colorSpace)!==tt,(p!==E||u!==E.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,p=E,u=E.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Yn(new to(2,2),new di({name:"BackgroundMaterial",uniforms:zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||u!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,p=E,u=E.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,_){g.getRGB(Go,zx(t)),n.buffers.color.setClear(Go.r,Go.g,Go.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),o=_,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:v,addToRenderList:y,dispose:f}}function hw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,k,q,J,U){let j=!1;const z=u(N,J,q,k);s!==z&&(s=z,c(s.object)),j=m(N,J,q,U),j&&v(N,J,q,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(N,k,q,J),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function p(N){return t.deleteVertexArray(N)}function u(N,k,q,J){const U=J.wireframe===!0;let j=i[k.id];j===void 0&&(j={},i[k.id]=j);const z=N.isInstancedMesh===!0?N.id:0;let O=j[z];O===void 0&&(O={},j[z]=O);let W=O[q.id];W===void 0&&(W={},O[q.id]=W);let Q=W[U];return Q===void 0&&(Q=d(l()),W[U]=Q),Q}function d(N){const k=[],q=[],J=[];for(let U=0;U<n;U++)k[U]=0,q[U]=0,J[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:J,object:N,attributes:{},index:null}}function m(N,k,q,J){const U=s.attributes,j=k.attributes;let z=0;const O=q.getAttributes();for(const W in O)if(O[W].location>=0){const ae=U[W];let fe=j[W];if(fe===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;z++}return s.attributesNum!==z||s.index!==J}function v(N,k,q,J){const U={},j=k.attributes;let z=0;const O=q.getAttributes();for(const W in O)if(O[W].location>=0){let ae=j[W];ae===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),U[W]=fe,z++}s.attributes=U,s.attributesNum=z,s.index=J}function y(){const N=s.newAttributes;for(let k=0,q=N.length;k<q;k++)N[k]=0}function x(N){f(N,0)}function f(N,k){const q=s.newAttributes,J=s.enabledAttributes,U=s.attributeDivisors;q[N]=1,J[N]===0&&(t.enableVertexAttribArray(N),J[N]=1),U[N]!==k&&(t.vertexAttribDivisor(N,k),U[N]=k)}function g(){const N=s.newAttributes,k=s.enabledAttributes;for(let q=0,J=k.length;q<J;q++)k[q]!==N[q]&&(t.disableVertexAttribArray(q),k[q]=0)}function _(N,k,q,J,U,j,z){z===!0?t.vertexAttribIPointer(N,k,q,U,j):t.vertexAttribPointer(N,k,q,J,U,j)}function E(N,k,q,J){y();const U=J.attributes,j=q.getAttributes(),z=k.defaultAttributeValues;for(const O in j){const W=j[O];if(W.location>=0){let Q=U[O];if(Q===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const ae=Q.normalized,fe=Q.itemSize,Ve=e.get(Q);if(Ve===void 0)continue;const je=Ve.buffer,Pe=Ve.type,$=Ve.bytesPerElement,de=Pe===t.INT||Pe===t.UNSIGNED_INT||Q.gpuType===ih;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Ce=oe.stride,De=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)f(W.location+Re,oe.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<W.locationSize;Re++)x(W.location+Re);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Re=0;Re<W.locationSize;Re++)_(W.location+Re,fe/W.locationSize,Pe,ae,Ce*$,(De+fe/W.locationSize*Re)*$,de)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)f(W.location+oe,Q.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<W.locationSize;oe++)x(W.location+oe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let oe=0;oe<W.locationSize;oe++)_(W.location+oe,fe/W.locationSize,Pe,ae,fe*$,fe/W.locationSize*oe*$,de)}}else if(z!==void 0){const ae=z[O];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(W.location,ae);break;case 3:t.vertexAttrib3fv(W.location,ae);break;case 4:t.vertexAttrib4fv(W.location,ae);break;default:t.vertexAttrib1fv(W.location,ae)}}}}g()}function A(){R();for(const N in i){const k=i[N];for(const q in k){const J=k[q];for(const U in J){const j=J[U];for(const z in j)p(j[z].object),delete j[z];delete J[U]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const k=i[N.id];for(const q in k){const J=k[q];for(const U in J){const j=J[U];for(const z in j)p(j[z].object),delete j[z];delete J[U]}}delete i[N.id]}function C(N){for(const k in i){const q=i[k];for(const J in q){const U=q[J];if(U[N.id]===void 0)continue;const j=U[N.id];for(const z in j)p(j[z].object),delete j[z];delete U[N.id]}}}function S(N){for(const k in i){const q=i[k],J=N.isInstancedMesh===!0?N.id:0,U=q[J];if(U!==void 0){for(const j in U){const z=U[j];for(const O in z)p(z[O].object),delete z[O];delete U[j]}delete q[J],Object.keys(q).length===0&&delete i[k]}}}function R(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:x,disableUnusedAttributes:g}}function pw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let d=0;for(let m=0;m<p;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function mw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const S=C===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_n&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!S)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(Ne("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const u=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:E,maxSamples:A,samples:b}}function gw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new br,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){n=p(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,f=t.get(u);if(!r||v===null||v.length===0||s&&!x)s?p(null):c();else{const g=s?0:i,_=g*4;let E=f.clippingState||null;l.value=E,E=p(v,d,_,m);for(let A=0;A!==_;++A)E[A]=n[A];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(u,d,m,v){const y=u!==null?u.length:0;let x=null;if(y!==0){if(x=l.value,v!==!0||x===null){const f=m+y*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<f)&&(x=new Float32Array(f));for(let _=0,E=m;_!==y;++_,E+=4)a.copy(u[_]).applyMatrix4(g,o),a.normal.toArray(x,E),x[E+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}const Ji=4,ym=[.125,.215,.35,.446,.526,.582],Ar=20,xw=256,aa=new vh,Sm=new ze;let du=null,fu=0,hu=0,pu=!1;const vw=new B;class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=vw}=s;du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,hu),this._renderer.xr.enabled=pu,e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zr||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Di,format:jn,colorSpace:kl,depthBuffer:!1},r=Em(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_w(s)),this._blurMaterial=Sw(s,e,n),this._ggxMaterial=yw(s,e,n)}return r}_compileMaterial(e){const n=new Yn(new fi,e);this._renderer.compile(n,aa)}_sceneToCubeUV(e,n,i,r,s){const l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Sm),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new eo,new kx({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,x=y.material;let f=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,f=!0):(x.color.copy(Sm),f=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[_],s.y,s.z)):E===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[_]));const A=this._cubeSize;ls(r,E*A,_>2?A:0,A,A),u.setRenderTarget(r),f&&u.render(y,l),u.render(e,l)}u.toneMapping=m,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zr||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ls(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,aa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),u=Math.sqrt(c*c-p*p),d=0+c*1.25,m=u*d,{_lodMax:v}=this,y=this._sizeLods[i],x=3*y*(i>v-Ji?i-v+Ji:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,ls(s,x,f,3*y,2*y),r.setRenderTarget(s),r.render(o,aa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ls(e,x,f,3*y,2*y),r.setRenderTarget(e),r.render(o,aa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const p=3,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ar-1),y=s/v,x=isFinite(s)?1+Math.floor(p*y):Ar;x>Ar&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ar}`);const f=[];let g=0;for(let C=0;C<Ar;++C){const S=C/y,R=Math.exp(-S*S/2);f.push(R),C===0?g+=R:C<x&&(g+=2*R)}for(let C=0;C<f.length;C++)f[C]=f[C]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const E=this._sizeLods[r],A=3*E*(r>_-Ji?r-_+Ji:0),b=4*(this._cubeSize-E);ls(n,A,b,3*E,2*E),l.setRenderTarget(n),l.render(u,aa)}}function _w(t){const e=[],n=[],i=[];let r=t;const s=t-Ji+1+ym.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ji?l=ym[a-t+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,u=1+c,d=[p,p,u,p,u,u,p,p,u,u,p,u],m=6,v=6,y=3,x=2,f=1,g=new Float32Array(y*v*m),_=new Float32Array(x*v*m),E=new Float32Array(f*v*m);for(let b=0;b<m;b++){const C=b%3*2/3-1,S=b>2?0:-1,R=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];g.set(R,y*v*b),_.set(d,x*v*b);const P=[b,b,b,b,b,b];E.set(P,f*v*b)}const A=new fi;A.setAttribute("position",new ci(g,y)),A.setAttribute("uv",new ci(_,x)),A.setAttribute("faceIndex",new ci(E,f)),i.push(new Yn(A,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Em(t,e,n){const i=new li(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ls(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yw(t,e,n){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Sw(t,e,n){const i=new Float32Array(Ar),r=new B(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wm(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bm(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xx extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ox(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new eo(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Yn(r,s),o=n.minFilter;return n.minFilter===Pr&&(n.minFilter=Zt),new TM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Mw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Fc||m===kc)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const y=new Xx(v.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,v=m===Fc||m===kc,y=m===zr||m===Os;if(v||y){let x=n.get(d);const f=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Mm(t)),x=v?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const g=d.image;return v&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new Mm(t)),x=v?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",p),x.texture):null}}}return d}function o(d,m){return m===Fc?d.mapping=zr:m===kc&&(d.mapping=Os),d}function l(d){let m=0;const v=6;for(let y=0;y<v;y++)d[y]!==void 0&&m++;return m===v}function c(d){const m=d.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function p(d){const m=d.target;m.removeEventListener("dispose",p);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function u(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function Ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ef("WebGLRenderer: "+i+" extension not supported."),r}}}function ww(t,e,n,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,v=u.attributes.position;let y=0;if(v===void 0)return;if(m!==null){const g=m.array;y=m.version;for(let _=0,E=g.length;_<E;_+=3){const A=g[_+0],b=g[_+1],C=g[_+2];d.push(A,b,b,C,C,A)}}else{const g=v.array;y=v.version;for(let _=0,E=g.length/3-1;_<E;_+=3){const A=_+0,b=_+1,C=_+2;d.push(A,b,b,C,C,A)}}const x=new(v.count>=65535?Fx:Ux)(d,1);x.version=y;const f=s.get(u);f&&e.remove(f),s.set(u,x)}function p(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:p}}function bw(t,e,n){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){t.drawElements(i,d,s,u*a),n.update(d,i,1)}function c(u,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,u*a,m),n.update(d,i,m))}function p(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,m);let y=0;for(let x=0;x<m;x++)y+=d[x];n.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function Tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Aw(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=p!==void 0?p.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let P=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),x===!0&&(E=3);let A=o.attributes.position.count*E,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*b*4*u),S=new Lx(C,A,b,u);S.type=ii,S.needsUpdate=!0;const R=E*4;for(let N=0;N<u;N++){const k=f[N],q=g[N],J=_[N],U=A*b*4*N;for(let j=0;j<k.count;j++){const z=j*R;v===!0&&(r.fromBufferAttribute(k,j),C[U+z+0]=r.x,C[U+z+1]=r.y,C[U+z+2]=r.z,C[U+z+3]=0),y===!0&&(r.fromBufferAttribute(q,j),C[U+z+4]=r.x,C[U+z+5]=r.y,C[U+z+6]=r.z,C[U+z+7]=0),x===!0&&(r.fromBufferAttribute(J,j),C[U+z+8]=r.x,C[U+z+9]=r.y,C[U+z+10]=r.z,C[U+z+11]=J.itemSize===4?r.w:1)}}d={count:u,texture:S,size:new $e(A,b)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let x=0;x<c.length;x++)v+=c[x];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Cw(t,e,n,i,r){let s=new WeakMap;function a(c){const p=r.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==p&&(e.update(d),s.set(d,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return d}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const Rw={[gx]:"LINEAR_TONE_MAPPING",[xx]:"REINHARD_TONE_MAPPING",[vx]:"CINEON_TONE_MAPPING",[_x]:"ACES_FILMIC_TONE_MAPPING",[Sx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function Nw(t,e,n,i,r){const s=new li(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Bs(e,n):void 0}),a=new li(e,n,{type:Di,depthBuffer:!1,stencilBuffer:!1}),o=new fi;o.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const l=new pM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Yn(o,l),p=new vh(-1,1,1,-1,0,1);let u=null,d=null,m=!1,v,y=null,x=[],f=!1;this.setSize=function(g,_){s.setSize(g,_),a.setSize(g,_);for(let E=0;E<x.length;E++){const A=x[E];A.setSize&&A.setSize(g,_)}},this.setEffects=function(g){x=g,f=x.length>0&&x[0].isRenderPass===!0;const _=s.width,E=s.height;for(let A=0;A<x.length;A++){const b=x[A];b.setSize&&b.setSize(_,E)}},this.begin=function(g,_){if(m||g.toneMapping===oi&&x.length===0)return!1;if(y=_,_!==null){const E=_.width,A=_.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return f===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=oi,!0},this.hasRenderPass=function(){return f},this.end=function(g,_){g.toneMapping=v,m=!0;let E=s,A=a;for(let b=0;b<x.length;b++){const C=x[b];if(C.enabled!==!1&&(C.render(g,A,E,_),C.needsSwap!==!1)){const S=E;E=A,A=S}}if(u!==g.outputColorSpace||d!==g.toneMapping){u=g.outputColorSpace,d=g.toneMapping,l.defines={},Ye.getTransfer(u)===tt&&(l.defines.SRGB_TRANSFER="");const b=Rw[d];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(y),g.render(c,p),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const qx=new Qt,nf=new Bs(1,1),Yx=new Lx,$x=new jS,Kx=new Ox,Tm=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),Nm=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tm[r];if(s===void 0&&(s=new Float32Array(r),Tm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oc(t,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Nm.set(i),t.uniformMatrix2fv(this.addr,!1,Nm),Ft(n,i)}}function Fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Rm.set(i),t.uniformMatrix3fv(this.addr,!1,Rm),Ft(n,i)}}function kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Cm.set(i),t.uniformMatrix4fv(this.addr,!1,Cm),Ft(n,i)}}function Ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function Hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function Xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(nf.compareFunction=n.isReversedDepthBuffer()?uh:ch,s=nf):s=qx,n.setTexture2D(e||s,r)}function qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$x,r)}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kx,r)}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yx,r)}function Kw(t){switch(t){case 5126:return Pw;case 35664:return Lw;case 35665:return Dw;case 35666:return Iw;case 35674:return Uw;case 35675:return Fw;case 35676:return kw;case 5124:case 35670:return Ow;case 35667:case 35671:return Bw;case 35668:case 35672:return zw;case 35669:case 35673:return Vw;case 5125:return Hw;case 36294:return Gw;case 36295:return jw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return $w}}function Zw(t,e){t.uniform1fv(this.addr,e)}function Qw(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function Jw(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function eb(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function tb(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nb(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ib(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rb(t,e){t.uniform1iv(this.addr,e)}function sb(t,e){t.uniform2iv(this.addr,e)}function ab(t,e){t.uniform3iv(this.addr,e)}function ob(t,e){t.uniform4iv(this.addr,e)}function lb(t,e){t.uniform1uiv(this.addr,e)}function cb(t,e){t.uniform2uiv(this.addr,e)}function ub(t,e){t.uniform3uiv(this.addr,e)}function db(t,e){t.uniform4uiv(this.addr,e)}function fb(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=nf:a=qx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function hb(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$x,s[a])}function pb(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Kx,s[a])}function mb(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Yx,s[a])}function gb(t){switch(t){case 5126:return Zw;case 35664:return Qw;case 35665:return Jw;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ab;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}class xb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Kw(n.type)}}class vb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gb(n.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function Pm(t,e){t.seq.push(e),t.map[e.id]=e}function yb(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),a=mu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pm(n,c===void 0?new xb(o,t,e):new vb(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new _b(o),Pm(n,u)),n=u}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);yb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Sb=37297;let Mb=0;function Eb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Dm=new Ie;function wb(t){Ye._getMatrix(Dm,Ye.workingColorSpace,t);const e=`mat3( ${Dm.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Ol:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Eb(t.getShaderSource(e),o)}else return s}function bb(t,e){const n=wb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Tb={[gx]:"Linear",[xx]:"Reinhard",[vx]:"Cineon",[_x]:"ACESFilmic",[Sx]:"AgX",[Mx]:"Neutral",[yx]:"Custom"};function Ab(t,e){const n=Tb[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jo=new B;function Cb(){Ye.getLuminanceCoefficients(jo);const t=jo.x.toFixed(4),e=jo.y.toFixed(4),n=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Nb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Pb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ha(t){return t!==""}function Um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(t){return t.replace(Lb,Ib)}const Db=new Map;function Ib(t,e){let n=Oe[e];if(n===void 0){const i=Db.get(e);if(i!==void 0)n=Oe[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rf(n)}const Ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(t){return t.replace(Ub,Fb)}function Fb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Om(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kb={[rl]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function Ob(t){return kb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bb={[zr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function zb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Bb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vb={[Os]:"ENVMAP_MODE_REFRACTION"};function Hb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Vb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gb={[mx]:"ENVMAP_BLENDING_MULTIPLY",[ES]:"ENVMAP_BLENDING_MIX",[wS]:"ENVMAP_BLENDING_ADD"};function jb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Gb[t.combine]||"ENVMAP_BLENDING_NONE"}function Wb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Xb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Ob(n),c=zb(n),p=Hb(n),u=jb(n),d=Wb(n),m=Rb(n),v=Nb(s),y=r.createProgram();let x,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ha).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ha).join(`
`),f.length>0&&(f+=`
`)):(x=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),f=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==oi?Ab("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,bb("linearToOutputTexel",n.outputColorSpace),Cb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),a=rf(a),a=Um(a,n),a=Fm(a,n),o=rf(o),o=Um(o,n),o=Fm(o,n),a=km(a),o=km(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=g+x+a,E=g+f+o,A=Lm(r,r.VERTEX_SHADER,_),b=Lm(r,r.FRAGMENT_SHADER,E);r.attachShader(y,A),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(N){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",q=r.getShaderInfoLog(A)||"",J=r.getShaderInfoLog(b)||"",U=k.trim(),j=q.trim(),z=J.trim();let O=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,b);else{const Q=Im(r,A,"vertex"),ae=Im(r,b,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+Q+`
`+ae)}else U!==""?Ne("WebGLProgram: Program Info Log:",U):(j===""||z==="")&&(W=!1);W&&(N.diagnostics={runnable:O,programLog:U,vertexShader:{log:j,prefix:x},fragmentShader:{log:z,prefix:f}})}r.deleteShader(A),r.deleteShader(b),S=new cl(r,y),R=Pb(r,y)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,Sb)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=b,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $b(e),n.set(e,i)),i}}class $b{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}}function Kb(t){return t===Vr||t===Ul||t===Fl}function Zb(t,e,n,i,r,s){const a=new Dx,o=new Yb,l=new Set,c=[],p=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,R,P,N,k,q){const J=N.fog,U=k.geometry,j=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,O=e.get(S.envMap||j,z),W=O&&O.mapping===sc?O.image.height:null,Q=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Ne("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,fe=ae!==void 0?ae.length:0;let Ve=0;U.morphAttributes.position!==void 0&&(Ve=1),U.morphAttributes.normal!==void 0&&(Ve=2),U.morphAttributes.color!==void 0&&(Ve=3);let je,Pe,$,de;if(Q){const Ue=ti[Q];je=Ue.vertexShader,Pe=Ue.fragmentShader}else je=S.vertexShader,Pe=S.fragmentShader,o.update(S),$=o.getVertexShaderID(S),de=o.getFragmentShaderID(S);const oe=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,mt=!!S.map,We=!!S.matcap,it=!!O,dt=!!S.aoMap,He=!!S.lightMap,Pt=!!S.bumpMap,gt=!!S.normalMap,pn=!!S.displacementMap,D=!!S.emissiveMap,Lt=!!S.metalnessMap,Xe=!!S.roughnessMap,lt=S.anisotropy>0,he=S.clearcoat>0,yt=S.dispersion>0,T=S.iridescence>0,M=S.sheen>0,F=S.transmission>0,K=lt&&!!S.anisotropyMap,te=he&&!!S.clearcoatMap,ie=he&&!!S.clearcoatNormalMap,ue=he&&!!S.clearcoatRoughnessMap,X=T&&!!S.iridescenceMap,Z=T&&!!S.iridescenceThicknessMap,xe=M&&!!S.sheenColorMap,Se=M&&!!S.sheenRoughnessMap,le=!!S.specularMap,re=!!S.specularColorMap,Le=!!S.specularIntensityMap,ke=F&&!!S.transmissionMap,Je=F&&!!S.thicknessMap,L=!!S.gradientMap,se=!!S.alphaMap,Y=S.alphaTest>0,_e=!!S.alphaHash,ce=!!S.extensions;let ee=oi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ee=t.toneMapping);const be={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:Pe,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:We,envMap:it,envMapMode:it&&O.mapping,envMapCubeUVHeight:W,aoMap:dt,lightMap:He,bumpMap:Pt,normalMap:gt,displacementMap:pn,emissiveMap:D,normalMapObjectSpace:gt&&S.normalMapType===AS,normalMapTangentSpace:gt&&S.normalMapType===Jd,packedNormalMap:gt&&S.normalMapType===Jd&&Kb(S.normalMap.format),metalnessMap:Lt,roughnessMap:Xe,anisotropy:lt,anisotropyMap:K,clearcoat:he,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,dispersion:yt,iridescence:T,iridescenceMap:X,iridescenceThicknessMap:Z,sheen:M,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:le,specularColorMap:re,specularIntensityMap:Le,transmission:F,transmissionMap:ke,thicknessMap:Je,gradientMap:L,opaque:S.transparent===!1&&S.blending===As&&S.alphaToCoverage===!1,alphaMap:se,alphaTest:Y,alphaHash:_e,combine:S.combine,mapUv:mt&&v(S.map.channel),aoMapUv:dt&&v(S.aoMap.channel),lightMapUv:He&&v(S.lightMap.channel),bumpMapUv:Pt&&v(S.bumpMap.channel),normalMapUv:gt&&v(S.normalMap.channel),displacementMapUv:pn&&v(S.displacementMap.channel),emissiveMapUv:D&&v(S.emissiveMap.channel),metalnessMapUv:Lt&&v(S.metalnessMap.channel),roughnessMapUv:Xe&&v(S.roughnessMap.channel),anisotropyMapUv:K&&v(S.anisotropyMap.channel),clearcoatMapUv:te&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(S.sheenRoughnessMap.channel),specularMapUv:le&&v(S.specularMap.channel),specularColorMapUv:re&&v(S.specularColorMap.channel),specularIntensityMapUv:Le&&v(S.specularIntensityMap.channel),transmissionMapUv:ke&&v(S.transmissionMap.channel),thicknessMapUv:Je&&v(S.thicknessMap.channel),alphaMapUv:se&&v(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||lt),vertexNormals:!!U.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(mt||se),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||U.attributes.normal===void 0&&gt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:D&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Si,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ce&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function x(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)R.push(P),R.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(f(R,S),g(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function f(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function g(S,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),S.push(a.mask)}function _(S){const R=m[S.type];let P;if(R){const N=ti[R];P=dM.clone(N.uniforms)}else P=S.uniforms;return P}function E(S,R){let P=p.get(R);return P!==void 0?++P.usedTimes:(P=new Xb(t,R,S,r),c.push(P),p.set(R,P)),P}function A(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),p.delete(S.cacheKey),S.destroy()}}function b(S){o.remove(S)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:C}}function Qb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Jb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,v,y,x,f){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:f},t[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=v,g.materialVariant=a(d),g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=x,g.group=f),e++,g}function l(d,m,v,y,x,f){const g=o(d,m,v,y,x,f);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(d,m,v,y,x,f){const g=o(d,m,v,y,x,f);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function p(d,m){n.length>1&&n.sort(d||Jb),i.length>1&&i.sort(m||Bm),r.length>1&&r.sort(m||Bm)}function u(){for(let d=e,m=t.length;d<m;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:p}}function eT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new zm,t.set(i,[a])):r>=s.length?(a=new zm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function tT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new ze};break;case"SpotLight":n={position:new B,direction:new B,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function nT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iT=0;function rT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sT(t){const e=new tT,n=nT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new Ct,a=new Ct;function o(c){let p=0,u=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,v=0,y=0,x=0,f=0,g=0,_=0,E=0,A=0,b=0,C=0;c.sort(rT);for(let R=0,P=c.length;R<P;R++){const N=c[R],k=N.color,q=N.intensity,J=N.distance;let U=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Vr?U=N.shadow.map.texture:U=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)p+=k.r*q,u+=k.g*q,d+=k.b*q;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],q);C++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const z=N.shadow,O=n.get(N);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=N.shadow.matrix,g++}i.directional[m]=j,m++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(q),j.distance=J,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[y]=j;const z=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,z.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[y]=z.matrix,N.castShadow){const O=n.get(N);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=U,E++}y++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(k).multiplyScalar(q),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=j,x++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const z=N.shadow,O=n.get(N);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,i.pointShadow[v]=O,i.pointShadowMap[v]=U,i.pointShadowMatrix[v]=N.shadow.matrix,_++}i.point[v]=j,v++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(q),j.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[f]=j,f++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=u,i.ambient[2]=d;const S=i.hash;(S.directionalLength!==m||S.pointLength!==v||S.spotLength!==y||S.rectAreaLength!==x||S.hemiLength!==f||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==E||S.numSpotMaps!==A||S.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=x,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,S.directionalLength=m,S.pointLength=v,S.spotLength=y,S.rectAreaLength=x,S.hemiLength=f,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=E,S.numSpotMaps=A,S.numLightProbes=C,i.version=iT++)}function l(c,p){let u=0,d=0,m=0,v=0,y=0;const x=p.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),u++}else if(_.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),m++}else if(_.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),a.identity(),s.copy(_.matrixWorld),s.premultiply(x),a.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(x),y++}}}return{setup:o,setupView:l,state:i}}function Vm(t){const e=new sT(t),n=[],i=[],r=[];function s(d){u.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function p(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function aT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vm(t),e.set(r,[o])):s>=a.length?(o=new Vm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cT=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],uT=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Hm=new Ct,oa=new B,gu=new B;function dT(t,e,n){let i=new ph;const r=new $e,s=new $e,a=new Et,o=new gM,l=new xM,c={},p=n.maxTextureSize,u={[dr]:hn,[hn]:dr,[Si]:Si},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:oT,fragmentShader:lT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new fi;v.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Yn(v,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let f=this.type;this.render=function(b,C,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===rS&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rl);const R=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ti),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=f!==this.type;q&&C.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(U=>U.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,U=b.length;J<U;J++){const j=b[J],z=j.shadow;if(z===void 0){Ne("WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const O=z.getFrameExtents();r.multiply(O),s.copy(z.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/O.x),r.x=s.x*O.x,z.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/O.y),r.y=s.y*O.y,z.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===fa){if(j.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new li(r.x,r.y,{format:Vr,type:Di,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),z.map.texture.name=j.name+".shadowMap",z.map.depthTexture=new Bs(r.x,r.y,ii),z.map.depthTexture.name=j.name+".shadowMapDepth",z.map.depthTexture.format=Ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt}else j.isPointLight?(z.map=new Xx(r.x),z.map.depthTexture=new cM(r.x,ui)):(z.map=new li(r.x,r.y),z.map.depthTexture=new Bs(r.x,r.y,ui)),z.map.depthTexture.name=j.name+".shadowMap",z.map.depthTexture.format=Ii,this.type===rl?(z.map.depthTexture.compareFunction=W?uh:ch,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt);z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<Q;ae++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(z.map),t.clear());const fe=z.getViewport(ae);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),k.viewport(a)}if(j.isPointLight){const fe=z.camera,Ve=z.matrix,je=j.distance||fe.far;je!==fe.far&&(fe.far=je,fe.updateProjectionMatrix()),oa.setFromMatrixPosition(j.matrixWorld),fe.position.copy(oa),gu.copy(fe.position),gu.add(cT[ae]),fe.up.copy(uT[ae]),fe.lookAt(gu),fe.updateMatrixWorld(),Ve.makeTranslation(-oa.x,-oa.y,-oa.z),Hm.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Hm,fe.coordinateSystem,fe.reversedDepth)}else z.updateMatrices(j);i=z.getFrustum(),E(C,S,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===fa&&g(z,S),z.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(R,P,N)};function g(b,C){const S=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new li(r.x,r.y,{format:Vr,type:Di})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,S,d,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,S,m,y,null)}function _(b,C,S,R){let P=null;const N=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=S.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=P.uuid,q=C.uuid;let J=c[k];J===void 0&&(J={},c[k]=J);let U=J[q];U===void 0&&(U=P.clone(),J[q]=U,C.addEventListener("dispose",A)),P=U}if(P.visible=C.visible,P.wireframe=C.wireframe,R===fa?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=t.properties.get(P);k.light=S}return P}function E(b,C,S,R,P){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===fa)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const q=e.update(b),J=b.material;if(Array.isArray(J)){const U=q.groups;for(let j=0,z=U.length;j<z;j++){const O=U[j],W=J[O.materialIndex];if(W&&W.visible){const Q=_(b,W,R,P);b.onBeforeShadow(t,b,C,S,q,Q,O),t.renderBufferDirect(S,null,q,Q,b,O),b.onAfterShadow(t,b,C,S,q,Q,O)}}}else if(J.visible){const U=_(b,J,R,P);b.onBeforeShadow(t,b,C,S,q,U,null),t.renderBufferDirect(S,null,q,U,b,null),b.onAfterShadow(t,b,C,S,q,U,null)}}const k=b.children;for(let q=0,J=k.length;q<J;q++)E(k[q],C,S,R,P)}function A(b){b.target.removeEventListener("dispose",A);for(const S in c){const R=c[S],P=b.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function fT(t,e){function n(){let L=!1;const se=new Et;let Y=null;const _e=new Et(0,0,0,0);return{setMask:function(ce){Y!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),Y=ce)},setLocked:function(ce){L=ce},setClear:function(ce,ee,be,Ue,wt){wt===!0&&(ce*=Ue,ee*=Ue,be*=Ue),se.set(ce,ee,be,Ue),_e.equals(se)===!1&&(t.clearColor(ce,ee,be,Ue),_e.copy(se))},reset:function(){L=!1,Y=null,_e.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,Y=null,_e=null,ce=null;return{setReversed:function(ee){if(se!==ee){const be=e.get("EXT_clip_control");ee?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Ue=ce;ce=null,this.setClear(Ue)}},getReversed:function(){return se},setTest:function(ee){ee?oe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(ee){Y!==ee&&!L&&(t.depthMask(ee),Y=ee)},setFunc:function(ee){if(se&&(ee=kS[ee]),_e!==ee){switch(ee){case md:t.depthFunc(t.NEVER);break;case gd:t.depthFunc(t.ALWAYS);break;case xd:t.depthFunc(t.LESS);break;case ks:t.depthFunc(t.LEQUAL);break;case vd:t.depthFunc(t.EQUAL);break;case _d:t.depthFunc(t.GEQUAL);break;case yd:t.depthFunc(t.GREATER);break;case Sd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ce!==ee&&(ce=ee,se&&(ee=1-ee),t.clearDepth(ee))},reset:function(){L=!1,Y=null,_e=null,ce=null,se=!1}}}function r(){let L=!1,se=null,Y=null,_e=null,ce=null,ee=null,be=null,Ue=null,wt=null;return{setTest:function(rt){L||(rt?oe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(rt){se!==rt&&!L&&(t.stencilMask(rt),se=rt)},setFunc:function(rt,hi,$n){(Y!==rt||_e!==hi||ce!==$n)&&(t.stencilFunc(rt,hi,$n),Y=rt,_e=hi,ce=$n)},setOp:function(rt,hi,$n){(ee!==rt||be!==hi||Ue!==$n)&&(t.stencilOp(rt,hi,$n),ee=rt,be=hi,Ue=$n)},setLocked:function(rt){L=rt},setClear:function(rt){wt!==rt&&(t.clearStencil(rt),wt=rt)},reset:function(){L=!1,se=null,Y=null,_e=null,ce=null,ee=null,be=null,Ue=null,wt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let p={},u={},d={},m=new WeakMap,v=[],y=null,x=!1,f=null,g=null,_=null,E=null,A=null,b=null,C=null,S=new ze(0,0,0),R=0,P=!1,N=null,k=null,q=null,J=null,U=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=O>=2);let Q=null,ae={};const fe=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),je=new Et().fromArray(fe),Pe=new Et().fromArray(Ve);function $(L,se,Y,_e){const ce=new Uint8Array(4),ee=t.createTexture();t.bindTexture(L,ee),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<Y;be++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(se+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ee}const de={};de[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),a.setFunc(ks),Pt(!1),gt(Gp),oe(t.CULL_FACE),dt(Ti);function oe(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function Ce(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function De(L,se){return d[L]!==se?(t.bindFramebuffer(L,se),d[L]=se,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(L,se){let Y=v,_e=!1;if(L){Y=m.get(se),Y===void 0&&(Y=[],m.set(se,Y));const ce=L.textures;if(Y.length!==ce.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,be=ce.length;ee<be;ee++)Y[ee]=t.COLOR_ATTACHMENT0+ee;Y.length=ce.length,_e=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,_e=!0);_e&&t.drawBuffers(Y)}function mt(L){return y!==L?(t.useProgram(L),y=L,!0):!1}const We={[Tr]:t.FUNC_ADD,[aS]:t.FUNC_SUBTRACT,[oS]:t.FUNC_REVERSE_SUBTRACT};We[lS]=t.MIN,We[cS]=t.MAX;const it={[uS]:t.ZERO,[dS]:t.ONE,[fS]:t.SRC_COLOR,[hd]:t.SRC_ALPHA,[vS]:t.SRC_ALPHA_SATURATE,[gS]:t.DST_COLOR,[pS]:t.DST_ALPHA,[hS]:t.ONE_MINUS_SRC_COLOR,[pd]:t.ONE_MINUS_SRC_ALPHA,[xS]:t.ONE_MINUS_DST_COLOR,[mS]:t.ONE_MINUS_DST_ALPHA,[_S]:t.CONSTANT_COLOR,[yS]:t.ONE_MINUS_CONSTANT_COLOR,[SS]:t.CONSTANT_ALPHA,[MS]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(L,se,Y,_e,ce,ee,be,Ue,wt,rt){if(L===Ti){x===!0&&(Ce(t.BLEND),x=!1);return}if(x===!1&&(oe(t.BLEND),x=!0),L!==sS){if(L!==f||rt!==P){if((g!==Tr||A!==Tr)&&(t.blendEquation(t.FUNC_ADD),g=Tr,A=Tr),rt)switch(L){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jp:t.blendFunc(t.ONE,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",L);break}else switch(L){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Wp:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xp:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",L);break}_=null,E=null,b=null,C=null,S.set(0,0,0),R=0,f=L,P=rt}return}ce=ce||se,ee=ee||Y,be=be||_e,(se!==g||ce!==A)&&(t.blendEquationSeparate(We[se],We[ce]),g=se,A=ce),(Y!==_||_e!==E||ee!==b||be!==C)&&(t.blendFuncSeparate(it[Y],it[_e],it[ee],it[be]),_=Y,E=_e,b=ee,C=be),(Ue.equals(S)===!1||wt!==R)&&(t.blendColor(Ue.r,Ue.g,Ue.b,wt),S.copy(Ue),R=wt),f=L,P=!1}function He(L,se){L.side===Si?Ce(t.CULL_FACE):oe(t.CULL_FACE);let Y=L.side===hn;se&&(Y=!Y),Pt(Y),L.blending===As&&L.transparent===!1?dt(Ti):dt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(L){N!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),N=L)}function gt(L){L!==nS?(oe(t.CULL_FACE),L!==k&&(L===Gp?t.cullFace(t.BACK):L===iS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),k=L}function pn(L){L!==q&&(z&&t.lineWidth(L),q=L)}function D(L,se,Y){L?(oe(t.POLYGON_OFFSET_FILL),(J!==se||U!==Y)&&(J=se,U=Y,a.getReversed()&&(se=-se),t.polygonOffset(se,Y))):Ce(t.POLYGON_OFFSET_FILL)}function Lt(L){L?oe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Xe(L){L===void 0&&(L=t.TEXTURE0+j-1),Q!==L&&(t.activeTexture(L),Q=L)}function lt(L,se,Y){Y===void 0&&(Q===null?Y=t.TEXTURE0+j-1:Y=Q);let _e=ae[Y];_e===void 0&&(_e={type:void 0,texture:void 0},ae[Y]=_e),(_e.type!==L||_e.texture!==se)&&(Q!==Y&&(t.activeTexture(Y),Q=Y),t.bindTexture(L,se||de[L]),_e.type=L,_e.texture=se)}function he(){const L=ae[Q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function yt(){try{t.compressedTexImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function M(){try{t.texSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function F(){try{t.texSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function ie(){try{t.texStorage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function ue(){try{t.texStorage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function X(){try{t.texImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Z(){try{t.texImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function xe(L){return u[L]!==void 0?u[L]:t.getParameter(L)}function Se(L,se){u[L]!==se&&(t.pixelStorei(L,se),u[L]=se)}function le(L){je.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function re(L){Pe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Pe.copy(L))}function Le(L,se){let Y=c.get(se);Y===void 0&&(Y=new WeakMap,c.set(se,Y));let _e=Y.get(L);_e===void 0&&(_e=t.getUniformBlockIndex(se,L.name),Y.set(L,_e))}function ke(L,se){const _e=c.get(se).get(L);l.get(se)!==_e&&(t.uniformBlockBinding(se,_e,L.__bindingPointIndex),l.set(se,_e))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},u={},Q=null,ae={},d={},m=new WeakMap,v=[],y=null,x=!1,f=null,g=null,_=null,E=null,A=null,b=null,C=null,S=new ze(0,0,0),R=0,P=!1,N=null,k=null,q=null,J=null,U=null,je.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Ce,bindFramebuffer:De,drawBuffers:Re,useProgram:mt,setBlending:dt,setMaterial:He,setFlipSided:Pt,setCullFace:gt,setLineWidth:pn,setPolygonOffset:D,setScissorTest:Lt,activeTexture:Xe,bindTexture:lt,unbindTexture:he,compressedTexImage2D:yt,compressedTexImage3D:T,texImage2D:X,texImage3D:Z,pixelStorei:Se,getParameter:xe,updateUBOMapping:Le,uniformBlockBinding:ke,texStorage2D:ie,texStorage3D:ue,texSubImage2D:M,texSubImage3D:F,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:le,viewport:re,reset:Je}}function hT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,p=new WeakMap,u=new Set;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,M){return v?new OffscreenCanvas(T,M):Wa("canvas")}function x(T,M,F){let K=1;const te=yt(T);if((te.width>F||te.height>F)&&(K=F/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ie=Math.floor(K*te.width),ue=Math.floor(K*te.height);d===void 0&&(d=y(ie,ue));const X=M?y(ie,ue):d;return X.width=ie,X.height=ue,X.getContext("2d").drawImage(T,0,0,ie,ue),Ne("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ie+"x"+ue+")."),X}else return"data"in T&&Ne("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function f(T){return T.generateMipmaps}function g(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(T,M,F,K,te,ie=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;K&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=M;if(M===t.RED&&(F===t.FLOAT&&(X=t.R32F),F===t.HALF_FLOAT&&(X=t.R16F),F===t.UNSIGNED_BYTE&&(X=t.R8),F===t.UNSIGNED_SHORT&&ue&&(X=ue.R16_EXT),F===t.SHORT&&ue&&(X=ue.R16_SNORM_EXT)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.R8UI),F===t.UNSIGNED_SHORT&&(X=t.R16UI),F===t.UNSIGNED_INT&&(X=t.R32UI),F===t.BYTE&&(X=t.R8I),F===t.SHORT&&(X=t.R16I),F===t.INT&&(X=t.R32I)),M===t.RG&&(F===t.FLOAT&&(X=t.RG32F),F===t.HALF_FLOAT&&(X=t.RG16F),F===t.UNSIGNED_BYTE&&(X=t.RG8),F===t.UNSIGNED_SHORT&&ue&&(X=ue.RG16_EXT),F===t.SHORT&&ue&&(X=ue.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.RG8UI),F===t.UNSIGNED_SHORT&&(X=t.RG16UI),F===t.UNSIGNED_INT&&(X=t.RG32UI),F===t.BYTE&&(X=t.RG8I),F===t.SHORT&&(X=t.RG16I),F===t.INT&&(X=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.RGB8UI),F===t.UNSIGNED_SHORT&&(X=t.RGB16UI),F===t.UNSIGNED_INT&&(X=t.RGB32UI),F===t.BYTE&&(X=t.RGB8I),F===t.SHORT&&(X=t.RGB16I),F===t.INT&&(X=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),F===t.UNSIGNED_INT&&(X=t.RGBA32UI),F===t.BYTE&&(X=t.RGBA8I),F===t.SHORT&&(X=t.RGBA16I),F===t.INT&&(X=t.RGBA32I)),M===t.RGB&&(F===t.UNSIGNED_SHORT&&ue&&(X=ue.RGB16_EXT),F===t.SHORT&&ue&&(X=ue.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),M===t.RGBA){const Z=ie?Ol:Ye.getTransfer(te);F===t.FLOAT&&(X=t.RGBA32F),F===t.HALF_FLOAT&&(X=t.RGBA16F),F===t.UNSIGNED_BYTE&&(X=Z===tt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&ue&&(X=ue.RGBA16_EXT),F===t.SHORT&&ue&&(X=ue.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(T,M){let F;return T?M===null||M===ui||M===Ga?F=t.DEPTH24_STENCIL8:M===ii?F=t.DEPTH32F_STENCIL8:M===Ha&&(F=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ui||M===Ga?F=t.DEPTH_COMPONENT24:M===ii?F=t.DEPTH_COMPONENT32F:M===Ha&&(F=t.DEPTH_COMPONENT16),F}function b(T,M){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==Zt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function C(T){const M=T.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&p.delete(M),M.isHTMLTexture&&u.delete(M)}function S(T){const M=T.target;M.removeEventListener("dispose",S),N(M)}function R(T){const M=i.get(T);if(M.__webglInit===void 0)return;const F=T.source,K=m.get(F);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(T),Object.keys(K).length===0&&m.delete(F)}i.remove(T)}function P(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const F=T.source,K=m.get(F);delete K[M.__cacheKey],a.memory.textures--}function N(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[K][te]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=T.textures;for(let K=0,te=F.length;K<te;K++){const ie=i.get(F[K]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(T)}let k=0;function q(){k=0}function J(){return k}function U(T){k=T}function j(){const T=k;return T>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),k+=1,T}function z(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function O(T,M){const F=i.get(T);if(T.isVideoTexture&&lt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const K=T.image;if(K===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(F,T,M);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function W(T,M){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Ce(F,T,M);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function Q(T,M){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Ce(F,T,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function ae(T,M){const F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){De(F,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const fe={[Va]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Md]:t.MIRRORED_REPEAT},Ve={[Vt]:t.NEAREST,[bS]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},je={[CS]:t.NEVER,[DS]:t.ALWAYS,[RS]:t.LESS,[ch]:t.LEQUAL,[NS]:t.EQUAL,[uh]:t.GEQUAL,[PS]:t.GREATER,[LS]:t.NOTEQUAL};function Pe(T,M){if(M.type===ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zt||M.magFilter===Oc||M.magFilter===Mo||M.magFilter===Pr||M.minFilter===Zt||M.minFilter===Oc||M.minFilter===Mo||M.minFilter===Pr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,fe[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,fe[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,fe[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Ve[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Ve[M.minFilter]),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vt||M.minFilter!==Mo&&M.minFilter!==Pr||M.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let te=m.get(K);te===void 0&&(te={},m.set(K,te));const ie=z(M);if(ie!==T.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),te[ie].usedTimes++;const ue=te[T.__cacheKey];ue!==void 0&&(te[T.__cacheKey].usedTimes--,ue.usedTimes===0&&P(M)),T.__cacheKey=ie,T.__webglTexture=te[ie].texture}return F}function de(T,M,F){return Math.floor(Math.floor(T/F)/M)}function oe(T,M,F,K){const ie=T.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,F,K,M.data);else{ie.sort((Se,le)=>Se.start-le.start);let ue=0;for(let Se=1;Se<ie.length;Se++){const le=ie[ue],re=ie[Se],Le=le.start+le.count,ke=de(re.start,M.width,4),Je=de(le.start,M.width,4);re.start<=Le+1&&ke===Je&&de(re.start+re.count-1,M.width,4)===ke?le.count=Math.max(le.count,re.start+re.count-le.start):(++ue,ie[ue]=re)}ie.length=ue+1;const X=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Se=0,le=ie.length;Se<le;Se++){const re=ie[Se],Le=Math.floor(re.start/4),ke=Math.ceil(re.count/4),Je=Le%M.width,L=Math.floor(Le/M.width),se=ke,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Je,L,se,Y,F,K,M.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function Ce(T,M,F){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const te=$(T,M),ie=M.source;n.bindTexture(K,T.__webglTexture,t.TEXTURE0+F);const ue=i.get(ie);if(ie.version!==ue.__version||te===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Y=Ye.getPrimaries(Ye.workingColorSpace),_e=M.colorSpace===Ki?null:Ye.getPrimaries(M.colorSpace),ce=M.colorSpace===Ki||Y===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=x(M.image,!1,r.maxTextureSize);Z=he(M,Z);const xe=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let le=E(M.internalFormat,xe,Se,M.normalized,M.colorSpace,M.isVideoTexture);Pe(K,M);let re;const Le=M.mipmaps,ke=M.isVideoTexture!==!0,Je=ue.__version===void 0||te===!0,L=ie.dataReady,se=b(M,Z);if(M.isDepthTexture)le=A(M.format===Lr,M.type),Je&&(ke?n.texStorage2D(t.TEXTURE_2D,1,le,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,le,Z.width,Z.height,0,xe,Se,null));else if(M.isDataTexture)if(Le.length>0){ke&&Je&&n.texStorage2D(t.TEXTURE_2D,se,le,Le[0].width,Le[0].height);for(let Y=0,_e=Le.length;Y<_e;Y++)re=Le[Y],ke?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,re.width,re.height,xe,Se,re.data):n.texImage2D(t.TEXTURE_2D,Y,le,re.width,re.height,0,xe,Se,re.data);M.generateMipmaps=!1}else ke?(Je&&n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height),L&&oe(M,Z,xe,Se)):n.texImage2D(t.TEXTURE_2D,0,le,Z.width,Z.height,0,xe,Se,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Le[0].width,Le[0].height,Z.depth);for(let Y=0,_e=Le.length;Y<_e;Y++)if(re=Le[Y],M.format!==jn)if(xe!==null)if(ke){if(L)if(M.layerUpdates.size>0){const ce=_m(re.width,re.height,M.format,M.type);for(const ee of M.layerUpdates){const be=re.data.subarray(ee*ce/re.data.BYTES_PER_ELEMENT,(ee+1)*ce/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ee,re.width,re.height,1,xe,be)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,Z.depth,xe,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,le,re.width,re.height,Z.depth,0,re.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,Z.depth,xe,Se,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,le,re.width,re.height,Z.depth,0,xe,Se,re.data)}else{ke&&Je&&n.texStorage2D(t.TEXTURE_2D,se,le,Le[0].width,Le[0].height);for(let Y=0,_e=Le.length;Y<_e;Y++)re=Le[Y],M.format!==jn?xe!==null?ke?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,re.width,re.height,xe,re.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,le,re.width,re.height,0,re.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,re.width,re.height,xe,Se,re.data):n.texImage2D(t.TEXTURE_2D,Y,le,re.width,re.height,0,xe,Se,re.data)}else if(M.isDataArrayTexture)if(ke){if(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Z.width,Z.height,Z.depth),L)if(M.layerUpdates.size>0){const Y=_m(Z.width,Z.height,M.format,M.type);for(const _e of M.layerUpdates){const ce=Z.data.subarray(_e*Y/Z.data.BYTES_PER_ELEMENT,(_e+1)*Y/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,Z.width,Z.height,1,xe,Se,ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,xe,Se,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,Z.width,Z.height,Z.depth,0,xe,Se,Z.data);else if(M.isData3DTexture)ke?(Je&&n.texStorage3D(t.TEXTURE_3D,se,le,Z.width,Z.height,Z.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,xe,Se,Z.data)):n.texImage3D(t.TEXTURE_3D,0,le,Z.width,Z.height,Z.depth,0,xe,Se,Z.data);else if(M.isFramebufferTexture){if(Je)if(ke)n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height);else{let Y=Z.width,_e=Z.height;for(let ce=0;ce<se;ce++)n.texImage2D(t.TEXTURE_2D,ce,le,Y,_e,0,xe,Se,null),Y>>=1,_e>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Z.parentNode!==Y){Y.appendChild(Z),u.add(M),Y.onpaint=Ue=>{const wt=Ue.changedElements;for(const rt of u)wt.includes(rt.image)&&(rt.needsUpdate=!0)},Y.requestPaint();return}const _e=0,ce=t.RGBA,ee=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,_e,ce,ee,be,Z),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(ke&&Je){const Y=yt(Le[0]);n.texStorage2D(t.TEXTURE_2D,se,le,Y.width,Y.height)}for(let Y=0,_e=Le.length;Y<_e;Y++)re=Le[Y],ke?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,xe,Se,re):n.texImage2D(t.TEXTURE_2D,Y,le,xe,Se,re);M.generateMipmaps=!1}else if(ke){if(Je){const Y=yt(Z);n.texStorage2D(t.TEXTURE_2D,se,le,Y.width,Y.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Se,Z)}else n.texImage2D(t.TEXTURE_2D,0,le,xe,Se,Z);f(M)&&g(K),ue.__version=ie.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function De(T,M,F){if(M.image.length!==6)return;const K=$(T,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);const ie=i.get(te);if(te.version!==ie.__version||K===!0){n.activeTexture(t.TEXTURE0+F);const ue=Ye.getPrimaries(Ye.workingColorSpace),X=M.colorSpace===Ki?null:Ye.getPrimaries(M.colorSpace),Z=M.colorSpace===Ki||ue===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!xe&&!Se?le[ee]=x(M.image[ee],!0,r.maxCubemapSize):le[ee]=Se?M.image[ee].image:M.image[ee],le[ee]=he(M,le[ee]);const re=le[0],Le=s.convert(M.format,M.colorSpace),ke=s.convert(M.type),Je=E(M.internalFormat,Le,ke,M.normalized,M.colorSpace),L=M.isVideoTexture!==!0,se=ie.__version===void 0||K===!0,Y=te.dataReady;let _e=b(M,re);Pe(t.TEXTURE_CUBE_MAP,M);let ce;if(xe){L&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Je,re.width,re.height);for(let ee=0;ee<6;ee++){ce=le[ee].mipmaps;for(let be=0;be<ce.length;be++){const Ue=ce[be];M.format!==jn?Le!==null?L?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Ue.width,Ue.height,Le,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Je,Ue.width,Ue.height,0,Ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Ue.width,Ue.height,Le,ke,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Je,Ue.width,Ue.height,0,Le,ke,Ue.data)}}}else{if(ce=M.mipmaps,L&&se){ce.length>0&&_e++;const ee=yt(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,Le,ke,le[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,le[ee].width,le[ee].height,0,Le,ke,le[ee].data);for(let be=0;be<ce.length;be++){const wt=ce[be].image[ee].image;L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,wt.width,wt.height,Le,ke,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Je,wt.width,wt.height,0,Le,ke,wt.data)}}else{L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,ke,le[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,Le,ke,le[ee]);for(let be=0;be<ce.length;be++){const Ue=ce[be];L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Le,ke,Ue.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Je,Le,ke,Ue.image[ee])}}}f(M)&&g(t.TEXTURE_CUBE_MAP),ie.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Re(T,M,F,K,te,ie){const ue=s.convert(F.format,F.colorSpace),X=s.convert(F.type),Z=E(F.internalFormat,ue,X,F.normalized,F.colorSpace),xe=i.get(M),Se=i.get(F);if(Se.__renderTarget=M,!xe.__hasExternalTextures){const le=Math.max(1,M.width>>ie),re=Math.max(1,M.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,Z,le,re,M.depth,0,ue,X,null):n.texImage2D(te,ie,Z,le,re,0,ue,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Xe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,Se.__webglTexture,0,Lt(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,Se.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(T,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,ie=A(M.stencilBuffer,te),ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Xe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(M),ie,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(M),ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,T)}else{const K=M.textures;for(let te=0;te<K.length;te++){const ie=K[te],ue=s.convert(ie.format,ie.colorSpace),X=s.convert(ie.type),Z=E(ie.internalFormat,ue,X,ie.normalized,ie.colorSpace);Xe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(M),Z,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(M),Z,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(T,M,F){const K=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,M.depthTexture);const xe=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type);let le;M.depthTexture.format===Ii?le=t.DEPTH_COMPONENT24:M.depthTexture.format===Lr&&(le=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,M.width,M.height,0,xe,Se,null)}}else O(M.depthTexture,0);const ie=te.__webglTexture,ue=Lt(M),X=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,Z=M.depthTexture.format===Lr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ii)Xe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,X,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Z,X,ie,0);else if(M.depthTexture.format===Lr)Xe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,X,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Z,X,ie,0);else throw new Error("Unknown depthTexture format")}function it(T){const M=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)We(M.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?We(M.__webglFramebuffer[0],T,0):We(M.__webglFramebuffer,T,0)}else if(F){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),mt(M.__webglDepthbuffer[K],T,!1);else{const te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),mt(M.__webglDepthbuffer,T,!1);else{const te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(T,M,F){const K=i.get(T);M!==void 0&&Re(K.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&it(T)}function He(T){const M=T.texture,F=i.get(T),K=i.get(M);T.addEventListener("dispose",S);const te=T.textures,ie=T.isWebGLCubeRenderTarget===!0,ue=te.length>1;if(ue||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let Z=0;Z<M.mipmaps.length;Z++)F.__webglFramebuffer[X][Z]=t.createFramebuffer()}else F.__webglFramebuffer[X]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<M.mipmaps.length;X++)F.__webglFramebuffer[X]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ue)for(let X=0,Z=te.length;X<Z;X++){const xe=i.get(te[X]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&Xe(T)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<te.length;X++){const Z=te[X];F.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const xe=s.convert(Z.format,Z.colorSpace),Se=s.convert(Z.type),le=E(Z.internalFormat,xe,Se,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),re=Lt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,le,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,F.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),mt(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,M);for(let X=0;X<6;X++)if(M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Re(F.__webglFramebuffer[X][Z],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Z);else Re(F.__webglFramebuffer[X],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let X=0,Z=te.length;X<Z;X++){const xe=te[X],Se=i.get(xe);let le=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Se.__webglTexture),Pe(le,xe),Re(F.__webglFramebuffer,T,xe,t.COLOR_ATTACHMENT0+X,le,0),f(xe)&&g(le)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,K.__webglTexture),Pe(X,M),M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Re(F.__webglFramebuffer[Z],T,M,t.COLOR_ATTACHMENT0,X,Z);else Re(F.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,X,0);f(M)&&g(X),n.unbindTexture()}T.depthBuffer&&it(T)}function Pt(T){const M=T.textures;for(let F=0,K=M.length;F<K;F++){const te=M[F];if(f(te)){const ie=_(T),ue=i.get(te).__webglTexture;n.bindTexture(ie,ue),g(ie),n.unbindTexture()}}}const gt=[],pn=[];function D(T){if(T.samples>0){if(Xe(T)===!1){const M=T.textures,F=T.width,K=T.height;let te=t.COLOR_BUFFER_BIT;const ie=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(T),X=M.length>1;if(X)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Z=T.texture.mipmaps;Z&&Z.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[xe]);const Se=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,F,K,0,0,F,K,te,t.NEAREST),l===!0&&(gt.length=0,pn.length=0,gt.push(t.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(gt.push(ie),pn.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[xe]);const Se=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Lt(T){return Math.min(r.maxSamples,T.samples)}function Xe(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(T){const M=a.render.frame;p.get(T)!==M&&(p.set(T,M),T.update())}function he(T,M){const F=T.colorSpace,K=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==kl&&F!==Ki&&(Ye.getTransfer(F)===tt?(K!==jn||te!==_n)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",F)),M}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.getTextureUnits=J,this.setTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=ae,this.rebindTextures=dt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pT(t,e){function n(i,r=Ki){let s;const a=Ye.getTransfer(r);if(i===_n)return t.UNSIGNED_BYTE;if(i===rh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ax)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wx)return t.BYTE;if(i===bx)return t.SHORT;if(i===Ha)return t.UNSIGNED_SHORT;if(i===ih)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Di)return t.HALF_FLOAT;if(i===Cx)return t.ALPHA;if(i===Rx)return t.RGB;if(i===jn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===Lr)return t.DEPTH_STENCIL;if(i===Nx)return t.RED;if(i===ah)return t.RED_INTEGER;if(i===Vr)return t.RG;if(i===oh)return t.RG_INTEGER;if(i===lh)return t.RGBA_INTEGER;if(i===sl||i===al||i===ol||i===ll)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ed||i===wd||i===bd||i===Td)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===Cd||i===Rd||i===Nd||i===Pd||i===Ul||i===Ld)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ad||i===Cd)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nd)return s.COMPRESSED_R11_EAC;if(i===Pd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ul)return s.COMPRESSED_RG11_EAC;if(i===Ld)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dd||i===Id||i===Ud||i===Fd||i===kd||i===Od||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===jd||i===Wd||i===Xd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Id)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ud)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Od)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qd||i===Yd||i===$d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qd)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kd||i===Zd||i===Fl||i===Qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ga?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Bx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new di({vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vT extends jr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,u=null,d=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",x=new xT,f={},g=n.getContextAttributes();let _=null,E=null;const A=[],b=[],C=new $e;let S=null;const R=new Rn;R.viewport=new Et;const P=new Rn;P.viewport=new Et;const N=[R,P],k=new AM;let q=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let de=A[$];return de===void 0&&(de=new Xc,A[$]=de),de.getTargetRaySpace()},this.getControllerGrip=function($){let de=A[$];return de===void 0&&(de=new Xc,A[$]=de),de.getGripSpace()},this.getHand=function($){let de=A[$];return de===void 0&&(de=new Xc,A[$]=de),de.getHandSpace()};function U($){const de=b.indexOf($.inputSource);if(de===-1)return;const oe=A[de];oe!==void 0&&(oe.update($.inputSource,$.frame,c||a),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",z);for(let $=0;$<A.length;$++){const de=b[$];de!==null&&(b[$]=null,A[$].disconnect(de))}q=null,J=null,x.reset();for(const $ in f)delete f[$];e.setRenderTarget(_),m=null,d=null,u=null,r=null,E=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,n)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",j),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ce=null,De=null;g.depth&&(De=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?Lr:Ii,Ce=g.stencil?Ga:ui);const Re={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new li(d.textureWidth,d.textureHeight,{format:jn,type:_n,depthTexture:new Bs(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new li(m.framebufferWidth,m.framebufferHeight,{format:jn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z($){for(let de=0;de<$.removed.length;de++){const oe=$.removed[de],Ce=b.indexOf(oe);Ce>=0&&(b[Ce]=null,A[Ce].disconnect(oe))}for(let de=0;de<$.added.length;de++){const oe=$.added[de];let Ce=b.indexOf(oe);if(Ce===-1){for(let Re=0;Re<A.length;Re++)if(Re>=b.length){b.push(oe),Ce=Re;break}else if(b[Re]===null){b[Re]=oe,Ce=Re;break}if(Ce===-1)break}const De=A[Ce];De&&De.connect(oe)}}const O=new B,W=new B;function Q($,de,oe){O.setFromMatrixPosition(de.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);const Ce=O.distanceTo(W),De=de.projectionMatrix.elements,Re=oe.projectionMatrix.elements,mt=De[14]/(De[10]-1),We=De[14]/(De[10]+1),it=(De[9]+1)/De[5],dt=(De[9]-1)/De[5],He=(De[8]-1)/De[0],Pt=(Re[8]+1)/Re[0],gt=mt*He,pn=mt*Pt,D=Ce/(-He+Pt),Lt=D*-He;if(de.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(D),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Xe=mt+D,lt=We+D,he=gt-Lt,yt=pn+(Ce-Lt),T=it*We/lt*Xe,M=dt*We/lt*Xe;$.projectionMatrix.makePerspective(he,yt,T,M,Xe,lt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,de){de===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(de.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let de=$.near,oe=$.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),k.near=P.near=R.near=de,k.far=P.far=R.far=oe,(q!==k.near||J!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),q=k.near,J=k.far),k.layers.mask=$.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const Ce=$.parent,De=k.cameras;ae(k,Ce);for(let Re=0;Re<De.length;Re++)ae(De[Re],Ce);De.length===2?Q(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),fe($,k,Ce)};function fe($,de,oe){oe===null?$.matrix.copy(de.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(de.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=tf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function($){return f[$]};let Ve=null;function je($,de){if(p=de.getViewerPose(c||a),v=de,p!==null){const oe=p.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ce=!1;oe.length!==k.cameras.length&&(k.cameras.length=0,Ce=!0);for(let We=0;We<oe.length;We++){const it=oe[We];let dt=null;if(m!==null)dt=m.getViewport(it);else{const Pt=u.getViewSubImage(d,it);dt=Pt.viewport,We===0&&(e.setRenderTargetTextures(E,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(E))}let He=N[We];He===void 0&&(He=new Rn,He.layers.enable(We),He.viewport=new Et,N[We]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(dt.x,dt.y,dt.width,dt.height),We===0&&(k.matrix.copy(He.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ce===!0&&k.cameras.push(He)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=i.getBinding();const We=u.getDepthInformation(oe[0]);We&&We.isValid&&We.texture&&x.init(We,r.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let We=0;We<oe.length;We++){const it=oe[We].camera;if(it){let dt=f[it];dt||(dt=new Bx,f[it]=dt);const He=u.getCameraImage(it);dt.sourceTexture=He}}}}for(let oe=0;oe<A.length;oe++){const Ce=b[oe],De=A[oe];Ce!==null&&De!==void 0&&De.update(Ce,de,c||a)}Ve&&Ve($,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const Pe=new jx;Pe.setAnimationLoop(je),this.setAnimationLoop=function($){Ve=$},this.dispose=function(){}}}const _T=new Ct,Zx=new Ie;Zx.set(-1,0,0,0,1,0,0,0,1);function yT(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,zx(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,g,_,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),u(x,f)):f.isMeshPhongMaterial?(s(x,f),p(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),d(x,f),f.isMeshPhysicalMaterial&&m(x,f,E)):f.isMeshMatcapMaterial?(s(x,f),v(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),y(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(a(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,g,_):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===hn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===hn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const g=e.get(f),_=g.envMap,E=g.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(_T.makeRotationFromEuler(E)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Zx),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function a(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,g,_){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*g,x.scale.value=_*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function p(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function u(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,g){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,f){f.matcap&&(x.matcap.value=f.matcap)}function y(x,f){const g=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ST(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const E=_.program;i.uniformBlockBinding(g,E)}function c(g,_){let E=r[g.id];E===void 0&&(v(g),E=p(g),r[g.id]=E,g.addEventListener("dispose",x));const A=_.program;i.updateUBOMapping(g,A);const b=e.render.frame;s[g.id]!==b&&(d(g),s[g.id]=b)}function p(g){const _=u();g.__bindingPointIndex=_;const E=t.createBuffer(),A=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],E=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,C=E.length;b<C;b++){const S=Array.isArray(E[b])?E[b]:[E[b]];for(let R=0,P=S.length;R<P;R++){const N=S[R];if(m(N,b,R,A)===!0){const k=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let J=0;for(let U=0;U<q.length;U++){const j=q[U],z=y(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,k+J,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):ArrayBuffer.isView(j)?N.__data.set(new j.constructor(j.buffer,j.byteOffset,N.__data.length)):(j.toArray(N.__data,J),J+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,E,A){const b=g.value,C=_+"_"+E;if(A[C]===void 0)return typeof b=="number"||typeof b=="boolean"?A[C]=b:ArrayBuffer.isView(b)?A[C]=b.slice():A[C]=b.clone(),!0;{const S=A[C];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return A[C]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(S.equals(b)===!1)return S.copy(b),!0}}return!1}function v(g){const _=g.uniforms;let E=0;const A=16;for(let C=0,S=_.length;C<S;C++){const R=Array.isArray(_[C])?_[C]:[_[C]];for(let P=0,N=R.length;P<N;P++){const k=R[P],q=Array.isArray(k.value)?k.value:[k.value];for(let J=0,U=q.length;J<U;J++){const j=q[J],z=y(j),O=E%A,W=O%z.boundary,Q=O+W;E+=W,Q!==0&&A-Q<z.storage&&(E+=A-Q),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=z.storage}}}const b=E%A;return b>0&&(E+=A-b),g.__size=E,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(_.boundary=16,_.storage=g.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",g),_}function x(g){const _=g.target;_.removeEventListener("dispose",x);const E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const MT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function ET(){return Jn===null&&(Jn=new sM(MT,16,16,Vr,Di),Jn.name="DFG_LUT",Jn.minFilter=Zt,Jn.magFilter=Zt,Jn.wrapS=wi,Jn.wrapT=wi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class wT{constructor(e={}){const{canvas:n=US(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=_n}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const y=m,x=new Set([lh,oh,ah]),f=new Set([_n,ui,Ha,Ga,rh,sh]),g=new Uint32Array(4),_=new Int32Array(4),E=new B;let A=null,b=null;const C=[],S=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,k=null;this._outputColorSpace=on;let q=0,J=0,U=null,j=-1,z=null;const O=new Et,W=new Et;let Q=null;const ae=new ze(0);let fe=0,Ve=n.width,je=n.height,Pe=1,$=null,de=null;const oe=new Et(0,0,Ve,je),Ce=new Et(0,0,Ve,je);let De=!1;const Re=new ph;let mt=!1,We=!1;const it=new Ct,dt=new B,He=new Et,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function pn(){return U===null?Pe:1}let D=i;function Lt(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nh}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),D===null){const I="webgl2";if(D=Lt(I,w),D===null)throw Lt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ze("WebGLRenderer: "+w.message),w}let Xe,lt,he,yt,T,M,F,K,te,ie,ue,X,Z,xe,Se,le,re,Le,ke,Je,L,se,Y;function _e(){Xe=new Ew(D),Xe.init(),L=new pT(D,Xe),lt=new mw(D,Xe,e,L),he=new fT(D,Xe),lt.reversedDepthBuffer&&d&&he.buffers.depth.setReversed(!0),yt=new Tw(D),T=new Qb,M=new hT(D,Xe,he,T,lt,L,yt),F=new Mw(P),K=new NM(D),se=new hw(D,K),te=new ww(D,K,yt,se),ie=new Cw(D,te,K,se,yt),Le=new Aw(D,lt,M),Se=new gw(T),ue=new Zb(P,F,Xe,lt,se,Se),X=new yT(P,T),Z=new eT,xe=new aT(Xe),re=new fw(P,F,he,ie,v,l),le=new dT(P,ie,lt),Y=new ST(D,yt,lt,he),ke=new pw(D,Xe,yt),Je=new bw(D,Xe,yt),yt.programs=ue.programs,P.capabilities=lt,P.extensions=Xe,P.properties=T,P.renderLists=Z,P.shadowMap=le,P.state=he,P.info=yt}_e(),y!==_n&&(R=new Nw(y,n.width,n.height,r,s));const ce=new vT(P,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(w){w!==void 0&&(Pe=w,this.setSize(Ve,je,!1))},this.getSize=function(w){return w.set(Ve,je)},this.setSize=function(w,I,G=!0){if(ce.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=w,je=I,n.width=Math.floor(w*Pe),n.height=Math.floor(I*Pe),G===!0&&(n.style.width=w+"px",n.style.height=I+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(Ve*Pe,je*Pe).floor()},this.setDrawingBufferSize=function(w,I,G){Ve=w,je=I,Pe=G,n.width=Math.floor(w*G),n.height=Math.floor(I*G),this.setViewport(0,0,w,I)},this.setEffects=function(w){if(y===_n){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let I=0;I<w.length;I++)if(w[I].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,I,G,V){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,I,G,V),he.viewport(O.copy(oe).multiplyScalar(Pe).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,I,G,V){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,I,G,V),he.scissor(W.copy(Ce).multiplyScalar(Pe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){he.setScissorTest(De=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(w=!0,I=!0,G=!0){let V=0;if(w){let H=!1;if(U!==null){const ge=U.texture.format;H=x.has(ge)}if(H){const ge=U.texture.type,Me=f.has(ge),me=re.getClearColor(),we=re.getClearAlpha(),Te=me.r,Fe=me.g,Be=me.b;Me?(g[0]=Te,g[1]=Fe,g[2]=Be,g[3]=we,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Te,_[1]=Fe,_[2]=Be,_[3]=we,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}I&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),re.dispose(),Z.dispose(),xe.dispose(),T.dispose(),F.dispose(),ie.dispose(),se.dispose(),Y.dispose(),ue.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",wh),ce.removeEventListener("sessionend",bh),gr.stop()};function ee(w){w.preventDefault(),Zp("WebGLRenderer: Context Lost."),N=!0}function be(){Zp("WebGLRenderer: Context Restored."),N=!1;const w=yt.autoReset,I=le.enabled,G=le.autoUpdate,V=le.needsUpdate,H=le.type;_e(),yt.autoReset=w,le.enabled=I,le.autoUpdate=G,le.needsUpdate=V,le.type=H}function Ue(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wt(w){const I=w.target;I.removeEventListener("dispose",wt),rt(I)}function rt(w){hi(w),T.remove(w)}function hi(w){const I=T.get(w).programs;I!==void 0&&(I.forEach(function(G){ue.releaseProgram(G)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,G,V,H,ge){I===null&&(I=Pt);const Me=H.isMesh&&H.matrixWorld.determinant()<0,me=iv(w,I,G,V,H);he.setMaterial(V,Me);let we=G.index,Te=1;if(V.wireframe===!0){if(we=te.getWireframeAttribute(G),we===void 0)return;Te=2}const Fe=G.drawRange,Be=G.attributes.position;let Ae=Fe.start*Te,st=(Fe.start+Fe.count)*Te;ge!==null&&(Ae=Math.max(Ae,ge.start*Te),st=Math.min(st,(ge.start+ge.count)*Te)),we!==null?(Ae=Math.max(Ae,0),st=Math.min(st,we.count)):Be!=null&&(Ae=Math.max(Ae,0),st=Math.min(st,Be.count));const bt=st-Ae;if(bt<0||bt===1/0)return;se.setup(H,V,me,G,we);let St,at=ke;if(we!==null&&(St=K.get(we),at=Je,at.setIndex(St)),H.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*pn()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(H.isLine){let Wt=V.linewidth;Wt===void 0&&(Wt=1),he.setLineWidth(Wt*pn()),H.isLineSegments?at.setMode(D.LINES):H.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else H.isPoints?at.setMode(D.POINTS):H.isSprite&&at.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Wt=H._multiDrawStarts,ye=H._multiDrawCounts,mn=H._multiDrawCount,Ke=we?K.get(we).bytesPerElement:1,bn=T.get(V).currentProgram.getUniforms();for(let Kn=0;Kn<mn;Kn++)bn.setValue(D,"_gl_DrawID",Kn),at.render(Wt[Kn]/Ke,ye[Kn])}else if(H.isInstancedMesh)at.renderInstances(Ae,bt,H.count);else if(G.isInstancedBufferGeometry){const Wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ye=Math.min(G.instanceCount,Wt);at.renderInstances(Ae,bt,ye)}else at.render(Ae,bt)};function $n(w,I,G){w.transparent===!0&&w.side===Si&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,io(w,I,G),w.side=dr,w.needsUpdate=!0,io(w,I,G),w.side=Si):io(w,I,G)}this.compile=function(w,I,G=null){G===null&&(G=w),b=xe.get(G),b.init(I),S.push(b),G.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),w!==G&&w.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const V=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const me=ge[Me];$n(me,G,H),V.add(me)}else $n(ge,G,H),V.add(ge)}),b=S.pop(),V},this.compileAsync=function(w,I,G=null){const V=this.compile(w,I,G);return new Promise(H=>{function ge(){if(V.forEach(function(Me){T.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){H(w);return}setTimeout(ge,10)}Xe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let lc=null;function tv(w){lc&&lc(w)}function wh(){gr.stop()}function bh(){gr.start()}const gr=new jx;gr.setAnimationLoop(tv),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(w){lc=w,ce.setAnimationLoop(w),w===null?gr.stop():gr.start()},ce.addEventListener("sessionstart",wh),ce.addEventListener("sessionend",bh),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(w,I);const G=ce.enabled===!0&&ce.isPresenting===!0,V=R!==null&&(U===null||G)&&R.begin(P,U);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,I,U),b=xe.get(w,S.length),b.init(I),b.state.textureUnits=M.getTextureUnits(),S.push(b),it.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Re.setFromProjectionMatrix(it,ri,I.reversedDepth),We=this.localClippingEnabled,mt=Se.init(this.clippingPlanes,We),A=Z.get(w,C.length),A.init(),C.push(A),ce.enabled===!0&&ce.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&cc(Me,I,-1/0,P.sortObjects)}cc(w,I,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort($,de),gt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,gt&&re.addToRenderList(A,w),this.info.render.frame++,mt===!0&&Se.beginShadows();const H=b.state.shadowsArray;if(le.render(H,w,I),mt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&R.hasRenderPass())===!1){const Me=A.opaque,me=A.transmissive;if(b.setupLights(),I.isArrayCamera){const we=I.cameras;if(me.length>0)for(let Te=0,Fe=we.length;Te<Fe;Te++){const Be=we[Te];Ah(Me,me,w,Be)}gt&&re.render(w);for(let Te=0,Fe=we.length;Te<Fe;Te++){const Be=we[Te];Th(A,w,Be,Be.viewport)}}else me.length>0&&Ah(Me,me,w,I),gt&&re.render(w),Th(A,w,I)}U!==null&&J===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),V&&R.end(P),w.isScene===!0&&w.onAfterRender(P,w,I),se.resetDefaultState(),j=-1,z=null,S.pop(),S.length>0?(b=S[S.length-1],M.setTextureUnits(b.state.textureUnits),mt===!0&&Se.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,k!==null&&k.renderEnd()};function cc(w,I,G,V){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Re.intersectsSprite(w)){V&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);const Me=ie.update(w),me=w.material;me.visible&&A.push(w,Me,me,G,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Re.intersectsObject(w))){const Me=ie.update(w),me=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),He.copy(Me.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(me)){const we=Me.groups;for(let Te=0,Fe=we.length;Te<Fe;Te++){const Be=we[Te],Ae=me[Be.materialIndex];Ae&&Ae.visible&&A.push(w,Me,Ae,G,He.z,Be)}}else me.visible&&A.push(w,Me,me,G,He.z,null)}}const ge=w.children;for(let Me=0,me=ge.length;Me<me;Me++)cc(ge[Me],I,G,V)}function Th(w,I,G,V){const{opaque:H,transmissive:ge,transparent:Me}=w;b.setupLightsView(G),mt===!0&&Se.setGlobalState(P.clippingPlanes,G),V&&he.viewport(O.copy(V)),H.length>0&&no(H,I,G),ge.length>0&&no(ge,I,G),Me.length>0&&no(Me,I,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ah(w,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Ae=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new li(1,1,{generateMipmaps:!0,type:Ae?Di:_n,minFilter:Pr,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ge=b.state.transmissionRenderTarget[V.id],Me=V.viewport||O;ge.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),we=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(ae),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),gt&&re.render(G);const Fe=P.toneMapping;P.toneMapping=oi;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),mt===!0&&Se.setGlobalState(P.clippingPlanes,V),no(w,G,V),M.updateMultisampleRenderTarget(ge),M.updateRenderTargetMipmap(ge),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let st=0,bt=I.length;st<bt;st++){const St=I[st],{object:at,geometry:Wt,material:ye,group:mn}=St;if(ye.side===Si&&at.layers.test(V.layers)){const Ke=ye.side;ye.side=hn,ye.needsUpdate=!0,Ch(at,G,V,Wt,ye,mn),ye.side=Ke,ye.needsUpdate=!0,Ae=!0}}Ae===!0&&(M.updateMultisampleRenderTarget(ge),M.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,we,Te),P.setClearColor(ae,fe),Be!==void 0&&(V.viewport=Be),P.toneMapping=Fe}function no(w,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let H=0,ge=w.length;H<ge;H++){const Me=w[H],{object:me,geometry:we,group:Te}=Me;let Fe=Me.material;Fe.allowOverride===!0&&V!==null&&(Fe=V),me.layers.test(G.layers)&&Ch(me,I,G,we,Fe,Te)}}function Ch(w,I,G,V,H,ge){w.onBeforeRender(P,I,G,V,H,ge),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(P,I,G,V,w,ge),H.transparent===!0&&H.side===Si&&H.forceSinglePass===!1?(H.side=hn,H.needsUpdate=!0,P.renderBufferDirect(G,I,V,H,w,ge),H.side=dr,H.needsUpdate=!0,P.renderBufferDirect(G,I,V,H,w,ge),H.side=Si):P.renderBufferDirect(G,I,V,H,w,ge),w.onAfterRender(P,I,G,V,H,ge)}function io(w,I,G){I.isScene!==!0&&(I=Pt);const V=T.get(w),H=b.state.lights,ge=b.state.shadowsArray,Me=H.state.version,me=ue.getParameters(w,H.state,ge,I,G,b.state.lightProbeGridArray),we=ue.getProgramCacheKey(me);let Te=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const Fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=F.get(w.envMap||V.environment,Fe),V.envMapRotation=V.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",wt),Te=new Map,V.programs=Te);let Be=Te.get(we);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===Me)return Nh(w,me),Be}else me.uniforms=ue.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,G,me),w.onBeforeCompile(me,P),Be=ue.acquireProgram(me,we),Te.set(we,Be),V.uniforms=me.uniforms;const Ae=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),Nh(w,me),V.needsLights=sv(w),V.lightsStateVersion=Me,V.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Be,V.uniformsList=null,Be}function Rh(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=cl.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Nh(w,I){const G=T.get(w);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function nv(w,I){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;E.setFromMatrixPosition(I.matrixWorld);for(let G=0,V=w.length;G<V;G++){const H=w[G];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function iv(w,I,G,V,H){I.isScene!==!0&&(I=Pt),M.resetTextureUnits();const ge=I.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,me=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ye.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Te=F.get(V.envMap||Me,we),Fe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,bt=!!G.morphAttributes.color;let St=oi;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(St=P.toneMapping);const at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Wt=at!==void 0?at.length:0,ye=T.get(V),mn=b.state.lights;if(mt===!0&&(We===!0||w!==z)){const ct=w===z&&V.id===j;Se.setState(V,w,ct)}let Ke=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==mn.state.version||ye.outputColorSpace!==me||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Te||V.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==Fe||ye.vertexTangents!==Be||ye.morphTargets!==Ae||ye.morphNormals!==st||ye.morphColors!==bt||ye.toneMapping!==St||ye.morphTargetsCount!==Wt||!!ye.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ye.__version=V.version);let bn=ye.currentProgram;Ke===!0&&(bn=io(V,I,H),k&&V.isNodeMaterial&&k.onUpdateProgram(V,bn,ye));let Kn=!1,Fi=!1,Wr=!1;const ot=bn.getUniforms(),Tt=ye.uniforms;if(he.useProgram(bn.program)&&(Kn=!0,Fi=!0,Wr=!0),V.id!==j&&(j=V.id,Fi=!0),ye.needsLights){const ct=nv(b.state.lightProbeGridArray,H);ye.lightProbeGrid!==ct&&(ye.lightProbeGrid=ct,Fi=!0)}if(Kn||z!==w){he.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",w.projectionMatrix),ot.setValue(D,"viewMatrix",w.matrixWorldInverse);const Oi=ot.map.cameraPosition;Oi!==void 0&&Oi.setValue(D,dt.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,Fi=!0,Wr=!0)}if(ye.needsLights&&(mn.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",mn.state.directionalShadowMap,M),mn.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",mn.state.spotShadowMap,M),mn.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",mn.state.pointShadowMap,M)),H.isSkinnedMesh){ot.setOptional(D,H,"bindMatrix"),ot.setOptional(D,H,"bindMatrixInverse");const ct=H.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(D,"boneTexture",ct.boneTexture,M))}H.isBatchedMesh&&(ot.setOptional(D,H,"batchingTexture"),ot.setValue(D,"batchingTexture",H._matricesTexture,M),ot.setOptional(D,H,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",H._indirectTexture,M),ot.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",H._colorsTexture,M));const ki=G.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Le.update(H,G,bn),(Fi||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,ot.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(Tt.envMapIntensity.value=I.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=ET()),Fi){if(ot.setValue(D,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&rv(Tt,Wr),ge&&V.fog===!0&&X.refreshFogUniforms(Tt,ge),X.refreshMaterialUniforms(Tt,V,Pe,je,b.state.transmissionRenderTarget[w.id]),ye.needsLights&&ye.lightProbeGrid){const ct=ye.lightProbeGrid;Tt.probesSH.value=ct.texture,Tt.probesMin.value.copy(ct.boundingBox.min),Tt.probesMax.value.copy(ct.boundingBox.max),Tt.probesResolution.value.copy(ct.resolution)}cl.upload(D,Rh(ye),Tt,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cl.upload(D,Rh(ye),Tt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(D,"center",H.center),ot.setValue(D,"modelViewMatrix",H.modelViewMatrix),ot.setValue(D,"normalMatrix",H.normalMatrix),ot.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ct=V.uniformsGroups;for(let Oi=0,Xr=ct.length;Oi<Xr;Oi++){const Ph=ct[Oi];Y.update(Ph,bn),Y.bind(Ph,bn)}}return bn}function rv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function sv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,I,G){const V=T.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=I,T.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,I){const G=T.get(w);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const av=D.createFramebuffer();this.setRenderTarget=function(w,I=0,G=0){U=w,q=I,J=G;let V=null,H=!1,ge=!1;if(w){const me=T.get(w);if(me.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),O.copy(w.viewport),W.copy(w.scissor),Q=w.scissorTest,he.viewport(O),he.scissor(W),he.setScissorTest(Q),j=-1;return}else if(me.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(me.__hasExternalTextures)M.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Fe=w.depthTexture;if(me.__boundDepthTexture!==Fe){if(Fe!==null&&T.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ge=!0);const Te=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?V=Te[I][G]:V=Te[I],H=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?V=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?V=Te[G]:V=Te,O.copy(w.viewport),W.copy(w.scissor),Q=w.scissorTest}else O.copy(oe).multiplyScalar(Pe).floor(),W.copy(Ce).multiplyScalar(Pe).floor(),Q=De;if(G!==0&&(V=av),he.bindFramebuffer(D.FRAMEBUFFER,V)&&he.drawBuffers(w,V),he.viewport(O),he.scissor(W),he.setScissorTest(Q),H){const me=T.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,G)}else if(ge){const me=I;for(let we=0;we<w.textures.length;we++){const Te=T.get(w.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Te.__webglTexture,G,me)}}else if(w!==null&&G!==0){const me=T.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,G)}j=-1},this.readRenderTargetPixels=function(w,I,G,V,H,ge,Me,me=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){he.bindFramebuffer(D.FRAMEBUFFER,we);try{const Te=w.textures[me],Fe=Te.format,Be=Te.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!lt.textureFormatReadable(Fe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Be)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-V&&G>=0&&G<=w.height-H&&D.readPixels(I,G,V,H,L.convert(Fe),L.convert(Be),ge)}finally{const Te=U!==null?T.get(U).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,I,G,V,H,ge,Me,me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(I>=0&&I<=w.width-V&&G>=0&&G<=w.height-H){he.bindFramebuffer(D.FRAMEBUFFER,we);const Te=w.textures[me],Fe=Te.format,Be=Te.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!lt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(I,G,V,H,L.convert(Fe),L.convert(Be),0);const st=U!==null?T.get(U).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,st);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await FS(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Ae),D.deleteSync(bt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,I=null,G=0){const V=Math.pow(2,-G),H=Math.floor(w.image.width*V),ge=Math.floor(w.image.height*V),Me=I!==null?I.x:0,me=I!==null?I.y:0;M.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Me,me,H,ge),he.unbindTexture()};const ov=D.createFramebuffer(),lv=D.createFramebuffer();this.copyTextureToTexture=function(w,I,G=null,V=null,H=0,ge=0){let Me,me,we,Te,Fe,Be,Ae,st,bt;const St=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(G!==null)Me=G.max.x-G.min.x,me=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,Te=G.min.x,Fe=G.min.y,Be=G.isBox3?G.min.z:0;else{const Tt=Math.pow(2,-H);Me=Math.floor(St.width*Tt),me=Math.floor(St.height*Tt),w.isDataArrayTexture?we=St.depth:w.isData3DTexture?we=Math.floor(St.depth*Tt):we=1,Te=0,Fe=0,Be=0}V!==null?(Ae=V.x,st=V.y,bt=V.z):(Ae=0,st=0,bt=0);const at=L.convert(I.format),Wt=L.convert(I.type);let ye;I.isData3DTexture?(M.setTexture3D(I,0),ye=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(M.setTexture2DArray(I,0),ye=D.TEXTURE_2D_ARRAY):(M.setTexture2D(I,0),ye=D.TEXTURE_2D),he.activeTexture(D.TEXTURE0),he.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),he.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),he.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const mn=he.getParameter(D.UNPACK_ROW_LENGTH),Ke=he.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=he.getParameter(D.UNPACK_SKIP_PIXELS),Kn=he.getParameter(D.UNPACK_SKIP_ROWS),Fi=he.getParameter(D.UNPACK_SKIP_IMAGES);he.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),he.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),he.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),he.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),he.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Wr=w.isDataArrayTexture||w.isData3DTexture,ot=I.isDataArrayTexture||I.isData3DTexture;if(w.isDepthTexture){const Tt=T.get(w),ki=T.get(I),ct=T.get(Tt.__renderTarget),Oi=T.get(ki.__renderTarget);he.bindFramebuffer(D.READ_FRAMEBUFFER,ct.__webglFramebuffer),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Xr=0;Xr<we;Xr++)Wr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(w).__webglTexture,H,Be+Xr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(I).__webglTexture,ge,bt+Xr)),D.blitFramebuffer(Te,Fe,Me,me,Ae,st,Me,me,D.DEPTH_BUFFER_BIT,D.NEAREST);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||T.has(w)){const Tt=T.get(w),ki=T.get(I);he.bindFramebuffer(D.READ_FRAMEBUFFER,ov),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,lv);for(let ct=0;ct<we;ct++)Wr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,H,Be+ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,H),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ki.__webglTexture,ge,bt+ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ki.__webglTexture,ge),H!==0?D.blitFramebuffer(Te,Fe,Me,me,Ae,st,Me,me,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(ye,ge,Ae,st,bt+ct,Te,Fe,Me,me):D.copyTexSubImage2D(ye,ge,Ae,st,Te,Fe,Me,me);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(ye,ge,Ae,st,bt,Me,me,we,at,Wt,St.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,ge,Ae,st,bt,Me,me,we,at,St.data):D.texSubImage3D(ye,ge,Ae,st,bt,Me,me,we,at,Wt,St):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Ae,st,Me,me,at,Wt,St.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Ae,st,St.width,St.height,at,St.data):D.texSubImage2D(D.TEXTURE_2D,ge,Ae,st,Me,me,at,Wt,St);he.pixelStorei(D.UNPACK_ROW_LENGTH,mn),he.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),he.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),he.pixelStorei(D.UNPACK_SKIP_ROWS,Kn),he.pixelStorei(D.UNPACK_SKIP_IMAGES,Fi),ge===0&&I.generateMipmaps&&D.generateMipmap(ye),he.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){q=0,J=0,U=null,he.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}const Gm={clearColor:67624,dprCap:2,fov:56,cameraPosition:{x:0,y:1.9,z:7.4}},bT=t=>({...Gm,...t,cameraPosition:{...Gm.cameraPosition}}),TT=async()=>{const t=new SM;try{const e=await t.loadAsync("/micro-texture.png");return e.wrapS=Va,e.wrapT=Va,e.colorSpace=on,e.needsUpdate=!0,{microTexture:e}}catch{return{microTexture:null}}},AT=(t,e)=>{const n=new QS;n.background=new ze(e.clearColor),n.fog=new fh(new ze(e.clearColor),.08);const i=new Rn(e.fov,1,.1,220);i.position.set(e.cameraPosition.x,e.cameraPosition.y,e.cameraPosition.z),i.lookAt(0,1.2,0);const r=new MM(11128063,1378856,.95);n.add(r);const s=new bM(16777215,1.35);s.position.set(7.5,11.5,6.5),s.castShadow=!1,n.add(s);const a=new to(60,60,1,1),o=new Vx({color:462901,roughness:.95,metalness:0,map:t.microTexture??void 0});t.microTexture&&t.microTexture.repeat.set(6,6);const l=new Yn(a,o);l.rotation.x=-Math.PI/2,l.position.y=0,n.add(l);const c=new gh(1.05,2),p=new mM({color:14350335,roughness:.24,metalness:.06,clearcoat:1,clearcoatRoughness:.28,emissive:new ze(539903),emissiveIntensity:.25}),u=new Yn(c,p);return u.position.set(0,1.25,0),n.add(u),{scene:n,camera:i,update:(v,y)=>{u.rotation.y+=v*.55,u.rotation.x=Math.sin(y*.65)*.08,s.position.x=7.5+Math.sin(y*.35)*1.7,s.position.z=6.5+Math.cos(y*.35)*1.7,i.lookAt(0,1.1,0)},dispose:()=>{a.dispose(),c.dispose(),o.dispose(),p.dispose()}}},CT=async(t,e)=>{const n=bT(e),i=await TT(),r=AT(i,n),s=new wT({antialias:!0});s.outputColorSpace=on,s.setClearColor(n.clearColor,1),s.domElement.style.width="100%",s.domElement.style.height="100%",s.domElement.style.display="block",t.appendChild(s.domElement);const a=new CM;let o=0,l=!1;const c=()=>{if(l)return;const m=Math.max(1,t.clientWidth),v=Math.max(1,t.clientHeight),y=Math.min(window.devicePixelRatio||1,n.dprCap);s.setPixelRatio(y),s.setSize(m,v,!1),r.camera.aspect=m/v,r.camera.updateProjectionMatrix()},p=new ResizeObserver(()=>c());p.observe(t),c();const u=()=>{if(l)return;const m=a.getDelta(),v=a.elapsedTime;r.update(m,v),s.render(r.scene,r.camera),o=window.requestAnimationFrame(u)};return o=window.requestAnimationFrame(u),{dispose:()=>{var m;l||(l=!0,p.disconnect(),window.cancelAnimationFrame(o),r.dispose(),(m=i.microTexture)==null||m.dispose(),s.dispose(),s.domElement.remove())}}};function RT({open:t,onClose:e}){const n=ve.useRef(null),i=ve.useMemo(()=>typeof document>"u"?null:document.body,[]);return ux(t),ve.useEffect(()=>{if(!t)return;const r=s=>{s.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[t,e]),ve.useEffect(()=>{if(!t||!n.current)return;let r=!0,s=null;return CT(n.current).then(a=>{if(!r){a.dispose();return}s=a}),()=>{r=!1,s==null||s.dispose()}},[t]),!t||!i?null:ic.createPortal(h.jsxs("div",{className:"fixed inset-0 z-[90]",children:[h.jsx("div",{className:"absolute inset-0 bg-ink-950",children:h.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(111,255,0,0.16),transparent_52%),radial-gradient(circle_at_72%_22%,rgba(255,69,195,0.14),transparent_58%),linear-gradient(180deg,rgba(1,8,40,0.6),rgba(1,8,40,0.96))]"})}),h.jsx("div",{ref:n,className:"absolute inset-0"}),h.jsx("div",{className:"absolute inset-x-0 top-0 z-10 border-b border-white/10 bg-black/30 backdrop-blur-xl",children:h.jsxs("div",{className:"mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Prototype"}),h.jsx("div",{className:"mt-1 truncate font-grotesk text-lg uppercase tracking-[0.08em] text-cream",children:"Tiny Titan Arena"})]}),h.jsxs("button",{type:"button",onClick:e,className:"liquid-glass glass-float inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-grotesk text-[12px] uppercase tracking-[0.16em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:[h.jsx("span",{className:"text-base leading-none",children:"×"}),h.jsx("span",{children:"Exit"})]})]})}),h.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-[1] bg-cover bg-center opacity-40 mix-blend-lighten",style:{backgroundImage:"url(/texture.png)"}})]}),i)}const jm=["hostile","neutral","passive"],sf={hostile:{label:"Hostile",glyph:"⟡",chip:"border-rose-400/25 bg-rose-400/10 text-rose-100",glow:"from-rose-400/18 via-white/[0.02] to-black/55",ring:"from-rose-300/35 via-white/15 to-white/5"},neutral:{label:"Neutral",glyph:"◈",chip:"border-amber-300/25 bg-amber-300/10 text-amber-50",glow:"from-amber-300/16 via-white/[0.02] to-black/55",ring:"from-amber-200/30 via-white/15 to-white/5"},passive:{label:"Passive",glyph:"✶",chip:"border-emerald-300/25 bg-emerald-300/10 text-emerald-50",glow:"from-emerald-300/16 via-white/[0.02] to-black/55",ring:"from-emerald-200/30 via-white/15 to-white/5"}},Qx=t=>t.split(/[-_]/g).filter(Boolean).map(e=>e.slice(0,1).toUpperCase()+e.slice(1)).join(" "),Jx=({rating:t})=>{const e=Number.isFinite(t)?Math.max(0,Math.min(5,Math.round(t))):0;return h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"flex gap-1",children:Array.from({length:5}).map((n,i)=>h.jsx("span",{className:["h-1.5 w-5 rounded-full",i<e?"bg-white/75":"bg-white/12"].join(" "),"aria-hidden":"true"},i))}),h.jsxs("div",{className:"text-xs font-medium text-white/55",children:["Danger ",e,"/5"]})]})},Wm=({children:t})=>h.jsx("span",{className:"inline-flex items-center rounded-full border border-cream/10 bg-white/[0.04] px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70",children:t}),NT=({creature:t,planets:e})=>{const n=ve.useMemo(()=>new Map(e.map(r=>[r.id,r.name])),[e]),i=sf[t.role];return h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl p-6",children:[h.jsx("div",{className:["absolute -inset-14 bg-gradient-to-b blur-2xl",i.glow].join(" ")}),h.jsxs("div",{className:"relative",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",i.chip].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:i.glyph}),h.jsx("span",{children:i.label})]}),h.jsx("div",{className:"mt-5 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Behavior summary"}),h.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/75",children:t.behavior})]}),h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/35 px-5 py-4",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Threat Scan"}),h.jsx("div",{className:"mt-2",children:h.jsx(Jx,{rating:t.dangerRating})})]})]}),h.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-2",children:[h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Habitat"}),h.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.habitatPlanetIds.map(r=>h.jsx(Wm,{children:n.get(r)??Qx(r)},r))})]}),h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Tags"}),h.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.tags.map(r=>h.jsx(Wm,{children:r},r))})]})]})]})]}),h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Field Note"}),h.jsx("div",{className:"mt-4 rounded-3xl border border-cream/10 bg-black/25 p-6 font-mono text-sm leading-relaxed text-cream/75",children:t.fieldNote})]})]})};function PT({creatures:t,planets:e,onOpenCreature:n}){const[i,r]=ve.useState(null),[s,a]=ve.useState("all"),o=ve.useMemo(()=>new Map(e.map(p=>[p.id,p.name])),[e]),l=ve.useMemo(()=>{const p=u=>jm.indexOf(u.role)*100+(5-u.dangerRating)*10+u.name.length/100;return[...t].sort((u,d)=>p(u)-p(d))},[t]),c=ve.useMemo(()=>s==="all"?l:l.filter(p=>p.role===s),[s,l]);return t.length===0?h.jsx("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:"Creature data unavailable."}):h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[h.jsx("div",{className:"font-mono text-sm text-cream/65",children:"Tap a creature card to expand the field panel. Open the dossier for a full readout."}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("button",{type:"button",onClick:()=>a("all"),className:["liquid-glass glass-float rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",s==="all"?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:"All"}),jm.map(p=>{const u=sf[p],d=s===p;return h.jsxs("button",{type:"button",onClick:()=>a(p),className:["liquid-glass glass-float inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",d?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:u.glyph}),h.jsx("span",{children:u.label})]},p)})]})]}),h.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:c.map(p=>{const u=i===p.id,d=sf[p.role],v=p.habitatPlanetIds.map(y=>o.get(y)??Qx(y))[0]??"Unknown habitat";return h.jsxs("div",{onClick:()=>r(y=>y===p.id?null:p.id),onKeyDown:y=>{y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),r(x=>x===p.id?null:p.id))},role:"button",tabIndex:0,"aria-expanded":u,className:["group liquid-glass glass-float relative cursor-pointer overflow-hidden rounded-2xl p-5 text-left","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"].join(" "),children:[h.jsx("div",{className:["pointer-events-none absolute -inset-16 bg-gradient-to-b blur-2xl",d.glow,"opacity-0 motion-safe:transition-opacity motion-safe:duration-300",u?"opacity-100":"group-hover:opacity-90"].join(" ")}),h.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0",d.ring,"motion-safe:transition-opacity motion-safe:duration-300",u?"opacity-100":"group-hover:opacity-70"].join(" ")}),h.jsxs("div",{className:"relative",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"truncate font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:p.name}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:v})]}),h.jsxs("div",{className:["liquid-glass inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",d.chip].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:d.glyph}),h.jsx("span",{children:d.label})]})]}),h.jsx("div",{className:"mt-4",children:h.jsx(Jx,{rating:p.dangerRating})}),p.tags.length>0?h.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:p.tags.slice(0,3).map(y=>h.jsx("span",{className:"inline-flex items-center rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-xs font-medium text-white/65",children:y},y))}):null,h.jsx("div",{className:["mt-5 grid overflow-hidden rounded-2xl border border-white/10 bg-black/25","motion-safe:transition-[grid-template-rows] motion-safe:duration-300",u?"grid-rows-[1fr]":"grid-rows-[0fr]"].join(" "),children:h.jsx("div",{className:"min-h-0 overflow-hidden",children:h.jsxs("div",{className:"p-4",children:[h.jsx("div",{className:"text-xs font-semibold tracking-wide text-white/55",children:"Behavior summary"}),h.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/72",children:p.behavior}),h.jsx("div",{className:"mt-4 text-xs font-semibold tracking-wide text-white/55",children:"Field note"}),h.jsx("div",{className:"mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm leading-relaxed text-white/75",children:p.fieldNote}),h.jsxs("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3",children:[h.jsx("div",{className:"text-xs font-medium text-white/45",children:u?"Tap card to collapse":""}),h.jsx("button",{type:"button",onClick:y=>{y.stopPropagation(),n(p)},className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-5 py-2.5 font-grotesk text-[12px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Open Dossier"})]})]})})}),h.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 text-xs",children:[h.jsx("div",{className:"text-white/45",children:u?"Expanded":"Tap to expand"}),h.jsx("div",{className:"text-white/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-white/75",children:"→"})]})]})]},p.id)})})]})}const af="tinyTitan.communityVote.selection.v1",ev="tinyTitan.communityVote.tallies.v1",LT=t=>typeof t!="number"||!Number.isFinite(t)?0:Math.max(0,Math.floor(t)),DT=t=>{if(!t)return null;try{return JSON.parse(t)}catch{return null}},Bl=(t,e)=>{const n=Object.fromEntries(t.map(r=>[r,0]));if(!e||typeof e!="object")return n;const i=e;for(const r of t)n[r]=LT(i[r]);return n},Xm=(t,e)=>Bl(e,DT(t.getItem(ev))),qm=(t,e)=>{const n=t.getItem(af);return n&&e.includes(n)?n:null},IT=(t,e)=>{try{t.setItem(ev,JSON.stringify(e))}catch{}},UT=(t,e)=>{try{e===null?t.removeItem(af):t.setItem(af,e)}catch{}},FT=({planetIds:t,tallies:e,selection:n,planetId:i})=>{if(!t.includes(i))return{tallies:Bl(t,e),selection:n};const r=Bl(t,e);return n===i?{tallies:r,selection:n}:(n&&r[n]>0&&(r[n]-=1),r[i]=(r[i]??0)+1,{tallies:r,selection:i})},Ym={"crystal-planet":{glow:"from-cyan-400/26 via-sky-300/10 to-black/55",ring:"from-cyan-300/45 via-white/12 to-white/5",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100",bar:"from-cyan-300/60 via-sky-200/30 to-white/10",badge:"bg-cyan-300/15 text-cyan-100 ring-cyan-200/25"},"mushroom-planet":{glow:"from-fuchsia-500/22 via-violet-300/10 to-black/55",ring:"from-fuchsia-300/40 via-white/12 to-white/5",chip:"border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100",bar:"from-fuchsia-300/55 via-violet-200/25 to-white/10",badge:"bg-fuchsia-300/15 text-fuchsia-100 ring-fuchsia-200/25"},"ember-planet":{glow:"from-orange-400/22 via-amber-200/10 to-black/55",ring:"from-orange-300/40 via-white/12 to-white/5",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100",bar:"from-orange-300/60 via-amber-200/30 to-white/10",badge:"bg-orange-300/15 text-orange-100 ring-orange-200/25"}},$m={glow:"from-white/14 via-white/[0.02] to-black/55",ring:"from-white/30 via-white/12 to-white/5",chip:"border-white/12 bg-white/[0.04] text-white/75",bar:"from-white/30 via-white/10 to-white/5",badge:"bg-white/10 text-white/75 ring-white/15"},xu=()=>{if(typeof window>"u")return null;try{return window.localStorage}catch{return null}};function kT({planets:t}){var d;const e=ve.useMemo(()=>t.map(m=>m.id),[t]),[n,i]=ve.useState(null),[r,s]=ve.useState(()=>Bl(e,null)),[a,o]=ve.useState("ready");ve.useEffect(()=>{try{const m=xu();if(!m){o("unavailable");return}i(qm(m,e)),s(Xm(m,e)),o("ready")}catch{o("unavailable")}},[e]),ve.useEffect(()=>{const m=xu();if(!m||typeof window>"u")return;const v=y=>{y.storageArea===window.localStorage&&(s(Xm(m,e)),i(qm(m,e)))};return window.addEventListener("storage",v),()=>window.removeEventListener("storage",v)},[e]);const l=ve.useMemo(()=>Object.values(r).reduce((m,v)=>m+v,0),[r]),c=ve.useMemo(()=>e.length===0?null:[...e].sort((v,y)=>(r[y]??0)-(r[v]??0))[0]??null,[e,r]),p=m=>{if(!e.includes(m)||a!=="ready")return;const v=xu();if(!v){o("unavailable");return}s(y=>{const x=FT({planetIds:e,tallies:y,selection:n,planetId:m});return IT(v,x.tallies),UT(v,x.selection),i(x.selection),x.tallies})};if(t.length===0)return h.jsx("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:"Planet data unavailable."});const u=n?t.find(m=>m.id===n)??null:null;return h.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start",children:[h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[h.jsx("div",{className:"max-w-xl font-mono text-sm text-cream/70",children:"Cast a single vote for the next deep-dive reveal. Tallies update instantly and persist on this device."}),h.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",a==="ready"?"border-emerald-300/20 bg-emerald-300/10 text-emerald-100":"border-amber-300/25 bg-amber-300/10 text-amber-100"].join(" "),children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-current opacity-80"}),h.jsx("span",{children:a==="ready"?"Local persistence on":"Local persistence unavailable"})]})]}),h.jsx("div",{className:"grid gap-4",children:t.map(m=>{const v=Ym[m.id]??$m,y=n===m.id,x=r[m.id]??0,f=l>0?Math.round(x/l*100):0;return h.jsxs("button",{type:"button",onClick:()=>p(m.id),"aria-pressed":y,className:["group liquid-glass glass-float relative overflow-hidden rounded-3xl p-6 text-left","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",y?"ring-1 ring-neon/30":""].join(" "),children:[h.jsx("div",{className:["pointer-events-none absolute -inset-16 bg-gradient-to-b blur-2xl",v.glow,"opacity-60 motion-safe:transition-opacity motion-safe:duration-300",y?"opacity-95":"group-hover:opacity-95"].join(" ")}),h.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b opacity-0",v.ring,"motion-safe:transition-opacity motion-safe:duration-300",y?"opacity-100":"group-hover:opacity-100"].join(" ")}),h.jsxs("div",{className:"relative grid gap-4",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[h.jsx("div",{className:["liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",v.chip].join(" "),children:m.environment.biome}),y?h.jsx("div",{className:["liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] ring-1",v.badge].join(" "),children:"Your vote"}):null,c===m.id&&l>0?h.jsx("div",{className:"liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/75",children:"Leading"}):null]}),h.jsx("div",{className:"mt-4 font-grotesk text-xl uppercase tracking-[0.08em] text-cream sm:text-2xl",children:m.name}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:m.tagline})]}),h.jsxs("div",{className:"shrink-0 text-right",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Votes"}),h.jsx("div",{className:"mt-2 font-grotesk text-lg uppercase tracking-[0.08em] text-cream",children:x})]})]}),h.jsxs("div",{className:"grid gap-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs text-white/55",children:[h.jsx("span",{children:"Share"}),h.jsxs("span",{className:"font-semibold text-white/70",children:[f,"%"]})]}),h.jsx("div",{className:"h-2 overflow-hidden rounded-full border border-white/10 bg-black/35",children:h.jsx("div",{className:["h-full rounded-full bg-gradient-to-r motion-safe:transition-[width] motion-safe:duration-500",v.bar].join(" "),style:{width:`${f}%`}})})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 text-xs text-white/55",children:[h.jsx("div",{children:y?"Tap another planet to change your vote.":n?"Tap to switch your vote.":"Tap to vote."}),h.jsx("div",{className:"text-cream/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80",children:"→"})]})]})]},m.id)})})]}),h.jsx("div",{className:"space-y-4",children:h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Live Results"}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65","aria-live":"polite",children:l===0?"No votes yet on this device.":h.jsxs(h.Fragment,{children:[l," total ·"," ",h.jsx("span",{className:"font-semibold text-white/80",children:c?((d=t.find(m=>m.id===c))==null?void 0:d.name)??"—":"—"})," ","is leading"]})})]}),h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/35 px-5 py-4",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Your selection"}),h.jsx("div",{className:"mt-2 font-grotesk text-[14px] uppercase tracking-[0.08em] text-cream",children:u?u.name:"Not voted"})]})]}),h.jsx("div",{className:"mt-6 space-y-3",children:t.map(m=>{const v=Ym[m.id]??$m,y=r[m.id]??0,x=l>0?Math.round(y/l*100):0;return h.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/25 p-4",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"truncate text-sm font-semibold text-white",children:m.name}),h.jsx("div",{className:"mt-1 text-xs text-white/55",children:m.environment.biome})]}),h.jsxs("div",{className:"shrink-0 text-right",children:[h.jsxs("div",{className:"text-xs font-semibold text-white/60",children:[x,"%"]}),h.jsxs("div",{className:"mt-0.5 text-xs text-white/55",children:[y," votes"]})]})]}),h.jsx("div",{className:"mt-3 h-2 overflow-hidden rounded-full border border-white/10 bg-black/35",children:h.jsx("div",{className:["h-full rounded-full bg-gradient-to-r motion-safe:transition-[width] motion-safe:duration-500",v.bar].join(" "),style:{width:`${x}%`}})})]},m.id)})}),h.jsx("div",{className:"mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-white/60",children:"Results are stored locally. To simulate a larger community feed, open the site in two tabs and vote in both."})]})})]})}const OT=hx,BT=new Set(["a","an","and","are","as","at","be","but","by","for","from","has","have","how","i","in","is","it","its","of","on","or","that","the","their","then","they","this","to","was","what","when","where","why","with","you","your"]),pa=t=>t.toLowerCase().replace(/['’]/g,"").replace(/[^a-z0-9]+/g," ").trim(),zT=t=>{const e=pa(t).split(" ").filter(Boolean),n=[];for(const i of e)i.length<2||BT.has(i)||n.push(i);return Array.from(new Set(n))},Wo=(t,e)=>{if(e.length===0)return 0;let n=0;for(const i of e)t.includes(i)&&(n+=1);return n},VT=(t,e)=>{const n=pa(t.title),i=pa(t.snippet),r=pa(t.body),s=pa(t.tags.join(" ")),a=Wo(n,e)*6,o=Wo(s,e)*4,l=Wo(i,e)*3,c=Wo(r,e)*1;return a+o+l+c},HT=(t,e=4)=>{const n=zT(t),i=OT.map(a=>({entry:a,score:VT(a,n)})).sort((a,o)=>o.score-a.score),r=i.filter(a=>a.score>0).slice(0,e);return(r.length>0?r:i.slice(0,Math.min(e,i.length))).map(({entry:a})=>({id:a.id,title:a.title,category:a.category,snippet:a.snippet}))},GT=(t,e)=>e.length===0?`I couldn’t find a matching lore entry for “${t}”. Try asking about a specific planet (Crystal, Mushroom, Ember), a creature (Orb Moth, Titan Crab), or a tool (Bubble Blaster, Disco Ray).`:`Here’s what the field dossiers say:

${e.slice(0,4).map(i=>`- ${i.title}: ${i.snippet}`).join(`
`)}

If you want, ask a follow-up like “how does this affect traversal?” and I’ll narrow it down.`;(()=>{const t=globalThis.process,e=t==null?void 0:t.env;return!e||typeof e!="object"?{}:e})();const vu=()=>{const t=globalThis.crypto;return t&&typeof t.randomUUID=="function"?t.randomUUID():`${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`},jT=t=>t==="openai"?{label:"OpenAI",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100",dot:"bg-cyan-200/80 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]"}:{label:"Local Lore",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100",dot:"bg-orange-200/80 shadow-[0_0_0_3px_rgba(251,146,60,0.10)]"};function WT(){const[t,e]=ve.useState(()=>[{id:vu(),role:"assistant",content:"Ask me anything about Tiny Titan—planets, mounts, gadgets, storms, or mysteries. I’ll cite the lore entries I’m pulling from.",sources:[],mode:"fallback"}]),[n,i]=ve.useState(""),[r,s]=ve.useState(!1),[a,o]=ve.useState(null),l=ve.useRef(null),c=ve.useMemo(()=>{for(let v=t.length-1;v>=0;v-=1){const y=t[v];if(y.role==="assistant")return y}return null},[t]),p=ve.useMemo(()=>["What is the Prism Well?","How do Orb Moths affect Crystal Planet storms?","What makes the Bubble Blaster useful for traversal?","Why do Titan Crabs guard the vents?"],[]),u=()=>{const v=l.current;if(!v)return;const y=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;v.scrollTo({top:v.scrollHeight,behavior:y?"auto":"smooth"})},d=async v=>{s(!0),o(null);const y={id:vu(),role:"user",content:v};e(f=>[...f,y]);const x=vu();e(f=>[...f,{id:x,role:"assistant",content:"Reading the star charts…",sources:[]}]),queueMicrotask(u);try{const f=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:v})}),g=f.ok?await f.json():null;if(!g)throw new Error(`Request failed (${f.status})`);e(_=>_.map(E=>E.id===x?{...E,content:g.answer,sources:g.sources??[],mode:g.mode??"fallback"}:E)),queueMicrotask(u)}catch{const g=HT(v),_=GT(v,g);e(E=>E.map(A=>A.id===x?{...A,content:_,sources:g,mode:"fallback"}:A))}finally{s(!1)}},m=async v=>{if(v.preventDefault(),r)return;const y=n.trim();y&&(i(""),await d(y))};return h.jsxs("div",{className:"grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-start",children:[h.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl",children:[h.jsx("div",{className:"pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(232,121,249,0.14),transparent_60%),radial-gradient(circle_at_50%_110%,rgba(251,146,60,0.10),transparent_60%)] opacity-80 blur-2xl"}),h.jsxs("div",{className:"relative flex flex-col",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4 border-b border-cream/10 px-5 py-5 sm:px-6",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85",children:"Galactic Guide Console"}),h.jsx("div",{className:"mt-2 font-mono text-xs text-cream/55",children:"Answers are grounded in lore entries and always include sources."})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c!=null&&c.mode?(()=>{const v=jT(c.mode);return h.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",v.chip].join(" "),children:[h.jsx("span",{className:["h-2 w-2 rounded-full",v.dot].join(" ")}),h.jsx("span",{children:v.label})]})})():h.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/65",children:[h.jsx("span",{className:"h-2 w-2 rounded-full bg-white/20"}),h.jsx("span",{children:"Ready"})]}),r?h.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-sm",children:[h.jsx("span",{className:"h-2 w-2 rounded-full bg-cyan-200/70 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]"}),h.jsx("span",{children:"Scanning…"})]}):null]})]}),h.jsx("div",{ref:l,className:"max-h-[420px] overflow-auto px-5 py-5 sm:max-h-[520px] sm:px-6",children:h.jsx("div",{className:"space-y-4",children:t.map(v=>h.jsx("div",{className:["grid gap-2",v.role==="user"?"justify-items-end":"justify-items-start"].join(" "),children:h.jsx("div",{className:["w-full max-w-[560px] rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-glow",v.role==="user"?"border-white/10 bg-white/[0.06] text-white":"border-white/10 bg-black/35 text-white/85"].join(" "),children:h.jsx("div",{className:"whitespace-pre-wrap text-pretty",children:v.content})})},v.id))})}),h.jsxs("div",{className:"border-t border-white/10 px-5 py-4 sm:px-6",children:[h.jsx("div",{className:"flex flex-wrap gap-2",children:p.map(v=>h.jsx("button",{type:"button",onClick:()=>{r||i(v)},className:"liquid-glass glass-float inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/65 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:v},v))}),h.jsxs("form",{onSubmit:m,className:"mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end",children:[h.jsxs("div",{className:"grid gap-2",children:[h.jsx("label",{htmlFor:"galactic-question",className:"text-xs font-semibold tracking-wide text-white/55",children:"Ask a question"}),h.jsx("textarea",{id:"galactic-question",value:n,onChange:v=>i(v.target.value),placeholder:"E.g. Why do Sky Whales follow migration lines?",rows:2,className:"w-full resize-none rounded-3xl border border-cream/10 bg-black/40 px-5 py-4 font-mono text-sm text-cream/85 shadow-[0_18px_70px_rgba(0,0,0,0.45)] outline-none placeholder:text-cream/35 focus:border-cream/15 focus:ring-2 focus:ring-neon/60"})]}),h.jsx("button",{type:"submit",disabled:r||!n.trim(),className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-7 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Transmit"})]}),a?h.jsx("div",{className:"mt-3 text-xs text-orange-200/80",children:a}):null]})]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Sources"}),h.jsx("div",{className:"mt-2 font-mono text-xs text-cream/55",children:"Lore snippets used for the latest answer."})]}),c!=null&&c.sources&&c.sources.length>0?h.jsxs("div",{className:"font-mono text-xs text-cream/50",children:[c.sources.length," entries"]}):null]}),c!=null&&c.sources&&c.sources.length>0?h.jsx("div",{className:"mt-4 space-y-3",children:c.sources.map(v=>h.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/30 p-4",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"text-xs font-semibold text-white/80",children:v.title}),h.jsx("div",{className:"mt-1 text-[11px] font-medium text-white/45",children:v.id})]}),h.jsx("div",{className:"inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-white/65",children:v.category})]}),h.jsx("div",{className:"mt-3 text-sm leading-relaxed text-white/70",children:v.snippet})]},v.id))}):h.jsx("div",{className:"mt-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/60",children:"Ask a question to generate a source list."})]}),h.jsxs("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Tip"}),h.jsx("div",{className:"mt-3 leading-relaxed",children:"Try referencing a planet, creature, or tool name. The guide retrieves the closest lore entries before answering."})]})]})]})}const Km=["ground","air","burrow","water"],ul={ground:{label:"Ground",glyph:"⇢",glow:"from-cyan-400/25 via-white/[0.02] to-black/35",ring:"from-cyan-300/40 via-white/15 to-white/5",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100"},air:{label:"Air",glyph:"↟",glow:"from-fuchsia-400/22 via-white/[0.02] to-black/35",ring:"from-fuchsia-300/40 via-white/15 to-white/5",chip:"border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100"},burrow:{label:"Burrow",glyph:"⟱",glow:"from-orange-400/22 via-white/[0.02] to-black/35",ring:"from-orange-300/40 via-white/15 to-white/5",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100"},water:{label:"Water",glyph:"≈",glow:"from-sky-400/22 via-white/[0.02] to-black/35",ring:"from-sky-300/40 via-white/15 to-white/5",chip:"border-sky-300/25 bg-sky-300/10 text-sky-100"}},XT=t=>t.split(/[-_]/g).filter(Boolean).map(e=>e.slice(0,1).toUpperCase()+e.slice(1)).join(" "),of=({value:t})=>h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5}).map((e,n)=>h.jsx("span",{className:["h-1.5 w-6 rounded-full",n<t?"bg-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]":"bg-white/10"].join(" ")},n))}),h.jsxs("div",{className:"text-xs font-medium text-white/55",children:[t,"/5"]})]}),qT=({mount:t})=>{const e=ul[t.traversal];return h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl p-6",children:[h.jsx("div",{className:["absolute -inset-14 bg-gradient-to-b blur-2xl",e.glow].join(" ")}),h.jsxs("div",{className:"relative space-y-3",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:t.tagline}),h.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/75",children:t.travelFantasy})]}),h.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",e.chip].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:e.glyph}),h.jsx("span",{children:e.label})]})]}),h.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[h.jsxs("div",{className:"rounded-2xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Handling Profile"}),h.jsxs("div",{className:"mt-3 grid gap-2 font-mono text-sm text-cream/70",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsx("span",{className:"text-white/55",children:"Temperament"}),h.jsx("span",{className:"font-medium text-white/80",children:t.temperament})]}),h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsx("span",{className:"text-white/55",children:"Handling"}),h.jsx("span",{className:"font-medium text-white/80",children:t.handling})]}),h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsx("span",{className:"text-white/55",children:"Top speed"}),h.jsx(of,{value:t.topSpeedRating})]})]})]}),h.jsxs("div",{className:"rounded-2xl border border-cream/10 bg-black/30 p-5",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Habitat"}),h.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.habitatPlanetIds.map(n=>h.jsx("span",{className:"inline-flex items-center rounded-full border border-cream/10 bg-white/[0.04] px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70",children:XT(n)},n))})]})]})]})]}),h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Traversal Capabilities"}),h.jsx("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:t.capabilities.map(n=>h.jsx("div",{className:"rounded-2xl border border-cream/10 bg-black/25 px-5 py-4 font-mono text-sm text-cream/70",children:n},n))})]})]})};function YT({mounts:t,onOpenMount:e}){const[n,i]=ve.useState("all"),r=ve.useMemo(()=>{const u=d=>Km.indexOf(d.traversal)*10+(5-d.topSpeedRating);return[...t].sort((d,m)=>u(d)-u(m))},[t]),s=ve.useMemo(()=>n==="all"?r:r.filter(u=>u.traversal===n),[n,r]),[a,o]=ve.useState(()=>{var u;return((u=s[0])==null?void 0:u.id)??""});ve.useEffect(()=>{if(s.length===0){o("");return}s.some(u=>u.id===a)||o(s[0].id)},[s,a]);const l=ve.useMemo(()=>s.find(u=>u.id===a)??s[0]??null,[s,a]),c=u=>{u.id===a?e(u):o(u.id)},p=l?ul[l.traversal]:null;return h.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start",children:[h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[h.jsx("div",{className:"font-mono text-sm text-cream/65",children:"Tap a card to stage it. Tap again to open the expanded view."}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("button",{type:"button",onClick:()=>i("all"),className:["liquid-glass glass-float rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",n==="all"?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:"All"}),Km.map(u=>{const d=ul[u],m=n===u;return h.jsxs("button",{type:"button",onClick:()=>i(u),className:["liquid-glass glass-float inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",m?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:d.glyph}),h.jsx("span",{children:d.label})]},u)})]})]}),h.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl p-6",children:[p?h.jsx("div",{className:["absolute -inset-12 bg-gradient-to-b blur-2xl",p.glow].join(" ")}):null,h.jsx("div",{className:"relative",children:l?h.jsxs("div",{className:"grid gap-5",children:[h.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/75",children:[h.jsx("span",{className:"text-sm leading-none",children:p==null?void 0:p.glyph}),h.jsx("span",{children:p==null?void 0:p.label})]}),h.jsx("div",{className:"mt-5 font-grotesk text-2xl uppercase tracking-[0.08em] text-cream sm:text-3xl",children:l.name}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:l.tagline}),h.jsx("div",{className:"mt-4 font-mono text-sm leading-relaxed text-cream/75",children:l.travelFantasy})]}),h.jsxs("div",{className:"flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end",children:[h.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/35 px-5 py-4",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Top speed"}),h.jsx("div",{className:"mt-2",children:h.jsx(of,{value:l.topSpeedRating})})]}),h.jsx("button",{type:"button",onClick:()=>e(l),className:"glass-float inline-flex w-full items-center justify-center rounded-full bg-neon px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 sm:w-auto",children:"Open Expanded View"})]})]}),h.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[h.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/25 p-4",children:[h.jsx("div",{className:"text-xs font-semibold tracking-wide text-white/55",children:"Feel"}),h.jsxs("div",{className:"mt-2 grid gap-1 text-sm text-white/70",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsx("span",{className:"text-white/55",children:"Temperament"}),h.jsx("span",{className:"font-medium text-white/80",children:l.temperament})]}),h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsx("span",{className:"text-white/55",children:"Handling"}),h.jsx("span",{className:"font-medium text-white/80",children:l.handling})]})]})]}),h.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/25 p-4",children:[h.jsx("div",{className:"text-xs font-semibold tracking-wide text-white/55",children:"Signature Moves"}),h.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:l.capabilities.slice(0,3).map(u=>h.jsx("span",{className:"inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70",children:u},u))})]})]})]}):h.jsx("div",{className:"text-sm text-white/65",children:"No mounts available."})})]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("div",{className:"font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/70",children:"Mount roster"}),h.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-1",children:s.map(u=>{const d=ul[u.traversal],m=u.id===(l==null?void 0:l.id);return h.jsxs("button",{type:"button",onClick:()=>c(u),className:["group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",m?"ring-1 ring-neon/25":""].join(" "),children:[h.jsx("div",{className:["absolute -inset-10 bg-gradient-to-b opacity-80 blur-2xl",d.glow].join(" ")}),h.jsxs("div",{className:"relative flex items-start justify-between gap-4",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",d.chip].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:d.glyph}),h.jsx("span",{children:d.label})]}),h.jsx("span",{className:"font-mono text-[11px] text-cream/55",children:"Tap twice for details"})]}),h.jsx("div",{className:"mt-4 font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:u.name}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:u.tagline})]}),h.jsxs("div",{className:"shrink-0 text-right",children:[h.jsx("div",{className:"text-xs font-semibold text-white/55",children:"Speed"}),h.jsx("div",{className:"mt-1",children:h.jsx(of,{value:u.topSpeedRating})})]})]}),h.jsx("div",{className:"relative mt-4 flex flex-wrap gap-2",children:u.capabilities.slice(0,2).map(v=>h.jsx("span",{className:["inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",m?"border-white/14 bg-white/[0.06] text-white/75":"border-white/10 bg-white/[0.04] text-white/65"].join(" "),children:v},v))}),h.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 transition group-hover:opacity-100",d.ring].join(" ")})]},u.id)})})]})]})}function $T({onPlay:t}){return h.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start",children:[h.jsxs("div",{className:"liquid-glass glass-float relative overflow-hidden rounded-3xl p-6 sm:p-7",children:[h.jsx("div",{className:"pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_22%_18%,rgba(111,255,0,0.18),transparent_55%),radial-gradient(circle_at_76%_18%,rgba(255,69,195,0.14),transparent_62%)] blur-2xl"}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:"Early build"}),h.jsx("div",{className:"mt-3 text-balance font-grotesk text-2xl uppercase tracking-[0.08em] text-cream sm:text-3xl",children:"Drop into a micro arena"}),h.jsx("div",{className:"mt-3 max-w-xl font-mono text-sm leading-relaxed text-cream/70",children:"A tiny Three.js slice to validate rendering, layout, and lifecycle inside the reveal site."}),h.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3",children:[h.jsxs("button",{type:"button",onClick:t,className:"glow-neon inline-flex items-center gap-3 rounded-full bg-neon/90 px-6 py-3 font-grotesk text-[12px] uppercase tracking-[0.16em] text-ink-950 shadow-[0_18px_60px_rgba(111,255,0,0.26)] transition hover:bg-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:[h.jsx("span",{children:"Play Prototype"}),h.jsx("span",{"aria-hidden":"true",className:"text-cream/30",children:"→"})]}),h.jsx("div",{className:"rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-xs text-cream/65",children:"Esc or Exit to close"})]})]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:"What’s inside"}),h.jsxs("ul",{className:"mt-4 space-y-3 font-mono text-sm text-cream/70",children:[h.jsxs("li",{className:"flex gap-3",children:[h.jsx("span",{className:"mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/80"}),h.jsx("span",{children:"Engine loop + cleanup path"})]}),h.jsxs("li",{className:"flex gap-3",children:[h.jsx("span",{className:"mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/70"}),h.jsx("span",{children:"Scene lighting, fog, and a placeholder titan mesh"})]}),h.jsxs("li",{className:"flex gap-3",children:[h.jsx("span",{className:"mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/60"}),h.jsx("span",{children:"Asset loader wired for bundled textures"})]})]})]}),h.jsx("div",{className:"rounded-3xl border border-white/10 bg-black/35 p-6 font-mono text-xs text-cream/60",children:"This launcher is a scaffold for upcoming Tasks 2–6."})]})]})}const Zm={weapon:{label:"Weapon",glyph:"⚡",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100"},gadget:{label:"Gadget",glyph:"✦",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100"}},KT={"bubble-blaster":{glow:"from-cyan-400/25 via-sky-300/10 to-black/45",ring:"from-cyan-300/40 via-white/15 to-white/5"},"gravity-hammer":{glow:"from-fuchsia-400/24 via-violet-300/10 to-black/45",ring:"from-fuchsia-300/40 via-white/15 to-white/5"},"comet-cannon":{glow:"from-sky-400/22 via-cyan-300/10 to-black/45",ring:"from-sky-300/40 via-white/15 to-white/5"},"disco-ray":{glow:"from-orange-400/20 via-fuchsia-300/12 to-black/45",ring:"from-orange-300/40 via-white/15 to-white/5"}},ZT={glow:"from-cyan-400/20 via-white/[0.02] to-black/45",ring:"from-white/25 via-white/12 to-white/5"};function QT({weapons:t}){const[e,n]=ve.useState(null);return t.length===0?h.jsx("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:"Weapons data unavailable."}):h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[h.jsx("div",{className:"font-mono text-sm text-cream/65",children:"Hover to preview, tap to pin a card open."}),h.jsx("div",{className:"flex flex-wrap gap-2",children:Object.values(Zm).map(i=>h.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",i.chip].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:i.glyph}),h.jsx("span",{children:i.label})]},i.label))})]}),h.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:t.map(i=>{const r=KT[i.id]??ZT,s=e===i.id,a=Zm[i.category];return h.jsxs("button",{type:"button",onClick:()=>n(o=>o===i.id?null:i.id),"aria-expanded":s,className:["group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"].join(" "),children:[h.jsx("div",{className:["pointer-events-none absolute -inset-14 bg-gradient-to-b blur-2xl",r.glow,"opacity-0 motion-safe:transition-opacity motion-safe:duration-300","group-hover:opacity-100",s?"opacity-100":""].join(" ")}),h.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0",r.ring,"motion-safe:transition-opacity motion-safe:duration-300","group-hover:opacity-100",s?"opacity-100":""].join(" ")}),h.jsx("div",{className:["weapon-sheen pointer-events-none absolute inset-0 opacity-0","motion-safe:transition-opacity motion-safe:duration-300","group-hover:opacity-100",s?"opacity-100":""].join(" ")}),h.jsxs("div",{className:"relative",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"truncate font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:i.name}),h.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:i.tagline})]}),h.jsxs("div",{className:["liquid-glass inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",a.chip].join(" "),children:[h.jsx("span",{className:"text-sm leading-none",children:a.glyph}),h.jsx("span",{children:a.label})]})]}),h.jsxs("div",{className:"mt-5 flex items-center justify-between gap-3",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/50",children:"Primary"}),h.jsx("div",{className:"min-w-0 truncate font-mono text-xs text-cream/75",children:i.primaryEffect})]}),h.jsx("div",{className:["mt-4 grid overflow-hidden rounded-xl border border-white/10 bg-black/25","motion-safe:transition-[grid-template-rows] motion-safe:duration-300",s?"grid-rows-[1fr]":"grid-rows-[0fr]","group-hover:grid-rows-[1fr]"].join(" "),children:h.jsx("div",{className:"min-h-0 overflow-hidden",children:h.jsxs("div",{className:"p-4",children:[h.jsx("div",{className:"font-mono text-sm leading-relaxed text-cream/75",children:i.description}),h.jsxs("div",{className:"mt-4 grid gap-3 text-sm",children:[h.jsxs("div",{className:"grid gap-1",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Secondary"}),h.jsx("div",{className:"font-mono text-cream/70",children:i.secondaryEffect})]}),h.jsxs("div",{className:"grid gap-1",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Energy Source"}),h.jsx("div",{className:"font-mono text-cream/70",children:i.energySource})]}),h.jsxs("div",{className:"grid gap-1",children:[h.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Unlock Hint"}),h.jsx("div",{className:"font-mono text-cream/70",children:i.unlockHint})]})]})]})})}),h.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 text-xs",children:[h.jsx("div",{className:"font-mono text-cream/50",children:s?"Tap to collapse":"Tap to inspect"}),h.jsx("div",{className:"text-cream/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80",children:"→"})]})]})]},i.id)})})]})}function JT(){const t=ve.useMemo(()=>[{id:"trailer",label:"Trailer"},{id:"prototype",label:"Prototype"},{id:"planets",label:"Planets"},{id:"weapons",label:"Weapons"},{id:"mounts",label:"Mounts"},{id:"creatures",label:"Creatures"},{id:"vote",label:"Vote"},{id:"guide",label:"Galactic Guide"}],[]),e=ve.useMemo(()=>tS(),[]),n=e.ok?e.content.planets:[],i=e.ok?e.content.creatures:[],r=e.ok?e.content.weapons:[],s=e.ok?e.content.mounts:[],[a,o]=ve.useState({open:!1,title:"Detail",body:null}),l=(y,x)=>{o({open:!0,title:y,body:x})},c=()=>{o(y=>({...y,open:!1}))},[p,u]=ve.useState(!1),d=ve.useMemo(()=>new Map(i.map(y=>[y.id,y])),[i]),m=y=>{const x=y.nativeCreatureIds.map(f=>d.get(f)).filter(f=>!!f);l(y.name,h.jsx(By,{planet:y,creatures:x}))},v=y=>{const x=n.find(f=>f.id===y);x&&m(x)};return h.jsxs("div",{className:"grain",children:[h.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0",children:[h.jsx("div",{className:"absolute -inset-[20%] bg-aurora opacity-70 blur-3xl motion-safe:animate-aurora"}),h.jsx("div",{className:"absolute inset-0 bg-particles opacity-30 [background-size:240px_240px] motion-safe:animate-particles"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-ink-950/10 via-ink-950/35 to-ink-950"})]}),h.jsx("div",{id:"top",className:"section-anchor"}),h.jsx(Hy,{brand:"Tiny Titan",sections:t}),h.jsxs("main",{children:[h.jsx(Gy,{onExploreUniverse:()=>fx("planets")}),h.jsx(xr,{id:"prototype",kicker:"Playable Prototype",title:"Play Prototype",subtitle:"A full-screen Three.js scaffold integrated into the reveal site. Launch it, confirm it mounts cleanly, then exit back to the page.",children:h.jsx($T,{onPlay:()=>u(!0)})}),h.jsx(xr,{id:"planets",kicker:"Planet Explorer",title:"Planets",subtitle:"Three worlds, each with a survival brief and a creature roster. Tap any card to open its field dossier.",children:e.ok?h.jsx(zy,{planets:n,onSelect:v}):h.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glow backdrop-blur-xl",children:[h.jsx("div",{className:"text-sm font-semibold text-white",children:"Planet data unavailable"}),h.jsx("div",{className:"mt-2 text-sm text-white/65",children:"The bundled JSON content failed validation. Fix the issues below to re-enable the Planet Explorer."}),h.jsx("ul",{className:"mt-4 space-y-1 text-sm text-white/60",children:e.issues.slice(0,8).map(y=>h.jsxs("li",{children:[y.path,": ",y.message]},`${y.path}:${y.message}`))})]})}),h.jsx(xr,{id:"weapons",kicker:"Gadgets & Weapons",title:"The Armory Bay",subtitle:"Hover for quick specs, tap to lock a card open and read the full description.",children:h.jsx(QT,{weapons:r})}),h.jsx(xr,{id:"mounts",kicker:"Alien Mounts",title:"Mount Showcase",subtitle:"Stage a mount, compare traversal styles, then open an expanded view for capabilities and travel fantasy.",children:h.jsx(YT,{mounts:s,onOpenMount:y=>l(y.name,h.jsx(qT,{mount:y}))})}),h.jsx(xr,{id:"creatures",kicker:"Creature Encyclopedia",title:"Creature Encyclopedia",subtitle:"Scan each creature dossier, expand for a quick field panel, then open the full readout for survival-grade notes.",children:h.jsx(PT,{creatures:i,planets:n,onOpenCreature:y=>l(y.name,h.jsx(NT,{creature:y,planets:n}))})}),h.jsx(xr,{id:"vote",kicker:"Community",title:"Community Planet Vote",subtitle:"Choose which planet gets the next deep-dive reveal. Your vote persists locally and results update instantly.",children:h.jsx(kT,{planets:n})}),h.jsx(xr,{id:"guide",kicker:"AI Galactic Guide",title:"Ask about Tiny Titan",subtitle:"A lore-grounded Q&A console. Every answer cites the field dossier entries it used.",children:h.jsx(WT,{})}),h.jsx("footer",{className:"border-t border-white/10 py-10",children:h.jsx("div",{className:"mx-auto w-full max-w-6xl px-5 text-sm text-white/55 sm:px-8",children:"Tiny Titan — reveal site"})})]}),h.jsx(dx,{open:a.open,onClose:c,title:a.title,children:a.body}),h.jsx(RT,{open:p,onClose:()=>u(!1)}),h.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-[70] bg-cover bg-center opacity-60 mix-blend-lighten",style:{backgroundImage:"url(/texture.png)"}})]})}_u.createRoot(document.getElementById("root")).render(h.jsx(bv.StrictMode,{children:h.jsx(JT,{})}));
