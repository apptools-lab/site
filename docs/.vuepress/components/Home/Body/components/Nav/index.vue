<template>
  <article class="nav-container">
    <nav class="nav-items">
      <nav-item
        v-for="nav in navItems"
        :key="nav.text"
        :text="nav.text"
        :targetUrl="nav.targetUrl"
        :imgUrl="nav.imgUrl"
        class="nav-item"
      ></nav-item>
    </nav>
  </article>
</template>

<script>
import NavItem from './NavItem';
export default {
  name: 'Nav',
  components: {
    NavItem,
  },
  data() {
    return {
      navItems: [
        {
          text: '开发工具箱',
          targetUrl: '#toolkit',
          imgUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01VhzK3z1aO9E2HAu69_!!6000000003319-2-tps-38-48.png',
        },
        { text: '前端研发套件', targetUrl: '#suite' },
        { text: '海量物料', targetUrl: '#materials' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
