(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10,19,20,21],{375:function(t,e,a){},376:function(t,e,a){},384:function(t,e,a){},385:function(t,e,a){},392:function(t,e,a){"use strict";a(375)},393:function(t,e,a){"use strict";a(376)},397:function(t,e,a){"use strict";a.r(e);var s={name:"BlockCard",props:{block:{type:Object,default:{}}}},i=(a(392),a(65)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card blockCard"},[a("div",{staticClass:"content"},[a("div",{staticClass:"item"},[a("div",{staticClass:"screenshot"},[a("img",{attrs:{src:t.block.screenshot}})])]),t._v(" "),a("div",{staticClass:"item-info"},[a("div",{staticClass:"item-title"},[t._v(t._s(t.block.title))])]),t._v(" "),a("div",{staticClass:"item-action"},[a("a",{staticClass:"item-button",attrs:{target:"_blank",href:t.block.homepage}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1HY7LBIbpK1RjSZFyXXX_qFXa-201-200.png"}}),t._v("\n        效果预览\n      ")]),t._v(" "),a("a",{staticClass:"item-button",attrs:{target:"_blank",href:t.block.repository}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1ePSoJpzqK1RjSZSgXXcpAVXa-201-200.png"}}),t._v("\n        查看源码\n      ")]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"item-button",attrs:{target:"_blank",href:"/pack/basic/materials.html"}},[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1ESMMBNTpK1RjSZFMXXbG_VXa-200-200.png"}}),this._v("\n        使用模板\n      ")])}],!1,null,"0089fc06",null);e.default=c.exports},398:function(t,e,a){"use strict";a.r(e);var s={name:"ScaffoldCard",props:{scaffold:{type:Object,default:{}}}},i=(a(393),a(65)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card scaffoldCard"},[a("div",{staticClass:"content"},[a("div",{staticClass:"item"},[a("div",{staticClass:"screenshot"},[a("img",{attrs:{src:t.scaffold.screenshot}})])]),t._v(" "),a("div",{staticClass:"item-info"},[a("div",{staticClass:"item-title"},[t._v(t._s(t.scaffold.name))]),t._v(" "),a("div",{staticClass:"item-desc"},[t._v(t._s(t.scaffold.description))])]),t._v(" "),a("div",{staticClass:"item-action"},[a("a",{staticClass:"item-button",attrs:{target:"_blank",href:t.scaffold.homepage}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1HY7LBIbpK1RjSZFyXXX_qFXa-201-200.png"}}),t._v("\n        效果预览\n      ")]),t._v(" "),a("a",{staticClass:"item-button",attrs:{target:"_blank",href:t.scaffold.repository}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1ePSoJpzqK1RjSZSgXXcpAVXa-201-200.png"}}),t._v("\n        查看源码\n      ")]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"item-button",attrs:{target:"_blank",href:"/pack/basic/materials.html"}},[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1ESMMBNTpK1RjSZFMXXbG_VXa-200-200.png"}}),this._v("\n        使用模板\n      ")])}],!1,null,"1dc5dba4",null);e.default=c.exports},406:function(t,e,a){"use strict";a(384)},407:function(t,e,a){"use strict";a(385)},408:function(t,e,a){},414:function(t,e,a){"use strict";a.r(e);var s={name:"Categories",props:{updateSelectedCategory:{type:Function,default:function(){}},selectedCategory:{type:String},categories:{type:Array,default:[]}}},i=(a(406),a(65)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("ul",{staticClass:"categories"},t._l(t.categories,(function(e){return a("li",{key:e.name,class:t.selectedCategory===e.name?"active":"",on:{click:function(a){return t.updateSelectedCategory(e.name)}}},[t._v("\n      "+t._s(e.name)+" "+t._s(e.total)+"\n    ")])})),0)])}),[],!1,null,"198d15cc",null);e.default=c.exports},415:function(t,e,a){"use strict";a.r(e);a(43),a(9);var s=a(397),i=a(398),c={name:"List",components:{BlockCard:s.default,ScaffoldCard:i.default},props:{selectedCategory:{type:String},materialsType:{type:String},data:{type:Array,default:[]}},watch:{data:function(){this.updateList(this.selectedCategory)},selectedCategory:function(t){this.updateList(t)}},data:function(){return{list:[]}},methods:{updateList:function(t){var e=[];e="全部"===t?this.data:this.data.filter((function(e){return e.category===t})),this.list=e,console.log(this.materialsType)}}},n=(a(407),a(65)),r=Object(n.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["blocks"===t.materialsType?a("div",{staticClass:"list"},t._l(t.list,(function(t){return a("BlockCard",{key:t.repository,attrs:{block:t}})})),1):t._e(),t._v(" "),"scaffolds"===t.materialsType?a("div",{staticClass:"list"},t._l(t.list,(function(t){return a("ScaffoldCard",{key:t.repository,attrs:{scaffold:t}})})),1):t._e()])}),[],!1,null,"eb511a50",null);e.default=r.exports},421:function(t,e,a){"use strict";a(408)},455:function(t,e,a){"use strict";a.r(e);a(94),a(9),a(95),a(126);var s=a(414),i=a(415),c={name:"Content",components:{Categories:s.default,List:i.default},props:{materialsType:{type:String},data:{type:Array}},watch:{data:function(){this.getCategories()}},data:function(){return{selectedCategory:"全部",categories:[{name:"全部",total:0}],list:[]}},methods:{updateSelectedCategory:function(t){this.selectedCategory=t},getCategories:function(){var t=this,e={};this.data.forEach((function(t){void 0===e[t.category]?e[t.category]=1:e[t.category]++})),this.categories=[],Object.keys(e).forEach((function(a){a&&t.categories.push({name:a,total:e[a]})})),this.selectedCategory="全部",this.categories.unshift({name:"全部",total:this.data.length})}}},n=(a(421),a(65)),r=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("Categories",{attrs:{categories:this.categories,selectedCategory:this.selectedCategory,updateSelectedCategory:this.updateSelectedCategory}}),this._v(" "),e("List",{attrs:{selectedCategory:this.selectedCategory,materialsType:this.materialsType,data:this.data}})],1)}),[],!1,null,"51685c48",null);e.default=r.exports}}]);