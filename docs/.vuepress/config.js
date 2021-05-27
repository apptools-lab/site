const getSidebar = require('./utils/getSidebar');
const path = require('path')
console.log(__dirname)
module.exports = {
  title: 'Appworks',
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-multimd-table'));
    },
  },
  themeConfig: {
    nav: [
      { text: '文档', link: '/pack/about' },
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
        '@assets': path.resolve(__dirname, '/docs/.vuepress/assets')
      }
    }
  }
};
