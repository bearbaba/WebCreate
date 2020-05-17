<template>
  <div id="home">
    <top-bar class="top-bar-bg">
      <div slot="center" id="center">主页</div>
    </top-bar>
    <back-top @click.native="backClick"></back-top>
    <scroll class="content" ref="scroll">
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view></feature-view>
      <top-control :top-text="topText"
                   @topClick="topClick" class="tab-control"></top-control>
      <good-list :goods="goods[currentType].list"></good-list>
    </scroll>

  </div>
</template>

<script>
  import TopBar from "../../../components/common/topBar/TopBar";
  import {getHomeMultipleData, getHomeGoods} from "@/network/home";
  import RecommendView from "@/views/tabbar/home/childComps/RecommendView";
  import FeatureView from "@/views/tabbar/home/childComps/FeatureView";

  import TopControl from "@/components/content/topControl/TopControl";
  import GoodList from "@/components/content/goodsList/GoodList";

  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/common/backTop/BackTop";

  export default {
    name: "Home",
    components: {
      // eslint-disable-next-line vue/no-unused-components
      BackTop,
      TopControl,
      FeatureView,
      TopBar,
      RecommendView,
      GoodList,
      Scroll
    },
    data() {
      return {
        banner: [],
        recommend: [],
        keywords: [],
        dKeyword: [],

        topText: ["流行", "新款", "精选"],

        // eslint-disable-next-line vue/no-dupe-keys
        goods: {
          'pop': {
            page: 0,
            list: [],
          },
          'new': {
            page: 0,
            list: [],
          },
          'sell': {
            page: 0,
            list: [],
          }
        },
        currentType:'pop',
      }
    },
    methods:{
      //监听事件方法
      topClick(index){
        if (index === 0){
          this.currentType= 'pop';
        }
        else if (index===1){
          this.currentType= 'new';
        }
        else{
          this.currentType = 'sell';
        }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0);
      },
      //网络请求方法
      getHomeMultipleData() {
        getHomeMultipleData().then(config => {
          this.banner = config.data.banner.list;
          this.recommend = config.data.recommend.list;
          this.keywords = config.data.keywords.list;
          this.dKeyword = config.data.dKeyword.list;
        });
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(config=>{
          this.goods[type].list.push(...config.data.list);
          console.log(this.goods[type].list);
        })
      }
    },
    created() {

      this.getHomeMultipleData();

      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
  }
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .top-bar-bg{
  background: #ff5777;
}
  #center{
    margin-top: calc(22px - 10px);
    text-align: center;
    color: white;
    font-size: 20px;
  }
  .top-control{
    /*position: sticky;*/
    /*top:38.3px;*/
    background-color: white;
  }
  .content{
    position:absolute;
    width:100%;
    bottom:58px;
    height: calc(100vh - 102px);
    overflow: hidden;
  }
</style>
