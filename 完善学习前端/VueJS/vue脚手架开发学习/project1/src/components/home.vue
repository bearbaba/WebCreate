<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{msg}}</p>
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
