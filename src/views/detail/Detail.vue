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
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends"></goods-list>
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
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "../../components/common/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";

import {getDetail,getRecommends,Goods,Shop,GoodsParam} from 'network/detail';
import {debounce,formatDate} from "../../common/utils";
import {itemListener} from "../../common/mixin";

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
      imgDebounce : ()=>{},
      recommends: [],
      commentInfo: {}
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
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  methods: {
    getDetailData(){
      this.iid = this.$route.query.iid;
      getDetail(this.iid)
        .then(res => {
          // console.log(res);
          const data = res.result
          // console.log(res.result.itemInfo.topImages);
          this.topImages = data.itemInfo.topImages;
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
          this.shop = new Shop(data.shopInfo);
          this.detailInfo = data.detailInfo;
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule,);
          if (data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
          }
        })
    },
    getRecommendsData(){
      getRecommends()
        .then(res=>{
        console.log(res.data);
        this.recommends = res.data.list;
      })
    },
    shopImgLoad(){
      // console.log('shopImgLoad');
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
  mixins: [itemListener],
  created() {
    // console.log(this.$route.query.iid);
    this.getDetailData();
    this.getRecommendsData();
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
