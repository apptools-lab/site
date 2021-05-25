const getSidebar = require('./utils/getSidebar');

module.exports = {
  title: 'Iceworks',
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
        text: '物料',
        ariaLabel: 'Menu',
        items: [
          { text: '自定义物料', link: '/materials/about' },
          { text: '官方模板', link: '/materialCenter/scaffold' },
          { text: '官方区块', link: '/materialCenter/block' },
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
};
