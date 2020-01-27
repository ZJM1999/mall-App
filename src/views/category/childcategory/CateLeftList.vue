<template>
    <better-scroll class="cate-scroll" ref="bsscroll">
    <div v-for="(item,index) in ulList" :key="index" class="item-contain" @click="cateItemClick(index)" :class="{item_active:itemIndex === index}">{{item.title}}</div>
    </better-scroll>
</template>

<script>
import betterScroll from '@/components/conner/scroll/betterScroll'

export default {
  data(){
    return{
      itemIndex:0
    }
  },
  props:{
    ulList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    betterScroll
  },
  methods:{
    cateItemClick(index){
      this.itemIndex = index
    }
  }
}
</script>

<style>
  .item-contain{
    padding: 3px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    border: 2px solid transparent;
    background-color: #eee;
  }
  .cate-scroll{
    height: calc(100vh - 44px - 49px);
    width: calc(100vw - 591px);
    overflow: hidden;
  }
  .cate-left-list{
    background-color: #eee;
  }
  .item_active{
    color: var(--color-tint);
    background-color: #fff;
    border-left: 2px solid var(--color-tint);
  }
  
</style>