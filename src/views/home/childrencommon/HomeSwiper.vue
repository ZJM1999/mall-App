<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/conner/swiper/index'
export default {
  props:{
    banners:{
      type:Array,
      default(){
      return []
      }
    }  
  },
  data(){
    return {
      isLoad:true
    }
  },
  components:{
    SwiperItem,
    Swiper
  },
  methods:{
    swiperLoad(){
      if(this.isLoad){
        this.$emit('imgSwiperLoad')
        this.isLoad=false
      }
     }
  }
}
</script>

<style>

</style>