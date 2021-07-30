import {debounce} from "./utils";

export const itemListener = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.scrollRefresh,100);
    this.itemImgListener = ()=>{
      refresh()
    }
    this.$bus.$on('imgLoad',this.itemImgListener)
    console.log('mixin函数');
    console.log(this);
  }
}
