<template>
  <div class="tab-control">
    <div v-for="(item , index) in tabs"
         :key="index"
         class="tab-control-item"
         :class="{isActive : index === currentIndex}">
      <span  @click="tabClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    tabs:{
      type : [],
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex : 0
    }
  },
  methods : {
    tabClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  height: 40px;
  /*align-content: center;*/
  line-height: 40px;
  /*margin-top: 10px;*/
}

.tab-control-item{
  border-bottom: 1px ;
}

.tab-control-item span{
  padding: 5px;
}

.isActive{
  color: var(--color-high-text);
}

.isActive span{
  border-bottom: 3px solid var(--color-high-text);
}
</style>
