(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],f=0,h=[];f<o.length;f++)n=o[f],i[n]&&h.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(h.length)h.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var a=r(t);return e(a)}function r(t){var a=s[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="4678"},"4fad":function(t,a,e){t.exports=e.p+"img/kk_kyra.55ffcdde.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=e("bb71");e("da64");s["a"].use(i["a"],{iconfont:"md"});var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-card",{attrs:{color:"teal lighten-4"}},[e("v-navigation-drawer",{staticClass:"hidden-sm-and-up",attrs:{absolute:""},model:{value:t.sideNav,callback:function(a){t.sideNav=a},expression:"sideNav"}},[e("v-toolbar",{attrs:{flat:""}},[e("v-list",[e("v-list-tile",[e("v-list-tile-title",{staticClass:"title"},[t._v("\n              "+t._s(t.appName)+"\n            ")])],1)],1)],1),e("v-list",t._l(t.menuItems,function(a){return e("v-list-tile",{key:a.title,attrs:{to:a.link}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icon))])],1),a.badge?e("v-badge",{attrs:{color:"red"}},[e("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(a.badge))]),e("span",[t._v(t._s(a.title))])]):e("v-list-tile-content",[t._v(t._s(a.title))])],1)}),1)],1),e("v-toolbar",{attrs:{color:"teal lighten-1",dark:""}},[e("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(a){a.stopPropagation(),t.sideNav=!t.sideNav}}}),e("v-toolbar-title",[e("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n          "+t._s(t.appName)+"\n        ")])],1),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{flat:"",href:"https://www.facebook.com/phitloktoday",target:"_blank"}},[e("v-icon",[t._v("fa-facebook")]),t._v(" Facebook ")],1),t._l(t.menuItems,function(a){return e("v-btn",{key:a.title,attrs:{flat:"",to:a.link}},[e("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),a.badge?e("v-badge",{attrs:{color:"red"}},[e("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(a.badge))]),e("span",[t._v(t._s(a.title))])]):e("span",[t._v(t._s(a.title))])],1)})],2)],1)],1),e("router-view")],1)},n=[],o={name:"App",components:{},data:function(){return{appName:"PHS-AQI",menuItems:[{icon:"map",title:"Map",link:"/map"},{icon:"supervised_user_circle",title:"ผู้สนับสนุน",link:"/sponser"}]}}},l=o,c=e("2877"),d=e("6544"),f=e.n(d),h=e("7496"),u=e("4ca6"),m=e("8336"),v=e("b0af"),g=e("132d"),p=e("8860"),b=e("ba95"),x=e("40fe"),j=e("5d23"),_=e("f774"),y=e("9910"),w=e("71d9"),k=e("2a7f"),V=e("706c"),C=Object(c["a"])(l,r,n,!1,null,null,null),A=C.exports;f()(C,{VApp:h["a"],VBadge:u["a"],VBtn:m["a"],VCard:v["a"],VIcon:g["a"],VList:p["a"],VListTile:b["a"],VListTileAction:x["a"],VListTileContent:j["a"],VListTileTitle:j["b"],VNavigationDrawer:_["a"],VSpacer:y["a"],VToolbar:w["a"],VToolbarItems:k["a"],VToolbarSideIcon:V["a"],VToolbarTitle:k["b"]});var z=e("8c4f"),I=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",[s("v-parallax",{attrs:{src:e("6f85"),height:"300"}},[s("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[s("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("ผู้สนับสนุนโครงการ #PHSAQI")])])],1)],1),s("section",[s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-card",{attrs:{"min-height":"230",width:"100%"}},[s("v-flex",{staticClass:"my-4",attrs:{xs12:"",sm12:""}},[s("div",{staticClass:"text-xs-center"},[s("h2",{staticClass:"headline"},[t._v('ในวันที่ฝุ่นปกคลุมเมือง "พิดโลก"')]),s("span",{staticClass:"subheading"},[t._v('\n                เราเห็นว่า "พิดโลก" ไม่มีอุปกรณ์สำหรับวัดฝุ่น PM2.5  จึงได้คิดโครงการ #PHSAQI เพื่อทำเครื่องวัดฝุ่นติดในเมือง "พิดโลก"'),s("br"),t._v("\n                โดยเป้าหมายเราต้องการติดให้ได้  10  จุด  จึงได้ประกาศหาผู้สนับสนุน"),s("br"),t._v("\n                ซึ่งก็มีผู้ใหญ่ใจดีในเมือง \"พิดโลก\" ของเราสนับสนุนโครงการมา นั่นก็คือ P'Axe และ P'Sine เจ้าของแบรนน้ำหอมมาดามฟิน"),s("br"),t._v("\n                นอกจากนี้ยังมี  N'Yeen และ N'Kukkai เจ้าของแบรน Kyra สนับสนุนมาเพิ่มเติม  ทำให้โครงการนี้สำเร็จได้\n              ")])]),s("v-spacer")],1),s("v-flex",{staticClass:"my-4",attrs:{xs12:"",sm12:""}},[s("div",{staticClass:"text-xs-center"},[s("h3",{staticClass:"subheading"},[t._v("ต้องขอขอบพระคุณผู้สนับสนุนทุกท่านเป็นอย่างสูงครับ")])])])],1)],1)],1),s("section",[s("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[s("v-container",{attrs:{"grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-card",{staticClass:"elevation-0 transparent"},[s("v-card-text",{staticClass:"text-xs-center"},[s("v-avatar",{attrs:{tile:t.tile,size:200,color:"grey lighten-4"}},[s("img",{attrs:{src:e("6f85"),alt:"avatar"}})])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline text-xs-center"},[t._v("P'Axe MadameFin")])]),s("v-card-text")],1)],1),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-card",{staticClass:"elevation-0 transparent"},[s("v-card-text",{staticClass:"text-xs-center"},[s("v-avatar",{attrs:{tile:t.tile,size:200,color:"grey lighten-4"}},[s("img",{attrs:{src:e("ecef"),alt:"avatar"}})])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v("P'Sine MadameFin")])]),s("v-card-text",{staticClass:"text-xs-center"})],1)],1),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-card",{staticClass:"elevation-0 transparent"},[s("v-card-text",{staticClass:"text-xs-center"},[s("v-avatar",{attrs:{tile:t.tile,size:200,color:"grey lighten-4"}},[s("img",{attrs:{src:e("4fad"),alt:"avatar"}})])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline text-xs-center"},[t._v("N'Kukkai Kyra")])]),s("v-card-text")],1)],1)],1)],1)],1)],1)])},P=[],q={},L=q,M=e("8212"),T=e("99d9"),S=e("12b2"),O=e("a523"),Q=e("0e8f"),B=e("a722"),N=e("8b9c"),H=Object(c["a"])(L,I,P,!1,null,null,null),D=H.exports;f()(H,{VAvatar:M["a"],VCard:v["a"],VCardText:T["b"],VCardTitle:S["a"],VContainer:O["a"],VFlex:Q["a"],VLayout:B["a"],VParallax:N["a"],VSpacer:y["a"]});var R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-content",[e("GmapMap",{staticStyle:{width:"100%",display:"block",height:"100%"},attrs:{center:t.mapCenter,zoom:t.mapZoom,"map-type-id":"roadmap",options:t.mapOptions}},t._l(t.markers,function(a,s){return e("GmapMarker",{key:s,attrs:{position:a.position,icon:t.getIcon(a),alignment:"center"},on:{click:function(a){return t.display(s)}}})}),1)],1),e("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-toolbar",{attrs:{color:"teal lighten-1 ",dark:""}},[e("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("close")])],1),e("v-toolbar-title",[t._v(t._s(t.station.name))])],1),e("v-card",[e("v-card-text",[e("div",{staticClass:"text-xs-center"},[e("h1",{staticClass:"mb-2 display-1 text-xs-center"},[t._v(t._s(t.getDescription(t.station)))])])]),e("v-layout",{attrs:{column:"",wrap:"","align-center":""}},[e("v-container",{attrs:{"grid-list-xl":""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{attrs:{xs6:"",md3:""}},[e("v-card-text",[e("img",{style:{cursor:"pointer"},attrs:{src:t.getIconPM25(t.station)}})])],1),e("v-flex",{attrs:{xs6:"",md3:""}},[e("v-card-text",[e("img",{style:{cursor:"pointer"},attrs:{src:t.getIconAQI(t.station)}})])],1),e("v-flex",{attrs:{xs6:"",md3:""}},[e("v-card-text",[e("img",{attrs:{src:t.getIconTemp(t.station)}})])],1),e("v-flex",{attrs:{xs6:"",md3:""}},[e("v-card-text",[e("img",{attrs:{src:t.getIconHumi(t.station)}})])],1)],1)],1)],1),e("v-layout",{attrs:{xs12:"",wrap:""}},[e("bar-chart",{staticStyle:{height:"40vh",width:"200vw"},attrs:{"chart-data":t.datacollection,options:t.chart_options}})],1),e("v-layout",{attrs:{xs12:"",wrap:""}},[e("v-flex",{attrs:{"text-xs-center":""}},[e("v-btn",{attrs:{round:"",color:"primary",dark:""},on:{click:t.getRawPM25}},[t._v("PM2.5")]),e("v-btn",{attrs:{round:"",color:"primary",dark:""},on:{click:t.getRawAQI}},[t._v("AQI")])],1)],1),e("v-layout",{attrs:{xs12:"",wrap:""}},[e("v-flex",{attrs:{"text-xs-center":""}},[e("v-chip",{attrs:{color:"secondary","text-color":"white"}},[t._v("Last Update : "+t._s(t.station.dtm)+" ")])],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{round:"",color:"black",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},E=[],U=e("59ad"),F=e.n(U),G=(e("7f7f"),e("ac6a"),e("755e")),Z=e("0284"),$=e.n(Z),K=e("1fca"),J=K["b"].reactiveProp,W={extends:K["a"],mixins:[J],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},Y=e("bc3a"),X=e.n(Y);s["a"].use($.a,{id:"UA-136776555-1"}),s["a"].use(G,{load:{key:"AIzaSyAP643J8qbUflgApZNfsbfUeA1r3pZ5AGs",libraries:"places"}});var tt={name:"map",components:{BarChart:W},data:function(){return{api_url:"https://www.phitloktoday.com/api/v1/",markers:[],srcicon:[],mapOptions:{disableDefaultUI:!0,gestureHandling:"greedy"},dialog:!1,dialog_color:"rgb(168,224,95)",text_color:"rgb(255,255,255)",station_index:0,station:{name:"--",serial:"--",pm25:"--",pm10:"--",temp:"--",humi:"--",dtm:"--"},bg_colors:["rgb(218,218,218)","rgb(47,155,0)","rgb(168,224,95)","rgb(255,215,0)","rgb(255,169,104)","rgb(254,106,105)"],txt_colors:["rgb(140,140,140)","rgb(106,236,50)","rgb(0,139,0)","rgb(165,127,35)","rgb(178,34,34)","\trgb(175,44,59)"],style_modal:"",menuItems:[],mapCenter:{lat:16.818225,lng:100.271653},mapZoom:12,aqi_mode:"th",display_mode:1,labels:["12am","3am","6am","9am","12pm","3pm","6pm","9pm","12am","3am","6am","9am","12pm","3pm","6pm","9pm"],value:[200,675,410,390,310,460,250,240,200,675,410,390,310,460,250,240],datacollection:null,chart_options:{maintainAspectRatio:!1,legend:{},scales:{xAxes:[{barPercentage:1,categoryPercentage:1,display:!1}],yAxes:[{barPercentage:1,categoryPercentage:1,ticks:{beginAtZero:!0}}]}}}},mounted:function(){this.loadStation(),setInterval(function(){this.loadStation()}.bind(this),6e4)},methods:{getStationAQIColor:function(t){return"bg"==t?this.bg_colors[this.getLevel(this.station)]:"color: "+this.txt_colors[this.getLevel(this.station)]},display:function(t){this.dialog=!0,this.station_index=t,this.station=this.markers[t],this.dialog_color=this.bg_colors[this.station.level],this.text_color=this.txt_colors[this.station.level],this.getRawPM25()},loadStation:function(){var t=this;X.a.post(this.api_url+"station").then(function(a){t.markers=[],a.data.forEach(function(a){t.markers.push({id:a.id,th_aqi:a.th_aqi,ch_aqi:a.ch_aqi,us_aqi:a.us_aqi,pm25_avg:a.pm25_avg,pm10:a.pm10,pm25:a.pm25,temp:a.temp,humi:a.humi,serial:a.serial,name:a.name,status:a.status,dtm:a.dtm,position:{lat:F()(a.lat),lng:F()(a.lng)}}),t.station=t.markers[t.station_index]})})},getIcon:function(t){return'data:image/svg+xml;utf-8,             <svg width="40px" height="40px" viewBox="0 0 54.4 54.4" xmlns="http://www.w3.org/2000/svg">                 <circle  fill="'+this.bg_colors[this.getLevel(t)]+'" cx="27.2" cy="27.2" r="27.2"/>                 <text dx="27" dy="35" text-anchor="middle" fill="'+this.txt_colors[this.getLevel(t)]+'" style="font-size:20px;  font-family: Arial, Verdana; font-weight: bold">'+this.getText(t)+"</text>            </svg>"},getIconPM25:function(t){return'data:image/svg+xml;utf-8,             <svg width="100%" height="100%" viewBox="0 0 54.4 54.4" xmlns="http://www.w3.org/2000/svg">                 <circle  fill="'+this.bg_colors[this.getLevel(t)]+'" cx="27.2" cy="27.2" r="27.2"/>                 <text dx="27" dy="30" text-anchor="middle" fill="'+this.txt_colors[this.getLevel(t)]+'" style="font-size:20px;  font-family: Arial, Verdana; font-weight: bold">'+t.pm25+'</text>                <text dx="27" dy="39" text-anchor="middle" fill="'+this.txt_colors[this.getLevel(t)]+'" style="font-size:5px;  font-family: Arial, Verdana; font-weight: bold">PM2.5 Realtime</text>            </svg>'},getIconAQI:function(t){return'data:image/svg+xml;utf-8,             <svg width="100%" height="100%" viewBox="0 0 54.4 54.4" xmlns="http://www.w3.org/2000/svg">                 <circle  fill="'+this.bg_colors[this.getLevelAQIVal(t)]+'" cx="27.2" cy="27.2" r="27.2"/>                 <text dx="27" dy="30" text-anchor="middle" fill="'+this.txt_colors[this.getLevelAQIVal(t)]+'" style="font-size:20px;  font-family: Arial, Verdana; font-weight: bold">'+t.th_aqi+'</text>                <text dx="27" dy="39" text-anchor="middle" fill="'+this.txt_colors[this.getLevelAQIVal(t)]+'" style="font-size:8px;  font-family: Arial, Verdana; font-weight: bold">TH AQI</text>            </svg>'},getIconTemp:function(t){return'data:image/svg+xml;utf-8,             <svg width="100%" height="100%" viewBox="0 0 54.4 54.4" xmlns="http://www.w3.org/2000/svg">                 <circle  fill="'+this.bg_colors[1]+'" cx="27.2" cy="27.2" r="27.2"/>                 <text dx="33" dy="30" text-anchor="middle" fill="'+this.txt_colors[1]+'" style="font-size:20px;  font-family: Arial, Verdana; font-weight: bold">'+t.temp+'</text>                <text dx="33" dy="39" text-anchor="middle" fill="'+this.txt_colors[1]+'" style="font-size:8px;  font-family: Arial, Verdana; font-weight: bold">°C</text>                <svg width="30%" height="46%" x="5" y="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thermometer-half" class="svg-inline--fa fa-thermometer-half fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="'+this.txt_colors[1]+'" d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"></path></svg>            </svg>'},getIconHumi:function(t){return'data:image/svg+xml;utf-8,             <svg width="100%" height="100%" viewBox="0 0 54.4 54.4" xmlns="http://www.w3.org/2000/svg">                 <circle  fill="'+this.bg_colors[1]+'" cx="27.2" cy="27.2" r="27.2"/>                 <text dx="35" dy="33" text-anchor="middle" fill="'+this.txt_colors[1]+'" style="font-size:20px;  font-family: Arial, Verdana; font-weight: bold">'+t.humi+'</text>                <text dx="35" dy="39" text-anchor="middle" fill="'+this.txt_colors[1]+'" style="font-size:5px;  font-family: Arial, Verdana; font-weight: bold">Humidity</text>                <svg width="48%" height="48%" x="0" y="15" viewBox="-64 0 512 512"><path fill="'+this.txt_colors[1]+'" d="m208.421875 7.546875c-8.398437-10.0625-24.359375-10.0625-32.757813 0-17.980468 21.53125-175.664062 213.253906-175.664062 312.410156 0 105.890625 86.152344 192.042969 192.042969 192.042969 105.894531 0 192.046875-86.152344 192.046875-192.042969 0-99.15625-157.6875-290.878906-175.667969-312.410156zm-16.378906 461.777344c-82.359375 0-149.367188-67.003907-149.367188-149.367188 0-63.628906 96.261719-198.015625 149.367188-264.894531 53.105469 66.878906 149.367187 201.265625 149.367187 264.894531 0 82.363281-67.007812 149.367188-149.367187 149.367188zm0 0"/><path fill="'+this.txt_colors[1]+'" d="m112.941406 347.527344 128.027344-128.027344 30.175781 30.175781-128.027343 128.027344zm0 0"/><path fill="'+this.txt_colors[1]+'" d="m170.707031 255.941406c0 11.785156-9.554687 21.339844-21.339843 21.339844-11.785157 0-21.335938-9.554688-21.335938-21.339844s9.550781-21.339844 21.335938-21.339844c11.785156 0 21.339843 9.554688 21.339843 21.339844zm0 0"/><path  fill="'+this.txt_colors[1]+'" d="m256.058594 341.292969c0 11.785156-9.554688 21.339843-21.339844 21.339843-11.78125 0-21.335938-9.554687-21.335938-21.339843 0-11.785157 9.554688-21.335938 21.335938-21.335938 11.785156 0 21.339844 9.550781 21.339844 21.335938zm0 0"/></svg>            </svg>'},getLevelPM25:function(t){return 0==t.status?0:this.getLevelPM25Val(t.pm25)},getLevelPM25Val:function(t){for(var a=[15.4,40.4,65.4,150.4,250.4,1e3],e=[25,37,50,90,1e3,1e3],s=[35,75,115,150,250,500],i=0;i<6;i++){if("ch"==this.aqi_mode&&t<=s[i])return i+1;if("us"==this.aqi_mode&&t<=a[i])return i+1;if("th"==this.aqi_mode&&t<=e[i])return i+1}return 5},getLevelAQI:function(t){return 0==t.status?0:this.getLevelAQIVal(t.us_aqi,t.th_aqi,t.ch_aqi)},getLevelAQIVal:function(t){for(var a=[25,50,100,200,500,0],e=[0,26,51,101,201,0],s=[50,100,150,200,300,500],i=[0,51,101,151,201,301],r=[50,100,150,200,300,500],n=[0,51,101,151,201,301],o=0;o<6;o++){if("ch"==this.aqi_mode&&t.ch_aqi>=i[o]&&t.ch_aqi<=s[o])return o+1;if("us"==this.aqi_mode&&t.us_aqi>=n[o]&&t.us_aqi<=r[o])return o+1;if("th"==this.aqi_mode&&t.th_aqi>=e[o]&&t.th_aqi<=a[o])return o+1}return 5},getText:function(t){return 0==t.status?"--":1==this.display_mode?t.pm25:this.getAQI(t)},track:function(){this.$ga.page("/map")},getLevel:function(t){return 1==this.display_mode?this.getLevelPM25(t):this.getLevelAQI(t)},getAQI:function(t){return"th"==this.aqi_mode?t.th_aqi:"ch"==this.aqi_mode?t.ch_aqi:"us"==this.aqi_mode?t.us_aqi:void 0},getDescription:function(t){var a=["--","ดีมาก","ดี","ปานกลาง","เริ่มมีผลต่อสุขภาพ","มีผลกระทบต่อสุขภาพ"],e=["--","ดีมาก","ดี","ปานกลาง","เริ่มมีผลต่อสุขภาพ","มีผลกระทบต่อสุขภาพ"],s=["--","ดีมาก","ดี","ปานกลาง","เริ่มมีผลต่อสุขภาพ","มีผลกระทบต่อสุขภาพ"];return 0==t.status?"(Offline)":"th"==this.aqi_mode?"คุณภาพอากาศ "+a[this.getLevel(t)]:"ch"==this.aqi_mode?"คุณภาพอากาศ "+s[this.getLevel(t)]:"us"==this.aqi_mode?"คุณภาพอากาศ "+e[this.getLevel(t)]:void 0},getBgColorWithPm:function(t){return this.bg_colors[this.getLevelPM25Val(t)]},getBarChartColor:function(t){var a=[];return t.forEach(function(t){a.push(this.getBgColorWithPm(t))}.bind(this)),a},getRandomInt:function(){return Math.floor(46*Math.random())+5},getRawPM25:function(){var t=this;X.a.post(this.api_url+"pm25avg1hr",{serial:this.station.serial}).then(function(a){t.datacollection={labels:a.data.Legend,datasets:[{label:"PM2.5 (ug/m3)",data:a.data.Val,backgroundColor:t.getBarChartColor(a.data.Val)}]}})},getRawAQI:function(){var t=this;X.a.post(this.api_url+"pm25avg24hr",{serial:this.station.serial}).then(function(a){t.datacollection={labels:a.data.Legend,datasets:[{label:"TH AQI",data:a.data.Val,backgroundColor:t.getBarChartColor(a.data.Val)}]}})}}},at=tt,et=e("cc20"),st=e("549c"),it=e("169a"),rt=Object(c["a"])(at,R,E,!1,null,null,null),nt=rt.exports;f()(rt,{VApp:h["a"],VBtn:m["a"],VCard:v["a"],VCardActions:T["a"],VCardText:T["b"],VChip:et["a"],VContainer:O["a"],VContent:st["a"],VDialog:it["a"],VFlex:Q["a"],VIcon:g["a"],VLayout:B["a"],VSpacer:y["a"],VToolbar:w["a"],VToolbarTitle:k["b"]}),s["a"].config.productionTip=!1,s["a"].use(z["a"]);var ot=[{path:"/sponser",component:D},{path:"/",component:nt},{path:"/map",component:nt}],lt=new z["a"]({routes:ot});new s["a"]({router:lt,render:function(t){return t(A)}}).$mount("#app")},"6f85":function(t,a,e){t.exports=e.p+"img/mdf_p_axe.911ec9c6.jpg"},ecef:function(t,a,e){t.exports=e.p+"img/mdf_p_sine2.0497407f.jpg"}});
//# sourceMappingURL=app.a725fc63.js.map