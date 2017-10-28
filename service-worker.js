"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","177e7eb48db30d3a8f1371bc22aa2724"],["/static/css/main.ee8ed5a6.css","bd0fa98bda854c2607b22c8feeefb53b"],["/static/js/0.cd31daf6.chunk.js","fe18aee3f06414d20fa63c158bd9fa44"],["/static/js/main.727b5301.js","3a5a1f04c111f0f732b6b3b8c8197df1"],["/static/js/service-worker.2f920c4b.js","76aa9e20b2bb02bf0e25cab3b81c28e6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=155)}({11:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i={},o="esv",s=["chapters","recents","preferences"],u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s[0];n(this,e),this._db_name=t,this._store_name=r}return a(e,[{key:"db",value:function(){var e=this;return null==this._db&&(this._db=new Promise(function(t,r){var n=indexedDB.open(e._db_name,7);n.onerror=function(){return r(n.error)},n.onupgradeneeded=function(){s.forEach(function(e){try{n.result.deleteObjectStore(e)}catch(e){}n.result.createObjectStore(e)})},n.onsuccess=function(){t(n.result)}})),this._db}},{key:"transact",value:function(e,t){var r=this;return this.db().then(function(n){return new Promise(function(a,i){var o=n.transaction(r._store_name,e);o.oncomplete=a,o.onerror=function(){return i(o.error)},t(o.objectStore(r._store_name))})})}},{key:"get",value:function(e){var t;return this.transact("readonly",function(r){return t=r.get(e)}).then(function(){if("undefined"===typeof t.result)throw new Error("Key "+e+" not found");return t.result})}},{key:"set",value:function(e,t){return this.transact("readwrite",function(r){return r.put(t,e)})}},{key:"all",value:function(){var e=[];return this.transact("readonly",function(t){t.openCursor().onsuccess=function(t){var r=t.target.result;r&&(e.push({key:r.key,value:r.value}),r.continue())}}).then(function(){return e})}}]),e}();t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.db,r=void 0===t?o:t,n=e.store,a=void 0===n?s[0]:n,c=r+"|"+a;return null==i[c]&&(i[c]=new u(r,a)),i[c]}},155:function(e,t,r){e.exports=r(156)},156:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(18),i=r(11),o=r(4),s=r(19),u=function(e){return e=new URL(e.pathname.substring(1)),/^\/v2\/rest\/passageQuery/.test(e.pathname)},c=function(e){return Object(i.a)().get(Object(o.f)(Object(o.m)(e.searchParams.get("passage"))))},f=function(e,t){var r=e.searchParams.get("passage"),n=Object(o.m)(r),a=Object(o.f)(n);Number.isNaN(a)||Object(i.a)().set(a,t)};self.addEventListener("fetch",function(e){var t=new URL(e.request.url);u(t)&&e.respondWith(c(t).then(function(e){var t;return new Response(e,{status:200,headers:(t={},n(t,a.a,!0),n(t,a.b,!0),t)})}).catch(function(t){return fetch(e.request).then(function(e){return e.text()}).then(s.a).then(function(t){return f(new URL(e.request.url),t),new Response(t,{status:200,headers:n({},a.b,!0)})})}))})},18:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a});var n="x-from-db",a="x-from-service-worker"},19:function(e,t,r){"use strict";function n(e){var t,r,n,a,i,o,s;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:t=[{type:"document",start:0}],r=-1,n=void 0;case 3:if(!(r++<e.length)){u.next=31;break}if(a=v(t),"document"!==a.type){u.next=16;break}if("<"!==e[r]){u.next=14;break}if(a.start===r){u.next=10;break}return u.next=10,{type:"text",value:e.substring(a.start,r)};case 10:t.push({type:"tag",start:r}),n={isStart:"/"!==e[r+1],attributes:{}},"/"===e[r+1]&&r++,t.push({type:"tagname",start:r+1});case 14:u.next=29;break;case 16:if("tag"!==a.type){u.next=28;break}if(">"!==e[r]){u.next=25;break}return"tagname"===a.type&&(n.name=e.substring(n.isStart?1:2,r)),u.next=21,Object.assign({type:"tag",value:e.substring(a.start,r+1)},n);case 21:t.pop(),v(t).start=r+1,u.next=26;break;case 25:" "!==e[r]&&"/"!==e[r]&&(t.push({type:"attribute",start:r}),t.push({type:"attributeName",start:r}));case 26:u.next=29;break;case 28:"tagname"===a.type?" "!==e[r]&&">"!==e[r]||(n.name=e.substring(a.start,r),t.pop(),">"===e[r]&&r--):"attributeName"===a.type?"="===e[r]&&(i=e.substring(a.start,r),t.pop(),v(t).name=i,'"'===e[r+1]&&(v(t).isQuoted=!0,r++),v(t).start=r+1):"attribute"===a.type&&(o=a.isQuoted?'"'===e[r]&&"\\"!==e[r-1]:" "===e[r]||">"===e[r])&&(n.attributes[a.name]=e.substring(a.start,r),t.pop(),a.isQuoted||">"!==e[r]||r--);case 29:u.next=3;break;case 31:if(s=v(t),!("document"===s.type&&s.start<r-1)){u.next=35;break}return u.next=35,{type:"text",value:e.substring(s.start,r)};case 35:case"end":return u.stop()}},p[0],this)}function a(e,t){var r,n,a,i,o,s,u;return h.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:r=!1,n=!0,a=!1,i=void 0,c.prev=4,o=t[Symbol.iterator]();case 6:if(n=(s=o.next()).done){c.next=22;break}if(u=s.value,"tag"!==u.type||!u.isStart||u.name!==e){c.next=12;break}r=!0,c.next=19;break;case 12:if("tag"!==u.type||u.isStart||u.name!==e){c.next=16;break}r=!1,c.next=19;break;case 16:if(r){c.next=19;break}return c.next=19,u;case 19:n=!0,c.next=6;break;case 22:c.next=28;break;case 24:c.prev=24,c.t0=c.catch(4),a=!0,i=c.t0;case 28:c.prev=28,c.prev=29,!n&&o.return&&o.return();case 31:if(c.prev=31,!a){c.next=34;break}throw i;case 34:return c.finish(31);case 35:return c.finish(28);case 36:case"end":return c.stop()}},p[1],this,[[4,24,28,36],[29,,31,35]])}function i(e){var t,r,n,a,i,o,s,u,c,f,l,v;return h.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:t=!1,r=!0,n=!1,a=void 0,h.prev=4,i=e[Symbol.iterator]();case 6:if(r=(o=i.next()).done){h.next=28;break}if(s=o.value,u=s.type,c=s.name,f=s.isStart,l=s.attributes,!t||"tag"!==u||"p"!==c||f){h.next=15;break}return h.next=12,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 12:t=!1,h.next=23;break;case 15:if("tag"!==u||!/^(chapter|verse)-num$/.test(l.class)){h.next=23;break}if(!t){h.next=19;break}return h.next=19,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 19:return t=!0,v=l.id.replace(/^v/,"vt"),h.next=23,{type:"tag",isStart:!0,value:'<span class="verse" id="'+v+'">',name:"span",attributes:{class:"verse",id:v}};case 23:return h.next=25,s;case 25:r=!0,h.next=6;break;case 28:h.next=34;break;case 30:h.prev=30,h.t0=h.catch(4),n=!0,a=h.t0;case 34:h.prev=34,h.prev=35,!r&&i.return&&i.return();case 37:if(h.prev=37,!n){h.next=40;break}throw a;case 40:return h.finish(37);case 41:return h.finish(34);case 42:case"end":return h.stop()}},p[2],this,[[4,30,34,42],[35,,37,41]])}function o(e){var t,r,n,a,i,o,s;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:t=[],r=!0,n=!1,a=void 0,u.prev=4,i=e[Symbol.iterator]();case 6:if(r=(o=i.next()).done){u.next=14;break}return s=o.value,u.next=10,Object.assign({stack:t.slice(0)},s);case 10:"tag"===s.type&&(s.isStart?t.push(s):t.pop());case 11:r=!0,u.next=6;break;case 14:u.next=20;break;case 16:u.prev=16,u.t0=u.catch(4),n=!0,a=u.t0;case 20:u.prev=20,u.prev=21,!r&&i.return&&i.return();case 23:if(u.prev=23,!n){u.next=26;break}throw a;case 26:return u.finish(23);case 27:return u.finish(20);case 28:case"end":return u.stop()}},p[3],this,[[4,16,20,28],[21,,23,27]])}function s(e){var t,r,n,a,i,o,s,u,c,f,b,d,y,m,x,g,k,w,S,E,L;return h.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:t=!1,r=!1,n=!1,a=!0,i=!1,o=void 0,h.prev=6,s=e[Symbol.iterator]();case 8:if(a=(u=s.next()).done){h.next=61;break}if(c=u.value,!n){h.next=14;break}return h.next=13,c;case 13:return h.abrupt("continue",58);case 14:if(f=c.type,b=c.name,d=c.isStart,y=c.value,m=c.attributes,x=c.stack,t||"tag"!==f||!/^(chapter|verse)-num$/.test(m.class)){h.next=20;break}return t=!0,h.next=19,c;case 19:return h.abrupt("continue",58);case 20:if(!t||r||"tag"!==f||"span"!==b||d){h.next=25;break}return r=!0,h.next=24,c;case 24:return h.abrupt("continue",58);case 25:if(!r||!v(x).attributes||"verse"!==v(x).attributes.class||"text"!==f){h.next=56;break}if(g=y.match(/^(\s*)(&#?[\w]+;)*(\w)(.*)/)){h.next=31;break}return h.next=30,c;case 30:return h.abrupt("continue",58);case 31:if(k=l(g,5),w=k[1],S=k[2],E=k[3],L=k[4],!w){h.next=35;break}return h.next=35,{type:"text",value:w};case 35:return h.next=37,{type:"tag",isStart:!0,value:'<span class="first-letter">',name:"span",attributes:{class:"first-letter"}};case 37:if(!S){h.next=42;break}return h.next=40,{type:"text",value:S};case 40:h.next=44;break;case 42:return h.next=44,{type:"text",value:E};case 44:return h.next=46,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 46:if(!L){h.next=54;break}if(!S){h.next=52;break}return h.next=50,{type:"text",value:E+L};case 50:h.next=54;break;case 52:return h.next=54,{type:"text",value:L};case 54:return n=!0,h.abrupt("continue",58);case 56:return h.next=58,c;case 58:a=!0,h.next=8;break;case 61:h.next=67;break;case 63:h.prev=63,h.t0=h.catch(6),i=!0,o=h.t0;case 67:h.prev=67,h.prev=68,!a&&s.return&&s.return();case 70:if(h.prev=70,!i){h.next=73;break}throw o;case 73:return h.finish(70);case 74:return h.finish(67);case 75:case"end":return h.stop()}},p[4],this,[[6,63,67,75],[68,,70,74]])}function u(e){var t,r,n,a,i,o,s;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:t=[null],r=!0,n=!1,a=void 0,u.prev=4,i=e[Symbol.iterator]();case 6:if(r=(o=i.next()).done){u.next=16;break}if(s=o.value,3!==t.length){u.next=11;break}return u.next=11,Object.assign({before:t[0],after:t[2]},t[1]);case 11:t.push(s),t.length>3&&t.shift();case 13:r=!0,u.next=6;break;case 16:u.next=22;break;case 18:u.prev=18,u.t0=u.catch(4),n=!0,a=u.t0;case 22:u.prev=22,u.prev=23,!r&&i.return&&i.return();case 25:if(u.prev=25,!n){u.next=28;break}throw a;case 28:return u.finish(25);case 29:return u.finish(22);case 30:return u.next=32,Object.assign({before:t[0],after:t[2]},t[1]);case 32:return u.next=34,Object.assign({before:t[1],after:null},t[2]);case 34:case"end":return u.stop()}},p[5],this,[[4,18,22,30],[23,,25,29]])}function c(e){var t,r,n,a,i,o,s,u;return h.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:t=!1,r=!0,n=!1,a=void 0,c.prev=4,i=e[Symbol.iterator]();case 6:if(r=(o=i.next()).done){c.next=33;break}if(s=o.value,"text"!==s.type||"("!==s.value[s.value.length-1]||!s.after.attributes||"copyright"!==s.after.attributes.class){c.next=13;break}return c.next=11,{type:"text",value:s.value.substring(0,s.value.length-1)};case 11:c.next=30;break;case 13:if("tag"!==s.type||"copyright"!==s.attributes.class){c.next=17;break}t=!0,c.next=30;break;case 17:if(!t){c.next=21;break}"tag"!==s.type||s.isStart||(t=!1),c.next=30;break;case 21:if("text"!==s.type||")"!==s.value[0]||!v(s.before.stack).attributes||"copyright"!==v(s.before.stack).attributes.class){c.next=28;break}if(!(u=s.value.substring(1))){c.next=26;break}return c.next=26,{type:"text",value:u};case 26:c.next=30;break;case 28:return c.next=30,s;case 30:r=!0,c.next=6;break;case 33:c.next=39;break;case 35:c.prev=35,c.t0=c.catch(4),n=!0,a=c.t0;case 39:c.prev=39,c.prev=40,!r&&i.return&&i.return();case 42:if(c.prev=42,!n){c.next=45;break}throw a;case 45:return c.finish(42);case 46:return c.finish(39);case 47:case"end":return c.stop()}},p[6],this,[[4,35,39,47],[40,,42,46]])}var f=r(20),h=r.n(f),l=function(){function e(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=[n,a,i,o,s,u,c].map(h.a.mark),v=function(e){return e[e.length-1]};t.a=function(e){return Array.from(c(u(s(o(i(a("script",a("object",n(e))))))))).map(function(e){return e.value}).join("")}},20:function(e,t,r){e.exports=r(21)},21:function(e,t,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(22),a)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},22:function(e,t){!function(t){"use strict";function r(e,t,r,n){var i=t&&t.prototype instanceof a?t:a,o=Object.create(i.prototype),s=new p(n||[]);return o._invoke=c(e,r,s),o}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function a(){}function i(){}function o(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function u(e){function t(r,a,i,o){var s=n(e[r],e,a);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&m.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,i,o)},function(e){t("throw",e,i,o)}):Promise.resolve(c).then(function(e){u.value=e,i(u)},o)}o(s.arg)}function r(e,r){function n(){return new Promise(function(n,a){t(e,r,n,a)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function c(e,t,r){var a=L;return function(i,o){if(a===j)throw new Error("Generator is already running");if(a===_){if("throw"===i)throw o;return b()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var u=f(s,r);if(u){if(u===P)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===L)throw a=_,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=j;var c=n(e,t,r);if("normal"===c.type){if(a=r.done?_:O,c.arg===P)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=_,r.method="throw",r.arg=c.arg)}}}function f(e,t){var r=e.iterator[t.method];if(r===d){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=d,f(e,t),"throw"===t.method))return P;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var a=n(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,P;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=d),t.delegate=null,P):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,P)}function h(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function l(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function p(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(h,this),this.reset(!0)}function v(e){if(e){var t=e[g];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(m.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=d,t.done=!0,t};return n.next=n}}return{next:b}}function b(){return{value:d,done:!0}}var d,y=Object.prototype,m=y.hasOwnProperty,x="function"===typeof Symbol?Symbol:{},g=x.iterator||"@@iterator",k=x.asyncIterator||"@@asyncIterator",w=x.toStringTag||"@@toStringTag",S="object"===typeof e,E=t.regeneratorRuntime;if(E)return void(S&&(e.exports=E));E=t.regeneratorRuntime=S?e.exports:{},E.wrap=r;var L="suspendedStart",O="suspendedYield",j="executing",_="completed",P={},J={};J[g]=function(){return this};var N=Object.getPrototypeOf,R=N&&N(N(v([])));R&&R!==y&&m.call(R,g)&&(J=R);var T=o.prototype=a.prototype=Object.create(J);i.prototype=T.constructor=o,o.constructor=i,o[w]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},E.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,o):(e.__proto__=o,w in e||(e[w]="GeneratorFunction")),e.prototype=Object.create(T),e},E.awrap=function(e){return{__await:e}},s(u.prototype),u.prototype[k]=function(){return this},E.AsyncIterator=u,E.async=function(e,t,n,a){var i=new u(r(e,t,n,a));return E.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},s(T),T[w]="Generator",T[g]=function(){return this},T.toString=function(){return"[object Generator]"},E.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},E.values=v,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(l),!e)for(var t in this)"t"===t.charAt(0)&&m.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=d)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,n&&(r.method="next",r.arg=d),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var o=m.call(a,"catchLoc"),s=m.call(a,"finallyLoc");if(o&&s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,P):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),P},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),l(r),P}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;l(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:v(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=d),P}}}(function(){return this}()||Function("return this")())},4:function(e,t,r){"use strict";r.d(t,"e",function(){return a}),r.d(t,"a",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"f",function(){return u}),r.d(t,"j",function(){return c}),r.d(t,"c",function(){return f}),r.d(t,"b",function(){return h}),r.d(t,"m",function(){return l}),r.d(t,"i",function(){return p}),r.d(t,"g",function(){return v}),r.d(t,"k",function(){return b}),r.d(t,"h",function(){return d}),r.d(t,"l",function(){return y}),r.d(t,"n",function(){return m});var n=function(){function e(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a={Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,Ruth:4,"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,Ezra:10,Nehemiah:13,Esther:10,Job:42,Psalm:150,Proverbs:31,Ecclesiastes:12,"Song of Solomon":8,Isaiah:66,Jeremiah:52,Lamentations:5,Ezekiel:48,Daniel:12,Hosea:14,Joel:3,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:4,Matthew:28,Mark:16,Luke:24,John:21,Acts:28,Romans:16,"1 Corinthians":16,"2 Corinthians":13,Galatians:6,Ephesians:6,Philippians:4,Colossians:4,"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,Titus:3,Philemon:1,Hebrews:13,James:5,"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,Jude:1,Revelation:22},i={Genesis:0,Exodus:50,Leviticus:90,Numbers:117,Deuteronomy:153,Joshua:187,Judges:211,Ruth:232,"1 Samuel":236,"2 Samuel":267,"1 Kings":291,"2 Kings":313,"1 Chronicles":338,"2 Chronicles":367,Ezra:403,Nehemiah:413,Esther:426,Job:436,Psalm:478,Proverbs:628,Ecclesiastes:659,"Song of Solomon":671,Isaiah:679,Jeremiah:745,Lamentations:797,Ezekiel:802,Daniel:850,Hosea:862,Joel:876,Amos:879,Obadiah:888,Jonah:889,Micah:893,Nahum:900,Habakkuk:903,Zephaniah:906,Haggai:909,Zechariah:911,Malachi:925,Matthew:929,Mark:957,Luke:973,John:997,Acts:1018,Romans:1046,"1 Corinthians":1062,"2 Corinthians":1078,Galatians:1091,Ephesians:1097,Philippians:1103,Colossians:1107,"1 Thessalonians":1111,"2 Thessalonians":1116,"1 Timothy":1119,"2 Timothy":1125,Titus:1129,Philemon:1132,Hebrews:1133,James:1146,"1 Peter":1151,"2 Peter":1156,"1 John":1159,"2 John":1164,"3 John":1165,Jude:1166,Revelation:1167},o=1189,s=Object.getOwnPropertyNames(i),u=function(e){return i[e.book]+e.chapter-1},c=function(e){var t=void 0,r=!0,n=!1,a=void 0;try{for(var o,u=s[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var c=o.value;if(!(i[c]<=e))break;t=c}}catch(e){n=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(n)throw a}}if(null==t)throw new Error("reference index is out of range");return{book:t,chapter:e-i[t]+1,verse:1}},f=function(e){var t=u(e);return c(((t-1)%o+o)%o)},h=function(e){return c((u(e)+1)%o)},l=function(e){var t=e.split(/\s/),r=n(t,3),a=r[0],i=r[1],o=r[2];if(!/^\d+$/.test(a)){var s=[a,i,""];i=s[0],o=s[1],a=s[2]}var u=null!=o?o.split(":"):[1,1],c=n(u,2),f=c[0],h=c[1];return{book:(a?a+" ":"")+i[0].toUpperCase()+i.slice(1).toLowerCase(),chapter:parseInt(f,10),verse:null==h?1:parseInt(h,10)}},p=function(e){return l(decodeURI(e.pathname).slice(1).replace(/\++/g," ").replace(/^\s+/,"").replace(/\s+$/,""))},v=function(e){return"/"+e.book+"+"+e.chapter},b=function(e){return"/"+e.book+"+"+e.chapter+":"+e.verse},d=function(e,t){return e.book===t.book&&e.chapter===t.chapter&&e.verse===t.verse},y=function(e){return"v"+(s.indexOf(e.book)+1).toLocaleString("en",{minimumIntegerDigits:2})+e.chapter.toLocaleString("en",{minimumIntegerDigits:3})+e.verse.toLocaleString("en",{minimumIntegerDigits:3})+"-1"},m=function(e){var t=e.match(/^vt?(\d\d)(\d\d\d)(\d\d\d)/);if(null==t)throw new Error("cannot convert "+e+" to reference");var r=n(t,4),a=r[1],i=r[2],o=r[3];return{book:s[parseInt(a,10)-1],chapter:parseInt(i,10),verse:parseInt(o,10)}}}});
//# sourceMappingURL=service-worker.2f920c4b.js.map