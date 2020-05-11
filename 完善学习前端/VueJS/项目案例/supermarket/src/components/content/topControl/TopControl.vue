<template>
  <div class="top-control">
    <span :class="{active:currentIndex === index}"
          v-for="(item,index) in topText"
          @click="changeActive(index)" :key="index">
      {{item}}</span>
  </div>
</template>

<script>
  export default {
    name: "TopControl",
    props:{
      topText:{
        type: Array,
      }
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    computed:{


      },
    methods:{
      changeActive(index){
          this.currentIndex=index;
        }
      }
    }
</script>

<style scoped>
  .top-control{
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    font-size: 18px;
    border:1px wheat dashed;
  }
  .top-control span{
    display: block;
    padding-bottom: 5px;
    margin-top: 5px;
  }
.active{
  color: #ff5777;
  border-bottom: #ee3759 2px solid;
  border-radius: 2px;
}
</style>
