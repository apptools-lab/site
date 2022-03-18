<template>
  <a :href="link" :class="`quick-start ${type}`">{{ text }}</a>
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
      default: '快速开始',
    },
    type: {
      type: String,
      require: false,
      default: 'normal',
    },
  },
};
</script>

<style lang="scss" scoped>
.quick-start {
  padding: 0 15px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  color: #fff;
  font-size: 16px;
  height: 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 17px 13px 0 rgba(80, 82, 255, 0.11);
  outline: none;
  cursor: pointer;
  margin-right: 20px;
}
.quick-start.primary {
  background: linear-gradient(90deg, rgb(30, 90, 255), rgb(36, 45, 255));
}
</style>
