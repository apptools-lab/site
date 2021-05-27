<template>
  <li class="useritem-container">
    <img :src="user.img" alt="" />
    <span>{{ user.text }}</span>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.useritem-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 64px;
    height: 64px;
    margin-bottom: 15px;
  }
  span {
    color: #36415f;
    font: 16px PingFangSC-Light;
  }
}
</style>
