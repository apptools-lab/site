(window.webpackJsonp=window.webpackJsonp||[]).push([[10,14],{325:function(t,e,i){},334:function(t,e,i){},339:function(t,e,i){var a=i(0),s=i(2),n=i(4),c=i(48),r=[].slice,o=function(t){return function(e,i){var a=arguments.length>2,s=a?r.call(arguments,2):void 0;return t(a?function(){(n(e)?e:Function(e)).apply(this,s)}:e,i)}};a({global:!0,bind:!0,forced:/MSIE .\./.test(c)},{setTimeout:o(s.setTimeout),setInterval:o(s.setInterval)})},340:function(t,e,i){"use strict";i(325)},345:function(t,e,i){"use strict";i.r(e);i(339);var a={name:"Carousel",data:function(){return{carouselItems:[{adjective:"极简",text:"的开发流程",message:"我们将创建、调试和发布项目的操作通过插件的方式集成到了常用的编辑器中，让项目的开发流程更简单。",img:"https://img.alicdn.com/imgextra/i4/O1CN01l3sg4x1SYD03hbh6A_!!6000000002258-1-tps-900-562.gif"},{adjective:"友好",text:"的开发体验",message:"我们提供了基于物料的可视化开发方式，区块组装生成页面，一键添加物料到代码，这对于新人来说非常友好。",img:"https://img.alicdn.com/imgextra/i1/O1CN01UwLdFD1PU8dJXVTNg_!!6000000001843-1-tps-900-562.gif"},{adjective:"强大",text:"的编码辅助",message:"代码补全，定义预览与跳转，代码片段，代码重构的多重助力，让前端工程开发更轻松。不但支持 JavaScript 文件，对样式文件同样有效。",img:"https://img.alicdn.com/imgextra/i1/O1CN01p9WfQv1NddcJo0iaA_!!6000000001593-1-tps-900-562.gif"},{adjective:"详尽",text:"的代码分析",message:"非常快速的获取多维度检测报告，支持一键快速修复问题。帮助团队实现代码规范统一，提升和改善代码质量。并为阿里内部工程提供数据分析服务。",img:"https://img.alicdn.com/imgextra/i3/O1CN01JXVSwK1vbz7c7FDyU_!!6000000006192-1-tps-900-562.gif"},{adjective:"完善",text:"的编程指标",message:"我们自动追踪您在编辑器中的编码行为，通过对收集到的数据进行量化，以帮助您从数据中学习，更高效地编写代码，提高生产力。",img:"https://img.alicdn.com/imgextra/i1/O1CN01yZHsOP1wqvexiEz5r_!!6000000006360-1-tps-900-562.gif"}],activeIndex:0,timeId:null}},mounted:function(){this.createTick()},methods:{createTick:function(){var t=this;this.timeId&&clearInterval(this.timeId),this.timeId=setInterval((function(){t.activeIndex=(t.activeIndex+1)%5}),3e4)},handleChangeActive:function(t){this.activeIndex=t,this.createTick()},handleAdd:function(){this.activeIndex=(this.activeIndex+1)%5,this.createTick()},handleDesc:function(){this.activeIndex=(this.activeIndex-1+5)%5,this.createTick()}}},s=(i(340),i(46)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel-container"},[i("nav",{staticClass:"nav-items"},t._l(t.carouselItems,(function(e,a){return i("li",{key:a,staticClass:"nav-item",class:t.activeIndex===a?"nav-item-active":"",on:{click:function(e){return t.handleChangeActive(a)}}},[t._v("\n      "+t._s(e.adjective)+t._s(t.activeIndex===a?e.text:"")+"\n    ")])})),0),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("p",{key:t.carouselItems[t.activeIndex].message,staticClass:"carousel-message"},[t._v("\n      "+t._s(t.carouselItems[t.activeIndex].message)+"\n    ")])]),t._v(" "),i("div",{staticClass:"carousel-wrapper"},[i("button",{staticClass:"carousel-button left iconfont",on:{click:t.handleDesc}},[t._v("")]),t._v(" "),i("div",{staticClass:"carousel-slide-container"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("img",{key:t.carouselItems[t.activeIndex].message,attrs:{src:t.carouselItems[t.activeIndex].img,alt:"carousel-img"}})])],1),t._v(" "),i("button",{staticClass:"carousel-button right iconfont",on:{click:t.handleAdd}},[t._v("")])])],1)}),[],!1,null,"633a369d",null);e.default=n.exports},351:function(t,e,i){"use strict";i(334)},362:function(t,e,i){"use strict";i.r(e);var a={name:"Pack",components:{Carousel:i(345).default}},s=(i(351),i(46)),n=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"suite-container"},[e("a",{attrs:{name:"suite",id:"suite"}}),this._v(" "),e("div",{staticClass:"suite-wrapper"},[e("carousel")],1)])}),[],!1,null,"73bd2d46",null);e.default=n.exports}}]);