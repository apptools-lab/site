<template>
  <div class="body-container">
    <MainLogo />
    <Pack />
    <Material />
  </div>
</template>

<script>
import MainLogo from './components/MainLogo';
import Pack from './components/Pack';
import Material from './components/Material';
export default {
  name: 'Body',
  components: {
    MainLogo,    
    Pack,
    Material,
  },
};
</script>

<style lang="scss" scoped>
.body-container {
  background-image: url('https://img.alicdn.com/imgextra/i4/O1CN01hKWekV1Gfk7rZ26P8_!!6000000000650-2-tps-3840-2820.png');
  background-position: 0 -75px, center;
  background-repeat: no-repeat;
  background-size: 100% 1425px;
  background-color: #f9f9f9;
}
</style>
