<template>
  <div id="detail">
    <detail-nar-bar class="nar-bar"></detail-nar-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <!--    <detail-shop-info :shop="shop"></detail-shop-info>-->
      <detail-shop-info2 :shop="shop"></detail-shop-info2>
      <detail-goods-info2 :detail-info="detailInfo"
                          @shopImgLoad="shopImgLoad">

      </detail-goods-info2>
      <detail-param-info2 :param-info="paramInfo">

      </detail-param-info2>
    </scroll>
  </div>
</template>

<script>

import DetailNarBar from "./childComps/DetailNarBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailShopInfo2 from "./childComps/DetailShopInfo2";
import DetailGoodsInfo2 from "./childComps/DetailGoodsInfo2";
import DetailParamInfo2 from "./childComps/DetailParamInfo2";

import Scroll from "../../components/common/scroll/Scroll";

import {getDetail,Goods,Shop,GoodsParam} from 'network/detail';

export default {
  name: "Detail",
  data(){
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      imgDebounce : ()=>{}
    }
  },
  components: {
    DetailNarBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailShopInfo2,
    DetailGoodsInfo2,
    DetailParamInfo2,
    Scroll,

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
          this.shop = new Shop(data.shopInfo);
          this.detailInfo = data.detailInfo;
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule,);
        })
    },
    shopImgLoad(){
      console.log('shopImgLoad');
      this.imgDebounce();
    },
    debounce(func,delay){
      let timer = null;
      return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=>{
          func.apply(this,args);
        },delay)
      }
    }
  },
  created() {
    // console.log(this.$route.query.iid);
    this.getDetailData();
  },
  mounted() {
    this.imgDebounce = this.debounce(this.$refs.scroll.scrollRefresh,500);
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 99;
    height: 100vh;
    background-color: #ffffff;
  }

  .nar-bar{
    position: relative;
    z-index: 99;
    background-color: #ffffff;
  }

  .content{
    height: calc(100% - 44px);
  }
</style>
