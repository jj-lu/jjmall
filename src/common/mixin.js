import {debounce} from "./utils";
import BackTop from "../components/content/backtop/BackTop";

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
    // console.log('mixin函数');
    // console.log(this);
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data(){
    return{
      isShowBackTop: false
    }
  },
  methods: {
    backClick(){
      console.log('click');
      this.$refs.scroll.scrollUp(0,0,300);
    },
  }
}
