<template>
  <nav class="nav-container">
    <ul class="nav-items">
      <li class="nav-item" v-for="(nav, index) in navItems" :key="index">
        <img :src="nav.imgSource" alt="icon" class="nav-icon" />
        <a :href="nav.linkSource" class="nav-link">{{ nav.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    navItems: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  padding: 0;
  .nav-items {
    padding: 0;
    .nav-item {
      list-style: none;
      margin-bottom: 23px;
      height: 30px;
      .nav-icon {
        padding-right: 33px;
        width: 25px;
        height: 25px;
        display: inline-block;
      }
      .nav-link {
        vertical-align: top;
        color: #5d5d5d;
        font-size: 14px;
      }
      .nav-link::after {
        content: ' >';
      }
    }
  }
}
</style>
