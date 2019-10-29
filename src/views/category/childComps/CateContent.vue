<template>
    <div class="cate-content">
        <scroll class="content-left">
        <cate-content-left  :goodLists="goodLists" @tabClick="tabClick"></cate-content-left>
        </scroll>
        <scroll  class="content-right">
        <cate-content-right :showGoods="showGoods" :navName="currentType"></cate-content-right> 
        </scroll>
    </div>
</template>
<script>
import CateContentLeft from './CateContentLeft'
import CateContentRight from './CateContentRight'

import {getCateGoods} from 'network/CateContent'

import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'',
  data () {
    return {
      goodLists:["数电实验","EDA实验","信号分析"
                ,"数电实验","EDA实验","信号分析"
                ,"数电实验","EDA实验","信号分析",
                "数电实验","EDA实验","信号分析"],
      goods:{
              "数电实验":{list:[]},
              "EDA实验":{list:[]},
              "信号分析":{list:[]}
            },
      currentType:"数电实验",  
    };
  },
  props:{
      
  },
  computed: {
      showGoods(){
         return this.goods[this.currentType].list
      }
  },
  created() {
      this.getCateGoods("数电实验")
      this.getCateGoods("EDA实验")
      this.getCateGoods("信号分析")
  },
  components: {
      CateContentLeft,
      CateContentRight,
      Scroll
  },
  methods: {
      tabClick(index){
          switch(index){
          case 0:
              case 3:
                  case 6:
                      case 9:
            this.currentType = "数电实验"
            break
          case 1:
              case 4:
                  case 7:
                      case 10:
            this.currentType = "EDA实验"
            break
          case 2:
              case 5:
                  case 8:
                      case 11:
            this.currentType = "信号分析"
            break   
        
        }
      },
      /**
       * 网络请求
       */
      getCateGoods(type){
        getCateGoods(type).then(res =>{
          // push数组的方法--es6
          console.log(JSON.parse(res));
          
          this.goods[type].list.push(...JSON.parse(res));  
          // 获取完数据重新启动上拉加载
        //   this.$refs.scroll.finishPullUp()
        })
      }
  }
}
</script>
<style scoped>
.cate-content {
  display: flex;
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0
}
.content-left{
  flex:2;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  
}
.content-right{
  flex: 8;
  padding: 2px;
}
</style>