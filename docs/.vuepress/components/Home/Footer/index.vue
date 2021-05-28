<template>
  <article class="footer-container">
    <div class="footer-block-wrapper">
      <LinkList :title="resource.title" :linkItems="resource.linkItems" />
      <LinkList :title="community.title" :linkItems="community.linkItems" />
      <LinkList :title="help.title" :linkItems="help.linkItems" />
      <LinkList :title="more.title" :linkItems="more.linkItems" />
    </div>
    <div class="footer-gap"></div>
    <div class="footer-copyright">Copyright © 2018-present Alibaba Inc.</div>
  </article>
</template>

<script>
import LinkList from './components/LinkList';
export default {
  name: 'Footer',
  components: {
    LinkList,
  },
  data() {
    return {
      resource: {
        title: '资源',
        linkItems: [
          { img: 'https://gw.alicdn.com/tps/TB1XNqxPXXXXXcSXVXXXXXXXXXX-64-63.png', url: '', text: 'Weex' },
          { img: 'https://gw.alipayobjects.com/zos/rmsportal/kjenedafWxLSvoQqNxUF.png', url: '', text: '阿里小程序' },
          { img: 'https://gw.alicdn.com/tfs/TB1dy_SekT2gK0jSZPcXXcKkpXa-86-54.png', url: '', text: 'Function Compute' },
          { img: 'https://img.alicdn.com/tfs/TB1bbwkzY2pK1RjSZFsXXaNlXXa-128-128.png', url: '', text: 'imgcook' },
          { img: 'https://img.alicdn.com/tfs/TB1H9yXUpT7gK0jSZFpXXaTkpXa-264-264.png', url: '', text: 'Iceworks' },
        ],
      },
      community: {
        title: '社区',
        linkItems: [
          { img: 'https://gw.alicdn.com/tfs/TB1H_16eeH2gK0jSZFEXXcqMpXa-60-60.png', url: '', text: '知乎' },
          { img: 'https://gw.alicdn.com/tfs/TB1H5bLeaL7gK0jSZFBXXXZZpXa-78-78.jpg', url: '', text: 'Github' },
        ],
      },
      help: {
        title: '帮助',
        linkItems: [
          { img: '', url: '', text: '反馈问题' },
          { img: '', url: '', text: '提交需求' },
          { img: '', url: '', text: 'APP v0.6文档' },
        ],
      },
      more: {
        title: '更多',
        linkItems: [
          { img: 'https://img.alicdn.com/tps/TB1Nv_wKXXXXXbmXVXXXXXXXXXX-295-195.png', url: '', text: 'FED 博客' },
          { img: 'https://img.alicdn.com/tps/TB1kBU7NpXXXXXLXXXXXXXXXXXX-160-160.png', url: '', text: 'ICE' },
          { img: 'https://img.alicdn.com/tfs/TB1k4.laW6qK1RjSZFmXXX0PFXa-237-237.png', url: '', text: 'Midway' },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: #141313;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 81px 30px 20px 30px;
  font: 14px PingFangSC-Regular;
  .footer-block-wrapper {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
  }
  .footer-gap {
    width: 80%;
    height: 1px;
    background-color: #979797;
  }
  .footer-copyright {
    text-align: center;
    padding: 16px 40px;
    margin: 0 50px;
    border-top: 1px solid #666;
    color: #999;
  }
}
@media screen and (max-width: 750px) {
  .footer-container {
    .footer-block-wrapper {
      text-align: center;
      display: block;
      width: auto;
    }
  }
}
</style>
