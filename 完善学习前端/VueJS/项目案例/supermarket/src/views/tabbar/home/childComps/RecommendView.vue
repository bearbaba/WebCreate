<template>
  <div id="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-image-box">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView.vue",
    props:{
      recommends:{
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  #recommend{
    display: flex;
    justify-content: space-around;
  }
  .recommend-image-box{
    width:30%;
    text-align: center;
    padding-top:5px;
}
  .recommend-image-box>a>img{

    height:60px;
  }
</style>
