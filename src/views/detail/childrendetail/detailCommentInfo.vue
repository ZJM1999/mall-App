<template>
  <div id="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <span class="header-title">用户评价</span>
      <span class="header-more">更多</span>
      <i class="arrow-right"></i>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs" v-if="commentInfo.images">
        <img v-for="(item, index) in commentInfo.images" :key="index" :src="item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(time) {
      const date = new Date(time*1000)
      return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDay()
    }
  }
}
</script>

<style scoped>
#comment-info {
  padding-bottom: 20px;
  border-bottom: 4px solid #eee;
}
.info-header {
  position: relative;
  justify-content: space-between;
  height: 40px;
  width: 100%;
}
.info-header>span{
  padding: 12px;
  font-size: 14px;
}
.info-header>span:nth-of-type(1) {
  position: absolute;
  left: 0;
}
.info-header>span:nth-of-type(2) {
  position: absolute;
  right: 0;
}
.info-user {
  margin: 0 10px; 
  display: flex;
  border-top: 1px solid #eeeeee; 
  padding-top: 10px;
}
.info-user>img {
   display: inline-block;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 2px #aaaaaa;
    border-radius: 50%;
}
.info-user>span {
    display: inline-block;
    line-height: 40px;
    padding-left: 8px; 
}
.info-detail {
  padding: 10px 10px 0;
  font-size: 14px;
  
}
.info-detail>p {
  padding-bottom: 8px; 
}
.info-other {
  color: #aaaaaa;
  padding-bottom: 8px; 
}
.info-other>span {
  padding-right: 8px;
}
/* .info-imgs {
  height: 60px;
  overflow: hidden;
} */
.info-imgs>img {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin-right: 3px;
}
</style>