<template>
  <div class="tab-bar">
      <slot></slot>
    </div>
</template>
<script>

export default {
  name:'tabBar',
  
}
</script>
<style scoped>
  .tab-bar{
    background-color: #f2f2f2;
    display: flex;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    vertical-align: middle;
    text-align: center;
    font-size: 12px;
    box-shadow: 0 -2px 10px rgba(143, 84, 84, 0.2)
  }
  
</style>