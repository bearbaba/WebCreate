<template>
  <div id="app">
    <router-link to="/home" tag="button" active-class="home" replace>首页</router-link>
    <router-view></router-view>
    <button @click="goToAbout">关于</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToAbout() {
      this.$router.push('/about');
    },
  },
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
