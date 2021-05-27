<template>
  <div class="link-item-container">
    <img :src="item.img" v-if="item.img" alt="icon" style="max-width: 16px; max-height: 16px" />
    <a :href="item.url">{{ item.text }}</a>
  </div>
</template>

<script>
export default {
  name: 'LinkItem',
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.link-item-container {
  margin-bottom: 15px;
  min-width: 150px;
  img {
    display: inline-block;
    margin-right: 5px;
  }
  a {
    color: #fff;
    vertical-align: top;
  }
}
</style>