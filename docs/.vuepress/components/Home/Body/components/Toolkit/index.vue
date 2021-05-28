<template>
  <article class="toolbox-container">
    <a name="tookit"></a>
    <div class="toolbox-text">
      <h3 class="title">Toolkit</h3>
      <p class="descibe">一款多端开发的工具箱，以帮助开发者更快速配置前端环境，更轻松管理开发软件。</p>
      <quick-start />
      <nav-links class="toolbox-nav" :navItems="toolboxNavItems" />
    </div>
    <img :src="require('@assets/Home/Body/Toolkit/toolbox-img.png')" alt="" class="toolbox-img" />
  </article>
</template>

<script>
import QuickStart from '../public/QuickStart';
import NavLinks from '../public/NavLinks';
export default {
  name: 'Toolkit',
  components: {
    QuickStart,
    NavLinks,
  },
  data() {
    return {
      toolboxNavItems: [
        { imgSource: require('@assets/Home/Body/Toolkit/toolbox-icon1.png'), linkSource: '', text: '环境配置' },
        {
          imgSource: require('@assets/Home/Body/Toolkit/toolbox-icon2.png'),
          linkSource: '',
          text: '软件管理',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
