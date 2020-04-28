<template>
  <div>
    <h1>{{this.$store.state.counter}}</h1>
    <p>{{selectScore}}</p>
    <p>{{this.$store.state.colorAndName}}</p>
    <p>{{this.$store.state.a}}</p>
    <p>{{selectColor}}</p>
    <button @click="addColor">添加颜色</button>
    <button @click="deleteName">删除Name</button>
  </div>
</template>

<script>

export default {
  name: 'firstVuex',
  computed: {
    selectScore() {
      return this.$store.getters.scoreExceed80;
    },
    selectColor() {
      return this.$store.getters.selectColor;
    },
  },
  methods: {
    addColor() {
      this.$store.commit('addColor');
    },
    deleteName() {
      this.$store.commit('deleteName');
    },
  },
};
</script>

<style>

</style>
