<template>
  <article class="usergroup-container">
    <h4 class="title">Who is using?</h4>
    <div class="user-items">
      <user-item class="user-item" v-for="user in users" :key="user.text" :user="user" />
    </div>
    <!-- <user-item v-for="" class="usergroup-item" /> -->
  </article>
</template>

<script>
import UserItem from './components/user-group/UserItem';
export default {
  name: 'UserGroup',
  components: {
    UserItem,
  },
  data() {
    return {
      users: [
        { img: require('@assets/Home/user-group/taobao.png'), text: '淘宝' },
        { img: require('@assets/Home/user-group/tmall.png'), text: '天猫' },
        { img: require('@assets/Home/user-group/alipay.png'), text: '支付宝' },
        { img: require('@assets/Home/user-group/qianniu.png'), text: '牵牛' },
        { img: require('@assets/Home/user-group/taobaotoutiao.png'), text: '头条' },
        { img: require('@assets/Home/user-group/1688.png'), text: '1688' },
        { img: require('@assets/Home/user-group/xianyu.png'), text: '咸鱼' },
        { img: require('@assets/Home/user-group/mendian.png'), text: '门店' },
        { img: require('@assets/Home/user-group/alibaba.png'), text: '阿里' },
        { img: require('@assets/Home/user-group/dingtalk.png'), text: '叮叮' },
        { img: require('@assets/Home/user-group/Laz.png'), text: 'Laz' },
        { img: require('@assets/Home/user-group/youku.png'), text: '优酷' },
        { img: require('@assets/Home/user-group/UC.png'), text: 'UC' },
        { img: require('@assets/Home/user-group/ele.png'), text: '饿了吗' },
        { img: require('@assets/Home/user-group/alibabacloud.png'), text: '阿里云' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.usergroup-container {
  padding: 780 + 193px 0 257px 0;
  text-align: center;
  .title {
    font: bold 32px/45px SFProText-Bold;
  }
  .user-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .user-item {
      margin: 0 48px 61px 0;
    }
  }
}
</style>
