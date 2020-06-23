<template>
  <div>
    <nav-detail></nav-detail>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods = "goods"></detail-base-info>
  </div>

</template>

<script>
  import NavDetail from "@/views/detail/childComponents/NavDetail";
  import {getDetail,Goods} from "@/network/detail";
  import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";

  export default {
    name: "detail",
    components: {
      NavDetail,
      DetailSwiper,
      DetailBaseInfo
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

</style>
