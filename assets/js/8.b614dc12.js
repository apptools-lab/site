(window.webpackJsonp=window.webpackJsonp||[]).push([[8,13,18],{327:function(t,e,i){},336:function(t,e,i){},342:function(t,e,i){"use strict";i(327)},347:function(t,e,i){"use strict";i.r(e);var s={name:"LinkItem",props:{item:{type:Object}}},l=(i(342),i(46)),n=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"link-item-container"},[t.item.img?i("img",{staticStyle:{"max-width":"16px","max-height":"16px"},attrs:{src:t.item.img,alt:"icon"}}):t._e(),t._v(" "),i("a",{attrs:{href:t.item.url}},[t._v(t._s(t.item.text))])])}),[],!1,null,"10966a78",null);e.default=n.exports},354:function(t,e,i){"use strict";i(336)},355:function(t,e,i){},364:function(t,e,i){"use strict";i.r(e);var s={name:"ResourceList",components:{Linkitem:i(347).default},props:{title:{type:String},linkItems:{type:Array}}},l=(i(354),i(46)),n=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"linklist-container"},[e("h4",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("ul",{staticClass:"linklist-items"},this._l(this.linkItems,(function(t){return e("Linkitem",{key:t.text,attrs:{item:t}})})),1)])}),[],!1,null,"413e718b",null);e.default=n.exports},370:function(t,e,i){"use strict";i(355)},400:function(t,e,i){"use strict";i.r(e);var s={name:"Footer",components:{LinkList:i(364).default},data:function(){return{resource:{title:"友链",linkItems:[{img:"https://img.alicdn.com/tps/TB1Nv_wKXXXXXbmXVXXXXXXXXXX-295-195.png",url:"https://fed.taobao.org/",text:"FED"},{img:"https://img.alicdn.com/tfs/TB1bbwkzY2pK1RjSZFsXXaNlXXa-128-128.png",url:"",text:"imgcook"}]},community:{title:"社区",linkItems:[{img:"https://gw.alicdn.com/tfs/TB1H5bLeaL7gK0jSZFBXXXZZpXa-78-78.jpg",url:"https://github.com/apptools-lab/appworks",text:"Pack"},{img:"https://gw.alicdn.com/tfs/TB1H5bLeaL7gK0jSZFBXXXZZpXa-78-78.jpg",url:"https://github.com/apptools-lab/apptoolkit",text:"AppToolkit"}]},help:{title:"帮助",linkItems:[{img:"",url:"https://apptools.gitee.io/",text:"国内镜像"},{img:"",url:"https://github.com/apptools-lab/appworks/issues/new?assignees=&labels=bug&template=bug_report.md",text:"反馈问题"},{img:"",url:"https://github.com/apptools-lab/appworks/issues/new?assignees=&labels=enhancement&template=feature_request.md",text:"提交需求"}]},more:{title:"更多",linkItems:[{img:"https://img.alicdn.com/tps/TB1kBU7NpXXXXXLXXXXXXXXXXXX-160-160.png",url:"https://ice.work/",text:"ICE"},{img:"https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png",url:"https://rax.js.org/",text:"Rax"},{img:"https://img.alicdn.com/tfs/TB1k4.laW6qK1RjSZFmXXX0PFXa-237-237.png",url:"https://midwayjs.org/",text:"Midway"}]}}}},l=(i(370),i(46)),n=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"footer-container"},[i("div",{staticClass:"footer-block-wrapper"},[i("LinkList",{attrs:{title:t.resource.title,linkItems:t.resource.linkItems}}),t._v(" "),i("LinkList",{attrs:{title:t.community.title,linkItems:t.community.linkItems}}),t._v(" "),i("LinkList",{attrs:{title:t.help.title,linkItems:t.help.linkItems}}),t._v(" "),i("LinkList",{attrs:{title:t.more.title,linkItems:t.more.linkItems}})],1),t._v(" "),i("div",{staticClass:"footer-gap"}),t._v(" "),i("div",{staticClass:"footer-copyright"},[t._v("Copyright © 2018-present Alibaba Inc.")])])}),[],!1,null,"45572726",null);e.default=n.exports}}]);