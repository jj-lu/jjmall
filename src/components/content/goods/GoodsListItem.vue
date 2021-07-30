<template>
  <div class="goods" @click="toDetail">
    <img :src="getImg" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsListItem.title}}</p>
      <span class="price">{{goodsListItem.price}}</span>
<!--      <img src="@/assets/img/common/collect.svg" width="14px" height="14px" alt="">-->
      <span class="collect">{{goodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgLoad');
    },
    toDetail(){
      console.log('toDetail');
      this.$router.push({
        path:'/detail',
        query:{
          iid: this.goodsListItem.iid
        }
      })
    }
  },
  computed: {
    getImg(){
      if (this.goodsListItem.show) return this.goodsListItem.show.img;
      else if (this.goodsListItem.image) return this.goodsListItem.image;
      else return ''
    }
  }
}
</script>

<style scoped>
.goods{
  font-size: 12px;
  padding: 5px 0px;
}

.goods img{
  width: 100%;
  border-radius: 5px;
}

.goods .goods-info{
  text-align: center;
}

.goods p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px 0px;
}

.goods .price{
  margin-right: 20px;
  color: var(--color-tint);
}

.goods .collect{
  position: relative;
}

.goods .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: 0px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  width: 14px;
  height: 14px;
  z-index: 0;
}


</style>
