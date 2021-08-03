<template>
  <div class="bottom-bar">
<!--     <div class="check-box">-->

<!--     </div>-->
    <check-box class="box" :is-check="isCheckAll" @click.native="CheckAll"/>全选
    <div class="count">合计：{{totalPrice}}</div>
    <div class="toCount">去计算（{{checkCount}}）</div>
  </div>
</template>

<script>
import CheckBox from "./CheckBox";
import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckBox
  },
  methods: {
    CheckAll(){
      if (this.isCheckAll) this.cartList.forEach(item => item.isCheck = false)
      else this.cartList.forEach(item => item.isCheck = true)
    }
  },
  computed: {
    ...mapGetters(['cartLength','cartList']),

    totalPrice(){
      return this.cartList.filter(item => {if (item.isCheck) return item}).reduce((previousValue, currentValue) => {
        return currentValue.price * currentValue.count + previousValue
      },0).toFixed(2)
    },

    checkCount(){
      return this.cartList.filter(item => {if (item.isCheck) return item}).reduce((previousValue, currentValue) => {
        return previousValue + currentValue.count
      },0)
    },

    isCheckAll(){
      if (this.cartList.length == 0){
        return false;
      }
      return !this.cartList.find(item => !item.isCheck);
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  position: relative;
  /*bottom: 49px;*/
  background-color: #e9e9e9;
  height: 40px;
  display: flex;
  align-items: center;
  /*padding: 0 10px;*/
  font-size: 14px;
  /*line-height: 40px;*/
}

.box{
  margin: 0 10px;
}

.count{
  flex: 1;
  text-align: center;
}

.toCount{
  width: 100px;
  background-color: #f13e3a;
  text-align: center;
  color: #ffffff;
  height: 100%;
  line-height: 40px;
  /*vertical-align: center;*/
}
</style>
