<template>
  <div @click="clickItem">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div v-if="!isActive"><slot name="item-text"></slot></div>
    <div v-else :style="{color: activeColor}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TarBarItem',
  props:
    {
      path: String,
      activeColor: {
        default: 'black',
        type: String,
      },
    },
  computed: {
    // isActive函数确认是否为活动状态，是则返回true
    isActive() {
      if (this.$route.path.indexOf(this.path) !== -1) { return true; }
      return false;
    },
  },
  methods: {
    clickItem() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
  .active{
    color:red;
  }
</style>
