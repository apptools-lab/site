---
title: 预览调试
order: 3
---

# 预览调试

预览调试是开发中的一个重要环节，可以帮助我们快速开发项目和排查问题。

## 依赖管理

预览调试前需要安装项目中的依赖。在根目录下执行 `npm install` 命令，可将 package.json 文件中描述的依赖包安装至项目根目录下的 node_modules 文件夹中。

在前端项目工程中使用 npm 来管理 Node.js 的依赖包，需要在项目根目录下创建 package.json 文件，其中与依赖包相关的常用字段有：

- **dependencies：** 指定项目运行时所需要的依赖包；
- **devDependencies：** 指定项目开发时所需要的依赖包；
- **peerDependencies：** 指定当前包所在的宿主环境所需要的依赖包及其版本；

更多配置可参考 [package.json 文档](https://docs.npmjs.com/creating-a-package-json-file)。

### 使用 AppWorks 进行依赖包管理

![img](https://img.alicdn.com/imgextra/i2/O1CN01Z2r2Mh1ouZt55aIY2_!!6000000005285-2-tps-2368-1646.png_790x10000.jpg)

1. 在 VS Code「资源管理器」左下角依赖包视窗中查看应用安装的所有依赖信息；
2. 点击依赖项目旁边的 `⬆️` 按钮，即可更新到最新依赖；
3. 点击依赖列表标题框上的 `重装依赖` 按钮，即可重装应用的所有依赖包。

## 预览

`npm install` 安装依赖后，执行 `npm run start` 即可进行项目开发。

### 使用 AppWorks 进行移动端预览

1. 通过 `⇧⌘P` 或 `Ctrl+Shift+P` 快捷键唤醒命令面板
2. 输入 `AppWorks: Debug`，对于 [Rax](http://rax.js.org/) 项目来说，将启动项目的调试功能，并激活移动端预览窗口

![img](https://img.alicdn.com/imgextra/i2/O1CN01xHrOWW1yl5pIYtMJ1_!!6000000006618-1-tps-1024-768.gif)

单击手机图标打开手机调试模式，可选择不同的设备进行调试。

在响应式设备中，可以编辑设备尺寸，或使用拖拽调整设备。

## 调试

若希望在 VS Code 中进行断点调试，可在您的项目中新增 `.vscode/launch.json` 和 `.vscode/tasks.json` ，并启动 VS Code Debug 功能。操作示例：

![debug-demo](https://img.alicdn.com/imgextra/i3/O1CN01VJHkXe1cVatDq2q8R_!!6000000003606-1-tps-900-511.gif)

**备注：可将 .vscode 目录添加至 .gitignore 配置中。**

### launch.json

参考配置如下，更多配置可参考 [VS Code debug 文档](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome", // 启动 Chrome 预览。
      "request": "launch", // 调试会启动新的 Chrome 实例，替换 attach 可选取当前 Chrome 实例，但需要重启 Chrome。
      "name": "Debug",
      "url": "http://localhost:3333", // 当前工程调试服务地址
      "urlFilter": "http://localhost:3333/**/*", // 监听当前工程调试服务所有的 url
      "webRoot": "${workspaceFolder}",
      "userDataDir": "${workspaceFolder}/.vscode/chrome-debug-user-data", // 用于存放 Chrome 的用户数据（安装的浏览器插件等）
      "preLaunchTask": "Start Background Tasks",
      "postDebugTask": "Stop Background Tasks"
    }
  ]
}
```

可根据您控制台打印的调试链接调整配置的具体值，上述工程调试链接为 `http://localhost:3333` 。

### tasks.json

参考配置如下，更多配置可参考 [VS Code tasks 文档](https://code.visualstudio.com/docs/editor/tasks#vscode)。

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Background Tasks",
      "type": "npm",
      "script": "start", // npm run start
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "ERROR in .*"
        },
        "background": {
          "beginsPattern": ".*",
          "endsPattern": ".*Compiled.*" // 控制台中，项目构建完成时出现的字段
        }
      }
    },
    {
      "label": "Stop Background Tasks",
      "type": "process",
      "command": ["${command:workbench.action.tasks.terminate}"]
    }
  ]
}
```

可根据您控制台打印的内容调整任务起始和结束标记。上述配置中声明了控制台出现 `Compiled` 字样表示构建完成。

### 更改调试链接

若需要 debug 的工程调试链接不为 `http://localhost:3333` 时，可以修改 launch.json 中的 `url` 和 `urlFilter` 配置的地址链接。

### 更改 Chrome 实例

默认将启动新的 Chrome 实例进行调试。首次启动为无用户数据的 Chrome (无用户态，无插件）实例，在调试过程操作的数据将得以保存（历史，安装插件等）。

Rax 项目，推荐安装 [Guan Extension](https://chrome.google.com/webstore/detail/guan-extension/jfalnandddhgfnmejfgjgfbfnnkhljog)。

### 其他

如果想使用常用登录态的 Chrome 进行调试，可切换 `launch.json` 中的 `request` 配置为 `attach`，且必须重启当前的 Chrome 才能生效。
