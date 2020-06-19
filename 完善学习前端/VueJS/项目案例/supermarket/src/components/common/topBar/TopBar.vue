<template>
  <div class="top-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot> </div>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>
.top-bar{
  width:100%;
  margin: 0;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  z-index: 2;
  position: fixed;
  position: -ms-device-fixed;
}
.left,
.right{
width:50px;
}
  .center{
    flex:1;
  }
</style>
