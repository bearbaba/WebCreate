<template>
  <div id="detail">
    <nav-detail class="nav-detail"></nav-detail>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods = "goods"></detail-base-info>
    </scroll>
  </div>

</template>

<script>
  import NavDetail from "@/views/detail/childComponents/NavDetail";
  import {getDetail,Goods} from "@/network/detail";
  import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";
  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "detail",
    components: {
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
        goods:{}
      }
    },
    created() {
      this.iid=this.$route.params.iid;
      getDetail(this.iid).then(res => {
        this.goodsData = res.result;
        this.topImages=this.goodsData.itemInfo.topImages;
        this.goods=new Goods(this.goodsData.itemInfo,this.goodsData.columns,this.goodsData.shopInfo.services);
      });
    }
  }
</script>

<style scoped>
  #detail{
    background-color: white;
    z-index: 9;
    height: 100vh;
    position: relative;
  }

  .content{
    height: calc(100% - 44px);
  }

  .nav-detail {
    position: relative;
  }
</style>
