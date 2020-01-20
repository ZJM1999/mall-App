<template>
  
    <div class="tab-bar-item" @click="itemClick">
        <div v-if=!isActive><slot name="tab-bar-img"></slot></div>
        <div v-else><slot name="tab-bar-img2"></slot></div>
        <div :style='getActiveColor'><slot name="tab-bar-text"></slot></div>
      </div>
      
  
</template>
<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },

  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    getActiveColor(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;
    margin-top: 6px;
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
   
  }
  .active{
    color: rgb(238, 68, 68);
  }
</style>