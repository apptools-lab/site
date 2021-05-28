<template>
  <article class="nav-container">
    <img src="/logo.png" alt="logo" class="logo" />
    <div class="describe">
      <p class="describe-title">AppWorks</p>
      <p class="describe-detail">多端研发套件，让多端开发更快更好更轻松。</p>
    </div>
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
        { text: 'Toolkit', targetUrl: '#toolkit', imgUrl: require('@assets/Home/Body/Nav/label-logo.png') },
        { text: '多端研发套件', targetUrl: '#suite' },
        { text: '海量物料', targetUrl: '#materials' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
