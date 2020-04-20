<template>
  <div id="tar-bar">
    <slot name='tar-bar-item'></slot>
  </div>
</template>

<script>
import TarBarItem from './tarBarItem';

export default {
  name: 'TarBar',
  components: {
    TarBarItem,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* @import "../../assets/css/tarBar/tarBar.css" */
</style>

