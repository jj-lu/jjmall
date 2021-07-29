<template>
  <div v-if="Object.keys(shop).length != 0" class="shop-info">
    <div class="shop-log">
      <img :src="shop.log" alt="">
      <span class="log-title">{{shop.name}}</span>
    </div>
    <div class="info">
      <div class="info-left">
        <div>
          <h2>{{getSells}}</h2>
          <p>总销量</p>
        </div>
        <div>
          <h2>{{shop.goodsCount}}</h2>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="info-right">
        <table>
          <tr v-for="(item,index) in shop.score" class="info-right-detail" :key="index">
            <td class="right-first">{{item.name}}</td>
            <td class="right-second">{{item.score}}</td>
            <td class="right-thirst" v-show="item.isBetter">高</td>
            <td class="right-thirst" v-show="!item.isBetter">低</td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    getSells(){
      return (this.shop.sells / 10000).toFixed(1) + '万';
    }
  }
}
</script>

<style scoped>
.shop-info{
  margin: 100px 10px;
  /*clear: both;*/
  overflow: hidden;
}

.shop-log{
  height: 80px;
  position: relative;
  line-height: 80px;
}

.shop-log img{
  height: 100%;
}

.log-title{
  position: absolute;
  margin-left: 10px;
  font-size: 16px;
}

.info{
  border: #ff8198 1px solid;
  position: relative;
}
.info-left{
  position: absolute;
  /*display: table-cell;*/
  /*vertical-align: center;*/
  /*float: left;*/
  border-right: #42b983 1px solid;
  text-align: center;
  width: 50%;
  top: 50%;
  transform: translate(0,-50%);
  /*bottom: 0;*/
  /*height: 50px;*/
  /*margin: auto;*/
}

.info-left div{
  /*float: left;*/
  margin: 0 10px;
}

.info-right{
  /*float: right;*/
  position: absolute;
  border: 1px solid #2c3e50;
  width: 50%;
}

</style>
