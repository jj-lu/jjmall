<template>
  <div class="shopcart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

<!--    <div class="cart-list">-->
<!--      <Scroll class="content" ref="scroll">-->
<!--        <div class="text2"></div>-->
<!--      </Scroll>-->
<!--    </div>-->

    <cart-list/>
<!--    <div class="text"></div>-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import Scroll from "../../components/common/scroll/Scroll";
import {mapGetters} from 'vuex'

export default {
  name: "Shopcart",
  components: {
    CartList,
    NavBar,
    CartBottomBar,
    Scroll
  },
  computed: {
    ...mapGetters(['cartLength','cartList'])
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: 700;
}

.text{
  height: 60px;
  width: 100%;
  background-color: #42b983;
}

/*.text2{*/
/*  height: 2000px;*/
/*  width: 100%;*/
/*  background-color: #ff8198;*/
/*}*/

/*.cart-list{*/
/*  height: calc(100vh - 193px);*/
/*  position: relative;*/
/*}*/

/*.content{*/
/*  position: absolute;*/
/*  bottom: 0px;*/
/*  top: 0px;*/
/*  left: 0;*/
/*  right: 0;*/
/*  !*height: calc(100% - 93px -40px);*!*/
/*  overflow: hidden;*/
/*  background-color: #666666;*/
/*}*/

</style>
