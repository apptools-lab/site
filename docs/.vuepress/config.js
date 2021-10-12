const getSidebar = require('./utils/getSidebar');
const path = require('path');
module.exports = {
  title: 'AppWorks',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-multimd-table'));
    },
  },
  themeConfig: {
    logo: 'https://img.alicdn.com/imgextra/i4/O1CN01AvqMOu1sYpY1j8xaI_!!6000000005779-2-tps-574-204.png',
    nav: [
      { text: '文档', link: '/pack/about' },
      {
        text: '物料',
        ariaLabel: 'Menu',
        items: [
          { text: '自定义物料', link: '/materials/about' },
          { text: 'Fusion 物料', link: '/materialCenter/fusion' },
          { text: 'Ant Design 物料', link: '/materialCenter/antd' },
          { text: 'Rax 物料', link: '/materialCenter/rax' },
          { text: 'Vue 物料', link: '/materialCenter/vue' },
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/apptools-lab/appworks',
      },
      {
        text: 'AppToolkit',
        link: 'https://github.com/apptools-lab/AppToolkit#readme',
      },
    ],
    sidebar: getSidebar(),
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/docs/.vuepress'),
        '@assets': path.resolve(__dirname, '/docs/.vuepress/assets'),
      },
    },
  },
  // https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-RWP35PWF8L',
      },
    ],
  ],
};
