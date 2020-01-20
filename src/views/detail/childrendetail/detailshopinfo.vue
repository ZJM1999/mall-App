<template>
  <div class="shop-info">
    <div class="logo"><a :href="ShopInfo.shopUrl"><img :src="ShopInfo.shopLogo" alt="">{{ShopInfo.shopName}}</a></div>
    <div class="more-info">
       <div class="shop shop-goods">
         <div class="c-sells">
           <div class="c-sell">{{allSell}}</div>
           <div class="c-sellText">总销量</div>
         </div>
         <div class="c-goods">
           <div class="c-good">{{ShopInfo.goods}}</div>
           <div class="c-goodText">全部宝贝</div>
         </div>
         
       </div>
       <div class="shop shop-describe">
         <table>
           <tr v-for="(item,index) in ShopInfo.score" :key="index" class="tr-item">
             <td class="aa item-name">{{item.name}}</td>
             <td class="aa score" :class="{isRed:item.isBetter}">{{item.score}}</td>
             <td class="aa better"><span class="better-span" :class="{isBackGroundRed:item.isBetter}">{{item.isBetter?'高':'低'}}</span></td>
           </tr>
         </table>
       </div>
    </div>
    <div class="toShop">
      <span><a :href="ShopInfo.shopUrl" class="a-toShop">进店逛逛</a></span>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // allSell:0
    }
  },
  props:{
    ShopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    allSell(){
      return this.ShopInfo.sell>10000?(this.ShopInfo.sell/10000).toFixed(1)+'万':this.ShopInfo.sell
    }
  }
}
</script>

<style>
 .logo{
   padding: 10px 0;
   /* height: 66px; */
   line-height: 66px;
   font-size: 15px;
   font-weight: 500;
 }
 .logo img{
   width: 66px;
   height: 66px;
   vertical-align: middle;
   margin-right: 10px;
 }
 .more-info{
   display: flex;
 }
 .shop{
   flex: 1;
 }
 .shop-goods{
   display: flex;
   text-align: center;
 }
 .c-goods{
   flex: 1;
 }
 .c-sells{
   flex: 1;
 }
 .score{
   color: #5ea732;
   /* padding-right: 12px; */
   flex: 1;
 }
 .better{
   flex: 1;
 }
 .better-span{
   color: white;
   background-color: #5ea732;
 }
 .isRed{
   color: #f1313a;
 }
 .isBackGroundRed{
   background-color: red;
 }
 .item-name{
   font-size: 13px;
   height: 20px;
   /* padding: 5px 25px 5px 30px; */
   font-weight: 700;
   flex: 2;
 }
 .c-sell{
   padding: 15px 0;
 }
 
 .c-goodText,.c-sellText{
   font-size: 13px;
   font-weight: 700;
 }
 .c-good{
   padding: 15px 0;
 }
 .tr-item{
   display: flex; 
   text-align: center;  
 }
 
 table{
   width: 100%;
   padding-top: 10px;
 }
 .toShop{
   display: flex;
   padding: 20px 0;
   border-bottom: 5px solid #eee;
 }
 .toShop span{
   flex: 1;
   width: 100%;
   height: 20px;
   text-align: center;
   font-size: 13px;
   font-weight: 600;
 }
 .a-toShop{
   display: inline-block;
   width: 100px;
   height: 20px;
   line-height: 20px;
   background-color: #eee;
   border-radius: 8px;
 }
</style>