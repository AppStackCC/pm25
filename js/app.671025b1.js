(function(t){function e(e){for(var o,i,l=e[0],s=e[1],c=e[2],p=0,u=[];p<l.length;p++)i=l[p],r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={app:0},n=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),r=a("bb71");a("da64");o["a"].use(r["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:"",color:"green",dark:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("PHS-AQI")])]),a("v-spacer")],1),a("v-content",[a("GmapMap",{staticStyle:{width:"100%",display:"block",height:"100%"},attrs:{center:{lat:16.818225,lng:100.271653},zoom:11,"map-type-id":"roadmap",options:t.mapOptions}},t._l(t.markers,function(e,o){return a("GmapMarker",{key:o,attrs:{position:e.position,icon:t.getIcon(e),alignment:"center"},on:{click:function(e){return t.display(o)}}})}),1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{attrs:{color:t.dialog_color}},[a("span",{staticClass:"headline"},[t._v("Station : "+t._s(t.station.name))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:"black",disabled:!0,label:"PM2.5 µg./m3"},model:{value:t.station.pm25,callback:function(e){t.$set(t.station,"pm25",e)},expression:"station.pm25"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"PM10 µg./m3",required:""},model:{value:t.station.pm10,callback:function(e){t.$set(t.station,"pm10",e)},expression:"station.pm10"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"Temperature (°C)",required:""},model:{value:t.station.temp,callback:function(e){t.$set(t.station,"temp",e)},expression:"station.temp"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"Humidity (%)",required:""},model:{value:t.station.humi,callback:function(e){t.$set(t.station,"humi",e)},expression:"station.humi"}})],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{color:t.text_color,disabled:!0,label:"Last Update",required:""},model:{value:t.station.dtm,callback:function(e){t.$set(t.station,"dtm",e)},expression:"station.dtm"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"black",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},i=[],l=a("59ad"),s=a.n(l),c=(a("7f7f"),a("ac6a"),a("755e")),d=a("bc3a"),p=a.n(d);o["a"].use(c,{load:{key:"AIzaSyAP643J8qbUflgApZNfsbfUeA1r3pZ5AGs",libraries:"places"}});var u={name:"App",data:function(){return{api_url:"https://www.phitloktoday.com/api/v1/station",markers:[],srcicon:[],mapOptions:{disableDefaultUI:!0},dialog:!1,dialog_color:"rgb(168,224,95)",text_color:"rgb(255,255,255)",station_index:0,station:{name:"--",serial:"--",pm25:"--",pm10:"--",temp:"--",humi:"--",dtm:"--"},bg_colors:["rgb(47,155,0)","rgb(168,224,95)","rgb(255,215,0)","rgb(255,169,104)","rgb(254,106,105)"],txt_colors:["rgb(106,236,50)","rgb(0,139,0)","rgb(165,127,35)","rgb(178,34,34)","\trgb(175,44,59)"],description:["ดีมาก","ดี","ปานกลาง","เริ่มมีผลต่อสุขภาพ","มีผลกระทบต่อสุขภาพ"],style_modal:""}},mounted:function(){this.loadStation(),setInterval(function(){this.loadStation()}.bind(this),6e4)},methods:{display:function(t){this.dialog=!0,this.station_index=t,this.station=this.markers[t],this.dialog_color=this.bg_colors[this.getScorePM25(this.station.pm25)],this.text_color=this.txt_colors[this.getScorePM25(this.station.pm25)]},loadStation:function(){var t=this;p.a.post(this.api_url).then(function(e){t.markers=[],e.data.forEach(function(e){t.markers.push({aqi:e.pm25,pm10:e.pm10,pm25:e.pm25,temp:e.temp,humi:e.humi,serial:e.serial,name:e.name,dtm:e.dtm,position:{lat:s()(e.lat),lng:s()(e.lng)}}),t.station=t.markers[t.station_index]})})},getIcon:function(t){return'data:image/svg+xml;utf-8,       <svg width="40px" height="40px" viewBox="0 0 54.4 54.4" xmlns="http://www.w3.org/2000/svg">         <circle  fill="'+this.bg_colors[this.getScorePM25(t.pm25)]+'" cx="27.2" cy="27.2" r="27.2"/>         <text dx="27" dy="35" text-anchor="middle" fill="'+this.txt_colors[this.getScorePM25(t.pm25)]+'" style="font-size:20px;  font-family: Arial, Verdana; font-weight: bold">'+t.pm25+"</text>    </svg>"},getScorePM25:function(t){return t<=25?0:t<=50?1:t<=75?2:t<=150?3:4}}},m=u,f=a("2877"),b=a("6544"),g=a.n(b),h=a("7496"),v=a("8336"),x=a("b0af"),_=a("99d9"),y=a("12b2"),k=a("a523"),w=a("549c"),S=a("169a"),V=a("0e8f"),P=a("a722"),M=a("9910"),O=a("2677"),A=a("71d9"),C=a("2a7f"),T=Object(f["a"])(m,n,i,!1,null,null,null),j=T.exports;g()(T,{VApp:h["a"],VBtn:v["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:y["a"],VContainer:k["a"],VContent:w["a"],VDialog:S["a"],VFlex:V["a"],VLayout:P["a"],VSpacer:M["a"],VTextField:O["a"],VToolbar:A["a"],VToolbarTitle:C["a"]}),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.671025b1.js.map