<template>
  <div class="back-top">
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
import BackTopImg from '@/assets/img/common/top.png';

export default {
  name: "BackTop",
  props: {
    imgSrc: {
      type: String,
      default: BackTopImg
    }
  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 5%;
  bottom: 7%;
}

.back-top img{
  width: 43px;
  height: 43px;
}
</style>
