<template>
    <tab-bar>
      <tab-bar-item path='home' activeColor='red'>
        <img src="@/assets/images/tabbar/home.svg" slot="tab-bar-img">
        <img src="@/assets/images/tabbar/home_active.svg" slot="tab-bar-img2">
        <div slot="tab-bar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='category' activeColor='red'>
        <img src="@/assets/images/tabbar/category.svg" slot="tab-bar-img">
        <img src="@/assets/images/tabbar/category_active.svg" slot="tab-bar-img2">
        <div slot="tab-bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='cart' activeColor='red'>
        <img src="@/assets/images/tabbar/shopcart.svg" slot="tab-bar-img">
        <img src="@/assets/images/tabbar/shopcart_active.svg" slot="tab-bar-img2">
        <div slot="tab-bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='my' activeColor='red'>
        <img src="@/assets/images/tabbar/profile.svg" slot="tab-bar-img">
        <img src="@/assets/images/tabbar/profile_active.svg" slot="tab-bar-img2">
        <div slot="tab-bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar'
import tabBarItem from '@/components/tabbar/tabbar-children.vue'
export default {
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>