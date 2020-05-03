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
  height: 44px;
  margin: 0;
  box-sizing: content-box;
  display: flex;
  z-index: 1;
  position: fixed;
  top:-6px;
}
.left,
.right{
  width:50px;
}
  .center{
    flex: 1;
  }
</style>
