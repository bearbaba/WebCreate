<template>
  <div class='tab-bar-item'>
    <div class='tab-bar-item-img'>
      <slot name='tab-bar-item-img'></slot>
    </div>
    <div class='tab-bar-item-text'>
      <slot name='tab-bar-item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-bar-item'
}
</script>

<style>

</style>
