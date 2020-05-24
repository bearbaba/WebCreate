<template>
  <div class="good-list-item">
    <img :src="goodListItem.show.img" alt="" @load="imageLoad">
    <div class="item-text">
      <span class="title">{{goodListItem.title}}</span>
      <span class="cfav">收藏：{{goodListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodListItem: {
        type: Object,
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad');
      }
    }
  }
</script>

<style scoped>
.good-list-item{
 width: 45%;
  display: block;
  text-align: center;
  height: calc(257px);

}
  .good-list-item>img{
    width: 80%;
    margin-top: 20px;
  }
  .good-list-item .item-text{
    width:90%;
    text-align: center;
  }
  .title
  {
    /*width: 40%;*/
    display: block;
    white-space: nowrap;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 1rem;
  }
  .cfav{
    display: block;
    font-size: 10px;
    text-align: center;
  }
</style>
