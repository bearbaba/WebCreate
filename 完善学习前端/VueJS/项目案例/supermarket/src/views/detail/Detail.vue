<template>
  <div>
    <nav-detail></nav-detail>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>

</template>

<script>
  import NavDetail from "@/views/detail/childComponents/NavDetail";
  import {getDetail} from "@/network/detail";
  import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";

  export default {
    name: "detail",
    components: {
      NavDetail,
      DetailSwiper
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
        this.topImages=res.result.itemInfo.topImages;
      });
    }
  }
</script>

<style scoped>

</style>
