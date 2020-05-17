<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view class="main"></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

import MainTabbar from "./components/content/MainTabbar";
import TopBar from "@/components/common/topBar/TopBar";

export default {
  name: 'App',
  components: {
    TopBar,
    MainTabbar
  }
}
</script>

<style>
  .main{

  }
</style>
