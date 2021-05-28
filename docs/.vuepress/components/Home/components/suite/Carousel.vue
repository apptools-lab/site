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
export default {
  name: 'Carousel',
  data() {
    return {
      carouselItems: [
        {
          adjective: '极简的',
          text: '开发流程',
          message:
            'The container level tabbar framework scheme of the general hybrid business scenario, the ultimate native interaction experience,123',
          img: '',
        },
        {
          adjective: '友好的',
          text: '开发体验',
          message:
            'The container level tabbar framework scheme of the general hybrid business scenario, the ultimate native interaction experience,456',
          img: '',
        },
        {
          adjective: '强大的',
          text: '编码辅助',
          message:
            '代码补全，定义预览与跳转，代码片段，代码重构的多重助力，让前端工程开发更轻松。不但支持 JavaScript 文件，对样式文件同样有效',
          img: require('@assets/Home/suite/code-auxiliary.gif'),
        },
        {
          adjective: '详尽的',
          text: '代码分析',
          message:
            '非常快速的获取多维度检测报告，支持一键快速修复问题。帮助团队实现代码规范统一，提升和改善代码质量。并为阿里内部工程提供数据分析服务',
          img: require('@assets/Home/suite/code-quality.gif'),
        },
        {
          adjective: '完善的',
          text: '编程指标',
          message:
            'The container level tabbar framework scheme of the general hybrid business scenario, the ultimate native interaction experience,9876',
          img: '',
        },
      ],
      activeIndex: 0,
    };
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
.carousel-container {
  width: 100%;
  height: 700px;
  .nav-items {
    line-height: 40px;
    border-bottom: 1px solid rgba(151, 151, 151, 0.32);
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .nav-item {
      color: #b7b7b7;
      font-size: 18px;
      display: inline-block;
      list-style: none;
      padding: 0 15px;
      cursor: pointer;
    }
    .nav-item-active {
      color: #252020;
      font-size: 16px;
      border-bottom: 2px solid #152dff;
    }
  }
  .carousel-message {
    font: 16px/30px PingFangSC-Light;
    margin: 41px auto 20px auto;
    max-width: 539px;
    text-align: center;
  }
  .carousel-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 553px;
    position: relative;
    .carousel-button {
      position: absolute;
      outline: none;
      width: 44px;
      height: 44px;
      background-color: #d8d8d8;
      color: #fff;
      border: none;
      font-size: 40px;
      border-radius: 50%;
      cursor: pointer;
    }
    .carousel-button:hover {
      color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    }
    .left {
      left: -100px;
    }
    .right {
      right: -100px;
    }
    .carousel-img {
      border-radius: 1%;
      box-shadow: -5px 10px 50px gray;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0.2;
  }
}
@media screen and (max-width: 750px) {
  .carousel-container {
    height: 710px;
    .nav-items {
      max-width: 750px;
      justify-content: flex-start;
      overflow-x: auto;
      .nav-item {
        min-width: 120px;
      }
      .nav-item:not(:last-of-type) {
        margin-right: 60px;
      }
    }
    .carousel-wrapper {
      min-height: 200px;
      .carousel-button {
        width: 30px;
        height: 30px;
        font-size: 16px;
      }
      .left {
        left: -50px;
      }
      .right {
        right: -50px;
      }
    }
  }
}
</style>
