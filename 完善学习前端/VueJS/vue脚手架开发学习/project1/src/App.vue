<template>
  <div id="app">
    <router-link to="/home" tag="button" active-class="home">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css" scoped>
.home{
  color:yellow;
}
.home:active{
  color:red;
}
.home:target{
  color:#ccc;
}
</style>
