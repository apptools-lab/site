(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,7,8,10,11,13,14,16,17,18],{308:function(t,e,i){},309:function(t,e,i){},310:function(t,e,i){},311:function(t,e,i){},314:function(t,e,i){"use strict";i.r(e);var s={name:"QuickStart",props:{link:{type:String,require:!0},text:{type:String,require:!1,default:"快速开始"}}},a=(i(315),i(44)),n=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"quick-start",attrs:{href:this.link}},[this._v(this._s(this.text))])}),[],!1,null,"41c747b0",null);e.default=n.exports},315:function(t,e,i){"use strict";i(308)},317:function(t,e,i){},318:function(t,e,i){},319:function(t,e,i){},320:function(t,e,i){},323:function(t,e,i){var s=i(0),a=i(3),n=i(67),c=[].slice,r=function(t){return function(e,i){var s=arguments.length>2,a=s?c.call(arguments,2):void 0;return t(s?function(){("function"==typeof e?e:Function(e)).apply(this,a)}:e,i)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(n)},{setTimeout:r(a.setTimeout),setInterval:r(a.setInterval)})},324:function(t,e,i){"use strict";i(309)},325:function(t,e,i){"use strict";i(310)},326:function(t,e,i){"use strict";i(311)},329:function(t,e,i){"use strict";i.r(e);i(323);var s={name:"Carousel",data:function(){return{carouselItems:[{adjective:"极简",text:"的开发流程",message:"我们将创建、调试和发布项目的操作通过插件的方式集成到了常用的编辑器中，让项目的开发流程更简单。",img:"https://img.alicdn.com/imgextra/i4/O1CN01l3sg4x1SYD03hbh6A_!!6000000002258-1-tps-900-562.gif"},{adjective:"友好",text:"的开发体验",message:"我们提供了基于物料的可视化开发方式，区块组装生成页面，一键添加物料到代码，这对于新人来说非常友好。",img:"https://img.alicdn.com/imgextra/i1/O1CN01UwLdFD1PU8dJXVTNg_!!6000000001843-1-tps-900-562.gif"},{adjective:"强大",text:"的编码辅助",message:"代码补全，定义预览与跳转，代码片段，代码重构的多重助力，让前端工程开发更轻松。不但支持 JavaScript 文件，对样式文件同样有效。",img:"https://img.alicdn.com/imgextra/i1/O1CN01p9WfQv1NddcJo0iaA_!!6000000001593-1-tps-900-562.gif"},{adjective:"详尽",text:"的代码分析",message:"非常快速的获取多维度检测报告，支持一键快速修复问题。帮助团队实现代码规范统一，提升和改善代码质量。并为阿里内部工程提供数据分析服务。",img:"https://img.alicdn.com/imgextra/i3/O1CN01JXVSwK1vbz7c7FDyU_!!6000000006192-1-tps-900-562.gif"},{adjective:"完善",text:"的编程指标",message:"我们自动追踪您在编辑器中的编码行为，通过对收集到的数据进行量化，以帮助您从数据中学习，更高效地编写代码，提高生产力。",img:"https://img.alicdn.com/imgextra/i1/O1CN01yZHsOP1wqvexiEz5r_!!6000000006360-1-tps-900-562.gif"}],activeIndex:0,timeId:null}},mounted:function(){this.createTick()},methods:{createTick:function(){var t=this;this.timeId&&clearInterval(this.timeId),this.timeId=setInterval((function(){t.activeIndex=(t.activeIndex+1)%5}),3e4)},handleChangeActive:function(t){this.activeIndex=t,this.createTick()},handleAdd:function(){this.activeIndex=(this.activeIndex+1)%5,this.createTick()},handleDesc:function(){this.activeIndex=(this.activeIndex-1+5)%5,this.createTick()}}},a=(i(324),i(44)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel-container"},[i("nav",{staticClass:"nav-items"},t._l(t.carouselItems,(function(e,s){return i("li",{key:s,staticClass:"nav-item",class:t.activeIndex===s?"nav-item-active":"",on:{click:function(e){return t.handleChangeActive(s)}}},[t._v("\n      "+t._s(e.adjective)+t._s(t.activeIndex===s?e.text:"")+"\n    ")])})),0),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("p",{key:t.carouselItems[t.activeIndex].message,staticClass:"carousel-message"},[t._v("\n      "+t._s(t.carouselItems[t.activeIndex].message)+"\n    ")])]),t._v(" "),i("div",{staticClass:"carousel-wrapper"},[i("button",{staticClass:"carousel-button left iconfont",on:{click:t.handleDesc}},[t._v("")]),t._v(" "),i("div",{staticClass:"carousel-slide-container"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("img",{key:t.carouselItems[t.activeIndex].message,attrs:{src:t.carouselItems[t.activeIndex].img,alt:"carousel-img"}})])],1),t._v(" "),i("button",{staticClass:"carousel-button right iconfont",on:{click:t.handleAdd}},[t._v("")])])],1)}),[],!1,null,"633a369d",null);e.default=n.exports},330:function(t,e,i){"use strict";i.r(e);var s={name:"NavLinks",props:{navItems:{type:Array,require:!0}}},a=(i(325),i(44)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"nav-container"},[i("ul",{staticClass:"nav-items"},t._l(t.navItems,(function(e,s){return i("li",{key:s,staticClass:"nav-item"},[i("img",{staticClass:"nav-icon",attrs:{src:e.imgSource,alt:"icon"}}),t._v(" "),i("a",{staticClass:"nav-link",attrs:{href:e.linkSource}},[t._v(t._s(e.text))])])})),0)])}),[],!1,null,"d162b94a",null);e.default=n.exports},331:function(t,e,i){"use strict";i.r(e);var s={name:"LinkItem",props:{item:{type:Object}}},a=(i(326),i(44)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"link-item-container"},[t.item.img?i("img",{staticStyle:{"max-width":"16px","max-height":"16px"},attrs:{src:t.item.img,alt:"icon"}}):t._e(),t._v(" "),i("a",{attrs:{href:t.item.url}},[t._v(t._s(t.item.text))])])}),[],!1,null,"10966a78",null);e.default=n.exports},334:function(t,e,i){"use strict";i(317)},335:function(t,e,i){"use strict";i(318)},336:function(t,e,i){"use strict";i(319)},337:function(t,e,i){},338:function(t,e,i){"use strict";i(320)},339:function(t,e,i){},345:function(t,e,i){"use strict";i.r(e);var s={components:{QuickStart:i(314).default}},a=(i(334),i(44)),n=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"logo-container"},[e("img",{staticClass:"logo",attrs:{src:"https://img.alicdn.com/imgextra/i4/O1CN01AvqMOu1sYpY1j8xaI_!!6000000005779-2-tps-574-204.png",alt:"logo"}}),this._v(" "),this._m(0),this._v(" "),e("quick-start",{staticClass:"quick-start",attrs:{text:"安装 AppWorks",link:"vscode:extension/iceworks-team.iceworks"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"describe"},[e("p",{staticClass:"describe-title"},[this._v("AppWorks")]),this._v(" "),e("p",{staticClass:"describe-detail"},[this._v("基于 VS Code 插件的前端研发工具集，让前端开发更快更好更轻松。")])])}],!1,null,"cab6e23e",null);e.default=n.exports},346:function(t,e,i){"use strict";i.r(e);var s={name:"Pack",components:{Carousel:i(329).default}},a=(i(335),i(44)),n=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"suite-container"},[e("a",{attrs:{name:"suite",id:"suite"}}),this._v(" "),e("div",{staticClass:"suite-wrapper"},[e("carousel")],1)])}),[],!1,null,"73bd2d46",null);e.default=n.exports},347:function(t,e,i){"use strict";i.r(e);var s=i(314),a=i(330),n={name:"material",data:function(){return{materialNavItems:[{imgSource:"https://img.alicdn.com/imgextra/i1/O1CN019uFWfu1C84XtBCBOP_!!6000000000035-2-tps-50-50.png",linkSource:"/materialCenter/fusion",text:"Fusion 物料"},{imgSource:"https://img.alicdn.com/imgextra/i1/O1CN01gYp0dM1nukQHwWaLq_!!6000000005150-2-tps-50-50.png",linkSource:"/materialCenter/antd",text:"Ant Design 物料"},{imgSource:"https://img.alicdn.com/imgextra/i1/O1CN01Obj2nB1zIWl3XWjc4_!!6000000006691-2-tps-52-42.png",linkSource:"/materialCenter/rax",text:"Rax 物料"}]}},components:{QuickStart:s.default,NavLinks:a.default}},c=(i(336),i(44)),r=Object(c.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"material-container"},[i("a",{attrs:{name:"materials",id:"materials"}}),t._v(" "),i("div",{staticClass:"rich-material"},[i("img",{staticClass:"material-img",attrs:{src:"https://img.alicdn.com/imgextra/i4/O1CN01tWElsC1bevLkCJOvI_!!6000000003491-2-tps-1428-952.png",alt:""}}),t._v(" "),i("div",{staticClass:"material-describe"},[i("h4",{staticClass:"title"},[t._v("海量物料")]),t._v(" "),i("p",{staticClass:"detail"},[t._v("提供多种垂直领域模板和区块，快速创建项目，支持风格切换，满足个性化需求。")]),t._v(" "),i("quick-start",{attrs:{text:"使用物料",link:"/pack/basic/materials"}}),t._v(" "),i("nav-links",{staticClass:"material-nav",attrs:{navItems:t.materialNavItems}})],1)])])}),[],!1,null,"d8428154",null);e.default=r.exports},348:function(t,e,i){"use strict";i.r(e);var s={name:"ResourceList",components:{Linkitem:i(331).default},props:{title:{type:String},linkItems:{type:Array}}},a=(i(338),i(44)),n=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"linklist-container"},[e("h4",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("ul",{staticClass:"linklist-items"},this._l(this.linkItems,(function(t){return e("Linkitem",{key:t.text,attrs:{item:t}})})),1)])}),[],!1,null,"413e718b",null);e.default=n.exports},353:function(t,e,i){"use strict";i(337)},354:function(t,e,i){"use strict";i(339)},383:function(t,e,i){"use strict";i.r(e);var s=i(345),a=i(346),n=i(347),c={name:"Body",components:{MainLogo:s.default,Pack:a.default,Material:n.default}},r=(i(353),i(44)),l=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body-container"},[e("MainLogo"),this._v(" "),e("Pack"),this._v(" "),e("Material")],1)}),[],!1,null,"4385d660",null);e.default=l.exports},384:function(t,e,i){"use strict";i.r(e);var s={name:"Footer",components:{LinkList:i(348).default},data:function(){return{resource:{title:"友链",linkItems:[{img:"https://img.alicdn.com/tps/TB1Nv_wKXXXXXbmXVXXXXXXXXXX-295-195.png",url:"https://fed.taobao.org/",text:"FED"},{img:"https://img.alicdn.com/tfs/TB1bbwkzY2pK1RjSZFsXXaNlXXa-128-128.png",url:"",text:"imgcook"}]},community:{title:"社区",linkItems:[{img:"https://gw.alicdn.com/tfs/TB1H5bLeaL7gK0jSZFBXXXZZpXa-78-78.jpg",url:"https://github.com/appworks-lab/appworks",text:"Pack"},{img:"https://gw.alicdn.com/tfs/TB1H5bLeaL7gK0jSZFBXXXZZpXa-78-78.jpg",url:"https://github.com/appworks-lab/toolkit",text:"Toolkit"}]},help:{title:"帮助",linkItems:[{img:"",url:"https://github.com/appworks-lab/appworks/issues/new?assignees=&labels=bug&template=bug_report.md",text:"反馈问题"},{img:"",url:"https://github.com/appworks-lab/appworks/issues/new?assignees=&labels=enhancement&template=feature_request.md",text:"提交需求"}]},more:{title:"更多",linkItems:[{img:"https://img.alicdn.com/tps/TB1kBU7NpXXXXXLXXXXXXXXXXXX-160-160.png",url:"https://ice.work/",text:"ICE"},{img:"https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png",url:"https://rax.js.org/",text:"Rax"},{img:"https://img.alicdn.com/tfs/TB1k4.laW6qK1RjSZFmXXX0PFXa-237-237.png",url:"https://midwayjs.org/",text:"Midway"}]}}}},a=(i(354),i(44)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"footer-container"},[i("div",{staticClass:"footer-block-wrapper"},[i("LinkList",{attrs:{title:t.resource.title,linkItems:t.resource.linkItems}}),t._v(" "),i("LinkList",{attrs:{title:t.community.title,linkItems:t.community.linkItems}}),t._v(" "),i("LinkList",{attrs:{title:t.help.title,linkItems:t.help.linkItems}}),t._v(" "),i("LinkList",{attrs:{title:t.more.title,linkItems:t.more.linkItems}})],1),t._v(" "),i("div",{staticClass:"footer-gap"}),t._v(" "),i("div",{staticClass:"footer-copyright"},[t._v("Copyright © 2018-present Alibaba Inc.")])])}),[],!1,null,"3f6e9dd0",null);e.default=n.exports},420:function(t,e,i){"use strict";i.r(e);var s=i(383),a=i(384),n={name:"Home",components:{Body:s.default,Footer:a.default}},c=i(44),r=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-container"},[e("Body"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=r.exports}}]);