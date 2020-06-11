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
    justify-content: space-evenly;
  }
  .recommend-image-box{
    text-align: center;
}
  .recommend-image-box>a>img{
    width: 80%;
    margin-top: 10px;
  }
  .recommend-image-box>a{
    text-decoration: none;
  }
  .recommend-image-box>a p{
    display: block;
    margin: 5px;
    color: #ff5777;
  }
</style>
