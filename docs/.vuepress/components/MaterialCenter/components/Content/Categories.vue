<template>
  <div class="container">
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
  name: 'Categories',
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
@import './Categories';
</style>
