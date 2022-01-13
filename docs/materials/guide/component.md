---
title: 业务组件开发
order: 2
---

可以通过 `iceworks` 命令添加业务组件：

```bash
$ iceworks add component
```

完成后，在 `components/` 目录下生成了新的组件目录。

根据提示进入组件文件夹，安装依赖并开始开发：

```bash
$ cd components/Example
$ npm install
$ npm start
```

业务组件的主要代码在 `src/`，所有源码在这个目录下完成。

业务组件默认使用的工程方案是 [build-plugin-component](https://github.com/ice-lab/iceworks-cli/tree/master/packages/build-plugin-component#readme)，可以点击上述链接查看使用文档，如有需要也可以按需换成其他组件工程工具比如 rollup 等。
