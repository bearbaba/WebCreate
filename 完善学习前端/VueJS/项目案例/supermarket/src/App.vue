<template>
  <div id="app">
    <router-view class="main"></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

import MainTabbar from "./components/content/MainTabbar";

export default {
  name: 'App',
  components: {
    MainTabbar

  }
}
</script>

<style>
  .main{
    z-index: 1;
    height: 1000px;
    margin-top: 36px;
  }
</style>
