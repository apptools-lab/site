<template>
  <div class="content">
    <Banner />
  </div>
</template>

<script>
import Banner from './Banner/';

export default {
  components: {
    Banner,
  },
};
</script>

<style scoped>
.content {
  margin-top: 25px !important;
  width: 100vw;
  margin-left: calc(0px - 50vw + 740px / 2);
}
</style>
