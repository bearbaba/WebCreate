<template>
  <div id="app">
    <p>{{this.$store.state.counter}}</p>
    <h1>人名及分数</h1>
    <div v-for="(item,index) in this.$store.state.stuList" :key="index">名字：{{item.name}}，
      分数：{{item.score}}
    </div>
    <div>{{this.$store.getters.powerCounter}}</div>
    <button @click='add'>+</button>
    <button @click='sub'>-</button>
    <first-vuex></first-vuex>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import selectScoreSurpass80 from 'vuex';

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
  computed: {
  },
  components: {
    firstVuex,
  },
};
</script>

<style>

</style>
