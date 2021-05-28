<template>
  <a :href="targetUrl" class="nav-item-container">
    <img v-if="imgUrl" :src="imgUrl" alt="logo" class="nav-img" />
    <span class="nav-text">{{ text }}</span>
  </a>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    targetUrl: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item-container {
  margin-left: 80;
  color: #252020;
  font-family: PingFangSC-Medium;
  font-size: 22.95px;
  min-width: 160px;
  .nav-img {
    display: inline-block;
    width: 18px;
    height: 23px;
    margin-right: 18px;
    vertical-align: middle;
  }
}
</style>
