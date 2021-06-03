<template>
  <article class="usergroup-container">
    <h4 class="title">谁在使用？</h4>
    <div class="user-items">
      <user-item class="user-item" v-for="user in users" :key="user.text" :user="user" />
    </div>
  </article>
</template>

<script>
import UserItem from './components/UserItem';
export default {
  name: 'UserGroup',
  components: {
    UserItem,
  },
  data() {
    return {
      users: [
        {
          img: 'https://img.alicdn.com/imgextra/i4/O1CN01t0oAvh1lcJFERTmvZ_!!6000000004839-2-tps-128-128.png',
          text: '淘宝',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i2/O1CN01tOyHij296kjg26l9q_!!6000000008019-2-tps-128-128.png',
          text: '天猫',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i2/O1CN01oGtFZy257tFnmwALz_!!6000000007480-2-tps-128-128.png',
          text: '支付宝',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i4/O1CN01ZEM28F1KGn0it7REU_!!6000000001137-2-tps-128-128.png',
          text: '千牛',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i1/O1CN01KnqgmO1wnitBux8dJ_!!6000000006353-2-tps-128-128.png',
          text: '淘宝头条',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i4/O1CN011IQugW1qU8Fkh14UQ_!!6000000005498-2-tps-128-128.png',
          text: '1688',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i4/O1CN01KuPhdz1JWzP4zlM6D_!!6000000001037-2-tps-64-64.png',
          text: '闲鱼',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i2/O1CN01iyjf8A21spNgS6qQH_!!6000000007041-2-tps-64-64.png',
          text: '门店',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i3/O1CN01GLBCbS1KWMTTLyJGe_!!6000000001171-2-tps-64-64.png',
          text: '阿里巴巴',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i3/O1CN01lp2FsD1ZQbjf3kUTK_!!6000000003189-2-tps-128-128.png',
          text: '钉钉',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i1/O1CN01xqzGP21FWkjb0TuEM_!!6000000000495-2-tps-128-128.png',
          text: 'Lazada',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i3/O1CN01ow5Qkb1rmHZ2myOE4_!!6000000005673-2-tps-128-128.png',
          text: '优酷',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i4/O1CN01beSi8s23fCpjKxAof_!!6000000007282-2-tps-128-128.png',
          text: 'UC',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i3/O1CN01w6f5na1CavUviQbPQ_!!6000000000098-2-tps-128-128.png',
          text: '饿了么',
        },
        {
          img: 'https://img.alicdn.com/imgextra/i2/O1CN01WflIbD1xql89dACus_!!6000000006495-2-tps-128-128.png',
          text: '阿里云',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.usergroup-container {
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font: bold 32px/45px SFProText-Bold;
    margin: 0;
    margin-bottom: 78px;
  }
  .user-items {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .user-item {
      margin: 0 48px 61px 0;
    }
  }
}
</style>
