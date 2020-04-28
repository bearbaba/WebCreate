<template>
  <div>
    <h1>{{this.$store.state.counter}}</h1>
    <p>{{selectScore}}</p>
    <p>{{this.$store.state.colorAndName}}</p>
    <p>{{this.$store.state.a}}</p>
    <p>{{selectColor}}</p>
    <p>{{this.$store.getters.getStoreState}}</p>
    <button @click="addColor">添加颜色</button>
    <button @click="deleteName">删除Name</button>
    <button @click="commitAddThing">AddThing</button>
    <button @click="decRootState">decRootState</button>
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
    commitAddThing() {
      const name = 'strawberry';
      const color = 'red';
      this.$store.commit('selectName', {
        name, color,
      });
    },
    addColor() {
      this.$store.commit('addColor');
    },
    deleteName() {
      this.$store.commit('deleteName');
    },
    decRootState() {
      this.$store.dispatch('decRootStateCounter')
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
        });
    },
  },
};
</script>

<style>

</style>
