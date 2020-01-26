<template>
  <div class="check-button" :class="{check:isCheck}" @click="tickBtnClick">
    <img src="@/assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    isCheck:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    tickBtnClick(){
      this.$emit('tickClick')
    }
  }
}
</script>

<style>
  .check-button{
    border-radius: 50%;
    border: 2px solid #aaa;

  }
  .check{
    border: 2px solid pink;
    background-color: pink;
  }
</style>