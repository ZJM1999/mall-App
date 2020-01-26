<template>
  <div id="detail">
    <children-detail class="c-detail" @detailClick="detailClick" ref="nav"></children-detail>
    <better-scroll class="content" ref="bsscroll" @getScrollPosition="contentScroll" :position="3">
    <detail-swiper :topimg="topimage"></detail-swiper>
    <detail-title :details="details"></detail-title>
    <shop-info :ShopInfo="ShopInfo"></shop-info>
    <detail-describe :detail-describe="detailDescribe" @describeImgLoad="describeImgLoad"></detail-describe>
    <detail-params :params-info="paramsInfo" ref="params"></detail-params>
    <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
    <goods-list :goods="recommend" ref="list"></goods-list>  
    </better-scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <backTop @click.native='topClick' v-show="isScroll"></backTop>
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
import detailBottomBar from './childrendetail/detailBottomBar'
import {backMixin} from '@/common/mixin'



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
      currentIndex:0,
    }
  },

  mixins:[backMixin],

  components:{
    childrenDetail,
    detailSwiper,
    detailTitle,
    ShopInfo,
    betterScroll,
    detailDescribe,
    detailParams,
    DetailCommentInfo,
    goodsList,
    detailBottomBar
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
      
      this.$refs.bsscroll.topClick(0,-this.scrollIndex[index],500)
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
      for(let i = 0; i<this.scrollIndex.length; i++){
        const positionY = -position.y
        if(this.currentIndex!==i && ((i < this.scrollIndex.length-1 && positionY >= this.scrollIndex[i] && positionY < this.scrollIndex[i+1]) || (i === this.scrollIndex.length-1 && positionY >= this.scrollIndex[i]))){
          this.currentIndex = i
          // console.log(i)
          this.$refs.nav.currentIndex = this.currentIndex

        }
      }
      this.isScroll=(-position.y) > 1000

    },
    addToCart(){
      const product = {}
      product.images = this.topimage[0];
      product.title = this.details.title;
      product.desc = this.details.desc;
      product.nowPrice = this.details.nowPrice;
      product.iid = this.iid;
      this.$store.dispatch('addCart',product).then(value=>{
        console.log(value)
      })
    }
  }
}
</script>

<style>
  .content{
    height: calc(100% - 44px - 49px);
  }
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
  
</style>