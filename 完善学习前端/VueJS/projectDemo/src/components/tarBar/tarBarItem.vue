<template>
  <div>
    <div v-if="!isflase"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :class="{active:isflase}"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
  name: 'TarBarItem',
  methods: {
    isflase() {
      this.isflase = true;
    },
  },
};
</script>

<style>
  .active{
    color:red;
  }
</style>
