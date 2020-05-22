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
    props:{
      probeType: {
        type: Number,
        default:0
      }
    },
    data() {
      return {
        scroll:null,
        // eslint-disable-next-line vue/no-dupe-keys
      };
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
      })
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll', position);
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
