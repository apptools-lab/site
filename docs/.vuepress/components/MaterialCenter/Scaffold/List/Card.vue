<template>
  <div class="card">
    <div class="content">
      <div class="item">
        <div class="screenshots">
          <img :src="scaffold.screenshot" class="snapshot" />
        </div>
      </div>
      <div class="item-info">
        <div class="item-title">{{ scaffold.name }}</div>
        <div class="item-desc">{{ scaffold.description }}</div>
      </div>
      <div class="item-action">
        <a target="_blank" class="item-button" :href="scaffold.homepage">
          <img src="https://img.alicdn.com/tfs/TB1HY7LBIbpK1RjSZFyXXX_qFXa-201-200.png" />
          效果预览
        </a>
        <a target="_blank" class="item-button" :href="scaffold.repository">
          <img src="https://img.alicdn.com/tfs/TB1ePSoJpzqK1RjSZSgXXcpAVXa-201-200.png" />
          查看源码
        </a>
        <a target="_blank" class="item-button" href="/pack/basic/materials.html">
          <img src="https://img.alicdn.com/tfs/TB1ESMMBNTpK1RjSZFMXXbG_VXa-200-200.png" />
          使用模板
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    scaffold: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Card';
</style>
