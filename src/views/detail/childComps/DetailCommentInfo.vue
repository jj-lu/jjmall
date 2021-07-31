<template>
  <div class="info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="title-info">
      <div>用户平均</div>
      <div>更多</div>
    </div>
    <div>
      <div class="user-info">
        <div class="user-img"><img :src="commentInfo.user.avatar" alt=""></div>
        <div>{{commentInfo.user.uname}}</div>
      </div>
      <div class="content">{{commentInfo.content}}</div>
      <div class="detail-info">
        <span class="createTime">{{dateChange}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="detail-img">
<!--      <span v-for="(item,index) in commentInfo.images" :key="index">-->
<!--        <img :src="item" alt="">-->
<!--      </span>-->
        <img v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>

</template>

<script>
import {formatDate} from "../../../common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    dateChange(){
      const date = new Date(this.commentInfo.created * 1000);
      console.log(date);
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.info{
  padding: 0 10px;
  border-bottom: 5px #eeeeee solid;
}

.title-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: #e9e9e9 1px solid;
}

.user-info{
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  margin: 10px 0;
}

.user-img{
  height: 50px;
  float: left;
  margin-right: 10px;
}

.user-img img{
  height: 100%;
}

.content{
  margin: 10px 0;
  color: var(--color-text);
}

.detail-info{
  margin: 10px 0;
  color: var(--color-text);
}

.createTime{
  margin-right: 10px  ;
}

.detail-img{
  margin: 10px 0;
}

.detail-img img{
  height: 100px;
  margin-right: 10px;
}

</style>
