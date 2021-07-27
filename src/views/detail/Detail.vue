<template>
  <div id="detail">
    <detail-nar-bar></detail-nar-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>

import DetailNarBar from "./childComps/DetailNarBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import {getDetail,Goods} from 'network/detail';

export default {
  name: "Detail",
  data(){
    return {
      iid: null,
      topImages: [],
      goods: {}
    }
  },
  components: {
    DetailNarBar,
    DetailSwiper,
    DetailBaseInfo
  },
  methods: {
    getDetailData(){
      this.iid = this.$route.query.iid;
      getDetail(this.iid)
        .then(res => {
          console.log(res);
          const data = res.result
          // console.log(res.result.itemInfo.topImages);
          this.topImages = data.itemInfo.topImages;
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        })
    }
  },
  created() {
    console.log(this.$route.query.iid);
    this.getDetailData();
  }
}
</script>

<style scoped>

</style>
