<template>
  <div class="container">
    <Categories
      :categories="categories"
      :selectedCategory="selectedCategory"
      :updateSelectedCategory="updateSelectedCategory"
    />
    <List :selectedCategory="selectedCategory" :materialsType="materialsType" :data="data" />
  </div>
</template>

<script>
import Categories from './Categories';
import List from './List';

export default {
  name: 'Content',
  components: {
    Categories,
    List,
  },
  props: {
    materialsType: {
      type: String, // scaffolds, blocks
    },
    data: {
      type: Array, // Fusion, AntDesign, Vue, Rax 物料
    },
  },
  watch: {
    data: function () {
      this.getCategories();
    },
  },
  data() {
    return {
      selectedCategory: '全部',
      categories: [{ name: '全部', total: 0 }],
      list: [],
    };
  },
  methods: {
    updateSelectedCategory(key) {
      this.selectedCategory = key;
    },

    getCategories() {
      //  处理目录
      const cache = {};
      this.data.forEach((block) => {
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
      this.selectedCategory = '全部';
      this.categories.unshift({ name: '全部', total: this.data.length });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
