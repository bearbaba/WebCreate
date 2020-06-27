<template>
  <div>
    <div class="main-data">
      <img class="shop-logo" :src = "shop.logo" alt="">
      <div class="shop-name">{{shop.name}}</div>
    </div>
    <div class="price-data">
      <div class="price-data-number">
        <div class="sale-number number">{{shop.sells | shopCellsFormat}}</div>
        <div class="sale-number-text">总销量</div>
      </div>
      <div class="price-treasure-data">
        <div class="price-treasure-number number">{{shop.goodsCount}}</div>
        <div class="price-treasure-text">全部宝贝</div>
      </div>
    </div>
<!--    <div class="desripe-data">-->
<!--      <table>-->
<!--        <tr v-for="(item, index) in shop.score" :key="index">-->
<!--          <td>{{item.name}}</td>-->
<!--          <td :class="{"></td>-->
<!--        </tr>-->
<!--      </table>-->
<!--    </div>-->
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
    margin: 20px 0;
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

  .price-data{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .price-data-number{

  }

  .price-treasure-data{
    margin-top: 3px;
    border-right: #837f7f 1px solid;
    padding: 0 20px;
  }

  .number{
    font-size: 20px;
  }
</style>
