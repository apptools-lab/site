<template>
  <div class="body-container">
    <MainLogo />
    <Nav />
    <Toolkit />
    <Pack />
    <Material />
    <UserGroup />
  </div>
</template>

<script>
import Nav from './components/Nav';
import Toolkit from './components/Toolkit';
import MainLogo from './components/MainLogo';
import Pack from './components/Pack';
import Material from './components/Material';
import UserGroup from './components/UserGroup';

export default {
  name: 'Body',
  components: {
    MainLogo,
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
  background-image: url(~@assets/Home/Body/background.png);
  background-position: 0 -75px, center;
  background-repeat: no-repeat;
  background-size: 100% 1425px;
}
</style>
