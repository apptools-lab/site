<template>
  <div class="content">
    <Banner />
    <List />
  </div>
</template>

<script>
import Banner from './Banner/';
import List from './List/';

export default {
  components: {
    Banner,
    List,
  },
};
</script>

<style scoped>
/* 父同期默认 740px，避免影响其他页面，需全屏展示的组件自行设置宽度 */
.content {
  margin-top: 25px !important;
  width: 100vw;
  margin-left: calc(0px - 50vw + 740px / 2);
}
</style>
