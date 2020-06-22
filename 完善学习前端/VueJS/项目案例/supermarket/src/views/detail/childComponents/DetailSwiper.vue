<template>
  <swiper class="swiper-size">
    <swiper-item v-for="item in topImages" v-bind:key="item.id">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "@/components/common/swiper/index"
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.swiper-size {
  height: 300px;
  overflow: hidden;
}
</style>
