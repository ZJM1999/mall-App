<template>
  <nav-bar>
    <div slot="left" @click="getBack"><img src="@/assets/images/common/back.svg" alt="" class="back"></div>
    <div class="center" slot="center">
      <div
       class="center-item"
       v-for="(item,index) in title"
       :key="index"
       @click="itemClick(index)"
       :class="{active:currentIndex==index}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/conner/navbar/NavBar'
export default {
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    },
    getBack(){
      this.$router.back()
    }
  }
}
</script>

<style>
  .center{
    display: flex;
    font-size: 13px;
  }
  .center-item{
    flex: 1;
  }
  .active{
    color: var(--color-tint)
  }
  .back{
    vertical-align: middle;
  }
</style>