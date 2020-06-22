<template>
  <div id="home">

    <top-bar class="top-bar-bg">
      <div slot="center" id="center">主页</div>
    </top-bar>

    <top-control
      :top-text="topText"
      @topClick="topClick"
      class="tab-control"
      ref="tabControl1"
      v-show="showControl"></top-control>

    <back-top
      @click.native="backClick"
      v-show="isShow"></back-top>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore">

      <home-swiper :banners="banners" @swiperImageLoad="imageLoad"/>

      <recommend-view
        :recommends="recommend"></recommend-view>

      <feature-view></feature-view>

      <top-control
        :top-text="topText"
        @topClick="topClick"
        ref="tabControl2"></top-control>

      <good-list
        :goods="goods[currentType].list"></good-list>
    </scroll>

  </div>
</template>

<script>
  import TopBar from "../../components/common/topBar/TopBar";
  import {getHomeMultipleData, getHomeGoods} from "@/network/home";
  import RecommendView from "@/views/home/childComps/RecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";

  import TopControl from "@/components/content/topControl/TopControl";
  import GoodList from "@/components/content/goodsList/GoodList";

  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/common/backTop/BackTop";

  import {debounce} from "@/components/common/utils/utils";

  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  export default {
    name: "Home",
    components: {
      BackTop,
      TopControl,
      FeatureView,
      TopBar,
      RecommendView,
      GoodList,
      Scroll,
      HomeSwiper
    },
    data() {
      return {
        banners: [],
        recommend: [],
        keywords: [],
        dKeyword: [],

        isShow: false,

        topText: ["流行", "新款", "精选"],

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
          },
        },
        currentType:'pop',
        offsetTop: 0,
        showControl: false,
        currentIndex:0,
        saveY: 0,
      }
    },

    methods:{
      //监听事件方法
      topClick(index){
        this.currentIndex = index;
        if (this.currentIndex === 0){
          this.currentType= 'pop';

        }
        else if (this.currentIndex===1){
          this.currentType= 'new';
        }
        else{
          this.currentType = 'sell';
        }
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
      },

      backClick(){
        this.$refs.scroll.scrollTo(0,0);
      },

      //网络请求方法
      getHomeMultipleData() {
        getHomeMultipleData().then(config => {
          this.banners = config.data.banner.list;
          this.recommend = config.data.recommend.list;
          this.keywords = config.data.keywords.list;
          this.dKeyword = config.data.dKeyword.list;
        });
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(config=>{
          this.goods[type].list.push(...config.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      },

      contentScroll(position){
        //判断什么时候出现回到的顶部的图标
        if(-position.y > 1000){
          this.isShow=true;
        }
        else{
          this.isShow = false;
        }

        this.showControl = -position.y>this.offsetTop;
      },

      //上拉加载更多
      loadMore(){
        this.getHomeGoods(this.currentType);
      },

      //获取offsetTop，banner距离顶部高度
      imageLoad(){
        this.offsetTop=this.$refs.tabControl2.$el.offsetTop;
      }
    },

    created() {
      this.getHomeMultipleData();
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },

    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      this.$bus.$on('itemImageLoad',()=>{
        refresh();
      });
    },

    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.saveY,0);
    },

    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY();
    },

    destroyed() {
      this.$refs.scroll.destroy();
    }
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
    text-align: center;
    margin-top: 6px;
    color: white;
    font-size: 20px;
  }
  .tab-control{
    position: relative;
    top:43px;
    z-index:19;
    background-color: white;
  }
  .content{
    position:absolute;
    top: 2px;
    width:100%;
    bottom:58px;
    height: calc(100vh - 102px);
    overflow: hidden;
  }
</style>
