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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll:null,
      };
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        infinity: false,
      });
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll', position);
      });
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp');
      });
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp');
        })
      }
    },
    methods: {
      scrollTo(x, y, timeOut=300){
        this.scroll && this.scroll.scrollTo(x, y, timeOut);
      },

      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },

      refresh() {
        this.scroll && this.scroll.refresh();
      },

      getScrollY(){
        return this.scroll ? this.scroll.y : 0;
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
