<template>
  <div class="good-list">
    <good-list-item v-for="(item,index) in goods" :good-list-item="item"
                    :key="index"></good-list-item>
  </div>
</template>

<script>
  import GoodListItem from "@/components/content/goodsList/GoodListItem";
  export default {
    name: "GoodList",
    props:{
      goods:{
        type: Array,
      }
    },
    components:{
      GoodListItem
    }
  }
</script>

<style scoped>
  .good-list{
    display: flex;
    justify-content: space-evenly;
    -webkit-justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
  }
</style>
