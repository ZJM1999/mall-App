<template>
  <div class="root">
    <div class="root-title">
    <p class="title">{{details.title}}</p>
    <span class="now-price">￥{{details.nowPrice}}</span>
    <span class="low-price">￥{{details.lowPrice}}</span>
    <span class="text1" :style="{background:details.color}">优惠价</span>
  </div>
   <div class="root-sale">
    <span class="sale number">{{details.columns1}}</span>
    <span class="sale collection">{{details.columns2}}</span>
    <span class="sale return">{{details.columns3}}</span>
   </div>
   <div class="root-ico">
     <span class="ico left"><img :src="details.icon1" alt="">{{details.name1}}</span>
     <span class="ico right"><img :src="details.icon2" alt="">{{details.name2}}</span>
   </div>
  </div>
</template>

<script>
export default {
  
  props:{
    details:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
  .root-title{
    padding: 5px;;
  }
  .title{
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .now-price{
    color: var(--color-tint);
    font-size: 19px;
  }
  .low-price{
    margin-left: 5px;
    font-size: 13px;
    font-weight: 100;
    text-decoration:line-through;
  }
  .text1{
    color: white;
    font-size: 15px;
    position: relative;
    left: 5px;
    bottom: 6px;
    border-radius: 5px;
  }
  .root-sale{
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .sale{
    flex: 1;
    font-size: 13px;
    font-weight: 200;
  }
  .number{
    padding-left: 5px;
  }
  .collection{
    text-align: center;
  }
  .return{
    text-align: right;
    padding-right: 5px;
  }
  .root-ico{
    display: flex;
    padding-top: 20px;
    padding-bottom: 30px;
    border-bottom: 3px solid #eee;
  }
  .root-ico img{
    width: 12px;
    height: 12px;
  }
  .ico{
    flex: 1;
    font-size: 12px;
    font-weight: 550;
  }
  .left{
    padding-left: 5px;
  }
  .right{
    text-align: right;
    padding-right: 5px;
  }
</style>