<template>
  <div class="tabNavbar">
    <div class="tab-item" v-for="(item,index) in tabDatas" :key="index" :class="{active:index===currentIndex}" @click='itemClick(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    tabDatas:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
  .tabNavbar{
    /* width: 100%; */
    display: flex;
    text-align: center;
    /* position: sticky; */
    /* top: 44px; */
    background-color: #fff;
    padding: 12px 0;
    /* z-index: 9; */
  }
  .tab-item{
    flex: 1;
  }
  .tab-item span{
    font-size: 15px;
    padding: 10px;
  }
  .active{
    color: var(--color-tint)
  }
  .active span{
    border-bottom: 2px solid var(--color-tint)
  }
</style>