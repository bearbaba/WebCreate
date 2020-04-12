<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{msg}}</p>
    <router-link to="/home/homeMessage">首页内容</router-link>
    <router-link to="/home/news">首页新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: '主页标题',
      msg: '主页内容',
    };
  },
};
</script>

<style>

</style>
