<template>
  <div class="list-item clear-fix" v-if="Object.keys(item).length !== 0">
    <div class="item-left">
      <CheckBox/>
    </div>
    <img class="item-img" :src="item.image" alt="">
    <div class="item-right">
      <p class="item-title">{{item.title}}</p>
      <p class="item-desc">{{item.desc}}</p>
      <div class="count">
        <div class="count-left">￥{{item.price}}</div>
        <div class="count-right">X{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "./CheckBox";

export default {
  name: "CartListItem",
  props: {
    item:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  components: {
    CheckBox
  }
}
</script>

<style scoped>
.list-item{
  padding: 10px 10px;
  border-bottom: 1px solid #333333;
  /*height: 200px;*/
}

.item-left{
  float: left;
  /*background-color: #42b983;*/
  height: 133px;
  line-height: 133px;
  width: 5%;
  margin-right: 10px;
}

.item-img{
  float: left;
  width: 25%;
  margin-right: 15px;
  border-radius: 8px;
}

.item-right{
  /*float: right;*/
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 60%;
}

.item-title,.item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-title{
  font-size: 18px;
}

.item-desc{
  font-size: 14px;
  margin: 30px 0;
}

.count{
  font-size: 18px;
}

.count-left{
  float: left;
  color: orange;
}

.count-right{
  float: right;
}
</style>
