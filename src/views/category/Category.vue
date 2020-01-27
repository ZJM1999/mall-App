<template>
  <keep-alive>
    <div class="cateGory">
    <nav-bar class="cate-nav"><div class="cate-center" slot="center">商品分类</div></nav-bar>
    <cate-gory-list>
      <cate-left-list slot="left-list" :ulList='ulList' class="cate-left-list"></cate-left-list>
      <!-- <cate-rigth-list :subdatas='subdatas' :goods='categoryDetail[indexType].list'></cate-rigth-list> -->
    </cate-gory-list>
    </div>
  </keep-alive>
</template>

<script>
//组件引用
import NavBar from '@/components/conner/navbar/NavBar'
import cateGoryList from './childcategory/CateGoryLists'
import CateLeftList from './childcategory/CateLeftList'
// import CateRigthList from './childcategory/CateRigthList'
// import betterScroll from '@/components/conner/scroll/betterScroll'

//数据请求
import { getCartGoryGoods,
         getSubCategory,
         getCategoryDetail } 
         from '@/network/cateGory'

export default {
    name: "Category",
    data(){
      return{
        ulList:[],
        subdatas:[],
        indexType:'pop',
        categoryDetail: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
      }
    },
    components:{
      NavBar,
      cateGoryList,
      CateLeftList,
      // CateRigthList
      // betterScroll
    },
    created(){
      getCartGoryGoods().then(res=>{
        this.ulList = res.data.data.category.list
        // console.log(res) 
      }).then(res=>{
        this.getSubCategory(this.ulList[0].maitKey)
        this.getCategoryDetail(this.ulList[0].miniWallkey,this.indexType)
      })
        
    },
    methods:{
      getSubCategory(maitKey){
        getSubCategory(maitKey).then(res=>{
          this.subdatas = res.data.data.list
          // console.log(res.data.data.list)
        })
      },
       getCategoryDetail(key,type){
         getCategoryDetail(key,type).then(res=>{
          console.log(res.data)
          this.categoryDetail[type].page+=1
          this.categoryDetail[type].list.push(...res.data)
         })
       }
    }
      
}
</script>

<style scoped>
  .cate-nav{
    color: white;
    background-color: var(--color-tint);
  }
  .cate-center{
    width: 100%;
    font-size: 15px;
  }
  
</style>
