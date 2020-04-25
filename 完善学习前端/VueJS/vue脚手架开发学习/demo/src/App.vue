<template>
  <div id="app">
    <top-bar id='top-bar' slot='top-bar'>
      <top-bar-item slot="top-bar-item">
        <div name='logo'>
          <p>假装这是图片</p>
        </div>
      </top-bar-item>
      <top-bar-item slot='top-bar-item'>
        <div>
          <top-new-message></top-new-message>
        </div>
      </top-bar-item>
      <top-bar-item slot='top-bar-item'>
        <div>

        </div>
      </top-bar-item>
    </top-bar>
    <tab-bar id='tab-bar' slot='tab-bar'>
      <tab-bar-item id='tab-bar-item' slot='tab-bar-item'></tab-bar-item>
    </tab-bar>
    <router-view/>
  </div>
</template>

<script>

import topBar from './components/topBar/topBar'
import topBarItem from './components/topBar/topBarItem'
import tabBar from './components/tabBar/TabBar'
import TopNewMessage from 'views/topBarItem/TopNewMessage'
import TopPersonalInformation from 'views/topBarItem/TopPersonalInformation'
import TopSetting from 'views/topBarItem/TopSetting'
import tabBarItem from './components/tabBar/TabBarItem'

export default {
  name: 'App',
  components: {
    TopNewMessage,
    tabBar,
    tabBarItem,
    topBar,
    topBarItem,
    TopPersonalInformation,
    TopSetting
  }
}
</script>

<style>

</style>
