<template>
  <div class="cart-list">
    <better-scroll class="cart-scroll" ref="bsscroll">
      <ul class="ul-scroll">
        <li v-for="(item,index) in cartList" :key="index">
          <cart-items :item-info="item"></cart-items>
        </li>
      </ul>
    </better-scroll>
  </div>
</template>

<script>
import betterScroll from '@/components/conner/scroll/betterScroll'
import { mapGetters } from 'vuex'
import cartItems from './cartItems'

export default {
  name:"cartList",
  components:{
    betterScroll,
    cartItems
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  activated(){
    this.$refs.bsscroll.imgagesLoadRefresh()
  }

}
</script>

<style>
  .cart-list{
    height: calc(100vh - 142px);
  }
  .cart-scroll{
    height: calc(100vh - 142px);
    overflow: hidden;
  }
  .ul-scroll{
    height: 100%;
  }
</style>