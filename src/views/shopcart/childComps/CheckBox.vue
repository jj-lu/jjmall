<template>
  <div>
    <img class="check-box" :class="{active : isActive}" src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.check-box{
  border-radius: 50%;
  border: 2px solid #aaa;
}

.active{
  background-color: red;
  border-color: red;
}
</style>
