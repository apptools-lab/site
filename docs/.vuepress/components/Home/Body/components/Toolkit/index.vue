<template>
  <article class="toolkit-container">
    <a name="toolkit" id="toolkit"></a>
    <div class="toolkit-wrapper">
      <div class="toolkit-text">
        <h3 class="title">前端开发工具箱</h3>
        <p class="descibe">帮助开发者更快速配置前端环境，更轻松管理开发软件。</p>
        <quick-start
          text="立即下载"
          link="https://iceworks.oss-cn-hangzhou.aliyuncs.com/toolkit/mac/AppWorks%20Toolkit.dmg"
        />
        <nav-links class="toolkit-nav" :navItems="toolkitNavItems" />
      </div>
      <img
        src="https://img.alicdn.com/imgextra/i2/O1CN01gjN3b220ZIshZVz2V_!!6000000006863-2-tps-1800-1080.png"
        alt=""
        class="toolkit-img"
      />
    </div>
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
      toolkitNavItems: [
        {
          imgSource: 'https://img.alicdn.com/imgextra/i4/O1CN01zXkrs726AvUqABdug_!!6000000007622-2-tps-23-23.png',
          linkSource: '/pack/basic/toolkit#使用-toolkit',
          text: '环境配置',
        },
        {
          imgSource: 'https://img.alicdn.com/imgextra/i2/O1CN01YQ4UM11RDJJChNCmS_!!6000000002077-2-tps-25-25.png',
          linkSource: '/pack/basic/toolkit#使用-toolkit',
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
