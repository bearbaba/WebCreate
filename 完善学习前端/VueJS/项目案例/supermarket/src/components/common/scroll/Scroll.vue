<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "Scroll.vue",
    data() {
      return {
        scroll:null,
      };
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
      })
    },
    methods: {
      scrollTo(x, y, timeOut=300){
        this.scroll.scrollTo(x,y,timeOut);
      }
    }
  }
</script>

<style scoped>
  .wrapper{

    margin-top: 42px;
  }
  /*.content{*/
  /*  height: 100vh;*/
  /*}*/
</style>
