<template>
  <div>
    <div class="shop-describe">
      <div class="start">
        <div class="line"><i class="point"></i></div>
      </div>
      <div class="describe-info">{{detailDescribe.desc}}</div>
      <div class="end">
        <div class="end-line line"><i class="end-point"></i></div>
      </div>
    </div>
    <div class="effect-text">{{detailDescribe.key}}</div>
    <div class="effect-images" v-for="(item,index) in detailDescribe.list" :key="index">
      <img :src="item" alt="" @load="describeImageLoad">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counte:0
    }
  },
  props:{
    detailDescribe:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    describeImageLoad(){
      let loads =  this.counte+=1
      if(loads==this.detailDescribe.list.length){
        this.$emit('describeImgLoad')
      }
      // console.log(loads)
    }
  }

}
</script>

<style>
 
  .start{
    width: 100%;
  }
  .line{
    position: relative;
    width: 33%;
    height: 20px;
    border-bottom: 1px solid rgba(37, 35, 35, 0.596);
  }
  .point{
    position: absolute;
    border: 3px solid black;
    bottom: 0;
    left: 0;
  }
  .end{
    box-sizing: border-box;
    padding-left: 67%;
    margin-right: -67%;
  }
  .end-point{
    position: absolute;
    border: 3px solid black;
    bottom: 0;
    right: 0;
  }
  .describe-info{
    padding-top: 12px;
    padding-left: 5px;
  }
  .effect-text{
    font-weight: 500;
    padding: 10px;
  }
  .effect-images img{
    width: 100%;
  }
</style>