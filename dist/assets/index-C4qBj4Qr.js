(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function kv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dg={exports:{}},_c={},Ug={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),Bv=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Hv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Wv=Symbol.for("react.suspense"),Xv=Symbol.for("react.memo"),qv=Symbol.for("react.lazy"),ap=Symbol.iterator;function Yv(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,Og={};function ia(t,e,n){this.props=t,this.context=e,this.refs=Og,this.updater=n||Fg}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bg(){}Bg.prototype=ia.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=Og,this.updater=n||Fg}var Vf=zf.prototype=new Bg;Vf.constructor=zf;kg(Vf,ia.prototype);Vf.isPureReactComponent=!0;var op=Array.isArray,zg=Object.prototype.hasOwnProperty,Hf={current:null},Vg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)zg.call(e,i)&&!Vg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:wo,type:t,key:s,ref:a,props:r,_owner:Hf.current}}function $v(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function Kv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lp=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kv(""+t.key):e.toString(36)}function wl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case wo:case Ov:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Gc(a,0):i,op(r)?(n="",t!=null&&(n=t.replace(lp,"$&/")+"/"),wl(r,e,n,"",function(c){return c})):r!=null&&(Gf(r)&&(r=$v(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(lp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",op(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Gc(s,o);a+=wl(s,e,n,l,r)}else if(l=Yv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Gc(s,o++),a+=wl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Io(t,e,n){if(t==null)return t;var i=[],r=0;return wl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},El={transition:null},Qv={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:El,ReactCurrentOwner:Hf};function Gg(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!Gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=ia;it.Fragment=Bv;it.Profiler=Vv;it.PureComponent=zf;it.StrictMode=zv;it.Suspense=Wv;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv;it.act=Gg;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=kg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Hf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)zg.call(e,l)&&!Vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:wo,type:t.type,key:r,ref:s,props:i,_owner:a}};it.createContext=function(t){return t={$$typeof:Gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hv,_context:t},t.Consumer=t};it.createElement=Hg;it.createFactory=function(t){var e=Hg.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:jv,render:t}};it.isValidElement=Gf;it.lazy=function(t){return{$$typeof:qv,_payload:{_status:-1,_result:t},_init:Zv}};it.memo=function(t,e){return{$$typeof:Xv,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};it.unstable_act=Gg;it.useCallback=function(t,e){return yn.current.useCallback(t,e)};it.useContext=function(t){return yn.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};it.useEffect=function(t,e){return yn.current.useEffect(t,e)};it.useId=function(){return yn.current.useId()};it.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return yn.current.useMemo(t,e)};it.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};it.useRef=function(t){return yn.current.useRef(t)};it.useState=function(t){return yn.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return yn.current.useTransition()};it.version="18.3.1";Ug.exports=it;var ye=Ug.exports;const Jv=kv(ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_=ye,t_=Symbol.for("react.element"),n_=Symbol.for("react.fragment"),i_=Object.prototype.hasOwnProperty,r_=e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s_={key:!0,ref:!0,__self:!0,__source:!0};function jg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)i_.call(e,i)&&!s_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:t_,type:t,key:s,ref:a,props:r,_owner:r_.current}}_c.Fragment=n_;_c.jsx=jg;_c.jsxs=jg;Dg.exports=_c;var p=Dg.exports,Zu={},Wg={exports:{}},kn={},Xg={exports:{}},qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,X){var ee=O.length;O.push(X);e:for(;0<ee;){var ae=ee-1>>>1,ge=O[ae];if(0<r(ge,X))O[ae]=X,O[ee]=ge,ee=ae;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var X=O[0],ee=O.pop();if(ee!==X){O[0]=ee;e:for(var ae=0,ge=O.length,$e=ge>>>1;ae<$e;){var Je=2*(ae+1)-1,Be=O[Je],J=Je+1,me=O[J];if(0>r(Be,ee))J<ge&&0>r(me,Be)?(O[ae]=me,O[J]=ee,ae=J):(O[ae]=Be,O[Je]=ee,ae=Je);else if(J<ge&&0>r(me,ee))O[ae]=me,O[J]=ee,ae=J;else break e}}return X}function r(O,X){var ee=O.sortIndex-X.sortIndex;return ee!==0?ee:O.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,u=null,d=3,m=!1,x=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=O)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function w(O){if(S=!1,_(O),!x)if(n(l)!==null)x=!0,j(A);else{var X=n(c);X!==null&&B(w,X.startTime-O)}}function A(O,X){x=!1,S&&(S=!1,f(y),y=-1),m=!0;var ee=d;try{for(_(X),u=n(l);u!==null&&(!(u.expirationTime>X)||O&&!N());){var ae=u.callback;if(typeof ae=="function"){u.callback=null,d=u.priorityLevel;var ge=ae(u.expirationTime<=X);X=t.unstable_now(),typeof ge=="function"?u.callback=ge:u===n(l)&&i(l),_(X)}else i(l);u=n(l)}if(u!==null)var $e=!0;else{var Je=n(c);Je!==null&&B(w,Je.startTime-X),$e=!1}return $e}finally{u=null,d=ee,m=!1}}var E=!1,R=null,y=-1,C=5,P=-1;function N(){return!(t.unstable_now()-P<C)}function L(){if(R!==null){var O=t.unstable_now();P=O;var X=!0;try{X=R(!0,O)}finally{X?W():(E=!1,R=null)}}else E=!1}var W;if(typeof g=="function")W=function(){g(L)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,F=$.port2;$.port1.onmessage=L,W=function(){F.postMessage(null)}}else W=function(){v(L,0)};function j(O){R=O,E||(E=!0,W())}function B(O,X){y=v(function(){O(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,j(A))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var ee=d;d=X;try{return O()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ee=d;d=O;try{return X()}finally{d=ee}},t.unstable_scheduleCallback=function(O,X,ee){var ae=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ae+ee:ae):ee=ae,O){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ee+ge,O={id:h++,callback:X,priorityLevel:O,startTime:ee,expirationTime:ge,sortIndex:-1},ee>ae?(O.sortIndex=ee,e(c,O),n(l)===null&&O===n(c)&&(S?(f(y),y=-1):S=!0,B(w,ee-ae))):(O.sortIndex=ge,e(l,O),x||m||(x=!0,j(A))),O},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(O){var X=d;return function(){var ee=d;d=X;try{return O.apply(this,arguments)}finally{d=ee}}}})(qg);Xg.exports=qg;var a_=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_=ye,Fn=a_;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,Qa={};function es(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Qa[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,l_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cp={},up={};function c_(t){return Qu.call(up,t)?!0:Qu.call(cp,t)?!1:l_.test(t)?up[t]=!0:(cp[t]=!0,!1)}function u_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d_(t,e,n,i){if(e===null||typeof e>"u"||u_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new Sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new Sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new Sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new Sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new Sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new Sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new Sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new Sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new Sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jf=/[\-:]([a-z])/g;function Wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jf,Wf);rn[e]=new Sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jf,Wf);rn[e]=new Sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jf,Wf);rn[e]=new Sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xf(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d_(e,n,r,i)&&(n=null),i||r===null?c_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),dp=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,jc;function La(t){if(jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||""}return`
`+jc+t}var Wc=!1;function Xc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?La(t):""}function f_(t){switch(t.tag){case 5:return La(t.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return t=Xc(t.type,!1),t;case 11:return t=Xc(t.type.render,!1),t;case 1:return t=Xc(t.type,!0),t;default:return""}}function nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case bs:return"Portal";case Ju:return"Profiler";case qf:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kg:return(t.displayName||"Context")+".Consumer";case $g:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $f:return e=t.displayName||null,e!==null?e:nd(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return nd(t(e))}catch{}}return null}function h_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p_(t){var e=Qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uo(t){t._valueTracker||(t._valueTracker=p_(t))}function Jg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Qg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function id(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e0(t,e){e=e.checked,e!=null&&Xf(t,"checked",e,!1)}function rd(t,e){e0(t,e);var n=Sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&sd(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sd(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ia(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function t0(t,e){var n=Sr(e.value),i=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fo,i0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m_=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){m_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function s0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=r0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var g_=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(t,e){if(e){if(g_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function Kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dd=null,Os=null,Bs=null;function gp(t){if(t=To(t)){if(typeof dd!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Ec(e),dd(t.stateNode,t.type,e))}}function a0(t){Os?Bs?Bs.push(t):Bs=[t]:Os=t}function o0(){if(Os){var t=Os,e=Bs;if(Bs=Os=null,gp(t),e)for(t=0;t<e.length;t++)gp(e[t])}}function l0(t,e){return t(e)}function c0(){}var qc=!1;function u0(t,e,n){if(qc)return t(e,n);qc=!0;try{return l0(t,e,n)}finally{qc=!1,(Os!==null||Bs!==null)&&(c0(),o0())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ec(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var fd=!1;if(zi)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){fd=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{fd=!1}function x_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Va=!1,Gl=null,jl=!1,hd=null,v_={onError:function(t){Va=!0,Gl=t}};function __(t,e,n,i,r,s,a,o,l){Va=!1,Gl=null,x_.apply(v_,arguments)}function y_(t,e,n,i,r,s,a,o,l){if(__.apply(this,arguments),Va){if(Va){var c=Gl;Va=!1,Gl=null}else throw Error(re(198));jl||(jl=!0,hd=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xp(t){if(ts(t)!==t)throw Error(re(188))}function S_(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xp(r),t;if(s===i)return xp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function f0(t){return t=S_(t),t!==null?h0(t):null}function h0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h0(t);if(e!==null)return e;t=t.sibling}return null}var p0=Fn.unstable_scheduleCallback,vp=Fn.unstable_cancelCallback,M_=Fn.unstable_shouldYield,w_=Fn.unstable_requestPaint,zt=Fn.unstable_now,E_=Fn.unstable_getCurrentPriorityLevel,Zf=Fn.unstable_ImmediatePriority,m0=Fn.unstable_UserBlockingPriority,Wl=Fn.unstable_NormalPriority,b_=Fn.unstable_LowPriority,g0=Fn.unstable_IdlePriority,yc=null,_i=null;function T_(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(yc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:R_,A_=Math.log,C_=Math.LN2;function R_(t){return t>>>=0,t===0?32:31-(A_(t)/C_|0)|0}var ko=64,Oo=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Da(o):(s&=a,s!==0&&(i=Da(s)))}else a=n&~r,a!==0?i=Da(a):s!==0&&(i=Da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function N_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-oi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=N_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function x0(){var t=ko;return ko<<=1,!(ko&4194240)&&(ko=64),t}function Yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function L_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function v0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _0,Jf,y0,S0,M0,md=!1,Bo=[],fr=null,hr=null,pr=null,to=new Map,no=new Map,ar=[],I_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _p(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function ga(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=To(e),e!==null&&Jf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D_(t,e,n,i,r){switch(e){case"focusin":return fr=ga(fr,t,e,n,i,r),!0;case"dragenter":return hr=ga(hr,t,e,n,i,r),!0;case"mouseover":return pr=ga(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return to.set(s,ga(to.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,no.set(s,ga(no.get(s)||null,t,e,n,i,r)),!0}return!1}function w0(t){var e=zr(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=d0(n),e!==null){t.blockedOn=e,M0(t.priority,function(){y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ud=i,n.target.dispatchEvent(i),ud=null}else return e=To(n),e!==null&&Jf(e),t.blockedOn=n,!1;e.shift()}return!0}function yp(t,e,n){bl(t)&&n.delete(e)}function U_(){md=!1,fr!==null&&bl(fr)&&(fr=null),hr!==null&&bl(hr)&&(hr=null),pr!==null&&bl(pr)&&(pr=null),to.forEach(yp),no.forEach(yp)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,md||(md=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,U_)))}function io(t){function e(r){return xa(r,t)}if(0<Bo.length){xa(Bo[0],t);for(var n=1;n<Bo.length;n++){var i=Bo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&xa(fr,t),hr!==null&&xa(hr,t),pr!==null&&xa(pr,t),to.forEach(e),no.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)w0(n),n.blockedOn===null&&ar.shift()}var zs=qi.ReactCurrentBatchConfig,ql=!0;function F_(t,e,n,i){var r=xt,s=zs.transition;zs.transition=null;try{xt=1,eh(t,e,n,i)}finally{xt=r,zs.transition=s}}function k_(t,e,n,i){var r=xt,s=zs.transition;zs.transition=null;try{xt=4,eh(t,e,n,i)}finally{xt=r,zs.transition=s}}function eh(t,e,n,i){if(ql){var r=gd(t,e,n,i);if(r===null)ru(t,e,i,Yl,n),_p(t,i);else if(D_(r,t,e,n,i))i.stopPropagation();else if(_p(t,i),e&4&&-1<I_.indexOf(t)){for(;r!==null;){var s=To(r);if(s!==null&&_0(s),s=gd(t,e,n,i),s===null&&ru(t,e,i,Yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ru(t,e,i,null,n)}}var Yl=null;function gd(t,e,n,i){if(Yl=null,t=Kf(i),t=zr(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function E0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E_()){case Zf:return 1;case m0:return 4;case Wl:case b_:return 16;case g0:return 536870912;default:return 16}default:return 16}}var cr=null,th=null,Tl=null;function b0(){if(Tl)return Tl;var t,e=th,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function Sp(){return!1}function On(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:Sp,this.isPropagationStopped=Sp,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nh=On(ra),bo=Ft({},ra,{view:0,detail:0}),O_=On(bo),$c,Kc,va,Sc=Ft({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ih,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?($c=t.screenX-va.screenX,Kc=t.screenY-va.screenY):Kc=$c=0,va=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Mp=On(Sc),B_=Ft({},Sc,{dataTransfer:0}),z_=On(B_),V_=Ft({},bo,{relatedTarget:0}),Zc=On(V_),H_=Ft({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),G_=On(H_),j_=Ft({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W_=On(j_),X_=Ft({},ra,{data:0}),wp=On(X_),q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$_[t])?!!e[t]:!1}function ih(){return K_}var Z_=Ft({},bo,{key:function(t){if(t.key){var e=q_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ih,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q_=On(Z_),J_=Ft({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=On(J_),ey=Ft({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ih}),ty=On(ey),ny=Ft({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=On(ny),ry=Ft({},Sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sy=On(ry),ay=[9,13,27,32],rh=zi&&"CompositionEvent"in window,Ha=null;zi&&"documentMode"in document&&(Ha=document.documentMode);var oy=zi&&"TextEvent"in window&&!Ha,T0=zi&&(!rh||Ha&&8<Ha&&11>=Ha),bp=" ",Tp=!1;function A0(t,e){switch(t){case"keyup":return ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function ly(t,e){switch(t){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(Tp=!0,bp);case"textInput":return t=e.data,t===bp&&Tp?null:t;default:return null}}function cy(t,e){if(As)return t==="compositionend"||!rh&&A0(t,e)?(t=b0(),Tl=th=cr=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T0&&e.locale!=="ko"?null:e.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uy[t.type]:e==="textarea"}function R0(t,e,n,i){a0(i),e=$l(e,"onChange"),0<e.length&&(n=new nh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ga=null,ro=null;function dy(t){z0(t,0)}function Mc(t){var e=Ns(t);if(Jg(e))return t}function fy(t,e){if(t==="change")return e}var N0=!1;if(zi){var Qc;if(zi){var Jc="oninput"in document;if(!Jc){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Jc=typeof Cp.oninput=="function"}Qc=Jc}else Qc=!1;N0=Qc&&(!document.documentMode||9<document.documentMode)}function Rp(){Ga&&(Ga.detachEvent("onpropertychange",P0),ro=Ga=null)}function P0(t){if(t.propertyName==="value"&&Mc(ro)){var e=[];R0(e,ro,t,Kf(t)),u0(dy,e)}}function hy(t,e,n){t==="focusin"?(Rp(),Ga=e,ro=n,Ga.attachEvent("onpropertychange",P0)):t==="focusout"&&Rp()}function py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mc(ro)}function my(t,e){if(t==="click")return Mc(e)}function gy(t,e){if(t==="input"||t==="change")return Mc(e)}function xy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:xy;function so(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qu.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function L0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vy(t){var e=I0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(i!==null&&sh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Pp(n,s);var a=Pp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _y=zi&&"documentMode"in document&&11>=document.documentMode,Cs=null,xd=null,ja=null,vd=!1;function Lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||Cs==null||Cs!==Hl(i)||(i=Cs,"selectionStart"in i&&sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ja&&so(ja,i)||(ja=i,i=$l(xd,"onSelect"),0<i.length&&(e=new nh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Cs)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},eu={},D0={};zi&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function wc(t){if(eu[t])return eu[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return eu[t]=e[n];return t}var U0=wc("animationend"),F0=wc("animationiteration"),k0=wc("animationstart"),O0=wc("transitionend"),B0=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){B0.set(t,e),es(e,[t])}for(var tu=0;tu<Ip.length;tu++){var nu=Ip[tu],yy=nu.toLowerCase(),Sy=nu[0].toUpperCase()+nu.slice(1);br(yy,"on"+Sy)}br(U0,"onAnimationEnd");br(F0,"onAnimationIteration");br(k0,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(O0,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,y_(i,e,void 0,t),t.currentTarget=null}function z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,o,c),s=l}}}if(jl)throw t=hd,jl=!1,hd=null,t}function At(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var i=t+"__bubble";n.has(i)||(V0(e,t,2,!1),n.add(i))}function iu(t,e,n){var i=0;e&&(i|=4),V0(n,t,i,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[Ho]){t[Ho]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(My.has(n)||iu(n,!1,t),iu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,iu("selectionchange",!1,e))}}function V0(t,e,n,i){switch(E0(e)){case 1:var r=F_;break;case 4:r=k_;break;default:r=eh}n=r.bind(null,e,n,t),r=void 0,!fd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ru(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=zr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}u0(function(){var c=s,h=Kf(n),u=[];e:{var d=B0.get(t);if(d!==void 0){var m=nh,x=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":m=Q_;break;case"focusin":x="focus",m=Zc;break;case"focusout":x="blur",m=Zc;break;case"beforeblur":case"afterblur":m=Zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ty;break;case U0:case F0:case k0:m=G_;break;case O0:m=iy;break;case"scroll":m=O_;break;case"wheel":m=sy;break;case"copy":case"cut":case"paste":m=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ep}var S=(e&4)!==0,v=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var g=c,_;g!==null;){_=g;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,f!==null&&(w=eo(g,f),w!=null&&S.push(oo(g,w,_)))),v)break;g=g.return}0<S.length&&(d=new m(d,x,null,n,h),u.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==ud&&(x=n.relatedTarget||n.fromElement)&&(zr(x)||x[Vi]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?zr(x):null,x!==null&&(v=ts(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(S=Mp,w="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Ep,w="onPointerLeave",f="onPointerEnter",g="pointer"),v=m==null?d:Ns(m),_=x==null?d:Ns(x),d=new S(w,g+"leave",m,n,h),d.target=v,d.relatedTarget=_,w=null,zr(h)===c&&(S=new S(f,g+"enter",x,n,h),S.target=_,S.relatedTarget=v,w=S),v=w,m&&x)t:{for(S=m,f=x,g=0,_=S;_;_=os(_))g++;for(_=0,w=f;w;w=os(w))_++;for(;0<g-_;)S=os(S),g--;for(;0<_-g;)f=os(f),_--;for(;g--;){if(S===f||f!==null&&S===f.alternate)break t;S=os(S),f=os(f)}S=null}else S=null;m!==null&&Up(u,d,m,S,!1),x!==null&&v!==null&&Up(u,v,x,S,!0)}}e:{if(d=c?Ns(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=fy;else if(Ap(d))if(N0)A=gy;else{A=py;var E=hy}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=my);if(A&&(A=A(t,c))){R0(u,A,n,h);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&sd(d,"number",d.value)}switch(E=c?Ns(c):window,t){case"focusin":(Ap(E)||E.contentEditable==="true")&&(Cs=E,xd=c,ja=null);break;case"focusout":ja=xd=Cs=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Lp(u,n,h);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Lp(u,n,h)}var R;if(rh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else As?A0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(T0&&n.locale!=="ko"&&(As||y!=="onCompositionStart"?y==="onCompositionEnd"&&As&&(R=b0()):(cr=h,th="value"in cr?cr.value:cr.textContent,As=!0)),E=$l(c,y),0<E.length&&(y=new wp(y,t,null,n,h),u.push({event:y,listeners:E}),R?y.data=R:(R=C0(n),R!==null&&(y.data=R)))),(R=oy?ly(t,n):cy(t,n))&&(c=$l(c,"onBeforeInput"),0<c.length&&(h=new wp("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:c}),h.data=R))}z0(u,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=eo(t,n),s!=null&&i.unshift(oo(t,s,r)),s=eo(t,e),s!=null&&i.push(oo(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=eo(n,s),l!=null&&a.unshift(oo(n,l,o))):r||(l=eo(n,s),l!=null&&a.push(oo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var wy=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function Fp(t){return(typeof t=="string"?t:""+t).replace(wy,`
`).replace(Ey,"")}function Go(t,e,n){if(e=Fp(e),Fp(t)!==e&&n)throw Error(re(425))}function Kl(){}var _d=null,yd=null;function Sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(t){return kp.resolve(null).then(t).catch(Ay)}:Md;function Ay(t){setTimeout(function(){throw t})}function su(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),io(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);io(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),xi="__reactFiber$"+sa,lo="__reactProps$"+sa,Vi="__reactContainer$"+sa,wd="__reactEvents$"+sa,Cy="__reactListeners$"+sa,Ry="__reactHandles$"+sa;function zr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Op(t);t!==null;){if(n=t[xi])return n;t=Op(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[xi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Ec(t){return t[lo]||null}var Ed=[],Ps=-1;function Tr(t){return{current:t}}function Ct(t){0>Ps||(t.current=Ed[Ps],Ed[Ps]=null,Ps--)}function Et(t,e){Ps++,Ed[Ps]=t.current,t.current=e}var Mr={},pn=Tr(Mr),bn=Tr(!1),qr=Mr;function Xs(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function Zl(){Ct(bn),Ct(pn)}function Bp(t,e,n){if(pn.current!==Mr)throw Error(re(168));Et(pn,e),Et(bn,n)}function H0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,h_(t)||"Unknown",r));return Ft({},n,i)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,qr=pn.current,Et(pn,t),Et(bn,bn.current),!0}function zp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=H0(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,Ct(bn),Ct(pn),Et(pn,t)):Ct(bn),Et(bn,n)}var Li=null,bc=!1,au=!1;function G0(t){Li===null?Li=[t]:Li.push(t)}function Ny(t){bc=!0,G0(t)}function Ar(){if(!au&&Li!==null){au=!0;var t=0,e=xt;try{var n=Li;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,bc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),p0(Zf,Ar),r}finally{xt=e,au=!1}}return null}var Ls=[],Is=0,Jl=null,ec=0,Gn=[],jn=0,Yr=null,Di=1,Ui="";function Dr(t,e){Ls[Is++]=ec,Ls[Is++]=Jl,Jl=t,ec=e}function j0(t,e,n){Gn[jn++]=Di,Gn[jn++]=Ui,Gn[jn++]=Yr,Yr=t;var i=Di;t=Ui;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Di=1<<32-oi(e)+r|n<<r|i,Ui=s+t}else Di=1<<s|n<<r|i,Ui=t}function ah(t){t.return!==null&&(Dr(t,1),j0(t,1,0))}function oh(t){for(;t===Jl;)Jl=Ls[--Is],Ls[Is]=null,ec=Ls[--Is],Ls[Is]=null;for(;t===Yr;)Yr=Gn[--jn],Gn[jn]=null,Ui=Gn[--jn],Gn[jn]=null,Di=Gn[--jn],Gn[jn]=null}var Un=null,Dn=null,Lt=!1,ii=null;function W0(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Dn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Di,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Dn=null,!0):!1;default:return!1}}function bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(Lt){var e=Dn;if(e){var n=e;if(!Vp(t,e)){if(bd(t))throw Error(re(418));e=mr(n.nextSibling);var i=Un;e&&Vp(t,e)?W0(i,n):(t.flags=t.flags&-4097|2,Lt=!1,Un=t)}}else{if(bd(t))throw Error(re(418));t.flags=t.flags&-4097|2,Lt=!1,Un=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function jo(t){if(t!==Un)return!1;if(!Lt)return Hp(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sd(t.type,t.memoizedProps)),e&&(e=Dn)){if(bd(t))throw X0(),Error(re(418));for(;e;)W0(t,e),e=mr(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Un?mr(t.stateNode.nextSibling):null;return!0}function X0(){for(var t=Dn;t;)t=mr(t.nextSibling)}function qs(){Dn=Un=null,Lt=!1}function lh(t){ii===null?ii=[t]:ii.push(t)}var Py=qi.ReactCurrentBatchConfig;function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Wo(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gp(t){var e=t._init;return e(t._payload)}function q0(t){function e(f,g){if(t){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=_r(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,g,_,w){return g===null||g.tag!==6?(g=hu(_,f.mode,w),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,w){var A=_.type;return A===Ts?h(f,g,_.props.children,w,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===rr&&Gp(A)===g.type)?(w=r(g,_.props),w.ref=_a(f,g,_),w.return=f,w):(w=Dl(_.type,_.key,_.props,null,f.mode,w),w.ref=_a(f,g,_),w.return=f,w)}function c(f,g,_,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=pu(_,f.mode,w),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function h(f,g,_,w,A){return g===null||g.tag!==7?(g=Xr(_,f.mode,w,A),g.return=f,g):(g=r(g,_),g.return=f,g)}function u(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hu(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Do:return _=Dl(g.type,g.key,g.props,null,f.mode,_),_.ref=_a(f,null,g),_.return=f,_;case bs:return g=pu(g,f.mode,_),g.return=f,g;case rr:var w=g._init;return u(f,w(g._payload),_)}if(Ia(g)||pa(g))return g=Xr(g,f.mode,_,null),g.return=f,g;Wo(f,g)}return null}function d(f,g,_,w){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:o(f,g,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Do:return _.key===A?l(f,g,_,w):null;case bs:return _.key===A?c(f,g,_,w):null;case rr:return A=_._init,d(f,g,A(_._payload),w)}if(Ia(_)||pa(_))return A!==null?null:h(f,g,_,w,null);Wo(f,_)}return null}function m(f,g,_,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(_)||null,o(g,f,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Do:return f=f.get(w.key===null?_:w.key)||null,l(g,f,w,A);case bs:return f=f.get(w.key===null?_:w.key)||null,c(g,f,w,A);case rr:var E=w._init;return m(f,g,_,E(w._payload),A)}if(Ia(w)||pa(w))return f=f.get(_)||null,h(g,f,w,A,null);Wo(g,w)}return null}function x(f,g,_,w){for(var A=null,E=null,R=g,y=g=0,C=null;R!==null&&y<_.length;y++){R.index>y?(C=R,R=null):C=R.sibling;var P=d(f,R,_[y],w);if(P===null){R===null&&(R=C);break}t&&R&&P.alternate===null&&e(f,R),g=s(P,g,y),E===null?A=P:E.sibling=P,E=P,R=C}if(y===_.length)return n(f,R),Lt&&Dr(f,y),A;if(R===null){for(;y<_.length;y++)R=u(f,_[y],w),R!==null&&(g=s(R,g,y),E===null?A=R:E.sibling=R,E=R);return Lt&&Dr(f,y),A}for(R=i(f,R);y<_.length;y++)C=m(R,f,y,_[y],w),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?y:C.key),g=s(C,g,y),E===null?A=C:E.sibling=C,E=C);return t&&R.forEach(function(N){return e(f,N)}),Lt&&Dr(f,y),A}function S(f,g,_,w){var A=pa(_);if(typeof A!="function")throw Error(re(150));if(_=A.call(_),_==null)throw Error(re(151));for(var E=A=null,R=g,y=g=0,C=null,P=_.next();R!==null&&!P.done;y++,P=_.next()){R.index>y?(C=R,R=null):C=R.sibling;var N=d(f,R,P.value,w);if(N===null){R===null&&(R=C);break}t&&R&&N.alternate===null&&e(f,R),g=s(N,g,y),E===null?A=N:E.sibling=N,E=N,R=C}if(P.done)return n(f,R),Lt&&Dr(f,y),A;if(R===null){for(;!P.done;y++,P=_.next())P=u(f,P.value,w),P!==null&&(g=s(P,g,y),E===null?A=P:E.sibling=P,E=P);return Lt&&Dr(f,y),A}for(R=i(f,R);!P.done;y++,P=_.next())P=m(R,f,y,P.value,w),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?y:P.key),g=s(P,g,y),E===null?A=P:E.sibling=P,E=P);return t&&R.forEach(function(L){return e(f,L)}),Lt&&Dr(f,y),A}function v(f,g,_,w){if(typeof _=="object"&&_!==null&&_.type===Ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Do:e:{for(var A=_.key,E=g;E!==null;){if(E.key===A){if(A=_.type,A===Ts){if(E.tag===7){n(f,E.sibling),g=r(E,_.props.children),g.return=f,f=g;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===rr&&Gp(A)===E.type){n(f,E.sibling),g=r(E,_.props),g.ref=_a(f,E,_),g.return=f,f=g;break e}n(f,E);break}else e(f,E);E=E.sibling}_.type===Ts?(g=Xr(_.props.children,f.mode,w,_.key),g.return=f,f=g):(w=Dl(_.type,_.key,_.props,null,f.mode,w),w.ref=_a(f,g,_),w.return=f,f=w)}return a(f);case bs:e:{for(E=_.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=pu(_,f.mode,w),g.return=f,f=g}return a(f);case rr:return E=_._init,v(f,g,E(_._payload),w)}if(Ia(_))return x(f,g,_,w);if(pa(_))return S(f,g,_,w);Wo(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,_),g.return=f,f=g):(n(f,g),g=hu(_,f.mode,w),g.return=f,f=g),a(f)):n(f,g)}return v}var Ys=q0(!0),Y0=q0(!1),tc=Tr(null),nc=null,Ds=null,ch=null;function uh(){ch=Ds=nc=null}function dh(t){var e=tc.current;Ct(tc),t._currentValue=e}function Ad(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){nc=t,ch=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(ch!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(nc===null)throw Error(re(308));Ds=t,nc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Vr=null;function fh(t){Vr===null?Vr=[t]:Vr.push(t)}function $0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,fh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,fh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qf(t,n)}}function jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ic(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,S=o;switch(d=e,m=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){u=x.call(m,u,d);break e}u=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,d=typeof x=="function"?x.call(m,u,d):x,d==null)break e;u=Ft({},u,d);break e;case 2:sr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=u):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Kr|=a,t.lanes=a,t.memoizedState=u}}function Wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ao={},yi=Tr(Ao),co=Tr(Ao),uo=Tr(Ao);function Hr(t){if(t===Ao)throw Error(re(174));return t}function ph(t,e){switch(Et(uo,e),Et(co,t),Et(yi,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=od(e,t)}Ct(yi),Et(yi,e)}function $s(){Ct(yi),Ct(co),Ct(uo)}function Z0(t){Hr(uo.current);var e=Hr(yi.current),n=od(e,t.type);e!==n&&(Et(co,t),Et(yi,n))}function mh(t){co.current===t&&(Ct(yi),Ct(co))}var Dt=Tr(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function gh(){for(var t=0;t<ou.length;t++)ou[t]._workInProgressVersionPrimary=null;ou.length=0}var Rl=qi.ReactCurrentDispatcher,lu=qi.ReactCurrentBatchConfig,$r=0,Ut=null,jt=null,Zt=null,sc=!1,Wa=!1,fo=0,Ly=0;function on(){throw Error(re(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function vh(t,e,n,i,r,s){if($r=s,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?Fy:ky,t=n(i,r),Wa){s=0;do{if(Wa=!1,fo=0,25<=s)throw Error(re(301));s+=1,Zt=jt=null,e.updateQueue=null,Rl.current=Oy,t=n(i,r)}while(Wa)}if(Rl.current=ac,e=jt!==null&&jt.next!==null,$r=0,Zt=jt=Ut=null,sc=!1,e)throw Error(re(300));return t}function _h(){var t=fo!==0;return fo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ut.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Kn(){if(jt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Zt===null?Ut.memoizedState:Zt.next;if(e!==null)Zt=e,jt=t;else{if(t===null)throw Error(re(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Zt===null?Ut.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function ho(t,e){return typeof e=="function"?e(t):e}function cu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if(($r&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=i):l=l.next=u,Ut.lanes|=h,Kr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ui(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ut.lanes|=s,Kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ui(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Q0(){}function J0(t,e){var n=Ut,i=Kn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,yh(nx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,po(9,tx.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(re(349));$r&30||ex(n,e,r)}return r}function ex(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tx(t,e,n,i){e.value=n,e.getSnapshot=i,ix(e)&&rx(t)}function nx(t,e,n){return n(function(){ix(e)&&rx(t)})}function ix(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function rx(t){var e=Hi(t,1);e!==null&&li(e,t,1,-1)}function Xp(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=Uy.bind(null,Ut,t),[e.memoizedState,t]}function po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function sx(){return Kn().memoizedState}function Nl(t,e,n,i){var r=mi();Ut.flags|=t,r.memoizedState=po(1|e,n,void 0,i===void 0?null:i)}function Tc(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(jt!==null){var a=jt.memoizedState;if(s=a.destroy,i!==null&&xh(i,a.deps)){r.memoizedState=po(e,n,s,i);return}}Ut.flags|=t,r.memoizedState=po(1|e,n,s,i)}function qp(t,e){return Nl(8390656,8,t,e)}function yh(t,e){return Tc(2048,8,t,e)}function ax(t,e){return Tc(4,2,t,e)}function ox(t,e){return Tc(4,4,t,e)}function lx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cx(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4,4,lx.bind(null,e,t),n)}function Sh(){}function ux(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dx(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function fx(t,e,n){return $r&21?(ui(n,e)||(n=x0(),Ut.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function Iy(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=lu.transition;lu.transition={};try{t(!1),e()}finally{xt=n,lu.transition=i}}function hx(){return Kn().memoizedState}function Dy(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},px(t))mx(e,n);else if(n=$0(t,e,n,i),n!==null){var r=vn();li(n,t,i,r),gx(n,e,i)}}function Uy(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(px(t))mx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ui(o,a)){var l=e.interleaved;l===null?(r.next=r,fh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$0(t,e,r,i),n!==null&&(r=vn(),li(n,t,i,r),gx(n,e,i))}}function px(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function mx(t,e){Wa=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qf(t,n)}}var ac={readContext:$n,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Fy={readContext:$n,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,lx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:Xp,useDebugValue:Sh,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Xp(!1),e=t[0];return t=Iy.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=mi();if(Lt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Qt===null)throw Error(re(349));$r&30||ex(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qp(nx.bind(null,i,s,t),[t]),i.flags|=2048,po(9,tx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Qt.identifierPrefix;if(Lt){var n=Ui,i=Di;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ky={readContext:$n,useCallback:ux,useContext:$n,useEffect:yh,useImperativeHandle:cx,useInsertionEffect:ax,useLayoutEffect:ox,useMemo:dx,useReducer:cu,useRef:sx,useState:function(){return cu(ho)},useDebugValue:Sh,useDeferredValue:function(t){var e=Kn();return fx(e,jt.memoizedState,t)},useTransition:function(){var t=cu(ho)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Q0,useSyncExternalStore:J0,useId:hx,unstable_isNewReconciler:!1},Oy={readContext:$n,useCallback:ux,useContext:$n,useEffect:yh,useImperativeHandle:cx,useInsertionEffect:ax,useLayoutEffect:ox,useMemo:dx,useReducer:uu,useRef:sx,useState:function(){return uu(ho)},useDebugValue:Sh,useDeferredValue:function(t){var e=Kn();return jt===null?e.memoizedState=t:fx(e,jt.memoizedState,t)},useTransition:function(){var t=uu(ho)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Q0,useSyncExternalStore:J0,useId:hx,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ac={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=vr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(li(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=vr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(li(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=vr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(li(e,t,i,n),Cl(e,t,i))}};function Yp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!so(n,i)||!so(r,s):!0}function xx(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Tn(e)?qr:pn.current,i=e.contextTypes,s=(i=i!=null)?Xs(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ac,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ac.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Tn(e)?qr:pn.current,r.context=Xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ac.enqueueReplaceState(r,r.state,null),ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e){try{var n="",i=e;do n+=f_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function du(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var By=typeof WeakMap=="function"?WeakMap:Map;function vx(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lc||(lc=!0,zd=i),Nd(t,e)},n}function _x(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Kp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new By;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Jy.bind(null,t,e,n),e.then(t,t))}function Zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var zy=qi.ReactCurrentOwner,En=!1;function xn(t,e,n,i){e.child=t===null?Y0(e,null,n,i):Ys(e,t.child,n,i)}function Jp(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=vh(t,e,n,i,s,r),n=_h(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(Lt&&n&&ah(e),e.flags|=1,xn(t,e,i,r),e.child)}function em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yx(t,e,s,i,r)):(t=Dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(a,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function yx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(so(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return Pd(t,e,n,i,r)}function Sx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(Fs,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Et(Fs,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Et(Fs,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Et(Fs,Ln),Ln|=i;return xn(t,e,r,n),e.child}function Mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,i,r){var s=Tn(n)?qr:pn.current;return s=Xs(e,s),Vs(e,r),n=vh(t,e,n,i,s,r),i=_h(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(Lt&&i&&ah(e),e.flags|=1,xn(t,e,n,r),e.child)}function tm(t,e,n,i,r){if(Tn(n)){var s=!0;Ql(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Pl(t,e),xx(e,n,i),Rd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=Tn(n)?qr:pn.current,c=Xs(e,c));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&$p(e,a,i,c),sr=!1;var d=e.memoizedState;a.state=d,ic(e,i,a,r),l=e.memoizedState,o!==i||d!==l||bn.current||sr?(typeof h=="function"&&(Cd(e,n,h,i),l=e.memoizedState),(o=sr||Yp(e,n,o,i,d,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,K0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ti(e.type,o),a.props=c,u=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=Tn(n)?qr:pn.current,l=Xs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||d!==l)&&$p(e,a,i,l),sr=!1,d=e.memoizedState,a.state=d,ic(e,i,a,r);var x=e.memoizedState;o!==u||d!==x||bn.current||sr?(typeof m=="function"&&(Cd(e,n,m,i),x=e.memoizedState),(c=sr||Yp(e,n,c,i,d,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ld(t,e,n,i,s,r)}function Ld(t,e,n,i,r,s){Mx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&zp(e,n,!1),Gi(t,e,s);i=e.stateNode,zy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,o,s)):xn(t,e,o,s),e.memoizedState=i.state,r&&zp(e,n,!0),e.child}function wx(t){var e=t.stateNode;e.pendingContext?Bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bp(t,e.context,!1),ph(t,e.containerInfo)}function nm(t,e,n,i,r){return qs(),lh(r),e.flags|=256,xn(t,e,n,i),e.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ex(t,e,n){var i=e.pendingProps,r=Dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Et(Dt,r&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Nc(a,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dd(n),e.memoizedState=Id,t):Mh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Vy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=_r(o,s):(s=Xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Dd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Id,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Mh(t,e){return e=Nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,i){return i!==null&&lh(i),Ys(e,t.child,null,n),t=Mh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=du(Error(re(422))),Xo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ys(e,t.child,null,a),e.child.memoizedState=Dd(a),e.memoizedState=Id,s);if(!(e.mode&1))return Xo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=du(s,i,void 0),Xo(t,e,a,i)}if(o=(a&t.childLanes)!==0,En||o){if(i=Qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),li(i,t,r,-1))}return Ch(),i=du(Error(re(421))),Xo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=eS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=mr(r.nextSibling),Un=e,Lt=!0,ii=null,t!==null&&(Gn[jn++]=Di,Gn[jn++]=Ui,Gn[jn++]=Yr,Di=t.id,Ui=t.overflow,Yr=e),e=Mh(e,i.children),e.flags|=4096,e)}function im(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ad(t.return,e,n)}function fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=Dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&im(t,n,e);else if(t.tag===19)im(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Et(Dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fu(e,!0,n,null,s);break;case"together":fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hy(t,e,n){switch(e.tag){case 3:wx(e),qs();break;case 5:Z0(e);break;case 1:Tn(e.type)&&Ql(e);break;case 4:ph(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Et(tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Et(Dt,Dt.current&1),e.flags|=128,null):n&e.child.childLanes?Ex(t,e,n):(Et(Dt,Dt.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);Et(Dt,Dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Et(Dt,Dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Sx(t,e,n)}return Gi(t,e,n)}var Tx,Ud,Ax,Cx;Tx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ud=function(){};Ax=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(yi.current);var s=null;switch(n){case"input":r=id(t,r),i=id(t,i),s=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),s=[];break;case"textarea":r=ad(t,r),i=ad(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Kl)}ld(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&At("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Cx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ya(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Gy(t,e,n){var i=e.pendingProps;switch(oh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return Tn(e.type)&&Zl(),ln(e),null;case 3:return i=e.stateNode,$s(),Ct(bn),Ct(pn),gh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Gd(ii),ii=null))),Ud(t,e),ln(e),null;case 5:mh(e);var r=Hr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ax(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return ln(e),null}if(t=Hr(yi.current),jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[lo]=s,t=(e.mode&1)!==0,n){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(r=0;r<Ua.length;r++)At(Ua[r],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":fp(i,s),At("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},At("invalid",i);break;case"textarea":pp(i,s),At("invalid",i)}ld(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,t),r=["children",""+o]):Qa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&At("scroll",i)}switch(n){case"input":Uo(i),hp(i,s,!0);break;case"textarea":Uo(i),mp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[xi]=e,t[lo]=i,Tx(t,e,!1,!1),e.stateNode=t;e:{switch(a=cd(n,i),n){case"dialog":At("cancel",t),At("close",t),r=i;break;case"iframe":case"object":case"embed":At("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ua.length;r++)At(Ua[r],t);r=i;break;case"source":At("error",t),r=i;break;case"img":case"image":case"link":At("error",t),At("load",t),r=i;break;case"details":At("toggle",t),r=i;break;case"input":fp(t,i),r=id(t,i),At("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),At("invalid",t);break;case"textarea":pp(t,i),r=ad(t,i),At("invalid",t);break;default:r=i}ld(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?s0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ja(t,l):typeof l=="number"&&Ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&At("scroll",t):l!=null&&Xf(t,s,l,a))}switch(n){case"input":Uo(t),hp(t,i,!1);break;case"textarea":Uo(t),mp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(t&&e.stateNode!=null)Cx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Hr(uo.current),Hr(yi.current),jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:Go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return ln(e),null;case 13:if(Ct(Dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Dn!==null&&e.mode&1&&!(e.flags&128))X0(),qs(),e.flags|=98560,s=!1;else if(s=jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[xi]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),s=!1}else ii!==null&&(Gd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Dt.current&1?Wt===0&&(Wt=3):Ch())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return $s(),Ud(t,e),t===null&&ao(e.stateNode.containerInfo),ln(e),null;case 10:return dh(e.type._context),ln(e),null;case 17:return Tn(e.type)&&Zl(),ln(e),null;case 19:if(Ct(Dt),s=e.memoizedState,s===null)return ln(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ya(s,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=rc(t),a!==null){for(e.flags|=128,ya(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Et(Dt,Dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&zt()>Zs&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304)}else{if(!i)if(t=rc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Lt)return ln(e),null}else 2*zt()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,n=Dt.current,Et(Dt,i?n&1|2:n&1),e):(ln(e),null);case 22:case 23:return Ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function jy(t,e){switch(oh(e),e.tag){case 1:return Tn(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Ct(bn),Ct(pn),gh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mh(e),null;case 13:if(Ct(Dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ct(Dt),null;case 4:return $s(),null;case 10:return dh(e.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var qo=!1,dn=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,be=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){kt(t,e,i)}else n.current=null}function Fd(t,e,n){try{n()}catch(i){kt(t,e,i)}}var rm=!1;function Xy(t,e){if(_d=ql,t=I0(),sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,u=t,d=null;t:for(;;){for(var m;u!==n||r!==0&&u.nodeType!==3||(o=a+r),u!==s||i!==0&&u.nodeType!==3||(l=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(m=u.firstChild)!==null;)d=u,u=m;for(;;){if(u===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(m=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},ql=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,v=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:ti(e.type,S),v);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(w){kt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return x=rm,rm=!1,x}function Xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fd(e,n,s)}r=r.next}while(r!==i)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rx(t){var e=t.alternate;e!==null&&(t.alternate=null,Rx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[lo],delete e[wd],delete e[Cy],delete e[Ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nx(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(i!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function Bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}var Jt=null,ni=!1;function Ki(t,e,n){for(n=n.child;n!==null;)Px(t,e,n),n=n.sibling}function Px(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 5:dn||Us(n,e);case 6:var i=Jt,r=ni;Jt=null,Ki(t,e,n),Jt=i,ni=r,Jt!==null&&(ni?(t=Jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(ni?(t=Jt,n=n.stateNode,t.nodeType===8?su(t.parentNode,n):t.nodeType===1&&su(t,n),io(t)):su(Jt,n.stateNode));break;case 4:i=Jt,r=ni,Jt=n.stateNode.containerInfo,ni=!0,Ki(t,e,n),Jt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Fd(n,e,a),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!dn&&(Us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){kt(n,e,o)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(dn=(i=dn)||n.memoizedState!==null,Ki(t,e,n),dn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wy),e.forEach(function(i){var r=tS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Jt=o.stateNode,ni=!1;break e;case 3:Jt=o.stateNode.containerInfo,ni=!0;break e;case 4:Jt=o.stateNode.containerInfo,ni=!0;break e}o=o.return}if(Jt===null)throw Error(re(160));Px(s,a,r),Jt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lx(e,t),e=e.sibling}function Lx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),fi(t),i&4){try{Xa(3,t,t.return),Cc(3,t)}catch(S){kt(t,t.return,S)}try{Xa(5,t,t.return)}catch(S){kt(t,t.return,S)}}break;case 1:Zn(e,t),fi(t),i&512&&n!==null&&Us(n,n.return);break;case 5:if(Zn(e,t),fi(t),i&512&&n!==null&&Us(n,n.return),t.flags&32){var r=t.stateNode;try{Ja(r,"")}catch(S){kt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&e0(r,s),cd(o,a);var c=cd(o,s);for(a=0;a<l.length;a+=2){var h=l[a],u=l[a+1];h==="style"?s0(r,u):h==="dangerouslySetInnerHTML"?i0(r,u):h==="children"?Ja(r,u):Xf(r,h,u,c)}switch(o){case"input":rd(r,s);break;case"textarea":t0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ks(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[lo]=s}catch(S){kt(t,t.return,S)}}break;case 6:if(Zn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){kt(t,t.return,S)}}break;case 3:if(Zn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(S){kt(t,t.return,S)}break;case 4:Zn(e,t),fi(t);break;case 13:Zn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bh=zt())),i&4&&am(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(c=dn)||h,Zn(e,t),dn=c):Zn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(be=t,h=t.child;h!==null;){for(u=be=h;be!==null;){switch(d=be,m=d.child,d.tag){case 0:case 11:case 14:case 15:Xa(4,d,d.return);break;case 1:Us(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){kt(i,n,S)}}break;case 5:Us(d,d.return);break;case 22:if(d.memoizedState!==null){lm(u);continue}}m!==null?(m.return=d,be=m):lm(u)}h=h.sibling}e:for(h=null,u=t;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=r0("display",a))}catch(S){kt(t,t.return,S)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(S){kt(t,t.return,S)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Zn(e,t),fi(t),i&4&&am(t);break;case 21:break;default:Zn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ja(r,""),i.flags&=-33);var s=sm(t);Bd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=sm(t);Od(t,o,a);break;default:throw Error(re(161))}}catch(l){kt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qy(t,e,n){be=t,Ix(t)}function Ix(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||qo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||dn;o=qo;var c=dn;if(qo=a,(dn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?cm(r):l!==null?(l.return=a,be=l):cm(r);for(;s!==null;)be=s,Ix(s),s=s.sibling;be=r,qo=o,dn=c}om(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):om(t)}}function om(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||Cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&io(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}dn||e.flags&512&&kd(e)}catch(d){kt(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function lm(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function cm(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(l){kt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){kt(e,r,l)}}var s=e.return;try{kd(e)}catch(l){kt(e,s,l)}break;case 5:var a=e.return;try{kd(e)}catch(l){kt(e,a,l)}}}catch(l){kt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var Yy=Math.ceil,oc=qi.ReactCurrentDispatcher,wh=qi.ReactCurrentOwner,Yn=qi.ReactCurrentBatchConfig,ut=0,Qt=null,Ht=null,nn=0,Ln=0,Fs=Tr(0),Wt=0,mo=null,Kr=0,Rc=0,Eh=0,qa=null,wn=null,bh=0,Zs=1/0,Pi=null,lc=!1,zd=null,xr=null,Yo=!1,ur=null,cc=0,Ya=0,Vd=null,Ll=-1,Il=0;function vn(){return ut&6?zt():Ll!==-1?Ll:Ll=zt()}function vr(t){return t.mode&1?ut&2&&nn!==0?nn&-nn:Py.transition!==null?(Il===0&&(Il=x0()),Il):(t=xt,t!==0||(t=window.event,t=t===void 0?16:E0(t.type)),t):1}function li(t,e,n,i){if(50<Ya)throw Ya=0,Vd=null,Error(re(185));Eo(t,n,i),(!(ut&2)||t!==Qt)&&(t===Qt&&(!(ut&2)&&(Rc|=n),Wt===4&&or(t,nn)),An(t,i),n===1&&ut===0&&!(e.mode&1)&&(Zs=zt()+500,bc&&Ar()))}function An(t,e){var n=t.callbackNode;P_(t,e);var i=Xl(t,t===Qt?nn:0);if(i===0)n!==null&&vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vp(n),e===1)t.tag===0?Ny(um.bind(null,t)):G0(um.bind(null,t)),Ty(function(){!(ut&6)&&Ar()}),n=null;else{switch(v0(i)){case 1:n=Zf;break;case 4:n=m0;break;case 16:n=Wl;break;case 536870912:n=g0;break;default:n=Wl}n=Vx(n,Dx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dx(t,e){if(Ll=-1,Il=0,ut&6)throw Error(re(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Xl(t,t===Qt?nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uc(t,i);else{e=i;var r=ut;ut|=2;var s=Fx();(Qt!==t||nn!==e)&&(Pi=null,Zs=zt()+500,Wr(t,e));do try{Zy();break}catch(o){Ux(t,o)}while(!0);uh(),oc.current=s,ut=r,Ht!==null?e=0:(Qt=null,nn=0,e=Wt)}if(e!==0){if(e===2&&(r=pd(t),r!==0&&(i=r,e=Hd(t,r))),e===1)throw n=mo,Wr(t,0),or(t,i),An(t,zt()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!$y(r)&&(e=uc(t,i),e===2&&(s=pd(t),s!==0&&(i=s,e=Hd(t,s))),e===1))throw n=mo,Wr(t,0),or(t,i),An(t,zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Ur(t,wn,Pi);break;case 3:if(or(t,i),(i&130023424)===i&&(e=bh+500-zt(),10<e)){if(Xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Md(Ur.bind(null,t,wn,Pi),e);break}Ur(t,wn,Pi);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-oi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yy(i/1960))-i,10<i){t.timeoutHandle=Md(Ur.bind(null,t,wn,Pi),i);break}Ur(t,wn,Pi);break;case 5:Ur(t,wn,Pi);break;default:throw Error(re(329))}}}return An(t,zt()),t.callbackNode===n?Dx.bind(null,t):null}function Hd(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=uc(t,e),t!==2&&(e=wn,wn=n,e!==null&&Gd(e)),t}function Gd(t){wn===null?wn=t:wn.push.apply(wn,t)}function $y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Eh,e&=~Rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function um(t){if(ut&6)throw Error(re(327));Hs();var e=Xl(t,0);if(!(e&1))return An(t,zt()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var i=pd(t);i!==0&&(e=i,n=Hd(t,i))}if(n===1)throw n=mo,Wr(t,0),or(t,e),An(t,zt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,wn,Pi),An(t,zt()),null}function Th(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(Zs=zt()+500,bc&&Ar())}}function Zr(t){ur!==null&&ur.tag===0&&!(ut&6)&&Hs();var e=ut;ut|=1;var n=Yn.transition,i=xt;try{if(Yn.transition=null,xt=1,t)return t()}finally{xt=i,Yn.transition=n,ut=e,!(ut&6)&&Ar()}}function Ah(){Ln=Fs.current,Ct(Fs)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,by(n)),Ht!==null)for(n=Ht.return;n!==null;){var i=n;switch(oh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zl();break;case 3:$s(),Ct(bn),Ct(pn),gh();break;case 5:mh(i);break;case 4:$s();break;case 13:Ct(Dt);break;case 19:Ct(Dt);break;case 10:dh(i.type._context);break;case 22:case 23:Ah()}n=n.return}if(Qt=t,Ht=t=_r(t.current,null),nn=Ln=e,Wt=0,mo=null,Eh=Rc=Kr=0,wn=qa=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Vr=null}return t}function Ux(t,e){do{var n=Ht;try{if(uh(),Rl.current=ac,sc){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sc=!1}if($r=0,Zt=jt=Ut=null,Wa=!1,fo=0,wh.current=null,n===null||n.return===null){Wt=1,mo=e,Ht=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=nn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Zp(a);if(m!==null){m.flags&=-257,Qp(m,a,o,s,e),m.mode&1&&Kp(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Kp(s,c,e),Ch();break e}l=Error(re(426))}}else if(Lt&&o.mode&1){var v=Zp(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Qp(v,a,o,s,e),lh(Ks(l,o));break e}}s=l=Ks(l,o),Wt!==4&&(Wt=2),qa===null?qa=[s]:qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=vx(s,l,e);jp(s,f);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(xr===null||!xr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=_x(s,o,e);jp(s,w);break e}}s=s.return}while(s!==null)}Ox(n)}catch(A){e=A,Ht===n&&n!==null&&(Ht=n=n.return);continue}break}while(!0)}function Fx(){var t=oc.current;return oc.current=ac,t===null?ac:t}function Ch(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Qt===null||!(Kr&268435455)&&!(Rc&268435455)||or(Qt,nn)}function uc(t,e){var n=ut;ut|=2;var i=Fx();(Qt!==t||nn!==e)&&(Pi=null,Wr(t,e));do try{Ky();break}catch(r){Ux(t,r)}while(!0);if(uh(),ut=n,oc.current=i,Ht!==null)throw Error(re(261));return Qt=null,nn=0,Wt}function Ky(){for(;Ht!==null;)kx(Ht)}function Zy(){for(;Ht!==null&&!M_();)kx(Ht)}function kx(t){var e=zx(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?Ox(t):Ht=e,wh.current=null}function Ox(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jy(n,e),n!==null){n.flags&=32767,Ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Ht=null;return}}else if(n=Gy(n,e,Ln),n!==null){Ht=n;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=t}while(e!==null);Wt===0&&(Wt=5)}function Ur(t,e,n){var i=xt,r=Yn.transition;try{Yn.transition=null,xt=1,Qy(t,e,n,i)}finally{Yn.transition=r,xt=i}return null}function Qy(t,e,n,i){do Hs();while(ur!==null);if(ut&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L_(t,s),t===Qt&&(Ht=Qt=null,nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,Vx(Wl,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var a=xt;xt=1;var o=ut;ut|=4,wh.current=null,Xy(t,n),Lx(n,t),vy(yd),ql=!!_d,yd=_d=null,t.current=n,qy(n),w_(),ut=o,xt=a,Yn.transition=s}else t.current=n;if(Yo&&(Yo=!1,ur=t,cc=r),s=t.pendingLanes,s===0&&(xr=null),T_(n.stateNode),An(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lc)throw lc=!1,t=zd,zd=null,t;return cc&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Vd?Ya++:(Ya=0,Vd=t):Ya=0,Ar(),null}function Hs(){if(ur!==null){var t=v0(cc),e=Yn.transition,n=xt;try{if(Yn.transition=null,xt=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,cc=0,ut&6)throw Error(re(331));var r=ut;for(ut|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:Xa(8,h,s)}var u=h.child;if(u!==null)u.return=h,be=u;else for(;be!==null;){h=be;var d=h.sibling,m=h.return;if(Rx(h),h===c){be=null;break}if(d!==null){d.return=m,be=d;break}be=m}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,be=f;break e}be=s.return}}var g=t.current;for(be=g;be!==null;){a=be;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,be=_;else e:for(a=g;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Cc(9,o)}}catch(A){kt(o,o.return,A)}if(o===a){be=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,be=w;break e}be=o.return}}if(ut=r,Ar(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(yc,t)}catch{}i=!0}return i}finally{xt=n,Yn.transition=e}}return!1}function dm(t,e,n){e=Ks(n,e),e=vx(t,e,1),t=gr(t,e,1),e=vn(),t!==null&&(Eo(t,1,e),An(t,e))}function kt(t,e,n){if(t.tag===3)dm(t,t,n);else for(;e!==null;){if(e.tag===3){dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=Ks(n,t),t=_x(e,t,1),e=gr(e,t,1),t=vn(),e!==null&&(Eo(e,1,t),An(e,t));break}}e=e.return}}function Jy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(nn&n)===n&&(Wt===4||Wt===3&&(nn&130023424)===nn&&500>zt()-bh?Wr(t,0):Eh|=n),An(t,e)}function Bx(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=vn();t=Hi(t,e),t!==null&&(Eo(t,e,n),An(t,n))}function eS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bx(t,n)}function tS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Bx(t,n)}var zx;zx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,Hy(t,e,n);En=!!(t.flags&131072)}else En=!1,Lt&&e.flags&1048576&&j0(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=Xs(e,pn.current);Vs(e,n),r=vh(null,e,i,t,r,n);var s=_h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,Ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hh(e),r.updater=Ac,e.stateNode=r,r._reactInternals=e,Rd(e,i,t,n),e=Ld(null,e,i,!0,s,n)):(e.tag=0,Lt&&s&&ah(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iS(i),t=ti(i,t),r){case 0:e=Pd(null,e,i,t,n);break e;case 1:e=tm(null,e,i,t,n);break e;case 11:e=Jp(null,e,i,t,n);break e;case 14:e=em(null,e,i,ti(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),tm(t,e,i,r,n);case 3:e:{if(wx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,K0(t,e),ic(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(re(423)),e),e=nm(t,e,i,n,r);break e}else if(i!==r){r=Ks(Error(re(424)),e),e=nm(t,e,i,n,r);break e}else for(Dn=mr(e.stateNode.containerInfo.firstChild),Un=e,Lt=!0,ii=null,n=Y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Gi(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return Z0(e),t===null&&Td(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Sd(i,r)?a=null:s!==null&&Sd(i,s)&&(e.flags|=32),Mx(t,e),xn(t,e,a,n),e.child;case 6:return t===null&&Td(e),null;case 13:return Ex(t,e,n);case 4:return ph(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ys(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Jp(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Et(tc,i._currentValue),i._currentValue=a,s!==null)if(ui(s.value,a)){if(s.children===r.children&&!bn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ad(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ad(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=$n(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),em(t,e,i,r,n);case 15:return yx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Pl(t,e),e.tag=1,Tn(i)?(t=!0,Ql(e)):t=!1,Vs(e,n),xx(e,i,r),Rd(e,i,r,n),Ld(null,e,i,!0,t,n);case 19:return bx(t,e,n);case 22:return Sx(t,e,n)}throw Error(re(156,e.tag))};function Vx(t,e){return p0(t,e)}function nS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new nS(t,e,n,i)}function Rh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iS(t){if(typeof t=="function")return Rh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===$f)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Rh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ts:return Xr(n.children,r,s,e);case qf:a=8,r|=8;break;case Ju:return t=qn(12,n,e,r|2),t.elementType=Ju,t.lanes=s,t;case ed:return t=qn(13,n,e,r),t.elementType=ed,t.lanes=s,t;case td:return t=qn(19,n,e,r),t.elementType=td,t.lanes=s,t;case Zg:return Nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $g:a=10;break e;case Kg:a=9;break e;case Yf:a=11;break e;case $f:a=14;break e;case rr:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=qn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function Nc(t,e,n,i){return t=qn(22,t,i,e),t.elementType=Zg,t.lanes=n,t.stateNode={isHidden:!1},t}function hu(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function pu(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nh(t,e,n,i,r,s,a,o,l){return t=new rS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(s),t}function sS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Hx(t){if(!t)return Mr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Tn(n))return H0(t,n,e)}return e}function Gx(t,e,n,i,r,s,a,o,l){return t=Nh(n,i,!0,t,r,s,a,o,l),t.context=Hx(null),n=t.current,i=vn(),r=vr(n),s=ki(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,Eo(t,r,i),An(t,i),t}function Pc(t,e,n,i){var r=e.current,s=vn(),a=vr(r);return n=Hx(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,a),t!==null&&(li(t,r,a,s),Cl(t,r,a)),a}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ph(t,e){fm(t,e),(t=t.alternate)&&fm(t,e)}function aS(){return null}var jx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lh(t){this._internalRoot=t}Lc.prototype.render=Lh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Pc(t,e,null,null)};Lc.prototype.unmount=Lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){Pc(null,t,null,null)}),e[Vi]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=S0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&w0(t)}};function Ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hm(){}function oS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=dc(a);s.call(c)}}var a=Gx(e,i,t,0,null,!1,!1,"",hm);return t._reactRootContainer=a,t[Vi]=a.current,ao(t.nodeType===8?t.parentNode:t),Zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=dc(l);o.call(c)}}var l=Nh(t,0,!1,null,null,!1,!1,"",hm);return t._reactRootContainer=l,t[Vi]=l.current,ao(t.nodeType===8?t.parentNode:t),Zr(function(){Pc(e,l,n,i)}),l}function Dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=dc(a);o.call(l)}}Pc(e,a,t,r)}else a=oS(n,e,t,r,i);return dc(a)}_0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(Qf(e,n|1),An(e,zt()),!(ut&6)&&(Zs=zt()+500,Ar()))}break;case 13:Zr(function(){var i=Hi(t,1);if(i!==null){var r=vn();li(i,t,1,r)}}),Ph(t,1)}};Jf=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=vn();li(e,t,134217728,n)}Ph(t,134217728)}};y0=function(t){if(t.tag===13){var e=vr(t),n=Hi(t,e);if(n!==null){var i=vn();li(n,t,e,i)}Ph(t,e)}};S0=function(){return xt};M0=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};dd=function(t,e,n){switch(e){case"input":if(rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ec(i);if(!r)throw Error(re(90));Jg(i),rd(i,r)}}}break;case"textarea":t0(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};l0=Th;c0=Zr;var lS={usingClientEntryPoint:!1,Events:[To,Ns,Ec,a0,o0,Th]},Sa={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cS={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f0(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||aS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{yc=$o.inject(cS),_i=$o}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lS;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ih(e))throw Error(re(200));return sS(t,e,null,n)};kn.createRoot=function(t,e){if(!Ih(t))throw Error(re(299));var n=!1,i="",r=jx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nh(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,ao(t.nodeType===8?t.parentNode:t),new Lh(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=f0(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Zr(t)};kn.hydrate=function(t,e,n){if(!Ic(e))throw Error(re(200));return Dc(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Ih(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=jx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Gx(e,null,t,1,n??null,r,!1,s,a),t[Vi]=e.current,ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Lc(e)};kn.render=function(t,e,n){if(!Ic(e))throw Error(re(200));return Dc(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Ic(t))throw Error(re(40));return t._reactRootContainer?(Zr(function(){Dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};kn.unstable_batchedUpdates=Th;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ic(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Dc(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(t){console.error(t)}}Wx(),Wg.exports=kn;var Uc=Wg.exports,pm=Uc;Zu.createRoot=pm.createRoot,Zu.hydrateRoot=pm.hydrateRoot;function Xx(t){ye.useEffect(()=>{if(!t)return;const e=document.body.style.overflow,n=document.body.style.paddingRight,i=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",i>0&&(document.body.style.paddingRight=`${i}px`),()=>{document.body.style.overflow=e,document.body.style.paddingRight=n}},[t])}function uS(t){const[e,n]=ye.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return ye.useEffect(()=>{const i=window.matchMedia(t),r=s=>n(s.matches);return n(i.matches),i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[t]),e}function qx({open:t,title:e,onClose:n,children:i}){const r=uS("(min-width: 768px)"),s=ye.useRef(null),a=ye.useRef(null),o=ye.useMemo(()=>typeof document>"u"?null:document.body,[]);return Xx(t),ye.useEffect(()=>{var c;if(!t)return;const l=document.activeElement;return(c=a.current)==null||c.focus(),()=>{l==null||l.focus()}},[t]),ye.useEffect(()=>{if(!t)return;const l=c=>{if(c.key==="Escape"&&n(),c.key!=="Tab"||!s.current)return;const h=s.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'),u=Array.from(h).filter(S=>!S.hasAttribute("disabled"));if(u.length===0)return;const d=u[0],m=u[u.length-1],x=document.activeElement;!c.shiftKey&&x===m?(c.preventDefault(),d.focus()):c.shiftKey&&x===d&&(c.preventDefault(),m.focus())};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t,n]),!t||!o?null:Uc.createPortal(p.jsxs("div",{className:"fixed inset-0 z-50","aria-hidden":!t,onMouseDown:l=>{l.target===l.currentTarget&&n()},children:[p.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),p.jsxs("div",{className:["absolute liquid-glass rounded-3xl shadow-[0_35px_130px_rgba(0,0,0,0.75)]",r?"left-1/2 top-1/2 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2":"inset-x-0 bottom-0 w-full rounded-b-none rounded-t-3xl"].join(" "),role:"dialog","aria-modal":"true","aria-label":e,ref:s,children:[p.jsxs("div",{className:"flex items-start justify-between gap-4 border-b border-cream/10 px-5 py-4 sm:px-6",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Detail"}),p.jsx("div",{className:"mt-1 truncate font-grotesk text-xl uppercase tracking-[0.06em] text-cream",children:e})]}),p.jsx("button",{ref:a,type:"button",onClick:n,className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/75 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-0","aria-label":"Close",children:p.jsx("span",{"aria-hidden":"true",className:"text-xl leading-none",children:"×"})})]}),p.jsx("div",{className:"max-h-[70vh] overflow-auto px-5 py-5 sm:max-h-[75vh] sm:px-6",children:i})]})]}),o)}const dS={hostile:"border-rose-400/25 bg-rose-400/10 text-rose-100",neutral:"border-amber-300/25 bg-amber-300/10 text-amber-50",passive:"border-emerald-300/25 bg-emerald-300/10 text-emerald-50"},fS=({rating:t})=>{const e=Number.isFinite(t)?Math.max(0,Math.min(5,Math.round(t))):0;return p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"flex gap-1",children:Array.from({length:5}).map((n,i)=>p.jsx("span",{className:["h-1.5 w-4 rounded-full",i<e?"bg-white/70":"bg-white/12"].join(" "),"aria-hidden":"true"},i))}),p.jsxs("div",{className:"text-xs font-medium text-white/55",children:["Danger ",e,"/5"]})]})},mm=({items:t})=>t.length===0?null:p.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(e=>p.jsx("span",{className:"liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70",children:e},e))});function hS({planet:t,creatures:e}){return p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Overview"}),p.jsx("div",{className:"mt-3 font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:t.tagline}),p.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/70",children:t.description})]}),p.jsxs("div",{className:"grid gap-4 lg:grid-cols-[1fr_0.95fr]",children:[p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85",children:"Environment"}),p.jsxs("div",{className:"mt-4 grid gap-3",children:[p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Biome"}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/85",children:t.environment.biome})]}),p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Atmosphere"}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/85",children:t.environment.atmosphere})]}),p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Hazards"}),p.jsx("div",{className:"mt-2",children:p.jsx(mm,{items:t.environment.hazards})})]}),p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Resources"}),p.jsx("div",{className:"mt-2",children:p.jsx(mm,{items:t.environment.resources})})]})]})]}),p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85",children:"Points of Interest"}),p.jsx("div",{className:"mt-4 space-y-3",children:t.pointsOfInterest.map(n=>p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.08em] text-cream",children:n.name}),p.jsx("div",{className:"mt-2 font-mono text-sm leading-relaxed text-cream/70",children:n.detail})]},n.id))})]})]}),p.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-glow backdrop-blur-xl",children:[p.jsxs("div",{className:"flex items-end justify-between gap-4",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-sm font-medium text-white/70",children:"Native Creatures"}),p.jsx("div",{className:"mt-1 text-sm text-white/55",children:"Field notes from the planet index."})]}),p.jsxs("div",{className:"text-xs font-medium text-white/45",children:[e.length," total"]})]}),e.length===0?p.jsx("div",{className:"mt-4 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70",children:"No creature entries found for this planet."}):p.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:e.map(n=>p.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",children:[p.jsxs("div",{className:"flex items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"truncate text-sm font-semibold text-white",children:n.name}),p.jsx("div",{className:"mt-1 text-sm leading-relaxed text-white/70",children:n.behavior})]}),p.jsx("span",{className:["shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold",dS[n.role]].join(" "),children:n.role})]}),p.jsx("div",{className:"mt-3",children:p.jsx(fS,{rating:n.dangerRating})}),p.jsx("div",{className:"mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-white/75",children:n.fieldNote}),n.tags.length>0?p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:n.tags.map(i=>p.jsx("span",{className:"rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/65",children:i},i))}):null]},n.id))})]})]})}const gm={"crystal-planet":{band:"from-cyan-300/15 via-sky-200/10 to-fuchsia-300/15",glow:"bg-cyan-300/70 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]",dot:"bg-cyan-200/75"},"mushroom-planet":{band:"from-fuchsia-300/15 via-emerald-200/10 to-cyan-300/15",glow:"bg-fuchsia-300/70 shadow-[0_0_0_3px_rgba(232,121,249,0.10)]",dot:"bg-fuchsia-200/75"},"ember-planet":{band:"from-orange-300/15 via-amber-200/10 to-rose-300/15",glow:"bg-orange-300/70 shadow-[0_0_0_3px_rgba(251,146,60,0.10)]",dot:"bg-orange-200/75"}};function pS({planets:t,onSelect:e}){return p.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:t.map(n=>{const i=gm[n.id]??gm["crystal-planet"];return p.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:[p.jsx("div",{className:["pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100","bg-gradient-to-br",i.band].join(" ")}),p.jsx("div",{className:"pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.10),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(232,121,249,0.10),transparent_60%)] opacity-70 blur-2xl transition duration-300 group-hover:opacity-95"}),p.jsxs("div",{className:"relative",children:[p.jsxs("div",{className:"flex items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:["h-2 w-2 rounded-full",i.dot].join(" ")}),p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:"Planet Brief"})]}),p.jsx("div",{className:"mt-3 truncate font-grotesk text-[18px] uppercase tracking-[0.08em] text-cream",children:n.name})]}),p.jsx("div",{className:"text-cream/45 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80",children:"→"})]}),p.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/65",children:n.tagline}),p.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[p.jsxs("span",{className:["inline-flex items-center gap-2 rounded-full border border-cream/10 bg-black/30 px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70","backdrop-blur-sm"].join(" "),children:[p.jsx("span",{className:["h-1.5 w-1.5 rounded-full",i.glow].join(" ")}),p.jsx("span",{className:"truncate",children:n.environment.biome})]}),p.jsxs("span",{className:"inline-flex items-center rounded-full border border-cream/10 bg-black/30 px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70 backdrop-blur-sm",children:[n.nativeCreatureIds.length," creatures"]})]})]})]},n.id)})})}function jd(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Yx(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:jd()?"auto":"smooth",block:"start"})}function mS(t){const e=ye.useRef(null),[n,i]=ye.useState(()=>typeof window>"u"?!0:jd());return ye.useEffect(()=>{if(jd()){i(!0);return}const r=e.current;if(!r)return;if(typeof IntersectionObserver>"u"){i(!0);return}const s=new IntersectionObserver(a=>{const o=a[0];o!=null&&o.isIntersecting&&(i(!0),s.disconnect())},{threshold:.12,rootMargin:"0px 0px -20% 0px",...t});return s.observe(r),()=>s.disconnect()},[t]),{ref:e,visible:n}}function Cr({id:t,kicker:e,title:n,subtitle:i,children:r}){const{ref:s,visible:a}=mS(),o=t==="planets"?"from-neon/14 via-cream/5 to-transparent":t==="prototype"?"from-neon/16 via-cream/6 to-transparent":t==="weapons"?"from-neon/12 via-cream/6 to-transparent":t==="mounts"?"from-neon/10 via-cream/4 to-transparent":t==="creatures"?"from-neon/10 via-cream/5 to-transparent":t==="vote"?"from-neon/12 via-cream/6 to-transparent":"from-neon/10 via-cream/4 to-transparent",l=t==="planets"?"World Atlas":t==="prototype"?"Arena":t==="weapons"?"Armory":t==="mounts"?"Ride Log":t==="creatures"?"Field Notes":t==="vote"?"Signal":"Guide";return p.jsxs("section",{ref:s,id:t,className:["section-anchor relative py-16 sm:py-24","motion-safe:transition motion-safe:duration-700 motion-safe:ease-out",a?"opacity-100 translate-y-0 blur-none":"motion-safe:opacity-0 motion-safe:translate-y-4 motion-safe:blur-sm motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-none"].join(" "),children:[p.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 -top-40 h-80",children:[p.jsx("div",{className:["absolute inset-0 bg-gradient-to-b blur-3xl",o].join(" ")}),p.jsx("div",{className:"absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent"})]}),t==="creatures"?p.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen [background-image:url('/creature-silhouettes.png')] bg-no-repeat [background-size:min(980px,92vw)_auto] [background-position:center_18%] [mask-image:radial-gradient(circle_at_center,black_0%,black_55%,transparent_78%)] [filter:brightness(1.15)_contrast(1.1)]"}):null,p.jsxs("div",{className:"mx-auto w-full max-w-6xl px-5 sm:px-8",children:[p.jsx("div",{className:"flex items-start justify-between gap-6",children:p.jsxs("div",{className:"max-w-3xl",children:[e?p.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/75",children:[p.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-neon/85 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]"}),p.jsx("span",{children:e})]}):null,p.jsxs("div",{className:"relative mt-5",children:[p.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -top-6 left-0 font-condiment text-3xl text-neon/70 mix-blend-screen sm:-top-7 sm:text-4xl",children:l}),p.jsx("h2",{className:"relative text-balance font-grotesk text-3xl uppercase tracking-[0.08em] text-cream sm:text-4xl",children:n})]}),i?p.jsx("p",{className:"mt-4 max-w-2xl text-pretty font-mono text-base leading-relaxed text-cream/70 sm:text-lg",children:i}):null]})}),r?p.jsx("div",{className:"mt-10",children:r}):null]})]})}function gS({brand:t,sections:e}){var h;const n=ye.useRef(null),[i,r]=ye.useState(((h=e[0])==null?void 0:h.id)??""),[s,a]=ye.useState(!1),o=ye.useMemo(()=>e.map(u=>u.id),[e]);(typeof window>"u"?ye.useEffect:ye.useLayoutEffect)(()=>{const u=n.current;if(!u)return;const d=()=>{const x=u.getBoundingClientRect().height;document.documentElement.style.setProperty("--nav-h",`${Math.round(x)}px`)};d();const m=new ResizeObserver(d);return m.observe(u),()=>m.disconnect()},[]),ye.useEffect(()=>{const u=o.map(m=>document.getElementById(m)).filter(m=>!!m);if(u.length===0)return;const d=new IntersectionObserver(m=>{var v;const x=m.filter(f=>f.isIntersecting).sort((f,g)=>(g.intersectionRatio??0)-(f.intersectionRatio??0))[0],S=(v=x==null?void 0:x.target)==null?void 0:v.id;S&&r(S)},{root:null,threshold:[.15,.35,.55],rootMargin:"-20% 0px -65% 0px"});return u.forEach(m=>d.observe(m)),()=>d.disconnect()},[o]);const c=u=>{a(!1),Yx(u)};return p.jsxs(p.Fragment,{children:[p.jsx("header",{ref:n,className:"sticky top-0 z-40",children:p.jsx("div",{className:"mx-auto w-full max-w-6xl px-5 py-4 sm:px-8",children:p.jsxs("div",{className:"grid grid-cols-[auto_1fr_auto] items-center gap-4",children:[p.jsxs("button",{type:"button",onClick:()=>c("top"),className:"group inline-flex items-center gap-3 rounded-2xl px-2 py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"Back to top",children:[p.jsx("img",{src:"/tiny-titan-logo.png",alt:"",className:"h-8 w-8 rounded-xl opacity-95 shadow-[0_10px_40px_rgba(0,0,0,0.55)]"}),p.jsx("span",{className:"font-grotesk text-sm uppercase tracking-[0.22em] text-cream",children:t})]}),p.jsx("nav",{className:"hidden items-center justify-self-center rounded-full px-2 py-2 liquid-glass lg:flex","aria-label":"Primary",children:p.jsx("div",{className:"flex max-w-[min(46vw,640px)] items-center gap-1 overflow-hidden",children:e.map(u=>{const d=u.id===i;return p.jsx("button",{type:"button",onClick:()=>c(u.id),className:["relative shrink-0 rounded-full px-3 py-2 font-grotesk text-[13px] uppercase tracking-[0.18em]","text-cream/75 hover:text-neon motion-safe:transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",d?"text-neon after:absolute after:inset-x-3 after:-bottom-[3px] after:h-px after:bg-neon after:opacity-80":""].join(" "),children:u.label},u.id)})})}),p.jsxs("div",{className:"flex items-center justify-end gap-2",children:[p.jsxs("div",{className:"hidden flex-nowrap items-center gap-2 lg:flex",children:[p.jsx("a",{href:"mailto:press@tinytitan.game",className:"liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"Email",children:p.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M4 6h16v12H4z"}),p.jsx("path",{d:"m4 7 8 6 8-6"})]})}),p.jsx("a",{href:"https://x.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"X",children:p.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M4 4l16 16"}),p.jsx("path",{d:"M20 4 4 20"})]})}),p.jsx("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"GitHub",children:p.jsx("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.25 5.71.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})})})]}),p.jsxs("button",{type:"button",onClick:()=>a(!0),className:"liquid-glass glass-float inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 lg:hidden","aria-label":"Open navigation",children:[p.jsx("span",{className:"text-base leading-none","aria-hidden":"true",children:"≡"}),p.jsx("span",{children:"Menu"})]})]})]})})}),p.jsx(qx,{open:s,onClose:()=>a(!1),title:"Navigate",children:p.jsx("div",{className:"grid gap-2",children:e.map(u=>{const d=u.id===i;return p.jsx("button",{type:"button",onClick:()=>c(u.id),className:["liquid-glass glass-float w-full rounded-2xl px-4 py-4 text-left font-grotesk text-[14px] uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",d?"text-neon":"text-cream/80 hover:text-neon"].join(" "),children:u.label},u.id)})})})]})}function xS({onExploreUniverse:t}){const e="/trailer.mp4",[n,i]=ye.useState(!1),[r,s]=ye.useState(!1),a=ye.useRef(null),o=ye.useRef(null),l=ye.useRef(null),c=ye.useRef(null),h=ye.useRef(null),u=ye.useRef(null),d=ye.useMemo(()=>typeof document>"u"?null:document.body,[]),m=typeof document<"u"&&!!document.fullscreenEnabled,x=v=>{const f=v==null?void 0:v.trim();return f?/\.(mp4|webm|ogg)(\?.*)?$/i.test(f):!1};ye.useEffect(()=>{const v=()=>{typeof document>"u"||s(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",v),()=>document.removeEventListener("fullscreenchange",v)},[]),ye.useEffect(()=>{var f;if(!n)return;const v=document.activeElement;return(f=o.current)==null||f.focus(),()=>{v==null||v.focus()}},[n]),ye.useEffect(()=>{if(!n)return;const v=f=>{if(f.key==="Escape"){f.preventDefault(),i(!1);return}if(f.key!=="Tab"||!a.current)return;const g=a.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'),_=Array.from(g).filter(R=>!R.hasAttribute("disabled"));if(_.length===0)return;const w=_[0],A=_[_.length-1],E=document.activeElement;!f.shiftKey&&E===A?(f.preventDefault(),w.focus()):f.shiftKey&&E===w&&(f.preventDefault(),A.focus())};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[n]),ye.useEffect(()=>{if(n)return()=>{typeof document>"u"||document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}},[n]);const S=({title:v,fullscreenRef:f})=>{const g=e==null?void 0:e.trim(),_=x(g);return p.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neon/8 via-cream/5 to-transparent"}),p.jsxs("div",{className:"relative",children:[p.jsxs("div",{className:"flex items-center justify-between gap-4 border-b border-cream/10 px-4 py-4 sm:px-6",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Trailer"}),p.jsx("div",{className:"mt-1 truncate font-grotesk text-[14px] uppercase tracking-[0.12em] text-cream/85",children:v})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:()=>i(!0),className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_60px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Play"}),p.jsx("button",{type:"button",onClick:async()=>{const w=_?h.current:f.current;w&&m&&await w.requestFullscreen().catch(()=>{})},disabled:!m,className:"liquid-glass glass-float inline-flex items-center justify-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 disabled:cursor-not-allowed disabled:opacity-60",children:"Fullscreen"})]})]}),p.jsxs("div",{ref:f,className:"relative aspect-video w-full",children:[g?_?p.jsx("video",{ref:h,className:"absolute inset-0 h-full w-full",src:g,controls:!0,playsInline:!0,preload:"metadata"}):p.jsx("iframe",{title:"Tiny Titan trailer",className:"absolute inset-0 h-full w-full",src:g,allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,loading:"lazy",referrerPolicy:"strict-origin-when-cross-origin"}):p.jsx("div",{className:"absolute inset-0 grid place-items-center px-6 text-center",children:p.jsxs("div",{children:[p.jsx("div",{className:"text-sm font-semibold text-white/90",children:"Trailer embed not configured"}),p.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/60",children:"Set VITE_PIXVERSE_EMBED_URL to a PixVerse embed link to enable playback."})]})}),p.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/55 to-transparent"})]})]})]})};return p.jsxs(p.Fragment,{children:[p.jsxs("section",{id:"trailer",className:"section-anchor relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("video",{className:"absolute inset-0 h-full w-full object-cover opacity-[0.08] blur-[0.5px] motion-reduce:hidden",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true",children:p.jsx("source",{src:"/atmosphere-loop.mp4",type:"video/mp4"})}),p.jsx("div",{className:"absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-neon/10 via-cream/6 to-transparent blur-3xl"}),p.jsx("div",{className:"absolute -bottom-72 left-1/2 h-[620px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cream/5 via-neon/8 to-transparent blur-3xl"})]}),p.jsx("div",{className:"relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20",children:p.jsxs("div",{className:"grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/75",children:[p.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-neon/85 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]"}),p.jsx("span",{children:"Reveal Trailer"})]}),p.jsxs("div",{className:"relative mt-6",children:[p.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -top-7 left-0 font-condiment text-5xl text-neon/70 mix-blend-screen sm:-top-10 sm:text-6xl",children:"Neon Drift"}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("img",{src:"/tiny-titan-logo.png",alt:"",className:"h-14 w-14 rounded-3xl opacity-95 shadow-[0_18px_70px_rgba(0,0,0,0.55)] sm:h-16 sm:w-16"}),p.jsx("h1",{className:"text-balance font-grotesk text-5xl uppercase tracking-[0.06em] text-cream sm:text-6xl",children:"Tiny Titan"})]})]}),p.jsx("p",{className:"mt-5 max-w-xl text-pretty font-grotesk text-lg uppercase tracking-[0.14em] text-cream/80 sm:text-xl",children:"Small Explorer. Massive Adventure."}),p.jsx("p",{className:"mt-3 max-w-xl text-pretty font-mono text-base leading-relaxed text-cream/65 sm:text-lg",children:"Watch the cinematic reveal, then scroll through planets, gadgets, mounts, and field notes from the edges of the map."}),p.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3",children:[p.jsx("button",{type:"button",onClick:()=>i(!0),className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Watch Trailer"}),p.jsx("button",{type:"button",onClick:t,className:"liquid-glass glass-float inline-flex items-center justify-center rounded-full px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Explore the Universe"})]}),p.jsxs("div",{className:"mt-8 grid gap-4",children:[p.jsxs("div",{className:"flex items-start gap-3 rounded-3xl liquid-glass p-5 font-mono text-sm text-cream/65",children:[p.jsx("div",{className:"mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-neon/80 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]"}),p.jsx("div",{className:"leading-relaxed",children:"Best with audio. Fullscreen is available via browser support or the player controls."})]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[p.jsx("a",{href:"mailto:press@tinytitan.game",className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"Email",children:p.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M4 6h16v12H4z"}),p.jsx("path",{d:"m4 7 8 6 8-6"})]})}),p.jsx("a",{href:"https://x.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"X",children:p.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M4 4l16 16"}),p.jsx("path",{d:"M20 4 4 20"})]})}),p.jsx("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer",className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60","aria-label":"GitHub",children:p.jsx("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.25 5.71.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})})})]})]})]}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute -inset-5 rounded-3xl bg-gradient-to-b from-neon/10 via-cream/5 to-transparent blur-2xl"}),p.jsx("div",{className:"relative",children:p.jsx(S,{title:"Cinematic reveal",fullscreenRef:l})})]})]})})]}),n&&d?Uc.createPortal(p.jsxs("div",{className:"fixed inset-0 z-50",onMouseDown:v=>{v.target===v.currentTarget&&i(!1)},"aria-hidden":!n,children:[p.jsx("div",{className:"absolute inset-0 bg-black/65 backdrop-blur-md"}),p.jsx("div",{ref:a,role:"dialog","aria-modal":"true","aria-label":"Trailer player",className:"absolute inset-0 mx-auto flex max-w-6xl items-center justify-center px-4 py-10 sm:px-8",children:p.jsxs("div",{className:"liquid-glass w-full overflow-hidden rounded-[28px] shadow-[0_45px_160px_rgba(0,0,0,0.78)]",children:[p.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-cream/10 px-4 py-4 sm:px-6",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Cinematic Trailer"}),p.jsx("div",{className:"mt-1 truncate font-grotesk text-[14px] uppercase tracking-[0.12em] text-cream/85",children:"Tiny Titan — Reveal"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:async()=>{const v=x(e)?u.current:c.current;if(v){if(r){if(typeof document>"u")return;await document.exitFullscreen().catch(()=>{});return}m&&await v.requestFullscreen().catch(()=>{})}},disabled:!m,className:"liquid-glass glass-float inline-flex items-center justify-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 disabled:cursor-not-allowed disabled:opacity-60",children:r?"Exit Fullscreen":"Fullscreen"}),p.jsx("button",{ref:o,type:"button",onClick:()=>i(!1),className:"liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/75 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-0","aria-label":"Close",children:p.jsx("span",{"aria-hidden":"true",className:"text-xl leading-none",children:"×"})})]})]}),p.jsx("div",{className:"px-4 py-4 sm:px-5 sm:py-5",children:p.jsxs("div",{className:"mx-auto w-full max-w-5xl",children:[p.jsx("div",{ref:c,className:"aspect-video w-full overflow-hidden rounded-3xl border border-cream/10 bg-black/45 shadow-[0_25px_100px_rgba(0,0,0,0.55)]",children:p.jsx("div",{className:"h-full w-full",children:e!=null&&e.trim()?x(e)?p.jsx("video",{ref:u,className:"h-full w-full",src:e.trim(),controls:!0,playsInline:!0,autoPlay:!0,preload:"auto"}):p.jsx("iframe",{title:"Tiny Titan trailer fullscreen",className:"h-full w-full",src:e.trim(),allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin"}):p.jsx("div",{className:"grid h-full place-items-center px-6 text-center",children:p.jsxs("div",{children:[p.jsx("div",{className:"text-sm font-semibold text-white/90",children:"Trailer embed not configured"}),p.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/60",children:"Set VITE_PIXVERSE_EMBED_URL to a PixVerse embed link to enable playback."})]})})})}),p.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55",children:[p.jsx("div",{children:"Tip: Use the player controls for picture-in-picture where available."}),p.jsx("div",{className:"text-white/45",children:"Esc closes"})]})]})})]})})]}),d):null]})}const vS=[{id:"crystal-planet",name:"Crystal Planet",tagline:"Glittering shards and harmonic storms.",description:"A frozen world of prismatic glass dunes and singing quartz ridges. Lightning skates across crystal spires, turning the horizon into a shifting aurora.",environment:{biome:"Prismatic tundra",atmosphere:"Thin, ionized, and bright with static haze",hazards:["Shard squalls","Resonance lightning","Mirror crevasses"],resources:["Singing quartz","Refraction ice","Polar starlight moss"]},pointsOfInterest:[{id:"crown-ridge",name:"Crown Ridge",detail:"A ring of crown-like spires that hum in chords when the wind passes through."},{id:"the-prism-well",name:"The Prism Well",detail:"A deep sinkhole lined with faceted ice that bends light into impossible colors."}],nativeCreatureIds:["glowtail","orb-moth"]},{id:"mushroom-planet",name:"Mushroom Planet",tagline:"A bioluminescent forest that breathes.",description:"Towering fungal trunks form a living canopy, pulsing with soft light and drifting spores. The ground is springy, warm, and full of hidden tunnels.",environment:{biome:"Myco-jungle",atmosphere:"Humid and spore-rich with gentle updrafts",hazards:["Spore blooms","Sinkroot pits","Hallucination pollen"],resources:["Glow caps","Elastic mycelium","Spore ink"]},pointsOfInterest:[{id:"lantern-grove",name:"Lantern Grove",detail:"A clearing where mushrooms glow in synchrony, mapping star patterns onto the forest floor."},{id:"the-mycelium-cathedral",name:"The Mycelium Cathedral",detail:"A vaulted network of root-arches that echoes like a drum when creatures pass above."}],nativeCreatureIds:["chomper","blink-hopper","plasma-slime"]},{id:"ember-planet",name:"Ember Planet",tagline:"Heat, ash, and glowing tides of sand.",description:"A scorched planet of basalt shelves and ember dunes where heat shimmers like water. Volcanic vents exhale orange mist, and the night sky is painted by falling sparks.",environment:{biome:"Volcanic badlands",atmosphere:"Dense with ash and warm pressure fronts",hazards:["Lava vents","Ash cyclones","Glass sand tides"],resources:["Emberstone","Basalt fiber","Thermal salts"]},pointsOfInterest:[{id:"the-breathing-rift",name:"The Breathing Rift",detail:"A crack in the crust that exhales in rhythmic bursts, like a giant sleeping beast."},{id:"cinder-shore",name:"Cinder Shore",detail:"A coastline of black sand where molten beads cool into tiny pearls at the waterline."}],nativeCreatureIds:["titan-crab"]}],_S=[{id:"bubble-blaster",name:"Bubble Blaster",category:"gadget",tagline:"Contain chaos in a pop of foam.",description:"Fires elastic bubbles that trap small creatures and suspend loose objects for a few seconds.",primaryEffect:"Creates a buoyant bubble snare on hit",secondaryEffect:"Bubbles can be bounced into hazards or used as temporary stepping stones",energySource:"Compressed foam cells",unlockHint:"Perfect for the Mushroom Planet’s bouncy terrain."},{id:"gravity-hammer",name:"Gravity Hammer",category:"weapon",tagline:"One swing, one tiny moonquake.",description:"A compact hammer that generates a localized gravity pulse when it strikes, pulling enemies inward before launching them away.",primaryEffect:"Area gravity pulse on impact",secondaryEffect:"Can collapse brittle crystal formations to reveal paths",energySource:"Mini singularity coil",unlockHint:"Best used when you want enemies grouped and confused."},{id:"comet-cannon",name:"Comet Cannon",category:"weapon",tagline:"Throw a star and keep moving.",description:"Charges a streaking comet shot that pierces lines of targets and leaves a chilly wake.",primaryEffect:"Piercing projectile with a frost trail",secondaryEffect:"The wake briefly slows hazards like shard squalls or ash gusts",energySource:"Cryo-charge capacitor",unlockHint:"Pairs well with open arenas and long sightlines."},{id:"disco-ray",name:"Disco Ray",category:"weapon",tagline:"Dazzle first. Ask questions never.",description:"Emits a sweeping prism beam that stuns, confuses, and paints targets with neon marks visible through terrain.",primaryEffect:"Cone beam that stuns and applies a reveal mark",secondaryEffect:"Marked targets take bonus damage from follow-up hits",energySource:"Spectrum lens array",unlockHint:"For explorers who like their danger loud and colorful."}],yS=[{id:"chomper",name:"Chomper",role:"hostile",behavior:"An ambush predator that hides beneath mushroom mats and snaps upward when footsteps vibrate the ground.",fieldNote:"If the spores suddenly go quiet, stop moving. The quiet is the trap.",habitatPlanetIds:["mushroom-planet"],dangerRating:4,tags:["ambush","predator","fungal-forest"]},{id:"plasma-slime",name:"Plasma Slime",role:"passive",behavior:"A gelatinous drifter that absorbs ambient charge and sheds it as harmless sparkles when startled.",fieldNote:"It loves warmth. Your visor heater will attract them like tiny living lanterns.",habitatPlanetIds:["mushroom-planet"],dangerRating:1,tags:["bioluminescent","electric","curious"]},{id:"blink-hopper",name:"Blink Hopper",role:"neutral",behavior:"Skips between short-range positions in flickers of light, usually to avoid predators or to steal shiny gear.",fieldNote:"Do not chase. It will always appear behind you, as if offended by physics.",habitatPlanetIds:["mushroom-planet"],dangerRating:2,tags:["teleport","mischief","fast"]},{id:"titan-crab",name:"Titan Crab",role:"hostile",behavior:"A massive crustacean that patrols basalt shelves, defending thermal vents like territory markers.",fieldNote:"Its shell isn’t armor; it’s a furnace. Keep distance, or your tools will soften in your hands.",habitatPlanetIds:["ember-planet"],dangerRating:5,tags:["boss","armored","heat"]},{id:"glowtail",name:"Glowtail",role:"passive",behavior:"A skittish, comet-tailed scavenger that feeds on starlight moss and leaves a ribbon of luminescence behind it.",fieldNote:"Follow its trail to find safe footing; it avoids mirror crevasses instinctively.",habitatPlanetIds:["crystal-planet"],dangerRating:1,tags:["guide","luminescent","scavenger"]},{id:"orb-moth",name:"Orb Moth",role:"neutral",behavior:"Floats in slow spirals around crystal spires, bathing them in soft, refracted light that calms storm charge.",fieldNote:"When they gather, lightning sleeps. When they scatter, brace for a shard squall.",habitatPlanetIds:["crystal-planet"],dangerRating:2,tags:["weather","swarm","aerial"]}],SS=[{id:"rocket-snail",name:"Rocket Snail",tagline:"Slow until it isn’t.",traversal:"ground",capabilities:["Bursts of straight-line speed","Sticky climbing on smooth surfaces","Shell shield when bracing"],habitatPlanetIds:["mushroom-planet"],temperament:"docile",handling:"stable",topSpeedRating:3,travelFantasy:"Ride a gentle snail that can suddenly blast forward like a pocket rocket, leaving a glittery contrail of spores."},{id:"plasma-beetle",name:"Plasma Beetle",tagline:"Armored sprint with a spark.",traversal:"ground",capabilities:["Dash through light obstacles","Short shockwave stomp","Carries heavy cargo"],habitatPlanetIds:["ember-planet"],temperament:"bold",handling:"agile",topSpeedRating:4,travelFantasy:"A crackling beetle mount that skitters over hot stone and dares the vents to keep up."},{id:"sky-whale",name:"Sky Whale",tagline:"Drift above the danger.",traversal:"air",capabilities:["Sustained gliding","Updraft surfing","Calming aura for nearby wildlife"],habitatPlanetIds:["crystal-planet"],temperament:"gentle",handling:"floaty",topSpeedRating:2,travelFantasy:"Climb onto a serene sky whale and glide through auroras like you’re swimming through light."},{id:"sand-worm",name:"Sand Worm",tagline:"Dive into the dune sea.",traversal:"burrow",capabilities:["Fast underground travel","Erupt leap to clear chasms","Detects nearby heat signatures"],habitatPlanetIds:["ember-planet"],temperament:"wild",handling:"unpredictable",topSpeedRating:5,travelFantasy:"Hold tight as a sand worm pulls you beneath the ember dunes and launches you out in a shower of glowing grit."}],$x=[{id:"small-explorer-manifesto",title:"Small Explorer. Massive Adventure.",category:"history",snippet:"Tiny Titan’s first rule: if you can carry it, you can conquer it.",body:`Tiny Titans don’t win by being bigger. They win by being curious, quick, and stubborn enough to turn weird problems into wonderful solutions. The universe is full of places that look impossible until you take the first tiny step and realize the rules are bendier than they seem.

If a cliff is too tall, climb it. If the air is too thin, bottle it. If the monsters are too mean, distract them with something shinier. Adventure is not about the size of the danger; it’s about the size of the grin you wear while outsmarting it.`,tags:["tone","brand","exploration"],related:{planets:["crystal-planet","mushroom-planet","ember-planet"],weapons:[],creatures:[],mounts:[]}},{id:"prismwell-resonance",title:"The Prism Well and the Quiet Storm",category:"mystery",snippet:"When the Orb Moths gather, the storm charge settles like a lullaby.",body:`On the Crystal Planet, storms don’t just strike. They sing. The Prism Well refracts more than light; it bends vibration. Travelers report that lightning slows when Orb Moths spiral around the nearest spires, as if the moths are tuning the air.

Glowtails seem to know the pattern. They trace safe arcs across the ice right before the resonance peaks, leaving bright trails that mark routes through mirror crevasses. Some explorers believe the Prism Well is not a hole, but an instrument waiting for the right chord.`,tags:["crystal","weather","mystery"],related:{planets:["crystal-planet"],weapons:[],creatures:["orb-moth","glowtail"],mounts:["sky-whale"]}},{id:"mycelium-memory",title:"Mycelium Memory: The Forest That Remembers",category:"history",snippet:"The Mushroom Planet records footsteps like ink on paper, then hides the page.",body:`The myco-jungle isn’t just alive; it’s connected. Every trunk and thread of mycelium shares pressure, warmth, and chemical messages. Old-timers say you can ask the Lantern Grove a question by walking a pattern through the clearing, then waiting for the glow to answer.

The Blink Hoppers treat the network like a playground. They flicker from root to root, teasing predators into chasing shadows. Chompers, on the other hand, listen for panic. The difference between a safe hike and a sudden snap is often the rhythm of your steps.`,tags:["mushroom","network","survival"],related:{planets:["mushroom-planet"],weapons:["bubble-blaster","disco-ray"],creatures:["blink-hopper","chomper","plasma-slime"],mounts:["rocket-snail"]}},{id:"emberstone-craft",title:"Emberstone Craft and Basalt Fiber",category:"tech",snippet:"The Ember Planet’s heat makes tools, not just trouble.",body:`Emberstone looks like rock until it warms up, then it behaves like a living ember trapped under glass. Blacksmiths who dare the vents spin basalt fibers into cords that don’t burn and don’t snap, perfect for gear that needs to survive ash cyclones.

The best builders learn to work with thermal breath instead of against it. Plasma Beetle riders use vent bursts like ramps. Gravity Hammer engineers swear the mini singularity coil stays stable longer when wrapped in basalt fiber, like the planet itself is holding the tool together.`,tags:["ember","crafting","gear"],related:{planets:["ember-planet"],weapons:["gravity-hammer"],creatures:["titan-crab"],mounts:["plasma-beetle","sand-worm"]}},{id:"bubble-foam-fieldwork",title:"Bubble Foam Fieldwork",category:"tech",snippet:"Foam isn’t a toy if it can hold a falling boulder.",body:`The Bubble Blaster’s foam cells expand into perfect spheres that distribute force across a smooth surface. That’s why bubbles can catch loose debris, cushion hard falls, and sometimes even suspend a grumpy creature long enough to escape.

Veteran explorers don’t shoot bubbles at enemies; they shoot bubbles at the world. A bubble on a ledge becomes a step. A bubble in a vent stream becomes a drifting platform. Foam is the polite way to tell physics to calm down.`,tags:["gadget","movement","improvisation"],related:{planets:["mushroom-planet","crystal-planet"],weapons:["bubble-blaster"],creatures:[],mounts:[]}},{id:"disco-ray-marks",title:"Neon Marks and the Disco Ray",category:"tech",snippet:"A bright target is a safer target—because you can see it coming.",body:`The Disco Ray doesn’t just stun. Its spectrum lens array paints a persistent neon mark that clings to armor, fur, or chitin and glows through dust and foliage. Explorers use the mark to track fleeing threats, but also to tag hazards for friends.

In the Lantern Grove, the light isn’t decoration. It’s language. Some swear the Grove responds better when a Disco Ray sweep matches the glow rhythm, as if the forest prefers messages in color instead of footsteps.`,tags:["weapon","tracking","light"],related:{planets:["mushroom-planet"],weapons:["disco-ray"],creatures:["blink-hopper"],mounts:[]}},{id:"titan-crab-wardens",title:"The Vent Wardens",category:"mystery",snippet:"Titan Crabs don’t guard vents for warmth. They guard them for something older.",body:`Titan Crabs move like living fortresses, but their patrol routes are too consistent to be instinct. They circle the same vents in the same order, stopping to tap their claws against basalt like they’re checking locks.

Somewhere beneath the Breathing Rift, something answers. The taps echo back with a delay that feels intentional. Explorers who linger claim the heat changes, as if the planet is listening.`,tags:["boss","ember","secrets"],related:{planets:["ember-planet"],weapons:["comet-cannon"],creatures:["titan-crab"],mounts:["sand-worm"]}},{id:"sky-whale-migration",title:"Sky Whale Migration Lines",category:"history",snippet:"Sky Whales glide along invisible lanes that only crystals can reveal.",body:`Sky Whales don’t wander. They follow migration lines, as if the air itself has roads. On the Crystal Planet, Crown Ridge spires bend light into bands that match the whales’ routes. When the aurora is bright, the lanes are clear.

Explorers who ride a Sky Whale learn quickly: you can’t force a lane. You have to trust it. The whale will drift toward the path that keeps you safe, even if it looks like it’s taking the long way around a storm.`,tags:["mount","navigation","crystal"],related:{planets:["crystal-planet"],weapons:[],creatures:["orb-moth"],mounts:["sky-whale"]}}],MS=t=>typeof t=="object"&&t!==null&&!Array.isArray(t),ji=(t,e,n)=>{t.issues.push({path:e?`${t.path}.${e}`:t.path,message:n})},ht=(t,e,n)=>typeof t=="string"&&t.length>0?t:(ji(e,n,"Expected non-empty string"),null),Kx=(t,e,n)=>typeof t=="number"&&Number.isFinite(t)?t:(ji(e,n,"Expected number"),null),Xn=(t,e,n)=>{if(!Array.isArray(t))return ji(e,n,"Expected string[]"),null;const i=[];for(let r=0;r<t.length;r++){const s=t[r];typeof s=="string"&&s.length>0?i.push(s):ji(e,`${n}[${r}]`,"Expected non-empty string")}return i},Fc=(t,e,n,i)=>typeof t=="string"&&e.includes(t)?t:(ji(n,i,`Expected one of: ${e.join(", ")}`),null),Qs=(t,e,n)=>Array.isArray(t)?t:(ji(e,n,"Expected array"),null),yr=(t,e,n)=>MS(t)?t:(ji(e,n,"Expected object"),null),wS=(t,e)=>{const i=Qs(t,{issues:e,path:"planets"},"");if(!i)return null;const r=[];for(let s=0;s<i.length;s++){const a=i[s],o={issues:e,path:`planets[${s}]`},l=yr(a,o,"");if(!l)continue;const c=ht(l.id,o,"id"),h=ht(l.name,o,"name"),u=ht(l.tagline,o,"tagline"),d=ht(l.description,o,"description"),m=yr(l.environment,o,"environment");let x=null;if(m){const g={issues:e,path:`${o.path}.environment`},_=ht(m.biome,g,"biome"),w=ht(m.atmosphere,g,"atmosphere"),A=Xn(m.hazards,g,"hazards"),E=Xn(m.resources,g,"resources");_&&w&&A&&E&&(x={biome:_,atmosphere:w,hazards:A,resources:E})}const S=Qs(l.pointsOfInterest,o,"pointsOfInterest"),v=[];if(S)for(let g=0;g<S.length;g++){const _=S[g],w={issues:e,path:`${o.path}.pointsOfInterest[${g}]`},A=yr(_,w,"");if(!A)continue;const E=ht(A.id,w,"id"),R=ht(A.name,w,"name"),y=ht(A.detail,w,"detail");E&&R&&y&&v.push({id:E,name:R,detail:y})}const f=Xn(l.nativeCreatureIds,o,"nativeCreatureIds");c&&h&&u&&d&&x&&f&&r.push({id:c,name:h,tagline:u,description:d,environment:x,pointsOfInterest:v,nativeCreatureIds:f})}return r},ES=(t,e)=>{const i=Qs(t,{issues:e,path:"weapons"},"");if(!i)return null;const r=[],s=["weapon","gadget"];for(let a=0;a<i.length;a++){const o={issues:e,path:`weapons[${a}]`},l=yr(i[a],o,"");if(!l)continue;const c=ht(l.id,o,"id"),h=ht(l.name,o,"name"),u=Fc(l.category,s,o,"category"),d=ht(l.tagline,o,"tagline"),m=ht(l.description,o,"description"),x=ht(l.primaryEffect,o,"primaryEffect"),S=ht(l.secondaryEffect,o,"secondaryEffect"),v=ht(l.energySource,o,"energySource"),f=ht(l.unlockHint,o,"unlockHint");c&&h&&u&&d&&m&&x&&S&&v&&f&&r.push({id:c,name:h,category:u,tagline:d,description:m,primaryEffect:x,secondaryEffect:S,energySource:v,unlockHint:f})}return r},bS=(t,e)=>{const i=Qs(t,{issues:e,path:"creatures"},"");if(!i)return null;const r=[],s=["hostile","neutral","passive"];for(let a=0;a<i.length;a++){const o={issues:e,path:`creatures[${a}]`},l=yr(i[a],o,"");if(!l)continue;const c=ht(l.id,o,"id"),h=ht(l.name,o,"name"),u=Fc(l.role,s,o,"role"),d=ht(l.behavior,o,"behavior"),m=ht(l.fieldNote,o,"fieldNote"),x=Xn(l.habitatPlanetIds,o,"habitatPlanetIds"),S=Kx(l.dangerRating,o,"dangerRating"),v=Xn(l.tags,o,"tags");S!==null&&(S<1||S>5)&&ji(o,"dangerRating","Expected dangerRating to be between 1 and 5"),c&&h&&u&&d&&m&&x&&S!==null&&v&&r.push({id:c,name:h,role:u,behavior:d,fieldNote:m,habitatPlanetIds:x,dangerRating:S,tags:v})}return r},TS=(t,e)=>{const i=Qs(t,{issues:e,path:"mounts"},"");if(!i)return null;const r=[],s=["ground","air","burrow","water"];for(let a=0;a<i.length;a++){const o={issues:e,path:`mounts[${a}]`},l=yr(i[a],o,"");if(!l)continue;const c=ht(l.id,o,"id"),h=ht(l.name,o,"name"),u=ht(l.tagline,o,"tagline"),d=Fc(l.traversal,s,o,"traversal"),m=Xn(l.capabilities,o,"capabilities"),x=Xn(l.habitatPlanetIds,o,"habitatPlanetIds"),S=ht(l.temperament,o,"temperament"),v=ht(l.handling,o,"handling"),f=Kx(l.topSpeedRating,o,"topSpeedRating"),g=ht(l.travelFantasy,o,"travelFantasy");f!==null&&(f<1||f>5)&&ji(o,"topSpeedRating","Expected topSpeedRating to be between 1 and 5"),c&&h&&u&&d&&m&&x&&S&&v&&f!==null&&g&&r.push({id:c,name:h,tagline:u,traversal:d,capabilities:m,habitatPlanetIds:x,temperament:S,handling:v,topSpeedRating:f,travelFantasy:g})}return r},AS=(t,e)=>{const i=Qs(t,{issues:e,path:"lore"},"");if(!i)return null;const r=[],s=["history","tech","mystery"];for(let a=0;a<i.length;a++){const o={issues:e,path:`lore[${a}]`},l=yr(i[a],o,"");if(!l)continue;const c=ht(l.id,o,"id"),h=ht(l.title,o,"title"),u=Fc(l.category,s,o,"category"),d=ht(l.snippet,o,"snippet"),m=ht(l.body,o,"body"),x=Xn(l.tags,o,"tags"),S=yr(l.related,o,"related");let v=null;if(S){const f={issues:e,path:`${o.path}.related`},g=Xn(S.planets,f,"planets")??[],_=Xn(S.weapons,f,"weapons")??[],w=Xn(S.creatures,f,"creatures")??[],A=Xn(S.mounts,f,"mounts")??[];v={planets:g,weapons:_,creatures:w,mounts:A}}c&&h&&u&&d&&m&&x&&v&&r.push({id:c,title:h,category:u,snippet:d,body:m,tags:x,related:v})}return r},Ma=(t,e,n)=>{const i=new Set;for(const r of e)i.has(r)&&n.push({path:t,message:`Duplicate id: ${r}`}),i.add(r)},Rr=(t,e,n,i,r)=>{for(const s of e)n.has(s)||i.push({path:r,message:`${t} references missing id: ${s}`})},CS=t=>{const e=[],n=wS(t.planets,e),i=ES(t.weapons,e),r=bS(t.creatures,e),s=TS(t.mounts,e),a=AS(t.lore,e);if(!n||!i||!r||!s||!a)return{ok:!1,issues:e};Ma("planets",n.map(u=>u.id),e),Ma("weapons",i.map(u=>u.id),e),Ma("creatures",r.map(u=>u.id),e),Ma("mounts",s.map(u=>u.id),e),Ma("lore",a.map(u=>u.id),e);const o=new Set(n.map(u=>u.id)),l=new Set(i.map(u=>u.id)),c=new Set(r.map(u=>u.id)),h=new Set(s.map(u=>u.id));for(let u=0;u<n.length;u++)Rr("Planet.nativeCreatureIds",n[u].nativeCreatureIds,c,e,`planets[${u}].nativeCreatureIds`);for(let u=0;u<r.length;u++)Rr("Creature.habitatPlanetIds",r[u].habitatPlanetIds,o,e,`creatures[${u}].habitatPlanetIds`);for(let u=0;u<s.length;u++)Rr("Mount.habitatPlanetIds",s[u].habitatPlanetIds,o,e,`mounts[${u}].habitatPlanetIds`);for(let u=0;u<a.length;u++)Rr("Lore.related.planets",a[u].related.planets,o,e,`lore[${u}].related.planets`),Rr("Lore.related.weapons",a[u].related.weapons,l,e,`lore[${u}].related.weapons`),Rr("Lore.related.creatures",a[u].related.creatures,c,e,`lore[${u}].related.creatures`),Rr("Lore.related.mounts",a[u].related.mounts,h,e,`lore[${u}].related.mounts`);return e.length>0?{ok:!1,issues:e}:{ok:!0,content:{planets:n,weapons:i,creatures:r,mounts:s,lore:a},issues:e}},RS=()=>{const t=CS({planets:vS,weapons:_S,creatures:yS,mounts:SS,lore:$x});return t.ok?t:{ok:!1,issues:t.issues}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="184",NS=0,xm=1,PS=2,Ul=1,LS=2,Fa=3,wr=0,_n=1,Ii=2,Oi=0,Gs=1,$a=2,vm=3,_m=4,IS=5,kr=100,DS=101,US=102,FS=103,kS=104,OS=200,BS=201,zS=202,VS=203,Wd=204,Xd=205,HS=206,GS=207,jS=208,WS=209,XS=210,qS=211,YS=212,$S=213,KS=214,qd=0,Yd=1,$d=2,Js=3,Kd=4,Zd=5,Qd=6,Jd=7,Zx=0,ZS=1,QS=2,Si=0,Qx=1,Jx=2,ev=3,tv=4,nv=5,iv=6,rv=7,sv=300,Qr=301,ea=302,mu=303,gu=304,kc=306,go=1e3,Fi=1001,ef=1002,tn=1003,JS=1004,Ko=1005,fn=1006,xu=1007,Gr=1008,In=1009,av=1010,ov=1011,xo=1012,Uh=1013,wi=1014,si=1015,Wi=1016,Fh=1017,kh=1018,vo=1020,lv=35902,cv=35899,uv=1021,dv=1022,ai=1023,Xi=1026,jr=1027,Oh=1028,Bh=1029,Jr=1030,zh=1031,Vh=1033,Fl=33776,kl=33777,Ol=33778,Bl=33779,tf=35840,nf=35841,rf=35842,sf=35843,af=36196,of=37492,lf=37496,cf=37488,uf=37489,fc=37490,df=37491,ff=37808,hf=37809,pf=37810,mf=37811,gf=37812,xf=37813,vf=37814,_f=37815,yf=37816,Sf=37817,Mf=37818,wf=37819,Ef=37820,bf=37821,Tf=36492,Af=36494,Cf=36495,Rf=36283,Nf=36284,hc=36285,Pf=36286,eM=3200,Lf=0,tM=1,lr="",Mn="srgb",pc="srgb-linear",mc="linear",gt="srgb",ls=7680,ym=519,nM=512,iM=513,rM=514,Hh=515,sM=516,aM=517,Gh=518,oM=519,Sm=35044,Mm="300 es",vi=2e3,_o=2001;function lM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cM(){const t=yo("canvas");return t.style.display="block",t}const wm={};function Em(...t){const e="THREE."+t.shift();console.log(e,...t)}function fv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=fv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ct(...t){t=fv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function If(...t){const e=t.join(" ");e in wm||(wm[e]=!0,Oe(...t))}function uM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const dM={[qd]:Yd,[$d]:Qd,[Kd]:Jd,[Js]:Zd,[Yd]:qd,[Qd]:$d,[Jd]:Kd,[Zd]:Js};class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bm=1234567;const Ka=Math.PI/180,So=180/Math.PI;function aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function jh(t,e){return(t%e+e)%e}function fM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function hM(t,e,n){return t!==e?(n-t)/(e-t):0}function Za(t,e,n){return(1-n)*t+n*e}function pM(t,e,n,i){return Za(t,e,1-Math.exp(-n*i))}function mM(t,e=1){return e-Math.abs(jh(t,e*2)-e)}function gM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function vM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function _M(t,e){return t+Math.random()*(e-t)}function yM(t){return t*(.5-Math.random())}function SM(t){t!==void 0&&(bm=t);let e=bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function MM(t){return t*Ka}function wM(t){return t*So}function EM(t){return(t&t-1)===0&&t!==0}function bM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function TM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function AM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*x,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*x,o*c);break;case"ZYZ":t.set(l*x,l*m,o*h,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const CM={DEG2RAD:Ka,RAD2DEG:So,generateUUID:aa,clamp:nt,euclideanModulo:jh,mapLinear:fM,inverseLerp:hM,lerp:Za,damp:pM,pingpong:mM,smoothstep:gM,smootherstep:xM,randInt:vM,randFloat:_M,randFloatSpread:yM,seededRandom:SM,degToRad:MM,radToDeg:wM,isPowerOfTwo:EM,ceilPowerOfTwo:bM,floorPowerOfTwo:TM,setQuaternionFromProperEuler:AM,normalize:mn,denormalize:Es},ep=class ep{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ep.prototype.isVector2=!0;let rt=ep;class oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(u!==S||l!==d||c!==m||h!==x){let v=l*d+c*m+h*x+u*S;v<0&&(d=-d,m=-m,x=-x,S=-S,v=-v);let f=1-o;if(v<.9995){const g=Math.acos(v),_=Math.sin(g);f=Math.sin(f*g)/_,o=Math.sin(o*g)/_,l=l*f+d*o,c=c*f+m*o,h=h*f+x*o,u=u*f+S*o}else{l=l*f+d*o,c=c*f+m*o,h=h*f+x*o,u=u*f+S*o;const g=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=g,c*=g,h*=g,u*=g}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*u+l*m-c*d,e[n+1]=l*x+h*d+c*u-o*m,e[n+2]=c*x+h*m+o*d-l*u,e[n+3]=h*x-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*x,this._y=c*m*u-d*h*x,this._z=c*h*x+d*m*u,this._w=c*h*u-d*m*x;break;case"YXZ":this._x=d*h*u+c*m*x,this._y=c*m*u-d*h*x,this._z=c*h*x-d*m*u,this._w=c*h*u+d*m*x;break;case"ZXY":this._x=d*h*u-c*m*x,this._y=c*m*u+d*h*x,this._z=c*h*x+d*m*u,this._w=c*h*u-d*m*x;break;case"ZYX":this._x=d*h*u-c*m*x,this._y=c*m*u+d*h*x,this._z=c*h*x-d*m*u,this._w=c*h*u+d*m*x;break;case"YZX":this._x=d*h*u+c*m*x,this._y=c*m*u+d*h*x,this._z=c*h*x-d*m*u,this._w=c*h*u-d*m*x;break;case"XZY":this._x=d*h*u-c*m*x,this._y=c*m*u-d*h*x,this._z=c*h*x+d*m*u,this._w=c*h*u+d*m*x;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tp=class tp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tp.prototype.isVector3=!0;let k=tp;const vu=new k,Tm=new oa,np=class np{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],x=i[8],S=r[0],v=r[3],f=r[6],g=r[1],_=r[4],w=r[7],A=r[2],E=r[5],R=r[8];return s[0]=a*S+o*g+l*A,s[3]=a*v+o*_+l*E,s[6]=a*f+o*w+l*R,s[1]=c*S+h*g+u*A,s[4]=c*v+h*_+u*E,s[7]=c*f+h*w+u*R,s[2]=d*S+m*g+x*A,s[5]=d*v+m*_+x*E,s[8]=d*f+m*w+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,x=n*u+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=u*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;let Ye=np;const _u=new Ye,Am=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RM(){const t={enabled:!0,workingColorSpace:pc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(r.r=js(r.r),r.g=js(r.g),r.b=js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return If("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return If("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[pc]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const at=RM();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cs;class NM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=yo("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yu(r[a].image)):s.push(yu(r[a]))}else s=yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?NM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let LM=0;const Su=new k;class hn extends ns{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Fi,r=Fi,s=fn,a=Gr,o=ai,l=In,c=hn.DEFAULT_ANISOTROPY,h=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=aa(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=sv;hn.DEFAULT_ANISOTROPY=1;const ip=class ip{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],x=l[9],S=l[2],v=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(x+v)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,w=(m+1)/2,A=(f+1)/2,E=(h+d)/4,R=(u+S)/4,y=(x+v)/4;return _>w&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=R/i):w>A?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=E/r,s=y/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-x)*(v-x)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(v-x)/g,this.y=(u-S)/g,this.z=(d-h)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;let Ot=ip;class IM extends ns{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Wh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends IM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vc=class vc{constructor(e,n,i,r,s,a,o,l,c,h,u,d,m,x,S,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,u,d,m,x,S,v)}set(e,n,i,r,s,a,o,l,c,h,u,d,m,x,S,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=x,f[11]=S,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*u,x=o*h,S=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=m+x*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,x=c*h,S=c*u;n[0]=d+S*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,x=c*h,S=c*u;n[0]=d-S*o,n[4]=-a*u,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,x=o*h,S=o*u;n[0]=l*h,n[4]=x*c-m,n[8]=d*c+S,n[1]=l*u,n[5]=S*c+d,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*h,n[4]=S-d*u,n[8]=x*u+m,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*u+x,n[10]=d-S*u}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=d*u+S,n[5]=a*h,n[9]=m*u-x,n[2]=x*u-m,n[6]=o*h,n[10]=S*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,FM)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Zi.crossVectors(i,Nn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Zi.crossVectors(i,Nn)),Zi.normalize(),Zo.crossVectors(Nn,Zi),r[0]=Zi.x,r[4]=Zo.x,r[8]=Nn.x,r[1]=Zi.y,r[5]=Zo.y,r[9]=Nn.y,r[2]=Zi.z,r[6]=Zo.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],x=i[2],S=i[6],v=i[10],f=i[14],g=i[3],_=i[7],w=i[11],A=i[15],E=r[0],R=r[4],y=r[8],C=r[12],P=r[1],N=r[5],L=r[9],W=r[13],$=r[2],F=r[6],j=r[10],B=r[14],O=r[3],X=r[7],ee=r[11],ae=r[15];return s[0]=a*E+o*P+l*$+c*O,s[4]=a*R+o*N+l*F+c*X,s[8]=a*y+o*L+l*j+c*ee,s[12]=a*C+o*W+l*B+c*ae,s[1]=h*E+u*P+d*$+m*O,s[5]=h*R+u*N+d*F+m*X,s[9]=h*y+u*L+d*j+m*ee,s[13]=h*C+u*W+d*B+m*ae,s[2]=x*E+S*P+v*$+f*O,s[6]=x*R+S*N+v*F+f*X,s[10]=x*y+S*L+v*j+f*ee,s[14]=x*C+S*W+v*B+f*ae,s[3]=g*E+_*P+w*$+A*O,s[7]=g*R+_*N+w*F+A*X,s[11]=g*y+_*L+w*j+A*ee,s[15]=g*C+_*W+w*B+A*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],x=e[3],S=e[7],v=e[11],f=e[15],g=l*m-c*d,_=o*m-c*u,w=o*d-l*u,A=a*m-c*h,E=a*d-l*h,R=a*u-o*h;return n*(S*g-v*_+f*w)-i*(x*g-v*A+f*E)+r*(x*_-S*A+f*R)-s*(x*w-S*E+v*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],x=e[12],S=e[13],v=e[14],f=e[15],g=n*o-i*a,_=n*l-r*a,w=n*c-s*a,A=i*l-r*o,E=i*c-s*o,R=r*c-s*l,y=h*S-u*x,C=h*v-d*x,P=h*f-m*x,N=u*v-d*S,L=u*f-m*S,W=d*f-m*v,$=g*W-_*L+w*N+A*P-E*C+R*y;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/$;return e[0]=(o*W-l*L+c*N)*F,e[1]=(r*L-i*W-s*N)*F,e[2]=(S*R-v*E+f*A)*F,e[3]=(d*E-u*R-m*A)*F,e[4]=(l*P-a*W-c*C)*F,e[5]=(n*W-r*P+s*C)*F,e[6]=(v*w-x*R-f*_)*F,e[7]=(h*R-d*w+m*_)*F,e[8]=(a*L-o*P+c*y)*F,e[9]=(i*P-n*L-s*y)*F,e[10]=(x*E-S*w+f*g)*F,e[11]=(u*w-h*E-m*g)*F,e[12]=(o*C-a*N-l*y)*F,e[13]=(n*N-i*C+r*y)*F,e[14]=(S*_-x*A-v*g)*F,e[15]=(h*A-u*_+d*g)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,x=s*u,S=a*h,v=a*u,f=o*u,g=l*c,_=l*h,w=l*u,A=i.x,E=i.y,R=i.z;return r[0]=(1-(S+f))*A,r[1]=(m+w)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(m-w)*E,r[5]=(1-(d+f))*E,r[6]=(v+g)*E,r[7]=0,r[8]=(x+_)*R,r[9]=(v-g)*R,r[10]=(1-(d+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),l=us.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);const c=1/a,h=1/o,u=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,n.setFromRotationMatrix(Qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,h=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===vi)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===_o)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,h=2/(n-e),u=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===vi)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===_o)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};vc.prototype.isMatrix4=!0;let Rt=vc;const us=new k,Qn=new Rt,UM=new k(0,0,0),FM=new k(1,1,1),Zi=new k,Zo=new k,Nn=new k,Rm=new Rt,Nm=new oa;class Er{constructor(e=0,n=0,i=0,r=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kM=0;const Pm=new k,ds=new oa,Ti=new Rt,Qo=new k,wa=new k,OM=new k,BM=new oa,Lm=new k(1,0,0),Im=new k(0,1,0),Dm=new k(0,0,1),Um={type:"added"},zM={type:"removed"},fs={type:"childadded",child:null},Mu={type:"childremoved",child:null};class Xt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new k,n=new Er,i=new oa,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ye}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,n){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qo.copy(e):Qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(wa,Qo,this.up):Ti.lookAt(Qo,wa,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ti),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),fs.child=e,this.dispatchEvent(fs),fs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zM),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,OM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new k(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ka extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const v=n.getJointPose(S,i),f=this._getHandJoint(c,S);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=jh(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Eu(a,s,e+1/3),this.g=Eu(a,s,e),this.b=Eu(a,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=mv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return at.workingToColorSpace(un.copy(this),e),Math.round(nt(un.r*255,0,255))*65536+Math.round(nt(un.g*255,0,255))*256+Math.round(nt(un.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(un.copy(this),n);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Mn){at.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,r=un.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(Jo);const i=Za(Qi.h,Jo.h,n),r=Za(Qi.s,Jo.s,n),s=Za(Qi.l,Jo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Ve;Ve.NAMES=mv;class Xh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=n}clone(){return new Xh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class HM extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new k,Ai=new k,bu=new k,Ci=new k,hs=new k,ps=new k,Fm=new k,Tu=new k,Au=new k,Cu=new k,Ru=new Ot,Nu=new Ot,Pu=new Ot;class ri{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ai.subVectors(i,n),bu.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Ai),l=Jn.dot(bu),c=Ai.dot(Ai),h=Ai.dot(bu),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,x=(a*h-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ru.setScalar(0),Nu.setScalar(0),Pu.setScalar(0),Ru.fromBufferAttribute(e,n),Nu.fromBufferAttribute(e,i),Pu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ru,s.x),a.addScaledVector(Nu,s.y),a.addScaledVector(Pu,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ai.subVectors(e,n),Jn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;hs.subVectors(r,i),ps.subVectors(s,i),Tu.subVectors(e,i);const l=hs.dot(Tu),c=ps.dot(Tu);if(l<=0&&c<=0)return n.copy(i);Au.subVectors(e,r);const h=hs.dot(Au),u=ps.dot(Au);if(h>=0&&u<=h)return n.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(hs,a);Cu.subVectors(e,s);const m=hs.dot(Cu),x=ps.dot(Cu);if(x>=0&&m<=x)return n.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(ps,o);const v=h*x-m*u;if(v<=0&&u-h>=0&&m-x>=0)return Fm.subVectors(s,r),o=(u-h)/(u-h+(m-x)),n.copy(r).addScaledVector(Fm,o);const f=1/(v+S+d);return a=S*f,o=d*f,n.copy(i).addScaledVector(hs,a).addScaledVector(ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class is{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),tl.subVectors(this.max,Ea),ms.subVectors(e.a,Ea),gs.subVectors(e.b,Ea),xs.subVectors(e.c,Ea),Ji.subVectors(gs,ms),er.subVectors(xs,gs),Nr.subVectors(ms,xs);let n=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-Nr.z,Nr.y,Ji.z,0,-Ji.x,er.z,0,-er.x,Nr.z,0,-Nr.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-Nr.y,Nr.x,0];return!Lu(n,ms,gs,xs,tl)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,ms,gs,xs,tl))?!1:(nl.crossVectors(Ji,er),n=[nl.x,nl.y,nl.z],Lu(n,ms,gs,xs,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,el=new is,ms=new k,gs=new k,xs=new k,Ji=new k,er=new k,Nr=new k,Ea=new k,tl=new k,nl=new k,Pr=new k;function Lu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pr.fromArray(t,s);const o=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),h=i.dot(Pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vt=new k,il=new rt;let GM=0;class ci extends ns{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sm,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gv extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xv extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}const jM=new is,ba=new k,Iu=new k;class la{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const n=ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Iu)),this.expandByPoint(ba.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let WM=0;const Hn=new Rt,Du=new Xt,vs=new k,Pn=new is,Ta=new is,Kt=new k;class Cn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lM(e)?xv:gv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Pn.min,Ta.min),Pn.expandByPoint(Kt),Kt.addVectors(Pn.max,Ta.max),Pn.expandByPoint(Kt)):(Pn.expandByPoint(Ta.min),Pn.expandByPoint(Ta.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Kt.add(vs)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new k,l[y]=new k;const c=new k,h=new k,u=new k,d=new rt,m=new rt,x=new rt,S=new k,v=new k;function f(y,C,P){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,P),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,P),h.sub(c),u.sub(c),m.sub(d),x.sub(d);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(N),v.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(N),o[y].add(S),o[C].add(S),o[P].add(S),l[y].add(v),l[C].add(v),l[P].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,C=g.length;y<C;++y){const P=g[y],N=P.start,L=P.count;for(let W=N,$=N+L;W<$;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const _=new k,w=new k,A=new k,E=new k;function R(y){A.fromBufferAttribute(r,y),E.copy(A);const C=o[y];_.copy(C),_.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(E,C);const N=w.dot(l[y])<0?-1:1;a.setXYZW(y,_.x,_.y,_.z,N)}for(let y=0,C=g.length;y<C;++y){const P=g[y],N=P.start,L=P.count;for(let W=N,$=N+L;W<$;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),S=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,v),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,x=0;for(let S=0,v=l.length;S<v;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let f=0;f<h;f++)d[x++]=c[m++]}return new ci(d,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let XM=0;class ca extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Gs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=Xd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wd&&(i.blendSrc=this.blendSrc),this.blendDst!==Xd&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new k,Uu=new k,rl=new k,tr=new k,Fu=new k,sl=new k,ku=new k;class vv{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(Uu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(rl),o=tr.dot(this.direction),l=-tr.dot(rl),c=tr.lengthSq(),h=Math.abs(1-a*a);let u,d,m,x;if(h>0)if(u=a*l-o,d=a*o-l,x=s*h,u>=0)if(d>=-x)if(d<=x){const S=1/h;u*=S,d*=S,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uu).addScaledVector(rl,d),m}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){Fu.subVectors(n,e),sl.subVectors(i,e),ku.crossVectors(Fu,sl);let a=this.direction.dot(ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tr.subVectors(this.origin,e);const l=o*this.direction.dot(sl.crossVectors(tr,sl));if(l<0)return null;const c=o*this.direction.dot(Fu.cross(tr));if(c<0||l+c>a)return null;const h=-o*tr.dot(ku);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gc extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const km=new Rt,Lr=new vv,al=new la,Om=new k,ol=new k,ll=new k,cl=new k,Ou=new k,ul=new k,Bm=new k,dl=new k;class en extends Xt{constructor(e=new Cn,n=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ou.fromBufferAttribute(u,e),a?ul.addScaledVector(Ou,h):ul.addScaledVector(Ou.sub(n),h))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(al.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(al,Om)===null||Lr.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(km.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(km),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const v=d[x],f=a[v.materialIndex],g=Math.max(v.start,m.start),_=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let w=g,A=_;w<A;w+=3){const E=o.getX(w),R=o.getX(w+1),y=o.getX(w+2);r=fl(this,f,e,i,c,h,u,E,R,y),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let v=x,f=S;v<f;v+=3){const g=o.getX(v),_=o.getX(v+1),w=o.getX(v+2);r=fl(this,a,e,i,c,h,u,g,_,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const v=d[x],f=a[v.materialIndex],g=Math.max(v.start,m.start),_=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let w=g,A=_;w<A;w+=3){const E=w,R=w+1,y=w+2;r=fl(this,f,e,i,c,h,u,E,R,y),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let v=x,f=S;v<f;v+=3){const g=v,_=v+1,w=v+2;r=fl(this,a,e,i,c,h,u,g,_,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function qM(t,e,n,i,r,s,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===wr,o),l===null)return null;dl.copy(o),dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(dl);return c<n.near||c>n.far?null:{distance:c,point:dl.clone(),object:t}}function fl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ol),t.getVertexPosition(l,ll),t.getVertexPosition(c,cl);const h=qM(t,e,n,i,ol,ll,cl,Bm);if(h){const u=new k;ri.getBarycoord(Bm,ol,ll,cl,u),r&&(h.uv=ri.getInterpolatedAttribute(r,o,l,c,u,new rt)),s&&(h.uv1=ri.getInterpolatedAttribute(s,o,l,c,u,new rt)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};ri.getNormal(ol,ll,cl,d.normal),h.face=d,h.barycoord=u}return h}class _v extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=tn,h=tn,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zm extends ci{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new Rt,Vm=new Rt,hl=[],Hm=new is,YM=new Rt,Aa=new en,Ca=new la;class pl extends en{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new zm(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,YM)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new is),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_s),Hm.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(Hm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new la),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_s),Ca.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Ca)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_s),Vm.multiplyMatrices(i,_s),Aa.matrixWorld=Vm,Aa.raycast(e,hl);for(let a=0,o=hl.length;a<o;a++){const l=hl[a];l.instanceId=s,l.object=this,n.push(l)}hl.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new zm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _v(new Float32Array(r*this.count),r,this.count,Oh,si));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bu=new k,$M=new k,KM=new Ye;class Fr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bu.subVectors(i,n).cross($M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Bu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KM.getNormalMatrix(e),r=this.coplanarPoint(Bu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new la,ZM=new rt(.5,.5),ml=new k;class qh{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,s=new Fr,a=new Fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],m=s[7],x=s[8],S=s[9],v=s[10],f=s[11],g=s[12],_=s[13],w=s[14],A=s[15];if(r[0].setComponents(c-a,m-h,f-x,A-g).normalize(),r[1].setComponents(c+a,m+h,f+x,A+g).normalize(),r[2].setComponents(c+o,m+u,f+S,A+_).normalize(),r[3].setComponents(c-o,m-u,f-S,A-_).normalize(),i)r[4].setComponents(l,d,v,w).normalize(),r[5].setComponents(c-l,m-d,f-v,A-w).normalize();else if(r[4].setComponents(c-l,m-d,f-v,A-w).normalize(),n===vi)r[5].setComponents(c+l,m+d,f+v,A+w).normalize();else if(n===_o)r[5].setComponents(l,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=ZM.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ml.x=r.normal.x>0?e.max.x:e.min.x,ml.y=r.normal.y>0?e.max.y:e.min.y,ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yv extends ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Rt,Df=new vv,gl=new la,xl=new k;class QM extends Xt{constructor(e=new Cn,n=new yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;Gm.copy(r).invert(),Df.copy(e.ray).applyMatrix4(Gm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,S=m;x<S;x++){const v=c.getX(x);xl.fromBufferAttribute(u,v),jm(xl,v,l,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,S=m;x<S;x++)xl.fromBufferAttribute(u,x),jm(xl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jm(t,e,n,i,r,s,a){const o=Df.distanceSqToPoint(t);if(o<n){const l=new k;Df.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Sv extends hn{constructor(e=[],n=Qr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ta extends hn{constructor(e,n,i=wi,r,s,a,o=tn,l=tn,c,h=Xi,u=1){if(h!==Xi&&h!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:u};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class JM extends ta{constructor(e,n=wi,i=Qr,r,s,a=tn,o=tn,l,c=Xi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mv extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Co extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function x(S,v,f,g,_,w,A,E,R,y,C){const P=w/R,N=A/y,L=w/2,W=A/2,$=E/2,F=R+1,j=y+1;let B=0,O=0;const X=new k;for(let ee=0;ee<j;ee++){const ae=ee*N-W;for(let ge=0;ge<F;ge++){const $e=ge*P-L;X[S]=$e*g,X[v]=ae*_,X[f]=$,c.push(X.x,X.y,X.z),X[S]=0,X[v]=0,X[f]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(ge/R),u.push(1-ee/y),B+=1}}for(let ee=0;ee<y;ee++)for(let ae=0;ae<R;ae++){const ge=d+ae+F*ee,$e=d+ae+F*(ee+1),Je=d+(ae+1)+F*(ee+1),Be=d+(ae+1)+F*ee;l.push(ge,$e,Be),l.push($e,Je,Be),O+=6}o.addGroup(m,O,C),m+=O,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mo extends Cn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],m=[];let x=0;const S=[],v=i/2;let f=0;g(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(m,2));function g(){const w=new k,A=new k;let E=0;const R=(n-e)/i;for(let y=0;y<=s;y++){const C=[],P=y/s,N=P*(n-e)+e;for(let L=0;L<=r;L++){const W=L/r,$=W*l+o,F=Math.sin($),j=Math.cos($);A.x=N*F,A.y=-P*i+v,A.z=N*j,u.push(A.x,A.y,A.z),w.set(F,R,j).normalize(),d.push(w.x,w.y,w.z),m.push(W,1-P),C.push(x++)}S.push(C)}for(let y=0;y<r;y++)for(let C=0;C<s;C++){const P=S[C][y],N=S[C+1][y],L=S[C+1][y+1],W=S[C][y+1];(e>0||C!==0)&&(h.push(P,N,W),E+=3),(n>0||C!==s-1)&&(h.push(N,L,W),E+=3)}c.addGroup(f,E,0),f+=E}function _(w){const A=x,E=new rt,R=new k;let y=0;const C=w===!0?e:n,P=w===!0?1:-1;for(let L=1;L<=r;L++)u.push(0,v*P,0),d.push(0,P,0),m.push(.5,.5),x++;const N=x;for(let L=0;L<=r;L++){const $=L/r*l+o,F=Math.cos($),j=Math.sin($);R.x=C*j,R.y=v*P,R.z=C*F,u.push(R.x,R.y,R.z),d.push(0,P,0),E.x=F*.5+.5,E.y=j*.5*P+.5,m.push(E.x,E.y),x++}for(let L=0;L<r;L++){const W=A+L,$=N+L;w===!0?h.push($,$+1,W):h.push($+1,$,W),y+=3}c.addGroup(f,y,w===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yh extends Mo{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Yh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oc extends Cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new k,w=new k,A=new k;for(let E=0;E<n.length;E+=3)m(n[E+0],_),m(n[E+1],w),m(n[E+2],A),l(_,w,A,g)}function l(g,_,w,A){const E=A+1,R=[];for(let y=0;y<=E;y++){R[y]=[];const C=g.clone().lerp(w,y/E),P=_.clone().lerp(w,y/E),N=E-y;for(let L=0;L<=N;L++)L===0&&y===E?R[y][L]=C:R[y][L]=C.clone().lerp(P,L/N)}for(let y=0;y<E;y++)for(let C=0;C<2*(E-y)-1;C++){const P=Math.floor(C/2);C%2===0?(d(R[y][P+1]),d(R[y+1][P]),d(R[y][P])):(d(R[y][P+1]),d(R[y+1][P+1]),d(R[y+1][P]))}}function c(g){const _=new k;for(let w=0;w<s.length;w+=3)_.x=s[w+0],_.y=s[w+1],_.z=s[w+2],_.normalize().multiplyScalar(g),s[w+0]=_.x,s[w+1]=_.y,s[w+2]=_.z}function h(){const g=new k;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const w=v(g)/2/Math.PI+.5,A=f(g)/Math.PI+.5;a.push(w,1-A)}x(),u()}function u(){for(let g=0;g<a.length;g+=6){const _=a[g+0],w=a[g+2],A=a[g+4],E=Math.max(_,w,A),R=Math.min(_,w,A);E>.9&&R<.1&&(_<.2&&(a[g+0]+=1),w<.2&&(a[g+2]+=1),A<.2&&(a[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function m(g,_){const w=g*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function x(){const g=new k,_=new k,w=new k,A=new k,E=new rt,R=new rt,y=new rt;for(let C=0,P=0;C<s.length;C+=9,P+=6){g.set(s[C+0],s[C+1],s[C+2]),_.set(s[C+3],s[C+4],s[C+5]),w.set(s[C+6],s[C+7],s[C+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),y.set(a[P+4],a[P+5]),A.copy(g).add(_).add(w).divideScalar(3);const N=v(A);S(E,P+0,g,N),S(R,P+2,_,N),S(y,P+4,w,N)}}function S(g,_,w,A){A<0&&g.x===1&&(a[_]=g.x-1),w.x===0&&w.z===0&&(a[_]=A/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.vertices,e.indices,e.radius,e.detail)}}class Or extends Oc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Or(e.radius,e.detail)}}class $h extends Oc{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $h(e.radius,e.detail)}}class Ro extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=n/l,m=[],x=[],S=[],v=[];for(let f=0;f<h;f++){const g=f*d-a;for(let _=0;_<c;_++){const w=_*u-s;x.push(w,-g,0),S.push(0,0,1),v.push(_/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const _=g+c*f,w=g+c*(f+1),A=g+1+c*(f+1),E=g+1+c*f;m.push(_,w,E),m.push(w,A,E)}this.setIndex(m),this.setAttribute("position",new qt(x,3)),this.setAttribute("normal",new qt(S,3)),this.setAttribute("uv",new qt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kh extends Cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new k,d=new k,m=[],x=[],S=[],v=[];for(let f=0;f<=i;f++){const g=[],_=f/i;let w=0;f===0&&a===0?w=.5/n:f===i&&l===Math.PI&&(w=-.5/n);for(let A=0;A<=n;A++){const E=A/n;u.x=-e*Math.cos(r+E*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+E*s)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),v.push(E+w,1-_),g.push(c++)}h.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const _=h[f][g+1],w=h[f][g],A=h[f+1][g],E=h[f+1][g+1];(f!==0||a>0)&&m.push(_,w,E),(f!==i-1||l<Math.PI)&&m.push(w,A,E)}this.setIndex(m),this.setAttribute("position",new qt(x,3)),this.setAttribute("normal",new qt(S,3)),this.setAttribute("uv",new qt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function na(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Wm(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Wm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=na(t[n]);for(const r in i)e[r]=i[r]}return e}function Wm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function e1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const t1={clone:na,merge:gn};var n1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n1,this.fragmentShader=i1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=e1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class r1 extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ir extends ca{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xm extends ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class s1 extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a1 extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(qm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!qm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function qm(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class o1{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],x=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const l1=new o1;class Zh{constructor(e){this.manager=e!==void 0?e:l1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ys=new WeakMap;class c1 extends Zh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zu.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let u=ys.get(a);u===void 0&&(u=[],ys.set(a,u)),u.push({onLoad:n,onError:r})}return a}const o=yo("img");function l(){h(),n&&n(this);const u=ys.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}ys.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),zu.remove(`image:${e}`);const d=ys.get(this)||[];for(let m=0;m<d.length;m++){const x=d[m];x.onError&&x.onError(u)}ys.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zu.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class u1 extends Zh{constructor(e){super(e)}load(e,n,i,r){const s=new hn,a=new c1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Qh extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class d1 extends Qh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Vu=new Rt,Ym=new k,$m=new k;class f1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===_o||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vl=new k,_l=new oa,hi=new k;class Ev extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vl,_l,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,_l,hi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(vl,_l,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,_l,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nr=new k,Km=new rt,Zm=new rt;class Wn extends Ev{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,Km,Zm),n.subVectors(Zm,Km)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Jh extends Ev{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class h1 extends f1{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qm extends Qh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new h1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class p1 extends Qh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ss=-90,Ms=1;class m1 extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Ss,Ms,e,n);r.layers=this.layers,this.add(r);const s=new Wn(Ss,Ms,e,n);s.layers=this.layers,this.add(s);const a=new Wn(Ss,Ms,e,n);a.layers=this.layers,this.add(a);const o=new Wn(Ss,Ms,e,n);o.layers=this.layers,this.add(o);const l=new Wn(Ss,Ms,e,n);l.layers=this.layers,this.add(l);const c=new Wn(Ss,Ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(u,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class g1 extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class x1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const rp=class rp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};rp.prototype.isMatrix2=!0;let Jm=rp;function eg(t,e,n,i){const r=v1(i);switch(n){case uv:return t*e;case Oh:return t*e/r.components*r.byteLength;case Bh:return t*e/r.components*r.byteLength;case Jr:return t*e*2/r.components*r.byteLength;case zh:return t*e*2/r.components*r.byteLength;case dv:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case Vh:return t*e*4/r.components*r.byteLength;case Fl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nf:case sf:return Math.max(t,16)*Math.max(e,8)/4;case tf:case rf:return Math.max(t,8)*Math.max(e,8)/2;case af:case of:case cf:case uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lf:case fc:case df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case xf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tf:case Af:case Cf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rf:case Nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hc:case Pf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v1(t){switch(t){case In:case av:return{byteLength:1,components:1};case xo:case ov:case Wi:return{byteLength:2,components:1};case Fh:case kh:return{byteLength:2,components:4};case wi:case Uh:case si:return{byteLength:4,components:1};case lv:case cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _1(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<u.length;m++){const x=u[d],S=u[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,u[d]=S)}u.length=d+1;for(let m=0,x=u.length;m<x;m++){const S=u[m];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T1=`#ifdef USE_AOMAP
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
#endif`,A1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
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
#endif`,R1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I1=`#ifdef USE_IRIDESCENCE
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
#endif`,D1=`#ifdef USE_BUMPMAP
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
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G1=`#define PI 3.141592653589793
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
} // validated`,j1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W1=`vec3 transformedNormal = objectNormal;
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
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ow=`#ifdef USE_GRADIENTMAP
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
}`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fw=`#ifdef USE_ENVMAP
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
#endif`,hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xw=`PhysicalMaterial material;
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
#endif`,vw=`uniform sampler2D dfgLUT;
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
}`,_w=`
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
#endif`,yw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nw=`#if defined( USE_POINTS_UV )
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
#endif`,Pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
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
#endif`,kw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gw=`#ifdef USE_NORMALMAP
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
#endif`,jw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ww=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$w=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sE=`float getShadowMask() {
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
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
}`,AE=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,RE=`#define DISTANCE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,IE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,UE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,kE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,BE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,VE=`#define NORMAL
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
}`,HE=`#define PHONG
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
}`,GE=`#define PHONG
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
}`,jE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,XE=`#define TOON
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
}`,qE=`#define TOON
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
}`,YE=`uniform float size;
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
}`,$E=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,ZE=`uniform vec3 color;
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
}`,QE=`uniform float rotation;
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
}`,JE=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:M1,alphamap_pars_fragment:w1,alphatest_fragment:E1,alphatest_pars_fragment:b1,aomap_fragment:T1,aomap_pars_fragment:A1,batching_pars_vertex:C1,batching_vertex:R1,begin_vertex:N1,beginnormal_vertex:P1,bsdfs:L1,iridescence_fragment:I1,bumpmap_pars_fragment:D1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:O1,color_fragment:B1,color_pars_fragment:z1,color_pars_vertex:V1,color_vertex:H1,common:G1,cube_uv_reflection_fragment:j1,defaultnormal_vertex:W1,displacementmap_pars_vertex:X1,displacementmap_vertex:q1,emissivemap_fragment:Y1,emissivemap_pars_fragment:$1,colorspace_fragment:K1,colorspace_pars_fragment:Z1,envmap_fragment:Q1,envmap_common_pars_fragment:J1,envmap_pars_fragment:ew,envmap_pars_vertex:tw,envmap_physical_pars_fragment:fw,envmap_vertex:nw,fog_vertex:iw,fog_pars_vertex:rw,fog_fragment:sw,fog_pars_fragment:aw,gradientmap_pars_fragment:ow,lightmap_pars_fragment:lw,lights_lambert_fragment:cw,lights_lambert_pars_fragment:uw,lights_pars_begin:dw,lights_toon_fragment:hw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:xw,lights_physical_pars_fragment:vw,lights_fragment_begin:_w,lights_fragment_maps:yw,lights_fragment_end:Sw,lightprobes_pars_fragment:Mw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:bw,logdepthbuf_vertex:Tw,map_fragment:Aw,map_pars_fragment:Cw,map_particle_fragment:Rw,map_particle_pars_fragment:Nw,metalnessmap_fragment:Pw,metalnessmap_pars_fragment:Lw,morphinstance_vertex:Iw,morphcolor_vertex:Dw,morphnormal_vertex:Uw,morphtarget_pars_vertex:Fw,morphtarget_vertex:kw,normal_fragment_begin:Ow,normal_fragment_maps:Bw,normal_pars_fragment:zw,normal_pars_vertex:Vw,normal_vertex:Hw,normalmap_pars_fragment:Gw,clearcoat_normal_fragment_begin:jw,clearcoat_normal_fragment_maps:Ww,clearcoat_pars_fragment:Xw,iridescence_pars_fragment:qw,opaque_fragment:Yw,packing:$w,premultiplied_alpha_fragment:Kw,project_vertex:Zw,dithering_fragment:Qw,dithering_pars_fragment:Jw,roughnessmap_fragment:eE,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:aE,skinning_pars_vertex:oE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:dE,tonemapping_fragment:fE,tonemapping_pars_fragment:hE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:xE,uv_vertex:vE,worldpos_vertex:_E,background_vert:yE,background_frag:SE,backgroundCube_vert:ME,backgroundCube_frag:wE,cube_vert:EE,cube_frag:bE,depth_vert:TE,depth_frag:AE,distance_vert:CE,distance_frag:RE,equirect_vert:NE,equirect_frag:PE,linedashed_vert:LE,linedashed_frag:IE,meshbasic_vert:DE,meshbasic_frag:UE,meshlambert_vert:FE,meshlambert_frag:kE,meshmatcap_vert:OE,meshmatcap_frag:BE,meshnormal_vert:zE,meshnormal_frag:VE,meshphong_vert:HE,meshphong_frag:GE,meshphysical_vert:jE,meshphysical_frag:WE,meshtoon_vert:XE,meshtoon_frag:qE,points_vert:YE,points_frag:$E,shadow_vert:KE,shadow_frag:ZE,sprite_vert:QE,sprite_frag:JE},Se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},gi={basic:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:gn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:gn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:gn([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:gn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:gn([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:gn([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:gn([Se.common,Se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:gn([Se.lights,Se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};gi.physical={uniforms:gn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const yl={r:0,b:0,g:0},eb=new Rt,Tv=new Ye;Tv.set(-1,0,0,0,1,0,0,0,1);function tb(t,e,n,i,r,s){const a=new Ve(0);let o=r===!0?0:1,l,c,h=null,u=0,d=null;function m(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const w=g.backgroundBlurriness>0;_=e.get(_,w)}return _}function x(g){let _=!1;const w=m(g);w===null?v(a,o):w&&w.isColor&&(v(w,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,_){const w=m(_);w&&(w.isCubeTexture||w.mapping===kc)?(c===void 0&&(c=new en(new Co(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:na(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(_.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tv),c.material.toneMapped=at.getTransfer(w.colorSpace)!==gt,(h!==w||u!==w.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new en(new Ro(2,2),new Ei({name:"BackgroundMaterial",uniforms:na(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=at.getTransfer(w.colorSpace)!==gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,_){g.getRGB(yl,wv(t)),n.buffers.color.setClear(yl.r,yl.g,yl.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),o=_,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,v(a,o)},render:x,addToRenderList:S,dispose:f}}function nb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,L,W,$,F){let j=!1;const B=u(N,$,W,L);s!==B&&(s=B,c(s.object)),j=m(N,$,W,F),j&&x(N,$,W,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,w(N,L,W,$),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function h(N){return t.deleteVertexArray(N)}function u(N,L,W,$){const F=$.wireframe===!0;let j=i[L.id];j===void 0&&(j={},i[L.id]=j);const B=N.isInstancedMesh===!0?N.id:0;let O=j[B];O===void 0&&(O={},j[B]=O);let X=O[W.id];X===void 0&&(X={},O[W.id]=X);let ee=X[F];return ee===void 0&&(ee=d(l()),X[F]=ee),ee}function d(N){const L=[],W=[],$=[];for(let F=0;F<n;F++)L[F]=0,W[F]=0,$[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:$,object:N,attributes:{},index:null}}function m(N,L,W,$){const F=s.attributes,j=L.attributes;let B=0;const O=W.getAttributes();for(const X in O)if(O[X].location>=0){const ae=F[X];let ge=j[X];if(ge===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;B++}return s.attributesNum!==B||s.index!==$}function x(N,L,W,$){const F={},j=L.attributes;let B=0;const O=W.getAttributes();for(const X in O)if(O[X].location>=0){let ae=j[X];ae===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),F[X]=ge,B++}s.attributes=F,s.attributesNum=B,s.index=$}function S(){const N=s.newAttributes;for(let L=0,W=N.length;L<W;L++)N[L]=0}function v(N){f(N,0)}function f(N,L){const W=s.newAttributes,$=s.enabledAttributes,F=s.attributeDivisors;W[N]=1,$[N]===0&&(t.enableVertexAttribArray(N),$[N]=1),F[N]!==L&&(t.vertexAttribDivisor(N,L),F[N]=L)}function g(){const N=s.newAttributes,L=s.enabledAttributes;for(let W=0,$=L.length;W<$;W++)L[W]!==N[W]&&(t.disableVertexAttribArray(W),L[W]=0)}function _(N,L,W,$,F,j,B){B===!0?t.vertexAttribIPointer(N,L,W,F,j):t.vertexAttribPointer(N,L,W,$,F,j)}function w(N,L,W,$){S();const F=$.attributes,j=W.getAttributes(),B=L.defaultAttributeValues;for(const O in j){const X=j[O];if(X.location>=0){let ee=F[O];if(ee===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const ae=ee.normalized,ge=ee.itemSize,$e=e.get(ee);if($e===void 0)continue;const Je=$e.buffer,Be=$e.type,J=$e.bytesPerElement,me=Be===t.INT||Be===t.UNSIGNED_INT||ee.gpuType===Uh;if(ee.isInterleavedBufferAttribute){const te=ee.data,Te=te.stride,ke=ee.offset;if(te.isInstancedInterleavedBuffer){for(let Ie=0;Ie<X.locationSize;Ie++)f(X.location+Ie,te.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)v(X.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let Ie=0;Ie<X.locationSize;Ie++)_(X.location+Ie,ge/X.locationSize,Be,ae,Te*J,(ke+ge/X.locationSize*Ie)*J,me)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)f(X.location+te,ee.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<X.locationSize;te++)v(X.location+te);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let te=0;te<X.locationSize;te++)_(X.location+te,ge/X.locationSize,Be,ae,ge*J,ge/X.locationSize*te*J,me)}}else if(B!==void 0){const ae=B[O];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(X.location,ae);break;case 3:t.vertexAttrib3fv(X.location,ae);break;case 4:t.vertexAttrib4fv(X.location,ae);break;default:t.vertexAttrib1fv(X.location,ae)}}}}g()}function A(){C();for(const N in i){const L=i[N];for(const W in L){const $=L[W];for(const F in $){const j=$[F];for(const B in j)h(j[B].object),delete j[B];delete $[F]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;const L=i[N.id];for(const W in L){const $=L[W];for(const F in $){const j=$[F];for(const B in j)h(j[B].object),delete j[B];delete $[F]}}delete i[N.id]}function R(N){for(const L in i){const W=i[L];for(const $ in W){const F=W[$];if(F[N.id]===void 0)continue;const j=F[N.id];for(const B in j)h(j[B].object),delete j[B];delete F[N.id]}}}function y(N){for(const L in i){const W=i[L],$=N.isInstancedMesh===!0?N.id:0,F=W[$];if(F!==void 0){for(const j in F){const B=F[j];for(const O in B)h(B[O].object),delete B[O];delete F[j]}delete W[$],Object.keys(W).length===0&&delete i[L]}}}function C(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:v,disableUnusedAttributes:g}}function ib(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ai&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==si&&!y)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:w,maxSamples:A,samples:E}}function sb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Fr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,m){const x=u.clippingPlanes,S=u.clipIntersection,v=u.clipShadows,f=t.get(u);if(!r||x===null||x.length===0||s&&!v)s?h(null):c();else{const g=s?0:i,_=g*4;let w=f.clippingState||null;l.value=w,w=h(x,d,_,m);for(let A=0;A!==_;++A)w[A]=n[A];f.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,x){const S=u!==null?u.length:0;let v=null;if(S!==0){if(v=l.value,x!==!0||v===null){const f=m+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<f)&&(v=new Float32Array(f));for(let _=0,w=m;_!==S;++_,w+=4)a.copy(u[_]).applyMatrix4(g,o),a.normal.toArray(v,w),v[w+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}const dr=4,tg=[.125,.215,.35,.446,.526,.582],Br=20,ab=256,Ra=new Jh,ng=new Ve;let Hu=null,Gu=0,ju=0,Wu=!1;const ob=new k;class ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=ob}=s;Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Gu,ju),this._renderer.xr.enabled=Wu,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qr||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Wi,format:ai,colorSpace:pc,depthBuffer:!1},r=rg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lb(s)),this._blurMaterial=ub(s,e,n),this._ggxMaterial=cb(s,e,n)}return r}_compileMaterial(e){const n=new en(new Cn,e);this._renderer.compile(n,Ra)}_sceneToCubeUV(e,n,i,r,s){const l=new Wn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(ng),u.toneMapping=Si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Co,new gc({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,v=S.material;let f=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,f=!0):(v.color.copy(ng),f=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):w===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const A=this._cubeSize;ws(r,w*A,_>2?A:0,A,A),u.setRenderTarget(r),f&&u.render(S,l),u.render(e,l)}u.toneMapping=m,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qr||e.mapping===ea;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ra)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,m=u*d,{_lodMax:x}=this,S=this._sizeLods[i],v=3*S*(i>x-dr?i-x+dr:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,ws(s,v,f,3*S,2*S),r.setRenderTarget(s),r.render(o,Ra),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,ws(e,v,f,3*S,2*S),r.setRenderTarget(e),r.render(o,Ra)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Br-1),S=s/x,v=isFinite(s)?1+Math.floor(h*S):Br;v>Br&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Br}`);const f=[];let g=0;for(let R=0;R<Br;++R){const y=R/S,C=Math.exp(-y*y/2);f.push(C),R===0?g+=C:R<v&&(g+=2*C)}for(let R=0;R<f.length;R++)f[R]=f[R]/g;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const w=this._sizeLods[r],A=3*w*(r>_-dr?r-_+dr:0),E=4*(this._cubeSize-w);ws(n,A,E,3*w,2*w),l.setRenderTarget(n),l.render(u,Ra)}}function lb(t){const e=[],n=[],i=[];let r=t;const s=t-dr+1+tg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-dr?l=tg[a-t+dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,S=3,v=2,f=1,g=new Float32Array(S*x*m),_=new Float32Array(v*x*m),w=new Float32Array(f*x*m);for(let E=0;E<m;E++){const R=E%3*2/3-1,y=E>2?0:-1,C=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];g.set(C,S*x*E),_.set(d,v*x*E);const P=[E,E,E,E,E,E];w.set(P,f*x*E)}const A=new Cn;A.setAttribute("position",new ci(g,S)),A.setAttribute("uv",new ci(_,v)),A.setAttribute("faceIndex",new ci(w,f)),i.push(new en(A,null)),r>dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function rg(t,e,n){const i=new Mi(t,e,n);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cb(t,e,n){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ub(t,e,n){const i=new Float32Array(Br),r=new k(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function sg(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ag(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}class Av extends Mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Co(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Oi});s.uniforms.tEquirect.value=n;const a=new en(r,s),o=n.minFilter;return n.minFilter===Gr&&(n.minFilter=fn),new m1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function db(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===mu||m===gu)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const S=new Av(x.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,x=m===mu||m===gu,S=m===Qr||m===ea;if(x||S){let v=n.get(d);const f=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new ig(t)),v=x?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),v.texture;if(v!==void 0)return v.texture;{const g=d.image;return x&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new ig(t)),v=x?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),d.addEventListener("dispose",h),v.texture):null}}}return d}function o(d,m){return m===mu?d.mapping=Qr:m===gu&&(d.mapping=ea),d}function l(d){let m=0;const x=6;for(let S=0;S<x;S++)d[S]!==void 0&&m++;return m===x}function c(d){const m=d.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function u(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function fb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&If("WebGLRenderer: "+i+" extension not supported."),r}}}function hb(t,e,n,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,x=u.attributes.position;let S=0;if(x===void 0)return;if(m!==null){const g=m.array;S=m.version;for(let _=0,w=g.length;_<w;_+=3){const A=g[_+0],E=g[_+1],R=g[_+2];d.push(A,E,E,R,R,A)}}else{const g=x.array;S=x.version;for(let _=0,w=g.length/3-1;_<w;_+=3){const A=_+0,E=_+1,R=_+2;d.push(A,E,E,R,R,A)}}const v=new(x.count>=65535?xv:gv)(d,1);v.version=S;const f=s.get(u);f&&e.remove(f),s.set(u,v)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function pb(t,e,n){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){t.drawElements(i,d,s,u*a),n.update(d,i,1)}function c(u,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,u*a,m),n.update(d,i,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,m);let S=0;for(let v=0;v<m;v++)S+=d[v];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gb(t,e,n){const i=new WeakMap,r=new Ot;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let w=0;x===!0&&(w=1),S===!0&&(w=2),v===!0&&(w=3);let A=o.attributes.position.count*w,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*E*4*u),y=new hv(R,A,E,u);y.type=si,y.needsUpdate=!0;const C=w*4;for(let N=0;N<u;N++){const L=f[N],W=g[N],$=_[N],F=A*E*4*N;for(let j=0;j<L.count;j++){const B=j*C;x===!0&&(r.fromBufferAttribute(L,j),R[F+B+0]=r.x,R[F+B+1]=r.y,R[F+B+2]=r.z,R[F+B+3]=0),S===!0&&(r.fromBufferAttribute(W,j),R[F+B+4]=r.x,R[F+B+5]=r.y,R[F+B+6]=r.z,R[F+B+7]=0),v===!0&&(r.fromBufferAttribute($,j),R[F+B+8]=r.x,R[F+B+9]=r.y,R[F+B+10]=r.z,R[F+B+11]=$.itemSize===4?r.w:1)}}d={count:u,texture:y,size:new rt(A,E)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let v=0;v<c.length;v++)x+=c[v];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function xb(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const vb={[Qx]:"LINEAR_TONE_MAPPING",[Jx]:"REINHARD_TONE_MAPPING",[ev]:"CINEON_TONE_MAPPING",[tv]:"ACES_FILMIC_TONE_MAPPING",[iv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[nv]:"CUSTOM_TONE_MAPPING"};function _b(t,e,n,i,r){const s=new Mi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new ta(e,n):void 0}),a=new Mi(e,n,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),o=new Cn;o.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qt([0,2,0,0,2,0],2));const l=new r1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new en(o,l),h=new Jh(-1,1,1,-1,0,1);let u=null,d=null,m=!1,x,S=null,v=[],f=!1;this.setSize=function(g,_){s.setSize(g,_),a.setSize(g,_);for(let w=0;w<v.length;w++){const A=v[w];A.setSize&&A.setSize(g,_)}},this.setEffects=function(g){v=g,f=v.length>0&&v[0].isRenderPass===!0;const _=s.width,w=s.height;for(let A=0;A<v.length;A++){const E=v[A];E.setSize&&E.setSize(_,w)}},this.begin=function(g,_){if(m||g.toneMapping===Si&&v.length===0)return!1;if(S=_,_!==null){const w=_.width,A=_.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return f===!1&&g.setRenderTarget(s),x=g.toneMapping,g.toneMapping=Si,!0},this.hasRenderPass=function(){return f},this.end=function(g,_){g.toneMapping=x,m=!0;let w=s,A=a;for(let E=0;E<v.length;E++){const R=v[E];if(R.enabled!==!1&&(R.render(g,A,w,_),R.needsSwap!==!1)){const y=w;w=A,A=y}}if(u!==g.outputColorSpace||d!==g.toneMapping){u=g.outputColorSpace,d=g.toneMapping,l.defines={},at.getTransfer(u)===gt&&(l.defines.SRGB_TRANSFER="");const E=vb[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,g.setRenderTarget(S),g.render(c,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Cv=new hn,Uf=new ta(1,1),Rv=new hv,Nv=new DM,Pv=new Sv,og=[],lg=[],cg=new Float32Array(16),ug=new Float32Array(9),dg=new Float32Array(4);function ua(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=og[r];if(s===void 0&&(s=new Float32Array(r),og[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zc(t,e){let n=lg[e];n===void 0&&(n=new Int32Array(e),lg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function Mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function Eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,i))return;dg.set(i),t.uniformMatrix2fv(this.addr,!1,dg),$t(n,i)}}function bb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,i))return;ug.set(i),t.uniformMatrix3fv(this.addr,!1,ug),$t(n,i)}}function Tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,i))return;cg.set(i),t.uniformMatrix4fv(this.addr,!1,cg),$t(n,i)}}function Ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function Pb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function Db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function Ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Uf.compareFunction=n.isReversedDepthBuffer()?Gh:Hh,s=Uf):s=Cv,n.setTexture2D(e||s,r)}function Fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nv,r)}function kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Pv,r)}function Ob(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rv,r)}function Bb(t){switch(t){case 5126:return yb;case 35664:return Sb;case 35665:return Mb;case 35666:return wb;case 35674:return Eb;case 35675:return bb;case 35676:return Tb;case 5124:case 35670:return Ab;case 35667:case 35671:return Cb;case 35668:case 35672:return Rb;case 35669:case 35673:return Nb;case 5125:return Pb;case 36294:return Lb;case 36295:return Ib;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Ob}}function zb(t,e){t.uniform1fv(this.addr,e)}function Vb(t,e){const n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function Hb(t,e){const n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function Gb(t,e){const n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function jb(t,e){const n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Wb(t,e){const n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Xb(t,e){const n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qb(t,e){t.uniform1iv(this.addr,e)}function Yb(t,e){t.uniform2iv(this.addr,e)}function $b(t,e){t.uniform3iv(this.addr,e)}function Kb(t,e){t.uniform4iv(this.addr,e)}function Zb(t,e){t.uniform1uiv(this.addr,e)}function Qb(t,e){t.uniform2uiv(this.addr,e)}function Jb(t,e){t.uniform3uiv(this.addr,e)}function eT(t,e){t.uniform4uiv(this.addr,e)}function tT(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Uf:a=Cv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function nT(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Nv,s[a])}function iT(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Pv,s[a])}function rT(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Rv,s[a])}function sT(t){switch(t){case 5126:return zb;case 35664:return Vb;case 35665:return Hb;case 35666:return Gb;case 35674:return jb;case 35675:return Wb;case 35676:return Xb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return $b;case 35669:case 35673:return Kb;case 5125:return Zb;case 36294:return Qb;case 36295:return Jb;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}class aT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Bb(n.type)}}class oT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sT(n.type)}}class lT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function fg(t,e){t.seq.push(e),t.map[e.id]=e}function cT(t,e,n){const i=t.name,r=i.length;for(Xu.lastIndex=0;;){const s=Xu.exec(i),a=Xu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fg(n,c===void 0?new aT(o,t,e):new oT(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new lT(o),fg(n,u)),n=u}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);cT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function hg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uT=37297;let dT=0;function fT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const pg=new Ye;function hT(t){at._getMatrix(pg,at.workingColorSpace,t);const e=`mat3( ${pg.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case mc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function mg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+fT(t.getShaderSource(e),o)}else return s}function pT(t,e){const n=hT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const mT={[Qx]:"Linear",[Jx]:"Reinhard",[ev]:"Cineon",[tv]:"ACESFilmic",[iv]:"AgX",[rv]:"Neutral",[nv]:"Custom"};function gT(t,e){const n=mT[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new k;function xT(){at.getLuminanceCoefficients(Sl);const t=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function _T(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Oa(t){return t!==""}function gg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ST=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(t){return t.replace(ST,wT)}const MT=new Map;function wT(t,e){let n=Qe[e];if(n===void 0){const i=MT.get(e);if(i!==void 0)n=Qe[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ff(n)}const ET=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(t){return t.replace(ET,bT)}function bT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _g(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const TT={[Ul]:"SHADOWMAP_TYPE_PCF",[Fa]:"SHADOWMAP_TYPE_VSM"};function AT(t){return TT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CT={[Qr]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[kc]:"ENVMAP_TYPE_CUBE_UV"};function RT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":CT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const NT={[ea]:"ENVMAP_MODE_REFRACTION"};function PT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":NT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LT={[Zx]:"ENVMAP_BLENDING_MULTIPLY",[ZS]:"ENVMAP_BLENDING_MIX",[QS]:"ENVMAP_BLENDING_ADD"};function IT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":LT[t.combine]||"ENVMAP_BLENDING_NONE"}function DT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function UT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=AT(n),c=RT(n),h=PT(n),u=IT(n),d=DT(n),m=vT(n),x=_T(s),S=r.createProgram();let v,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Oa).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Oa).join(`
`),f.length>0&&(f+=`
`)):(v=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),f=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Si?gT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,pT("linearToOutputTexel",n.outputColorSpace),xT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),a=Ff(a),a=gg(a,n),a=xg(a,n),o=Ff(o),o=gg(o,n),o=xg(o,n),a=vg(a),o=vg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",n.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=g+v+a,w=g+f+o,A=hg(r,r.VERTEX_SHADER,_),E=hg(r,r.FRAGMENT_SHADER,w);r.attachShader(S,A),r.attachShader(S,E),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(N){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(A)||"",$=r.getShaderInfoLog(E)||"",F=L.trim(),j=W.trim(),B=$.trim();let O=!0,X=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,A,E);else{const ee=mg(r,A,"vertex"),ae=mg(r,E,"fragment");ct("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+ee+`
`+ae)}else F!==""?Oe("WebGLProgram: Program Info Log:",F):(j===""||B==="")&&(X=!1);X&&(N.diagnostics={runnable:O,programLog:F,vertexShader:{log:j,prefix:v},fragmentShader:{log:B,prefix:f}})}r.deleteShader(A),r.deleteShader(E),y=new zl(r,S),C=yT(r,S)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,uT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=E,this}let FT=0;class kT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OT(e),n.set(e,i)),i}}class OT{constructor(e){this.id=FT++,this.code=e,this.usedTimes=0}}function BT(t){return t===Jr||t===fc||t===hc}function zT(t,e,n,i,r,s){const a=new pv,o=new kT,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,C,P,N,L,W){const $=N.fog,F=L.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||j,B),X=O&&O.mapping===kc?O.image.height:null,ee=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ge=ae!==void 0?ae.length:0;let $e=0;F.morphAttributes.position!==void 0&&($e=1),F.morphAttributes.normal!==void 0&&($e=2),F.morphAttributes.color!==void 0&&($e=3);let Je,Be,J,me;if(ee){const Pe=gi[ee];Je=Pe.vertexShader,Be=Pe.fragmentShader}else Je=y.vertexShader,Be=y.fragmentShader,o.update(y),J=o.getVertexShaderID(y),me=o.getFragmentShaderID(y);const te=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,Ie=L.isBatchedMesh===!0,vt=!!y.map,We=!!y.matcap,ot=!!O,_t=!!y.aoMap,He=!!y.lightMap,Ge=!!y.bumpMap,bt=!!y.normalMap,sn=!!y.displacementMap,U=!!y.emissiveMap,Tt=!!y.metalnessMap,qe=!!y.roughnessMap,dt=y.anisotropy>0,pe=y.clearcoat>0,yt=y.dispersion>0,T=y.iridescence>0,M=y.sheen>0,z=y.transmission>0,Z=dt&&!!y.anisotropyMap,ne=pe&&!!y.clearcoatMap,oe=pe&&!!y.clearcoatNormalMap,fe=pe&&!!y.clearcoatRoughnessMap,q=T&&!!y.iridescenceMap,Q=T&&!!y.iridescenceThicknessMap,xe=M&&!!y.sheenColorMap,we=M&&!!y.sheenRoughnessMap,le=!!y.specularMap,ce=!!y.specularColorMap,ze=!!y.specularIntensityMap,Xe=z&&!!y.transmissionMap,lt=z&&!!y.thicknessMap,I=!!y.gradientMap,ue=!!y.alphaMap,Y=y.alphaTest>0,Me=!!y.alphaHash,he=!!y.extensions;let ie=Si;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ie=t.toneMapping);const Ce={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:Be,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:vt,matcap:We,envMap:ot,envMapMode:ot&&O.mapping,envMapCubeUVHeight:X,aoMap:_t,lightMap:He,bumpMap:Ge,normalMap:bt,displacementMap:sn,emissiveMap:U,normalMapObjectSpace:bt&&y.normalMapType===tM,normalMapTangentSpace:bt&&y.normalMapType===Lf,packedNormalMap:bt&&y.normalMapType===Lf&&BT(y.normalMap.format),metalnessMap:Tt,roughnessMap:qe,anisotropy:dt,anisotropyMap:Z,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,dispersion:yt,iridescence:T,iridescenceMap:q,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:xe,sheenRoughnessMap:we,specularMap:le,specularColorMap:ce,specularIntensityMap:ze,transmission:z,transmissionMap:Xe,thicknessMap:lt,gradientMap:I,opaque:y.transparent===!1&&y.blending===Gs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Y,alphaHash:Me,combine:y.combine,mapUv:vt&&x(y.map.channel),aoMapUv:_t&&x(y.aoMap.channel),lightMapUv:He&&x(y.lightMap.channel),bumpMapUv:Ge&&x(y.bumpMap.channel),normalMapUv:bt&&x(y.normalMap.channel),displacementMapUv:sn&&x(y.displacementMap.channel),emissiveMapUv:U&&x(y.emissiveMap.channel),metalnessMapUv:Tt&&x(y.metalnessMap.channel),roughnessMapUv:qe&&x(y.roughnessMap.channel),anisotropyMapUv:Z&&x(y.anisotropyMap.channel),clearcoatMapUv:ne&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(y.sheenRoughnessMap.channel),specularMapUv:le&&x(y.specularMap.channel),specularColorMapUv:ce&&x(y.specularColorMap.channel),specularIntensityMapUv:ze&&x(y.specularIntensityMap.channel),transmissionMapUv:Xe&&x(y.transmissionMap.channel),thicknessMapUv:lt&&x(y.thicknessMap.channel),alphaMapUv:ue&&x(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(bt||dt),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(vt||ue),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&bt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:$e,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:U&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ii,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function v(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)C.push(P),C.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(f(C,y),g(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function f(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function g(y,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function _(y){const C=m[y.type];let P;if(C){const N=gi[C];P=t1.clone(N.uniforms)}else P=y.uniforms;return P}function w(y,C){let P=h.get(C);return P!==void 0?++P.usedTimes:(P=new UT(t,C,y,r),c.push(P),h.set(C,P)),P}function A(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:_,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:R}}function VT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function HT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function yg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,x,S,v,f){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:x,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:v,group:f},t[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=x,g.materialVariant=a(d),g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=v,g.group=f),e++,g}function l(d,m,x,S,v,f){const g=o(d,m,x,S,v,f);x.transmission>0?i.push(g):x.transparent===!0?r.push(g):n.push(g)}function c(d,m,x,S,v,f){const g=o(d,m,x,S,v,f);x.transmission>0?i.unshift(g):x.transparent===!0?r.unshift(g):n.unshift(g)}function h(d,m){n.length>1&&n.sort(d||HT),i.length>1&&i.sort(m||yg),r.length>1&&r.sort(m||yg)}function u(){for(let d=e,m=t.length;d<m;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function GT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Sg,t.set(i,[a])):r>=s.length?(a=new Sg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function jT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ve};break;case"SpotLight":n={position:new k,direction:new k,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function WT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XT=0;function qT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YT(t){const e=new jT,n=WT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Rt,a=new Rt;function o(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,x=0,S=0,v=0,f=0,g=0,_=0,w=0,A=0,E=0,R=0;c.sort(qT);for(let C=0,P=c.length;C<P;C++){const N=c[C],L=N.color,W=N.intensity,$=N.distance;let F=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Jr?F=N.shadow.map.texture:F=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=L.r*W,u+=L.g*W,d+=L.b*W;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],W);R++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const B=N.shadow,O=n.get(N);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=N.shadow.matrix,g++}i.directional[m]=j,m++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(L).multiplyScalar(W),j.distance=$,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[S]=j;const B=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,B.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[S]=B.matrix,N.castShadow){const O=n.get(N);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,i.spotShadow[S]=O,i.spotShadowMap[S]=F,w++}S++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(L).multiplyScalar(W),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=j,v++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const B=N.shadow,O=n.get(N);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,O.shadowCameraNear=B.camera.near,O.shadowCameraFar=B.camera.far,i.pointShadow[x]=O,i.pointShadowMap[x]=F,i.pointShadowMatrix[x]=N.shadow.matrix,_++}i.point[x]=j,x++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(W),j.groundColor.copy(N.groundColor).multiplyScalar(W),i.hemi[f]=j,f++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==m||y.pointLength!==x||y.spotLength!==S||y.rectAreaLength!==v||y.hemiLength!==f||y.numDirectionalShadows!==g||y.numPointShadows!==_||y.numSpotShadows!==w||y.numSpotMaps!==A||y.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=v,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=w+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,y.directionalLength=m,y.pointLength=x,y.spotLength=S,y.rectAreaLength=v,y.hemiLength=f,y.numDirectionalShadows=g,y.numPointShadows=_,y.numSpotShadows=w,y.numSpotMaps=A,y.numLightProbes=R,i.version=XT++)}function l(c,h){let u=0,d=0,m=0,x=0,S=0;const v=h.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),u++}else if(_.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),m++}else if(_.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(v),a.identity(),s.copy(_.matrixWorld),s.premultiply(v),a.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(v),S++}}}return{setup:o,setupView:l,state:i}}function Mg(t){const e=new YT(t),n=[],i=[],r=[];function s(d){u.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function h(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $T(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Mg(t),e.set(r,[o])):s>=a.length?(o=new Mg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZT=`uniform sampler2D shadow_pass;
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
}`,QT=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],JT=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],wg=new Rt,Na=new k,qu=new k;function eA(t,e,n){let i=new qh;const r=new rt,s=new rt,a=new Ot,o=new s1,l=new a1,c={},h=n.maxTextureSize,u={[wr]:_n,[_n]:wr,[Ii]:Ii},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:KT,fragmentShader:ZT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Cn;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new en(x,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let f=this.type;this.render=function(E,R,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;this.type===LS&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ul);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Oi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const W=f!==this.type;W&&R.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(F=>F.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,F=E.length;$<F;$++){const j=E[$],B=j.shadow;if(B===void 0){Oe("WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const O=B.getFrameExtents();r.multiply(O),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,B.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Fa){if(j.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Mi(r.x,r.y,{format:Jr,type:Wi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),B.map.texture.name=j.name+".shadowMap",B.map.depthTexture=new ta(r.x,r.y,si),B.map.depthTexture.name=j.name+".shadowMapDepth",B.map.depthTexture.format=Xi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn}else j.isPointLight?(B.map=new Av(r.x),B.map.depthTexture=new JM(r.x,wi)):(B.map=new Mi(r.x,r.y),B.map.depthTexture=new ta(r.x,r.y,wi)),B.map.depthTexture.name=j.name+".shadowMap",B.map.depthTexture.format=Xi,this.type===Ul?(B.map.depthTexture.compareFunction=X?Gh:Hh,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn);B.camera.updateProjectionMatrix()}const ee=B.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<ee;ae++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(B.map),t.clear());const ge=B.getViewport(ae);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),L.viewport(a)}if(j.isPointLight){const ge=B.camera,$e=B.matrix,Je=j.distance||ge.far;Je!==ge.far&&(ge.far=Je,ge.updateProjectionMatrix()),Na.setFromMatrixPosition(j.matrixWorld),ge.position.copy(Na),qu.copy(ge.position),qu.add(QT[ae]),ge.up.copy(JT[ae]),ge.lookAt(qu),ge.updateMatrixWorld(),$e.makeTranslation(-Na.x,-Na.y,-Na.z),wg.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),B._frustum.setFromProjectionMatrix(wg,ge.coordinateSystem,ge.reversedDepth)}else B.updateMatrices(j);i=B.getFrustum(),w(R,y,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===Fa&&g(B,y),B.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(C,P,N)};function g(E,R){const y=e.update(S);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mi(r.x,r.y,{format:Jr,type:Wi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,y,d,S,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,y,m,S,null)}function _(E,R,y,C){let P=null;const N=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=P.uuid,W=R.uuid;let $=c[L];$===void 0&&($={},c[L]=$);let F=$[W];F===void 0&&(F=P.clone(),$[W]=F,R.addEventListener("dispose",A)),P=F}if(P.visible=R.visible,P.wireframe=R.wireframe,C===Fa?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=t.properties.get(P);L.light=y}return P}function w(E,R,y,C,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Fa)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const W=e.update(E),$=E.material;if(Array.isArray($)){const F=W.groups;for(let j=0,B=F.length;j<B;j++){const O=F[j],X=$[O.materialIndex];if(X&&X.visible){const ee=_(E,X,C,P);E.onBeforeShadow(t,E,R,y,W,ee,O),t.renderBufferDirect(y,null,W,ee,E,O),E.onAfterShadow(t,E,R,y,W,ee,O)}}}else if($.visible){const F=_(E,$,C,P);E.onBeforeShadow(t,E,R,y,W,F,null),t.renderBufferDirect(y,null,W,F,E,null),E.onAfterShadow(t,E,R,y,W,F,null)}}const L=E.children;for(let W=0,$=L.length;W<$;W++)w(L[W],R,y,C,P)}function A(E){E.target.removeEventListener("dispose",A);for(const y in c){const C=c[y],P=E.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function tA(t,e){function n(){let I=!1;const ue=new Ot;let Y=null;const Me=new Ot(0,0,0,0);return{setMask:function(he){Y!==he&&!I&&(t.colorMask(he,he,he,he),Y=he)},setLocked:function(he){I=he},setClear:function(he,ie,Ce,Pe,It){It===!0&&(he*=Pe,ie*=Pe,Ce*=Pe),ue.set(he,ie,Ce,Pe),Me.equals(ue)===!1&&(t.clearColor(he,ie,Ce,Pe),Me.copy(ue))},reset:function(){I=!1,Y=null,Me.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,Y=null,Me=null,he=null;return{setReversed:function(ie){if(ue!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const Pe=he;he=null,this.setClear(Pe)}},getReversed:function(){return ue},setTest:function(ie){ie?te(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(ie){Y!==ie&&!I&&(t.depthMask(ie),Y=ie)},setFunc:function(ie){if(ue&&(ie=dM[ie]),Me!==ie){switch(ie){case qd:t.depthFunc(t.NEVER);break;case Yd:t.depthFunc(t.ALWAYS);break;case $d:t.depthFunc(t.LESS);break;case Js:t.depthFunc(t.LEQUAL);break;case Kd:t.depthFunc(t.EQUAL);break;case Zd:t.depthFunc(t.GEQUAL);break;case Qd:t.depthFunc(t.GREATER);break;case Jd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=ie}},setLocked:function(ie){I=ie},setClear:function(ie){he!==ie&&(he=ie,ue&&(ie=1-ie),t.clearDepth(ie))},reset:function(){I=!1,Y=null,Me=null,he=null,ue=!1}}}function r(){let I=!1,ue=null,Y=null,Me=null,he=null,ie=null,Ce=null,Pe=null,It=null;return{setTest:function(De){I||(De?te(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(De){ue!==De&&!I&&(t.stencilMask(De),ue=De)},setFunc:function(De,Rn,Nt){(Y!==De||Me!==Rn||he!==Nt)&&(t.stencilFunc(De,Rn,Nt),Y=De,Me=Rn,he=Nt)},setOp:function(De,Rn,Nt){(ie!==De||Ce!==Rn||Pe!==Nt)&&(t.stencilOp(De,Rn,Nt),ie=De,Ce=Rn,Pe=Nt)},setLocked:function(De){I=De},setClear:function(De){It!==De&&(t.clearStencil(De),It=De)},reset:function(){I=!1,ue=null,Y=null,Me=null,he=null,ie=null,Ce=null,Pe=null,It=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d={},m=new WeakMap,x=[],S=null,v=!1,f=null,g=null,_=null,w=null,A=null,E=null,R=null,y=new Ve(0,0,0),C=0,P=!1,N=null,L=null,W=null,$=null,F=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=O>=2);let ee=null,ae={};const ge=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),Je=new Ot().fromArray(ge),Be=new Ot().fromArray($e);function J(I,ue,Y,Me){const he=new Uint8Array(4),ie=t.createTexture();t.bindTexture(I,ie),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Y;Ce++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ie}const me={};me[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Js),Ge(!1),bt(xm),te(t.CULL_FACE),_t(Oi);function te(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function Te(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function ke(I,ue){return d[I]!==ue?(t.bindFramebuffer(I,ue),d[I]=ue,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ie(I,ue){let Y=x,Me=!1;if(I){Y=m.get(ue),Y===void 0&&(Y=[],m.set(ue,Y));const he=I.textures;if(Y.length!==he.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ce=he.length;ie<Ce;ie++)Y[ie]=t.COLOR_ATTACHMENT0+ie;Y.length=he.length,Me=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,Me=!0);Me&&t.drawBuffers(Y)}function vt(I){return S!==I?(t.useProgram(I),S=I,!0):!1}const We={[kr]:t.FUNC_ADD,[DS]:t.FUNC_SUBTRACT,[US]:t.FUNC_REVERSE_SUBTRACT};We[FS]=t.MIN,We[kS]=t.MAX;const ot={[OS]:t.ZERO,[BS]:t.ONE,[zS]:t.SRC_COLOR,[Wd]:t.SRC_ALPHA,[XS]:t.SRC_ALPHA_SATURATE,[jS]:t.DST_COLOR,[HS]:t.DST_ALPHA,[VS]:t.ONE_MINUS_SRC_COLOR,[Xd]:t.ONE_MINUS_SRC_ALPHA,[WS]:t.ONE_MINUS_DST_COLOR,[GS]:t.ONE_MINUS_DST_ALPHA,[qS]:t.CONSTANT_COLOR,[YS]:t.ONE_MINUS_CONSTANT_COLOR,[$S]:t.CONSTANT_ALPHA,[KS]:t.ONE_MINUS_CONSTANT_ALPHA};function _t(I,ue,Y,Me,he,ie,Ce,Pe,It,De){if(I===Oi){v===!0&&(Te(t.BLEND),v=!1);return}if(v===!1&&(te(t.BLEND),v=!0),I!==IS){if(I!==f||De!==P){if((g!==kr||A!==kr)&&(t.blendEquation(t.FUNC_ADD),g=kr,A=kr),De)switch(I){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $a:t.blendFunc(t.ONE,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _m:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",I);break}else switch(I){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $a:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case vm:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _m:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",I);break}_=null,w=null,E=null,R=null,y.set(0,0,0),C=0,f=I,P=De}return}he=he||ue,ie=ie||Y,Ce=Ce||Me,(ue!==g||he!==A)&&(t.blendEquationSeparate(We[ue],We[he]),g=ue,A=he),(Y!==_||Me!==w||ie!==E||Ce!==R)&&(t.blendFuncSeparate(ot[Y],ot[Me],ot[ie],ot[Ce]),_=Y,w=Me,E=ie,R=Ce),(Pe.equals(y)===!1||It!==C)&&(t.blendColor(Pe.r,Pe.g,Pe.b,It),y.copy(Pe),C=It),f=I,P=!1}function He(I,ue){I.side===Ii?Te(t.CULL_FACE):te(t.CULL_FACE);let Y=I.side===_n;ue&&(Y=!Y),Ge(Y),I.blending===Gs&&I.transparent===!1?_t(Oi):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Me=I.stencilWrite;o.setTest(Me),Me&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){N!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),N=I)}function bt(I){I!==NS?(te(t.CULL_FACE),I!==L&&(I===xm?t.cullFace(t.BACK):I===PS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),L=I}function sn(I){I!==W&&(B&&t.lineWidth(I),W=I)}function U(I,ue,Y){I?(te(t.POLYGON_OFFSET_FILL),($!==ue||F!==Y)&&($=ue,F=Y,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,Y))):Te(t.POLYGON_OFFSET_FILL)}function Tt(I){I?te(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function qe(I){I===void 0&&(I=t.TEXTURE0+j-1),ee!==I&&(t.activeTexture(I),ee=I)}function dt(I,ue,Y){Y===void 0&&(ee===null?Y=t.TEXTURE0+j-1:Y=ee);let Me=ae[Y];Me===void 0&&(Me={type:void 0,texture:void 0},ae[Y]=Me),(Me.type!==I||Me.texture!==ue)&&(ee!==Y&&(t.activeTexture(Y),ee=Y),t.bindTexture(I,ue||me[I]),Me.type=I,Me.texture=ue)}function pe(){const I=ae[ee];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function yt(){try{t.compressedTexImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function M(){try{t.texSubImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function z(){try{t.texSubImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function oe(){try{t.texStorage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function fe(){try{t.texStorage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function q(){try{t.texImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function Q(){try{t.texImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function xe(I){return u[I]!==void 0?u[I]:t.getParameter(I)}function we(I,ue){u[I]!==ue&&(t.pixelStorei(I,ue),u[I]=ue)}function le(I){Je.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function ce(I){Be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function ze(I,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let Me=Y.get(I);Me===void 0&&(Me=t.getUniformBlockIndex(ue,I.name),Y.set(I,Me))}function Xe(I,ue){const Me=c.get(ue).get(I);l.get(ue)!==Me&&(t.uniformBlockBinding(ue,Me,I.__bindingPointIndex),l.set(ue,Me))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,ae={},d={},m=new WeakMap,x=[],S=null,v=!1,f=null,g=null,_=null,w=null,A=null,E=null,R=null,y=new Ve(0,0,0),C=0,P=!1,N=null,L=null,W=null,$=null,F=null,Je.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Te,bindFramebuffer:ke,drawBuffers:Ie,useProgram:vt,setBlending:_t,setMaterial:He,setFlipSided:Ge,setCullFace:bt,setLineWidth:sn,setPolygonOffset:U,setScissorTest:Tt,activeTexture:qe,bindTexture:dt,unbindTexture:pe,compressedTexImage2D:yt,compressedTexImage3D:T,texImage2D:q,texImage3D:Q,pixelStorei:we,getParameter:xe,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:oe,texStorage3D:fe,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:le,viewport:ce,reset:lt}}function nA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u=new Set;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,M){return x?new OffscreenCanvas(T,M):yo("canvas")}function v(T,M,z){let Z=1;const ne=yt(T);if((ne.width>z||ne.height>z)&&(Z=z/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const oe=Math.floor(Z*ne.width),fe=Math.floor(Z*ne.height);d===void 0&&(d=S(oe,fe));const q=M?S(oe,fe):d;return q.width=oe,q.height=fe,q.getContext("2d").drawImage(T,0,0,oe,fe),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+oe+"x"+fe+")."),q}else return"data"in T&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function f(T){return T.generateMipmaps}function g(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(T,M,z,Z,ne,oe=!1){if(T!==null){if(t[T]!==void 0)return t[T];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe;Z&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===t.RED&&(z===t.FLOAT&&(q=t.R32F),z===t.HALF_FLOAT&&(q=t.R16F),z===t.UNSIGNED_BYTE&&(q=t.R8),z===t.UNSIGNED_SHORT&&fe&&(q=fe.R16_EXT),z===t.SHORT&&fe&&(q=fe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.R8UI),z===t.UNSIGNED_SHORT&&(q=t.R16UI),z===t.UNSIGNED_INT&&(q=t.R32UI),z===t.BYTE&&(q=t.R8I),z===t.SHORT&&(q=t.R16I),z===t.INT&&(q=t.R32I)),M===t.RG&&(z===t.FLOAT&&(q=t.RG32F),z===t.HALF_FLOAT&&(q=t.RG16F),z===t.UNSIGNED_BYTE&&(q=t.RG8),z===t.UNSIGNED_SHORT&&fe&&(q=fe.RG16_EXT),z===t.SHORT&&fe&&(q=fe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RG8UI),z===t.UNSIGNED_SHORT&&(q=t.RG16UI),z===t.UNSIGNED_INT&&(q=t.RG32UI),z===t.BYTE&&(q=t.RG8I),z===t.SHORT&&(q=t.RG16I),z===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(q=t.RGB16UI),z===t.UNSIGNED_INT&&(q=t.RGB32UI),z===t.BYTE&&(q=t.RGB8I),z===t.SHORT&&(q=t.RGB16I),z===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),z===t.UNSIGNED_INT&&(q=t.RGBA32UI),z===t.BYTE&&(q=t.RGBA8I),z===t.SHORT&&(q=t.RGBA16I),z===t.INT&&(q=t.RGBA32I)),M===t.RGB&&(z===t.UNSIGNED_SHORT&&fe&&(q=fe.RGB16_EXT),z===t.SHORT&&fe&&(q=fe.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),M===t.RGBA){const Q=oe?mc:at.getTransfer(ne);z===t.FLOAT&&(q=t.RGBA32F),z===t.HALF_FLOAT&&(q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(q=Q===gt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&fe&&(q=fe.RGBA16_EXT),z===t.SHORT&&fe&&(q=fe.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(T,M){let z;return T?M===null||M===wi||M===vo?z=t.DEPTH24_STENCIL8:M===si?z=t.DEPTH32F_STENCIL8:M===xo&&(z=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wi||M===vo?z=t.DEPTH_COMPONENT24:M===si?z=t.DEPTH_COMPONENT32F:M===xo&&(z=t.DEPTH_COMPONENT16),z}function E(T,M){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){const M=T.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function y(T){const M=T.target;M.removeEventListener("dispose",y),N(M)}function C(T){const M=i.get(T);if(M.__webglInit===void 0)return;const z=T.source,Z=m.get(z);if(Z){const ne=Z[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(T),Object.keys(Z).length===0&&m.delete(z)}i.remove(T)}function P(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const z=T.source,Z=m.get(z);delete Z[M.__cacheKey],a.memory.textures--}function N(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ne=0;ne<M.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=T.textures;for(let Z=0,ne=z.length;Z<ne;Z++){const oe=i.get(z[Z]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(T)}let L=0;function W(){L=0}function $(){return L}function F(T){L=T}function j(){const T=L;return T>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function B(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function O(T,M){const z=i.get(T);if(T.isVideoTexture&&dt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const Z=T.image;if(Z===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(z,T,M);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function X(T,M){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Te(z,T,M);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function ee(T,M){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Te(z,T,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function ae(T,M){const z=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){ke(z,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const ge={[go]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[ef]:t.MIRRORED_REPEAT},$e={[tn]:t.NEAREST,[JS]:t.NEAREST_MIPMAP_NEAREST,[Ko]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[xu]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},Je={[nM]:t.NEVER,[oM]:t.ALWAYS,[iM]:t.LESS,[Hh]:t.LEQUAL,[rM]:t.EQUAL,[Gh]:t.GEQUAL,[sM]:t.GREATER,[aM]:t.NOTEQUAL};function Be(T,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===xu||M.magFilter===Ko||M.magFilter===Gr||M.minFilter===fn||M.minFilter===xu||M.minFilter===Ko||M.minFilter===Gr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ge[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ge[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ge[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,$e[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,$e[M.minFilter]),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==Ko&&M.minFilter!==Gr||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let ne=m.get(Z);ne===void 0&&(ne={},m.set(Z,ne));const oe=B(M);if(oe!==T.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[oe].usedTimes++;const fe=ne[T.__cacheKey];fe!==void 0&&(ne[T.__cacheKey].usedTimes--,fe.usedTimes===0&&P(M)),T.__cacheKey=oe,T.__webglTexture=ne[oe].texture}return z}function me(T,M,z){return Math.floor(Math.floor(T/z)/M)}function te(T,M,z,Z){const oe=T.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,z,Z,M.data);else{oe.sort((we,le)=>we.start-le.start);let fe=0;for(let we=1;we<oe.length;we++){const le=oe[fe],ce=oe[we],ze=le.start+le.count,Xe=me(ce.start,M.width,4),lt=me(le.start,M.width,4);ce.start<=ze+1&&Xe===lt&&me(ce.start+ce.count-1,M.width,4)===Xe?le.count=Math.max(le.count,ce.start+ce.count-le.start):(++fe,oe[fe]=ce)}oe.length=fe+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let we=0,le=oe.length;we<le;we++){const ce=oe[we],ze=Math.floor(ce.start/4),Xe=Math.ceil(ce.count/4),lt=ze%M.width,I=Math.floor(ze/M.width),ue=Xe,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,lt,I,ue,Y,z,Z,M.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function Te(T,M,z){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=J(T,M),oe=M.source;n.bindTexture(Z,T.__webglTexture,t.TEXTURE0+z);const fe=i.get(oe);if(oe.version!==fe.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Y=at.getPrimaries(at.workingColorSpace),Me=M.colorSpace===lr?null:at.getPrimaries(M.colorSpace),he=M.colorSpace===lr||Y===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=v(M.image,!1,r.maxTextureSize);Q=pe(M,Q);const xe=s.convert(M.format,M.colorSpace),we=s.convert(M.type);let le=w(M.internalFormat,xe,we,M.normalized,M.colorSpace,M.isVideoTexture);Be(Z,M);let ce;const ze=M.mipmaps,Xe=M.isVideoTexture!==!0,lt=fe.__version===void 0||ne===!0,I=oe.dataReady,ue=E(M,Q);if(M.isDepthTexture)le=A(M.format===jr,M.type),lt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,le,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,le,Q.width,Q.height,0,xe,we,null));else if(M.isDataTexture)if(ze.length>0){Xe&&lt&&n.texStorage2D(t.TEXTURE_2D,ue,le,ze[0].width,ze[0].height);for(let Y=0,Me=ze.length;Y<Me;Y++)ce=ze[Y],Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ce.width,ce.height,xe,we,ce.data):n.texImage2D(t.TEXTURE_2D,Y,le,ce.width,ce.height,0,xe,we,ce.data);M.generateMipmaps=!1}else Xe?(lt&&n.texStorage2D(t.TEXTURE_2D,ue,le,Q.width,Q.height),I&&te(M,Q,xe,we)):n.texImage2D(t.TEXTURE_2D,0,le,Q.width,Q.height,0,xe,we,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,le,ze[0].width,ze[0].height,Q.depth);for(let Y=0,Me=ze.length;Y<Me;Y++)if(ce=ze[Y],M.format!==ai)if(xe!==null)if(Xe){if(I)if(M.layerUpdates.size>0){const he=eg(ce.width,ce.height,M.format,M.type);for(const ie of M.layerUpdates){const Ce=ce.data.subarray(ie*he/ce.data.BYTES_PER_ELEMENT,(ie+1)*he/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ie,ce.width,ce.height,1,xe,Ce)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,Q.depth,xe,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,le,ce.width,ce.height,Q.depth,0,ce.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,Q.depth,xe,we,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,le,ce.width,ce.height,Q.depth,0,xe,we,ce.data)}else{Xe&&lt&&n.texStorage2D(t.TEXTURE_2D,ue,le,ze[0].width,ze[0].height);for(let Y=0,Me=ze.length;Y<Me;Y++)ce=ze[Y],M.format!==ai?xe!==null?Xe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ce.width,ce.height,xe,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,le,ce.width,ce.height,0,ce.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ce.width,ce.height,xe,we,ce.data):n.texImage2D(t.TEXTURE_2D,Y,le,ce.width,ce.height,0,xe,we,ce.data)}else if(M.isDataArrayTexture)if(Xe){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,le,Q.width,Q.height,Q.depth),I)if(M.layerUpdates.size>0){const Y=eg(Q.width,Q.height,M.format,M.type);for(const Me of M.layerUpdates){const he=Q.data.subarray(Me*Y/Q.data.BYTES_PER_ELEMENT,(Me+1)*Y/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,Q.width,Q.height,1,xe,we,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xe,we,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,Q.width,Q.height,Q.depth,0,xe,we,Q.data);else if(M.isData3DTexture)Xe?(lt&&n.texStorage3D(t.TEXTURE_3D,ue,le,Q.width,Q.height,Q.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xe,we,Q.data)):n.texImage3D(t.TEXTURE_3D,0,le,Q.width,Q.height,Q.depth,0,xe,we,Q.data);else if(M.isFramebufferTexture){if(lt)if(Xe)n.texStorage2D(t.TEXTURE_2D,ue,le,Q.width,Q.height);else{let Y=Q.width,Me=Q.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,le,Y,Me,0,xe,we,null),Y>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Q.parentNode!==Y){Y.appendChild(Q),u.add(M),Y.onpaint=Pe=>{const It=Pe.changedElements;for(const De of u)It.includes(De.image)&&(De.needsUpdate=!0)},Y.requestPaint();return}const Me=0,he=t.RGBA,ie=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Me,he,ie,Ce,Q),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Xe&&lt){const Y=yt(ze[0]);n.texStorage2D(t.TEXTURE_2D,ue,le,Y.width,Y.height)}for(let Y=0,Me=ze.length;Y<Me;Y++)ce=ze[Y],Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,xe,we,ce):n.texImage2D(t.TEXTURE_2D,Y,le,xe,we,ce);M.generateMipmaps=!1}else if(Xe){if(lt){const Y=yt(Q);n.texStorage2D(t.TEXTURE_2D,ue,le,Y.width,Y.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,we,Q)}else n.texImage2D(t.TEXTURE_2D,0,le,xe,we,Q);f(M)&&g(Z),fe.__version=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ke(T,M,z){if(M.image.length!==6)return;const Z=J(T,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+z);const oe=i.get(ne);if(ne.version!==oe.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const fe=at.getPrimaries(at.workingColorSpace),q=M.colorSpace===lr?null:at.getPrimaries(M.colorSpace),Q=M.colorSpace===lr||fe===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,le=[];for(let ie=0;ie<6;ie++)!xe&&!we?le[ie]=v(M.image[ie],!0,r.maxCubemapSize):le[ie]=we?M.image[ie].image:M.image[ie],le[ie]=pe(M,le[ie]);const ce=le[0],ze=s.convert(M.format,M.colorSpace),Xe=s.convert(M.type),lt=w(M.internalFormat,ze,Xe,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,ue=oe.__version===void 0||Z===!0,Y=ne.dataReady;let Me=E(M,ce);Be(t.TEXTURE_CUBE_MAP,M);let he;if(xe){I&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,lt,ce.width,ce.height);for(let ie=0;ie<6;ie++){he=le[ie].mipmaps;for(let Ce=0;Ce<he.length;Ce++){const Pe=he[Ce];M.format!==ai?ze!==null?I?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Pe.width,Pe.height,ze,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,lt,Pe.width,Pe.height,0,Pe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Pe.width,Pe.height,ze,Xe,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,lt,Pe.width,Pe.height,0,ze,Xe,Pe.data)}}}else{if(he=M.mipmaps,I&&ue){he.length>0&&Me++;const ie=yt(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,lt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(we){I?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le[ie].width,le[ie].height,ze,Xe,le[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,lt,le[ie].width,le[ie].height,0,ze,Xe,le[ie].data);for(let Ce=0;Ce<he.length;Ce++){const It=he[Ce].image[ie].image;I?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,It.width,It.height,ze,Xe,It.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,lt,It.width,It.height,0,ze,Xe,It.data)}}else{I?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ze,Xe,le[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,lt,ze,Xe,le[ie]);for(let Ce=0;Ce<he.length;Ce++){const Pe=he[Ce];I?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,ze,Xe,Pe.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,lt,ze,Xe,Pe.image[ie])}}}f(M)&&g(t.TEXTURE_CUBE_MAP),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ie(T,M,z,Z,ne,oe){const fe=s.convert(z.format,z.colorSpace),q=s.convert(z.type),Q=w(z.internalFormat,fe,q,z.normalized,z.colorSpace),xe=i.get(M),we=i.get(z);if(we.__renderTarget=M,!xe.__hasExternalTextures){const le=Math.max(1,M.width>>oe),ce=Math.max(1,M.height>>oe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,oe,Q,le,ce,M.depth,0,fe,q,null):n.texImage2D(ne,oe,Q,le,ce,0,fe,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),qe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,we.__webglTexture,0,Tt(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,we.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(T,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer){const Z=M.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,oe=A(M.stencilBuffer,ne),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Tt(M),oe,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Tt(M),oe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,T)}else{const Z=M.textures;for(let ne=0;ne<Z.length;ne++){const oe=Z[ne],fe=s.convert(oe.format,oe.colorSpace),q=s.convert(oe.type),Q=w(oe.internalFormat,fe,q,oe.normalized,oe.colorSpace);qe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Tt(M),Q,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Tt(M),Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(T,M,z){const Z=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(M.depthTexture);if(ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Be(t.TEXTURE_CUBE_MAP,M.depthTexture);const xe=s.convert(M.depthTexture.format),we=s.convert(M.depthTexture.type);let le;M.depthTexture.format===Xi?le=t.DEPTH_COMPONENT24:M.depthTexture.format===jr&&(le=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,le,M.width,M.height,0,xe,we,null)}}else O(M.depthTexture,0);const oe=ne.__webglTexture,fe=Tt(M),q=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,Q=M.depthTexture.format===jr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xi)qe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,q,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,Q,q,oe,0);else if(M.depthTexture.format===jr)qe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,q,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,Q,q,oe,0);else throw new Error("Unknown depthTexture format")}function ot(T){const M=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Z}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)We(M.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?We(M.__webglFramebuffer[0],T,0):We(M.__webglFramebuffer,T,0)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),vt(M.__webglDepthbuffer[Z],T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,oe)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),vt(M.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(T,M,z){const Z=i.get(T);M!==void 0&&Ie(Z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ot(T)}function He(T){const M=T.texture,z=i.get(T),Z=i.get(M);T.addEventListener("dispose",y);const ne=T.textures,oe=T.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let Q=0;Q<M.mipmaps.length;Q++)z.__webglFramebuffer[q][Q]=t.createFramebuffer()}else z.__webglFramebuffer[q]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)z.__webglFramebuffer[q]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(fe)for(let q=0,Q=ne.length;q<Q;q++){const xe=i.get(ne[q]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&qe(T)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<ne.length;q++){const Q=ne[q];z.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const xe=s.convert(Q.format,Q.colorSpace),we=s.convert(Q.type),le=w(Q.internalFormat,xe,we,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),ce=Tt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,le,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,z.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),vt(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(t.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ie(z.__webglFramebuffer[q][Q],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Q);else Ie(z.__webglFramebuffer[q],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let q=0,Q=ne.length;q<Q;q++){const xe=ne[q],we=i.get(xe);let le=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,we.__webglTexture),Be(le,xe),Ie(z.__webglFramebuffer,T,xe,t.COLOR_ATTACHMENT0+q,le,0),f(xe)&&g(le)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,Z.__webglTexture),Be(q,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ie(z.__webglFramebuffer[Q],T,M,t.COLOR_ATTACHMENT0,q,Q);else Ie(z.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,q,0);f(M)&&g(q),n.unbindTexture()}T.depthBuffer&&ot(T)}function Ge(T){const M=T.textures;for(let z=0,Z=M.length;z<Z;z++){const ne=M[z];if(f(ne)){const oe=_(T),fe=i.get(ne).__webglTexture;n.bindTexture(oe,fe),g(oe),n.unbindTexture()}}}const bt=[],sn=[];function U(T){if(T.samples>0){if(qe(T)===!1){const M=T.textures,z=T.width,Z=T.height;let ne=t.COLOR_BUFFER_BIT;const oe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(T),q=M.length>1;if(q)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Q=T.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);const we=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,z,Z,0,0,z,Z,ne,t.NEAREST),l===!0&&(bt.length=0,sn.length=0,bt.push(t.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(bt.push(oe),sn.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,sn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);const we=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Tt(T){return Math.min(r.maxSamples,T.samples)}function qe(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(T){const M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function pe(T,M){const z=T.colorSpace,Z=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==pc&&z!==lr&&(at.getTransfer(z)===gt?(Z!==ai||ne!==In)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",z)),M}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.getTextureUnits=$,this.setTextureUnits=F,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=ae,this.rebindTextures=_t,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iA(t,e){function n(i,r=lr){let s;const a=at.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Fh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===av)return t.BYTE;if(i===ov)return t.SHORT;if(i===xo)return t.UNSIGNED_SHORT;if(i===Uh)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===Wi)return t.HALF_FLOAT;if(i===uv)return t.ALPHA;if(i===dv)return t.RGB;if(i===ai)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===jr)return t.DEPTH_STENCIL;if(i===Oh)return t.RED;if(i===Bh)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===zh)return t.RG_INTEGER;if(i===Vh)return t.RGBA_INTEGER;if(i===Fl||i===kl||i===Ol||i===Bl)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tf||i===nf||i===rf||i===sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===af||i===of||i===lf||i===cf||i===uf||i===fc||i===df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===af||i===of)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===cf)return s.COMPRESSED_R11_EAC;if(i===uf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===fc)return s.COMPRESSED_RG11_EAC;if(i===df)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ff||i===hf||i===pf||i===mf||i===gf||i===xf||i===vf||i===_f||i===yf||i===Sf||i===Mf||i===wf||i===Ef||i===bf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ff)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_f)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ef)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tf||i===Af||i===Cf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tf)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Af)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rf||i===Nf||i===hc||i===Pf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Mv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ei({vertexShader:rA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new Ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends ns{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",v=new aA,f={},g=n.getContextAttributes();let _=null,w=null;const A=[],E=[],R=new rt;let y=null;const C=new Wn;C.viewport=new Ot;const P=new Wn;P.viewport=new Ot;const N=[C,P],L=new g1;let W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=A[J];return me===void 0&&(me=new wu,A[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=A[J];return me===void 0&&(me=new wu,A[J]=me),me.getGripSpace()},this.getHand=function(J){let me=A[J];return me===void 0&&(me=new wu,A[J]=me),me.getHandSpace()};function F(J){const me=E.indexOf(J.inputSource);if(me===-1)return;const te=A[me];te!==void 0&&(te.update(J.inputSource,J.frame,c||a),te.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",B);for(let J=0;J<A.length;J++){const me=E[J];me!==null&&(E[J]=null,A[J].disconnect(me))}W=null,$=null,v.reset();for(const J in f)delete f[J];e.setRenderTarget(_),m=null,d=null,u=null,r=null,w=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(r,n)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Te=null,ke=null;g.depth&&(ke=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?jr:Xi,Te=g.stencil?vo:wi);const Ie={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Mi(d.textureWidth,d.textureHeight,{format:ai,type:In,depthTexture:new ta(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Mi(m.framebufferWidth,m.framebufferHeight,{format:ai,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(J){for(let me=0;me<J.removed.length;me++){const te=J.removed[me],Te=E.indexOf(te);Te>=0&&(E[Te]=null,A[Te].disconnect(te))}for(let me=0;me<J.added.length;me++){const te=J.added[me];let Te=E.indexOf(te);if(Te===-1){for(let Ie=0;Ie<A.length;Ie++)if(Ie>=E.length){E.push(te),Te=Ie;break}else if(E[Ie]===null){E[Ie]=te,Te=Ie;break}if(Te===-1)break}const ke=A[Te];ke&&ke.connect(te)}}const O=new k,X=new k;function ee(J,me,te){O.setFromMatrixPosition(me.matrixWorld),X.setFromMatrixPosition(te.matrixWorld);const Te=O.distanceTo(X),ke=me.projectionMatrix.elements,Ie=te.projectionMatrix.elements,vt=ke[14]/(ke[10]-1),We=ke[14]/(ke[10]+1),ot=(ke[9]+1)/ke[5],_t=(ke[9]-1)/ke[5],He=(ke[8]-1)/ke[0],Ge=(Ie[8]+1)/Ie[0],bt=vt*He,sn=vt*Ge,U=Te/(-He+Ge),Tt=U*-He;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Tt),J.translateZ(U),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ke[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const qe=vt+U,dt=We+U,pe=bt-Tt,yt=sn+(Te-Tt),T=ot*We/dt*qe,M=_t*We/dt*qe;J.projectionMatrix.makePerspective(pe,yt,T,M,qe,dt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let me=J.near,te=J.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(te=v.depthFar)),L.near=P.near=C.near=me,L.far=P.far=C.far=te,(W!==L.near||$!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),W=L.near,$=L.far),L.layers.mask=J.layers.mask|6,C.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;const Te=J.parent,ke=L.cameras;ae(L,Te);for(let Ie=0;Ie<ke.length;Ie++)ae(ke[Ie],Te);ke.length===2?ee(L,C,P):L.projectionMatrix.copy(C.projectionMatrix),ge(J,L,Te)};function ge(J,me,te){te===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(te.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=So*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(J){return f[J]};let $e=null;function Je(J,me){if(h=me.getViewerPose(c||a),x=me,h!==null){const te=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Te=!1;te.length!==L.cameras.length&&(L.cameras.length=0,Te=!0);for(let We=0;We<te.length;We++){const ot=te[We];let _t=null;if(m!==null)_t=m.getViewport(ot);else{const Ge=u.getViewSubImage(d,ot);_t=Ge.viewport,We===0&&(e.setRenderTargetTextures(w,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(w))}let He=N[We];He===void 0&&(He=new Wn,He.layers.enable(We),He.viewport=new Ot,N[We]=He),He.matrix.fromArray(ot.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ot.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(_t.x,_t.y,_t.width,_t.height),We===0&&(L.matrix.copy(He.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Te===!0&&L.cameras.push(He)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){u=i.getBinding();const We=u.getDepthInformation(te[0]);We&&We.isValid&&We.texture&&v.init(We,r.renderState)}if(ke&&ke.includes("camera-access")&&S){e.state.unbindTexture(),u=i.getBinding();for(let We=0;We<te.length;We++){const ot=te[We].camera;if(ot){let _t=f[ot];_t||(_t=new Mv,f[ot]=_t);const He=u.getCameraImage(ot);_t.sourceTexture=He}}}}for(let te=0;te<A.length;te++){const Te=E[te],ke=A[te];Te!==null&&ke!==void 0&&ke.update(Te,me,c||a)}$e&&$e(J,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),x=null}const Be=new bv;Be.setAnimationLoop(Je),this.setAnimationLoop=function(J){$e=J},this.dispose=function(){}}}const lA=new Rt,Lv=new Ye;Lv.set(-1,0,0,0,1,0,0,0,1);function cA(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,wv(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,g,_,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(v,f):f.isMeshLambertMaterial?(s(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(v,f),u(v,f)):f.isMeshPhongMaterial?(s(v,f),h(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(v,f),d(v,f),f.isMeshPhysicalMaterial&&m(v,f,w)):f.isMeshMatcapMaterial?(s(v,f),x(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),S(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(a(v,f),f.isLineDashedMaterial&&o(v,f)):f.isPointsMaterial?l(v,f,g,_):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===_n&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===_n&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const g=e.get(f),_=g.envMap,w=g.envMapRotation;_&&(v.envMap.value=_,v.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(w)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Lv),v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function a(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function o(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,g,_){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*g,v.scale.value=_*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function h(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function u(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function m(v,f,g){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,f){f.matcap&&(v.matcap.value=f.matcap)}function S(v,f){const g=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const w=_.program;i.uniformBlockBinding(g,w)}function c(g,_){let w=r[g.id];w===void 0&&(x(g),w=h(g),r[g.id]=w,g.addEventListener("dispose",v));const A=_.program;i.updateUBOMapping(g,A);const E=e.render.frame;s[g.id]!==E&&(d(g),s[g.id]=E)}function h(g){const _=u();g.__bindingPointIndex=_;const w=t.createBuffer(),A=g.__size,E=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,w),w}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],w=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,R=w.length;E<R;E++){const y=Array.isArray(w[E])?w[E]:[w[E]];for(let C=0,P=y.length;C<P;C++){const N=y[C];if(m(N,E,C,A)===!0){const L=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let F=0;F<W.length;F++){const j=W[F],B=S(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,L+$,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):ArrayBuffer.isView(j)?N.__data.set(new j.constructor(j.buffer,j.byteOffset,N.__data.length)):(j.toArray(N.__data,$),$+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,w,A){const E=g.value,R=_+"_"+w;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:ArrayBuffer.isView(E)?A[R]=E.slice():A[R]=E.clone(),!0;{const y=A[R];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return A[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function x(g){const _=g.uniforms;let w=0;const A=16;for(let R=0,y=_.length;R<y;R++){const C=Array.isArray(_[R])?_[R]:[_[R]];for(let P=0,N=C.length;P<N;P++){const L=C[P],W=Array.isArray(L.value)?L.value:[L.value];for(let $=0,F=W.length;$<F;$++){const j=W[$],B=S(j),O=w%A,X=O%B.boundary,ee=O+X;w+=X,ee!==0&&A-ee<B.storage&&(w+=A-ee),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=B.storage}}}const E=w%A;return E>0&&(w+=A-E),g.__size=w,g.__cache={},this}function S(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(_.boundary=16,_.storage=g.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",g),_}function v(g){const _=g.target;_.removeEventListener("dispose",v);const w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const dA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function fA(){return pi===null&&(pi=new _v(dA,16,16,Jr,Wi),pi.name="DFG_LUT",pi.minFilter=fn,pi.magFilter=fn,pi.wrapS=Fi,pi.wrapT=Fi,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class hA{constructor(e={}){const{canvas:n=cM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=In}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=m,v=new Set([Vh,zh,Bh]),f=new Set([In,wi,xo,vo,Fh,kh]),g=new Uint32Array(4),_=new Int32Array(4),w=new k;let A=null,E=null;const R=[],y=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,L=null;this._outputColorSpace=Mn;let W=0,$=0,F=null,j=-1,B=null;const O=new Ot,X=new Ot;let ee=null;const ae=new Ve(0);let ge=0,$e=n.width,Je=n.height,Be=1,J=null,me=null;const te=new Ot(0,0,$e,Je),Te=new Ot(0,0,$e,Je);let ke=!1;const Ie=new qh;let vt=!1,We=!1;const ot=new Rt,_t=new k,He=new Ot,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function sn(){return F===null?Be:1}let U=i;function Tt(b,D){return n.getContext(b,D)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dh}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),U===null){const D="webgl2";if(U=Tt(D,b),U===null)throw Tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ct("WebGLRenderer: "+b.message),b}let qe,dt,pe,yt,T,M,z,Z,ne,oe,fe,q,Q,xe,we,le,ce,ze,Xe,lt,I,ue,Y;function Me(){qe=new fb(U),qe.init(),I=new iA(U,qe),dt=new rb(U,qe,e,I),pe=new tA(U,qe),dt.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),yt=new mb(U),T=new VT,M=new nA(U,qe,pe,T,dt,I,yt),z=new db(P),Z=new _1(U),ue=new nb(U,Z),ne=new hb(U,Z,yt,ue),oe=new xb(U,ne,Z,ue,yt),ze=new gb(U,dt,M),we=new sb(T),fe=new zT(P,z,qe,dt,ue,we),q=new cA(P,T),Q=new GT,xe=new $T(qe),ce=new tb(P,z,pe,oe,x,l),le=new eA(P,oe,dt),Y=new uA(U,yt,dt,pe),Xe=new ib(U,qe,yt),lt=new pb(U,qe,yt),yt.programs=fe.programs,P.capabilities=dt,P.extensions=qe,P.properties=T,P.renderLists=Q,P.shadowMap=le,P.state=pe,P.info=yt}Me(),S!==In&&(C=new _b(S,n.width,n.height,r,s));const he=new oA(P,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(b){b!==void 0&&(Be=b,this.setSize($e,Je,!1))},this.getSize=function(b){return b.set($e,Je)},this.setSize=function(b,D,G=!0){if(he.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=b,Je=D,n.width=Math.floor(b*Be),n.height=Math.floor(D*Be),G===!0&&(n.style.width=b+"px",n.style.height=D+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set($e*Be,Je*Be).floor()},this.setDrawingBufferSize=function(b,D,G){$e=b,Je=D,Be=G,n.width=Math.floor(b*G),n.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(S===In){ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Oe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,D,G,V){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,D,G,V),pe.viewport(O.copy(te).multiplyScalar(Be).round())},this.getScissor=function(b){return b.copy(Te)},this.setScissor=function(b,D,G,V){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,D,G,V),pe.scissor(X.copy(Te).multiplyScalar(Be).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){pe.setScissorTest(ke=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,G=!0){let V=0;if(b){let H=!1;if(F!==null){const ve=F.texture.format;H=v.has(ve)}if(H){const ve=F.texture.type,Ee=f.has(ve),_e=ce.getClearColor(),Ae=ce.getClearAlpha(),Re=_e.r,je=_e.g,Ze=_e.b;Ee?(g[0]=Re,g[1]=je,g[2]=Ze,g[3]=Ae,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Re,_[1]=je,_[2]=Ze,_[3]=Ae,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}D&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),ce.dispose(),Q.dispose(),xe.dispose(),T.dispose(),z.dispose(),oe.dispose(),ue.dispose(),Y.dispose(),fe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Yi),he.removeEventListener("sessionend",da),bi.stop()};function ie(b){b.preventDefault(),Em("WebGLRenderer: Context Lost."),N=!0}function Ce(){Em("WebGLRenderer: Context Restored."),N=!1;const b=yt.autoReset,D=le.enabled,G=le.autoUpdate,V=le.needsUpdate,H=le.type;Me(),yt.autoReset=b,le.enabled=D,le.autoUpdate=G,le.needsUpdate=V,le.type=H}function Pe(b){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const D=b.target;D.removeEventListener("dispose",It),De(D)}function De(b){Rn(b),T.remove(b)}function Rn(b){const D=T.get(b).programs;D!==void 0&&(D.forEach(function(G){fe.releaseProgram(G)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,V,H,ve){D===null&&(D=Ge);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,_e=Ue(b,D,G,V,H);pe.setMaterial(V,Ee);let Ae=G.index,Re=1;if(V.wireframe===!0){if(Ae=ne.getWireframeAttribute(G),Ae===void 0)return;Re=2}const je=G.drawRange,Ze=G.attributes.position;let Ne=je.start*Re,pt=(je.start+je.count)*Re;ve!==null&&(Ne=Math.max(Ne,ve.start*Re),pt=Math.min(pt,(ve.start+ve.count)*Re)),Ae!==null?(Ne=Math.max(Ne,0),pt=Math.min(pt,Ae.count)):Ze!=null&&(Ne=Math.max(Ne,0),pt=Math.min(pt,Ze.count));const wt=pt-Ne;if(wt<0||wt===1/0)return;ue.setup(H,V,_e,G,Ae);let Pt,Le=Xe;if(Ae!==null&&(Pt=Z.get(Ae),Le=lt,Le.setIndex(Pt)),H.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*sn()),Le.setMode(U.LINES)):Le.setMode(U.TRIANGLES);else if(H.isLine){let de=V.linewidth;de===void 0&&(de=1),pe.setLineWidth(de*sn()),H.isLineSegments?Le.setMode(U.LINES):H.isLineLoop?Le.setMode(U.LINE_LOOP):Le.setMode(U.LINE_STRIP)}else H.isPoints?Le.setMode(U.POINTS):H.isSprite&&Le.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))Le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const de=H._multiDrawStarts,se=H._multiDrawCounts,Bt=H._multiDrawCount,et=Ae?Z.get(Ae).bytesPerElement:1,Gt=T.get(V).currentProgram.getUniforms();for(let zn=0;zn<Bt;zn++)Gt.setValue(U,"_gl_DrawID",zn),Le.render(de[zn]/et,se[zn])}else if(H.isInstancedMesh)Le.renderInstances(Ne,wt,H.count);else if(G.isInstancedBufferGeometry){const de=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,se=Math.min(G.instanceCount,de);Le.renderInstances(Ne,wt,se)}else Le.render(Ne,wt)};function Nt(b,D,G){b.transparent===!0&&b.side===Ii&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,ha(b,D,G),b.side=wr,b.needsUpdate=!0,ha(b,D,G),b.side=Ii):ha(b,D,G)}this.compile=function(b,D,G=null){G===null&&(G=b),E=xe.get(G),E.init(D),y.push(E),G.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),b!==G&&b.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const V=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ve=H.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const _e=ve[Ee];Nt(_e,G,H),V.add(_e)}else Nt(ve,G,H),V.add(ve)}),E=y.pop(),V},this.compileAsync=function(b,D,G=null){const V=this.compile(b,D,G);return new Promise(H=>{function ve(){if(V.forEach(function(Ee){T.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){H(b);return}setTimeout(ve,10)}qe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Bn=null;function No(b){Bn&&Bn(b)}function Yi(){bi.stop()}function da(){bi.start()}const bi=new bv;bi.setAnimationLoop(No),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){Bn=b,he.setAnimationLoop(b),b===null?bi.stop():bi.start()},he.addEventListener("sessionstart",Yi),he.addEventListener("sessionend",da),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(b,D);const G=he.enabled===!0&&he.isPresenting===!0,V=C!==null&&(F===null||G)&&C.begin(P,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,D,F),E=xe.get(b,y.length),E.init(D),E.state.textureUnits=M.getTextureUnits(),y.push(E),ot.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ie.setFromProjectionMatrix(ot,vi,D.reversedDepth),We=this.localClippingEnabled,vt=we.init(this.clippingPlanes,We),A=Q.get(b,R.length),A.init(),R.push(A),he.enabled===!0&&he.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&rs(Ee,D,-1/0,P.sortObjects)}rs(b,D,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(J,me),bt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,bt&&ce.addToRenderList(A,b),this.info.render.frame++,vt===!0&&we.beginShadows();const H=E.state.shadowsArray;if(le.render(H,b,D),vt===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&C.hasRenderPass())===!1){const Ee=A.opaque,_e=A.transmissive;if(E.setupLights(),D.isArrayCamera){const Ae=D.cameras;if(_e.length>0)for(let Re=0,je=Ae.length;Re<je;Re++){const Ze=Ae[Re];Po(Ee,_e,b,Ze)}bt&&ce.render(b);for(let Re=0,je=Ae.length;Re<je;Re++){const Ze=Ae[Re];fa(A,b,Ze,Ze.viewport)}}else _e.length>0&&Po(Ee,_e,b,D),bt&&ce.render(b),fa(A,b,D)}F!==null&&$===0&&(M.updateMultisampleRenderTarget(F),M.updateRenderTargetMipmap(F)),V&&C.end(P),b.isScene===!0&&b.onAfterRender(P,b,D),ue.resetDefaultState(),j=-1,B=null,y.pop(),y.length>0?(E=y[y.length-1],M.setTextureUnits(E.state.textureUnits),vt===!0&&we.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,L!==null&&L.renderEnd()};function rs(b,D,G,V){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ie.intersectsSprite(b)){V&&He.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const Ee=oe.update(b),_e=b.material;_e.visible&&A.push(b,Ee,_e,G,He.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ie.intersectsObject(b))){const Ee=oe.update(b),_e=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),He.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(_e)){const Ae=Ee.groups;for(let Re=0,je=Ae.length;Re<je;Re++){const Ze=Ae[Re],Ne=_e[Ze.materialIndex];Ne&&Ne.visible&&A.push(b,Ee,Ne,G,He.z,Ze)}}else _e.visible&&A.push(b,Ee,_e,G,He.z,null)}}const ve=b.children;for(let Ee=0,_e=ve.length;Ee<_e;Ee++)rs(ve[Ee],D,G,V)}function fa(b,D,G,V){const{opaque:H,transmissive:ve,transparent:Ee}=b;E.setupLightsView(G),vt===!0&&we.setGlobalState(P.clippingPlanes,G),V&&pe.viewport(O.copy(V)),H.length>0&&ss(H,D,G),ve.length>0&&ss(ve,D,G),Ee.length>0&&ss(Ee,D,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Po(b,D,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Ne=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Mi(1,1,{generateMipmaps:!0,type:Ne?Wi:In,minFilter:Gr,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const ve=E.state.transmissionRenderTarget[V.id],Ee=V.viewport||O;ve.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const _e=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(ae),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),bt&&ce.render(G);const je=P.toneMapping;P.toneMapping=Si;const Ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),vt===!0&&we.setGlobalState(P.clippingPlanes,V),ss(b,G,V),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let pt=0,wt=D.length;pt<wt;pt++){const Pt=D[pt],{object:Le,geometry:de,material:se,group:Bt}=Pt;if(se.side===Ii&&Le.layers.test(V.layers)){const et=se.side;se.side=_n,se.needsUpdate=!0,Lo(Le,G,V,de,se,Bt),se.side=et,se.needsUpdate=!0,Ne=!0}}Ne===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve))}P.setRenderTarget(_e,Ae,Re),P.setClearColor(ae,ge),Ze!==void 0&&(V.viewport=Ze),P.toneMapping=je}function ss(b,D,G){const V=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ve=b.length;H<ve;H++){const Ee=b[H],{object:_e,geometry:Ae,group:Re}=Ee;let je=Ee.material;je.allowOverride===!0&&V!==null&&(je=V),_e.layers.test(G.layers)&&Lo(_e,D,G,Ae,je,Re)}}function Lo(b,D,G,V,H,ve){b.onBeforeRender(P,D,G,V,H,ve),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(P,D,G,V,b,ve),H.transparent===!0&&H.side===Ii&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,P.renderBufferDirect(G,D,V,H,b,ve),H.side=wr,H.needsUpdate=!0,P.renderBufferDirect(G,D,V,H,b,ve),H.side=Ii):P.renderBufferDirect(G,D,V,H,b,ve),b.onAfterRender(P,D,G,V,H,ve)}function ha(b,D,G){D.isScene!==!0&&(D=Ge);const V=T.get(b),H=E.state.lights,ve=E.state.shadowsArray,Ee=H.state.version,_e=fe.getParameters(b,H.state,ve,D,G,E.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(_e);let Re=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;const je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=z.get(b.envMap||V.environment,je),V.envMapRotation=V.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",It),Re=new Map,V.programs=Re);let Ze=Re.get(Ae);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===Ee)return Hc(b,_e),Ze}else _e.uniforms=fe.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,G,_e),b.onBeforeCompile(_e,P),Ze=fe.acquireProgram(_e,Ae),Re.set(Ae,Ze),V.uniforms=_e.uniforms;const Ne=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=we.uniform),Hc(b,_e),V.needsLights=Ke(b),V.lightsStateVersion=Ee,V.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Ze,V.uniformsList=null,Ze}function Vc(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=zl.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Hc(b,D){const G=T.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function K(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;w.setFromMatrixPosition(D.matrixWorld);for(let G=0,V=b.length;G<V;G++){const H=b[G];if(H.texture!==null&&H.boundingBox.containsPoint(w))return H}return null}function Ue(b,D,G,V,H){D.isScene!==!0&&(D=Ge),M.resetTextureUnits();const ve=D.fog,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,_e=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:at.workingColorSpace,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=z.get(V.envMap||Ee,Ae),je=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ze=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!G.morphAttributes.position,pt=!!G.morphAttributes.normal,wt=!!G.morphAttributes.color;let Pt=Si;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const Le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=Le!==void 0?Le.length:0,se=T.get(V),Bt=E.state.lights;if(vt===!0&&(We===!0||b!==B)){const mt=b===B&&V.id===j;we.setState(V,b,mt)}let et=!1;V.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Bt.state.version||se.outputColorSpace!==_e||H.isBatchedMesh&&se.batching===!1||!H.isBatchedMesh&&se.batching===!0||H.isBatchedMesh&&se.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&se.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&se.instancing===!1||!H.isInstancedMesh&&se.instancing===!0||H.isSkinnedMesh&&se.skinning===!1||!H.isSkinnedMesh&&se.skinning===!0||H.isInstancedMesh&&se.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&se.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&se.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&se.instancingMorph===!1&&H.morphTexture!==null||se.envMap!==Re||V.fog===!0&&se.fog!==ve||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==we.numPlanes||se.numIntersection!==we.numIntersection)||se.vertexAlphas!==je||se.vertexTangents!==Ze||se.morphTargets!==Ne||se.morphNormals!==pt||se.morphColors!==wt||se.toneMapping!==Pt||se.morphTargetsCount!==de||!!se.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,se.__version=V.version);let Gt=se.currentProgram;et===!0&&(Gt=ha(V,D,H),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Gt,se));let zn=!1,Vn=!1,di=!1;const tt=Gt.getUniforms(),Mt=se.uniforms;if(pe.useProgram(Gt.program)&&(zn=!0,Vn=!0,di=!0),V.id!==j&&(j=V.id,Vn=!0),se.needsLights){const mt=K(E.state.lightProbeGridArray,H);se.lightProbeGrid!==mt&&(se.lightProbeGrid=mt,Vn=!0)}if(zn||B!==b){pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),tt.setValue(U,"projectionMatrix",b.projectionMatrix),tt.setValue(U,"viewMatrix",b.matrixWorldInverse);const $i=tt.map.cameraPosition;$i!==void 0&&$i.setValue(U,_t.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&tt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&tt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Vn=!0,di=!0)}if(se.needsLights&&(Bt.state.directionalShadowMap.length>0&&tt.setValue(U,"directionalShadowMap",Bt.state.directionalShadowMap,M),Bt.state.spotShadowMap.length>0&&tt.setValue(U,"spotShadowMap",Bt.state.spotShadowMap,M),Bt.state.pointShadowMap.length>0&&tt.setValue(U,"pointShadowMap",Bt.state.pointShadowMap,M)),H.isSkinnedMesh){tt.setOptional(U,H,"bindMatrix"),tt.setOptional(U,H,"bindMatrixInverse");const mt=H.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),tt.setValue(U,"boneTexture",mt.boneTexture,M))}H.isBatchedMesh&&(tt.setOptional(U,H,"batchingTexture"),tt.setValue(U,"batchingTexture",H._matricesTexture,M),tt.setOptional(U,H,"batchingIdTexture"),tt.setValue(U,"batchingIdTexture",H._indirectTexture,M),tt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&tt.setValue(U,"batchingColorTexture",H._colorsTexture,M));const an=G.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ze.update(H,G,Gt),(Vn||se.receiveShadow!==H.receiveShadow)&&(se.receiveShadow=H.receiveShadow,tt.setValue(U,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(Mt.envMapIntensity.value=D.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=fA()),Vn){if(tt.setValue(U,"toneMappingExposure",P.toneMappingExposure),se.needsLights&&Fe(Mt,di),ve&&V.fog===!0&&q.refreshFogUniforms(Mt,ve),q.refreshMaterialUniforms(Mt,V,Be,Je,E.state.transmissionRenderTarget[b.id]),se.needsLights&&se.lightProbeGrid){const mt=se.lightProbeGrid;Mt.probesSH.value=mt.texture,Mt.probesMin.value.copy(mt.boundingBox.min),Mt.probesMax.value.copy(mt.boundingBox.max),Mt.probesResolution.value.copy(mt.resolution)}zl.upload(U,Vc(se),Mt,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zl.upload(U,Vc(se),Mt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&tt.setValue(U,"center",H.center),tt.setValue(U,"modelViewMatrix",H.modelViewMatrix),tt.setValue(U,"normalMatrix",H.normalMatrix),tt.setValue(U,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const mt=V.uniformsGroups;for(let $i=0,as=mt.length;$i<as;$i++){const sp=mt[$i];Y.update(sp,Gt),Y.bind(sp,Gt)}}return Gt}function Fe(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Ke(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,D,G){const V=T.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=D,T.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const G=T.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0};const st=U.createFramebuffer();this.setRenderTarget=function(b,D=0,G=0){F=b,W=D,$=G;let V=null,H=!1,ve=!1;if(b){const _e=T.get(b);if(_e.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),O.copy(b.viewport),X.copy(b.scissor),ee=b.scissorTest,pe.viewport(O),pe.scissor(X),pe.setScissorTest(ee),j=-1;return}else if(_e.__webglFramebuffer===void 0)M.setupRenderTarget(b);else if(_e.__hasExternalTextures)M.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(_e.__boundDepthTexture!==je){if(je!==null&&T.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const Re=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?V=Re[D][G]:V=Re[D],H=!0):b.samples>0&&M.useMultisampledRTT(b)===!1?V=T.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[G]:V=Re,O.copy(b.viewport),X.copy(b.scissor),ee=b.scissorTest}else O.copy(te).multiplyScalar(Be).floor(),X.copy(Te).multiplyScalar(Be).floor(),ee=ke;if(G!==0&&(V=st),pe.bindFramebuffer(U.FRAMEBUFFER,V)&&pe.drawBuffers(b,V),pe.viewport(O),pe.scissor(X),pe.setScissorTest(ee),H){const _e=T.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,G)}else if(ve){const _e=D;for(let Ae=0;Ae<b.textures.length;Ae++){const Re=T.get(b.textures[Ae]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,G,_e)}}else if(b!==null&&G!==0){const _e=T.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,G)}j=-1},this.readRenderTargetPixels=function(b,D,G,V,H,ve,Ee,_e=0){if(!(b&&b.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){pe.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Re=b.textures[_e],je=Re.format,Ze=Re.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!dt.textureFormatReadable(je)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ze)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-V&&G>=0&&G<=b.height-H&&U.readPixels(D,G,V,H,I.convert(je),I.convert(Ze),ve)}finally{const Re=F!==null?T.get(F).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,V,H,ve,Ee,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(D>=0&&D<=b.width-V&&G>=0&&G<=b.height-H){pe.bindFramebuffer(U.FRAMEBUFFER,Ae);const Re=b.textures[_e],je=Re.format,Ze=Re.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!dt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(D,G,V,H,I.convert(je),I.convert(Ze),0);const pt=F!==null?T.get(F).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,pt);const wt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await uM(U,wt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.deleteBuffer(Ne),U.deleteSync(wt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,G=0){const V=Math.pow(2,-G),H=Math.floor(b.image.width*V),ve=Math.floor(b.image.height*V),Ee=D!==null?D.x:0,_e=D!==null?D.y:0;M.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,Ee,_e,H,ve),pe.unbindTexture()};const ft=U.createFramebuffer(),St=U.createFramebuffer();this.copyTextureToTexture=function(b,D,G=null,V=null,H=0,ve=0){let Ee,_e,Ae,Re,je,Ze,Ne,pt,wt;const Pt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(G!==null)Ee=G.max.x-G.min.x,_e=G.max.y-G.min.y,Ae=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,je=G.min.y,Ze=G.isBox3?G.min.z:0;else{const Mt=Math.pow(2,-H);Ee=Math.floor(Pt.width*Mt),_e=Math.floor(Pt.height*Mt),b.isDataArrayTexture?Ae=Pt.depth:b.isData3DTexture?Ae=Math.floor(Pt.depth*Mt):Ae=1,Re=0,je=0,Ze=0}V!==null?(Ne=V.x,pt=V.y,wt=V.z):(Ne=0,pt=0,wt=0);const Le=I.convert(D.format),de=I.convert(D.type);let se;D.isData3DTexture?(M.setTexture3D(D,0),se=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(M.setTexture2DArray(D,0),se=U.TEXTURE_2D_ARRAY):(M.setTexture2D(D,0),se=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Bt=pe.getParameter(U.UNPACK_ROW_LENGTH),et=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),Gt=pe.getParameter(U.UNPACK_SKIP_PIXELS),zn=pe.getParameter(U.UNPACK_SKIP_ROWS),Vn=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,Pt.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),pe.pixelStorei(U.UNPACK_SKIP_ROWS,je),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze);const di=b.isDataArrayTexture||b.isData3DTexture,tt=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const Mt=T.get(b),an=T.get(D),mt=T.get(Mt.__renderTarget),$i=T.get(an.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let as=0;as<Ae;as++)di&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(b).__webglTexture,H,Ze+as),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(D).__webglTexture,ve,wt+as)),U.blitFramebuffer(Re,je,Ee,_e,Ne,pt,Ee,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||T.has(b)){const Mt=T.get(b),an=T.get(D);pe.bindFramebuffer(U.READ_FRAMEBUFFER,ft),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,St);for(let mt=0;mt<Ae;mt++)di?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,H,Ze+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,H),tt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,ve,wt+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,ve),H!==0?U.blitFramebuffer(Re,je,Ee,_e,Ne,pt,Ee,_e,U.COLOR_BUFFER_BIT,U.NEAREST):tt?U.copyTexSubImage3D(se,ve,Ne,pt,wt+mt,Re,je,Ee,_e):U.copyTexSubImage2D(se,ve,Ne,pt,Re,je,Ee,_e);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(se,ve,Ne,pt,wt,Ee,_e,Ae,Le,de,Pt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(se,ve,Ne,pt,wt,Ee,_e,Ae,Le,Pt.data):U.texSubImage3D(se,ve,Ne,pt,wt,Ee,_e,Ae,Le,de,Pt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,Ne,pt,Ee,_e,Le,de,Pt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,Ne,pt,Pt.width,Pt.height,Le,Pt.data):U.texSubImage2D(U.TEXTURE_2D,ve,Ne,pt,Ee,_e,Le,de,Pt);pe.pixelStorei(U.UNPACK_ROW_LENGTH,Bt),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Gt),pe.pixelStorei(U.UNPACK_SKIP_ROWS,zn),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Vn),ve===0&&D.generateMipmaps&&U.generateMipmap(se),pe.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&M.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){W=0,$=0,F=null,pe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}const Pa={clearColor:67624,dprCap:1.75,particleCap:120,fov:56,cameraPosition:{x:0,y:1.9,z:7.4},arenaRadius:26,reducedMotion:!1,respawnDelay:1.6,player:{radius:1.05,maxHealth:100,maxSpeed:8.4,accel:26,friction:16,invulnAfterHit:.2,knockback:4.2},camera:{distance:9.25,pitch:.32,minPitch:.12,maxPitch:.72,follow:10,sensitivity:.0033},enemies:{count:8,spawnRadius:15,detectRange:18,separation:1.25,attackRange:1.25,attackCooldown:.75,damage:12}},pA=t=>{const e=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;return{...Pa,...t,reducedMotion:e,cameraPosition:{...Pa.cameraPosition},player:{...Pa.player},camera:{...Pa.camera},enemies:{...Pa.enemies}}},mA=async()=>{const t=new u1;try{const e=await t.loadAsync("/micro-texture.png");return e.wrapS=go,e.wrapT=go,e.colorSpace=Mn,e.needsUpdate=!0,{microTexture:e}}catch{return{microTexture:null}}},Eg=t=>Math.max(-1,Math.min(1,t)),gA=t=>{const e=new Set;let n=!1,i=!1,r=0,s=0,a=0,o=0;const l=E=>{e.add(E.key.toLowerCase())},c=E=>{e.delete(E.key.toLowerCase())},h=E=>{if(E.button===0){t.focus(),n=!0,a=E.clientX,o=E.clientY;try{t.setPointerCapture(E.pointerId)}catch{}if(t.requestPointerLock)try{t.requestPointerLock()}catch{}}},u=E=>{if(!n||i)return;const R=E.clientX-a,y=E.clientY-o;a=E.clientX,o=E.clientY,r+=R,s+=y},d=E=>{if(E.button===0){n=!1;try{t.releasePointerCapture(E.pointerId)}catch{}}},m=()=>{n=!1},x=E=>{i&&(r+=E.movementX,s+=E.movementY)},S=()=>{i=typeof document<"u"&&document.pointerLockElement===t,n=!1},v=()=>S(),f=()=>{i=!1};window.addEventListener("keydown",l),window.addEventListener("keyup",c),t.addEventListener("pointerdown",h),t.addEventListener("pointermove",u),t.addEventListener("pointerup",d),t.addEventListener("pointercancel",m),document.addEventListener("pointerlockchange",v),document.addEventListener("pointerlockerror",f),document.addEventListener("mousemove",x),S();const g=()=>{const E=e.has("w")||e.has("arrowup")?1:0,R=e.has("s")||e.has("arrowdown")?1:0,y=e.has("a")||e.has("arrowleft")?1:0,C=e.has("d")||e.has("arrowright")?1:0,P=Eg(C-y),N=Eg(E-R);return{x:P,y:N}};return{getState:()=>{const{x:E,y:R}=g();return{moveX:E,moveY:R,lookDX:r,lookDY:s,pointerLocked:i,dragging:n}},consumeLookDelta:()=>{const E=r,R=s;return r=0,s=0,{dx:E,dy:R}},dispose:()=>{if(window.removeEventListener("keydown",l),window.removeEventListener("keyup",c),t.removeEventListener("pointerdown",h),t.removeEventListener("pointermove",u),t.removeEventListener("pointerup",d),t.removeEventListener("pointercancel",m),document.removeEventListener("pointerlockchange",v),document.removeEventListener("pointerlockerror",f),document.removeEventListener("mousemove",x),typeof document<"u"&&document.pointerLockElement===t)try{document.exitPointerLock()}catch{}}}},xA=()=>{if(typeof window>"u"||typeof window.matchMedia>"u")return{get:()=>!1,dispose:()=>{}};const t=window.matchMedia("(prefers-reduced-motion: reduce)");let e=t.matches;const n=s=>{e=s.matches};return t.addEventListener("change",n),{get:()=>e,dispose:()=>t.removeEventListener("change",n)}},vA=(t,e,n)=>{const i=new HM;i.background=new Ve(e.clearColor),i.fog=new Xh(new Ve(330795),.055);const r=new Wn(e.fov,1,.1,220);r.position.set(e.cameraPosition.x,e.cameraPosition.y,e.cameraPosition.z),r.lookAt(0,1.2,0),i.add(r),r.position.clone();const s=new Ro(1,1),a=new gc({color:16722842,transparent:!0,opacity:0,blending:$a,depthWrite:!1}),o=new en(s,a);o.position.z=-.4,o.renderOrder=999,r.add(o),n.canvas.tabIndex=0,n.canvas.style.touchAction="none";const l=new d1(11128063,1705260,.95);i.add(l);const c=new Qm(16777215,1.35);c.position.set(7.5,11.5,6.5),c.castShadow=!1,i.add(c);const h=new Qm(16739286,.42);h.position.set(-9.5,6,-7.5),h.castShadow=!1,i.add(h);const u=new p1(2763608,.22);i.add(u);const d=new ka;i.add(d);const m=e.arenaRadius,x=6,S=.85,v=.62,f=new Mo(m*.985,m*1.02,x,72,1),g=f.attributes.position;for(let K=0;K<g.count;K+=1){const Ue=g.getX(K),Fe=g.getY(K),Ke=g.getZ(K),st=Math.sqrt(Ue*Ue+Ke*Ke),ft=Math.min(1,st/m),St=Fe>x*.5-.001,b=Fe<-x*.5+.001;if(St){const H=(1-ft*ft)*S;g.setY(K,Fe+H);continue}if(b){const H=(1-ft*ft)*v;g.setY(K,Fe-H);continue}const D=Math.sin(ft*Math.PI)*.22,G=st+D,V=st>1e-4?G/st:1;g.setX(K,Ue*V),g.setZ(K,Ke*V)}g.needsUpdate=!0,f.computeVertexNormals();const _=new ir({color:463930,roughness:.92,metalness:.05,map:t.microTexture??void 0,emissive:new Ve(201269),emissiveIntensity:.3});t.microTexture&&t.microTexture.repeat.set(6,6);const w=new en(f,_);w.position.y=-3.85,d.add(w);const A=new Or(m*1.55,3),E=new gc({color:6612479,transparent:!0,opacity:.06,blending:$a,depthWrite:!1,side:_n,fog:!1}),R=new en(A,E);R.position.y=1.1,i.add(R);const y=xA(),C=()=>e.reducedMotion||y.get(),P=gA(n.canvas),N=(K,Ue)=>{const Fe=Math.sqrt(K*K+Ue*Ue),Ke=Math.min(1,Fe/m);return-(S*Ke*Ke)},L=new Xt,W=34,$=new Mo(.085,.12,.55,6,1),F=new Or(.26,1),j=new ir({color:13039615,roughness:.78,metalness:0,emissive:new Ve(727860),emissiveIntensity:.35}),B=new ir({color:16737235,roughness:.58,metalness:.07,emissive:new Ve(3538974),emissiveIntensity:.55}),O=new pl($,j,W),X=new pl(F,B,W);d.add(O),d.add(X);const ee=22,ae=new Yh(.22,1.15,6,1),ge=new ir({color:6750193,roughness:.35,metalness:.32,emissive:new Ve(1467135),emissiveIntensity:.72}),$e=new pl(ae,ge,ee);d.add($e);const Je=16,Be=new Or(.62,0),J=new ir({color:793157,roughness:.95,metalness:.02}),me=new pl(Be,J,Je);d.add(me);const te=(K,Ue)=>(Math.sin(K*935.2+Ue*1.73)+1)*.5;for(let K=0;K<W;K+=1){const Ue=te(K+1,2)*Math.PI*2,Fe=8+te(K+4,5)*13.5,Ke=Math.cos(Ue)*Fe,st=Math.sin(Ue)*Fe,ft=N(Ke,st),St=.45+te(K+8,3)*.28,b=.9+te(K+6,6)*.6;L.position.set(Ke,ft+St*.5+.02,st),L.rotation.set(0,te(K+2,9)*Math.PI*2,0),L.scale.set(b,St/.55,b),L.updateMatrix(),O.setMatrixAt(K,L.matrix);const D=.85+te(K+7,7)*.7;L.position.set(Ke,ft+St+.12,st),L.rotation.set(te(K+9,1)*.35,te(K+5,8)*Math.PI*2,te(K+3,2)*.25),L.scale.set(D*1.15,D*(.72+te(K+10,4)*.55),D*1.1),L.updateMatrix(),X.setMatrixAt(K,L.matrix)}O.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0;for(let K=0;K<ee;K+=1){const Ue=te(K+33,4)*Math.PI*2,Fe=14.2+te(K+22,7)*9,Ke=Math.cos(Ue)*Fe,st=Math.sin(Ue)*Fe,ft=N(Ke,st),St=.7+te(K+11,8)*1.15;L.position.set(Ke,ft+.6*St+.02,st),L.rotation.set(te(K+2,5)*.45,te(K+8,2)*Math.PI*2,te(K+4,1)*.35),L.scale.set(.95*St,1.25*St,.95*St),L.updateMatrix(),$e.setMatrixAt(K,L.matrix)}$e.instanceMatrix.needsUpdate=!0;for(let K=0;K<Je;K+=1){const Ue=te(K+61,3)*Math.PI*2,Fe=10.5+te(K+16,2)*12.5,Ke=Math.cos(Ue)*Fe,st=Math.sin(Ue)*Fe,ft=N(Ke,st),St=.85+te(K+31,1)*1.25;L.position.set(Ke,ft+.24*St+.02,st),L.rotation.set(te(K+6,6)*Math.PI,te(K+13,7)*Math.PI*2,te(K+25,9)*Math.PI),L.scale.set(St,St*.85,St),L.updateMatrix(),me.setMatrixAt(K,L.matrix)}me.instanceMatrix.needsUpdate=!0;let Te=null,ke=null,Ie=null,vt=null;const We=Math.max(0,Math.min(140,e.particleCap));if(We>0){const K=new Cn,Ue=new Float32Array(We*3);ke=new Float32Array(We*3),Ie=new Float32Array(We),vt=new Float32Array(We);for(let Ke=0;Ke<We;Ke+=1){const st=te(Ke+90,1)*Math.PI*2,ft=7.5+te(Ke+12,6)*22.5,St=Math.cos(st)*ft,b=Math.sin(st)*ft,D=.5+te(Ke+3,3)*4.8,G=Ke*3;Ue[G]=St,Ue[G+1]=D,Ue[G+2]=b,ke[G]=St,ke[G+1]=D,ke[G+2]=b,Ie[Ke]=te(Ke+44,9)*Math.PI*2,vt[Ke]=.25+te(Ke+14,8)*.38}K.setAttribute("position",new qt(Ue,3));const Fe=new yv({color:10943487,size:.06,opacity:.55,transparent:!0,depthWrite:!1,blending:$a,sizeAttenuation:!0});Te=new QM(K,Fe),Te.position.y=.3,Te.visible=!C(),i.add(Te)}const ot=e.player.radius,_t=new Or(ot,2),He=new Xm({color:14350335,roughness:.24,metalness:.06,clearcoat:1,clearcoatRoughness:.28,emissive:new Ve(539903),emissiveIntensity:.25}),Ge=new en(_t,He);Ge.position.set(0,N(0,0)+ot,0),i.add(Ge);const bt=He.emissive.clone(),sn=He.emissiveIntensity;let U=e.player.maxHealth,Tt=0,qe=0,dt=0,pe=0,yt=0,T=!1;const M=new k,z=new k,Z=new k,ne=new k,oe=new k,fe=new k,q=new k;let Q=0,xe=.24;const we=Math.max(5.8,Math.hypot(e.cameraPosition.x,e.cameraPosition.z)||7.4),le=(K,Ue,Fe,Ke)=>{if(Fe<=0)return Ue;const st=1-Math.exp(-Fe*Ke);return K+(Ue-K)*st},ce=(K,Ue,Fe,Ke)=>{const st=Math.PI*2;let ft=(Ue-K)%st;if(ft>Math.PI&&(ft-=st),ft<-Math.PI&&(ft+=st),Fe<=0)return Ue;const St=1-Math.exp(-Fe*Ke);return K+ft*St},ze=new Kh(.14,18,14),Xe=new Xm({color:11466751,roughness:.08,metalness:0,transmission:.85,thickness:.25,clearcoat:1,clearcoatRoughness:.18,ior:1.1,transparent:!0,opacity:.72,emissive:new Ve(2847999),emissiveIntensity:.15}),lt=.14,I=18,ue=1.35,Y=[],Me=new Or(.74,2),he=new $h(.7,0),ie=new ir({color:16736986,roughness:.55,metalness:.05,emissive:new Ve(1705520),emissiveIntensity:.28}),Ce=new ir({color:6815729,roughness:.42,metalness:.18,emissive:new Ve(211541),emissiveIntensity:.34}),Pe=[],It=(K,Ue)=>{const Fe=(K==="chaser"?ie:Ce).clone(),Ke=K==="chaser"?Me:he,st=new en(Ke,Fe),ft=K==="chaser"?.78:.68,St=K==="chaser"?6:4,b=te(Ue+101,3)*Math.PI*2,D=Math.min(m-4,e.enemies.spawnRadius)*(.75+te(Ue+203,7)*.25),G=Math.cos(b)*D,V=Math.sin(b)*D;st.position.set(G,N(G,V)+ft,V),d.add(st),Pe.push({archetype:K,mesh:st,radius:ft,velocity:new k,hp:St,maxHp:St,maxSpeed:K==="chaser"?4.9:5.6,accel:K==="chaser"?16:20,orbitDistance:K==="chaser"?0:3.8,attackCooldown:0,flash:0,baseEmissive:Fe.emissive.clone(),baseEmissiveIntensity:Fe.emissiveIntensity,material:Fe})};for(let K=0;K<e.enemies.count;K+=1)It(K%2===0?"chaser":"skirter",K);const De=new k,Rn=new k,Nt=new k,Bn=new k,No=new k,Yi=new k,da=new k,bi=K=>{if(De.copy(K),De.y=0,De.lengthSq()<1e-6)return;De.normalize(),Rn.copy(Ge.position).addScaledVector(De,1.25),Rn.y=Ge.position.y+.15;const Ue=new en(ze,Xe);Ue.position.copy(Rn),i.add(Ue),Y.push({mesh:Ue,velocity:De.clone().multiplyScalar(I),age:0})},rs=()=>{for(const K of Y)K.mesh.removeFromParent();Y.length=0},fa=(K,Ue)=>{K.hp=K.maxHp,K.flash=0,K.velocity.set(0,0,0),K.attackCooldown=0;const Fe=(Ue+Math.random())*Math.PI*2,Ke=Math.min(m-4,e.enemies.spawnRadius)*(.7+Math.random()*.3),st=Math.cos(Fe)*Ke,ft=Math.sin(Fe)*Ke;K.mesh.position.set(st,N(st,ft)+K.radius,ft)},Po=(K,Ue)=>{K.hp-=1,K.flash=.16,De.copy(Ue),De.y=0,De.lengthSq()>1e-6&&De.normalize(),K.velocity.addScaledVector(De,4.6),K.hp<=0&&fa(K,Math.random())},ss=()=>{T=!1,yt=0,U=e.player.maxHealth,Tt=0,qe=0,dt=0,pe=0,Ge.visible=!0,Ge.position.set(0,N(0,0)+ot,0),M.set(0,0,0),rs();for(let K=0;K<Pe.length;K+=1)fa(Pe[K],K/Math.max(1,Pe.length))},Lo=(K,Ue)=>{if(!T&&!(Tt>0)&&(U=Math.max(0,U-K),Tt=e.player.invulnAfterHit,qe=.18,dt=1,C()||(pe=Math.min(1,pe+1)),Nt.subVectors(Ge.position,Ue),Nt.y=0,Nt.lengthSq()>1e-6&&(Nt.normalize(),M.addScaledVector(Nt,e.player.knockback)),U<=0)){T=!0,Ge.visible=!1,M.set(0,0,0),yt=e.respawnDelay,rs();for(const Fe of Pe)Fe.velocity.set(0,0,0),Fe.attackCooldown=0}};return{scene:i,camera:r,shoot:bi,update:(K,Ue)=>{const Fe=C();Fe&&(pe=0),T&&(yt=Math.max(0,yt-K),yt===0&&ss()),Tt=Math.max(0,Tt-K),qe=Math.max(0,qe-K),dt=Math.max(0,dt-K*2.25),pe=Math.max(0,pe-K*3.4);const{dx:Ke,dy:st}=P.consumeLookDelta();if(Ke!==0||st!==0){const Le=Fe?.002:.0016;Q-=Ke*Le,xe-=st*Le,xe=Math.max(-.75,Math.min(.85,xe))}const ft=P.getState(),St=T?0:ft.moveX,b=T?0:ft.moveY,D=Math.min(1,Math.hypot(St,b));Z.set(0,0,0),D>0&&(ne.set(-Math.sin(Q),0,-Math.cos(Q)),oe.set(ne.z,0,-ne.x),Z.addScaledVector(oe,St/D).addScaledVector(ne,b/D).normalize()),z.copy(Z).multiplyScalar(6.1*D);const V=Fe?180:D>0?18:10;M.set(le(M.x,z.x,V,K),0,le(M.z,z.z,V,K)),Ge.position.x+=M.x*K,Ge.position.z+=M.z*K;const H=m-1.5,ve=Math.hypot(Ge.position.x,Ge.position.z);if(ve>H){const Le=Ge.position.x/ve,de=Ge.position.z/ve;Ge.position.x=Le*H,Ge.position.z=de*H;const se=M.x*Le+M.z*de;se>0&&(M.x-=se*Le,M.z-=se*de)}Ge.position.y=N(Ge.position.x,Ge.position.z)+ot;const Ee=-Math.sin(Q),_e=-Math.cos(Q),Ae=D>.05?Math.atan2(Z.x,Z.z):Math.atan2(Ee,_e);if(Ge.rotation.y=ce(Ge.rotation.y,Ae,Fe?180:18,K),Ge.rotation.x=Fe?0:Math.sin(Ue*.65)*.08,qe>0){const Le=Math.min(1,qe/.18);He.emissive.set(16777215),He.emissiveIntensity=sn+Le*2.15}else He.emissive.copy(bt),He.emissiveIntensity=sn;Fe||(c.position.x=7.5+Math.sin(Ue*.35)*1.6,c.position.z=6.5+Math.cos(Ue*.35)*1.6,h.position.x=-9.5+Math.sin(Ue*.25)*1,h.position.z=-7.5+Math.cos(Ue*.25)*1),fe.set(Ge.position.x,Ge.position.y+.35,Ge.position.z);const Re=Math.cos(xe);q.set(Math.sin(Q)*Re,Math.sin(xe),Math.cos(Q)*Re).multiplyScalar(we).add(fe);const je=Fe?240:14;if(r.position.set(le(r.position.x,q.x,je,K),le(r.position.y,q.y,je,K),le(r.position.z,q.z,je,K)),!Fe&&pe>0){const Le=pe*.18;r.position.x+=(Math.random()*2-1)*Le,r.position.y+=(Math.random()*2-1)*Le*.6,r.position.z+=(Math.random()*2-1)*Le}r.lookAt(fe);const Ne=2*Math.tan(CM.degToRad(r.fov*.5))*.35,pt=Ne*r.aspect;if(o.scale.set(pt*2.2,Ne*2.2,1),a.opacity=Math.min(.68,Math.pow(dt,1.35)*.6+(T?.38:0)),Te&&(Te.visible=!Fe),!Fe&&Te&&ke&&Ie&&vt){const Le=Te.geometry.getAttribute("position");for(let de=0;de<We;de+=1){const se=de*3;Le.array[se]=ke[se]+Math.sin(Ue*.18+Ie[de])*.12,Le.array[se+1]=ke[se+1]+Math.sin(Ue*vt[de]+Ie[de])*.22,Le.array[se+2]=ke[se+2]+Math.cos(Ue*.16+Ie[de])*.12}Le.needsUpdate=!0}for(let Le=Y.length-1;Le>=0;Le-=1){const de=Y[Le];if(de.age+=K,de.mesh.position.addScaledVector(de.velocity,K),de.age>=ue){de.mesh.removeFromParent(),Y.splice(Le,1);continue}let se=!1;for(let Bt=0;Bt<Pe.length;Bt+=1){const et=Pe[Bt];Nt.subVectors(de.mesh.position,et.mesh.position);const Gt=lt+et.radius;if(Nt.lengthSq()<=Gt*Gt){Po(et,de.velocity),se=!0;break}}se&&(de.mesh.removeFromParent(),Y.splice(Le,1))}const wt=e.enemies.separation,Pt=wt*wt;for(let Le=0;Le<Pe.length;Le+=1){const de=Pe[Le];de.attackCooldown=Math.max(0,de.attackCooldown-K),Nt.subVectors(Ge.position,de.mesh.position),Nt.y=0;const se=Math.sqrt(Nt.lengthSq()),Bt=!T&&se<=e.enemies.detectRange;Bt&&se>1e-6?(De.copy(Nt).multiplyScalar(1/se),de.archetype==="skirter"&&(No.set(-De.z,0,De.x),De.copy(No),se<de.orbitDistance?De.addScaledVector(Nt,-1/Math.max(1e-6,se)):se>de.orbitDistance&&De.addScaledVector(Nt,.55/Math.max(1e-6,se)),De.lengthSq()>1e-6&&De.normalize())):(De.set(-de.mesh.position.z,0,de.mesh.position.x),De.lengthSq()>1e-6&&De.normalize()),Yi.set(0,0,0);for(let tt=0;tt<Pe.length;tt+=1){if(tt===Le)continue;const Mt=Pe[tt];Bn.subVectors(de.mesh.position,Mt.mesh.position),Bn.y=0;const an=Bn.lengthSq();if(an<=1e-6||an>=Pt)continue;const mt=Math.sqrt(an);Yi.addScaledVector(Bn,(wt-mt)/(mt*wt))}Yi.lengthSq()>1e-6&&(Yi.normalize(),De.addScaledVector(Yi,.85),De.lengthSq()>1e-6&&De.normalize());const et=Bt?de.maxSpeed:de.maxSpeed*.42;da.copy(De).multiplyScalar(et),Bn.subVectors(da,de.velocity);const Gt=de.accel*K,zn=Gt*Gt;Bn.lengthSq()>zn&&Bn.setLength(Gt),de.velocity.add(Bn),de.velocity.multiplyScalar(Math.exp(-K*(Fe?22:2.35))),de.mesh.position.addScaledVector(de.velocity,K);const Vn=m-de.radius-1.4,di=Math.hypot(de.mesh.position.x,de.mesh.position.z);if(di>Vn){const tt=de.mesh.position.x/di,Mt=de.mesh.position.z/di;de.mesh.position.x=tt*Vn,de.mesh.position.z=Mt*Vn;const an=de.velocity.x*tt+de.velocity.z*Mt;an>0&&(de.velocity.x-=an*tt,de.velocity.z-=an*Mt)}if(de.mesh.position.y=N(de.mesh.position.x,de.mesh.position.z)+de.radius,Bt&&de.attackCooldown<=0&&se<=e.enemies.attackRange+de.radius+ot&&(de.attackCooldown=e.enemies.attackCooldown*(de.archetype==="skirter"?1.15:1),Lo(e.enemies.damage,de.mesh.position)),de.flash>0){de.flash=Math.max(0,de.flash-K);const tt=Math.min(1,de.flash/.16);de.material.emissive.set(16777215),de.material.emissiveIntensity=de.baseEmissiveIntensity+tt*2.2}else de.material.emissive.copy(de.baseEmissive),de.material.emissiveIntensity=de.baseEmissiveIntensity}},getHudState:()=>({health:U,maxHealth:e.player.maxHealth,dead:T,pointerLocked:P.getState().pointerLocked}),dispose:()=>{var K,Ue;P.dispose(),y.dispose();for(const Fe of Y)Fe.mesh.removeFromParent();Y.length=0;for(const Fe of Pe)Fe.mesh.removeFromParent(),Fe.material.dispose();Pe.length=0,f.dispose(),A.dispose(),$.dispose(),F.dispose(),ae.dispose(),Be.dispose(),_t.dispose(),ze.dispose(),Me.dispose(),he.dispose(),_.dispose(),E.dispose(),j.dispose(),B.dispose(),ge.dispose(),J.dispose(),(K=Te==null?void 0:Te.geometry)==null||K.dispose(),(Ue=Te==null?void 0:Te.material)==null||Ue.dispose(),s.dispose(),a.dispose(),He.dispose(),Xe.dispose(),ie.dispose(),Ce.dispose()}}},Iv={health:0,maxHealth:0,dead:!0,pointerLocked:!1},Yu={dispose:()=>{},getHudState:()=>Iv,subscribeHud:()=>()=>{}},_A=async(t,e)=>{if(typeof window>"u"||typeof document>"u"||!t)return Yu;const n=pA(e);let i=null,r=null,s=null,a=null,o=0,l=!1;const c=new Set;let h=0,u=null,d=null,m=null,x=null;const S=()=>(s==null?void 0:s.getHudState())??Iv,v=g=>(c.add(g),g(S()),()=>c.delete(g)),f=()=>{var g,_,w;if(!l){l=!0,a==null||a.disconnect(),window.cancelAnimationFrame(o),r&&u&&r.domElement.removeEventListener("pointerdown",u),d&&window.removeEventListener("pointerup",d),r&&m&&r.domElement.removeEventListener("contextmenu",m),x&&window.removeEventListener("resize",x),c.clear(),s==null||s.dispose(),(g=i==null?void 0:i.microTexture)==null||g.dispose(),(w=(_=r==null?void 0:r.renderLists)==null?void 0:_.dispose)==null||w.call(_),r==null||r.dispose();try{r==null||r.forceContextLoss()}catch{}if(typeof document<"u"&&document.pointerLockElement)try{document.exitPointerLock()}catch{}r==null||r.domElement.remove()}};try{i=await mA();const g=new hA({antialias:!0});r=g,g.outputColorSpace=Mn,g.setClearColor(n.clearColor,1),g.domElement.style.width="100%",g.domElement.style.height="100%",g.domElement.style.display="block",t.appendChild(g.domElement);const _=vA(i,n,{canvas:g.domElement});s=_;const w=new x1,A=1/60,E=.1,R=4;let y=0,C=0,P=!1,N=!1,L=0;const W=.12,$=new k;u=B=>{B.button===0&&(P=!0,N=!0)},d=B=>{B.button===0&&(P=!1)},m=B=>{B.preventDefault()};const F=()=>{if(l)return;const B=Math.max(1,t.clientWidth),O=Math.max(1,t.clientHeight),X=Math.min(window.devicePixelRatio||1,n.dprCap,2);g.setPixelRatio(X),g.setSize(B,O,!1),_.camera.aspect=B/O,_.camera.updateProjectionMatrix()};typeof ResizeObserver<"u"?(a=new ResizeObserver(()=>F()),a.observe(t)):(x=()=>F(),window.addEventListener("resize",x)),F(),g.domElement.addEventListener("pointerdown",u),window.addEventListener("pointerup",d),g.domElement.addEventListener("contextmenu",m);const j=()=>{if(l)return;const B=Math.min(w.getDelta(),E);y+=B;let O=0;for(;y>=A&&O<R;)C+=A,_.update(A,C),(N||P&&C>=L)&&(_.camera.getWorldDirection($),_.shoot($),L=C+W,N=!1),y-=A,O+=1;O===R&&(y=0),g.render(_.scene,_.camera);const X=w.elapsedTime;if(c.size>0&&X>=h){const ee=_.getHudState();for(const ae of c)ae(ee);h=X+.12}o=window.requestAnimationFrame(j)};o=window.requestAnimationFrame(j)}catch{return f(),Yu}return{dispose:f,getHudState:S,subscribeHud:v}},bg={health:0,maxHealth:1,dead:!0,pointerLocked:!1};function yA({open:t,onClose:e}){const n=ye.useRef(null),i=ye.useRef(null),r=ye.useRef(!1),[s,a]=ye.useState(bg),o=ye.useMemo(()=>typeof document>"u"?null:document.body,[]);Xx(t),ye.useEffect(()=>{t&&(r.current=!1)},[t]);const l=ye.useCallback(()=>{var c;if(!r.current){if(r.current=!0,(c=i.current)==null||c.dispose(),i.current=null,typeof document<"u"&&document.pointerLockElement)try{document.exitPointerLock()}catch{}e()}},[e]);return ye.useEffect(()=>{if(!t)return;const c=h=>{h.key==="Escape"&&l()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t,l]),ye.useEffect(()=>{if(!t||!n.current)return;a(bg);let c=!0,h=null,u=null;return _A(n.current).then(d=>{if(!c){d.dispose();return}i.current=d,h=d,a(d.getHudState()),u=d.subscribeHud(a)}).catch(()=>{}),()=>{c=!1,i.current===h&&(i.current=null),u==null||u(),h==null||h.dispose()}},[t]),!t||!o?null:Uc.createPortal(p.jsxs("div",{className:"fixed inset-0 z-[90]",children:[p.jsx("div",{className:"absolute inset-0 bg-ink-950",children:p.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(111,255,0,0.16),transparent_52%),radial-gradient(circle_at_72%_22%,rgba(255,69,195,0.14),transparent_58%),linear-gradient(180deg,rgba(1,8,40,0.6),rgba(1,8,40,0.96))]"})}),p.jsx("div",{ref:n,className:"absolute inset-0"}),p.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10",children:[p.jsxs("div",{className:"pointer-events-auto absolute left-4 top-4 w-[248px] rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl sm:left-6 sm:top-6",children:[p.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[p.jsx("div",{className:"font-grotesk text-[11px] uppercase tracking-[0.18em] text-cream/70",children:"Health"}),p.jsxs("div",{className:"font-mono text-[11px] text-cream/65",children:[Math.max(0,Math.round(s.health/Math.max(1,s.maxHealth)*100)),"%"]})]}),p.jsx("div",{className:"mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10",children:p.jsx("div",{className:"h-full rounded-full bg-[linear-gradient(90deg,rgba(111,255,0,0.95),rgba(128,246,255,0.9),rgba(255,69,195,0.9))] transition-[width,filter,opacity] duration-200",style:{width:`${Math.max(0,Math.min(1,s.health/Math.max(1,s.maxHealth)))*100}%`,opacity:s.dead?.45:1,filter:s.dead?"saturate(0.65)":"none"}})}),p.jsx("div",{className:"mt-2 font-mono text-[11px] text-cream/55",children:s.dead?"Respawning…":s.pointerLocked?"Mouse captured":"Click to capture mouse"})]}),p.jsxs("button",{type:"button",onClick:l,className:"liquid-glass glass-float pointer-events-auto absolute right-4 top-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-grotesk text-[12px] uppercase tracking-[0.16em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 sm:right-6 sm:top-6",children:[p.jsx("span",{className:"text-base leading-none",children:"×"}),p.jsx("span",{children:"Exit"})]}),p.jsxs("div",{className:"pointer-events-auto absolute bottom-4 left-4 max-w-[320px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-[12px] leading-relaxed text-cream/70 backdrop-blur-xl sm:bottom-6 sm:left-6",children:[p.jsx("div",{className:"font-grotesk text-[11px] uppercase tracking-[0.18em] text-cream/70",children:"Controls"}),p.jsxs("div",{className:"mt-2 grid gap-1",children:[p.jsxs("div",{className:"flex gap-3",children:[p.jsx("span",{className:"w-20 shrink-0 text-cream/50",children:"Move"}),p.jsx("span",{children:"WASD / Arrows"})]}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("span",{className:"w-20 shrink-0 text-cream/50",children:"Look"}),p.jsx("span",{children:"Mouse"})]}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("span",{className:"w-20 shrink-0 text-cream/50",children:"Shoot"}),p.jsx("span",{children:"Left click"})]}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("span",{className:"w-20 shrink-0 text-cream/50",children:"Exit"}),p.jsx("span",{children:"Esc"})]})]})]})]}),p.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-[1] bg-cover bg-center opacity-40 mix-blend-lighten",style:{backgroundImage:"url(/texture.png)"}})]}),o)}const Tg=["hostile","neutral","passive"],kf={hostile:{label:"Hostile",glyph:"⟡",chip:"border-rose-400/25 bg-rose-400/10 text-rose-100",glow:"from-rose-400/18 via-white/[0.02] to-black/55",ring:"from-rose-300/35 via-white/15 to-white/5"},neutral:{label:"Neutral",glyph:"◈",chip:"border-amber-300/25 bg-amber-300/10 text-amber-50",glow:"from-amber-300/16 via-white/[0.02] to-black/55",ring:"from-amber-200/30 via-white/15 to-white/5"},passive:{label:"Passive",glyph:"✶",chip:"border-emerald-300/25 bg-emerald-300/10 text-emerald-50",glow:"from-emerald-300/16 via-white/[0.02] to-black/55",ring:"from-emerald-200/30 via-white/15 to-white/5"}},Dv=t=>t.split(/[-_]/g).filter(Boolean).map(e=>e.slice(0,1).toUpperCase()+e.slice(1)).join(" "),Uv=({rating:t})=>{const e=Number.isFinite(t)?Math.max(0,Math.min(5,Math.round(t))):0;return p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"flex gap-1",children:Array.from({length:5}).map((n,i)=>p.jsx("span",{className:["h-1.5 w-5 rounded-full",i<e?"bg-white/75":"bg-white/12"].join(" "),"aria-hidden":"true"},i))}),p.jsxs("div",{className:"text-xs font-medium text-white/55",children:["Danger ",e,"/5"]})]})},Ag=({children:t})=>p.jsx("span",{className:"inline-flex items-center rounded-full border border-cream/10 bg-white/[0.04] px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70",children:t}),SA=({creature:t,planets:e})=>{const n=ye.useMemo(()=>new Map(e.map(r=>[r.id,r.name])),[e]),i=kf[t.role];return p.jsxs("div",{className:"space-y-5",children:[p.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl p-6",children:[p.jsx("div",{className:["absolute -inset-14 bg-gradient-to-b blur-2xl",i.glow].join(" ")}),p.jsxs("div",{className:"relative",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",i.chip].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:i.glyph}),p.jsx("span",{children:i.label})]}),p.jsx("div",{className:"mt-5 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Behavior summary"}),p.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/75",children:t.behavior})]}),p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/35 px-5 py-4",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Threat Scan"}),p.jsx("div",{className:"mt-2",children:p.jsx(Uv,{rating:t.dangerRating})})]})]}),p.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-2",children:[p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Habitat"}),p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.habitatPlanetIds.map(r=>p.jsx(Ag,{children:n.get(r)??Dv(r)},r))})]}),p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Tags"}),p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.tags.map(r=>p.jsx(Ag,{children:r},r))})]})]})]})]}),p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Field Note"}),p.jsx("div",{className:"mt-4 rounded-3xl border border-cream/10 bg-black/25 p-6 font-mono text-sm leading-relaxed text-cream/75",children:t.fieldNote})]})]})};function MA({creatures:t,planets:e,onOpenCreature:n}){const[i,r]=ye.useState(null),[s,a]=ye.useState("all"),o=ye.useMemo(()=>new Map(e.map(h=>[h.id,h.name])),[e]),l=ye.useMemo(()=>{const h=u=>Tg.indexOf(u.role)*100+(5-u.dangerRating)*10+u.name.length/100;return[...t].sort((u,d)=>h(u)-h(d))},[t]),c=ye.useMemo(()=>s==="all"?l:l.filter(h=>h.role===s),[s,l]);return t.length===0?p.jsx("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:"Creature data unavailable."}):p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[p.jsx("div",{className:"font-mono text-sm text-cream/65",children:"Tap a creature card to expand the field panel. Open the dossier for a full readout."}),p.jsxs("div",{className:"flex flex-wrap gap-2",children:[p.jsx("button",{type:"button",onClick:()=>a("all"),className:["liquid-glass glass-float rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",s==="all"?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:"All"}),Tg.map(h=>{const u=kf[h],d=s===h;return p.jsxs("button",{type:"button",onClick:()=>a(h),className:["liquid-glass glass-float inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",d?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:u.glyph}),p.jsx("span",{children:u.label})]},h)})]})]}),p.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:c.map(h=>{const u=i===h.id,d=kf[h.role],x=h.habitatPlanetIds.map(S=>o.get(S)??Dv(S))[0]??"Unknown habitat";return p.jsxs("div",{onClick:()=>r(S=>S===h.id?null:h.id),onKeyDown:S=>{S.key!=="Enter"&&S.key!==" "||(S.preventDefault(),r(v=>v===h.id?null:h.id))},role:"button",tabIndex:0,"aria-expanded":u,className:["group liquid-glass glass-float relative cursor-pointer overflow-hidden rounded-2xl p-5 text-left","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"].join(" "),children:[p.jsx("div",{className:["pointer-events-none absolute -inset-16 bg-gradient-to-b blur-2xl",d.glow,"opacity-0 motion-safe:transition-opacity motion-safe:duration-300",u?"opacity-100":"group-hover:opacity-90"].join(" ")}),p.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0",d.ring,"motion-safe:transition-opacity motion-safe:duration-300",u?"opacity-100":"group-hover:opacity-70"].join(" ")}),p.jsxs("div",{className:"relative",children:[p.jsxs("div",{className:"flex items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"truncate font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:h.name}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:x})]}),p.jsxs("div",{className:["liquid-glass inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",d.chip].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:d.glyph}),p.jsx("span",{children:d.label})]})]}),p.jsx("div",{className:"mt-4",children:p.jsx(Uv,{rating:h.dangerRating})}),h.tags.length>0?p.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:h.tags.slice(0,3).map(S=>p.jsx("span",{className:"inline-flex items-center rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-xs font-medium text-white/65",children:S},S))}):null,p.jsx("div",{className:["mt-5 grid overflow-hidden rounded-2xl border border-white/10 bg-black/25","motion-safe:transition-[grid-template-rows] motion-safe:duration-300",u?"grid-rows-[1fr]":"grid-rows-[0fr]"].join(" "),children:p.jsx("div",{className:"min-h-0 overflow-hidden",children:p.jsxs("div",{className:"p-4",children:[p.jsx("div",{className:"text-xs font-semibold tracking-wide text-white/55",children:"Behavior summary"}),p.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/72",children:h.behavior}),p.jsx("div",{className:"mt-4 text-xs font-semibold tracking-wide text-white/55",children:"Field note"}),p.jsx("div",{className:"mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm leading-relaxed text-white/75",children:h.fieldNote}),p.jsxs("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3",children:[p.jsx("div",{className:"text-xs font-medium text-white/45",children:u?"Tap card to collapse":""}),p.jsx("button",{type:"button",onClick:S=>{S.stopPropagation(),n(h)},className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-5 py-2.5 font-grotesk text-[12px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Open Dossier"})]})]})})}),p.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 text-xs",children:[p.jsx("div",{className:"text-white/45",children:u?"Expanded":"Tap to expand"}),p.jsx("div",{className:"text-white/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-white/75",children:"→"})]})]})]},h.id)})})]})}const Of="tinyTitan.communityVote.selection.v1",Fv="tinyTitan.communityVote.tallies.v1",wA=t=>typeof t!="number"||!Number.isFinite(t)?0:Math.max(0,Math.floor(t)),EA=t=>{if(!t)return null;try{return JSON.parse(t)}catch{return null}},xc=(t,e)=>{const n=Object.fromEntries(t.map(r=>[r,0]));if(!e||typeof e!="object")return n;const i=e;for(const r of t)n[r]=wA(i[r]);return n},Cg=(t,e)=>xc(e,EA(t.getItem(Fv))),Rg=(t,e)=>{const n=t.getItem(Of);return n&&e.includes(n)?n:null},bA=(t,e)=>{try{t.setItem(Fv,JSON.stringify(e))}catch{}},TA=(t,e)=>{try{e===null?t.removeItem(Of):t.setItem(Of,e)}catch{}},AA=({planetIds:t,tallies:e,selection:n,planetId:i})=>{if(!t.includes(i))return{tallies:xc(t,e),selection:n};const r=xc(t,e);return n===i?{tallies:r,selection:n}:(n&&r[n]>0&&(r[n]-=1),r[i]=(r[i]??0)+1,{tallies:r,selection:i})},Ng={"crystal-planet":{glow:"from-cyan-400/26 via-sky-300/10 to-black/55",ring:"from-cyan-300/45 via-white/12 to-white/5",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100",bar:"from-cyan-300/60 via-sky-200/30 to-white/10",badge:"bg-cyan-300/15 text-cyan-100 ring-cyan-200/25"},"mushroom-planet":{glow:"from-fuchsia-500/22 via-violet-300/10 to-black/55",ring:"from-fuchsia-300/40 via-white/12 to-white/5",chip:"border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100",bar:"from-fuchsia-300/55 via-violet-200/25 to-white/10",badge:"bg-fuchsia-300/15 text-fuchsia-100 ring-fuchsia-200/25"},"ember-planet":{glow:"from-orange-400/22 via-amber-200/10 to-black/55",ring:"from-orange-300/40 via-white/12 to-white/5",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100",bar:"from-orange-300/60 via-amber-200/30 to-white/10",badge:"bg-orange-300/15 text-orange-100 ring-orange-200/25"}},Pg={glow:"from-white/14 via-white/[0.02] to-black/55",ring:"from-white/30 via-white/12 to-white/5",chip:"border-white/12 bg-white/[0.04] text-white/75",bar:"from-white/30 via-white/10 to-white/5",badge:"bg-white/10 text-white/75 ring-white/15"},$u=()=>{if(typeof window>"u")return null;try{return window.localStorage}catch{return null}};function CA({planets:t}){var d;const e=ye.useMemo(()=>t.map(m=>m.id),[t]),[n,i]=ye.useState(null),[r,s]=ye.useState(()=>xc(e,null)),[a,o]=ye.useState("ready");ye.useEffect(()=>{try{const m=$u();if(!m){o("unavailable");return}i(Rg(m,e)),s(Cg(m,e)),o("ready")}catch{o("unavailable")}},[e]),ye.useEffect(()=>{const m=$u();if(!m||typeof window>"u")return;const x=S=>{S.storageArea===window.localStorage&&(s(Cg(m,e)),i(Rg(m,e)))};return window.addEventListener("storage",x),()=>window.removeEventListener("storage",x)},[e]);const l=ye.useMemo(()=>Object.values(r).reduce((m,x)=>m+x,0),[r]),c=ye.useMemo(()=>e.length===0?null:[...e].sort((x,S)=>(r[S]??0)-(r[x]??0))[0]??null,[e,r]),h=m=>{if(!e.includes(m)||a!=="ready")return;const x=$u();if(!x){o("unavailable");return}s(S=>{const v=AA({planetIds:e,tallies:S,selection:n,planetId:m});return bA(x,v.tallies),TA(x,v.selection),i(v.selection),v.tallies})};if(t.length===0)return p.jsx("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:"Planet data unavailable."});const u=n?t.find(m=>m.id===n)??null:null;return p.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start",children:[p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[p.jsx("div",{className:"max-w-xl font-mono text-sm text-cream/70",children:"Cast a single vote for the next deep-dive reveal. Tallies update instantly and persist on this device."}),p.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",a==="ready"?"border-emerald-300/20 bg-emerald-300/10 text-emerald-100":"border-amber-300/25 bg-amber-300/10 text-amber-100"].join(" "),children:[p.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-current opacity-80"}),p.jsx("span",{children:a==="ready"?"Local persistence on":"Local persistence unavailable"})]})]}),p.jsx("div",{className:"grid gap-4",children:t.map(m=>{const x=Ng[m.id]??Pg,S=n===m.id,v=r[m.id]??0,f=l>0?Math.round(v/l*100):0;return p.jsxs("button",{type:"button",onClick:()=>h(m.id),"aria-pressed":S,className:["group liquid-glass glass-float relative overflow-hidden rounded-3xl p-6 text-left","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",S?"ring-1 ring-neon/30":""].join(" "),children:[p.jsx("div",{className:["pointer-events-none absolute -inset-16 bg-gradient-to-b blur-2xl",x.glow,"opacity-60 motion-safe:transition-opacity motion-safe:duration-300",S?"opacity-95":"group-hover:opacity-95"].join(" ")}),p.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b opacity-0",x.ring,"motion-safe:transition-opacity motion-safe:duration-300",S?"opacity-100":"group-hover:opacity-100"].join(" ")}),p.jsxs("div",{className:"relative grid gap-4",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[p.jsx("div",{className:["liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",x.chip].join(" "),children:m.environment.biome}),S?p.jsx("div",{className:["liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] ring-1",x.badge].join(" "),children:"Your vote"}):null,c===m.id&&l>0?p.jsx("div",{className:"liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/75",children:"Leading"}):null]}),p.jsx("div",{className:"mt-4 font-grotesk text-xl uppercase tracking-[0.08em] text-cream sm:text-2xl",children:m.name}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:m.tagline})]}),p.jsxs("div",{className:"shrink-0 text-right",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Votes"}),p.jsx("div",{className:"mt-2 font-grotesk text-lg uppercase tracking-[0.08em] text-cream",children:v})]})]}),p.jsxs("div",{className:"grid gap-2",children:[p.jsxs("div",{className:"flex items-center justify-between text-xs text-white/55",children:[p.jsx("span",{children:"Share"}),p.jsxs("span",{className:"font-semibold text-white/70",children:[f,"%"]})]}),p.jsx("div",{className:"h-2 overflow-hidden rounded-full border border-white/10 bg-black/35",children:p.jsx("div",{className:["h-full rounded-full bg-gradient-to-r motion-safe:transition-[width] motion-safe:duration-500",x.bar].join(" "),style:{width:`${f}%`}})})]}),p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 text-xs text-white/55",children:[p.jsx("div",{children:S?"Tap another planet to change your vote.":n?"Tap to switch your vote.":"Tap to vote."}),p.jsx("div",{className:"text-cream/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80",children:"→"})]})]})]},m.id)})})]}),p.jsx("div",{className:"space-y-4",children:p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Live Results"}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65","aria-live":"polite",children:l===0?"No votes yet on this device.":p.jsxs(p.Fragment,{children:[l," total ·"," ",p.jsx("span",{className:"font-semibold text-white/80",children:c?((d=t.find(m=>m.id===c))==null?void 0:d.name)??"—":"—"})," ","is leading"]})})]}),p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/35 px-5 py-4",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Your selection"}),p.jsx("div",{className:"mt-2 font-grotesk text-[14px] uppercase tracking-[0.08em] text-cream",children:u?u.name:"Not voted"})]})]}),p.jsx("div",{className:"mt-6 space-y-3",children:t.map(m=>{const x=Ng[m.id]??Pg,S=r[m.id]??0,v=l>0?Math.round(S/l*100):0;return p.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/25 p-4",children:[p.jsxs("div",{className:"flex items-center justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"truncate text-sm font-semibold text-white",children:m.name}),p.jsx("div",{className:"mt-1 text-xs text-white/55",children:m.environment.biome})]}),p.jsxs("div",{className:"shrink-0 text-right",children:[p.jsxs("div",{className:"text-xs font-semibold text-white/60",children:[v,"%"]}),p.jsxs("div",{className:"mt-0.5 text-xs text-white/55",children:[S," votes"]})]})]}),p.jsx("div",{className:"mt-3 h-2 overflow-hidden rounded-full border border-white/10 bg-black/35",children:p.jsx("div",{className:["h-full rounded-full bg-gradient-to-r motion-safe:transition-[width] motion-safe:duration-500",x.bar].join(" "),style:{width:`${v}%`}})})]},m.id)})}),p.jsx("div",{className:"mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-white/60",children:"Results are stored locally. To simulate a larger community feed, open the site in two tabs and vote in both."})]})})]})}const RA=$x,NA=new Set(["a","an","and","are","as","at","be","but","by","for","from","has","have","how","i","in","is","it","its","of","on","or","that","the","their","then","they","this","to","was","what","when","where","why","with","you","your"]),Ba=t=>t.toLowerCase().replace(/['’]/g,"").replace(/[^a-z0-9]+/g," ").trim(),PA=t=>{const e=Ba(t).split(" ").filter(Boolean),n=[];for(const i of e)i.length<2||NA.has(i)||n.push(i);return Array.from(new Set(n))},Ml=(t,e)=>{if(e.length===0)return 0;let n=0;for(const i of e)t.includes(i)&&(n+=1);return n},LA=(t,e)=>{const n=Ba(t.title),i=Ba(t.snippet),r=Ba(t.body),s=Ba(t.tags.join(" ")),a=Ml(n,e)*6,o=Ml(s,e)*4,l=Ml(i,e)*3,c=Ml(r,e)*1;return a+o+l+c},IA=(t,e=4)=>{const n=PA(t),i=RA.map(a=>({entry:a,score:LA(a,n)})).sort((a,o)=>o.score-a.score),r=i.filter(a=>a.score>0).slice(0,e);return(r.length>0?r:i.slice(0,Math.min(e,i.length))).map(({entry:a})=>({id:a.id,title:a.title,category:a.category,snippet:a.snippet}))},DA=(t,e)=>e.length===0?`I couldn’t find a matching lore entry for “${t}”. Try asking about a specific planet (Crystal, Mushroom, Ember), a creature (Orb Moth, Titan Crab), or a tool (Bubble Blaster, Disco Ray).`:`Here’s what the field dossiers say:

${e.slice(0,4).map(i=>`- ${i.title}: ${i.snippet}`).join(`
`)}

If you want, ask a follow-up like “how does this affect traversal?” and I’ll narrow it down.`;(()=>{const t=globalThis.process,e=t==null?void 0:t.env;return!e||typeof e!="object"?{}:e})();const Ku=()=>{const t=globalThis.crypto;return t&&typeof t.randomUUID=="function"?t.randomUUID():`${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`},UA=t=>t==="openai"?{label:"OpenAI",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100",dot:"bg-cyan-200/80 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]"}:{label:"Local Lore",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100",dot:"bg-orange-200/80 shadow-[0_0_0_3px_rgba(251,146,60,0.10)]"};function FA(){const[t,e]=ye.useState(()=>[{id:Ku(),role:"assistant",content:"Ask me anything about Tiny Titan—planets, mounts, gadgets, storms, or mysteries. I’ll cite the lore entries I’m pulling from.",sources:[],mode:"fallback"}]),[n,i]=ye.useState(""),[r,s]=ye.useState(!1),[a,o]=ye.useState(null),l=ye.useRef(null),c=ye.useMemo(()=>{for(let x=t.length-1;x>=0;x-=1){const S=t[x];if(S.role==="assistant")return S}return null},[t]),h=ye.useMemo(()=>["What is the Prism Well?","How do Orb Moths affect Crystal Planet storms?","What makes the Bubble Blaster useful for traversal?","Why do Titan Crabs guard the vents?"],[]),u=()=>{const x=l.current;if(!x)return;const S=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;x.scrollTo({top:x.scrollHeight,behavior:S?"auto":"smooth"})},d=async x=>{s(!0),o(null);const S={id:Ku(),role:"user",content:x};e(f=>[...f,S]);const v=Ku();e(f=>[...f,{id:v,role:"assistant",content:"Reading the star charts…",sources:[]}]),queueMicrotask(u);try{const f=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:x})}),g=f.ok?await f.json():null;if(!g)throw new Error(`Request failed (${f.status})`);e(_=>_.map(w=>w.id===v?{...w,content:g.answer,sources:g.sources??[],mode:g.mode??"fallback"}:w)),queueMicrotask(u)}catch{const g=IA(x),_=DA(x,g);e(w=>w.map(A=>A.id===v?{...A,content:_,sources:g,mode:"fallback"}:A))}finally{s(!1)}},m=async x=>{if(x.preventDefault(),r)return;const S=n.trim();S&&(i(""),await d(S))};return p.jsxs("div",{className:"grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-start",children:[p.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl",children:[p.jsx("div",{className:"pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(232,121,249,0.14),transparent_60%),radial-gradient(circle_at_50%_110%,rgba(251,146,60,0.10),transparent_60%)] opacity-80 blur-2xl"}),p.jsxs("div",{className:"relative flex flex-col",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4 border-b border-cream/10 px-5 py-5 sm:px-6",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85",children:"Galactic Guide Console"}),p.jsx("div",{className:"mt-2 font-mono text-xs text-cream/55",children:"Answers are grounded in lore entries and always include sources."})]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c!=null&&c.mode?(()=>{const x=UA(c.mode);return p.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",x.chip].join(" "),children:[p.jsx("span",{className:["h-2 w-2 rounded-full",x.dot].join(" ")}),p.jsx("span",{children:x.label})]})})():p.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/65",children:[p.jsx("span",{className:"h-2 w-2 rounded-full bg-white/20"}),p.jsx("span",{children:"Ready"})]}),r?p.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-sm",children:[p.jsx("span",{className:"h-2 w-2 rounded-full bg-cyan-200/70 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]"}),p.jsx("span",{children:"Scanning…"})]}):null]})]}),p.jsx("div",{ref:l,className:"max-h-[420px] overflow-auto px-5 py-5 sm:max-h-[520px] sm:px-6",children:p.jsx("div",{className:"space-y-4",children:t.map(x=>p.jsx("div",{className:["grid gap-2",x.role==="user"?"justify-items-end":"justify-items-start"].join(" "),children:p.jsx("div",{className:["w-full max-w-[560px] rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-glow",x.role==="user"?"border-white/10 bg-white/[0.06] text-white":"border-white/10 bg-black/35 text-white/85"].join(" "),children:p.jsx("div",{className:"whitespace-pre-wrap text-pretty",children:x.content})})},x.id))})}),p.jsxs("div",{className:"border-t border-white/10 px-5 py-4 sm:px-6",children:[p.jsx("div",{className:"flex flex-wrap gap-2",children:h.map(x=>p.jsx("button",{type:"button",onClick:()=>{r||i(x)},className:"liquid-glass glass-float inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/65 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:x},x))}),p.jsxs("form",{onSubmit:m,className:"mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end",children:[p.jsxs("div",{className:"grid gap-2",children:[p.jsx("label",{htmlFor:"galactic-question",className:"text-xs font-semibold tracking-wide text-white/55",children:"Ask a question"}),p.jsx("textarea",{id:"galactic-question",value:n,onChange:x=>i(x.target.value),placeholder:"E.g. Why do Sky Whales follow migration lines?",rows:2,className:"w-full resize-none rounded-3xl border border-cream/10 bg-black/40 px-5 py-4 font-mono text-sm text-cream/85 shadow-[0_18px_70px_rgba(0,0,0,0.45)] outline-none placeholder:text-cream/35 focus:border-cream/15 focus:ring-2 focus:ring-neon/60"})]}),p.jsx("button",{type:"submit",disabled:r||!n.trim(),className:"glass-float inline-flex items-center justify-center rounded-full bg-neon px-7 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:"Transmit"})]}),a?p.jsx("div",{className:"mt-3 text-xs text-orange-200/80",children:a}):null]})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsxs("div",{className:"flex items-start justify-between gap-3",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Sources"}),p.jsx("div",{className:"mt-2 font-mono text-xs text-cream/55",children:"Lore snippets used for the latest answer."})]}),c!=null&&c.sources&&c.sources.length>0?p.jsxs("div",{className:"font-mono text-xs text-cream/50",children:[c.sources.length," entries"]}):null]}),c!=null&&c.sources&&c.sources.length>0?p.jsx("div",{className:"mt-4 space-y-3",children:c.sources.map(x=>p.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/30 p-4",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"text-xs font-semibold text-white/80",children:x.title}),p.jsx("div",{className:"mt-1 text-[11px] font-medium text-white/45",children:x.id})]}),p.jsx("div",{className:"inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-white/65",children:x.category})]}),p.jsx("div",{className:"mt-3 text-sm leading-relaxed text-white/70",children:x.snippet})]},x.id))}):p.jsx("div",{className:"mt-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/60",children:"Ask a question to generate a source list."})]}),p.jsxs("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Tip"}),p.jsx("div",{className:"mt-3 leading-relaxed",children:"Try referencing a planet, creature, or tool name. The guide retrieves the closest lore entries before answering."})]})]})]})}const Lg=["ground","air","burrow","water"],Vl={ground:{label:"Ground",glyph:"⇢",glow:"from-cyan-400/25 via-white/[0.02] to-black/35",ring:"from-cyan-300/40 via-white/15 to-white/5",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100"},air:{label:"Air",glyph:"↟",glow:"from-fuchsia-400/22 via-white/[0.02] to-black/35",ring:"from-fuchsia-300/40 via-white/15 to-white/5",chip:"border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100"},burrow:{label:"Burrow",glyph:"⟱",glow:"from-orange-400/22 via-white/[0.02] to-black/35",ring:"from-orange-300/40 via-white/15 to-white/5",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100"},water:{label:"Water",glyph:"≈",glow:"from-sky-400/22 via-white/[0.02] to-black/35",ring:"from-sky-300/40 via-white/15 to-white/5",chip:"border-sky-300/25 bg-sky-300/10 text-sky-100"}},kA=t=>t.split(/[-_]/g).filter(Boolean).map(e=>e.slice(0,1).toUpperCase()+e.slice(1)).join(" "),Bf=({value:t})=>p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5}).map((e,n)=>p.jsx("span",{className:["h-1.5 w-6 rounded-full",n<t?"bg-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]":"bg-white/10"].join(" ")},n))}),p.jsxs("div",{className:"text-xs font-medium text-white/55",children:[t,"/5"]})]}),OA=({mount:t})=>{const e=Vl[t.traversal];return p.jsxs("div",{className:"space-y-5",children:[p.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl p-6",children:[p.jsx("div",{className:["absolute -inset-14 bg-gradient-to-b blur-2xl",e.glow].join(" ")}),p.jsxs("div",{className:"relative space-y-3",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:t.tagline}),p.jsx("div",{className:"mt-3 font-mono text-sm leading-relaxed text-cream/75",children:t.travelFantasy})]}),p.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",e.chip].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:e.glyph}),p.jsx("span",{children:e.label})]})]}),p.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[p.jsxs("div",{className:"rounded-2xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Handling Profile"}),p.jsxs("div",{className:"mt-3 grid gap-2 font-mono text-sm text-cream/70",children:[p.jsxs("div",{className:"flex items-center justify-between gap-3",children:[p.jsx("span",{className:"text-white/55",children:"Temperament"}),p.jsx("span",{className:"font-medium text-white/80",children:t.temperament})]}),p.jsxs("div",{className:"flex items-center justify-between gap-3",children:[p.jsx("span",{className:"text-white/55",children:"Handling"}),p.jsx("span",{className:"font-medium text-white/80",children:t.handling})]}),p.jsxs("div",{className:"flex items-center justify-between gap-3",children:[p.jsx("span",{className:"text-white/55",children:"Top speed"}),p.jsx(Bf,{value:t.topSpeedRating})]})]})]}),p.jsxs("div",{className:"rounded-2xl border border-cream/10 bg-black/30 p-5",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Habitat"}),p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.habitatPlanetIds.map(n=>p.jsx("span",{className:"inline-flex items-center rounded-full border border-cream/10 bg-white/[0.04] px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70",children:kA(n)},n))})]})]})]})]}),p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsx("div",{className:"font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream",children:"Traversal Capabilities"}),p.jsx("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:t.capabilities.map(n=>p.jsx("div",{className:"rounded-2xl border border-cream/10 bg-black/25 px-5 py-4 font-mono text-sm text-cream/70",children:n},n))})]})]})};function BA({mounts:t,onOpenMount:e}){const[n,i]=ye.useState("all"),r=ye.useMemo(()=>{const u=d=>Lg.indexOf(d.traversal)*10+(5-d.topSpeedRating);return[...t].sort((d,m)=>u(d)-u(m))},[t]),s=ye.useMemo(()=>n==="all"?r:r.filter(u=>u.traversal===n),[n,r]),[a,o]=ye.useState(()=>{var u;return((u=s[0])==null?void 0:u.id)??""});ye.useEffect(()=>{if(s.length===0){o("");return}s.some(u=>u.id===a)||o(s[0].id)},[s,a]);const l=ye.useMemo(()=>s.find(u=>u.id===a)??s[0]??null,[s,a]),c=u=>{u.id===a?e(u):o(u.id)},h=l?Vl[l.traversal]:null;return p.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start",children:[p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[p.jsx("div",{className:"font-mono text-sm text-cream/65",children:"Tap a card to stage it. Tap again to open the expanded view."}),p.jsxs("div",{className:"flex flex-wrap gap-2",children:[p.jsx("button",{type:"button",onClick:()=>i("all"),className:["liquid-glass glass-float rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",n==="all"?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:"All"}),Lg.map(u=>{const d=Vl[u],m=n===u;return p.jsxs("button",{type:"button",onClick:()=>i(u),className:["liquid-glass glass-float inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",m?"text-neon":"text-cream/70 hover:text-neon"].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:d.glyph}),p.jsx("span",{children:d.label})]},u)})]})]}),p.jsxs("div",{className:"liquid-glass relative overflow-hidden rounded-3xl p-6",children:[h?p.jsx("div",{className:["absolute -inset-12 bg-gradient-to-b blur-2xl",h.glow].join(" ")}):null,p.jsx("div",{className:"relative",children:l?p.jsxs("div",{className:"grid gap-5",children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/75",children:[p.jsx("span",{className:"text-sm leading-none",children:h==null?void 0:h.glyph}),p.jsx("span",{children:h==null?void 0:h.label})]}),p.jsx("div",{className:"mt-5 font-grotesk text-2xl uppercase tracking-[0.08em] text-cream sm:text-3xl",children:l.name}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:l.tagline}),p.jsx("div",{className:"mt-4 font-mono text-sm leading-relaxed text-cream/75",children:l.travelFantasy})]}),p.jsxs("div",{className:"flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end",children:[p.jsxs("div",{className:"rounded-3xl border border-cream/10 bg-black/35 px-5 py-4",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Top speed"}),p.jsx("div",{className:"mt-2",children:p.jsx(Bf,{value:l.topSpeedRating})})]}),p.jsx("button",{type:"button",onClick:()=>e(l),className:"glass-float inline-flex w-full items-center justify-center rounded-full bg-neon px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 sm:w-auto",children:"Open Expanded View"})]})]}),p.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[p.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/25 p-4",children:[p.jsx("div",{className:"text-xs font-semibold tracking-wide text-white/55",children:"Feel"}),p.jsxs("div",{className:"mt-2 grid gap-1 text-sm text-white/70",children:[p.jsxs("div",{className:"flex items-center justify-between gap-3",children:[p.jsx("span",{className:"text-white/55",children:"Temperament"}),p.jsx("span",{className:"font-medium text-white/80",children:l.temperament})]}),p.jsxs("div",{className:"flex items-center justify-between gap-3",children:[p.jsx("span",{className:"text-white/55",children:"Handling"}),p.jsx("span",{className:"font-medium text-white/80",children:l.handling})]})]})]}),p.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/25 p-4",children:[p.jsx("div",{className:"text-xs font-semibold tracking-wide text-white/55",children:"Signature Moves"}),p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:l.capabilities.slice(0,3).map(u=>p.jsx("span",{className:"inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70",children:u},u))})]})]})]}):p.jsx("div",{className:"text-sm text-white/65",children:"No mounts available."})})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("div",{className:"font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/70",children:"Mount roster"}),p.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-1",children:s.map(u=>{const d=Vl[u.traversal],m=u.id===(l==null?void 0:l.id);return p.jsxs("button",{type:"button",onClick:()=>c(u),className:["group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",m?"ring-1 ring-neon/25":""].join(" "),children:[p.jsx("div",{className:["absolute -inset-10 bg-gradient-to-b opacity-80 blur-2xl",d.glow].join(" ")}),p.jsxs("div",{className:"relative flex items-start justify-between gap-4",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("span",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",d.chip].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:d.glyph}),p.jsx("span",{children:d.label})]}),p.jsx("span",{className:"font-mono text-[11px] text-cream/55",children:"Tap twice for details"})]}),p.jsx("div",{className:"mt-4 font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:u.name}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:u.tagline})]}),p.jsxs("div",{className:"shrink-0 text-right",children:[p.jsx("div",{className:"text-xs font-semibold text-white/55",children:"Speed"}),p.jsx("div",{className:"mt-1",children:p.jsx(Bf,{value:u.topSpeedRating})})]})]}),p.jsx("div",{className:"relative mt-4 flex flex-wrap gap-2",children:u.capabilities.slice(0,2).map(x=>p.jsx("span",{className:["inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",m?"border-white/14 bg-white/[0.06] text-white/75":"border-white/10 bg-white/[0.04] text-white/65"].join(" "),children:x},x))}),p.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 transition group-hover:opacity-100",d.ring].join(" ")})]},u.id)})})]})]})}function zA({onPlay:t}){return p.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start",children:[p.jsxs("div",{className:"liquid-glass glass-float relative overflow-hidden rounded-3xl p-6 sm:p-7",children:[p.jsx("div",{className:"pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_22%_18%,rgba(111,255,0,0.18),transparent_55%),radial-gradient(circle_at_76%_18%,rgba(255,69,195,0.14),transparent_62%)] blur-2xl"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:"Early build"}),p.jsx("div",{className:"mt-3 text-balance font-grotesk text-2xl uppercase tracking-[0.08em] text-cream sm:text-3xl",children:"Drop into a micro arena"}),p.jsx("div",{className:"mt-3 max-w-xl font-mono text-sm leading-relaxed text-cream/70",children:"A tiny Three.js slice to validate rendering, layout, and lifecycle inside the reveal site."}),p.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3",children:[p.jsxs("button",{type:"button",onClick:t,className:"glow-neon inline-flex items-center gap-3 rounded-full bg-neon/90 px-6 py-3 font-grotesk text-[12px] uppercase tracking-[0.16em] text-ink-950 shadow-[0_18px_60px_rgba(111,255,0,0.26)] transition hover:bg-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",children:[p.jsx("span",{children:"Play Prototype"}),p.jsx("span",{"aria-hidden":"true",className:"text-cream/30",children:"→"})]}),p.jsx("div",{className:"rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-xs text-cream/65",children:"Esc or Exit to close"})]})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"liquid-glass rounded-3xl p-6",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60",children:"What’s inside"}),p.jsxs("ul",{className:"mt-4 space-y-3 font-mono text-sm text-cream/70",children:[p.jsxs("li",{className:"flex gap-3",children:[p.jsx("span",{className:"mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/80"}),p.jsx("span",{children:"Engine loop + cleanup path"})]}),p.jsxs("li",{className:"flex gap-3",children:[p.jsx("span",{className:"mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/70"}),p.jsx("span",{children:"Scene lighting, fog, and a placeholder titan mesh"})]}),p.jsxs("li",{className:"flex gap-3",children:[p.jsx("span",{className:"mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/60"}),p.jsx("span",{children:"Asset loader wired for bundled textures"})]})]})]}),p.jsx("div",{className:"rounded-3xl border border-white/10 bg-black/35 p-6 font-mono text-xs text-cream/60",children:"This launcher is a scaffold for upcoming Tasks 2–6."})]})]})}const Ig={weapon:{label:"Weapon",glyph:"⚡",chip:"border-orange-300/25 bg-orange-300/10 text-orange-100"},gadget:{label:"Gadget",glyph:"✦",chip:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100"}},VA={"bubble-blaster":{glow:"from-cyan-400/25 via-sky-300/10 to-black/45",ring:"from-cyan-300/40 via-white/15 to-white/5"},"gravity-hammer":{glow:"from-fuchsia-400/24 via-violet-300/10 to-black/45",ring:"from-fuchsia-300/40 via-white/15 to-white/5"},"comet-cannon":{glow:"from-sky-400/22 via-cyan-300/10 to-black/45",ring:"from-sky-300/40 via-white/15 to-white/5"},"disco-ray":{glow:"from-orange-400/20 via-fuchsia-300/12 to-black/45",ring:"from-orange-300/40 via-white/15 to-white/5"}},HA={glow:"from-cyan-400/20 via-white/[0.02] to-black/45",ring:"from-white/25 via-white/12 to-white/5"};function GA({weapons:t}){const[e,n]=ye.useState(null);return t.length===0?p.jsx("div",{className:"liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70",children:"Weapons data unavailable."}):p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[p.jsx("div",{className:"font-mono text-sm text-cream/65",children:"Hover to preview, tap to pin a card open."}),p.jsx("div",{className:"flex flex-wrap gap-2",children:Object.values(Ig).map(i=>p.jsxs("div",{className:["liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",i.chip].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:i.glyph}),p.jsx("span",{children:i.label})]},i.label))})]}),p.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:t.map(i=>{const r=VA[i.id]??HA,s=e===i.id,a=Ig[i.category];return p.jsxs("button",{type:"button",onClick:()=>n(o=>o===i.id?null:i.id),"aria-expanded":s,className:["group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"].join(" "),children:[p.jsx("div",{className:["pointer-events-none absolute -inset-14 bg-gradient-to-b blur-2xl",r.glow,"opacity-0 motion-safe:transition-opacity motion-safe:duration-300","group-hover:opacity-100",s?"opacity-100":""].join(" ")}),p.jsx("div",{className:["pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0",r.ring,"motion-safe:transition-opacity motion-safe:duration-300","group-hover:opacity-100",s?"opacity-100":""].join(" ")}),p.jsx("div",{className:["weapon-sheen pointer-events-none absolute inset-0 opacity-0","motion-safe:transition-opacity motion-safe:duration-300","group-hover:opacity-100",s?"opacity-100":""].join(" ")}),p.jsxs("div",{className:"relative",children:[p.jsxs("div",{className:"flex items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"truncate font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream",children:i.name}),p.jsx("div",{className:"mt-2 font-mono text-sm text-cream/65",children:i.tagline})]}),p.jsxs("div",{className:["liquid-glass inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",a.chip].join(" "),children:[p.jsx("span",{className:"text-sm leading-none",children:a.glyph}),p.jsx("span",{children:a.label})]})]}),p.jsxs("div",{className:"mt-5 flex items-center justify-between gap-3",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/50",children:"Primary"}),p.jsx("div",{className:"min-w-0 truncate font-mono text-xs text-cream/75",children:i.primaryEffect})]}),p.jsx("div",{className:["mt-4 grid overflow-hidden rounded-xl border border-white/10 bg-black/25","motion-safe:transition-[grid-template-rows] motion-safe:duration-300",s?"grid-rows-[1fr]":"grid-rows-[0fr]","group-hover:grid-rows-[1fr]"].join(" "),children:p.jsx("div",{className:"min-h-0 overflow-hidden",children:p.jsxs("div",{className:"p-4",children:[p.jsx("div",{className:"font-mono text-sm leading-relaxed text-cream/75",children:i.description}),p.jsxs("div",{className:"mt-4 grid gap-3 text-sm",children:[p.jsxs("div",{className:"grid gap-1",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Secondary"}),p.jsx("div",{className:"font-mono text-cream/70",children:i.secondaryEffect})]}),p.jsxs("div",{className:"grid gap-1",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Energy Source"}),p.jsx("div",{className:"font-mono text-cream/70",children:i.energySource})]}),p.jsxs("div",{className:"grid gap-1",children:[p.jsx("div",{className:"font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55",children:"Unlock Hint"}),p.jsx("div",{className:"font-mono text-cream/70",children:i.unlockHint})]})]})]})})}),p.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 text-xs",children:[p.jsx("div",{className:"font-mono text-cream/50",children:s?"Tap to collapse":"Tap to inspect"}),p.jsx("div",{className:"text-cream/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80",children:"→"})]})]})]},i.id)})})]})}function jA(){const t=ye.useMemo(()=>[{id:"trailer",label:"Trailer"},{id:"prototype",label:"Prototype"},{id:"planets",label:"Planets"},{id:"weapons",label:"Weapons"},{id:"mounts",label:"Mounts"},{id:"creatures",label:"Creatures"},{id:"vote",label:"Vote"},{id:"guide",label:"Galactic Guide"}],[]),e=ye.useMemo(()=>RS(),[]),n=e.ok?e.content.planets:[],i=e.ok?e.content.creatures:[],r=e.ok?e.content.weapons:[],s=e.ok?e.content.mounts:[],[a,o]=ye.useState({open:!1,title:"Detail",body:null}),l=(S,v)=>{o({open:!0,title:S,body:v})},c=()=>{o(S=>({...S,open:!1}))},[h,u]=ye.useState(!1),d=ye.useMemo(()=>new Map(i.map(S=>[S.id,S])),[i]),m=S=>{const v=S.nativeCreatureIds.map(f=>d.get(f)).filter(f=>!!f);l(S.name,p.jsx(hS,{planet:S,creatures:v}))},x=S=>{const v=n.find(f=>f.id===S);v&&m(v)};return p.jsxs("div",{className:"grain",children:[p.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0",children:[p.jsx("div",{className:"absolute -inset-[20%] bg-aurora opacity-70 blur-3xl motion-safe:animate-aurora"}),p.jsx("div",{className:"absolute inset-0 bg-particles opacity-30 [background-size:240px_240px] motion-safe:animate-particles"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-ink-950/10 via-ink-950/35 to-ink-950"})]}),p.jsx("div",{id:"top",className:"section-anchor"}),p.jsx(gS,{brand:"Tiny Titan",sections:t}),p.jsxs("main",{children:[p.jsx(xS,{onExploreUniverse:()=>Yx("planets")}),p.jsx(Cr,{id:"prototype",kicker:"Playable Prototype",title:"Play Prototype",subtitle:"A full-screen Three.js scaffold integrated into the reveal site. Launch it, confirm it mounts cleanly, then exit back to the page.",children:p.jsx(zA,{onPlay:()=>u(!0)})}),p.jsx(Cr,{id:"planets",kicker:"Planet Explorer",title:"Planets",subtitle:"Three worlds, each with a survival brief and a creature roster. Tap any card to open its field dossier.",children:e.ok?p.jsx(pS,{planets:n,onSelect:x}):p.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glow backdrop-blur-xl",children:[p.jsx("div",{className:"text-sm font-semibold text-white",children:"Planet data unavailable"}),p.jsx("div",{className:"mt-2 text-sm text-white/65",children:"The bundled JSON content failed validation. Fix the issues below to re-enable the Planet Explorer."}),p.jsx("ul",{className:"mt-4 space-y-1 text-sm text-white/60",children:e.issues.slice(0,8).map(S=>p.jsxs("li",{children:[S.path,": ",S.message]},`${S.path}:${S.message}`))})]})}),p.jsx(Cr,{id:"weapons",kicker:"Gadgets & Weapons",title:"The Armory Bay",subtitle:"Hover for quick specs, tap to lock a card open and read the full description.",children:p.jsx(GA,{weapons:r})}),p.jsx(Cr,{id:"mounts",kicker:"Alien Mounts",title:"Mount Showcase",subtitle:"Stage a mount, compare traversal styles, then open an expanded view for capabilities and travel fantasy.",children:p.jsx(BA,{mounts:s,onOpenMount:S=>l(S.name,p.jsx(OA,{mount:S}))})}),p.jsx(Cr,{id:"creatures",kicker:"Creature Encyclopedia",title:"Creature Encyclopedia",subtitle:"Scan each creature dossier, expand for a quick field panel, then open the full readout for survival-grade notes.",children:p.jsx(MA,{creatures:i,planets:n,onOpenCreature:S=>l(S.name,p.jsx(SA,{creature:S,planets:n}))})}),p.jsx(Cr,{id:"vote",kicker:"Community",title:"Community Planet Vote",subtitle:"Choose which planet gets the next deep-dive reveal. Your vote persists locally and results update instantly.",children:p.jsx(CA,{planets:n})}),p.jsx(Cr,{id:"guide",kicker:"AI Galactic Guide",title:"Ask about Tiny Titan",subtitle:"A lore-grounded Q&A console. Every answer cites the field dossier entries it used.",children:p.jsx(FA,{})}),p.jsx("footer",{className:"border-t border-white/10 py-10",children:p.jsx("div",{className:"mx-auto w-full max-w-6xl px-5 text-sm text-white/55 sm:px-8",children:"Tiny Titan — reveal site"})})]}),p.jsx(qx,{open:a.open,onClose:c,title:a.title,children:a.body}),p.jsx(yA,{open:h,onClose:()=>u(!1)}),p.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-[70] bg-cover bg-center opacity-60 mix-blend-lighten",style:{backgroundImage:"url(/texture.png)"}})]})}Zu.createRoot(document.getElementById("root")).render(p.jsx(Jv.StrictMode,{children:p.jsx(jA,{})}));
