<template>
  <article class="material-container">
    <a name="materials" id="materials"></a>
    <div class="rich-material">
      <img :src="require('@assets/Home/Body/Material/material-img.png')" alt="" class="material-img" />
      <div class="material-describe">
        <h4 class="title">海量物料</h4>
        <p class="detail">提供多种垂直领域模板和区块，快速创建项目，支持风格切换，满足个性化需求。</p>
        <quick-start text="使用物料" link="/pack/basic/materials" />
        <nav-links class="material-nav" :navItems="materialNavItems" />
      </div>
    </div>
  </article>
</template>

<script>
import QuickStart from '../public/QuickStart';
import NavLinks from '../public/NavLinks';
export default {
  name: 'material',
  data() {
    return {
      materialNavItems: [
        {
          imgSource: require('@assets/Home/Body/Material/material-icon1.png'),
          linkSource: '/materialCenter/fusion',
          text: 'Fusion 物料',
        },
        {
          imgSource: require('@assets/Home/Body/Material/material-icon2.png'),
          linkSource: '/materialCenter/antd',
          text: 'Ant Design 物料',
        },
        {
          imgSource: require('@assets/Home/Body/Material/material-icon3.png'),
          linkSource: '/materialCenter/Rax',
          text: 'Rax 物料',
        },
      ],
    };
  },
  components: {
    QuickStart,
    NavLinks,
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
