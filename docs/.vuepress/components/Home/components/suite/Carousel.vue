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
          {{ activeIndex === index ? item.adjective : '' }}{{ item.text }}
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
          :src="require('@assets/Home/suite/0002.png')"
          alt=""
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
          imgUri: '',
        },
        {
          adjective: '友好的',
          text: '开发体验',
          message:
            'The container level tabbar framework scheme of the general hybrid business scenario, the ultimate native interaction experience,456',
          imgUri: '',
        },
        {
          adjective: '强大的',
          text: '编码辅助',
          message:
            'The container level tabbar framework scheme of the general hybrid business scenario, the ultimate native interaction experience,768',
          imgUri: '',
        },
        {
          adjective: '详尽的',
          text: '代码分析',
          message:
            'The container level tabbar framework scheme of the general hybrid business scenario, the ultimate native interaction experience,1234',
          imgUri: '',
        },
        {
          adjective: '完善的',
          text: '编程指标',
          message:
            'The container level tabbar framework scheme of the general hybrid business scenario, the ultimate native interaction experience,9876',
          imgUri: '',
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
  height: 900px;
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
    margin: 41px auto 83px auto;
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
      left: 0;
    }
    .right {
      right: 0;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0.1;
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
  }
}
</style>
