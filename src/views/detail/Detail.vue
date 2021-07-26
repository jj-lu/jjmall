<template>
  <div id="detail">
    <detail-nar-bar></detail-nar-bar>
  </div>
</template>

<script>

import DetailNarBar from "./childComps/DetailNarBar";

export default {
  name: "Detail",
  data(){
    return {
      iid: null
    }
  },
  components: {
    DetailNarBar
  },
  created() {
    console.log(this.$route.query.iid);
    this.iid = this.$route.query.iid;
  }
}
</script>

<style scoped>

</style>
