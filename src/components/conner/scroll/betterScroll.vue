<template>
  <div class="content" ref="content">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bs from 'better-scroll'
export default {
  data(){
    return {
      scroll:null
    }
  },
  props:{
    position:{
      type:Number,
      default:0
    }
  },
  mounted(){
    this.scroll = new bs(this.$refs.content,{
      probeType:this.position,
      click:true,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
      // console.log(position)
      this.$emit('getScrollPosition',position)
    })
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载')
      this.scroll.finishPullUp()
      this.$emit('pullingUp')
    }) 
    
  },
  methods:{
    topClick(x,y,time){
      this.scroll.scrollTo(x,y,time=500)
      
    },
    imgagesLoadRefresh(){
      this.scroll.refresh()
      // console.log('加载+1')
    }
  }
}
</script>

<style>
  
</style>