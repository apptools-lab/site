<template>
  <div class="body">
    <Card v-for="scaffold in list" :key="scaffold.name" :scaffold="scaffold" />
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
    scaffolds: {
      type: Array,
      default: [],
    },
  },
  watch: {
    scaffolds: function () {
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
        list = this.scaffolds;
      } else {
        list = this.scaffolds.filter((scaffold) => scaffold.category === selectedCategory);
      }
      this.list = list;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Body';
</style>
