<template>
  <div>
    <nav-bar class="home-nav">
<!--      <template v-slot:center><div>购物街</div></template>-->
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <RecommendView :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :tabs="['流行','新款','精选']"/>
    <goods-list :goods="goods.pop.list"/>
    <ul>
      <li>占位1</li>
      <li>占位2</li>
      <li>占位3</li>
      <li>占位4</li>
      <li>占位5</li>
      <li>占位6</li>
      <li>占位7</li>
      <li>占位8</li>
      <li>占位9</li>
      <li>占位10</li>
      <li>占位11</li>
      <li>占位12</li>
      <li>占位13</li>
      <li>占位14</li>
      <li>占位15</li>
      <li>占位16</li>
      <li>占位17</li>
      <li>占位18</li>
      <li>占位19</li>
      <li>占位20</li>
      <li>占位21</li>
      <li>占位22</li>
      <li>占位23</li>
      <li>占位24</li>
      <li>占位25</li>
      <li>占位26</li>
      <li>占位27</li>
      <li>占位28</li>
      <li>占位29</li>
      <li>占位30</li>
      <li>占位31</li>
      <li>占位32</li>
      <li>占位33</li>
      <li>占位34</li>
      <li>占位35</li>
      <li>占位36</li>
      <li>占位37</li>
      <li>占位38</li>
      <li>占位39</li>
      <li>占位40</li>
      <li>占位41</li>
      <li>占位42</li>
      <li>占位43</li>
      <li>占位44</li>
      <li>占位45</li>
      <li>占位46</li>
      <li>占位47</li>
      <li>占位48</li>
      <li>占位49</li>
      <li>占位50</li>
      <li>占位51</li>
      <li>占位52</li>
      <li>占位53</li>
      <li>占位54</li>
      <li>占位55</li>
      <li>占位56</li>
      <li>占位57</li>
      <li>占位58</li>
      <li>占位59</li>
      <li>占位60</li>
      <li>占位61</li>
      <li>占位62</li>
      <li>占位63</li>
      <li>占位64</li>
      <li>占位65</li>
      <li>占位66</li>
      <li>占位67</li>
      <li>占位68</li>
      <li>占位69</li>
      <li>占位70</li>
      <li>占位71</li>
      <li>占位72</li>
      <li>占位73</li>
      <li>占位74</li>
      <li>占位75</li>
      <li>占位76</li>
      <li>占位77</li>
      <li>占位78</li>
      <li>占位79</li>
      <li>占位80</li>
      <li>占位81</li>
      <li>占位82</li>
      <li>占位83</li>
      <li>占位84</li>
      <li>占位85</li>
      <li>占位86</li>
      <li>占位87</li>
      <li>占位88</li>
      <li>占位89</li>
      <li>占位90</li>
      <li>占位91</li>
      <li>占位92</li>
      <li>占位93</li>
      <li>占位94</li>
      <li>占位95</li>
      <li>占位96</li>
      <li>占位97</li>
      <li>占位98</li>
      <li>占位99</li>
      <li>占位100</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabcontrol/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

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
      }
    }
  },
  components:{
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  methods : {
    homeMultidata(){
      getHomeMultidata().then(res => {
        console.log(res);
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
        console.log(res.data);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.homeMultidata();

    this.homeGoods('pop');
    this.homeGoods('sell');
    this.homeGoods('new');
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.tab-control{
  position: sticky;
  top: 44px;
  background-color: #ffffff;
}
</style>
