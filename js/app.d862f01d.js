(function(e){function n(n){for(var r,o,a=n[0],i=n[1],l=n[2],s=0,d=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==c[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1eb2fc52":"9dbae8a5","chunk-2260ef2a":"01c41fd6","chunk-24e06710":"2f07fb65","chunk-2cb5d4cc":"049aa6ef","chunk-2d0c84d3":"0d904e79","chunk-347eb860":"400fcd72","chunk-35b12120":"df509dd3","chunk-e44d7d0a":"ef583f4a","chunk-759ed1ae":"aee5ef35","chunk-3ec3857c":"939a0f95","chunk-b68110d8":"02597b06","chunk-75d8faf2":"19a8058e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1eb2fc52":1,"chunk-2260ef2a":1,"chunk-24e06710":1,"chunk-2cb5d4cc":1,"chunk-35b12120":1,"chunk-e44d7d0a":1,"chunk-3ec3857c":1,"chunk-b68110d8":1,"chunk-75d8faf2":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1eb2fc52":"d410f742","chunk-2260ef2a":"a7ec7596","chunk-24e06710":"db51e5c2","chunk-2cb5d4cc":"02bb7579","chunk-2d0c84d3":"31d6cfe0","chunk-347eb860":"31d6cfe0","chunk-35b12120":"d20a1179","chunk-e44d7d0a":"2f639dfd","chunk-759ed1ae":"31d6cfe0","chunk-3ec3857c":"dce97252","chunk-b68110d8":"831c9384","chunk-75d8faf2":"a9649b46"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],s=l.getAttribute("data-href");if(s===r||s===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),t(u)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var d=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/thunder/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,c,u){var a=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["i"])(a)])}var c={mounted:function(){this.$router.push("/channels/chat/main")}};c.render=o;var u=c,a=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),i=[{path:"/",redirect:"/channels/chat/main"},{path:"/channels/",name:"Chanels",component:function(){return t.e("chunk-24e06710").then(t.bind(null,"7f94"))},children:[{path:"chat/:id",component:function(){return Promise.all([t.e("chunk-347eb860"),t.e("chunk-35b12120")]).then(t.bind(null,"ee79"))}},{path:"friends",component:function(){return t.e("chunk-75d8faf2").then(t.bind(null,"4c2e"))}},{path:"call/:id",component:function(){return Promise.all([t.e("chunk-759ed1ae"),t.e("chunk-b68110d8")]).then(t.bind(null,"748c"))}},{path:"groups",component:function(){return t.e("chunk-2d0c84d3").then(t.bind(null,"53fe"))}},{path:"groups/call/:id",component:function(){return Promise.all([t.e("chunk-759ed1ae"),t.e("chunk-3ec3857c")]).then(t.bind(null,"5841"))}},{path:"groups/chat/:id",component:function(){return Promise.all([t.e("chunk-347eb860"),t.e("chunk-e44d7d0a")]).then(t.bind(null,"cc37"))}},{path:"add/groups",component:function(){return t.e("chunk-2cb5d4cc").then(t.bind(null,"8d0e"))}}],meta:{requiresAuth:!0},redirect:"/channels/chat/main"},{path:"/login",name:"Login",component:function(){return t.e("chunk-2260ef2a").then(t.bind(null,"dd7b"))},meta:{requiresAuth:!1}},{path:"/register",name:"Register",component:function(){return t.e("chunk-1eb2fc52").then(t.bind(null,"7803"))},meta:{requiresAuth:!1}}],l=Object(a["a"])({history:Object(a["b"])(),routes:i});function s(){return!(!window.localStorage.getItem("token")||""==window.localStorage.getItem("token"))}l.beforeEach((function(e,n,t){e.meta.requiresAuth&&!s()?t({name:"Login"}):!e.meta.requiresAuth&&s()?t(n):t()}));var d=l,f=t("5502"),h=t("bc3a"),p=t.n(h),b=Object(f["a"])({state:{navbarOpen:!1,navigationSelected:"chat",lastChatId:"main",chattingUser:{},mainApiUrl:"https://54.242.209.92:3000",peerObject:{host:"54.242.209.92",port:"3010"},user:{image:"default.png"},friendsPetitons:[],inCall:!1,micMuted:!1,userInCall:!1,currentGroup:{name:"",desc:""}},getters:{navbarState:function(e){return e.navbarOpen},navigation:function(e){return e.navigationSelected},lastChatId:function(e){return e.lastChatId},api:function(e){return e.mainApiUrl},peerObject:function(e){return e.peerObject},user:function(e){return e.user},ChattingUser:function(e){return e.chattingUser},friendsPetitons:function(e){return e.friendsPetitons},inCall:function(e){return e.inCall},userInCall:function(e){return e.userInCall},micMuted:function(e){return e.micMuted},currentGroup:function(e){return e.currentGroup}},mutations:{navbarToggle:function(e){e.navbarOpen=!e.navbarOpen},setNavbar:function(e,n){e.navbarOpen=n},navigateTo:function(e,n){e.navigationSelected=n},setChatId:function(e,n){e.lastChatId=n},setUser:function(e,n){e.user=n},userEnterCall:function(e){e.userInCall=!0},setCall:function(e,n){e.inCall=n},setChattingUser:function(e,n){e.chattingUser=n},toggleMicMuted:function(e){e.micMuted=!e.micMuted},currentGroup:function(e,n){e.currentGroup=n},refreshUser:function(e){console.log("refresh user"),p.a.post(e.mainApiUrl+"/user/getUser",{token:window.localStorage.token},{headers:{Authorization:"Bearer ".concat(window.localStorage.token)}}).then((function(n){e.user=n.data.user})).catch((function(e){console.error(e)})).then((function(){p.a.get(e.mainApiUrl+"/FriendRequest/",{headers:{Authorization:"Bearer ".concat(window.localStorage.token)}}).then((function(n){e.friendsPetitons=n.data.FriendRequest})).catch((function(e){console.error(e)})).then((function(){}))}))}},actions:{},modules:{}}),g=t("5132"),m=t.n(g),k=t("8e27"),v=t.n(k),w=t("2106"),y=t.n(w),O=t("9483");Object(O["a"])("".concat("/thunder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("bb35"),t("b1bf");var C=Object(r["e"])(u);C.use(b),C.use(new m.a({debug:!0,connection:v()("https://54.242.209.92:3000"),vuex:{store:b,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),C.use(y.a,p.a),C.use(d),C.mount("#app"),console.log("config app",C.config)},b1bf:function(e,n,t){},bb35:function(e,n,t){}});
//# sourceMappingURL=app.d862f01d.js.map