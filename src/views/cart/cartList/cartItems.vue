<template>
  <div id="product-item">
    <div class="tick">
      <tick-btn ref="tickBtn" :is-check="itemInfo.isCheck" @click.native="checkClick"/>
    </div>

    <div class="product-img"><img :src="itemInfo.images" alt=""></div>
    <div class="product-info">
      <div class="product-title">{{itemInfo.title}}</div>
      <div class="product-desc">{{itemInfo.desc}}</div>  
      <div class="order-info">
        <span class="price">¥{{itemInfo.nowPrice}}</span>
        <span class="count">x{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TickBtn from '@/components/conner/tickbtn/TickBtn'
export default {
  name:"cartItems",
  components:{
    TickBtn
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  
  methods: {
    //选择按钮的触发事件和状态
    checkClick() {
      this.itemInfo.isCheck = !this.itemInfo.isCheck
    }
  },
  // updated() {
    //改变商品选中状态
    // this.$refs.tickBtn.isChecked = this.itemInfo.checked
  // }
  
}
</script>

<style scoped>
  #product-item {
    height: 120px;
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    margin: 0 10px;
  }
  .tick {
    height: 100%;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-right: 5px;
  }
  
  .product-img {
    flex: 3;
    overflow: hidden;
  }
  .product-img>img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
  .product-info {
    /* background-color: cadetblue; */
    flex: 7;
    padding-left: 8px;
    position: relative;
  }
  .product-title {
    /* background-color: aqua; */
    width: 60vw;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis; 
    font-size: 14px;
    color: #333333;
  }
  .product-desc {
    font-size: 12px;
    width: 60vw;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 40px;
  }
  .order-info {
    /* background-color: antiquewhite; */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px 0px 8px 8px;
    display: flex;
    justify-content: space-between;
  }
  .price {
    color: #f54020
  }
  .count {
    text-align: right;
  }
</style>