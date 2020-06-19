<template>
  <top-bar class="top-bar">
    <div slot="left">&lt;</div>
    <div
      slot="center"
      class="top-bar-center"
    >
      <div
        v-for="(item,index) in items"
        :key="index"
        class="top-bar-item"
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
      }
    }
  }
</script>

<style scoped>
  .top-bar-center{
    display: flex;
    font-size: 13px;
  }
  .top-bar-item{
    text-align: center;
    flex: 1;
  }
</style>
