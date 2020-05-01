<template>
  <tab-bar>
    <tab-bar-item>
      <img slot="item-img" src="src/assets/img/tabbar/home.svg">
      <img slot="item-img-active" src="src/assets/img/tabbar/home_active.svg">
      <p slot="item-text">主页</p>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-img" src="src/assets/img/tabbar/category.svg">
      <img slot="item-img" src="src/assets/img/tabbar/category_active.svg">
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-img" src="src/assets/img/tabbar/shopcart.svg">
      <img slot="item-img-active" src="src/assets/img/tabbar/shopcart_active.svg">
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-img" src="src/assets/img/tabbar/profile.svg">
      <img slot="item-img-active" src="src/assets/img/tabbar/profile_active.svg">
      <p slot="item-text">我的</p>
    </tab-bar-item>
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
