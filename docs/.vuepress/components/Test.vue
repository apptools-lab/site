<template>
  <h1 class="demo">
    {{ msg }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello this is <Test>',
    };
  },
};
</script>

<style scoped>
.demo {
  color: green;
}
</style>
