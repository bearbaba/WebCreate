<template>
  <div id="app">
    <p>{{$store.state.counter}}</p>
    <button @click='add'>+</button>
    <button @click='sub'>-</button>
    <first-vuex></first-vuex>
  </div>
</template>

<script>
const firstVuex = () => import('./components/firstVuex');
export default {
  name: 'App',
  methods: {
    add() {
      this.$store.commit('increment');
    },
    sub() {
      this.$store.commit('subtraction');
    },
  },
  components: {
    firstVuex,
  },
};
</script>

<style>

</style>
