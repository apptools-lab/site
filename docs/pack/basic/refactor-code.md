---
title: 代码重构
order: 6
---

# 代码重构

在日常编码的过程中经常需要进行代码重构操作，例如删除某个文件及其引用、将一大段代码提取为新的函数、依赖库 API 的升级等等。

代码重构的文件关联性高且有大量的重复性工作，人工操作是痛苦的：你可能会遗漏某段代码，可能会需要占用大量的时间……

AppWorks 提供了一些实用的功能帮助开发者快速、准确地完成代码重构。

## 删除组件文件及其引用

删除组件文件是一个很简单常见的操作，但问题是你还需要删除掉组件文件所有的引用。有时候你还可能需要删除掉由于组件属性所带来的不需要的变量。

例如，你有如下文件夹结构：

```bash
.
├── ComponentA
│   ├── index.tsx
│   └── index.module.scss
├── PageA.tsx
└── PageB.tsx
```

其中 `ComponentA/index.tsx` 代码如下：

```jsx
import React from 'react';

export default function Hello({ name }) {
  return <div>Hello {name}.</div>;
}
```

`PageA.tsx` 代码如下：

```jsx
import React from 'react';
import Hello from './ComponentA';

export default function PageA() {
  const name = 'AppWorks';
  return (
    <div>
      <Hello name={name} />
      Welcome!
    </div>
  );
}
```

如果你需要删除 `ComponentA` 文件夹，则需要做几件事情：

一，移除 `ComponentA` 文件夹，完成后文件夹结构将变成下面这样：

```diff
.
- ├── ComponentA
- │   ├── index.tsx
- │   └── index.module.scss
├── PageA.tsx
└── PageB.tsx
```

二，在 `PageA.tsx` 中移除 `ComponentA` 相关的代码，完成后代码将变成下面这样：

```diff
import React from 'react';
- import Hello from './ComponentA';

export default function PageA() {
-  const name = 'AppWorks';
  return (
    <div>
-      <Hello name={name}/>
      Welcome!
    </div>
  );
}
```

使用 AppWorks ，你只需要在在编辑器的资源面板中右键选择 `ComponentA` 文件夹，点击「AppWorks: 删除组件及其引用」选项，上面的操作都会自动完成。

下面是功能操作演示：

![demo](https://img.alicdn.com/imgextra/i3/O1CN01y9OwfE2A20EgTpwgp_!!6000000008144-1-tps-2048-1536.gif)

你还可以在源代码中删除选中的组件代码片段及其在当前文件中的相关引用：

![demo](https://img.alicdn.com/imgextra/i2/O1CN01EaBkxu1mHzHWbjMss_!!6000000004930-1-tps-2048-1536.gif)

> 可以使用 `Ctrl + Alt + D` 快捷键来完成此操作。

## 依赖库的 API 升级

项目中会依赖一些常用的基础库或框架，例如 [React](http://github.com/facebook/react)、[Rax](http://github.com/alibaba/rax)、[ice.js](http://github.com/alibaba/ice)、[rax-app](https://github.com/raxjs/rax-app) 等。对这些库或框架进行升级涉及大量的代码重构工作。

AppWorks 提供了自动升级的脚本和用户操作界面，自动化和人为监督干预的方式能够即让升级操作效率更高，也能保障升级的安全性。

可以通过 `⇧⌘P` ( macOS ) 或 `Ctrl+Shift+p` ( Windows ) 快捷键唤起命令面板，输入 `AppWorks: CodeMod` ，激活该功能。

1. 选择需要升级的脚本库
2. 选择需要升级的具体 API
3. 点击「扫描」
4. 确认文件改动情况
5. 点击「更新」，完成升级

下面是功能操作演示：

![示例](https://img.alicdn.com/imgextra/i2/O1CN010cWCws22u21x1KNkv_!!6000000007179-1-tps-1446-906.gif)
