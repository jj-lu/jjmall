<template>
  <div id="detail">

    <detail-nav-bar class="nar-bar"
                    @narClick="narBarClick"
                    ref="nav">
    </detail-nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="scrollTo">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <!--    <detail-shop-info :shop="shop"></detail-shop-info>-->
      <detail-shop-info2 :shop="shop"></detail-shop-info2>
      <detail-goods-info2 :detail-info="detailInfo"
                          @shopImgLoad="shopImgLoad">
      </detail-goods-info2>
      <detail-param-info2 :param-info="paramInfo"
                          ref="param">
      </detail-param-info2>
      <detail-comment-info :comment-info="commentInfo"
                           ref="comment"/>
      <goods-list :goods="recommends"
                  ref="recommend">
      </goods-list>
    </scroll>

    <detail-bottom-bar @addCart="addToCart"/>

    <back-top @click.native="backClick"
              v-show="isShowBackTop"></back-top>

<!--    <toast :message="message" :show="show"/>-->
  </div>
</template>

<script>

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailShopInfo2 from "./childComps/DetailShopInfo2";
import DetailGoodsInfo2 from "./childComps/DetailGoodsInfo2";
import DetailParamInfo2 from "./childComps/DetailParamInfo2";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "../../components/common/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";
// import Toast from "../../components/common/toast/Toast";

import {getDetail,getRecommends,Goods,Shop,GoodsParam} from 'network/detail';
import {itemListener,backTopMixin} from "../../common/mixin";
import {debounce} from "../../common/utils";
import {mapActions} from 'vuex'

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
      getOffsetY: ()=>{},
      recommends: [],
      commentInfo: {},
      saveOffsetYs: [],
      currentIndex: 0,
      // message: '',
      // show: false
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailShopInfo2,
    DetailGoodsInfo2,
    DetailParamInfo2,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast
  },
  methods: {
    ...mapActions(['addCart']),

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

          // this.$nextTick(()=>{
          //   this.saveOffsetYs = []
          //
          //   this.saveOffsetYs.push(0)
          //   this.saveOffsetYs.push(this.$refs.param.$el.offsetTop)
          //   this.saveOffsetYs.push(this.$refs.comment.$el.offsetTop)
          //   this.saveOffsetYs.push(this.$refs.recommend.$el.offsetTop)
          //
          //   console.log(this.saveOffsetYs);
          // })
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
      this.getOffsetY();
    },
    narBarClick(index){
      // console.log(index);
      this.$refs.scroll.scrollUp(0,-this.saveOffsetYs[index],500);
    },
    scrollTo(position){
      // console.log(position.y);
      let positionY = Math.abs(position.y);
      for (let i = 0; i < this.saveOffsetYs.length - 1; i++) {
        if (this.currentIndex != i && (positionY >= this.saveOffsetYs[i] && positionY < this.saveOffsetYs[i+1])){
          this.currentIndex = i;
          // console.log(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = positionY > 1000;
    },
    addToCart(){
      let product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.iid = this.iid;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;

      // this.$store.dispatch('addCart',product).then();
      this.addCart(product).then(res => {
        // this.show =true;
        // this.message = res;
        // setTimeout(()=>{
        //   this.show = false;
        // },1000)
        console.log(res);
        // console.log(this.$toast)
        this.$toast.show(res);
      })
    }
  },
  mixins: [itemListener,backTopMixin],
  created() {
    // console.log(this.$route.query.iid);
    this.getDetailData();
    this.getRecommendsData();

    // 获取各组件offset的防抖函数
    this.getOffsetY = debounce(()=>{
      this.saveOffsetYs = []

      this.saveOffsetYs.push(0)
      this.saveOffsetYs.push(this.$refs.param.$el.offsetTop)
      this.saveOffsetYs.push(this.$refs.comment.$el.offsetTop)
      this.saveOffsetYs.push(this.$refs.recommend.$el.offsetTop)
      this.saveOffsetYs.push(Number.MAX_VALUE)

      // console.log(this.saveOffsetYs);
    },300)

  },
  mounted() {
    this.saveOffsetYs = []

    // 图片加载刷新的防抖函数
    this.imgDebounce = debounce(this.$refs.scroll.scrollRefresh,300);
    // 0, undefined, undefined, 498
    // 子组件的跟组件$el因为还没有传值进去，所以没开始渲染，还是为undefined
    // this.saveOffsetYs.push(0)
    // this.saveOffsetYs.push(this.$refs.param.$el.offsetTop)
    // this.saveOffsetYs.push(this.$refs.comment.$el.offsetTop)
    // this.saveOffsetYs.push(this.$refs.recommend.$el.offsetTop)
    //
    // console.log(this.saveOffsetYs);
  },
  updated() {
    // this.saveOffsetYs = []
    //
    // this.saveOffsetYs.push(0)
    // this.saveOffsetYs.push(this.$refs.param.$el.offsetTop)
    // this.saveOffsetYs.push(this.$refs.comment.$el.offsetTop)
    // this.saveOffsetYs.push(this.$refs.recommend.$el.offsetTop)
    //
    // console.log(this.saveOffsetYs);
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
    height: calc(100% - 94px);
  }
</style>
