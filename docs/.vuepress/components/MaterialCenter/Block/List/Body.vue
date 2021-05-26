<template>
  <div class="body">
    <Card v-for="block in list" :key="block.repository" :block="block" />
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'Body',
  components: {
    Card,
  },
  props: {
    selectedCategory: {
      type: String,
    },
    blocks: {
      type: Array,
      default: [],
    },
  },
  watch: {
    blocks: function () {
      this.updateList(this.selectedCategory);
    },
    selectedCategory: function (val) {
      this.updateList(val);
    },
  },
  data() {
    return { list: [] };
  },
  methods: {
    updateList(selectedCategory) {
      let list = [];
      if (selectedCategory === '全部') {
        list = this.blocks;
      } else {
        list = this.blocks.filter((block) => block.category === selectedCategory);
      }
      this.list = list;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Body';
</style>
