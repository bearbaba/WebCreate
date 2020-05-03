<template>
  <div id="cart">
    <top-bar id="home-top-bar">
      <div slot="center" id="center">主页</div>
    </top-bar>
    <h1>主页</h1>
  </div>
</template>

<script>
  import TopBar from "../../../components/common/topBar/TopBar";
  export default {
    name: "Home",
    components: {
      TopBar,
    }
  }
</script>

<style scoped>
#home-top-bar{
  background: #ff5777;
}
  #center{
    margin-top: calc(22px - 10px);
    text-align: center;
    color: white;
    font-size: 20px;
  }
</style>
