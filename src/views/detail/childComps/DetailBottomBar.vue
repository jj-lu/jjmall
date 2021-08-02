<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <div>
        <i class="icon service"></i>
        <div>客服</div>
      </div>
      <div>
        <i class="icon shop"></i>
        <div>店铺</div>
      </div>
      <div>
        <i class="icon"></i>
        收藏
      </div>
    </div>
    <div class="bottom-right">
      <div class="right-cart" @click="addCart">加入购物车</div>
      <div class="right-buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  /*line-height: 50px;*/
  background-color: #ffffff;
  text-align: center;
}

.bottom-left{
  width: 50%;
  float: left;
}

.bottom-left>div{
  float: left;
  width: 33%;
  font-size: 13px;
}

.icon{
  display: block;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  margin: 10px auto 3px;
  width: 22px;
  height: 22px;
}

.icon.service{
  background-position: 0 -54px;
}

.icon.shop{
  background-position: 0 -98px;
}

.bottom-right{
  width: 50%;
  float: right;
  line-height: 50px;
}

.right-buy{
  float: left;
  width: 50%;
  background-color: #ff8198;
  color: #ffffff;
}

.right-cart{
  float: left;
  width: 50%;
  background-color: yellow;
}
</style>
