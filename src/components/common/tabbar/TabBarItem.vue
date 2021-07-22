<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else="isActive"><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
<!--    <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      // isActive : true
    }
  },
  computed : {
    activeStyle(){
      return this.isActive ? {color : this.activeColor} : {}
    },
    isActive(){
      return this.$route.path == this.path
    }
  },
  methods:{
    itemClick(){
      // console.log('点击事件');
      // console.log(this.path);
      // console.log(this.$router);
      this.$router.push(this.path);
    }
  },
  props : {
    path : String,
    activeColor : {
      type : String,
      default : 'red'
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  /*line-height: 49px;*/
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}

/*.active{*/
/*  color: red;*/
/*}*/
</style>
