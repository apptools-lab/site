<template>
  <div>
    <div class="list" v-if="materialsType === 'blocks'">
      <BlockCard v-for="block in list" :key="block.repository" :block="block" />
    </div>
    <div class="list" v-if="materialsType === 'scaffolds'">
      <ScaffoldCard v-for="scaffold in list" :key="scaffold.repository" :scaffold="scaffold" />
    </div>
  </div>
</template>

<script>
import BlockCard from './BlockCard';
import ScaffoldCard from './ScaffoldCard';

export default {
  name: 'List',
  components: {
    BlockCard,
    ScaffoldCard,
  },
  props: {
    selectedCategory: {
      type: String,
    },
    materialsType: {
      type: String,
    },
    data: {
      type: Array,
      default: [],
    },
  },
  watch: {
    data: function () {
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
        list = this.data;
      } else {
        list = this.data.filter((item) => item.category === selectedCategory);
      }
      this.list = list;
      console.log(this.materialsType);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './List';
</style>
