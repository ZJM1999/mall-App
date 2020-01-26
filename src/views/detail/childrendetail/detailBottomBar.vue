<template>
  <div id="detail-bottom-bar">
    <div class="left">
      <div>
        <div class="chat"></div>
        <span>客服</span>
      </div>
      <div>
        <div class="shop"></div>
        <span>店铺</span> 
      </div>
      <div>
        <div class="collect"></div>
        <span>收藏</span> 
      </div>
    </div>
    <div class="right">
      <div class="add" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  #detail-bottom-bar {
    display: flex;
    height: 49px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: #fff;
    font-size: 12px;
  }
  .left, .right {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .left>div, .right>div {
    flex: 1;
    text-align: center;
  }
  .left>div>div {
    width: 20px;
    height: 20px;
    margin:auto;
    background-size:100%;
    margin-bottom: 5px;
  }
  .chat {
    background: url("../../../assets/images/detail/detail_bottom.png") 0 -48px no-repeat;
  }
  .shop {
    background: url("../../../assets/images/detail/detail_bottom.png") 0 -89px no-repeat;
  }
  .collect {
    background: url("../../../assets/images/detail/detail_bottom.png") 0 0 no-repeat;
  }
  .right {
    line-height: 49px;
  }
  .add {
    color:#333030;
    background-color: rgb(252, 215, 93);
  }
  .buy {
    color: #ffffff;
    background-color: var(--color-high-text);
  }
</style>