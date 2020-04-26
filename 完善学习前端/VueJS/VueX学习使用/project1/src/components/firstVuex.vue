<template>
  <div>
    <h1>{{this.$store.state.counter}}</h1>
    <p>{{selectScore}}</p>
  </div>
</template>

<script>

export default {
  name: 'firstVuex',
  computed: {
    selectScore() {
      return this.$store.getters.scoreExceed80;
    },
  },
};
</script>

<style>

</style>
