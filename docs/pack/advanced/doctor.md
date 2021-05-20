---
title: 代码质量
order: 1
---

# 代码质量

在团队开发过程中，AppWorks 帮助实现代码质量的管控与提升。AppWorks 基于大量企业级项目实践产出质量评估模型，提供提升质量的建议和自动化完善功能，持续提升代码质量。

## 1. 编码规范

[@appworks/spec](https://www.npmjs.com/package/@appworks/spec) 遵循阿里巴巴前端编码规范，并提供了 [ICE](http://ice.work/) 和 [Rax](https://rax.js.org/) 项目的最佳实践，有助于提高团队内协助的效率以及代码的可维护性。

规范包含 ESLint、stylelint、commitlint 及 Prettier 的相关规则。

## 2. 自动修复

根据文档修改 VS Code 配置后，即可永久享受代码自动修复。

1. 打开 VS Code Settings，在搜索框中输入 `Format On Save` ，勾选开启相关选项。

![img](https://img.alicdn.com/imgextra/i3/O1CN011qrZBN1qXnPwgj2jD_!!6000000005506-2-tps-1324-556.png)

2.  打开 VS Code Settings，在搜索框中输入 `Default Formatter` ，选择 Prettier。

![img](https://img.alicdn.com/imgextra/i1/O1CN01wEvswe1DgFiTppCUI_!!6000000000245-2-tps-1688-486.png)

即可在保存文件时，自动修复编码问题。

![img](https://img.alicdn.com/imgextra/i3/O1CN01NE68vR1JqE2EhYWB6_!!6000000001079-1-tps-750-476.gif)

## 3. 质量检测

为实现团队代码规范的统一，并提升和改善团队代码质量，AppWorks 提供了 Doctor 解决方案。该方案目前包括多场景统一的 ESLint 规则配置、多维度的代码衡量标准、执行分析扫描代码及代码修复等模块。通过各个模块协调配合，评估质量评分并修复规范问题，保障代码规范的统一。

1. 通过 `⇧⌘P` 或 `Ctrl+Shift+P` 快捷键唤醒命令面板
2. 输入 `AppWorks: 扫描代码` 激活插件

![img](https://img.alicdn.com/imgextra/i3/O1CN01RQ3EyU1f5tVx2KIS5_!!6000000003956-1-tps-900-577.gif)

对项目进行 3 个维度的检测，包含：

1. **阿里 Lint 规范检测：** 通过 @iceworks/spec 扫描代码，并提供一键修复功能。（提供默认配置，用户项目的 @iceworks/spec 配置优先级最高）
2. **可维护度：** 通过 [typhonjs-escomplex](https://www.npmjs.com/package/typhonjs-escomplex) 扫描代码。复杂度评分低说明程序代码的判断逻辑复杂，可能质量低且难于阅读、测试和维护。
3. **重复度：** 通过 [jscpd](https://www.npmjs.com/package/jscpd) 扫描代码。重复的代码一旦出错，意味着加倍的工作量和持续的不可控。建议对项目定期进行代码重复度检测。减少冗余代码，进行代码抽象和重构。

## 4. 构建报告

（仅支持阿里内部工程）当您的项目执行构建部署时，将根据项目质量情况发送构建报告。

![img](https://img.alicdn.com/imgextra/i3/O1CN01rB5kMk1QO0wq2z0nz_!!6000000001965-2-tps-854-934.png)
