import { defineConfig } from 'dumi';

const repo = 'AppWorks';

export default defineConfig({
  title: repo,
  favicon:
    'https://img.alicdn.com/imgextra/i4/O1CN01CHZyp9299xV7EhXza_!!6000000008026-2-tps-128-128.png',
  logo:
    'https://img.alicdn.com/imgextra/i4/O1CN01CHZyp9299xV7EhXza_!!6000000008026-2-tps-128-128.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/appworks-lab/pack',
    },
  ],
  styles: ['.__dumi-default-layout-footer-meta{display: none !important}'],
  // more config: https://d.umijs.org/config
});
