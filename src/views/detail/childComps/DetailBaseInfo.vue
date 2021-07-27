<template>
  <div v-if="Object.keys(goods).length !== 0" class="info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="price-newPrice">{{goods.newPrice}}</span>
      <span class="price-oldPrice">{{goods.oldPrice}}</span>
      <span class="price-discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length - 1].name}}</div>
    </div>
    <div class="info-services">
      <div v-if="goods" v-for="index in (goods.services.length - 1)" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
.info{
  padding: 0 10px;
  margin: 15px auto;
  color: var(--color-text);
}

.info-title{
  font-size: 20px;
  font-weight: bold;
  margin: 15px auto;

}

.info-other{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e9e9;
  margin: 25px auto;
}

.info-price{
  position: relative;
}

.price-newPrice{
  color: var(--color-tint);
  font-size: 30px;
  margin-right: 5px;
}

.price-oldPrice{
  font-size: 14px;
  margin-right: 5px;
  text-decoration: line-through;
}

.price-discount{
  position: absolute;
  top: 0px;
  /*display: block;*/
  background-color: var(--color-tint);
  color: #ffffff;
  font-size: 14px;
  border-radius: 10px;
  padding: 3px;
  /*margin-top: -10px;*/
}

.info-services{
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.info-services img{
  width: 10px;
  height: 10px;
  vertical-align: center;
}
</style>
