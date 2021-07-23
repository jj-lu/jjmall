<template>
  <div class="goods-list">
    <goods-list-item class="goods-list-item"
                     v-for="(item,index) in goods"
                     :key="index"
                     :goods-list-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components : {
    GoodsListItem
  },
  props : {
    goods : {
      type : [],
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.goods-list-item{
  width: 45%;
}
</style>
