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
        title: '友链',
        linkItems: [
          {
            img: 'https://img.alicdn.com/tps/TB1Nv_wKXXXXXbmXVXXXXXXXXXX-295-195.png',
            url: 'https://fed.taobao.org/',
            text: 'FED',
          },
          { img: 'https://img.alicdn.com/tfs/TB1bbwkzY2pK1RjSZFsXXaNlXXa-128-128.png', url: '', text: 'imgcook' },
        ],
      },
      community: {
        title: '社区',
        linkItems: [
          // { img: 'https://gw.alicdn.com/tfs/TB1H_16eeH2gK0jSZFEXXcqMpXa-60-60.png', url: '', text: '知乎' },
          {
            img: 'https://gw.alicdn.com/tfs/TB1H5bLeaL7gK0jSZFBXXXZZpXa-78-78.jpg',
            url: 'https://github.com/appworks-lab/appworks',
            text: 'Pack',
          },
          {
            img: 'https://gw.alicdn.com/tfs/TB1H5bLeaL7gK0jSZFBXXXZZpXa-78-78.jpg',
            url: 'https://github.com/appworks-lab/toolkit',
            text: 'Toolkit',
          },
        ],
      },
      help: {
        title: '帮助',
        linkItems: [
          {
            img: '',
            url: 'https://github.com/appworks-lab/appworks/issues/new?assignees=&labels=bug&template=bug_report.md',
            text: '反馈问题',
          },
          {
            img: '',
            url: 'https://github.com/appworks-lab/appworks/issues/new?assignees=&labels=enhancement&template=feature_request.md',
            text: '提交需求',
          },
        ],
      },
      more: {
        title: '更多',
        linkItems: [
          {
            img: 'https://img.alicdn.com/tps/TB1kBU7NpXXXXXLXXXXXXXXXXXX-160-160.png',
            url: 'https://ice.work/',
            text: 'ICE',
          },
          {
            img: 'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
            url: 'https://rax.js.org/',
            text: 'Rax',
          },
          {
            img: 'https://img.alicdn.com/tfs/TB1k4.laW6qK1RjSZFmXXX0PFXa-237-237.png',
            url: 'https://midwayjs.org/',
            text: 'Midway',
          },
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
