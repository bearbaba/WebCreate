<template>
  <div id="cart">
    <top-bar class="top-bar-bg">
      <div slot="center" id="center">分类</div>
    </top-bar>
    <h1>分类</h1>
  </div>
</template>

<script>
  import TopBar from "@/components/common/topBar/TopBar";

  export default {
    name: "List",
    components: {
      TopBar,
    }
  }
</script>

<style scoped>
  .top-bar-bg{
    background: #ff5777;
  }
  #center{
    margin-top: calc(22px - 10px);
    text-align: center;
    color: white;
    font-size: 20px;
  }
</style>
