<template>
  <div class="tabsNav">
    <ul class="tabs">
      <li
        v-for="tab in tabs"
        :key="tab.key"
        :class="`tab ${selectedTab === tab.key ? 'active' : ''}`"
        @click="onChange(tab.key)"
      >
        {{ tab.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
  props: {
    onChange: {
      type: Function,
      default: () => {},
    },
    selectedTab: {
      type: String,
    },
    tabs: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
