<template>
  <div id="app">
    <p>{{counter}}</p>
    <button @click='counter++'></button>
    <button @click='counter--'></button>
    <router-link to="/projectVuex"></router-link>
    <router-view :msg='counter'></router-view>
  </div>
</template>

<script>
const firstVue = () => import('./components/firstVuex');
export default {
  name: 'App',
  data() {
    return {
      counter: 1000,
    };
  },
  comments: {
    firstVue,
  },
};
</script>

<style>

</style>
