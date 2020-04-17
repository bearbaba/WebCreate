<template>
  <div id="app">
      <tar-bar>
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test.svg" class="img">
          <p>消息</p>
        </tar-bar-item>
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test_1.svg" alt="" class="img">
          <p>购物车</p>
        </tar-bar-item>
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test_3.svg" class="img">
          <p>分类</p>
        </tar-bar-item>
        <tar-bar-item class='tar-bar-item'>
          <img src="./assets/img/tarBar/icon-test_2.svg" class="img">
          <p>分享</p>
        </tar-bar-item>
      </tar-bar>
  </div>
</template>

<script>
import TarBar from './components/tarBar/tarBar';

export default {
  name: 'App',
  components: {
    TarBar,
  },
};
</script>


<style scoped>

</style>
