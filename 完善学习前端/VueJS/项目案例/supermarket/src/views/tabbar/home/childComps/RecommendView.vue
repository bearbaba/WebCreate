<template>
  <div id="recommend">

  </div>
</template>

<script>
  export default {
    name: "RecommendView.vue",
    props:{
      recommends:{
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>

</style>
