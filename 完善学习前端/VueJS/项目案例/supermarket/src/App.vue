<template>
  <div id="app">
    <router-view id="main"></router-view>
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

</style>
