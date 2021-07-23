<template>
  <div class="recommed">
    <div v-for="(item , index) in recommends" class="recommend-item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends : {
      type : [],
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommed{
  display: flex;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}

.recommend-item{
  flex: 1;
}

.recommend-item img{
  width: 90%;
}
</style>
