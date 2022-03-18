---
title: 版本说明
order: 2
---

## `iceworks` -> `@appworks/cli`

AppWorks CLI `@appworks/cli` 的前身是 Iceworks CLI `iceworks`，随着我们的可视化工具 VS Code 插件的品牌从 Iceworks 演变到 AppWorks，对应的物料开发工具也从 `iceworks` 升级为 `@appworks/CLI`。AppWorks CLI 与原先的 Iceworks CLI 在功能上完全一致，因此使用上不会有任何变化。

升级步骤：

```bash
# 卸载 Iceworks CLI
$ npm rm -g iceworks

# 安装 AppWorks CLI
$ npm i -g @appworks/cli

# [可选]迁移配置文件
$ mv  ~/.iceworks/cli-config.json ~/.appworks/cli-config.json

# 使用新命令（不再提供原先的 iceworks/ice 命令）
$ appworks -V
=> 3.0.0
```