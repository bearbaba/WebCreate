<template>
  <div class="tar-bar-item" @click="changeSite" >
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeTextColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopControlItem",
    props:{
      path:String,
    },
    methods: {
      changeSite(){
        this.$router.push(this.path);
      }
    },
    computed: {
      // eslint-disable-next-line vue/return-in-computed-property
      isActive(){
        if(this.$route.path===this.path){
          return true;
        }
        else{
          return false;
        }
      },
      // eslint-disable-next-line vue/return-in-computed-property
      activeTextColor(){
        if(this.isActive===true){
          // eslint-disable-next-line no-undef
          return {color: "#FF5777"};
        }
      }
    }
  }
</script>

<style scoped>
.tar-bar-item{
  text-align: center;
}
  img{
    height: 24px;
  }
  p{
    font-size: 14px;
    margin-top: 0px;
  }

</style>
