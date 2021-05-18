import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'AppWorks',
  favicon:
    'https://img.alicdn.com/imgextra/i4/O1CN01CHZyp9299xV7EhXza_!!6000000008026-2-tps-128-128.png',
  logo:
    'https://img.alicdn.com/imgextra/i4/O1CN01CHZyp9299xV7EhXza_!!6000000008026-2-tps-128-128.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: '/',
  publicPath: '/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/appworks-lab/pack',
    },
  ],
  styles: ['.__dumi-default-layout-footer-meta{display: none !important}'],
  menus: {
    '/zh-CN/pack': [
      {
        title: '关于 AppWorks',
        path: '/zh-CN/pack',
      },
      {
        title: '快速开始',
        path: '/zh-CN/pack/quick-start',
      },
      {
        title: 'FAQ',
        path: '/zh-CN/pack/faq',
      },
      {
        title: '基础教程',
        path: '/zh-CN/pack/basic/toolkit',
        children: [
          {
            title: '前端环境',
            path: '/zh-CN/pack/basic/toolkit',
          },
          {
            title: '创建项目',
            path: '/zh-CN/pack/basic/create-project',
          },
          {
            title: '预览调试',
            path: '/zh-CN/pack/basic/debug',
          },
          {
            title: '物料使用',
            path: '/zh-CN/pack/basic/materials',
          },
          {
            title: '代码补全',
            path: '/zh-CN/pack/basic/intelli-code',
          },
          {
            title: '代码重构',
            path: '/zh-CN/pack/basic/codemod',
          },
        ],
      },
      {
        title: '高级教程',
        path: '/zh-CN/pack/advanced/doctor',
        children: [
          {
            title: '代码质量',
            path: '/zh-CN/pack/advanced/doctor',
          },
          {
            title: '研发效能',
            path: '/zh-CN/pack/advanced/time',
          },
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
