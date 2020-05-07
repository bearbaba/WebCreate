<template>
  <div class="tab-control">
    <span :class="{active:currentIndex === index}"
          v-for="(item,index) in tabText"
          @click="changeActive(index)" :key="index">
      {{item}}</span>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      tabText:{
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
  .tab-control{
    display: flex;
    justify-content: space-evenly;
    font-size: 18px;
    border:1px wheat dashed;
  }
  .tab-control span{
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
