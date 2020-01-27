<template>
  <div>
    <nav-bar class="profile-nav"><template #center>我的</template></nav-bar>
    <div class="my-info">
      <img class="avatar" src="../../assets/images/profile/avatar.svg" alt="头像">
      <div class="login-info">
        <div class="log-reg">登录/注册</div>
        <div class="phone"><img src="../../assets/images/profile/phone.svg" alt="手机"><span>暂无绑定手机号</span></div>
      </div>
      <img class="arrow" src="../../assets/images/common/arrow-left.svg" alt="">
    </div>
    <div class="my-wallet">
      <div class="wallet-item">
        <div><span>0.00</span>元</div>
        <div>我的金额</div>
      </div>
      <div class="wallet-item">
        <div><span>0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="wallet-item">
        <div><span>0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="module-a">
      <div class="module-item"><img src="../../assets/images/profile/message.svg"><span>我的消息</span></div>
      <div class="module-item"><img src="../../assets/images/profile/shopping.svg"><span>购物商城</span></div>
      <div class="module-item"><img src="../../assets/images/profile/vip.svg"><span>会员卡</span></div>
    </div>
    <div class="module-b">
      <div class="module-item"><img src="../../assets/images/profile/cart.svg"><span>我的购物车</span></div>
      <div class="module-item"><img src="../../assets/images/profile/pointer.svg"><span>下载购物APP</span></div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/conner/navbar/NavBar';
  export default {
    name: 'Profile',
    components: {
      NavBar
    }
  }

</script>

<style scoped>
  .profile-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .my-info {
    background-color: var(--color-tint);
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .avatar {
    width: 80px;
  }

  .login-info {
    flex: 1;
    /* height: 80px;    */
    color: #fff;
    padding-left: 10px;
  }

  .log-reg {
    padding-bottom: 5px;
  }

  .phone {
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .phone>img {
    width: 18px;
    margin-left: -5px;
  }

  .arrow {
    width: 18px;
  }

  .my-wallet {
    width: 100%;
    height: 76px;
    display: flex;
    align-items: center;
    border-bottom: 10px solid #eee;
    font-size: 14px;
    line-height: 20px;
  }

  .wallet-item {
    flex: 1;
    /* display: flex; */
    /* align-items: center; */
    text-align: center;
    padding: 10px 0;
  }

  .wallet-item:nth-of-type(2) {
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
  }

  .wallet-item span {
    color: var(--color-high-text);
    font-size: 20px;
  }

  .module-a {
    border-bottom: 10px solid #eee;
  }

  .module-item {
    height: 40px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .module-item>img {
    width: 18px;
  }

  .module-item>span {
    padding-left: 5px;
  }

  .module-item:last-of-type {
    border: none;
  }

</style>
