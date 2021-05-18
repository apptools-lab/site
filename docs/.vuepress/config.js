const getSidebar = require('./utils/getSidebar');

module.exports = {
  title: 'Iceworks',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-multimd-table'));
    },
  },
  themeConfig: {
    nav: [
      { text: 'Pack', link: '/pack/about' },
      { text: 'ToolKit', link: '/toolkit/about' },
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
