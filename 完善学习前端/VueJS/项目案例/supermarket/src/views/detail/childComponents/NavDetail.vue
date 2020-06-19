<template>
  <top-bar class="top-bar">
    <div slot="left" class="top-bar-left">&lt;</div>
    <div
      slot="center"
      class="top-bar-center"
    >
      <div
        v-for="(item,index) in items"
        :key="index"
        class="top-bar-item"
        :class="{active: index===currentIndex}"
        @click="itemClick(index)"

      >
        {{item}}
      </div>
    </div>
  </top-bar>
</template>

<script>
  import TopBar from "@/components/common/topBar/TopBar";
  export default {
    name: "NavDetail",
    components: { TopBar },
    data() {
      return {
        items:["商品","详情","评价","介绍"],
        currentIndex:0,
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .top-bar{
    padding-top: 8px;
    background-color: #ff5777;
  }

  .top-bar-left{
    font-size: 20px;
    text-align: center;
  }

  .top-bar-center{
    display: flex;
    font-size: 18px;
  }

  .top-bar-item{
    text-align: center;
    flex: 1;
  }

  .active{
    color: white;
  }
</style>
