"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ff4de21f5e8e05bf2e63c3feaf3bfec1"],["/static/css/main.4deb5ec4.css","148052c855825d6465818a06749df111"],["/static/js/0.63a92216.chunk.js","97db5928f3f8e87118c3d9bfeadba5df"],["/static/js/main.759294ac.js","0eee77fb6c786283eb349e561e754bc8"],["/static/js/service-worker.8a77e3f5.js","bac103d5c0f3169f8a2579fd74ef7d45"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=147)}({11:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o={},i="esv",u=["chapters","recents","preferences"],s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u[0];n(this,t),this._db_name=e,this._store_name=r}return a(t,[{key:"db",value:function(){var t=this;return null==this._db&&(this._db=new Promise(function(e,r){var n=indexedDB.open(t._db_name,4);n.onerror=function(){return r(n.error)},n.onupgradeneeded=function(){u.forEach(function(t){try{n.result.deleteObjectStore(t)}catch(t){}n.result.createObjectStore(t)})},n.onsuccess=function(){e(n.result)}})),this._db}},{key:"transact",value:function(t,e){var r=this;return this.db().then(function(n){return new Promise(function(a,o){var i=n.transaction(r._store_name,t);i.oncomplete=a,i.onerror=function(){return o(i.error)},e(i.objectStore(r._store_name))})})}},{key:"get",value:function(t){var e;return this.transact("readonly",function(r){return e=r.get(t)}).then(function(){if("undefined"===typeof e.result)throw new Error("Key "+t+" not found");return e.result})}},{key:"set",value:function(t,e){return this.transact("readwrite",function(r){return r.put(e,t)})}},{key:"all",value:function(){var t=[];return this.transact("readonly",function(e){e.openCursor().onsuccess=function(e){var r=e.target.result;r&&(t.push({key:r.key,value:r.value}),r.continue())}}).then(function(){return t})}}]),t}();e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.db,r=void 0===e?i:e,n=t.store,a=void 0===n?u[0]:n,c=r+"|"+a;return null==o[c]&&(o[c]=new s(r,a)),o[c]}},147:function(t,e,r){t.exports=r(148)},148:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11),a=r(4),o=r(149),i=function(t){return t=new URL(t.pathname.substring(1)),/^\/v2\/rest\/passageQuery/.test(t.pathname)},u=function(t){return Object(n.a)().get(Object(a.f)(Object(a.m)(t.searchParams.get("passage"))))},s=function(t,e){var r=t.searchParams.get("passage"),o=Object(a.m)(r),i=Object(a.f)(o);Number.isNaN(i)||Object(n.a)().set(i,e)};self.addEventListener("fetch",function(t){var e=new URL(t.request.url);i(e)&&t.respondWith(u(e).then(function(t){return new Response(t,{status:200})}).catch(function(e){return fetch(t.request).then(function(t){return t.text()}).then(o.a).then(function(e){return s(new URL(t.request.url),e),new Response(e,{status:200})})}))})},149:function(t,e,r){"use strict";function n(t){var e,r,n,a,o,i;return s.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:e=[{type:"document",start:0}],r=-1,n=void 0;case 3:if(!(r++<t.length)){u.next=31;break}if(a=h(e),"document"!==a.type){u.next=16;break}if("<"!==t[r]){u.next=14;break}if(a.start===r){u.next=10;break}return u.next=10,{type:"text",value:t.substring(a.start,r)};case 10:e.push({type:"tag",start:r}),n={isStart:"/"!==t[r+1],attributes:{}},"/"===t[r+1]&&r++,e.push({type:"tagname",start:r+1});case 14:u.next=29;break;case 16:if("tag"!==a.type){u.next=28;break}if(">"!==t[r]){u.next=25;break}return"tagname"===a.type&&(n.name=t.substring(n.isStart?1:2,r)),u.next=21,Object.assign({type:"tag",value:t.substring(a.start,r+1)},n);case 21:e.pop(),h(e).start=r+1,u.next=26;break;case 25:" "!==t[r]&&"/"!==t[r]&&(e.push({type:"attribute",start:r}),e.push({type:"attributeName",start:r}));case 26:u.next=29;break;case 28:"tagname"===a.type?" "!==t[r]&&">"!==t[r]||(n.name=t.substring(a.start,r),e.pop(),">"===t[r]&&r--):"attributeName"===a.type?"="===t[r]&&(o=t.substring(a.start,r),e.pop(),h(e).name=o,'"'===t[r+1]&&(h(e).isQuoted=!0,r++),h(e).start=r+1):"attribute"===a.type&&(i=a.isQuoted?'"'===t[r]&&"\\"!==t[r-1]:" "===t[r]||">"===t[r])&&(n.attributes[a.name]=t.substring(a.start,r),e.pop(),a.isQuoted||">"!==t[r]||r--);case 29:u.next=3;break;case 31:case"end":return u.stop()}},f[0],this)}function a(t,e){var r,n,a,o,i,u,c;return s.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:r=!1,n=!0,a=!1,o=void 0,s.prev=4,i=e[Symbol.iterator]();case 6:if(n=(u=i.next()).done){s.next=22;break}if(c=u.value,"tag"!==c.type||!c.isStart||c.name!==t){s.next=12;break}r=!0,s.next=19;break;case 12:if("tag"!==c.type||c.isStart||c.name!==t){s.next=16;break}r=!1,s.next=19;break;case 16:if(r){s.next=19;break}return s.next=19,c;case 19:n=!0,s.next=6;break;case 22:s.next=28;break;case 24:s.prev=24,s.t0=s.catch(4),a=!0,o=s.t0;case 28:s.prev=28,s.prev=29,!n&&i.return&&i.return();case 31:if(s.prev=31,!a){s.next=34;break}throw o;case 34:return s.finish(31);case 35:return s.finish(28);case 36:case"end":return s.stop()}},f[1],this,[[4,24,28,36],[29,,31,35]])}function o(t){var e,r,n,a,o,i,u,c,h,l,p,v;return s.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=!1,r=!0,n=!1,a=void 0,s.prev=4,o=t[Symbol.iterator]();case 6:if(r=(i=o.next()).done){s.next=28;break}if(u=i.value,c=u.type,h=u.name,l=u.isStart,p=u.attributes,!e||"tag"!==c||"p"!==h||l){s.next=15;break}return s.next=12,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 12:e=!1,s.next=23;break;case 15:if("tag"!==c||!/^(chapter|verse)-num$/.test(p.class)){s.next=23;break}if(!e){s.next=19;break}return s.next=19,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 19:return e=!0,v=p.id.replace(/^v/,"vt"),s.next=23,{type:"tag",isStart:!0,value:'<span class="verse" id="'+v+'">',name:"span",attributes:{class:"verse",id:v}};case 23:return s.next=25,u;case 25:r=!0,s.next=6;break;case 28:s.next=34;break;case 30:s.prev=30,s.t0=s.catch(4),n=!0,a=s.t0;case 34:s.prev=34,s.prev=35,!r&&o.return&&o.return();case 37:if(s.prev=37,!n){s.next=40;break}throw a;case 40:return s.finish(37);case 41:return s.finish(34);case 42:case"end":return s.stop()}},f[2],this,[[4,30,34,42],[35,,37,41]])}function i(t){var e,r,n,a,o,i,u,h,l,p,v,d,y,m,b,g,x,w,k;return s.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=!1,r=!1,n=!1,a=!0,o=!1,i=void 0,s.prev=6,u=t[Symbol.iterator]();case 8:if(a=(h=u.next()).done){s.next=51;break}if(l=h.value,!n){s.next=14;break}return s.next=13,l;case 13:return s.abrupt("continue",48);case 14:if(p=l.type,v=l.name,d=l.isStart,y=l.value,m=l.attributes,e||"tag"!==p||!/^(chapter|verse)-num$/.test(m.class)){s.next=20;break}return e=!0,s.next=19,l;case 19:return s.abrupt("continue",48);case 20:if(!e||r||"tag"!==p||"span"!==v||d){s.next=25;break}return r=!0,s.next=24,l;case 24:return s.abrupt("continue",48);case 25:if(!r||"text"!==p){s.next=46;break}if(b=y.match(/^(\W*)(\w)(.*)/)){s.next=31;break}return s.next=30,l;case 30:return s.abrupt("continue",48);case 31:if(g=c(b,4),x=g[1],w=g[2],k=g[3],!x){s.next=35;break}return s.next=35,{type:"text",value:x};case 35:return s.next=37,{type:"tag",isStart:!0,value:'<span class="first-letter">',name:"span",attributes:{class:"first-letter"}};case 37:return s.next=39,{type:"text",value:w};case 39:return s.next=41,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 41:if(!k){s.next=44;break}return s.next=44,{type:"text",value:k};case 44:return n=!0,s.abrupt("continue",48);case 46:return s.next=48,l;case 48:a=!0,s.next=8;break;case 51:s.next=57;break;case 53:s.prev=53,s.t0=s.catch(6),o=!0,i=s.t0;case 57:s.prev=57,s.prev=58,!a&&u.return&&u.return();case 60:if(s.prev=60,!o){s.next=63;break}throw i;case 63:return s.finish(60);case 64:return s.finish(57);case 65:case"end":return s.stop()}},f[3],this,[[6,53,57,65],[58,,60,64]])}var u=r(150),s=r.n(u),c=function(){function t(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=[n,a,o,i].map(s.a.mark),h=function(t){return t[t.length-1]};e.a=function(t){return Array.from(i(o(a("script",a("object",n(t)))))).map(function(t){return t.value}).join("")}},150:function(t,e,r){t.exports=r(151)},151:function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(152),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},152:function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof a?e:a,i=Object.create(o.prototype),u=new p(n||[]);return i._invoke=c(t,r,u),i}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function a(){}function o(){}function i(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,a,o,i){var u=n(t[r],t,a);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&b.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(c).then(function(t){s.value=t,o(s)},i)}i(u.arg)}function r(t,r){function n(){return new Promise(function(n,a){e(t,r,n,a)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function c(t,e,r){var a=S;return function(o,i){if(a===j)throw new Error("Generator is already running");if(a===_){if("throw"===o)throw i;return d()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var s=f(u,r);if(s){if(s===P)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===S)throw a=_,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=j;var c=n(t,e,r);if("normal"===c.type){if(a=r.done?_:O,c.arg===P)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=_,r.method="throw",r.arg=c.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return P;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var a=n(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,P;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,P):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,P)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function l(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function v(t){if(t){var e=t[x];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(b.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:d}}function d(){return{value:y,done:!0}}var y,m=Object.prototype,b=m.hasOwnProperty,g="function"===typeof Symbol?Symbol:{},x=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",k=g.toStringTag||"@@toStringTag",E="object"===typeof t,L=e.regeneratorRuntime;if(L)return void(E&&(t.exports=L));L=e.regeneratorRuntime=E?t.exports:{},L.wrap=r;var S="suspendedStart",O="suspendedYield",j="executing",_="completed",P={},J={};J[x]=function(){return this};var N=Object.getPrototypeOf,R=N&&N(N(v([])));R&&R!==m&&b.call(R,x)&&(J=R);var T=i.prototype=a.prototype=Object.create(J);o.prototype=T.constructor=i,i.constructor=o,i[k]=o.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,k in t||(t[k]="GeneratorFunction")),t.prototype=Object.create(T),t},L.awrap=function(t){return{__await:t}},u(s.prototype),s.prototype[w]=function(){return this},L.AsyncIterator=s,L.async=function(t,e,n,a){var o=new s(r(t,e,n,a));return L.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},u(T),T[k]="Generator",T[x]=function(){return this},T.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=v,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(l),!t)for(var e in this)"t"===e.charAt(0)&&b.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var i=b.call(a,"catchLoc"),u=b.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,P):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),P},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),l(r),P}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;l(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:v(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),P}}}(function(){return this}()||Function("return this")())},4:function(t,e,r){"use strict";r.d(e,"e",function(){return a}),r.d(e,"a",function(){return i}),r.d(e,"d",function(){return u}),r.d(e,"f",function(){return s}),r.d(e,"j",function(){return c}),r.d(e,"c",function(){return f}),r.d(e,"b",function(){return h}),r.d(e,"m",function(){return l}),r.d(e,"i",function(){return p}),r.d(e,"g",function(){return v}),r.d(e,"k",function(){return d}),r.d(e,"h",function(){return y}),r.d(e,"l",function(){return m}),r.d(e,"n",function(){return b});var n=function(){function t(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a={Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,Ruth:4,"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,Ezra:10,Nehemiah:13,Esther:10,Job:42,Psalm:150,Proverbs:31,Ecclesiastes:12,"Song of Solomon":8,Isaiah:66,Jeremiah:52,Lamentations:5,Ezekiel:48,Daniel:12,Hosea:14,Joel:3,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:4,Matthew:28,Mark:16,Luke:24,John:21,Acts:28,Romans:16,"1 Corinthians":16,"2 Corinthians":13,Galatians:6,Ephesians:6,Philippians:4,Colossians:4,"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,Titus:3,Philemon:1,Hebrews:13,James:5,"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,Jude:1,Revelation:22},o={Genesis:0,Exodus:50,Leviticus:90,Numbers:117,Deuteronomy:153,Joshua:187,Judges:211,Ruth:232,"1 Samuel":236,"2 Samuel":267,"1 Kings":291,"2 Kings":313,"1 Chronicles":338,"2 Chronicles":367,Ezra:403,Nehemiah:413,Esther:426,Job:436,Psalm:478,Proverbs:628,Ecclesiastes:659,"Song of Solomon":671,Isaiah:679,Jeremiah:745,Lamentations:797,Ezekiel:802,Daniel:850,Hosea:862,Joel:876,Amos:879,Obadiah:888,Jonah:889,Micah:893,Nahum:900,Habakkuk:903,Zephaniah:906,Haggai:909,Zechariah:911,Malachi:925,Matthew:929,Mark:957,Luke:973,John:997,Acts:1018,Romans:1046,"1 Corinthians":1062,"2 Corinthians":1078,Galatians:1091,Ephesians:1097,Philippians:1103,Colossians:1107,"1 Thessalonians":1111,"2 Thessalonians":1116,"1 Timothy":1119,"2 Timothy":1125,Titus:1129,Philemon:1132,Hebrews:1133,James:1146,"1 Peter":1151,"2 Peter":1156,"1 John":1159,"2 John":1164,"3 John":1165,Jude:1166,Revelation:1167},i=1189,u=Object.getOwnPropertyNames(o),s=function(t){return o[t.book]+t.chapter-1},c=function(t){var e=void 0,r=!0,n=!1,a=void 0;try{for(var i,s=u[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var c=i.value;if(!(o[c]<=t))break;e=c}}catch(t){n=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}if(null==e)throw new Error("reference index is out of range");return{book:e,chapter:t-o[e]+1,verse:1}},f=function(t){var e=s(t);return c(((e-1)%i+i)%i)},h=function(t){return c((s(t)+1)%i)},l=function(t){var e=t.split(/\s/),r=n(e,3),a=r[0],o=r[1],i=r[2];if(!/^\d+$/.test(a)){var u=[a,o,""];o=u[0],i=u[1],a=u[2]}var s=null!=i?i.split(":"):[1,1],c=n(s,2),f=c[0],h=c[1];return{book:(a?a+" ":"")+o[0].toUpperCase()+o.slice(1).toLowerCase(),chapter:parseInt(f,10),verse:null==h?1:parseInt(h,10)}},p=function(t){return l(decodeURI(t.pathname).slice(1).replace(/\++/g," ").replace(/^\s+/,"").replace(/\s+$/,""))},v=function(t){return"/"+t.book+"+"+t.chapter},d=function(t){return"/"+t.book+"+"+t.chapter+":"+t.verse},y=function(t,e){return t.book===e.book&&t.chapter===e.chapter&&t.verse===e.verse},m=function(t){return"v"+(u.indexOf(t.book)+1).toLocaleString("en",{minimumIntegerDigits:2})+t.chapter.toLocaleString("en",{minimumIntegerDigits:3})+t.verse.toLocaleString("en",{minimumIntegerDigits:3})+"-1"},b=function(t){var e=t.match(/^vt?(\d\d)(\d\d\d)(\d\d\d)/);if(null==e)throw new Error("cannot convert "+t+" to reference");var r=n(e,4),a=r[1],o=r[2],i=r[3];return{book:u[parseInt(a,10)-1],chapter:parseInt(o,10),verse:parseInt(i,10)}}}});
//# sourceMappingURL=service-worker.8a77e3f5.js.map