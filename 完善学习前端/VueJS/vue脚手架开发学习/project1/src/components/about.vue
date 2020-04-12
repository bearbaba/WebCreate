<template>
  <div>
    <div>关于页面</div>
    <p>{{msg}}</p>
    <!-- <router-link to="/about/homeMessage">click</router-link> -->
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      msg: '关于页面的文本内容',
    };
  },
};
</script>

<style>

</style>
