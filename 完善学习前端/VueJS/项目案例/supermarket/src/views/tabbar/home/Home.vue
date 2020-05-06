<template>
  <div id="cart">
    <top-bar class="top-bar-bg">
      <div slot="center" id="center">主页</div>
    </top-bar>
    <recommend-view :recommends="recommend"></recommend-view>
    <feature-view></feature-view>
    <h1>主页</h1>
  </div>
</template>

<script>
  import TopBar from "../../../components/common/topBar/TopBar";
  import {getHomeMultipleData} from "@/network/home";
  import RecommendView from "@/views/tabbar/home/childComps/RecommendView";
  import FeatureView from "@/views/tabbar/home/childComps/FeatureView";

  export default {
    name: "Home",
    components: {
      FeatureView,
      TopBar,
      RecommendView,
    },
    data() {
      return {
        banner: [],
        recommend: [],
        keywords: [],
        dKeyword: [],
      }
    },
    created() {
      getHomeMultipleData().then( config => {
        this.banner=config.data.data.banner.list;
        this.recommend=config.data.data.recommend.list;
        this.keywords=config.data.data.keywords.list;
        this.dKeyword=config.data.data.dKeyword.list;
        console.log(config);
      });
    }
  }
</script>

<style scoped>
  .top-bar-bg{
  background: #ff5777;
}
  #center{
    margin-top: calc(22px - 10px);
    text-align: center;
    color: white;
    font-size: 20px;
  }
</style>
