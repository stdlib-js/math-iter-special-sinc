// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSinc=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,_=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,_,"$1e"),n=s.call(n,w,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,i,a,l,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,p=0;p<r.length;p++)if(c(n=r[p]))l+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function N(r){var t,e,n,o;for(e=[],o=0,n=F.exec(r);n;)(t=r.slice(o,F.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=F.lastIndex,n=F.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function x(r){return"string"==typeof r}function V(r){var t,e,n;if(!x(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=N(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return T.apply(null,e)}var k,I=Object.prototype,U=I.toString,B=I.__defineGetter__,G=I.__defineSetter__,C=I.__lookupGetter__,L=I.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,t,e.get),a&&G&&G.call(r,t,e.set),r};var M=k;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}function W(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=W();function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";var K=Z()?function(r){var t,e,n;if(null==r)return Y.call(r);e=r[J],t=q(r,J);try{r[J]=void 0}catch(t){return Y.call(r)}return n=Y.call(r),t?r[J]=e:delete r[J],n}:function(r){return Y.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var tr=Z();function er(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return H(r)||er(r)}function or(){return new Function("return this;")()}R(nr,"isPrimitive",H),R(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!H(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(cr)return cr;if(ir)return ir;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,pr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;R(sr,"REGEXP",yr);var vr=W();var br=Object.prototype.toString;var gr="function"==typeof D?D.toStringTag:"";var dr,wr=vr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return br.call(r);e=r[gr],t=q(r,gr);try{r[gr]=void 0}catch(t){return br.call(r)}return n=br.call(r),t?r[gr]=e:delete r[gr],n}:function(r){return br.call(r)};dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===wr(r)};var _r=dr;function hr(r){return null!==r&&"object"==typeof r}var mr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(hr);function jr(r){var t,e,n,o;if(("Object"===(e=K(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return hr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(hr,"isObjectLikeArray",mr);var Sr="function"==typeof $||"object"==typeof pr||"function"==typeof fr?function(r){return jr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t};function Ar(r){return"function"===Sr(r)}var Er=/./,Or="function"==typeof Object.defineProperty?Object.defineProperty:null;var Tr,Fr=Object.defineProperty,Pr=Object.prototype,Nr=Pr.toString,xr=Pr.__defineGetter__,Vr=Pr.__defineSetter__,kr=Pr.__lookupGetter__,Ir=Pr.__lookupSetter__;Tr=function(){try{return Or({},"x",{}),!0}catch(r){return!1}}()?Fr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Nr.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Nr.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(kr.call(r,t)||Ir.call(r,t)?(n=r.__proto__,r.__proto__=Pr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&xr&&xr.call(r,t,e.get),a&&Vr&&Vr.call(r,t,e.set),r};var Ur=Tr;function Br(r,t,e){Ur(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Gr(r){return"boolean"==typeof r}var Cr=W();function Lr(){return Cr&&"symbol"==typeof Symbol.toStringTag}var Mr=Object.prototype.toString;var Rr="function"==typeof D?D.toStringTag:"";var $r=Lr()?function(r){var t,e,n;if(null==r)return Mr.call(r);e=r[Rr],t=q(r,Rr);try{r[Rr]=void 0}catch(t){return Mr.call(r)}return n=Mr.call(r),t?r[Rr]=e:delete r[Rr],n}:function(r){return Mr.call(r)},Hr=Boolean.prototype.toString;var Wr=Lr();function Xr(r){return"object"==typeof r&&(r instanceof Q||(Wr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===$r(r)))}function Zr(r){return Gr(r)||Xr(r)}function Yr(){return new Function("return this;")()}Br(Zr,"isPrimitive",Gr),Br(Zr,"isObject",Xr);var zr="object"==typeof self?self:null,qr="object"==typeof window?window:null,Dr="object"==typeof global?global:null,Jr="object"==typeof globalThis?globalThis:null;var Kr=function(r){if(arguments.length){if(!Gr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Yr()}if(Jr)return Jr;if(zr)return zr;if(qr)return qr;if(Dr)return Dr;throw new Error("unexpected error. Unable to resolve global object.")}(),Qr=Kr.document&&Kr.document.childNodes,rt=Int8Array;function tt(){return/^\s*function\s*([^(]*)/i}var et=/^\s*function\s*([^(]*)/i;function nt(r){return null!==r&&"object"==typeof r}Br(tt,"REGEXP",et);var ot=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(nt);function it(r){var t,e,n,o;if(("Object"===(e=$r(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=et.exec(n.toString()))return t[1]}return nt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Br(nt,"isObjectLikeArray",ot);var at="function"==typeof Er||"object"==typeof rt||"function"==typeof Qr?function(r){return it(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?it(r).toLowerCase():t};function ut(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===at(r)}(r.next)}function ct(r){return"number"==typeof r}var lt=Number,ft=lt.prototype.toString;var pt=Z();function st(r){return"object"==typeof r&&(r instanceof lt||(pt?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function yt(r){return ct(r)||st(r)}R(yt,"isPrimitive",ct),R(yt,"isObject",st);var vt="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var bt=/./,gt="function"==typeof Object.defineProperty?Object.defineProperty:null;var dt,wt=Object.defineProperty,_t=Object.prototype,ht=_t.toString,mt=_t.__defineGetter__,jt=_t.__defineSetter__,St=_t.__lookupGetter__,At=_t.__lookupSetter__;dt=function(){try{return gt({},"x",{}),!0}catch(r){return!1}}()?wt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ht.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ht.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(St.call(r,t)||At.call(r,t)?(n=r.__proto__,r.__proto__=_t,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&mt&&mt.call(r,t,e.get),a&&jt&&jt.call(r,t,e.set),r};var Et=dt;function Ot(r,t,e){Et(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Tt(r){return"boolean"==typeof r}var Ft=W();function Pt(){return Ft&&"symbol"==typeof Symbol.toStringTag}var Nt=Object.prototype.toString;var xt="function"==typeof D?D.toStringTag:"";var Vt=Pt()?function(r){var t,e,n;if(null==r)return Nt.call(r);e=r[xt],t=q(r,xt);try{r[xt]=void 0}catch(t){return Nt.call(r)}return n=Nt.call(r),t?r[xt]=e:delete r[xt],n}:function(r){return Nt.call(r)},kt=Boolean.prototype.toString;var It=Pt();function Ut(r){return"object"==typeof r&&(r instanceof Q||(It?function(r){try{return kt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Vt(r)))}function Bt(r){return Tt(r)||Ut(r)}function Gt(){return new Function("return this;")()}Ot(Bt,"isPrimitive",Tt),Ot(Bt,"isObject",Ut);var Ct="object"==typeof self?self:null,Lt="object"==typeof window?window:null,Mt="object"==typeof global?global:null,Rt="object"==typeof globalThis?globalThis:null;var $t=function(r){if(arguments.length){if(!Tt(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Gt()}if(Rt)return Rt;if(Ct)return Ct;if(Lt)return Lt;if(Mt)return Mt;throw new Error("unexpected error. Unable to resolve global object.")}(),Ht=$t.document&&$t.document.childNodes,Wt=Int8Array;function Xt(){return/^\s*function\s*([^(]*)/i}var Zt=/^\s*function\s*([^(]*)/i;function Yt(r){return null!==r&&"object"==typeof r}Ot(Xt,"REGEXP",Zt);var zt=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Yt);function qt(r){var t,e,n,o;if(("Object"===(e=Vt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Zt.exec(n.toString()))return t[1]}return Yt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ot(Yt,"isObjectLikeArray",zt);var Dt="function"==typeof bt||"object"==typeof Wt||"function"==typeof Ht?function(r){return qt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?qt(r).toLowerCase():t};function Jt(r){return"function"===Dt(r)}var Kt=Object,Qt=/./,re="function"==typeof Object.defineProperty?Object.defineProperty:null;var te,ee=Object.defineProperty,ne=Object.prototype,oe=ne.toString,ie=ne.__defineGetter__,ae=ne.__defineSetter__,ue=ne.__lookupGetter__,ce=ne.__lookupSetter__;te=function(){try{return re({},"x",{}),!0}catch(r){return!1}}()?ee:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===oe.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===oe.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ue.call(r,t)||ce.call(r,t)?(n=r.__proto__,r.__proto__=ne,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ie&&ie.call(r,t,e.get),a&&ae&&ae.call(r,t,e.set),r};var le=te;function fe(r,t,e){le(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function pe(r){return"boolean"==typeof r}var se=W();function ye(){return se&&"symbol"==typeof Symbol.toStringTag}var ve=Object.prototype.toString;var be="function"==typeof D?D.toStringTag:"";var ge=ye()?function(r){var t,e,n;if(null==r)return ve.call(r);e=r[be],t=q(r,be);try{r[be]=void 0}catch(t){return ve.call(r)}return n=ve.call(r),t?r[be]=e:delete r[be],n}:function(r){return ve.call(r)},de=Boolean.prototype.toString;var we=ye();function _e(r){return"object"==typeof r&&(r instanceof Q||(we?function(r){try{return de.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ge(r)))}function he(r){return pe(r)||_e(r)}function me(){return new Function("return this;")()}fe(he,"isPrimitive",pe),fe(he,"isObject",_e);var je="object"==typeof self?self:null,Se="object"==typeof window?window:null,Ae="object"==typeof global?global:null,Ee="object"==typeof globalThis?globalThis:null;var Oe=function(r){if(arguments.length){if(!pe(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return me()}if(Ee)return Ee;if(je)return je;if(Se)return Se;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),Te=Oe.document&&Oe.document.childNodes,Fe=Int8Array;function Pe(){return/^\s*function\s*([^(]*)/i}var Ne=/^\s*function\s*([^(]*)/i;function xe(r){return null!==r&&"object"==typeof r}fe(Pe,"REGEXP",Ne);var Ve=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(xe);function ke(r){var t,e,n,o;if(("Object"===(e=ge(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ne.exec(n.toString()))return t[1]}return xe(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}fe(xe,"isObjectLikeArray",Ve);var Ie="function"==typeof Qt||"object"==typeof Fe||"function"==typeof Te?function(r){return ke(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?ke(r).toLowerCase():t};var Ue,Be,Ge=Object.getPrototypeOf;Be=Object.getPrototypeOf,Ue="function"===Ie(Be)?Ge:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===ge(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ce=Ue;var Le=Object.prototype;function Me(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!_r(r)}(r)&&(t=function(r){return null==r?null:(r=Kt(r),Ce(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&Jt(t.constructor)&&"[object Function]"===Vt(t.constructor)&&q(t,"isPrototypeOf")&&Jt(t.isPrototypeOf)&&(t===Le||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Re(r,t){return Me(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t))}function $e(r,t,e){var n,o,i,a;if(!ut(r))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Ar(t))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Re(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),vt&&Ar(r[vt])&&R(o,vt,l),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:ct(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return $e(r[vt](),t,n)}}function He(r){return r!=r}var We=Number.POSITIVE_INFINITY,Xe=Number.NEGATIVE_INFINITY;function Ze(r){return r===We||r===Xe}var Ye=W();var ze=Object.prototype.toString;var qe="function"==typeof D?D.toStringTag:"";var De=Ye&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return ze.call(r);e=r[qe],t=q(r,qe);try{r[qe]=void 0}catch(t){return ze.call(r)}return n=ze.call(r),t?r[qe]=e:delete r[qe],n}:function(r){return ze.call(r)},Je="function"==typeof Uint32Array;var Ke="function"==typeof Uint32Array?Uint32Array:null;var Qe,rn="function"==typeof Uint32Array?Uint32Array:void 0;Qe=function(){var r,t;if("function"!=typeof Ke)return!1;try{r=function(r){return Je&&r instanceof Uint32Array||"[object Uint32Array]"===De(r)}(t=new Ke(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var tn=Qe,en=W();var nn=Object.prototype.toString;var on="function"==typeof D?D.toStringTag:"";var an=en&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return nn.call(r);e=r[on],t=q(r,on);try{r[on]=void 0}catch(t){return nn.call(r)}return n=nn.call(r),t?r[on]=e:delete r[on],n}:function(r){return nn.call(r)},un="function"==typeof Float64Array;var cn="function"==typeof Float64Array?Float64Array:null;var ln,fn="function"==typeof Float64Array?Float64Array:void 0;ln=function(){var r,t;if("function"!=typeof cn)return!1;try{r=function(r){return un&&r instanceof Float64Array||"[object Float64Array]"===an(r)}(t=new cn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fn:function(){throw new Error("not implemented")};var pn=ln,sn=W();var yn=Object.prototype.toString;var vn="function"==typeof D?D.toStringTag:"";var bn=sn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return yn.call(r);e=r[vn],t=q(r,vn);try{r[vn]=void 0}catch(t){return yn.call(r)}return n=yn.call(r),t?r[vn]=e:delete r[vn],n}:function(r){return yn.call(r)},gn="function"==typeof Uint8Array;var dn="function"==typeof Uint8Array?Uint8Array:null;var wn,_n="function"==typeof Uint8Array?Uint8Array:void 0;wn=function(){var r,t;if("function"!=typeof dn)return!1;try{r=function(r){return gn&&r instanceof Uint8Array||"[object Uint8Array]"===bn(r)}(t=new dn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_n:function(){throw new Error("not implemented")};var hn=wn,mn=W();var jn=Object.prototype.toString;var Sn="function"==typeof D?D.toStringTag:"";var An=mn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return jn.call(r);e=r[Sn],t=q(r,Sn);try{r[Sn]=void 0}catch(t){return jn.call(r)}return n=jn.call(r),t?r[Sn]=e:delete r[Sn],n}:function(r){return jn.call(r)},En="function"==typeof Uint16Array;var On="function"==typeof Uint16Array?Uint16Array:null;var Tn,Fn="function"==typeof Uint16Array?Uint16Array:void 0;Tn=function(){var r,t;if("function"!=typeof On)return!1;try{r=function(r){return En&&r instanceof Uint16Array||"[object Uint16Array]"===An(r)}(t=new On(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Fn:function(){throw new Error("not implemented")};var Pn,Nn={uint16:Tn,uint8:hn};(Pn=new Nn.uint16(1))[0]=4660;var xn=52===new Nn.uint8(Pn.buffer)[0],Vn=!0===xn?1:0,kn=new pn(1),In=new tn(kn.buffer);function Un(r){return kn[0]=r,In[Vn]}function Bn(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var Gn=-.16666666666666632;function Cn(r,t){var e,n,o;return e=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===t?r+n*(Gn+o*e):r-(o*(.5*t-n*e)-t-n*Gn)}var Ln=2147483647,Mn=2146435072,Rn=W();var $n=Object.prototype.toString;var Hn="function"==typeof D?D.toStringTag:"";var Wn=Rn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return $n.call(r);e=r[Hn],t=q(r,Hn);try{r[Hn]=void 0}catch(t){return $n.call(r)}return n=$n.call(r),t?r[Hn]=e:delete r[Hn],n}:function(r){return $n.call(r)},Xn="function"==typeof Float64Array;var Zn="function"==typeof Float64Array?Float64Array:null;var Yn,zn="function"==typeof Float64Array?Float64Array:void 0;Yn=function(){var r,t;if("function"!=typeof Zn)return!1;try{r=function(r){return Xn&&r instanceof Float64Array||"[object Float64Array]"===Wn(r)}(t=new Zn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zn:function(){throw new Error("not implemented")};var qn=!0===xn?0:1,Dn=new Yn(1),Jn=new tn(Dn.buffer);var Kn=W();var Qn=Object.prototype.toString;var ro="function"==typeof D?D.toStringTag:"";var to=Kn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Qn.call(r);e=r[ro],t=q(r,ro);try{r[ro]=void 0}catch(t){return Qn.call(r)}return n=Qn.call(r),t?r[ro]=e:delete r[ro],n}:function(r){return Qn.call(r)},eo="function"==typeof Float64Array;var no="function"==typeof Float64Array?Float64Array:null;var oo,io,ao,uo="function"==typeof Float64Array?Float64Array:void 0;oo=function(){var r,t;if("function"!=typeof no)return!1;try{r=function(r){return eo&&r instanceof Float64Array||"[object Float64Array]"===to(r)}(t=new no([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?uo:function(){throw new Error("not implemented")},!0===xn?(io=1,ao=0):(io=0,ao=1);var co={HIGH:io,LOW:ao},lo=new oo(1),fo=new tn(lo.buffer),po=co.HIGH,so=co.LOW;function yo(r,t){return fo[po]=r,fo[so]=t,lo[0]}var vo=Math.floor,bo=Number.POSITIVE_INFINITY,go="function"==typeof Object.defineProperty?Object.defineProperty:null;var wo,_o=Object.defineProperty,ho=Object.prototype,mo=ho.toString,jo=ho.__defineGetter__,So=ho.__defineSetter__,Ao=ho.__lookupGetter__,Eo=ho.__lookupSetter__;wo=function(){try{return go({},"x",{}),!0}catch(r){return!1}}()?_o:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===mo.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===mo.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ao.call(r,t)||Eo.call(r,t)?(n=r.__proto__,r.__proto__=ho,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jo&&jo.call(r,t,e.get),a&&So&&So.call(r,t,e.set),r};var Oo=wo;var To=W();var Fo=Object.prototype.toString;var Po="function"==typeof D?D.toStringTag:"";var No=To&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Fo.call(r);e=r[Po],t=q(r,Po);try{r[Po]=void 0}catch(t){return Fo.call(r)}return n=Fo.call(r),t?r[Po]=e:delete r[Po],n}:function(r){return Fo.call(r)},xo="function"==typeof Float64Array;var Vo="function"==typeof Float64Array?Float64Array:null;var ko,Io,Uo,Bo="function"==typeof Float64Array?Float64Array:void 0;ko=function(){var r,t;if("function"!=typeof Vo)return!1;try{r=function(r){return xo&&r instanceof Float64Array||"[object Float64Array]"===No(r)}(t=new Vo([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Bo:function(){throw new Error("not implemented")},!0===xn?(Io=1,Uo=0):(Io=0,Uo=1);var Go={HIGH:Io,LOW:Uo},Co=new ko(1),Lo=new tn(Co.buffer),Mo=Go.HIGH,Ro=Go.LOW;function $o(r,t,e,n){return Co[0]=r,t[n]=Lo[Mo],t[n+e]=Lo[Ro],t}function Ho(r){return $o(r,[0,0],1,0)}!function(r,t,e){Oo(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Ho,"assign",$o);var Wo=[0,0];function Xo(r,t){var e,n;return Ho.assign(r,Wo,1,0),e=Wo[0],e&=Ln,n=Un(t),yo(e|=n&=2147483648,Wo[1])}var Zo="function"==typeof Object.defineProperty?Object.defineProperty:null;var Yo,zo=Object.defineProperty,qo=Object.prototype,Do=qo.toString,Jo=qo.__defineGetter__,Ko=qo.__defineSetter__,Qo=qo.__lookupGetter__,ri=qo.__lookupSetter__;Yo=function(){try{return Zo({},"x",{}),!0}catch(r){return!1}}()?zo:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Do.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Do.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Qo.call(r,t)||ri.call(r,t)?(n=r.__proto__,r.__proto__=qo,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Jo&&Jo.call(r,t,e.get),a&&Ko&&Ko.call(r,t,e.set),r};var ti=Yo;function ei(r){return Math.abs(r)}function ni(r,t,e,n){return He(r)||Ze(r)?(t[n]=r,t[n+e]=0,t):0!==r&&ei(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){ti(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return ni(r,[0,0],1,0)}),"assign",ni);var oi=[0,0],ii=[0,0];function ai(r,t){var e,n;return 0===t||0===r||He(r)||Ze(r)?r:(ni(r,oi,1,0),t+=oi[1],t+=function(r){var t=Un(r);return(t=(t&Mn)>>>20)-1023|0}(r=oi[0]),t<-1074?Xo(0,r):t>1023?r<0?Xe:bo:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Ho.assign(r,ii,1,0),e=ii[0],e&=2148532223,n*yo(e|=t+1023<<20,ii[1])))}function ui(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var ci=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],li=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fi=16777216,pi=5.960464477539063e-8,si=ui(20),yi=ui(20),vi=ui(20),bi=ui(20);function gi(r,t,e,n,o,i,a,u,c){var l,f,p,s,y,v,b,g,d;for(s=i,d=n[e],g=e,y=0;g>0;y++)f=pi*d|0,bi[y]=d-fi*f|0,d=n[g-1]+f,g-=1;if(d=ai(d,o),d-=8*vo(.125*d),d-=b=0|d,p=0,o>0?(b+=y=bi[e-1]>>24-o,bi[e-1]-=y<<24-o,p=bi[e-1]>>23-o):0===o?p=bi[e-1]>>23:d>=.5&&(p=2),p>0){for(b+=1,l=0,y=0;y<e;y++)g=bi[y],0===l?0!==g&&(l=1,bi[y]=16777216-g):bi[y]=16777215-g;if(o>0)switch(o){case 1:bi[e-1]&=8388607;break;case 2:bi[e-1]&=4194303}2===p&&(d=1-d,0!==l&&(d-=ai(1,o)))}if(0===d){for(g=0,y=e-1;y>=i;y--)g|=bi[y];if(0===g){for(v=1;0===bi[i-v];v++);for(y=e+1;y<=e+v;y++){for(c[u+y]=ci[a+y],f=0,g=0;g<=u;g++)f+=r[g]*c[u+(y-g)];n[y]=f}return gi(r,t,e+=v,n,o,i,a,u,c)}}if(0===d)for(e-=1,o-=24;0===bi[e];)e-=1,o-=24;else(d=ai(d,-o))>=fi?(f=pi*d|0,bi[e]=d-fi*f|0,o+=24,bi[e+=1]=f):bi[e]=0|d;for(f=ai(1,o),y=e;y>=0;y--)n[y]=f*bi[y],f*=pi;for(y=e;y>=0;y--){for(f=0,v=0;v<=s&&v<=e-y;v++)f+=li[v]*n[y+v];vi[e-y]=f}for(f=0,y=e;y>=0;y--)f+=vi[y];for(t[0]=0===p?f:-f,f=vi[0]-f,y=1;y<=e;y++)f+=vi[y];return t[1]=0===p?f:-f,7&b}function di(r,t,e,n){var o,i,a,u,c,l,f;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),l=i-(a=n-1),f=a+4,c=0;c<=f;c++)si[c]=l<0?0:ci[l],l+=1;for(c=0;c<=4;c++){for(o=0,l=0;l<=a;l++)o+=r[l]*si[a+(c-l)];yi[c]=o}return 4,gi(r,t,4,yi,u,4,i,a,si)}var wi=Math.round;function _i(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=wi(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(Un(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(Un(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var hi=1.5707963267341256,mi=6077100506506192e-26,ji=2*mi,Si=3*mi,Ai=4*mi,Ei=[0,0,0],Oi=[0,0];function Ti(r,t){var e,n,o,i,a,u,c;if((o=Un(r)&Ln|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?_i(r,o,t):o<=1073928572?r>0?(c=r-hi,t[0]=c-mi,t[1]=c-t[0]-mi,1):(c=r+hi,t[0]=c+mi,t[1]=c-t[0]+mi,-1):r>0?(c=r-2*hi,t[0]=c-ji,t[1]=c-t[0]-ji,2):(c=r+2*hi,t[0]=c+ji,t[1]=c-t[0]+ji,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?_i(r,o,t):r>0?(c=r-3*hi,t[0]=c-Si,t[1]=c-t[0]-Si,3):(c=r+3*hi,t[0]=c+Si,t[1]=c-t[0]+Si,-3):1075388923===o?_i(r,o,t):r>0?(c=r-4*hi,t[0]=c-Ai,t[1]=c-t[0]-Ai,4):(c=r+4*hi,t[0]=c+Ai,t[1]=c-t[0]+Ai,-4);if(o<1094263291)return _i(r,o,t);if(o>=Mn)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return Dn[0]=r,Jn[qn]}(r),c=yo(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)Ei[a]=0|c,c=16777216*(c-Ei[a]);for(Ei[2]=c,i=3;0===Ei[i-1];)i-=1;return u=di(Ei,Oi,n,i),r<0?(t[0]=-Oi[0],t[1]=-Oi[1],-u):(t[0]=Oi[0],t[1]=Oi[1],u)}var Fi=[0,0];function Pi(r){var t;if(t=Un(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Bn(r,0);if(t>=2146435072)return NaN;switch(3&Ti(r,Fi)){case 0:return Bn(Fi[0],Fi[1]);case 1:return-Cn(Fi[0],Fi[1]);case 2:return-Bn(Fi[0],Fi[1]);default:return Cn(Fi[0],Fi[1])}}var Ni=[0,0];function xi(r){var t;if(t=Un(r),(t&=Ln)<=1072243195)return t<1045430272?r:Cn(r,0);if(t>=Mn)return NaN;switch(3&Ti(r,Ni)){case 0:return Cn(Ni[0],Ni[1]);case 1:return Bn(Ni[0],Ni[1]);case 2:return-Cn(Ni[0],Ni[1]);default:return-Bn(Ni[0],Ni[1])}}var Vi=3.141592653589793;function ki(r){return He(r)?NaN:Ze(r)?0:0===r?1:function(r){var t,e;return He(r)||Ze(r)?NaN:0===(t=ei(e=r%2))||1===t?Xo(0,e):t<.25?xi(Vi*e):t<.75?Xo(Pi(Vi*(t=.5-t)),e):t<1.25?(e=Xo(1,e)-e,xi(Vi*e)):t<1.75?-Xo(Pi(Vi*(t-=1.5)),e):(e-=Xo(2,e),xi(Vi*e))}(r)/(Vi*r)}return function(r){return $e(r,ki)}}));
//# sourceMappingURL=index.js.map
