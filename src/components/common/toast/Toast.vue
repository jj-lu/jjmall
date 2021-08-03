<template>
  <div class="fixed" v-if="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message,duration=1000){
      this.message = message;
      this.isShow = true;
      setTimeout(()=>{
        this.isShow = false;
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.fixed{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  padding: 8px 10px;
  z-index: 999;
}
</style>
