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
      }
    },
    created() {
      this.iid=this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const data = res.result;
        this.topImages=data.itemInfo.topImages;
        console.log(res);

        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      });
    }
  }
</script>

<style scoped>

</style>
