(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],f=0,u=[];f<o.length;f++)n=o[f],i[n]&&u.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=a("bb71");a("da64");s["a"].use(i["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-navigation-drawer",{staticClass:"hidden-sm-and-up",attrs:{absolute:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-list",[a("v-list-tile",[a("v-list-tile-title",{staticClass:"title"},[t._v("\n              "+t._s(t.appName)+"\n            ")])],1)],1)],1),a("v-list",t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.link}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),e.badge?a("v-badge",{attrs:{color:"red"}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(e.badge))]),a("span",[t._v(t._s(e.title))])]):a("v-list-tile-content",[t._v(t._s(e.title))])],1)}),1)],1),a("v-toolbar",{attrs:{color:"teal lighten-1",dark:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),a("v-toolbar-title",[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n          "+t._s(t.appName)+"\n        ")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.menuItems,function(e){return a("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),e.badge?a("v-badge",{attrs:{color:"red"}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(e.badge))]),a("span",[t._v(t._s(e.title))])]):a("span",[t._v(t._s(e.title))])],1)}),1)],1)],1),a("router-view")],1)},n=[],o={name:"App",components:{},data:function(){return{appName:"PHS-AQI",menuItems:[{icon:"map",title:"Map",link:"/map"}]}}},l=o,c=a("2877"),d=a("6544"),f=a.n(d),u=a("7496"),m=a("4ca6"),p=a("8336"),v=a("b0af"),b=a("132d"),h=a("8860"),j=a("ba95"),g=a("40fe"),_=a("5d23"),x=a("f774"),y=a("9910"),k=a("71d9"),w=a("2a7f"),C=a("706c"),V=Object(c["a"])(l,r,n,!1,null,null,null),S=V.exports;f()(V,{VApp:u["a"],VBadge:m["a"],VBtn:p["a"],VCard:v["a"],VIcon:b["a"],VList:h["a"],VListTile:j["a"],VListTileAction:g["a"],VListTileContent:_["a"],VListTileTitle:_["b"],VNavigationDrawer:x["a"],VSpacer:y["a"],VToolbar:k["a"],VToolbarItems:w["a"],VToolbarSideIcon:C["a"],VToolbarTitle:w["b"]});var z=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",lg4:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"green darken-2"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Online")]),a("span",[t._v(t._s(t.sensor_online)+" Device.")])])])],1)],1),a("v-flex",{attrs:{xs12:"",lg4:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"red darken-2"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Offline")]),a("span",[t._v(t._s(t.sensor_offline)+" Device.")])])])],1)],1),a("v-flex",{attrs:{xs12:"",lg4:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"teal lighten-1"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("All Sensor")]),a("span",[t._v(t._s(t.sensor_all)+" Device.")])])])],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",lg3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"teal lighten-1"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("PM2.5")]),a("span",[t._v(t._s(t.avg_pm25)+" ug/m3")])])])],1)],1),a("v-flex",{attrs:{xs12:"",lg3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"teal lighten-1"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("PM10")]),a("span",[t._v(t._s(t.avg_pm10)+" ug/m3")])])])],1)],1),a("v-flex",{attrs:{xs12:"",lg3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"teal lighten-1"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Temperature")]),a("span",[t._v(t._s(t.avg_temp)+" C")])])])],1)],1),a("v-flex",{attrs:{xs12:"",lg3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"teal lighten-1"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Humidity")]),a("span",[t._v(t._s(t.avg_humi)+" %")])])])],1)],1)],1)],1)],1)},M=[],O=a("bc3a"),P=a.n(O),A={data:function(){return{sensor_online:0,sensor_offline:0,sensor_all:0,avg_pm10:0,avg_pm25:0,avg_temp:0,avg_humi:0,ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},mounted:function(){var t=this;P.a.post("http://localhost:8081/api/v1/dashboard").then(function(e){t.sensor_online=e.data.Online,t.sensor_offline=e.data.Offline,t.sensor_all=e.data.All,t.avg_pm10=e.data.PM10,t.avg_pm25=e.data.PM25,t.avg_temp=e.data.Temp,t.avg_humi=e.data.Humi})}},N=A,I=a("12b2"),q=a("a523"),L=a("0e8f"),D=a("a722"),$=Object(c["a"])(N,T,M,!1,null,null,null);$.exports;f()($,{VCard:v["a"],VCardTitle:I["a"],VContainer:q["a"],VFlex:L["a"],VLayout:D["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("GmapMap",{staticStyle:{width:"100%",display:"block",height:"100%"},attrs:{center:t.mapCenter,zoom:t.mapZoom,"map-type-id":"roadmap",options:t.mapOptions}},t._l(t.markers,function(e,s){return a("GmapMarker",{key:s,attrs:{position:e.position,icon:t.getIcon(e),alignment:"center"},on:{click:function(e){return t.display(s)}}})}),1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{attrs:{color:t.dialog_color}},[a("span",{staticClass:"headline"},[t._v("Station : "+t._s(t.station.name)+" "+t._s(t.getStatus(t.station.pm25,t.station.dtm)))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:"black",disabled:!0,label:"PM2.5 µg./m3"},model:{value:t.station.pm25,callback:function(e){t.$set(t.station,"pm25",e)},expression:"station.pm25"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"PM10 µg./m3",required:""},model:{value:t.station.pm10,callback:function(e){t.$set(t.station,"pm10",e)},expression:"station.pm10"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"Temperature (°C)",required:""},model:{value:t.station.temp,callback:function(e){t.$set(t.station,"temp",e)},expression:"station.temp"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"Humidity (%)",required:""},model:{value:t.station.humi,callback:function(e){t.$set(t.station,"humi",e)},expression:"station.humi"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"Last Update",required:""},model:{value:t.station.dtm,callback:function(e){t.$set(t.station,"dtm",e)},expression:"station.dtm"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"black",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},U=[],F=a("59ad"),G=a.n(F),B=(a("7f7f"),a("ac6a"),a("755e")),H=a("c1df"),Z=a.n(H);s["a"].use(B,{load:{key:"AIzaSyAP643J8qbUflgApZNfsbfUeA1r3pZ5AGs",libraries:"places"}});var J={name:"map",data:function(){return{api_url:"https://www.phitloktoday.com/api/v1/station",markers:[],srcicon:[],mapOptions:{disableDefaultUI:!0},dialog:!1,dialog_color:"rgb(168,224,95)",text_color:"rgb(255,255,255)",station_index:0,station:{name:"--",serial:"--",pm25:"--",pm10:"--",temp:"--",humi:"--",dtm:"--"},bg_colors:["rgb(218,218,218)","rgb(47,155,0)","rgb(168,224,95)","rgb(255,215,0)","rgb(255,169,104)","rgb(254,106,105)"],txt_colors:["rgb(140,140,140)","rgb(106,236,50)","rgb(0,139,0)","rgb(165,127,35)","rgb(178,34,34)","\trgb(175,44,59)"],description:["--","ดีมาก","ดี","ปานกลาง","เริ่มมีผลต่อสุขภาพ","มีผลกระทบต่อสุขภาพ"],style_modal:"",sideNav:!1,menuItems:[],mapCenter:{lat:16.818225,lng:100.271653},mapZoom:11}},mounted:function(){this.loadStation(),setInterval(function(){this.loadStation()}.bind(this),6e4)},methods:{display:function(t){this.dialog=!0,this.station_index=t,this.station=this.markers[t],this.dialog_color=this.bg_colors[this.getScorePM25(this.station.pm25,this.station.dtm)],this.text_color=this.txt_colors[this.getScorePM25(this.station.pm25,this.station.dtm)]},loadStation:function(){var t=this;P.a.post(this.api_url).then(function(e){t.markers=[],e.data.forEach(function(e){t.markers.push({aqi:e.pm25,pm10:e.pm10,pm25:e.pm25,temp:e.temp,humi:e.humi,serial:e.serial,name:e.name,dtm:e.dtm,position:{lat:G()(e.lat),lng:G()(e.lng)}}),t.station=t.markers[t.station_index]})})},getIcon:function(t){return'data:image/svg+xml;utf-8,             <svg width="40px" height="40px" viewBox="0 0 54.4 54.4" xmlns="http://www.w3.org/2000/svg">                 <circle  fill="'+this.bg_colors[this.getScorePM25(t.pm25,t.dtm)]+'" cx="27.2" cy="27.2" r="27.2"/>                 <text dx="27" dy="35" text-anchor="middle" fill="'+this.txt_colors[this.getScorePM25(t.pm25,t.dtm)]+'" style="font-size:20px;  font-family: Arial, Verdana; font-weight: bold">'+this.getText(t.pm25,t.dtm)+"</text>            </svg>"},getScorePM25:function(t,e){var a=Z()(e),s=Z()(),i=s.diff(a),r=Z.a.duration(i).as("minutes");return r>5?0:t<=25?1:t<=50?2:t<=75?3:t<=150?4:5},getText:function(t,e){return 0==this.getScorePM25(t,e)?"--":t},getStatus:function(t,e){return 0==this.getScorePM25(t,e)?"(Offline)":" - คุณภาพอากาศ "+this.description[this.getScorePM25(t,e)]}}},Q=J,K=a("99d9"),R=a("549c"),W=a("169a"),X=a("2677"),Y=Object(c["a"])(Q,E,U,!1,null,null,null),tt=Y.exports;f()(Y,{VApp:u["a"],VBtn:p["a"],VCard:v["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:I["a"],VContainer:q["a"],VContent:R["a"],VDialog:W["a"],VFlex:L["a"],VLayout:D["a"],VSpacer:y["a"],VTextField:X["a"]}),s["a"].config.productionTip=!1,s["a"].use(z["a"]);var et=[{path:"/dashboard",component:tt},{path:"/",component:tt},{path:"/map",component:tt}],at=new z["a"]({routes:et});new s["a"]({router:at,render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.9c844a2b.js.map