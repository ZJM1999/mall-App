<template>
  <div id="detail">
    <children-detail class="c-detail"></children-detail>
    <better-scroll class="content">
      <detail-swiper :topimg="topimage"></detail-swiper>
    <detail-title :details="details"></detail-title>
    <shop-info :ShopInfo="ShopInfo"></shop-info>
    </better-scroll>
  </div>
</template>

<script>

import childrenDetail from './childrendetail/childrenDetail'
import detailSwiper from './childrendetail/detailSwiper'
import detailTitle from './childrendetail/detailtitle'
import ShopInfo from './childrendetail/detailshopinfo'
import betterScroll from '@/components/conner/scroll/betterScroll'


import {getDetail,MoreDetail,shopInfo} from '@/network/detail' 
export default {
  name:'Detail',
  data(){
    return {
      iid:null,
      topimage:[],
      details:{},
      ShopInfo:{}
    }
  },
  components:{
    childrenDetail,
    detailSwiper,
    detailTitle,
    ShopInfo,
    betterScroll
  },
  created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      //请求轮播图图片
      this.topimage=res.data.result.itemInfo.topImages
      //请求详情数据
      const datas = res.data.result
      const details = new MoreDetail(datas.itemInfo,datas.columns,datas.shopInfo.services)
      const ShopInfo = new shopInfo(datas.shopInfo)
      // console.log(res)
      this.details = details
      this.ShopInfo = ShopInfo
    })
  }
}
</script>

<style>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .c-detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>