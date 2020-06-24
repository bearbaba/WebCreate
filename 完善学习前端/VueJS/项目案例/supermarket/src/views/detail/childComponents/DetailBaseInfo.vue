<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">￥{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="sale">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods:{
        type: Object,
        default(){
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    padding: 8px;
    font: none 16px "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .info-title{
    font-weight: bold;
  }

  .info-price{
    margin-top: 10px;
  }

  .n-price{
    font-size: 20px;
    color: #ee3759;
  }

  .o-price{
    margin-left: 4px;
    text-decoration-line: line-through;
  }

  .discount{
    color: white;
    margin-left: 5px;
    background: #ff5777;
    padding: 2px;
    border-radius: 8px;
    position: relative;
    bottom: 10px;
    font-weight: bold;
  }

  .sale{
    display: flex;
    flex-direction: row;
    background-clip: content-box;
    justify-content: space-between;
    margin-top: 20px;
    color: #837f7f;
  }
  .del-font{

  }
</style>
