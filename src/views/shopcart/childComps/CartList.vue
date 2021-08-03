<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
                      :key="index"
                      :item="item"/>
    </Scroll>
  </div>
</template>

<script>

import Scroll from "../../../components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

import {mapGetters} from 'vuex'

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.scrollRefresh()
  }
}
</script>

<style scoped>
.cart-list{
  height: calc(100vh - 133px);
  /*position: relative;*/
  /*height: 100vh;*/
}

.content{
  /*position: absolute;*/
  /*bottom: 49px;*/
  /*top: 0px;*/
  /*left: 0;*/
  /*right: 0;*/
  height: 100%;
  overflow: hidden;
  /*background-color: #666666;*/
}
</style>
