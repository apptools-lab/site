<template>
  <article class="logo-container">
    <img
      src="https://img.alicdn.com/imgextra/i4/O1CN01AvqMOu1sYpY1j8xaI_!!6000000005779-2-tps-574-204.png"
      alt="logo"
      class="logo"
    />
    <div class="describe">
      <p class="describe-title">AppWorks</p>
      <p class="describe-detail">基于 VS Code 插件的前端研发工具集，让前端开发更快更好更轻松。</p>
    </div>
    <quick-start class="quick-start" text="安装 AppWorks" type="primary" link="vscode:extension/iceworks-team.iceworks" />
  </article>
</template>

<script>
import QuickStart from '../public/QuickStart.vue';
export default {
  components: {
    QuickStart,
  },
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
