<template>
  <div id="cart">
    <top-bar class="top-bar-bg">
      <div slot="center" id="center">主页</div>
    </top-bar>
    <recommend-view :recommends="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control :tab-text="tabText" class="tab-control"></tab-control>
    <good-list :goods="goods['pop'].list"></good-list>
  </div>
</template>

<script>
  import TopBar from "../../../components/common/topBar/TopBar";
  import {getHomeMultipleData, getHomeGoods} from "@/network/home";
  import RecommendView from "@/views/tabbar/home/childComps/RecommendView";
  import FeatureView from "@/views/tabbar/home/childComps/FeatureView";

  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodList from "@/components/content/goodsList/GoodList";

  export default {
    name: "Home",
    components: {
      TabControl,
      FeatureView,
      TopBar,
      RecommendView,
      // eslint-disable-next-line vue/no-unused-components
      GoodList
    },
    data() {
      return {
        banner: [],
        recommend: [],
        keywords: [],
        dKeyword: [],

        tabText: ["流行", "新款", "精选"],

        goods:{
          'pop':{
            page:0,
            list:[],
          },
          'new': {
            page:0,
            list: [],
          },
          'sell': {
            page:0,
            list:[],
          }
        }
      }
    },
    methods:{
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
  .top-bar-bg{
  background: #ff5777;
}
  #center{
    margin-top: calc(22px - 10px);
    text-align: center;
    color: white;
    font-size: 20px;
  }
  .tab-control{
    position: sticky;
    top:40px;
    background-color: white;
  }
</style>
