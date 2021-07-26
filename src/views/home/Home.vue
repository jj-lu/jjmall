<template>
  <div class="home">
    <nav-bar class="home-nav">
<!--      <template v-slot:center><div>购物街</div></template>-->
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :tabs="['流行','新款','精选']"
                 @toTabClick="tabClick"
                 ref="tabControl2"
                 v-show="isFixed"></tab-control>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contextScroll"
            @pull="loadMore">
      <home-swiper :banners="banners"
                   @swiperImageLoad="swiperLoad"></home-swiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <feature-view></feature-view>
      <tab-control class="tab-control"
                   :tabs="['流行','新款','精选']"
                   @toTabClick="tabClick"
                   ref="tabControl1"></tab-control>
      <goods-list :goods="getGoods"></goods-list>
    </scroll>


    <back-top @click.native="backClick"
              v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import TabControl from "../../components/content/tabcontrol/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backtop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import BaTopImg from '../../assets/img/common/top.png';

import {getHomeMultidata,getHomeGoods} from "../../network/home";

export default {
  name: "Home",
  data(){
    return {
      // data : null,
      banners : [],
      recommends : [],
      goods : {
        'pop' : {page : 0,list : []},
        'new' : {page : 0,list : []},
        'sell' : {page : 0,list : []}
      },
      currentType: 'pop',
      backTopImg: BaTopImg,
      isShowBackTop: false,
      offsetTop: 0,
      isFixed: false,
      saveY: 0
    }
  },
  components:{
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  methods : {
    homeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.data = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }).catch(err => {
        console.log(err);
      })
    },

    // 获取商品数据
    homeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        // console.log(res.data);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      }).catch(err => {
        console.log(err);
      })
    },

    // 子传父，监听toTabControl事件
    tabClick(index){
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      // console.log(this.currentType);
    },

    // 回到首页顶部
    backClick(){
      console.log('click');
      this.$refs.scroll.scrollUp(0,0);
    },

    // 滚动显示BackTop按钮
    contextScroll(position){
      // console.log(position);
      this.isShowBackTop = Math.abs(position.y) > 1000;
      this.isFixed = Math.abs(position.y) > this.offsetTop;
    },

    // 下拉加载
    loadMore(){
      console.log('加载更多');
      this.homeGoods(this.currentType);
      this.$refs.scroll.finishpullup();
    },

    // 监听轮播图加载完成
    swiperLoad(){
      // console.log('swiperload');
      console.log(this.$refs.tabControl1.$el.offsetTop);
      this.offsetTop = this.$refs.tabControl1.$el.offsetTop;
    },

    // 防抖函数
    debounce(func , delay){
      // 初始化一次，所有的函数调用都会判断这里
      let timer = null;
      // console.log(timer + 'let');

      return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          // console.log('func.apply(this,args);');
          func.apply(this,args);
        },delay)
      }
    }
  },
  computed: {
    getGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.homeMultidata();

    this.homeGoods('pop');
    this.homeGoods('sell');
    this.homeGoods('new');

  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = this.debounce(this.$refs.scroll.scrollRefresh,500)
    this.$bus.$on('imgLoad',() => {
      refresh()
    })
  },
  activated() {
    // console.log('activated');
    this.$refs.scroll.scrollRefresh();
    this.$refs.scroll.scrollUp(0,this.saveY,0);
  },
  deactivated() {
    // console.log('deactivated');
    // console.log(this.$refs.scroll.scrollY());
    this.saveY = this.$refs.scroll.scrollY();
  }
}
</script>

<style scoped>

.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;

  /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动使用*/
  /*position: sticky;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 9;*/
}

.tab-control{
  /*position: sticky;*/
  /*top: 44px;*/
  background-color: #ffffff;
  position: relative;
}

/* 第一种确定内容高度的方式*/

/*.home{*/
/*  height: 100vh;*/
/*}*/

/*.content{*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*}*/

/*第二种确定内容区高度的方式（比较好）*/
.home{
  height: 100vh;
  position: relative;
}

.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}

.fix{
  position: fixed;
  top: 44px;
  left: 0px;
  right: 0px;
}
</style>
