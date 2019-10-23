<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot/>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'',
  props: {
         probeType:{
            type:Number,
            default:0,
            
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
  },
  data () {
    return {
         scroll:null,
    };
  },
  components: {},
  methods: {
      //重启上拉加载
       finishPullUp(){
           this.scroll.finishPullUp()
       },
      //滑动到顶部
       scrollTo(x,y,time=300) {
           this.scroll && this.scroll.scrollTo(x,y,time)
       }, 
      //刷新页面 重新计算cobtent高度
       refresh(){  
           this.scroll && this.scroll.refresh()
       },
  },
  mounted () {
      // 1.创建对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,//实时监听滑动的距离，2--离开滑动的位置 3--惯性位置
            pullUpLoad:this.pullUpLoad//监听到达底部，便于上拉加载，布尔值
        })
        //监听滚动位置
        if(this.probeType === 2 || this.probeType === 3){
            this.scroll.on("scroll",(position) => {
                // console.log(position);
                this.$emit('scroll',position)
             })
        }
        //监听上拉事件
        if(this.pullUpLoad){
                this.scroll.on("pullingUp",()=>{
                this.$emit('pullingUp') 
            })
        }
  }
}
</script>
<style scoped>
</style>