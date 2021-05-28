const getSidebar = require('./utils/getSidebar');
const path = require('path');
module.exports = {
  title: 'AppWorks',
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-multimd-table'));
    },
  },
  themeConfig: {
    logo: '/logo.png',
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
        text: '其它',
        ariaLabel: 'Menu',
        items: [
          { text: 'Rax', link: 'https://rax.alibaba-inc.com/' },
          { text: 'ICE', link: 'https://ice.alibaba-inc.com/' },
        ],
      },
    ],
    sidebar: getSidebar(),
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '/docs/.vuepress/assets'),
        '@home': path.resolve(__dirname, '/docs/.vuepress/components/Home')
      },
    },
  },
};
