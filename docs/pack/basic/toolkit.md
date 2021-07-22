---
title: 前端环境
order: 1
---

# 前端环境

前端社区日渐繁荣的同时，前端工程也日渐复杂，导致需要配置的开发环境也越来越复杂。一般来说，开发前端需要安装以下几款工具：

- [Node.js](https://nodejs.org/)：能让你在本地开发时拥有 JavaScript 运行环境，mac 下推荐使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 Node.js 版本，Windows 可使用[nvm-windows](https://github.com/coreybutler/nvm-windows)
- [Visual Studio Code](https://code.visualstudio.com/)：一款轻量的且跨平台（macOS、Windows 和 Linux）的源代码编辑器
- [Google Chrome](https://www.google.cn/chrome)：基于强大的 JavaScript V8 引擎，是一款简洁、功能强大的网页浏览器
- ...

上面的基本环境安装过程对于部分刚入门的前端开发者来说是有一定的时间成本。为此，AppWorks 提供 GUI 工具 —— AppWorks Toolkit，提供可视化配置环境的能力，屏蔽环境配置的复杂度，帮助开发者简单快速搭建前端开发环境。

## 安装 Toolkit

mac 版本：[下载地址](https://iceworks.oss-cn-hangzhou.aliyuncs.com/toolkit/mac/AppWorks%20Toolkit.dmg)

## 使用 Toolkit

### 一键安装必备工具

1. 打开 AppWorks Toolkit，点击左侧菜单栏的『首页』
2. 点击右上角的『一键安装』按钮
3. 选择需要安装的工具，点击『确认』按钮，等待片刻后完成环境的安装

![快速安装环境](https://img.alicdn.com/imgextra/i4/O1CN01KP7tDf1WBXsJb5Vvv_!!6000000002750-2-tps-2200-1448.png_790x10000.jpg)

### Node 管理

#### 切换 Node.js 版本

Toolkit 支持快速安装或切换其他 Node.js 版本，并默认支持重装全局依赖。

1. 打开 AppWorks Toolkit，点击左侧菜单栏的『Node 管理』
2. 在右侧主页面中，点击『切换版本』按钮
3. 选择想要安装的 Node.js 的版本后，点击『下一步』按钮开始 Node.js 的安装

![切换 Node.js 版本](https://img.alicdn.com/imgextra/i4/O1CN01l16rxb1mPJdWOE6tC_!!6000000004946-2-tps-2200-1448.png_790x10000.jpg)

#### 管理全局 npm 镜像源

Toolkit 支持快速查看和切换全局的镜像源，国内用户推荐使用淘宝源。

![镜像源管理](https://img.alicdn.com/imgextra/i2/O1CN01vRNs7M1DrFEehgE4l_!!6000000000269-2-tps-2200-1448.png_790x10000.jpg)

#### 管理全局依赖

Toolkit 提供全局 npm 依赖的可视化管理，支持查看、安装、重装、升级和卸载全局依赖。

##### 安装依赖

点击『添加依赖』按钮，在搜索框中输入 npm 依赖名称，以快速安装依赖到全局中。

![安装依赖](https://img.alicdn.com/imgextra/i2/O1CN01RrnEcT1oFoeTXw6Py_!!6000000005196-2-tps-2200-1448.png_790x10000.jpg)

##### 更新依赖

当全局依赖有可更新的版本时，可以点击『升级』图标，一键升级本地的依赖到最新版本。

![更新全局依赖](https://img.alicdn.com/imgextra/i3/O1CN01gdAz0U1gKq4Ojsh6Y_!!6000000004124-2-tps-2200-1448.png_790x10000.jpg)

##### 重装和卸载依赖

在操作一栏中，点击『重装』和『卸载』图标可快速对全局依赖进行重装和卸载。

![重装和卸载依赖](https://img.alicdn.com/imgextra/i4/O1CN01Yg4fEo1fWutgxK3sd_!!6000000004015-2-tps-2200-1448.png_790x10000.jpg)

### Git 管理

Toolkit 不仅支持可视化管理全局 Git 配置，还支持管理用户的 Git 配置和 SSH 密钥，以便在不同的项目中使用不同的 Git 配置和密钥。

#### 全局 Git 配置

目前提供常见的配置项：『用户名』、『邮箱』和『忽略文件名大小写』，后续可根据实际的需要，增加更多的 [Git 配置](https://git-scm.com/docs/git-config#_values)。

![全局 Git 配置](https://img.alicdn.com/imgextra/i1/O1CN01T5V55G1KIAD1XOADf_!!6000000001140-2-tps-2200-1448.png_790x10000.jpg)

#### 用户 Git 配置

当有多个 Git 用户账号时，比如：

- 一个 Github 账号，用于自己进行一些开发；
- 一个 GitLab 账号，用户公司内部的工作开发；

这时就需要在本地配置多份 Git 配置和 SSH 密钥了。Toolkit 为了减少用户的配置成本，支持可视化管理不同用户账号的 Git 配置。

##### 新增配置

点击『新增配置』按钮，在表单中根据相关的说明填写对应的信息。点击『确定』按钮后，Toolkit 默认根据输入的信息生成 SSH 公私钥到本地。

其中，部分字段的说明如下：

- 配置名称：建议填写 Git 服务器的名称，比如 Github、GitLab
- Git 服务器域名：可以使不同的 Git 仓库使用对应的 SSH Key。以放在 Github 的 [appworks-lab/Toolkit](https://github.com/appworks-lab/toolkit) 仓库为例，`github.com` 就是 Github 服务器域名了（PS：填写域名时不需要带 `https://`）。在提交代码时，就会自动使用刚才生成好的 Github SSH 密钥了

![新增 Git 配置](https://img.alicdn.com/imgextra/i3/O1CN01aWknsl1NzcdchgyL9_!!6000000001641-2-tps-2200-1448.png_790x10000.jpg)

##### 使用 SSH 公钥

1. 首先在配置中复制 SSH 公钥
   ![复制 SSH 公钥](https://img.alicdn.com/imgextra/i3/O1CN01HwP2sV1TPKx8Sb0VZ_!!6000000002374-2-tps-2200-1448.png_790x10000.jpg)
2. 以 Github 举例，依次点击 Setting -> SSH and GPG keys -> New SSH Key，把刚才的复制的 SSH 公钥添加到 Github 中
   ![Github SSH 添加公钥](https://img.alicdn.com/imgextra/i4/O1CN016EZv101pyWw57wlaT_!!6000000005429-2-tps-2842-1480.png_790x10000.jpg)
   ![Github SSH 添加公钥](https://img.alicdn.com/imgextra/i2/O1CN010vdSYs21lxS4q558W_!!6000000007026-2-tps-2136-1088.png_790x10000.jpg)
3. SSH 公钥添加完成以后，就可以使用 SSH 协议操作 Git 仓库了

##### 使用不同的 Git 配置

Toolkit 支持每份 Git 配置中添加一个或多个目录，这些目录下的 Git 仓库都会使用这份 Git 配置。更多信息可参考 [Git 文档](https://git-scm.com/docs/git-config#_conditional_includes)。

![添加目录](https://img.alicdn.com/imgextra/i2/O1CN01viaiOJ1lnIlIrJHMJ_!!6000000004863-2-tps-2200-1448.png_790x10000.jpg)

## 未来

- 桌面客户端管理
- 浏览器插件管理
- 编辑器插件管理
- ...
