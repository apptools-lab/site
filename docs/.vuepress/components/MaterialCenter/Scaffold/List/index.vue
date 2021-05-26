<template>
  <div class="container">
    <Header
      :categories="categories"
      :selectedCategory="selectedCategory"
      :updateSelectedCategory="updateSelectedCategory"
    />
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'List',
  components: {
    Header,
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
          if (result && result.scaffolds) {
            this.scaffolds = result.scaffolds;

            //  处理目录
            const cache = {};
            this.scaffolds.forEach((scaffold) => {
              if (cache[scaffold.category] === undefined) {
                cache[scaffold.category] = 1;
              } else {
                cache[scaffold.category]++;
              }
            });

            this.categories = [];
            Object.keys(cache).forEach((name) => {
              if (name) {
                this.categories.push({ name, total: cache[name] });
              }
            });
            this.categories.unshift({ name: '全部', total: this.scaffolds.length });
          }
        });
    },
  },
  data() {
    return {
      selectedCategory: '全部',
      categories: [{ name: '全部', total: 0 }],
      scaffolds: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
