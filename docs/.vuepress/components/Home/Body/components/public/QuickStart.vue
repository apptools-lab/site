<template>
  <a :href="link" class="quick-start">{{text}}</a>
</template>

<script>
export default {
  name: 'QuickStart',
   props: {
    link: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: false,
      default: '快速开始'
    },
  },
};
</script>

<style lang="scss" scoped>
.quick-start {
  line-height: 40px;
  text-align: center;
  display: inline-block;
  background: linear-gradient(90deg, rgb(30, 90, 255), rgb(36, 45, 255));
  color: #fff;
  font-size: 16px;
  width: 114px;
  height: 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 17px 13px 0 rgba(80, 82, 255, 0.11);
  outline: none;
  cursor: pointer;
}
</style>
