> 在修改文档之前，请先阅读此文章

### 目录结构

```
- foo.md      文档内容, 可以有文件夹嵌套
- yoo.md
```

### 文档结构

```markdown
---
title: 文档标题(必须有)
order: 可选, 文档顺序, 数字越小越在前面, 否则按照字母序
---

markdown 格式的文档内容
```

平台侧支持了 order 配置，其他同 [VuePress](https://www.vuepress.cn/)
配置目录文件夹侧边栏，请见 `docs/.vuepress/utils/getSidebar.js`
