<template>
  <div id="cart">
    <top-bar class="top-bar-bg">
      <div slot="center" id="center">主页</div>
    </top-bar>
    <h1>主页</h1>
  </div>
</template>

<script>
  import TopBar from "../../../components/common/topBar/TopBar";
  import {getHomeMultipleData} from "@/network/home";

  export default {
    name: "Home",
    components: {
      TopBar,
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
        this.banner=config.data.data.banner;
        this.recommend=config.data.data.recommend;
        this.keywords=config.data.data.keywords;
        this.dKeyword=config.data.data.dKeyword;
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
