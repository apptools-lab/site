<template>
  <article class="material-container">
    <a name="materials" id="materials"></a>
    <div class="rich-material">
      <img :src="require('@assets/Home/material/material-img.png')" alt="" class="material-img" />
      <div class="material-describe">
        <h4 class="title">海量物料</h4>
        <p class="detail">提供多种垂直领域模板和区块，快速创建项目，支持风格切换，满足个性化需求。</p>
        <quick-start />
        <nav-links class="material-nav" :navItems="materialNavItems" />
      </div>
    </div>
  </article>
</template>

<script>
import QuickStart from './components/QuickStart';
import NavLinks from './components/NavLinks';
export default {
  name: 'material',
  data() {
    return {
      materialNavItems: [
        { imgSource: require('@assets/Home/material/material-icon1.png'), linkSource: '', text: 'Block' },
        { imgSource: require('@assets/Home/material/material-icon2.png'), linkSource: '', text: 'Modular' },
        { imgSource: require('@assets/Home/material/material-icon3.png'), linkSource: '', text: 'Custom' },
      ],
    };
  },
  components: {
    QuickStart,
    NavLinks,
  },
};
</script>

<style lang="scss" scoped>
.material-container {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0px 50px 170px 50px;
  .rich-material {
    padding-top: 129px;
    max-width: 1070px;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    .material-img {
      width: 694px;
      height: 457px;
      margin-right: 68px;
    }
    .material-describe {
      max-width: 401px;
      min-width: 289px;
      .title {
        font: bold 32px SFProText-Bold;
        margin: 17px 0;
      }
      .detail {
        font: 16px/30px PingFangSC-Light;
        color: #36415f;
        margin: 17px 0 39px 0;
      }
      .material-nav {
        margin-top: 73px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .material-container {
    .material-img {
      display: none;
    }
    .material-describe {
      text-align: center;
    }
  }
}
</style>
