<template>
  <div id="home">
    <nav-bar class="home-navbar"><div slot="center" class="shopping">购物街</div></nav-bar>
    <tab-navbar :tabDatas="['流行','新款','精选']" @tabClick=tabClick class="tab-nav-bar" v-show="isOverOffsetTop" ref="tab1"></tab-navbar>
    <!-- 首页滚动区域 -->
    <bsscroll
     class="content"
     ref='bsscroll'
     :position='3'
     @getScrollPosition='getScrollPosition'
     @pullingUp='pullingUp'>
    <home-swiper :banners='banners' @imgSwiperLoad="imgSwiperLoad"></home-swiper>
    <home-recommend-views :recommends='recommends'></home-recommend-views>
    <home-week-hot></home-week-hot>
    <tab-navbar :tabDatas="['流行','新款','精选']" @tabClick=tabClick ref="tab"></tab-navbar>
    <good-list :goods="showTab"></good-list>
    </bsscroll>


    <backTop @click.native='topClick' v-show="isScroll"></backTop>
  </div>
</template>

<script>
//公共组件
import NavBar from '@/components/conner/navbar/NavBar'
import tabNavbar from '@/components/tabbar/tabNavbar'
import bsscroll from '@/components/conner/scroll/betterScroll'
//子组件导入
import HomeSwiper from './childrencommon/HomeSwiper'
import HomeRecommendViews from './childrencommon/HomeRecommendViews'
import HomeWeekHot from './childrencommon/HomeWeekHot'
import goodList from '@/components/tabbar/goods/goodsList'
import backTop from '@/components/tabbar/backTop/backTop'
//网络请求
import { getHomeMultiData , getHomeShoppingData} from '@/network/home'
//mixin导入
import {backMixin} from '@/common/mixin'
export default {
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      tab:['pop','new','sell'],
      index:0,
      tabOffsetTop:0,
      isOverOffsetTop:false,
      scrollY:0
    }
  },
  mixins:[backMixin],
  computed:{
    showTab(){
      return this.goods[this.tab[this.index]].list
      // console.log(this.goods)
      // console.log(this.goods[this.tab[this.index]])
      // console.log(this.index)
    }
  },
  created(){
    this.getHomeData()
    this.getHomeShoppingData('pop')
    this.getHomeShoppingData('sell')
    this.getHomeShoppingData('new')  
  },
  activated(){
    // console.log('活跃')
    this.$refs.bsscroll.topClick(0,this.scrollY,0)
    this.debounce(this.$refs.bsscroll.imgagesLoadRefresh,500)()
  },
  deactivated(){
    this.scrollY=this.$refs.bsscroll.scroll.y
    // console.log('非活跃')
    // console.log(this.scrollY)
  },
  mounted(){
    const refresh = this.debounce(this.$refs.bsscroll.imgagesLoadRefresh,500)
    this.$bus.$on('imagesLoad',()=>{
      // console.log('图片已加载')
      // console.log(this)
      refresh()
    })
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendViews,
    HomeWeekHot,
    tabNavbar,
    goodList,
    bsscroll,
    backTop
  },
  methods:{
    /**
     * 防抖
     */
    debounce(func,delady){
      let timer = null
      return function (...args){
        if(timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func()
          }, delady);
      }
    },
    /**
     * 点击事件
     */
    tabClick(index){
      // console.log(index)
      this.index=index
      this.$refs.tab1.currentIndex=index
      this.$refs.tab.currentIndex=index
      
    },
    
    getScrollPosition(position){
      // console.log(position)
      this.isScroll=(-position.y) > 1000
      this.isOverOffsetTop=(-position.y) >this.tabOffsetTop
    },
    pullingUp(){
      // console.log('上拉加载')
      // console.log(this.tab[this.index])
      this.getHomeShoppingData(this.tab[this.index])
      
    },
    imgSwiperLoad(){
      // console.log(this.$refs.tab.$el.offsetTop)
      this.tabOffsetTop=this.$refs.tab.$el.offsetTop
    },
    
    /**
     * 数据请求
     */
    getHomeData(){
      getHomeMultiData().then(res=>{ 
        // console.log(res)
        this.banners=res.data.data.banner.list
        this.recommends=res.data.data.recommend.list
        // console.log(this.banners)
        // console.log(this.recommends)
      },err=>{
        console.log(err)
      })
    },
    getHomeShoppingData(type){
      const page = this.goods[type].page+1
      getHomeShoppingData(type,page).then(res=>{
        // console.log(res)
        // console.log(this.goods[type].list)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
        
      },err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>
  #home{
    padding-top: 44px;

  }
  .home-navbar{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .home-navbar{
    background-color: var(--color-tint);
    color: white;
  }
  .content{
    overflow: hidden; 
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .tab-nav-bar{
    position: relative;
    z-index: 9;
  }
  .shopping{
    width: 100%;
    font-size: 15px;
  }
</style>