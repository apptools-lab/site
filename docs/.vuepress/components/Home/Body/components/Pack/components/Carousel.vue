<template>
  <div class="carousel-container">
    <nav>
      <ul class="nav-items">
        <li
          class="nav-item"
          :class="activeIndex === index ? 'nav-item-active' : ''"
          v-for="(item, index) in carouselItems"
          :key="index"
          @click="handleChangeActive(index)"
        >
          {{ item.adjective }}{{ activeIndex === index ? item.text : '' }}
        </li>
      </ul>
    </nav>
    <transition name="fade" mode="out-in">
      <p class="carousel-message" :key="carouselItems[activeIndex].message">
        {{ carouselItems[activeIndex].message }}
      </p>
    </transition>
    <transition name="fade" mode="out-in">
      <quick-start
        class="quick-start"
        text="安装 VS Code 插件"
        link="vscode:extension/iceworks-team.iceworks"
        :key="carouselItems[activeIndex].link"
      />
    </transition>
    <div class="carousel-wrapper">
      <button class="carousel-button left" @click="handleDesc">&lt;</button>
      <transition name="fade" mode="out-in">
        <img
          :src="carouselItems[activeIndex].img"
          alt="img"
          class="carousel-img"
          :key="carouselItems[activeIndex].message"
        />
      </transition>
      <button class="carousel-button right" @click="handleAdd">&gt;</button>
    </div>
  </div>
</template>

<script>
import QuickStart from '../../public/QuickStart.vue';
export default {
  name: 'Carousel',
  components: { QuickStart },
  data() {
    return {
      carouselItems: [
        {
          adjective: '极简',
          text: '的开发流程',
          message: '我们将创建、调试和发布项目的操作通过插件的方式集成到了常用的编辑器中，让项目的开发流程更简单。',
          img: require('@assets/Home/Body/Pack/code-debug.gif'),
        },
        {
          adjective: '友好',
          text: '的开发体验',
          message: '我们提供了基于物料的可视化开发方式，区块组装生成页面，一键添加物料到代码，这对于新人来说非常友好。',
          img: require('@assets/Home/Body/Pack/code-fusion.gif'),
        },
        {
          adjective: '强大',
          text: '的编码辅助',
          message:
            '代码补全，定义预览与跳转，代码片段，代码重构的多重助力，让前端工程开发更轻松。不但支持 JavaScript 文件，对样式文件同样有效。',
          img: require('@assets/Home/Body/Pack/code-auxiliary.gif'),
        },
        {
          adjective: '详尽',
          text: '的代码分析',
          message:
            '非常快速的获取多维度检测报告，支持一键快速修复问题。帮助团队实现代码规范统一，提升和改善代码质量。并为阿里内部工程提供数据分析服务。',
          img: require('@assets/Home/Body/Pack/code-quality.gif'),
        },
        {
          adjective: '完善',
          text: '的编程指标',
          message:
            '我们自动追踪您在编辑器中的编码行为，通过对收集到的数据进行量化，以帮助您从数据中学习，更高效地编写代码，提高生产力。',
          img: require('@assets/Home/Body/Pack/code-action.gif'),
        },
      ],
      activeIndex: 0,
    };
  },
  mounted() {
    // autoPlay
    setInterval(() => this.handleAdd(), 20 * 1000);
  },
  methods: {
    handleChangeActive(index) {
      this.activeIndex = index;
    },
    handleAdd() {
      this.activeIndex = (this.activeIndex + 1) % 5;
    },
    handleDesc() {
      this.activeIndex = (this.activeIndex - 1 + 5) % 5;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Carousel';
</style>
