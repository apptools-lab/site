<template>
  <article class="material-container">
    <a name="materials" id="materials"></a>
    <div class="rich-material">
      <img
        src="https://img.alicdn.com/imgextra/i4/O1CN01tWElsC1bevLkCJOvI_!!6000000003491-2-tps-1428-952.png"
        alt=""
        class="material-img"
      />
      <div class="material-describe">
        <h4 class="title">海量物料</h4>
        <p class="detail">提供多种垂直领域模板和区块，快速创建项目，支持风格切换，满足个性化需求。</p>
        <quick-start text="使用物料" type="primary" link="/pack/basic/materials" />
        <quick-start text="开发自定义物料" type="primary" link="/materials/about" />
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
          imgSource: 'https://img.alicdn.com/imgextra/i1/O1CN019uFWfu1C84XtBCBOP_!!6000000000035-2-tps-50-50.png',
          linkSource: '/materialCenter/react',
          text: 'React 物料',
        },
        {
          imgSource: 'https://img.alicdn.com/imgextra/i1/O1CN01Obj2nB1zIWl3XWjc4_!!6000000006691-2-tps-52-42.png',
          linkSource: '/materialCenter/rax',
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
