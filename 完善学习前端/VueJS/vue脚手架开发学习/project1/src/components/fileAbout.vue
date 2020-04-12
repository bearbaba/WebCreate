<template>
  <div>
    <p>
      关于页面内容
    </p>
    <p>{{urlData}}</p>
  </div>
</template>

<script>
export default {
  name: 'fileAbout',
  computed: {
    urlData() {
      return this.$route.query;
    },
  },
};
</script>

<style>

</style>
