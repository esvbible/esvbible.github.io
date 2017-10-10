"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0fac516ff6b0b6300850044f47435c9f"],["/static/css/main.f811c545.css","f2326eca23f60edb64b03bad820a2ead"],["/static/js/main.d8daacbb.js","b12e1d4a33a0e5631dbbd62055d96208"],["/static/js/service-worker.e602bcce.js","2abf863ca22db783343861e9f52a1a37"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=294)}({12:function(e,n,t){"use strict";t.d(n,"e",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return u}),t.d(n,"f",function(){return s}),t.d(n,"i",function(){return c}),t.d(n,"c",function(){return l}),t.d(n,"b",function(){return h}),t.d(n,"l",function(){return f}),t.d(n,"h",function(){return d}),t.d(n,"j",function(){return v}),t.d(n,"g",function(){return m}),t.d(n,"k",function(){return p});var r=function(){function e(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o={Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,Ruth:4,"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,Ezra:10,Nehemiah:13,Esther:10,Job:42,Psalm:150,Proverbs:31,Ecclesiastes:12,"Song of Solomon":8,Isaiah:66,Jeremiah:52,Lamentations:5,Ezekiel:48,Daniel:12,Hosea:14,Joel:3,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:4,Matthew:28,Mark:16,Luke:24,John:21,Acts:28,Romans:16,"1 Corinthians":16,"2 Corinthians":13,Galatians:6,Ephesians:6,Philippians:4,Colossians:4,"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,Titus:3,Philemon:1,Hebrews:13,James:5,"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,Jude:1,Revelation:22},a={Genesis:0,Exodus:50,Leviticus:90,Numbers:117,Deuteronomy:153,Joshua:187,Judges:211,Ruth:232,"1 Samuel":236,"2 Samuel":267,"1 Kings":291,"2 Kings":313,"1 Chronicles":338,"2 Chronicles":367,Ezra:403,Nehemiah:413,Esther:426,Job:436,Psalm:478,Proverbs:628,Ecclesiastes:659,"Song of Solomon":671,Isaiah:679,Jeremiah:745,Lamentations:797,Ezekiel:802,Daniel:850,Hosea:862,Joel:876,Amos:879,Obadiah:888,Jonah:889,Micah:893,Nahum:900,Habakkuk:903,Zephaniah:906,Haggai:909,Zechariah:911,Malachi:925,Matthew:929,Mark:957,Luke:973,John:997,Acts:1018,Romans:1046,"1 Corinthians":1062,"2 Corinthians":1078,Galatians:1091,Ephesians:1097,Philippians:1103,Colossians:1107,"1 Thessalonians":1111,"2 Thessalonians":1116,"1 Timothy":1119,"2 Timothy":1125,Titus:1129,Philemon:1132,Hebrews:1133,James:1146,"1 Peter":1151,"2 Peter":1156,"1 John":1159,"2 John":1164,"3 John":1165,Jude:1166,Revelation:1167},i=1189,u=Object.getOwnPropertyNames(a),s=function(e){return a[e.book]+e.chapter-1},c=function(e){var n=void 0,t=!0,r=!1,o=void 0;try{for(var i,s=u[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var c=i.value;if(!(a[c]<=e))break;n=c}}catch(e){r=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(r)throw o}}if(null==n)throw new Error("reference index is out of range");return{book:n,chapter:e-a[n]+1,verse:1}},l=function(e){var n=s(e);return c(((n-1)%i+i)%i)},h=function(e){return c((s(e)+1)%i)},f=function(e){var n=e.split(/\s/),t=r(n,3),o=t[0],a=t[1],i=t[2];if(!/^\d+$/.test(o)){var u=[o,a,""];a=u[0],i=u[1],o=u[2]}var s=null!=i?i.split(":"):[1,1],c=r(s,2),l=c[0],h=c[1];return{book:(o?o+" ":"")+a[0].toUpperCase()+a.slice(1).toLowerCase(),chapter:parseInt(l,10),verse:null==h?1:parseInt(h,10)}},d=function(e){return f(decodeURI(e.pathname).slice(1).replace(/\++/g," ").replace(/^\s+/,"").replace(/\s+$/,""))},v=function(e){return"/"+e.book+"+"+e.chapter},m=function(e,n){return e.book===n.book&&e.chapter===n.chapter&&e.verse===n.verse},p=function(e){return"v"+(u.indexOf(e.book)+1).toLocaleString("en",{minimumIntegerDigits:2})+e.chapter.toLocaleString("en",{minimumIntegerDigits:3})+e.verse.toLocaleString("en",{minimumIntegerDigits:3})+"-1"}},294:function(e,n,t){e.exports=t(295)},295:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(39),o=t(12),a=function(e){return/^\/v2\/rest\/passageQuery/.test(e.pathname)},i=function(e){return Object(r.a)().get(Object(o.f)(Object(o.l)(e.searchParams.get("passage"))))},u=function(e){return e.text().then(function(n){var t=new URL(e.url),a=t.searchParams.get("passage"),i=Object(o.l)(a),u=Object(o.f)(i);Number.isNaN(u)||Object(r.a)().set(u,n)})};self.addEventListener("fetch",function(e){var n=new URL(e.request.url);a(n)&&e.respondWith(i(n).then(function(e){return new Response(e,{status:200})}).catch(function(n){var t=fetch(e.request);return t.then(function(e){return e.clone()}).then(u),t}))})},39:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a={},i="esv",u=["chapters","recents","preferences"],s=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u[0];r(this,e),this._db_name=n,this._store_name=t}return o(e,[{key:"db",value:function(){var e=this;return null==this._db&&(this._db=new Promise(function(n,t){var r=indexedDB.open(e._db_name,3);r.onerror=function(){return t(r.error)},r.onupgradeneeded=function(){u.forEach(function(e){try{r.result.deleteObjectStore(e)}catch(e){}r.result.createObjectStore(e)})},r.onsuccess=function(){n(r.result)}})),this._db}},{key:"transact",value:function(e,n){var t=this;return this.db().then(function(r){return new Promise(function(o,a){var i=r.transaction(t._store_name,e);i.oncomplete=o,i.onerror=function(){return a(i.error)},n(i.objectStore(t._store_name))})})}},{key:"get",value:function(e){var n;return this.transact("readonly",function(t){return n=t.get(e)}).then(function(){if("undefined"===typeof n.result)throw new Error("Key "+e+" not found");return n.result})}},{key:"set",value:function(e,n){return this.transact("readwrite",function(t){return t.put(n,e)})}},{key:"all",value:function(){var e=[];return this.transact("readonly",function(n){n.openCursor().onsuccess=function(n){var t=n.target.result;t&&(e.push({key:t.key,value:t.value}),t.continue())}}).then(function(){return e})}}]),e}();n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.db,t=void 0===n?i:n,r=e.store,o=void 0===r?u[0]:r,c=t+"|"+o;return null==a[c]&&(a[c]=new s(t,o)),a[c]}}});
//# sourceMappingURL=service-worker.e602bcce.js.map