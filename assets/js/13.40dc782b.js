(window.webpackJsonp=window.webpackJsonp||[]).push([[13,17],{314:function(t,e,a){},327:function(t,e,a){"use strict";a(314)},328:function(t,e,a){},342:function(t,e,a){"use strict";a.r(e);var r={name:"NavItem",props:{text:{type:String,required:!0},targetUrl:{type:String,required:!0},imgUrl:{type:String}}},n=(a(327),a(44)),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-item-container",attrs:{href:t.targetUrl}},[t.imgUrl?a("img",{staticClass:"nav-img",attrs:{src:t.imgUrl,alt:"logo"}}):t._e(),t._v(" "),a("span",{staticClass:"nav-text"},[t._v(t._s(t.text))])])}),[],!1,null,"1077965a",null);e.default=i.exports},349:function(t,e,a){"use strict";a(328)},384:function(t,e,a){"use strict";a.r(e);var r={name:"Nav",components:{NavItem:a(342).default},data:function(){return{navItems:[{text:"开发工具箱",targetUrl:"#toolkit",imgUrl:"https://img.alicdn.com/imgextra/i1/O1CN01VhzK3z1aO9E2HAu69_!!6000000003319-2-tps-38-48.png"},{text:"前端研发套件",targetUrl:"#suite"},{text:"海量物料",targetUrl:"#materials"}]}}},n=(a(349),a(44)),i=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"nav-container"},[e("nav",{staticClass:"nav-items"},this._l(this.navItems,(function(t){return e("nav-item",{key:t.text,staticClass:"nav-item",attrs:{text:t.text,targetUrl:t.targetUrl,imgUrl:t.imgUrl}})})),1)])}),[],!1,null,"fe7a7778",null);e.default=i.exports}}]);