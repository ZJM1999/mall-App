<template>
  <div class="goods-list-item" @click="itemClick">
    
    <img :src="imgShow"  v-on:load="imgLoad">
    <div class="text">
    <p>{{item.title}}</p>
    <span class="price">{{item.price}}</span>
    <i></i>
    <span class="collect">{{item.cfav}}</span>
    </div>
   
  </div>
</template>

<script>
export default {
  
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    imgShow(){
      return this.item.image || this.item.show.img
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('imagesLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.item.iid)
      // console.log(this.item)
    }
  }
  
}
</script>

<style>
  .goods-list-item{
    /* flex: 1; */
    padding-bottom: 40px;
    position: relative;
    width:45%;
  }
  .goods-list-item img{
    border-radius: 5px;
    width: 100%;
  }
  .text{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    font-size: 15px;
    overflow: hidden;
    text-align: center;
  }
  .text p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    color: var(--color-tint);
  }
  /* .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1;
    width: 14px;
    height: 14px;
    background: url('../../../assets/images/common/collect.svg');
  } */
  .text i{
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
    margin: 0 3px 0 8px;
  }
</style>