<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
import tarBarItem from './tarBarItem';

export default {
  name: 'TarBar',
  components: {
    tarBarItem,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* @import "../../assets/css/tarBar/tarBar.css" */
</style>

