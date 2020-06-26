<template>
  <div id="detail">
    <nav-detail class="nav-detail"></nav-detail>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods = "goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>

</template>

<script>
  import NavDetail from "@/views/detail/childComponents/NavDetail";
  import {getDetail,Goods,Shop} from "@/network/detail";
  import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";
  import Scroll from "@/components/common/scroll/Scroll";
  import DetailShopInfo from "@/views/detail/childComponents/DetailShopInfo";

  export default {
    name: "detail",
    components: {
      DetailShopInfo,
      NavDetail,
      DetailSwiper,
      DetailBaseInfo,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages:[],
        goodsData:null,
        goods:{},
        shop:{}
      }
    },
    created() {
      this.iid=this.$route.params.iid;
      getDetail(this.iid).then(res => {
        this.goodsData = res.result;
        this.topImages=this.goodsData.itemInfo.topImages;
        this.goods=new Goods(this.goodsData.itemInfo,this.goodsData.columns,this.goodsData.shopInfo.services);
        this.shop=new Shop(this.goodsData.shopInfo);
      });
    }
  }
</script>

<style scoped>
  #detail{
    background-color: white;
    z-index: 29;
    height: 100vh;
    position: relative;

  }

  .content{
    height: calc(100% - 44px);
    margin-top: 0px;
  }

  .nav-detail {
    position: relative;
  }
</style>
