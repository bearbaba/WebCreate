<template>
  <div id="feature-view">
    <img src="~assets/img/home/recommend_bg.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    computed:{
      imgSrc(){
        return `@`
      },
    },
  }
</script>

<style scoped>
#feature-view{
}
  #feature-view>img{
    width:100%;
    box-sizing: content-box;
  }
</style>
