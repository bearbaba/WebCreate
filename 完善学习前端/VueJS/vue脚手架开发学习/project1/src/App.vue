<template>
  <div id="app">
    <router-link to="/home" tag="button" active-class="home" replace>首页</router-link>
    <button @click="goToAbout">关于</button>
    <router-link :to="'/user/'+Id">用户界面</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      Id: 123,
    };
  },
  methods: {
    goToAbout() {
      this.$router.push('/about');
    },
  },
};
</script>

<style lang="css" scoped>

.home{
  color:red;
}
.home:visited{
  color:#ccc;
}
</style>
