<template>
  <div class="header">
    <ul class="categories">
      <li
        v-for="category in categories"
        :key="category.name"
        :class="selectedCategory === category.name ? 'active' : ''"
        @click="updateSelectedCategory(category.name)"
      >
        {{ category.name }} {{ category.total }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    updateSelectedCategory: {
      type: Function,
      default: () => {},
    },
    selectedCategory: {
      type: String,
    },
    categories: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Header';
</style>
