<template>
  <div id="app">
    <keep-alive>
      <router-view class="main"></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

import MainTabbar from "./components/content/MainTabbar";

export default {
  name: 'App',
  components: {
    MainTabbar
  },
}
</script>

<style>
  .main{

  }
</style>
