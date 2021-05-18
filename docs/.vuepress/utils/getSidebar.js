const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

const CATALOG_CONFIG = [
  {
    dirname: 'guide',
    title: '使用指南',
    order: 3,
  },
  {
    dirname: 'more',
    title: '附加说明',
    order: 4,
  },
  {
    dirname: 'vscode',
    title: 'VS Code 指南',
    order: 5,
  },
];

const BASE_PATH = path.join(__dirname, '../../');

function getMarkdownOrder(filename) {
  return (matter(fs.readFileSync(path.join(BASE_PATH, filename), 'utf-8')).data || {}).order;
}

function compareOrder(a, b) {
  const orderA = a.order || getMarkdownOrder(a);
  const orderB = b.order || getMarkdownOrder(b);

  return orderA - orderB;
}

function getSidebar() {
  const result = [];

  const docs = glob.sync('**/*.md', { cwd: BASE_PATH, ignore: 'README.md' });

  // 整理数据结构
  docs.forEach((doc) => {
    const dirname = path.parse(doc).dir;
    const catalog = CATALOG_CONFIG.find((config) => config.dirname === dirname);
    if (dirname && catalog) {
      // 将说有目录下文档 合成一个对象
      const catalogItem = result.find((item) => item.dirname === dirname);
      if (!catalogItem) {
        result.push({
          ...catalog,
          collapsable: false,
          sidebarDepth: 3,
          children: [doc],
        });
      } else {
        catalogItem.children.push(doc);
      }
    } else {
      result.push(doc);
    }
  });

  // 排序最顶层侧边栏
  result.sort(compareOrder);
  // 排序目录下侧边栏
  result.forEach((item) => {
    if (item.dirname) {
      item.children.sort(compareOrder);

      delete item.dirname;
      delete item.order;
    }
  });

  return result;
}

module.exports = getSidebar;
