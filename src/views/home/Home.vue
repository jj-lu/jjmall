<template>
  <div>
    <nav-bar class="home-nav">
<!--      <template v-slot:center><div>购物街</div></template>-->
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";

import {getHomeMultidata} from "../../network/home";

export default {
  name: "Home",
  data(){
    return {
      // data : null,
      banners : [],
      recommends : []
    }
  },
  components:{
    NavBar,
    HomeSwiper
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      // this.data = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
