<template>
  <div id="app">
    <p>{{this.$store.state.counter}}</p>
    <h1>人名及分数</h1>
    <div v-for="(item,index) in this.$store.state.stuList" :key="index">名字：{{item.name}}，
      分数：{{item.score}}
    </div>

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
