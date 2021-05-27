<template>
  <article class="appwork-container">
    <img src="/logo.png" alt="logo" class="logo" />
    <div class="describe">
      <p class="describe-title">AppWorks</p>
      <p class="describe-detail">The general browser standard helps you develop hybrid applications efficiently.</p>
    </div>
    <nav class="nav-items">
      <nav-item
        v-for="nav in navItems"
        :key="nav.text"
        :text="nav.text"
        :targetUrl="nav.targetUrl"
        :imgUrl="nav.imgUrl"
        class="nav-item"
      ></nav-item>
    </nav>
    <a id="toolkit"></a>
    <toolbox />
  </article>
</template>

<script>
import NavItem from './components/appwork/NavItem';
import Toolbox from './Toolbox.vue';
export default {
  name: 'Appwork',
  components: {
    NavItem,
    Toolbox,
  },
  data() {
    return {
      navItems: [
        { text: 'Toolkit', targetUrl: '#toolkit', imgUrl: require('@assets/Home/appworks/label-logo.png') },
        { text: 'R & D Suite', targetUrl: '#suite' },
        { text: 'Rich materials', targetUrl: '#materials' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.appwork-container {
  background-image: url(/appwork-background.png);
  background-size: contain;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  .logo {
    margin-top: 113px;
    width: 286px;
    height: 102px;
  }
  .describe {
    margin-top: 49px;
    text-align: center;
    &-title {
      margin: 0;
      font-size: 36px;
      font-weight: bolder;
      color: #000000;
    }
    &-detail {
      margin: 0;
      font-size: 20px;
      color: #666666;
    }
  }
  .nav-items {
    margin-top: 111px;
    width: 679px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(151, 151, 151, 0.32);
    padding-bottom: 19px;
  }
  .aw-logo {
    width: 88px;
    height: 37px;
    margin: 113px 0 72px 0;
  }
}
@media screen and (max-width: 750px) {
  .appwork-container {
    .nav-items {
      width: 100%;
      // overflow: scroll;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .nav-item:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
