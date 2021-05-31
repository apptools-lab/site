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
        { img: require('@assets/Home/Body/UserGroup/taobao.png'), text: '淘宝' },
        { img: require('@assets/Home/Body/UserGroup/tmall.png'), text: '天猫' },
        { img: require('@assets/Home/Body/UserGroup/alipay.png'), text: '支付宝' },
        { img: require('@assets/Home/Body/UserGroup/qianniu.png'), text: '千牛' },
        { img: require('@assets/Home/Body/UserGroup/taobaotoutiao.png'), text: '淘宝头条' },
        { img: require('@assets/Home/Body/UserGroup/1688.png'), text: '1688' },
        { img: require('@assets/Home/Body/UserGroup/xianyu.png'), text: '闲鱼' },
        { img: require('@assets/Home/Body/UserGroup/mendian.png'), text: '门店' },
        { img: require('@assets/Home/Body/UserGroup/alibaba.png'), text: '阿里巴巴' },
        { img: require('@assets/Home/Body/UserGroup/dingtalk.png'), text: '钉钉' },
        { img: require('@assets/Home/Body/UserGroup/Laz.png'), text: 'Lazada' },
        { img: require('@assets/Home/Body/UserGroup/youku.png'), text: '优酷' },
        { img: require('@assets/Home/Body/UserGroup/UC.png'), text: 'UC' },
        { img: require('@assets/Home/Body/UserGroup/ele.png'), text: '饿了么' },
        { img: require('@assets/Home/Body/UserGroup/alibabacloud.png'), text: '阿里云' },
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
