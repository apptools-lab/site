<template>
  <div class="page-container">
    <TabsNav :tabs="materialsTypes" :selectedTab="currentMaterialsType" :onChange="updateCurrentMaterialsType" />
    <Content :materialsType="currentMaterialsType" :data="materialsData[currentMaterialsType] || []" />
  </div>
</template>

<script>
import { materialsDataUrl } from './constants';
import TabsNav from './components/TabsNav';
import Content from './components/Content';

export default {
  components: {
    Content,
    TabsNav,
  },
  props: {
    type: {
      type: String, // Fusion, AntDesign, Vue, Rax 物料
    },
  },
  data() {
    return {
      currentMaterialsType: 'scaffolds',
      materialsTypes: [
        { name: '模板', key: 'scaffolds' },
        { name: '区块', key: 'blocks' },
      ],
      materialsData: {},
    };
  },
  methods: {
    updateCurrentMaterialsType(key) {
      this.currentMaterialsType = key;
    },
    getMaterialsData() {
      fetch(materialsDataUrl[this.type])
        .then((response) => response.json())
        .then((result) => {
          this.materialsData = result;
        });
    },
  },
  mounted() {
    this.getMaterialsData();
  },
};
</script>

<style scoped>
/* 父容器默认 740px，避免影响其他页面，需全屏展示的组件自行设置宽度 */
.page-container {
  margin-top: 25px !important;
  width: 100vw;
  margin-left: calc(0px - 50vw + 740px / 2);
}

@media screen and (max-width: 750px) {
  .page-container {
    /* 父容器默认 2rem padding */
    margin-left: -2rem;
  }
}
</style>
