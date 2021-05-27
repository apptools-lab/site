<template>
  <article class="suite-container">
    <h3 class="title">R &amp; D Suite</h3>
    <carousel />
  </article>
</template>

<script>
import Carousel from './components/suite/Carousel';
export default {
  name: 'Suite',
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.suite-container {
  padding-top: 1425px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 32px;
    font-weight: bold;
  }
}
</style>
