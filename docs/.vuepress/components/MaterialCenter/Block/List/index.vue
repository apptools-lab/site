<template>
  <div class="container">
    <Header
      :categories="categories"
      :selectedCategory="selectedCategory"
      :updateSelectedCategory="updateSelectedCategory"
    />
    <Body :selectedCategory="selectedCategory" :blocks="blocks" />
  </div>
</template>

<script>
import Header from './Header';
import Body from './Body';

export default {
  name: 'List',
  components: {
    Header,
    Body,
  },
  mounted() {
    this.getData();
  },
  methods: {
    updateSelectedCategory(key) {
      this.selectedCategory = key;
    },
    getData() {
      fetch('https://ice.alicdn.com/assets/materials/react-materials.json')
        .then((response) => response.json())
        .then((result) => {
          if (result && result.blocks) {
            this.blocks = result.blocks;

            //  处理目录
            const cache = {};
            this.blocks.forEach((block) => {
              if (cache[block.category] === undefined) {
                cache[block.category] = 1;
              } else {
                cache[block.category]++;
              }
            });

            this.categories = [];
            Object.keys(cache).forEach((name) => {
              if (name) {
                this.categories.push({ name, total: cache[name] });
              }
            });
            this.categories.unshift({ name: '全部', total: this.blocks.length });
          }
        });
    },
  },
  data() {
    return {
      selectedCategory: '全部',
      categories: [{ name: '全部', total: 0 }],
      blocks: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
