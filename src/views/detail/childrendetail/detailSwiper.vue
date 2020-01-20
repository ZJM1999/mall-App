<template>
  <swiper class="swiperH">
    <swiper-item v-for="(item,index) in topimg" :key="index">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/conner/swiper'
export default {
  props:{
    topimg:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created(){
  },
 components:{
   Swiper,
   SwiperItem
 }
}
</script>

<style>
  .swiperH{
    height: 300px;
    overflow: hidden;
  }
</style>