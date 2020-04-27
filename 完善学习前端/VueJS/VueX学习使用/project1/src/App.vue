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
    <button @click="addNumber(5)">+5</button>
    <button @click="pushStu">+人</button>
    <first-vuex></first-vuex>
    <div>{{this.$store.getters.stuNumberExceed80}}</div>
    <div>{{this.$store.getters.stuExceedNew(90)}}</div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import selectScoreSurpass80 from 'vuex';

const firstVuex = () => import('./components/firstVuex');
export default {
  name: 'App',
  data() {

  },

  methods: {
    add() {
      this.$store.commit('increment');
    },
    sub() {
      this.$store.commit('subtraction');
    },
    addNumber(number) {
      this.$store.commit('incrementNumber', number);
    },
    // eslint-disable-next-line no-unused-vars
    pushStu(newStu, newScore) {
      this.$store.commit(
        // eslint-disable-next-line no-undef
        'addNewStu',
        {
          newStu: '小高',
          newScore: 89,
        },
      );
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
