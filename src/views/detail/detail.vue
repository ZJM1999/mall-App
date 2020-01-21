<template>
  <div id="detail">
    <children-detail class="c-detail" @detailClick="detailClick"></children-detail>
    <better-scroll class="content" ref="scroll" @getScrollPosition="contentScroll" :position="3">
    <detail-swiper :topimg="topimage"></detail-swiper>
    <detail-title :details="details"></detail-title>
    <shop-info :ShopInfo="ShopInfo"></shop-info>
    <detail-describe :detail-describe="detailDescribe" @describeImgLoad="describeImgLoad"></detail-describe>
    <detail-params :params-info="paramsInfo" ref="params"></detail-params>
    <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
    <goods-list :goods="recommend" ref="list"></goods-list>  
    </better-scroll>
  </div>
</template>

<script>

import childrenDetail from './childrendetail/childrenDetail'
import detailSwiper from './childrendetail/detailSwiper'
import detailTitle from './childrendetail/detailtitle'
import ShopInfo from './childrendetail/detailshopinfo'
import betterScroll from '@/components/conner/scroll/betterScroll'
import detailDescribe from './childrendetail/detailDescribe'
import detailParams from './childrendetail/detailParams'
import DetailCommentInfo from './childrendetail/detailCommentInfo'
import goodsList from '@/components/tabbar/goods/goodsList'



import {getDetail,MoreDetail,shopInfo,GoodsParam,getRecommend} from '@/network/detail' 
export default {
  name:'Detail',
  data(){
    return {
      iid:null,
      topimage:[],
      details:{},
      ShopInfo:{},
      detailDescribe:{},
      paramsInfo:{},
      commentInfo:{},
      recommend:[],
      scrollIndex:[],
    }
  },
  components:{
    childrenDetail,
    detailSwiper,
    detailTitle,
    ShopInfo,
    betterScroll,
    detailDescribe,
    detailParams,
    DetailCommentInfo,
    goodsList
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
      const goodsParam = new GoodsParam(datas.itemParams.info,datas.itemParams.rule)
      
      // console.log(res)
      this.details = details
      this.ShopInfo = ShopInfo
      this.detailDescribe = datas.detailInfo.detailImage[0]
      this.paramsInfo = goodsParam
      //获取评论数据
      if (datas.rate.cRate !== 0) {
          this.commentInfo = datas.rate.list[0]
        }
    })
    getRecommend().then(res=>{
      // console.log(res)
      this.recommend=res.data.data.list
      // console.log(this.recommend)
    })
    // this.$bus.$on('imagesLoad',()=>{
      
    // })
    
  },
  methods:{
    detailClick(index){
      
      this.$refs.scroll.topClick(0,-this.scrollIndex[index],500)
    },
    describeImgLoad(){
      this.$nextTick(()=>{
          this.scrollIndex = []
          this.scrollIndex.push(0)
          this.scrollIndex.push(this.$refs.params.$el.offsetTop)
          this.scrollIndex.push(this.$refs.comment.$el.offsetTop)
          this.scrollIndex.push(this.$refs.list.$el.offsetTop)
          // console.log(this.scrollIndex)
      })
    },
    contentScroll(position){
    }
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