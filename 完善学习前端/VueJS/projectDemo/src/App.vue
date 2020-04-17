<template>
  <div id="app">
      <tar-bar id="tar-bar">
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test.svg" class="img" slot="item-img">
          <p slot="item-text">消息</p>
        </tar-bar-item>
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test_1.svg" alt="" class="img" slot="item-img">
          <p slot="item-text">购物车</p>
        </tar-bar-item>
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test_3.svg" class="img" slot="item-img">
          <p slot="item-text">分类</p>
        </tar-bar-item>
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test_2.svg" class="img" slot="item-img">
          <p slot="item-text">分享</p>
        </tar-bar-item>
      </tar-bar>
  </div>
</template>

<script>
import TarBar from './components/tarBar/tarBar';
import TarBarItem from './components/tarBar/tarBarItem';

export default {
  name: 'App',
  components: {
    TarBar,
    TarBarItem,
  },
};
</script>


<style scoped>
@import "./assets/css/tarBar/tarBar.css"
</style>
