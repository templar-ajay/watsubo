(()=>{var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function r(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}function i(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function c(t){return this instanceof c?(this.v=t,this):new c(t)}function u(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||s(t,e)}))})}function s(t,e){try{(n=o[t](e)).value instanceof c?Promise.resolve(n.value.v).then(a,l):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function a(t){s("next",t)}function l(t){s("throw",t)}function f(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function s(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=r(t),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){!function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}(r,o,(e=t[n](e)).done,e.value)}))}}}function a(t){return"function"==typeof t}function l(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}Object.create,Object.create;var f=l((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function p(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var h=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,n,c,u;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var l=r(s),p=l.next();!p.done;p=l.next())p.value.remove(this)}catch(e){t={error:e}}finally{try{p&&!p.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}else s.remove(this);var h=this.initialTeardown;if(a(h))try{h()}catch(t){u=t instanceof f?t.errors:[t]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var b=r(d),m=b.next();!m.done;m=b.next()){var v=m.value;try{y(v)}catch(t){u=null!=u?u:[],t instanceof f?u=i(i([],o(u)),o(t.errors)):u.push(t)}}}catch(t){n={error:t}}finally{try{m&&!m.done&&(c=b.return)&&c.call(b)}finally{if(n)throw n.error}}}if(u)throw new f(u)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)y(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&p(e,t)},t.prototype.remove=function(e){var n=this._finalizers;n&&p(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();function d(t){return t instanceof h||t&&"closed"in t&&a(t.remove)&&a(t.add)&&a(t.unsubscribe)}function y(t){a(t)?t():t.unsubscribe()}h.EMPTY;var b=null,m=null,v=void 0,w=!1,g=!1,x={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var c=x.delegate;return(null==c?void 0:c.setTimeout)?c.setTimeout.apply(c,i([t,e],o(n))):setTimeout.apply(void 0,i([t,e],o(n)))},clearTimeout:function(t){var e=x.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function P(t){x.setTimeout((function(){var e=b;try{if(!e)throw t;e(t)}catch(e){}}))}function _(){}var S=I("C",void 0,void 0);function I(t,e,n){return{kind:t,value:e,error:n}}var T=null;var M=function(t){function n(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,d(e)&&e.add(n)):n.destination=j,n}return e(n,t),n.create=function(t,e,n){return new k(t,e,n)},n.prototype.next=function(t){this.isStopped?N(function(t){return I("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?N(I("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?N(S,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(h),O=Function.prototype.bind;function E(t,e){return O.call(t,e)}var A=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){W(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){W(t)}else W(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){W(t)}},t}(),k=function(t){function n(e,n,r){var o,i,c=t.call(this)||this;return a(e)||!e?o={next:null!=e?e:void 0,error:null!=n?n:void 0,complete:null!=r?r:void 0}:c&&g?((i=Object.create(e)).unsubscribe=function(){return c.unsubscribe()},o={next:e.next&&E(e.next,i),error:e.error&&E(e.error,i),complete:e.complete&&E(e.complete,i)}):o=e,c.destination=new A(o),c}return e(n,t),n}(M);function W(t){var e;w?(e=t,w&&T&&(T.errorThrown=!0,T.error=e)):P(t)}function N(t,e){var n=m;n&&x.setTimeout((function(){return n(t,e)}))}var j={closed:!0,next:_,error:function(t){throw t},complete:_},C="function"==typeof Symbol&&Symbol.observable||"@@observable";function R(t){return t}function z(t){return 0===t.length?R:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var L=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,o=this,i=(r=t)&&r instanceof M||function(t){return t&&a(t.next)&&a(t.error)&&a(t.complete)}(r)&&d(r)?t:new k(t,e,n);return function(t){if(w){var e=!T;if(e&&(T={errorThrown:!1,error:null}),t(),e){var n=T,r=n.errorThrown,o=n.error;if(T=null,r)throw o}}else t()}((function(){var t=o,e=t.operator,n=t.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=U(e))((function(e,r){var o=new k({next:function(e){try{t(e)}catch(t){r(t),o.unsubscribe()}},error:r,complete:e});n.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[C]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return z(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=U(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function U(t){var e;return null!==(e=null!=t?t:v)&&void 0!==e?e:Promise}function B(t){return function(e){if(function(t){return a(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function F(t,e,n,r,o){return new J(t,e,n,r,o)}var J=function(t){function n(e,n,r,o,i,c){var u=t.call(this,e)||this;return u.onFinalize=i,u.shouldUnsubscribe=c,u._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,u._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,u._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,u}return e(n,t),n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},n}(M);function Y(t,e){return B((function(n,r){var o=0;n.subscribe(F(r,(function(n){r.next(t.call(e,n,o++))})))}))}var q=Array.isArray;function D(t,e,n){return n?D(t,e).pipe(function(t){return Y((function(e){return function(t,e){return q(e)?t.apply(void 0,i([],o(e))):t(e)}(t,e)}))}(n)):new L((function(n){var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.next(1===t.length?t[0]:t)},o=t(r);return a(e)?function(){return e(r,o)}:void 0}))}var G=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function V(t){return a(null==t?void 0:t.then)}function H(t){return a(t[C])}function $(t){return Symbol.asyncIterator&&a(null==t?void 0:t[Symbol.asyncIterator])}function K(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var Q="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function X(t){return a(null==t?void 0:t[Q])}function Z(t){return u(this,arguments,(function(){var e,r,o;return n(this,(function(n){switch(n.label){case 0:e=t.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,c(e.read())];case 3:return r=n.sent(),o=r.value,r.done?[4,c(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,c(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function tt(t){return a(null==t?void 0:t.getReader)}function et(t){if(t instanceof L)return t;if(null!=t){if(H(t))return i=t,new L((function(t){var e=i[C]();if(a(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(G(t))return o=t,new L((function(t){for(var e=0;e<o.length&&!t.closed;e++)t.next(o[e]);t.complete()}));if(V(t))return n=t,new L((function(t){n.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,P)}));if($(t))return nt(t);if(X(t))return e=t,new L((function(t){var n,o;try{for(var i=r(e),c=i.next();!c.done;c=i.next()){var u=c.value;if(t.next(u),t.closed)return}}catch(t){n={error:t}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}t.complete()}));if(tt(t))return nt(Z(t))}var e,n,o,i;throw K(t)}function nt(t){return new L((function(e){(function(t,e){var r,o,i,c;return function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}s((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function(){var u,a;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),r=s(t),n.label=1;case 1:return[4,r.next()];case 2:if((o=n.sent()).done)return[3,4];if(u=o.value,e.next(u),e.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=n.sent(),i={error:a},[3,11];case 6:return n.trys.push([6,,9,10]),o&&!o.done&&(c=r.return)?[4,c.call(r)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))})(t,e).catch((function(t){return e.error(t)}))}))}function rt(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=e.schedule((function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);if(t.add(i),!o)return i}function ot(t,e,n){return void 0===n&&(n=1/0),a(e)?ot((function(n,r){return Y((function(t,o){return e(n,t,r,o)}))(et(t(n,r)))}),n):("number"==typeof e&&(n=e),B((function(e,r){return function(t,e,n,r,o,i,c,u){var s=[],a=0,l=0,f=!1,p=function(){!f||s.length||a||e.complete()},h=function(t){return a<r?d(t):s.push(t)},d=function(t){i&&e.next(t),a++;var u=!1;et(n(t,l++)).subscribe(F(e,(function(t){null==o||o(t),i?h(t):e.next(t)}),(function(){u=!0}),void 0,(function(){if(u)try{a--;for(var t=function(){var t=s.shift();c?rt(e,c,(function(){return d(t)})):d(t)};s.length&&a<r;)t();p()}catch(t){e.error(t)}})))};return t.subscribe(F(e,h,(function(){f=!0,p()}))),function(){null==u||u()}}(e,r,t,n)})))}function it(t){return void 0===t&&(t=1/0),ot(R,t)}var ct=new L((function(t){return t.complete()}));function ut(t){return t[t.length-1]}function st(t){return(e=ut(t))&&a(e.schedule)?t.pop():void 0;var e}function at(t,e){return"number"==typeof ut(t)?t.pop():e}function lt(t,e){return void 0===e&&(e=0),B((function(n,r){n.subscribe(F(r,(function(n){return rt(r,t,(function(){return r.next(n)}),e)}),(function(){return rt(r,t,(function(){return r.complete()}),e)}),(function(n){return rt(r,t,(function(){return r.error(n)}),e)})))}))}function ft(t,e){return void 0===e&&(e=0),B((function(n,r){r.add(t.schedule((function(){return n.subscribe(r)}),e))}))}function pt(t,e){if(!t)throw new Error("Iterable cannot be null");return new L((function(n){rt(n,e,(function(){var r=t[Symbol.asyncIterator]();rt(n,e,(function(){r.next().then((function(t){t.done?n.complete():n.next(t.value)}))}),0,!0)}))}))}function ht(t,e){if(null!=t){if(H(t))return function(t,e){return et(t).pipe(ft(e),lt(e))}(t,e);if(G(t))return function(t,e){return new L((function(n){var r=0;return e.schedule((function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())}))}))}(t,e);if(V(t))return function(t,e){return et(t).pipe(ft(e),lt(e))}(t,e);if($(t))return pt(t,e);if(X(t))return function(t,e){return new L((function(n){var r;return rt(n,e,(function(){r=t[Q](),rt(n,e,(function(){var t,e,o;try{e=(t=r.next()).value,o=t.done}catch(t){return void n.error(t)}o?n.complete():n.next(e)}),0,!0)})),function(){return a(null==r?void 0:r.return)&&r.return()}}))}(t,e);if(tt(t))return function(t,e){return pt(Z(t),e)}(t,e)}throw K(t)}function dt(t,e){return e?ht(t,e):et(t)}function yt(t,e){return B((function(n,r){var o=0;n.subscribe(F(r,(function(n){return t.call(e,n,o++)&&r.next(n)})))}))}var bt=l((function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}}));function mt(t){return t<=0?function(){return ct}:B((function(e,n){var r=0;e.subscribe(F(n,(function(e){++r<=t&&(n.next(e),t<=r&&n.complete())})))}))}function vt(t){return B((function(e,n){var r=!1;e.subscribe(F(n,(function(t){r=!0,n.next(t)}),(function(){r||n.next(t),n.complete()})))}))}function wt(t){return void 0===t&&(t=gt),B((function(e,n){var r=!1;e.subscribe(F(n,(function(t){r=!0,n.next(t)}),(function(){return r?n.complete():n.error(t())})))}))}function gt(){return new bt}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
const xt=new Map,Pt=(t,e,n)=>{const r=xt.get(t)||new Map;r.set(e,n),xt.has(t)||xt.set(t,r)};class _t extends Error{constructor(t){var e,n,{coreMessage:r=null,coreResponse:o=null,message:i=(null===(n=null===(e=chrome.runtime)||void 0===e?void 0:e.lastError)||void 0===n?void 0:n.message)||(null==o?void 0:o.payload.greeting)||"chrome.runtime.lastError is undefined"}=t;super(i),this.coreMessage=r,this.coreResponse=o}}const St=t=>(e=(()=>!0))=>t.pipe(function(t,e){var n=arguments.length>=2;return function(r){return r.pipe(t?yt((function(e,n){return t(e,n,r)})):R,mt(1),n?vt(e):wt((function(){return new bt})))}}(e)).toPromise(),It=function(t){const e=(t=>e=>{const n=(n,r,o)=>!(!n.async||t!==n.scope||(async function(){try{const t=t=>{o({success:!0,payload:t})};await e(n.payload,r,t)}catch(t){const e={success:!1,payload:{greeting:t.message}};o(e)}}(),0));chrome.runtime.onMessage.addListener(n),Pt(t,e,n)})(t),n=(t,{tabId:e,frameId:n}={})=>new Promise(((r,o)=>{const i={async:!0,tabId:e||null,payload:t,scope:"@extend-chrome/messages__root"},c=t=>{chrome.runtime.lastError||null===t||!t.success?o(new _t({coreMessage:i,coreResponse:t})):r(t.payload)};"number"==typeof e&&"number"==typeof n?chrome.tabs.sendMessage(e,i,{frameId:n},c):"number"==typeof e?chrome.tabs.sendMessage(e,i,c):chrome.runtime.sendMessage(i,c)})),r=(t=>e=>{const n=((t,e)=>{const n=xt.get(t);if(n)return n.get(e)})(t,e);n&&(((t,e)=>{const n=xt.get(t);n&&n.delete(e)})(t,e),chrome.runtime.onMessage.removeListener(n))})(t),o=(t=>e=>{const n=(n,r)=>{if(n.async||n.scope!==t)return!1;try{e(n.payload,r)}catch(t){}return!1};chrome.runtime.onMessage.addListener(n),Pt(t,e,n)})(t),i=(t,{tabId:e,frameId:n}={})=>new Promise(((r,o)=>{const i={async:!1,tabId:e||null,payload:t,scope:"@extend-chrome/messages__root"},c=t=>{if(chrome.runtime.lastError){const t=chrome.runtime.lastError.message,e="The message port closed before a response was received";t&&t.includes(e)?r():o(new _t({coreMessage:i}))}else t&&!t.success?o(t.payload):r()};"number"==typeof e&&"number"==typeof n?chrome.tabs.sendMessage(e,i,{frameId:n},c):"number"==typeof e?chrome.tabs.sendMessage(e,i,c):chrome.runtime.sendMessage(i,c)}));async function c(t,e){const r=e||{},{async:o=!1}=r,c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(r,["async"]);return o?n(t,c):i(t,c)}const u=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=st(t),r=at(t,1/0),o=t;return o.length?1===o.length?et(o[0]):it(r)(dt(o,n)):ct}(D(o,r),D(e,r)),s=new Set;return{send:c,on:function(t){t.length<3?o(t):e(t)},off:function(t){return r(t)},stream:u,getMessage:function(t,e){if(s.has(t))throw new Error("greeting is not unique");s.add(t);const{async:n}=e||{},r=(e,r)=>{let o,i;return"number"==typeof(r=r||{}).tabId&&(o=r.tabId),"number"==typeof r.frameId&&(i=r.frameId),c({greeting:t,data:e},n?{async:n,tabId:o,frameId:i}:{tabId:o,frameId:i})};if(r.toTab=({tabId:e})=>c({greeting:t},n?{async:n,tabId:e}:{tabId:e}),n)return[r,u.pipe(yt(o),Y((([{data:t},e,n])=>[t,e,n])),yt((t=>3===t.length))),St(u)];{const t=u.pipe(yt(o),Y((([{data:t},e])=>[t,e])),yt((t=>t.length<3)));return[r,t,St(t)]}function o([e]){return e&&"object"==typeof e&&e.greeting===t}}}}("@extend-chrome/messages__root"),{getMessage:Tt}=It,[Mt,Ot]=Tt("getContacts",{async:!0}),[Et,At]=Tt("getContactName",{async:!0}),[kt,Wt]=Tt("getProfilePhoto",{async:!0}),[Nt,jt]=Tt("getGroupParticipants",{async:!0}),[Ct,Rt]=Tt("isBusiness",{async:!0}),[zt,Lt]=Tt("getLabels",{async:!0}),[Ut,Bt]=Tt("getWhatsAppAccount",{async:!0}),[Ft,Jt]=Tt("getWhatsAppVersion",{async:!0}),[Yt,qt]=Tt("openChatRoom",{async:!0}),[Dt,Gt]=Tt("sendMessageList",{async:!0}),[Vt,Ht,$t]=Tt("DOM_STATUS"),[Kt,Qt,Xt]=Tt("TAB");function Zt(t,[e,n,r]){const{script:o,args:i}=t;n.tab?.id&&chrome.scripting.executeScript({target:{tabId:n.tab.id},world:"MAIN",func:o,args:i?[i]:[]},(t=>{t?.[0]?.result&&r(t[0].result)}))}Rt.subscribe((t=>{Zt({script:async()=>window.WPP.profile.isBusiness()},t)})),Bt.subscribe((t=>{Zt({script:()=>{let t=window.WPP.conn.getMyUserId();if(!t)return;const e=window.WPP.whatsapp.ContactStore.get(t._serialized)?.toJSON();return e?{id:e.id,name:e?.name??e?.verifiedName??e?.shortName}:void 0}},t)})),jt.subscribe((t=>{const[e]=t;Zt({script:async t=>(await window.WPP.group.getParticipants(t)??[]).map((t=>({id:t.id,name:t.contact?.name??t.contact?.formattedName??t.contact?.shortName}))),args:e},t)})),Ot.subscribe((t=>{Zt({script:async()=>{const t=(await window.WPP.contact.list()).map((t=>t.toJSON()));for(const e of t){const t=(await window.WPP.whatsapp.ContactStore.find(e.id._serialized))?.toJSON();e.name=e?.name??t?.verifiedName??t?.notifyName??t?.displayName??t?.pushname??e?.shortName}return t}},t)})),Lt.subscribe((t=>{Zt({script:()=>window.WPP.labels.getAllLabels()},t)})),Jt.subscribe((t=>{Zt({script:()=>window.Debug?.VERSION??"unknown"},t)})),Wt.subscribe((t=>{const[e]=t;Zt({script:async t=>window.WPP.contact.getProfilePictureUrl(t),args:e},t)})),At.subscribe((t=>{const[e]=t;Zt({script:async t=>(await window.WPP.whatsapp.ContactStore.find(t))?.toJSON(),args:e},t)})),qt.subscribe((t=>{const[e]=t;Zt({script:async t=>{function e(){const e=document.createElement("a");e.setAttribute("href",`whatsapp://send?phone=${t}`),document.body.appendChild(e),e.click(),e.outerHTML=""}const n=window.WPP.webpack.search((t=>t.openChat));if(n)try{await n.openChat(t)}catch(t){e()}else e()},args:e},t)})),Gt.subscribe((t=>{const[e]=t;Zt({script:async t=>{const{recipient:e,messages:n,options:r}=t,o=t=>t.map((t=>{if("url"===t.type)return{url:t.value,text:t.text};if("phoneNumber"===t.type)return{phoneNumber:t.value,text:t.text};if("text"===t.type)return{id:t.text,text:t.text};if("unsubscribe"===t.type)return{id:t.text,text:t.text};throw new Error("Unknown button type "+t)})),i=t=>"size"in t,c=t=>"sections"in t,u=t=>new Promise((e=>setTimeout(e,1e3*t)));let s=0;const a=n??[];for(const n of a)try{"buttons"in n?n.thumbnail?await window.WPP.chat.sendFileMessage(e,n.thumbnail.content,{createChat:!0,useTemplateButtons:0,type:n.thumbnail.type.startsWith("image/")?"image":"video",caption:n.message,buttons:n.buttons.length>0?o(n.buttons):void 0,markIsRead:!0}):await window.WPP.chat.sendTextMessage(e,n.message,{useTemplateButtons:0,createChat:!0,buttons:n.buttons.length>0?o(n.buttons):void 0,markIsRead:!0}):i(n)?await window.WPP.chat.sendFileMessage(e,n.content,{createChat:!0,type:n.type.startsWith("image/")?"image":n.type.startsWith("video/")?"video":"document",filename:n.name,caption:n.caption?n.caption:void 0,mimetype:n.type,markIsRead:!0}):c(n)&&await window.WPP.chat.sendListMessage(e,{createChat:!0,buttonText:n.buttonText,description:n.description,sections:n.sections,title:n.title,markIsRead:!0})}catch(t){throw t}finally{a.length>1&&s!==a.length-1&&r?.delayBetweenMessages&&await u((l=r.delayBetweenMessages.min,f=r.delayBetweenMessages.max,Math.floor(Math.random()*(f-l+1)+l))),s++}var l,f;return"ok"},args:e},t)})),"undefined"==typeof document&&chrome.action.onClicked.addListener((function(){chrome.tabs.query({url:"https://web.whatsapp.com/"},(t=>{const[e]=t;if(e){if(!e?.id)return;e.active?chrome.tabs.sendMessage(e.id,{payload:"clicked"}):chrome.tabs.update(e.id,{selected:!0})}else chrome.tabs.create({url:"https://web.whatsapp.com",active:!0})}))}))})();