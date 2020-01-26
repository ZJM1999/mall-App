<template>
<div>
  <nav-bar class="cart">
    <div slot="center" class="center-cart">购物车({{cartLength}})</div>
  </nav-bar>
  <cart-list></cart-list>
  <cart-buttom-bar></cart-buttom-bar>
</div>
</template>

<script>
import navBar from '@/components/conner/navbar/NavBar'
import cartList from './cartList/cartList'
import cartButtomBar from './cartList/cart-buttom-bar'
import { mapGetters } from 'vuex'
export default {
  components:{
    navBar,
    cartList,
    cartButtomBar
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style>
  .cart{
    background-color: var(--color-tint);
  }
  .center-cart{
    width: 100%;
    color: white;
    font-size: 15px;
  }
</style>