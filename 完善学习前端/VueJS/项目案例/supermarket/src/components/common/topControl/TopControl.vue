<template>
  <div id="tar-bar">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TopControl"
  }
</script>

<style scoped>
#tar-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  height: 49px;
  padding-bottom: 4px;
  padding-top: 5px;
  background: #cccccc;
}
</style>
