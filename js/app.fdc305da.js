(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4a3e8126"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"light-blue",dark:"",dense:"","collapse-on-scroll":"","clipped-right":""},scopedSlots:e._u([{key:"img",fn:function(t){var n=t.props;return[r("v-img",e._b({attrs:{gradient:"to top right, rgba(0,100,160,.8), rgba(0,160,100,.2)"}},"v-img",n,!1))]}},{key:"extension",fn:function(){return[r("v-tabs",{attrs:{"align-with-title":""}},[r("v-tab",{attrs:{to:"/"}},[e._v("Home")]),r("v-tab",{attrs:{to:"/about"}},[e._v("About")])],1)]},proxy:!0}])},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),r("v-toolbar-title",[e._v("Nika Stamp")]),r("v-spacer")],1),r("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-subheader",[e._v("Nika Stamp")]),r("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[r("v-list-item",{attrs:{to:"/"}},[r("v-list-item-icon",[r("v-icon",{attrs:{dense:""}},[e._v("mdi-home")])],1),r("v-list-item-title",[e._v("ホーム")])],1),r("v-list-item",{attrs:{to:"/about"}},[r("v-list-item-icon",[r("v-icon",{attrs:{dense:""}},[e._v("mdi-information")])],1),r("v-list-item-title",[e._v("このアプリについて")])],1),r("v-spacer")],1)],1)],1),r("v-main",{staticClass:"bg"},[r("router-view")],1)],1)},o=[],i=n["a"].extend({name:"App",data:function(){return{drawer:!1,group:null,isTabShow:!0}}}),s=i,c=r("2877"),u=r("6544"),l=r.n(u),p=r("7496"),d=r("40dc"),f=r("5bc1"),v=r("132d"),m=r("adda"),b=r("8860"),g=r("da13"),h=r("1baa"),w=r("34c3"),y=r("5d23"),_=r("f6c4"),V=r("f774"),k=r("2fa4"),j=r("e0c7"),x=r("71a3"),O=r("fe57"),S=r("2a7f"),C=Object(c["a"])(s,a,o,!1,null,null,null),T=C.exports;l()(C,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VIcon:v["a"],VImg:m["a"],VList:b["a"],VListItem:g["a"],VListItemGroup:h["a"],VListItemIcon:w["a"],VListItemTitle:y["a"],VMain:_["a"],VNavigationDrawer:V["a"],VSpacer:k["a"],VSubheader:j["a"],VTab:x["a"],VTabs:O["a"],VToolbarTitle:S["a"]});var A=r("9483");Object(A["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var L=r("8c4f"),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("StampList")},I=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"pa-5",attrs:{width:"100%"}},[r("v-card",{staticClass:"ma-auto",attrs:{width:"95%"}},[r("v-card-title",[e._v("スタンプ一覧")]),r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center",dense:""}},e._l(e.cards,(function(e){return r("v-col",{key:e,staticClass:"shrink"},[r("img",{attrs:{src:e}})])})),1)],1)],1)],1)},N=[],M={data:function(){return{cards:["stamps/yoshi.jpg","stamps/yoshi2.jpg"]}},components:{}},$=M,B=r("b0af"),H=r("99d9"),q=r("62ad"),F=r("a523"),J=r("0fd9"),D=Object(c["a"])($,E,N,!1,null,null,null),G=D.exports;l()(D,{VCard:B["a"],VCardTitle:H["a"],VCol:q["a"],VContainer:F["a"],VRow:J["a"]});var R=n["a"].extend({name:"Home",components:{StampList:G}}),z=R,K=Object(c["a"])(z,P,I,!1,null,"10917a03",null),Q=K.exports;n["a"].use(L["a"]);var U=[{path:"/",name:"Home",component:Q},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],W=new L["a"]({routes:U,mode:"hash"}),X=W,Y=r("f309");n["a"].use(Y["a"]);var Z=new Y["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:X,vuetify:Z,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.fdc305da.js.map