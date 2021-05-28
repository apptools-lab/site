<template>
  <article class="suite-container">
    <a name="suite" id="suite"></a>
    <div class="suite-wrapper">
      <h3 class="title">多端研发套件</h3>
      <carousel />
    </div>
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
  padding-top: 1332px;
  .suite-wrapper {
    padding: 93px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      text-align: center;
      font-size: 32px;
      font-weight: bold;
    }
  }
}
@media screen and (max-width: 750px) {
  .suite-container {
    padding-top: 1405px;
  }
}
</style>
