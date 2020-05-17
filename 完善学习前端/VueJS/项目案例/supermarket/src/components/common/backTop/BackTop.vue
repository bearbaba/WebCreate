<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
  export default {
    name: "BackTop.vue",
    methods:{
    }
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom: 60px;
    right: 30px;
    z-index: 20;
  }
  .back-top img{
    width: 30px;
    height: 30px;
  }
</style>
