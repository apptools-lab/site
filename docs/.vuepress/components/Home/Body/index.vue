<template>
  <div class="body-container">
    <div class="background-container">
      <Nav />
      <Toolkit />
    </div>
    <Pack />
    <Material />
    <UserGroup />
  </div>
</template>

<script>
import Nav from './components/Nav';
import Toolkit from './components/Toolkit';
import Pack from './components/Pack';
import Material from './components/Material';
import UserGroup from './components/UserGroup';

export default {
  name: 'Body',
  components: {
    Nav,
    Toolkit,
    Pack,
    Material,
    UserGroup,
  },
};
</script>

<style lang="scss" scoped>
.body-container {
  .background-container {
    background-image: url(~@assets/Home/Body/background.png);
    background-size: contain;
    padding: 113px 100px 111px;
  }
}
</style>
