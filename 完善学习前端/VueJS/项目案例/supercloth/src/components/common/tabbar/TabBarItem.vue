<template>
  <div id="tar-bar-item" @click="changeActive">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeTextColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {
        isActive: false,
      }
    },
    methods: {
      changeActive(){
        this.isActive=!this.isActive;
      }
    },
    computed: {
      // eslint-disable-next-line vue/return-in-computed-property
      activeTextColor(){
        if(this.isActive===true){
          // eslint-disable-next-line no-undef
          return {color:pink};
        }
      }
    }
  }
</script>

<style scoped>

</style>
