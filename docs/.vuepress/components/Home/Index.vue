<template>
  <div class="home-container">
    <Body />
    <Footer />
  </div>
</template>

<script>
import Body from './Body';
import Footer from './Footer';
export default {
  name: 'Home',
  components: {
    Body,
    Footer,
  },
};
</script>
