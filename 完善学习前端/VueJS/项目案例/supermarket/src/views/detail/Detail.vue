<template>
  <nav-detail></nav-detail>
</template>

<script>
  import NavDetail from "@/views/detail/childComponents/NavDetail";
  export default {
    name: "detail",
    components: { NavDetail },
    data() {
      return {
        iid: null,
      }
    },
    created() {
      this.iid=this.$route.params.iid;
    }
  }
</script>

<style scoped>

</style>
