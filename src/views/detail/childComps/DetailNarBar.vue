<template>
  <div>
    <nav-bar>
      <div slot="left"
           class="nar-bar-left"
           @click="narBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>

      <div slot="center" class="nar-nar-center">
        <div class="nar-item"
             :class="{'active': index == currentIndex}"
             v-for="(item,index) in titles"
             :key="index"
             @click="itemClick(index)">
          {{item}}
        </div>
      </div>

    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "DetailNarBar",
  data(){
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
    },
    narBack(){
      this.$router.go(-1)
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.nar-bar-left img{
  vertical-align: middle;
}

.nar-nar-center{
  display: flex;
  font-size: 13px;
}

.nar-nar-center .nar-item{
  flex: 1;
}

.active{
  color: var(--color-high-text);
}
</style>
