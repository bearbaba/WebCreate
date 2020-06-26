<template>
  <div>
    <img :src = "shop.logo" alt="">
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>

</style>
