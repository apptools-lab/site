<template>
  <div class="background-container">
    <Nav />
    <Toolkit />
  </div>
</template>

<script>
import Nav from './Nav';
import Toolkit from './Toolkit';
export default {
  components: {
    Nav,
    Toolkit,
  },
};
</script>

<style lang="scss" scoped>
.background-container {
  background-image: url(~@assets/Home/Body/background.png);
  background-position: 0 -70px, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 113px 100px 111px;
}
</style>