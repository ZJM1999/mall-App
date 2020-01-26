<template>
  <div class="cart-buttom-bar">
    <div class="all-check">
      <tick-btn class="tick-btn" @tickClick="tickClick" :is-check="isSelectAll"></tick-btn>
      <span>全选</span>
    </div>
    <div class="all-price">
      <span>总价:{{allPrice}}</span>
    </div>
    <div class="compute-price">
      <span>去结算 ({{milk}})</span>
    </div>
  </div>
</template>

<script>
import TickBtn from '@/components/conner/tickbtn/TickBtn'
export default {
  components:{
    TickBtn
  },
  computed:{
    allPrice(){
      return '￥' + this.$store.state.cartList.filter(item=>{
        return item.isCheck
      }).reduce((proValue,item)=>{
        return proValue + item.nowPrice*item.count
      },0).toFixed(2)
    },
    milk(){
      return this.$store.state.cartList.filter(item=>item.isCheck).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.find(item=>!item.isCheck))
    }
  },
  methods:{
    tickClick(){
      if(!this.isSelectAll){
        this.$store.state.cartList.forEach(item=>item.isCheck = true)
      }else{
        // console.log('1')
        this.$store.state.cartList.forEach(item=>item.isCheck = false)
      }
    }
  }
}
</script>

<style>
  .cart-buttom-bar{
    display: flex;
    height: 49px;
    background-color: #eee;
    position: relative;
    z-index: 9;
  }
  
  .all-check{
    flex: 2;
    display: flex;
    align-self: center;
    width: 20px;
    height: 20px;
    padding-left: 6px;
    /* line-height: 49px; */
  }
  .all-price{
    flex: 4;
    line-height: 49px;
  }
  .compute-price{
    flex: 3;
    line-height: 49px;
    text-align: center;
    color: white;
    background-color: red;
  }
</style>