<template>
  <div class="linklist-container">
    <h4 class="title">{{ title }}</h4>
    <ul class="linklist-items">
      <Linkitem v-for="item in linkItems" :key="item.text" :item="item" />
    </ul>
  </div>
</template>

<script>
import Linkitem from './Linkitem';
export default {
  name: 'ResourceList',
  components: {
    Linkitem,
  },
  props: {
    title: {
      type: String,
    },
    linkItems: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.linklist-container {
  padding-right: 90px;
  .title {
    color: #fff;
  }
  .linklist-title {
    font-size: 16px;
  }
  .linklist-items {
    padding: 0;
  }
}
@media screen and (max-width: 750px) {
  .linklist-container {
    padding: 0;
  }
}
</style>
