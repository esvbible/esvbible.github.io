"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","5777db40637c129c9bf7c0931f3028f0"],["/static/css/main.27614218.css","5ce07f75bfd34e715936f80238b22817"],["/static/js/0.18980860.chunk.js","249aed9536578f589ef393157ab9df50"],["/static/js/main.e404a52e.js","e32551298284b84c330a8980331673ab"],["/static/js/service-worker.3107c7b3.js","30b0c6f29103534b03dd4a978887296b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=156)}({12:function(t,e,r){"use strict";r.d(e,"a",function(){return u}),r.d(e,"c",function(){return s}),r.d(e,"b",function(){return h}),r.d(e,"d",function(){return b});var n=r(5),a=r(13),o=r(3),i=r(14),u=new URL("https://api.esv.org/v3/passage/html/"),s=function(t,e){return fetch(t,e).then(function(t){if(!t.ok)throw new Error(t.url+" failed with "+t.status);return t})},c=function(t){var e=new URL("",u);return e.searchParams.set("q",t.book+" "+t.chapter),e},f=function(t){var e=t.book.toLowerCase().replace(/ /g,"-");return new URL("/api/v1/kjv/"+e+"/"+t.chapter+".html",window.location)},h=function(t){return s(t,{headers:{authorization:"Token cecc457af593de97294057073c9be28d7ffdfaf9",accept:"application/json"}})},l=function(t,e){var r=t.getState().preferences.translation,o="kjv"===r?s(f(e)).then(function(t){return t.text()}):h(c(e)).then(function(t){var e=t.headers.get(a.b);return t.json().then(function(t){return t.passages[0]}).then(function(t){return e?t:Object(i.a)(t)})});return o.then(function(a){return t.dispatch(Object(n.f)(r,e,a))}),o},p=function(t,e){return null!=t.chapters[t.preferences.translation][e]},b=function(t,e){var r=t.getState(),n=Object(o.g)(e);p(r,n)||l(t,e),n>0&&!p(r,n-1)&&l(t,Object(o.d)(e)),n<o.a&&!p(r,n+1)&&l(t,Object(o.b)(e))}},13:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a});var n="x-from-db",a="x-from-service-worker"},14:function(t,e,r){"use strict";function n(t){var e,r,n,a,o,i,u,s,c;return h.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:e=[{type:"document",start:0}],r=-1,n={};case 3:if(!(r++<t.length)){f.next=32;break}if(a=b(e),"document"!==a.type){f.next=16;break}if("<"!==t[r]){f.next=14;break}if(a.start===r){f.next=10;break}return f.next=10,{type:"text",value:t.substring(a.start,r)};case 10:e.push({type:"tag",start:r}),n={isStart:"/"!==t[r+1],attributes:{}},"/"===t[r+1]&&r++,e.push({type:"tagname",start:r+1});case 14:f.next=30;break;case 16:if("tag"!==a.type){f.next=29;break}if(">"!==t[r]){f.next=26;break}return"tagname"===a.type&&(n.name=t.substring(n.isStart?1:2,r)),f.next=21,Object.assign({type:"tag",value:t.substring(a.start,r+1)},n);case 21:e.pop(),o=b(e),o.start=r+1,f.next=27;break;case 26:" "!==t[r]&&"/"!==t[r]&&(e.push({type:"attribute",start:r}),e.push({type:"attributeName",start:r}));case 27:f.next=30;break;case 29:"tagname"===a.type?" "!==t[r]&&">"!==t[r]||(n.name=t.substring(a.start,r),e.pop(),">"===t[r]&&r--):"attributeName"===a.type?"="===t[r]&&(i=t.substring(a.start,r),e.pop(),u=b(e),u.name=i,'"'===t[r+1]&&(u.isQuoted=!0,r++),u.start=r+1):"attribute"===a.type&&(s=a.isQuoted?'"'===t[r]&&"\\"!==t[r-1]:" "===t[r]||">"===t[r])&&(n.attributes[a.name]=t.substring(a.start,r),e.pop(),a.isQuoted||">"!==t[r]||r--);case 30:f.next=3;break;case 32:if(c=b(e),!("document"===c.type&&c.start<r-1)){f.next=36;break}return f.next=36,{type:"text",value:t.substring(c.start,r)};case 36:case"end":return f.stop()}},p[0],this)}function a(t,e){var r,n,a,o,i,u,s;return h.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:r=!1,n=!0,a=!1,o=void 0,c.prev=4,i=e[Symbol.iterator]();case 6:if(n=(u=i.next()).done){c.next=22;break}if(s=u.value,"tag"!==s.type||!s.isStart||s.name!==t){c.next=12;break}r=!0,c.next=19;break;case 12:if("tag"!==s.type||s.isStart||s.name!==t){c.next=16;break}r=!1,c.next=19;break;case 16:if(r){c.next=19;break}return c.next=19,s;case 19:n=!0,c.next=6;break;case 22:c.next=28;break;case 24:c.prev=24,c.t0=c.catch(4),a=!0,o=c.t0;case 28:c.prev=28,c.prev=29,!n&&i.return&&i.return();case 31:if(c.prev=31,!a){c.next=34;break}throw o;case 34:return c.finish(31);case 35:return c.finish(28);case 36:case"end":return c.stop()}},p[1],this,[[4,24,28,36],[29,,31,35]])}function o(t){var e,r,n,a,o,i,u,s;return h.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:e=!1,r=!0,n=!1,a=void 0,c.prev=4,o=t[Symbol.iterator]();case 6:if(r=(i=o.next()).done){c.next=27;break}if(u=i.value,!e||"tag"!==u.type||"p"!==u.name||u.isStart){c.next=14;break}return c.next=11,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 11:e=!1,c.next=22;break;case 14:if("tag"!==u.type||!/^(chapter|verse)-num$/.test(u.attributes.class)){c.next=22;break}if(!e){c.next=18;break}return c.next=18,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 18:return e=!0,s=u.attributes.id.replace(/^v/,"vt"),c.next=22,{type:"tag",isStart:!0,value:'<span class="verse" id="'+s+'">',name:"span",attributes:{class:"verse",id:s}};case 22:return c.next=24,u;case 24:r=!0,c.next=6;break;case 27:c.next=33;break;case 29:c.prev=29,c.t0=c.catch(4),n=!0,a=c.t0;case 33:c.prev=33,c.prev=34,!r&&o.return&&o.return();case 36:if(c.prev=36,!n){c.next=39;break}throw a;case 39:return c.finish(36);case 40:return c.finish(33);case 41:case"end":return c.stop()}},p[2],this,[[4,29,33,41],[34,,36,40]])}function i(t){var e,r,n,a,o,i,u;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=[],r=!0,n=!1,a=void 0,s.prev=4,o=t[Symbol.iterator]();case 6:if(r=(i=o.next()).done){s.next=19;break}if(u=i.value,"tag"!==u.type){s.next=13;break}return s.next=11,{type:"tag",name:u.name,isStart:u.isStart,attributes:u.attributes,value:u.value,stack:e.slice(0)};case 11:s.next=15;break;case 13:return s.next=15,Object.assign({},u,{stack:e.slice(0)});case 15:"tag"===u.type&&(u.isStart?e.push(u):e.pop());case 16:r=!0,s.next=6;break;case 19:s.next=25;break;case 21:s.prev=21,s.t0=s.catch(4),n=!0,a=s.t0;case 25:s.prev=25,s.prev=26,!r&&o.return&&o.return();case 28:if(s.prev=28,!n){s.next=31;break}throw a;case 31:return s.finish(28);case 32:return s.finish(25);case 33:case"end":return s.stop()}},p[3],this,[[4,21,25,33],[26,,28,32]])}function u(t){var e,r,n,a,o,i,u,s,c,f,v,d,y,m,g,x,w,k,O,j,S;return h.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:e=!1,r=!1,n=!1,a=!0,o=!1,i=void 0,h.prev=6,u=t[Symbol.iterator]();case 8:if(a=(s=u.next()).done){h.next=61;break}if(c=s.value,!n){h.next=14;break}return h.next=13,c;case 13:return h.abrupt("continue",58);case 14:if(f=c.type,v=c.name,d=c.isStart,y=c.value,m=c.attributes,g=c.stack,e||"tag"!==f||!/^(chapter|verse)-num$/.test(m.class)){h.next=20;break}return e=!0,h.next=19,c;case 19:return h.abrupt("continue",58);case 20:if(!e||r||"tag"!==f||"span"!==v&&"b"!==v||d){h.next=25;break}return r=!0,h.next=24,c;case 24:return h.abrupt("continue",58);case 25:if(!r||!b(g).attributes||"verse"!==b(g).attributes.class||"text"!==f){h.next=56;break}if(x=y.match(/^(\s*)(&#?[\w]+;)*(\w)(.*)/)){h.next=31;break}return h.next=30,c;case 30:return h.abrupt("continue",58);case 31:if(w=l(x,5),k=w[1],O=w[2],j=w[3],S=w[4],!k){h.next=35;break}return h.next=35,{type:"text",value:k};case 35:return h.next=37,{type:"tag",isStart:!0,value:'<span class="first-letter">',name:"span",attributes:{class:"first-letter"}};case 37:if(!O){h.next=42;break}return h.next=40,{type:"text",value:O};case 40:h.next=44;break;case 42:return h.next=44,{type:"text",value:j};case 44:return h.next=46,{type:"tag",isStart:!1,value:"</span>",name:"span",attributes:{}};case 46:if(!S){h.next=54;break}if(!O){h.next=52;break}return h.next=50,{type:"text",value:j+S};case 50:h.next=54;break;case 52:return h.next=54,{type:"text",value:S};case 54:return n=!0,h.abrupt("continue",58);case 56:return h.next=58,c;case 58:a=!0,h.next=8;break;case 61:h.next=67;break;case 63:h.prev=63,h.t0=h.catch(6),o=!0,i=h.t0;case 67:h.prev=67,h.prev=68,!a&&u.return&&u.return();case 70:if(h.prev=70,!o){h.next=73;break}throw i;case 73:return h.finish(70);case 74:return h.finish(67);case 75:case"end":return h.stop()}},p[4],this,[[6,63,67,75],[68,,70,74]])}function s(t){var e,r,n,a,o,i,u;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=[null],r=!0,n=!1,a=void 0,s.prev=4,o=t[Symbol.iterator]();case 6:if(r=(i=o.next()).done){s.next=16;break}if(u=i.value,3!==e.length){s.next=11;break}return s.next=11,Object.assign({before:e[0],after:e[2]},e[1]);case 11:e.push(u),e.length>3&&e.shift();case 13:r=!0,s.next=6;break;case 16:s.next=22;break;case 18:s.prev=18,s.t0=s.catch(4),n=!0,a=s.t0;case 22:s.prev=22,s.prev=23,!r&&o.return&&o.return();case 25:if(s.prev=25,!n){s.next=28;break}throw a;case 28:return s.finish(25);case 29:return s.finish(22);case 30:return s.next=32,Object.assign({before:e[0],after:e[2]},e[1]);case 32:return s.next=34,Object.assign({before:e[1],after:null},e[2]);case 34:case"end":return s.stop()}},p[5],this,[[4,18,22,30],[23,,25,29]])}function c(t){var e,r,n,a,o,i,u,s;return h.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:e=!1,r=!0,n=!1,a=void 0,c.prev=4,o=t[Symbol.iterator]();case 6:if(r=(i=o.next()).done){c.next=33;break}if(u=i.value,"text"!==u.type||"("!==u.value[u.value.length-1]||!u.after.attributes||"copyright"!==u.after.attributes.class){c.next=13;break}return c.next=11,{type:"text",value:u.value.substring(0,u.value.length-1)};case 11:c.next=30;break;case 13:if("tag"!==u.type||"copyright"!==u.attributes.class){c.next=17;break}e=!0,c.next=30;break;case 17:if(!e){c.next=21;break}"tag"!==u.type||u.isStart||(e=!1),c.next=30;break;case 21:if("text"!==u.type||")"!==u.value[0]||!b(u.before.stack).attributes||"copyright"!==b(u.before.stack).attributes.class){c.next=28;break}if(!(s=u.value.substring(1))){c.next=26;break}return c.next=26,{type:"text",value:s};case 26:c.next=30;break;case 28:return c.next=30,u;case 30:r=!0,c.next=6;break;case 33:c.next=39;break;case 35:c.prev=35,c.t0=c.catch(4),n=!0,a=c.t0;case 39:c.prev=39,c.prev=40,!r&&o.return&&o.return();case 42:if(c.prev=42,!n){c.next=45;break}throw a;case 45:return c.finish(42);case 46:return c.finish(39);case 47:case"end":return c.stop()}},p[6],this,[[4,35,39,47],[40,,42,46]])}var f=r(21),h=r.n(f),l=function(){function t(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=[n,a,o,i,u,s,c].map(h.a.mark),b=function(t){return t[t.length-1]};e.a=function(t){return Array.from(c(s(u(i(o(a("script",a("object",n(t))))))))).map(function(t){return t.value}).join("")}},15:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,r){n(this,t),this._db_metadata=e,this._store_name=r}return a(t,[{key:"db",value:function(){var t=this;return null==this._db&&(this._db=new Promise(function(e,r){var n=indexedDB.open(t._db_metadata.name,t._db_metadata.version);n.onerror=function(){return r(n.error)},n.onupgradeneeded=function(){t._db_metadata.stores.forEach(function(t){try{n.result.deleteObjectStore(t)}catch(t){}n.result.createObjectStore(t)})},n.onsuccess=function(){e(n.result)}})),this._db}},{key:"transact",value:function(t,e){var r=this;return this.db().then(function(n){return new Promise(function(a,o){var i=n.transaction(r._store_name,t);i.oncomplete=a,i.onerror=function(){return o(i.error)},e(i.objectStore(r._store_name))})})}},{key:"get",value:function(t){var e;return this.transact("readonly",function(r){return e=r.get(t)}).then(function(){if("undefined"===typeof e.result){var r="";throw t.hasOwnProperty("toString")&&(r=t.toString()),new Error("Key "+r+" not found")}return e.result})}},{key:"set",value:function(t,e){return this.transact("readwrite",function(r){return r.put(e,t)})}},{key:"all",value:function(){var t=[];return this.transact("readonly",function(e){e.openCursor().onsuccess=function(e){var r=e.target.result;r&&(t.push({key:r.key,value:r.value}),r.continue())}}).then(function(){return t})}}]),t}();e.a=o},156:function(t,e,r){t.exports=r(157)},157:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0});var a=r(13),o=r(158),i=r(159),u=r(3),s=r(14),c=r(12),f=function(t){return c.a.hostname===t.hostname||/^\/api/.test(t.pathname)},h=function(t,e,r){return t.toString(),JSON.stringify(e),null},l=function(t){return Object(i.a)().get(Object(u.g)(Object(u.c)(t.pathname)))},p=function(t,e){var r=Object(u.c)(t.pathname),n=Object(u.g)(r);h(t,r),Object(i.a)().set(n,e)},b=function(t){var e=t.searchParams.get("q");return Object(o.a)().get(Object(u.g)(Object(u.k)(e)))},v=function(t,e){var r=t.searchParams.get("q"),n=Object(u.k)(r),a=Object(u.g)(n);Number.isNaN(a)||(h(t,n),Object(o.a)().set(a,e))},d=function(t){return new Response(t,{status:200,headers:n({},a.b,!0)})};self.addEventListener("fetch",function(t){var e=t.request,r=new URL(e.url),o=c.a.hostname===r.hostname;if(f(r)){return(o?b(r):l(r)).then(function(t){var e;if(o){var i={passages:[t]};t=JSON.stringify(i)}return r.pathname,r.search,new Response(t,{status:200,headers:(e={},n(e,a.a,!0),n(e,a.b,!0),e)})}).catch(function(t){return r.pathname,r.search,o?Object(c.b)(r).then(function(t){return t.json()}).then(function(t){return t.passages[0]}).then(s.a).then(function(t){var e={passages:[t]};return v(r,t),d(JSON.stringify(e))}):Object(c.c)(r).then(function(t){return t.text()}).then(function(t){return p(r,t),d(t)})})}})},158:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r(15),u=void 0,s="chapters",c={name:"bible-esv",version:2,stores:[s]},f=function(t){function e(){return n(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,c,s))}return o(e,t),e}(i.a);e.a=function(){return null==u&&(u=new f),u}},159:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r(15),u=void 0,s="chapters",c={name:"bible-kjv",version:1,stores:[s]},f=function(t){function e(){return n(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,c,s))}return o(e,t),e}(i.a);e.a=function(){return null==u&&(u=new f),u}},21:function(t,e,r){t.exports=r(22)},22:function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(23),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},23:function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof a?e:a,i=Object.create(o.prototype),u=new p(n||[]);return i._invoke=c(t,r,u),i}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function a(){}function o(){}function i(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,a,o,i){var u=n(t[r],t,a);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&m.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(c).then(function(t){s.value=t,o(s)},i)}i(u.arg)}function r(t,r){function n(){return new Promise(function(n,a){e(t,r,n,a)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function c(t,e,r){var a=S;return function(o,i){if(a===E)throw new Error("Generator is already running");if(a===L){if("throw"===o)throw i;return v()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var s=f(u,r);if(s){if(s===P)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===S)throw a=L,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=E;var c=n(t,e,r);if("normal"===c.type){if(a=r.done?L:_,c.arg===P)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=L,r.method="throw",r.arg=c.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===d){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=d,f(t,e),"throw"===e.method))return P;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var a=n(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,P;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=d),e.delegate=null,P):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,P)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function l(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function b(t){if(t){var e=t[x];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=d,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:d,done:!0}}var d,y=Object.prototype,m=y.hasOwnProperty,g="function"===typeof Symbol?Symbol:{},x=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",k=g.toStringTag||"@@toStringTag",O="object"===typeof t,j=e.regeneratorRuntime;if(j)return void(O&&(t.exports=j));j=e.regeneratorRuntime=O?t.exports:{},j.wrap=r;var S="suspendedStart",_="suspendedYield",E="executing",L="completed",P={},J={};J[x]=function(){return this};var N=Object.getPrototypeOf,R=N&&N(N(b([])));R&&R!==y&&m.call(R,x)&&(J=R);var T=i.prototype=a.prototype=Object.create(J);o.prototype=T.constructor=i,i.constructor=o,i[k]=o.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,k in t||(t[k]="GeneratorFunction")),t.prototype=Object.create(T),t},j.awrap=function(t){return{__await:t}},u(s.prototype),s.prototype[w]=function(){return this},j.AsyncIterator=s,j.async=function(t,e,n,a){var o=new s(r(t,e,n,a));return j.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},u(T),T[k]="Generator",T[x]=function(){return this},T.toString=function(){return"[object Generator]"},j.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},j.values=b,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(l),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=d),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var i=m.call(a,"catchLoc"),u=m.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,P):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),P},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),l(r),P}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;l(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:b(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=d),P}}}(function(){return this}()||Function("return this")())},3:function(t,e,r){"use strict";r.d(e,"f",function(){return a}),r.d(e,"a",function(){return i}),r.d(e,"e",function(){return u}),r.d(e,"g",function(){return s}),r.d(e,"l",function(){return c}),r.d(e,"d",function(){return f}),r.d(e,"b",function(){return h}),r.d(e,"k",function(){return l}),r.d(e,"c",function(){return p}),r.d(e,"j",function(){return b}),r.d(e,"h",function(){return v}),r.d(e,"m",function(){return d}),r.d(e,"i",function(){return y}),r.d(e,"n",function(){return m}),r.d(e,"o",function(){return g});var n=function(){function t(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a={Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,Ruth:4,"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,Ezra:10,Nehemiah:13,Esther:10,Job:42,Psalm:150,Proverbs:31,Ecclesiastes:12,"Song of Solomon":8,Isaiah:66,Jeremiah:52,Lamentations:5,Ezekiel:48,Daniel:12,Hosea:14,Joel:3,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:4,Matthew:28,Mark:16,Luke:24,John:21,Acts:28,Romans:16,"1 Corinthians":16,"2 Corinthians":13,Galatians:6,Ephesians:6,Philippians:4,Colossians:4,"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,Titus:3,Philemon:1,Hebrews:13,James:5,"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,Jude:1,Revelation:22},o={Genesis:0,Exodus:50,Leviticus:90,Numbers:117,Deuteronomy:153,Joshua:187,Judges:211,Ruth:232,"1 Samuel":236,"2 Samuel":267,"1 Kings":291,"2 Kings":313,"1 Chronicles":338,"2 Chronicles":367,Ezra:403,Nehemiah:413,Esther:426,Job:436,Psalm:478,Proverbs:628,Ecclesiastes:659,"Song of Solomon":671,Isaiah:679,Jeremiah:745,Lamentations:797,Ezekiel:802,Daniel:850,Hosea:862,Joel:876,Amos:879,Obadiah:888,Jonah:889,Micah:893,Nahum:900,Habakkuk:903,Zephaniah:906,Haggai:909,Zechariah:911,Malachi:925,Matthew:929,Mark:957,Luke:973,John:997,Acts:1018,Romans:1046,"1 Corinthians":1062,"2 Corinthians":1078,Galatians:1091,Ephesians:1097,Philippians:1103,Colossians:1107,"1 Thessalonians":1111,"2 Thessalonians":1116,"1 Timothy":1119,"2 Timothy":1125,Titus:1129,Philemon:1132,Hebrews:1133,James:1146,"1 Peter":1151,"2 Peter":1156,"1 John":1159,"2 John":1164,"3 John":1165,Jude:1166,Revelation:1167},i=1189,u=Object.getOwnPropertyNames(o),s=function(t){return o[t.book]+t.chapter-1},c=function(t){var e=void 0,r=!0,n=!1,a=void 0;try{for(var i,s=u[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var c=i.value;if(!(o[c]<=t))break;e=c}}catch(t){n=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}if(null==e)throw new Error("reference index is out of range");return{book:e,chapter:t-o[e]+1,verse:1}},f=function(t){var e=s(t);return c(((e-1)%i+i)%i)},h=function(t){return c((s(t)+1)%i)},l=function(t){var e=t.split(/\s/),r=n(e,3),a=r[0],o=r[1],i=r[2];if(!/^\d+$/.test(a)){var u=[a,o,""];o=u[0],i=u[1],a=u[2]}var s=null!=i?i.split(":"):[1,1],c=n(s,2),f=c[0],h=c[1];return{book:(a?a+" ":"")+o[0].toUpperCase()+o.slice(1).toLowerCase(),chapter:parseInt(f,10),verse:null==h?1:parseInt(h,10)}},p=function(t){var e=t.split("/"),r=n(e,6),a=r[4],o=r[5],i=u.filter(function(t){return t.toLowerCase().replace(/ /g,"-")===a})[0],s=parseInt(o.split(".")[0],10);if(!i||Number.isNaN(s))throw new Error("Could not convert "+t+" to a reference.");return{book:i,chapter:s,verse:1}},b=function(t){return l(decodeURI(t.pathname).slice(1).replace(/\++/g," ").replace(/^\s+/,"").replace(/\s+$/,""))},v=function(t){return"/"+t.book+"+"+t.chapter},d=function(t){return"/"+t.book+"+"+t.chapter+":"+t.verse},y=function(t,e){return t.book===e.book&&t.chapter===e.chapter&&t.verse===e.verse},m=function(t){return"v"+(u.indexOf(t.book)+1).toLocaleString("en",{minimumIntegerDigits:2})+t.chapter.toLocaleString("en",{minimumIntegerDigits:3})+t.verse.toLocaleString("en",{minimumIntegerDigits:3})+"-1"},g=function(t){var e=t.match(/^vt?(\d\d)(\d\d\d)(\d\d\d)/);if(null==e)throw new Error("cannot convert "+t+" to reference");var r=n(e,4),a=r[1],o=r[2],i=r[3];return{book:u[parseInt(a,10)-1],chapter:parseInt(o,10),verse:parseInt(i,10)}}},5:function(t,e,r){"use strict";r.d(e,"f",function(){return n}),r.d(e,"a",function(){return a}),r.d(e,"h",function(){return o}),r.d(e,"d",function(){return i}),r.d(e,"e",function(){return u}),r.d(e,"g",function(){return s}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return f});var n=function(t,e,r){return{type:"set-chapter-text",translation:t,reference:e,text:r}},a=function(t){return{type:"add-recent",reference:t}},o=function(t){return{type:"set-recents",recents:t}},i=function(t){return{type:"enable-focus-mode",enabled:t}},u=function(t){return{type:"enable-night-mode",enabled:t}},s=function(t){return{type:"set-preferences",preferences:t}},c=function(t){return{type:"add-toast",text:t}},f=function(){return{type:"confirm-focus-mode"}}}});
//# sourceMappingURL=service-worker.3107c7b3.js.map