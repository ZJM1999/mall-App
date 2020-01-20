<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return []
    }
  }
 }
}
</script>

<style>
  .recommend{
    display: flex;
    padding: 10px 0 30px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
  .recommend-item img{
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
  }
  
</style>