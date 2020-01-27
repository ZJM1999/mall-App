<template>
    <div class="cate-flex">
      <div class="left-list">
        <slot name="left-list"></slot>
      </div>
      <div class="rigth-list">
        <slot name="rigth-list"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .cate-flex{
    display: flex;
  }
 .left-list{
   flex: 1;
 }
  .rigth-list{
    flex: 3;
  }
</style>