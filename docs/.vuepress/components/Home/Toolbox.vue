<template>
  <article class="toolbox-container">
    <div class="toolbox-text">
      <h3 class="title">Toolkit</h3>
      <p class="descibe">一款多端开发的工具箱，以帮助开发者更快速配置前端环境，更轻松管理开发软件。</p>
      <quick-start />
      <nav-links class="toolbox-nav" :navItems="toolboxNavItems" />
    </div>
    <img :src="require('@assets/Home/toolbox/toolbox-img.png')" alt="" class="toolbox-img" />
  </article>
</template>

<script>
import QuickStart from './components/QuickStart';
import NavLinks from './components/NavLinks';
export default {
  name: 'Toolbox',
  components: {
    QuickStart,
    NavLinks,
  },
  data() {
    return {
      toolboxNavItems: [
        { imgSource: require('@assets/Home/toolbox/toolbox-icon1.png'), linkSource: '', text: '环境配置' },
        {
          imgSource: require('@assets/Home/toolbox/toolbox-icon2.png'),
          linkSource: '',
          text: '软件管理',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.toolbox-container {
  margin-bottom: 141px;
  overflow-x: auto;
  display: flex;
  .toolbox-text {
    margin-right: 60px;
    .title {
      color: #000;
      font-size: 32px;
      font-weight: bold;
      margin: 17px 0;
    }
    .descibe {
      color: #36415f;
      font-size: 16px;
      line-height: 30px;
      width: 401px;
      height: 90px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .toolbox-nav {
      margin-top: 91px;
    }
  }
  .toolbox-img {
    width: 745px;
    height: 447px;
  }
}
@media screen and (max-width: 750px) {
  .toolbox-container {
    justify-content: center;
    align-items: center;
    max-width: 848px;
    .toolbox-img {
      display: none;
    }
    .toolbox-text {
      text-align: center;
      margin: 0;
      .toolbox-nav {
        margin-top: 50px;
        text-align: center;
      }
    }
  }
}
</style>
