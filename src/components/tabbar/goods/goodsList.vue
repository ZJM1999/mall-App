<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :item="item"></goods-list-item>
    
  </div>
</template>

<script>
import goodsListItem from './goodslistitem'
export default {
  
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
     goodsListItem
  }
}
</script>

<style>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }
</style>