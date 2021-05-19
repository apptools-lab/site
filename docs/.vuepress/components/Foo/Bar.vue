<template>
  <h1 class="demo">
    {{ msg }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello this is <Foo-Bar>',
    };
  },
};
</script>

<style scoped>
.demo {
  color: red;
}
</style>
