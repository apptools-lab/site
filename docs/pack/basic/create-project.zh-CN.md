---
order: 2
title: 创建项目
---

# 创建项目

---

## 应用创建器

当您安装了插件之后，VS Code 的活动栏上会增加一个「Appworks 图标」，单击此图标进入应用管理器面板。

1. 使用模版创建项目，点击下一步。
2. 输入项目名称和项目路径。
3. 点击完成，创建项目。

<img src="https://img.alicdn.com/imgextra/i3/O1CN011fIOD21fEb2aKShWh_!!6000000003975-1-tps-1220-942.gif" alt="示例用图" style="transform: scale(.9, .9); box-shadow: 8px 8px 10px gray;border-radius:1%;"  />

## 安装依赖

推荐使用 yarn 管理 npm 依赖，并使用国内源。（阿里用户推荐 tnpm 使用内网源）

```shell
# 国内源
$ yarn

# 阿里内网源
$ tnpm install

```

## 启动项目

```shell
$ yarn start
```

在浏览器里打开 http://localhost:3333/ ,能看到以下界面。

<img src="https://img.alicdn.com/imgextra/i2/O1CN01O2iKLJ1XK4r6pdim6_!!6000000002904-2-tps-1266-791.png" alt=“示例用图” style="transform: scale(.85, .85) translateY(-5%); box-shadow: 12px 12px 15px gray;border-radius:1%;" />
