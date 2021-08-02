<template>
  <div class="cartlist">
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
.cartlist{
  height: 100vh;
}

.content{
  height: calc(100% - 94px);
  overflow: hidden;
}
</style>
