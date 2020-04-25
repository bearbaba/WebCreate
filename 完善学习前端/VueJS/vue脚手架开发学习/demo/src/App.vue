<template>
  <div id="app">
    <top-bar id='top-bar' slot='top-bar'>
      <top-bar-item slot="top-bar-item">
        <div name='logo'>
          <img src="img/">
        </div>
      </top-bar-item>
      <top-bar-item slot='top-bar-item'></top-bar-item>
      <top-bar-item slot='top-bar-item'></top-bar-item>
    </top-bar>
    <tab-bar id='tab-bar' slot='tab-bar'>
      <tab-bar-item id='tab-bar-item' slot='tab-bar-item'></tab-bar-item>
    </tab-bar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from 'comments/tabBar'
import topBar from 'comments/topBar'
import topBarItem from 'comments/topBarItem'
import tabBarItem from 'comments/tabBarItem'

export default {
  name: 'App',
  components: {
    tabBar,
    tabBarItem,
    topBar,
    topBarItem
  }
}
</script>

<style>

</style>
