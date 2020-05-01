<template>
  <tab-bar>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../common/tabbar/TabBar";
  import TabBarItem from "../common/tabbar/TabBarItem";
  export default {
    name: "MainTabbar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>

</style>
