<template>
  <div id="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false    
      }
    },
    methods: {
      show(message, duration = 2000) {
        this.isShow = true
        this.message = message
        setTimeout(() => {
          this.isShow = false
          this.message = '' 
        }, duration)
      }
    }
  }
</script>

<style scoped>
  #toast {
    /* 显示 */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    /* toast形状 */
    min-width: 160px;
    min-height: 100px;
    padding: 40px 20px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    /* 文字 */
    color: white;
    text-align: center;
    line-height: 100%;
  }
/* 
  .toastfade-enter-active,
  .toastfade-leave-active {
    transition: opacity .5s;
  }
  .toastfade-enter,
  .toastfade-leave-to {
    opacity: 0;
  } */
</style>