const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');
const configs = require('../sideBarConfig');

const BASE_PATH = path.join(__dirname, '../../');

function getSidebar() {
  const result = {};

  configs.forEach(config => {
    function getMarkdownOrder(filename) {
      return (matter(fs.readFileSync(path.join(BASE_PATH, config.dirname, filename), 'utf-8')).data || {}).order;
    }

    function compareOrder(a, b) {
      const orderA = a.order || getMarkdownOrder(a);
      const orderB = b.order || getMarkdownOrder(b);

      return orderA - orderB;
    }

    const items = [];
    const docs = glob.sync('**/*.md', { cwd: path.join(BASE_PATH, config.dirname), ignore: 'README.md' });

    // 整理数据结构
    docs.forEach(doc => {
      const dirname = path.parse(doc).dir;
      const catalog = config.children.find(config => config.dirname === dirname);

      if (dirname && catalog) {
        // 将说有目录下文档 合成一个对象
        const catalogItem = items.find(item => item.dirname === dirname);
        if (!catalogItem) {
          items.push({
            ...catalog,
            collapsable: false,
            children: [doc],
          });
        } else {
          catalogItem.children.push(doc);
        }
      } else {
        items.push(doc);
      }
    });

    // 排序最顶层侧边栏
    items.sort(compareOrder);
    console.log(33);
    // 排序目录下侧边栏
    items.forEach(item => {
      if (item.dirname) {
        item.children.sort(compareOrder);

        delete item.dirname;
        delete item.order;
      }
    });

    result[`/${config.dirname}/`] = items;
  });

  console.log(result);
  return result;
}

module.exports = getSidebar;
