---
title: 代码补全
order: 5
---

# 代码补全

代码补全 (Code Completion) 提供即时类名、方法名和关键字等预测，辅助开发人员编写代码，大幅提升开发效率。

对于 [TypeScript](https://www.typescriptlang.org/) 工程，VS Code 通过 typings、interfaces 及 JSDocs 等信息提供了非常棒的代码补全体验。相对于 `.ts` 和 `.tsx` 文件，其他类型文件的代码补体全验较差。

AppWorks 增强了前端开发者经常使用的 JS 及样式相关文件的代码补全体验。

## JS 文件

若您的项目基于 React 开发。当您的项目中包含 typings 文件或使用由 TypeScript 开发的组件，可享受同 `.ts` 和 `.tsx` 一样的代码补全体验。

比如依赖 `@types/react` 可获得 HTML JSX 的代码补全。使用由 TypeScript 开发的诸如 [Fusion Design](https://fusion.design/) 和 [Ant Design](https://ant.design/) 组件时，可获得对应组件的代码补全。详见[《在 VS Code 中使用 React》](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)。

在此基础上 AppWorks 提供了：

- [Rax](https://rax.js.org/) 业务组件和基础组件 Props 的代码补全
- React 业务组件 Props 的代码补全
- React 业务组件 propTypes 的代码补全
- MTOP API 的代码补全

> MTOP（Mobile Taobao Open Platform）是**阿里内部**为客户端和服务端提供的一致的 API 平台

### Rax 工程

使用 JS 开发的业务组件及 [Rax Components](https://github.com/raxjs/rax-components) 的代码补全：

![img](https://img.alicdn.com/imgextra/i2/O1CN01D6Zb3r1b7wpFzjWyk_!!6000000003419-1-tps-900-513.gif)

### React 工程

使用 JS 开发的业务组件的代码补全：

![img](https://img.alicdn.com/imgextra/i4/O1CN01VVzQRF1NkVYGN3rrg_!!6000000001608-1-tps-900-513.gif)

使用 JS 开发的业务组件的 propTypes 代码补全：

![img](https://img.alicdn.com/imgextra/i3/O1CN01BoMei91ZbbFkIuUoc_!!6000000003213-1-tps-768-432.gif)

## 样式文件

VS Code 对于样式文件的代码补全优化较少，AppWorks 提供了：

- TSX / JSX 内联样式自动补全
- TSX / JSX 样式自动补全、内容预览及源码定位
- TSX / JSX 样式文件中自动补全 TSX / JSX 文件中使用的样式名
- TSX / JSX 样式变量自动补全、变量预览及源码定位

示例如下：

在 JSX / TSX 文件中编辑组件的 className 及 style 属性时给予自动补全提醒，值预览及定义跳转。

![img](https://img.alicdn.com/imgextra/i2/O1CN01fiRbHN1gY7XQOSAlk_!!6000000004153-1-tps-750-545.gif)

行内样式自动补全，同时支持 SASS 变量的跳转及预览。

![img](https://img.alicdn.com/imgextra/i1/O1CN01eK13T81wvy0wwt2v5_!!6000000006371-1-tps-750-546.gif)

## 辅助引入

我们通过代码补全的方式，提高模块引入的体验。

示例如下：

![img](https://img.alicdn.com/imgextra/i4/O1CN01pAJJv41aoiCzxyw2b_!!6000000003377-1-tps-1212-682.gif)
