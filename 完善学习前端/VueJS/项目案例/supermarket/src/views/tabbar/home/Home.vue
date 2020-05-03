<template>
  <div id="cart">
    <top-bar id="home-top-bar">
      <div slot="center">主页</div>
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
</style>
