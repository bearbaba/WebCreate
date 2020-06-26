<template>
  <div>
    <div class="main-data">
      <img class="shop-logo" :src = "shop.logo" alt="">
      <div class="shop-name">{{shop.name}}</div>
    </div>
    <div class="price-data">
      <div class="price-data-number">
        <div class="sale-number">{{shop.sells | shopCellsFormat}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    data() {
      return {
        sells: this.shop.sells
      }
    },
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    },

    filters: {
      shopCellsFormat(value){
        return (value/10000.0).toFixed(1).toString()+"万";
      }
    }
  }
</script>

<style scoped>
  .main-data{
    height: calc(5rem + 10px);
    vertical-align: center;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
.shop-logo{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #cccccc;
  box-shadow:
    -0.7px 0px 1px #837f7f,
    0px 0.7px 1px #837f7f,
    0.7px 0px 1px #837f7f,
    0px -0.7px 1px #837f7f;
  margin: 5px;
  display: inline;

}

  .shop-name{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 20px;
    color: #666666;
  }
</style>
