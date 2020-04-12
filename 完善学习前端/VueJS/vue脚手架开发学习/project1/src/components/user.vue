<template>
  <div>
    <p>
    这是用户页面
    </p>
    <p>
      {{userId}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
};
</script>
<style>

</style>
