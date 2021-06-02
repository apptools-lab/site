(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{470:function(s,a,t){"use strict";t.r(a);var n=t(44),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"创建组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建组件"}},[s._v("#")]),s._v(" 创建组件")]),s._v(" "),t("h3",{attrs:{id:"物料集合项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物料集合项目"}},[s._v("#")]),s._v(" 物料集合项目")]),s._v(" "),t("blockquote",[t("p",[s._v("项目中包含多个业务组件、区块以及模板")])]),s._v(" "),t("p",[s._v("物料集合项目初始化后，在根目录通过命令即可新增组件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-materials\n$ iceworks "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" component\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"单独的业务组件项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单独的业务组件项目"}},[s._v("#")]),s._v(" 单独的业务组件项目")]),s._v(" "),t("blockquote",[t("p",[s._v("项目中只包含一个业务组件")])]),s._v(" "),t("h4",{attrs:{id:"通过命令行方式初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过命令行方式初始化"}},[s._v("#")]),s._v(" 通过命令行方式初始化")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建组件文件夹")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" my-component "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-component\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化")]),s._v("\n$ iceworks init component\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"通过-def-初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-def-初始化"}},[s._v("#")]),s._v(" 通过 DEF 初始化")]),s._v(" "),t("blockquote",[t("p",[s._v("如果是阿里内部的同学并且想接入 DEF 发布 npm 包，可以参考文档 "),t("a",{attrs:{href:"https://yuque.alibaba-inc.com/ice/rdy99p/gbekwv",target:"_blank",rel:"noopener noreferrer"}},[s._v("组件开发接入 DEF"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"组件开发调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件开发调试"}},[s._v("#")]),s._v(" 组件开发调试")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-component\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实时将 src 编译到 lib&es 目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start -- --watch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"组件目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件目录"}},[s._v("#")]),s._v(" 组件目录")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── demo                  # 组件 demo\n│      ├── simple.md\n│      └── usage.md\n├── src                   # 组件源码\n│      ├── index.scss\n│      └── index.js\n├── build.json            # 构建配置\n├── lib/                  # 构建产物，编译为 ES5 的代码\n├── es/                   # 构建产物，编译为 es module 规范的代码\n├── build/                # 构建产物，用于组件文档/demo 预览\n├── README.md\n└── package.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"组件入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件入口"}},[s._v("#")]),s._v(" 组件入口")]),s._v(" "),t("p",[s._v("组件入口文件为 "),t("code",[s._v("src/index.js")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ExampleComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("others "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div className"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ExampleComponent"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("others"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      Hello ExampleComponent\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"样式文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式文件"}},[s._v("#")]),s._v(" 样式文件")]),s._v(" "),t("p",[s._v("默认生成样式文件为 "),t("code",[s._v("src/index.scss")]),s._v("，根据组件开发需求可以调整为 "),t("code",[s._v("index.css")]),s._v(" 或 "),t("code",[s._v("index.less")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("对于业务组件自身依赖的组件，样式无需手动引入，我们会通过工程工具自动引入")])]),s._v(" "),t("blockquote",[t("p",[s._v("src/index.js 中无需主动引入 src/index.scss，因为这会引起样式重复打包的问题")])]),s._v(" "),t("h2",{attrs:{id:"编写-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写-demo"}},[s._v("#")]),s._v(" 编写 demo")]),s._v(" "),t("p",[s._v("组件的 demo 演示文件，位于 "),t("code",[s._v("demo")]),s._v(" 目录下，使用 "),t("code",[s._v("yaml-markdown")]),s._v(" 语法。可以通过修改默认的 "),t("code",[s._v("usage.md")]),s._v(" 来调整组件 demo，或通过增加 example.md 文件来创建多个 demo。")]),s._v(" "),t("p",[s._v("每个 demo 的形式如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("---\ntitle: Simple Usage\norder: 1\n---\n\n本 demo 演示一行文字的用法。\n\n```jsx\nimport React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport ExampleComponent from '@ali/example-component';\n\nclass App extends Component {\n  render() {\n    return (\n      <div>\n        <ExampleComponent />\n      </div>\n    );\n  }\n}\n\nReactDOM.render((\n  <App />\n), mountNode);\n```\n\n// 书写 demo 样式\n```css\n.ttt {\n  background: red;\n}\n```\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("p",[s._v("如果开发者希望在 js 或者 ts 文件中维护 Demo 中的代码，可以通过约定的组件引入外部的代码：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('---\ntitle: Simple Usage\norder: 1\n---\n\n本 demo 演示一行文字的用法。\n\n```jsx\n<DemoCode src="path/to/code.js" />\n```\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("工程上将自动将路径中的源码获取，并展示在 Demo 预览页面中。通过上述的方式开发 Demo 可以享受编辑器带来的代码提示、语法高亮等便捷功能。")]),s._v(" "),t("h2",{attrs:{id:"组件文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件文档"}},[s._v("#")]),s._v(" 组件文档")]),s._v(" "),t("p",[s._v("在执行 "),t("code",[s._v("npm run build")]),s._v(" 时，会通过 "),t("code",[s._v("demo/")]),s._v(" 以及 "),t("code",[s._v("README.md")]),s._v(" 生成 "),t("code",[s._v("build/index.html")]),s._v("，将 html 进行托管即可完整预览组件的文档。")]),s._v(" "),t("p",[s._v("以 "),t("code",[s._v("qrcode")]),s._v(" 组件的文档为例，"),t("a",{attrs:{href:"https://unpkg.com/@icedesign/qrcode@1.0.5/build/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档地址"),t("OutboundLink")],1),s._v(" ：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1VIZ9ZEY1gK0jSZFCXXcwqXXa-1441-738.png",alt:""}})]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("demo/")]),s._v(" 目录里的文件都是扁平的，适合展示单个组件的文档，比如：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("demo/\n├── simple.md\n├── size.md\n├── type.md\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("但是某些情况下，我们的业务组件可能会导出多个组件，此时可以通过目录嵌套来展示多个组件的文档：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── demo/\n│   ├── ComponentA/\n│   │  ├── simple.md\n│   │  └── simple2.md\n│   ├── ComponentB/\n│   │  ├── simple.md\n│   └──└── simple2.md\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("最终效果如下，其中每个目录对应一个组件，即左侧的一个导航：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1nQrZk5DsXe8jSZR0XXXK6FXa-1426-700.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"组件工程配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件工程配置"}},[s._v("#")]),s._v(" 组件工程配置")]),s._v(" "),t("p",[s._v("默认组件开发工程需要在 "),t("code",[s._v("build.json")]),s._v(" 中引入 "),t("code",[s._v("build-plugin-component")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build-plugin-component"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...options")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("插件支持的配置参数如下：")]),s._v(" "),t("h3",{attrs:{id:"alias-1-0-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alias-1-0-0"}},[s._v("#")]),s._v(" alias "),t("code",[s._v(">1.0.0")])]),s._v(" "),t("ul",[t("li",[s._v("类型：object")]),s._v(" "),t("li",[s._v("默认值：{}")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "alias": {\n    "@": "./src"\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"basiccomponents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basiccomponents"}},[s._v("#")]),s._v(" basicComponents")]),s._v(" "),t("ul",[t("li",[s._v("类型： array")]),s._v(" "),t("li",[s._v("默认值：[]")])]),s._v(" "),t("p",[s._v("如果业务组件开发依赖了非 antd 或者 @alifd/next 的基础 UI 库，可以通过 basicComponents 进行设置，组件构建时将默认设置 babel-plugin-import 进行分包加载，并在生成的 "),t("code",[s._v("style.js")]),s._v(" 中引入相应的样式资源。")]),s._v(" "),t("h3",{attrs:{id:"babelplugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babelplugins"}},[s._v("#")]),s._v(" babelPlugins")]),s._v(" "),t("ul",[t("li",[s._v("类型：array")]),s._v(" "),t("li",[s._v("默认值：[]")])]),s._v(" "),t("p",[s._v("业务组件通过 babel 进行编译时需要增加额外的 babel plugin 处理，可以通过 babelPlugins 进行设置。")]),s._v(" "),t("p",[s._v("通过配置 babel-plugin-add-module-exports 增加组件 default 的导出：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"babelPlugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-plugin-add-module-exports"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"addDefaultProperty"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build-plugin-component"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("注意 babelPlugins 仅影响 es/lib 目录构建产物，如需要修改 demo 预览时的 babel 配置，请通过 webpack-chain 形式进行自定义")])]),s._v(" "),t("h3",{attrs:{id:"babeloptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babeloptions"}},[s._v("#")]),s._v(" babelOptions")]),s._v(" "),t("ul",[t("li",[s._v("类型：array")]),s._v(" "),t("li",[s._v("默认值：[]")])]),s._v(" "),t("p",[s._v("比如修改 preset-env 的配置：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"babelOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"options"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("注意 babelOptions 仅影响 es/lib 目录构建产物，如需要修改 demo 预览时的 babel 配置，请通过 webpack-chain 形式进行自定义")])]),s._v(" "),t("h3",{attrs:{id:"devserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devserver"}},[s._v("#")]),s._v(" devServer")]),s._v(" "),t("ul",[t("li",[s._v("类型：object")]),s._v(" "),t("li",[s._v("默认值："),t("code",[s._v("{ hot: true, disableHostCheck: true, clientLogLevel: 'silent' }")])])]),s._v(" "),t("p",[s._v("同 "),t("a",{attrs:{href:"https://webpack.js.org/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack devServer 配置"),t("OutboundLink")],1),s._v("，自定义配置将会与默认配置合并。")]),s._v(" "),t("h3",{attrs:{id:"filename"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filename"}},[s._v("#")]),s._v(" filename")]),s._v(" "),t("ul",[t("li",[s._v("类型： string")]),s._v(" "),t("li",[s._v("默认值：无")])]),s._v(" "),t("p",[s._v("如果打包 library 到 dist 目录，用来配置打包文件的名字。")]),s._v(" "),t("h3",{attrs:{id:"library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#library"}},[s._v("#")]),s._v(" library")]),s._v(" "),t("ul",[t("li",[s._v("类型： string")]),s._v(" "),t("li",[s._v("默认值：空")])]),s._v(" "),t("p",[s._v("如果打包 library 到 dist 目录，用来配置 library 名字。")]),s._v(" "),t("h3",{attrs:{id:"libraryexport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#libraryexport"}},[s._v("#")]),s._v(" libraryExport")]),s._v(" "),t("ul",[t("li",[s._v("类型： string")]),s._v(" "),t("li",[s._v("默认值：空")])]),s._v(" "),t("p",[s._v("如果打包 library 到 dist 目录，用来配置 library 出口配型，如可配置 default，对应的组件出口为 export default MyComponent。")]),s._v(" "),t("h3",{attrs:{id:"librarytarget"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#librarytarget"}},[s._v("#")]),s._v(" libraryTarget")]),s._v(" "),t("ul",[t("li",[s._v("类型： string")]),s._v(" "),t("li",[s._v("默认值：空")])]),s._v(" "),t("p",[s._v("如果打包 library 到 dist 目录，用来配置 library 的类型，如 umd、amd 等。")]),s._v(" "),t("h3",{attrs:{id:"sourcemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap"}},[s._v("#")]),s._v(" sourceMap")]),s._v(" "),t("ul",[t("li",[s._v("类型： boolean")]),s._v(" "),t("li",[s._v("默认值：false")])]),s._v(" "),t("p",[s._v("如果打包 library 到 dist 目录，用来配置是否产出 sourceMap 文件。")]),s._v(" "),t("h3",{attrs:{id:"minify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minify"}},[s._v("#")]),s._v(" minify")]),s._v(" "),t("ul",[t("li",[s._v("类型：boolean")]),s._v(" "),t("li",[s._v("默认：false")])]),s._v(" "),t("p",[s._v("如果打包 library 到 dist 目录，配置打包文件是否压缩。")]),s._v(" "),t("h3",{attrs:{id:"externals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#externals"}},[s._v("#")]),s._v(" externals")]),s._v(" "),t("ul",[t("li",[s._v("类型： plain object")]),s._v(" "),t("li",[s._v("默认值：")])]),s._v(" "),t("p",[s._v("如果打包 library 到 dist 目录，用来配置是否需要外部 externals，用来避免三方包被打包。")]),s._v(" "),t("h3",{attrs:{id:"subcomponents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subcomponents"}},[s._v("#")]),s._v(" subComponents")]),s._v(" "),t("ul",[t("li",[s._v("类型：Boolean")]),s._v(" "),t("li",[s._v("默认值：false")])]),s._v(" "),t("p",[s._v("是否包含子组件，一般用于开发类似 fusion/antd 这种大包，开启该选项之后，会为每个组件生成对应的 "),t("code",[s._v("style.js")]),s._v(" 文件。")]),s._v(" "),t("h3",{attrs:{id:"demotemplate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demotemplate"}},[s._v("#")]),s._v(" demoTemplate")]),s._v(" "),t("ul",[t("li",[s._v("类型：array | string")]),s._v(" "),t("li",[s._v("默认值："),t("code",[s._v("template-component-demo")])])]),s._v(" "),t("p",[s._v("插件内置了 npm 包 "),t("code",[s._v("template-component-demo")]),s._v(" 作为组件开发及构建时的 demo 预览，可以通过指定 "),t("code",[s._v("demoTemplate")]),s._v(" 对进行自定义。")]),s._v(" "),t("p",[s._v("demo 预览组件默认接受如下参数：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("readmeData")]),s._v("：readme.md 文件中的解析数据")]),s._v(" "),t("li",[t("code",[s._v("demoData")]),s._v("：demo 文件夹下 markdowm 内容解析的数据")]),s._v(" "),t("li",[t("code",[s._v("env")]),s._v("：当前运行环境 "),t("code",[s._v("development|production")])]),s._v(" "),t("li",[t("code",[s._v("templateProps")]),s._v("：模版自定义参数，可以通过设置 "),t("code",[s._v('"demoTemplate": ["template-component-demo", { "platform": "h5" }]')]),s._v(" 的方式为模版定义参数")])]),s._v(" "),t("h3",{attrs:{id:"htmlinjection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#htmlinjection"}},[s._v("#")]),s._v(" htmlInjection")]),s._v(" "),t("ul",[t("li",[s._v("类型：object")]),s._v(" "),t("li",[s._v("默认值："),t("code",[s._v("{}")])])]),s._v(" "),t("p",[s._v("向 demo 预览的 html 里注入内容，比如插入一些静态脚本等：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "htmlInjection": {\n    "headAppend": [\n      "<script src=\'http://foo.com/a.js\' />",\n      "<link href=\'http://foo.com/a.css\' />"\n    ],\n    "headPrepend": [],\n    "bodyAppend": [],\n    "bodyPrepend": [],\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("h3",{attrs:{id:"打包-umd-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包-umd-文件"}},[s._v("#")]),s._v(" 打包 umd 文件")]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("npm run build")]),s._v(" 构建组件，默认将生成 lib 和 es 两个目录，分别对应 CommonJS 模块规范和 es module 规范。通过设置工程上的 UMD 的相关配置，可以将业务组件以 UMD 模块方式打包，比如对上述示例组件进行设置：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"library"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ExampleComponent"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"libraryTarget"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"umd"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build-plugin-component"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("构建结果将在 es 和 lib 目录的基础上，生成 dist 目录，包含标准的 umd 规范格式的 index.js 和 index.css。")]),s._v(" "),t("h3",{attrs:{id:"build-目录说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-目录说明"}},[s._v("#")]),s._v(" build 目录说明")]),s._v(" "),t("p",[s._v("构建生成的 "),t("code",[s._v("build/index.html")]),s._v(" 是将组件 demo 以及 README 构建到一个页面里，借助 unpkg 等服务可以作为组件的文档使用，"),t("a",{attrs:{href:"https://unpkg.alibaba-inc.com/browse/@icedesign/balloon-confirm@1.0.6/build/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例"),t("OutboundLink")],1),s._v(" 。")]),s._v(" "),t("p",[s._v("注意：构建 "),t("code",[s._v("build")]),s._v(" 会加长 "),t("code",[s._v("npm run build")]),s._v(" 的时间，如不需要可通过 "),t("code",[s._v("--skip-demo")]),s._v(" 的命令行参数关闭。")]),s._v(" "),t("h3",{attrs:{id:"style-js-文件说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#style-js-文件说明"}},[s._v("#")]),s._v(" style.js 文件说明")]),s._v(" "),t("p",[s._v("为了解决组件的样式加载问题，同时为了隔离脚本和样式，因此针对组件自身以及依赖的样式我们会单独构建一个 style.js 的文件：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@alifd/next/lib/form/style'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@alifd/next/lib/button/style'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@icedesign/balloon-confirm/lib/style'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./index.scss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("项目中我们通过内置插件会自动引入组件对应的 style.js，如果没有用 ICE 的工程工具则需要手动引入对应的 style.js 文件。")])])}),[],!1,null,null,null);a.default=e.exports}}]);