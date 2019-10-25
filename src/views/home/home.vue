<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

      <tab-control :titles="['流行','新款','精选']" 
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control"
        v-show="isTabFixed"
      />    

      <scroll class="content" ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
      >
        <home-swiper :lunbotuList = "lunbotuList" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recomment-view :recommends="recommends"></recomment-view>
        <feature-view/>
        <tab-control 
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommentView from './childComps/RecommendView'
import FeatureView from './childComps/Feature'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils.js'
export default {
    data () {
        return {
            lunbotuList:[],
            recommends:[
              {title:"数电实验"},
              {title:"数电实验"},
              {title:"数电实验"},
              {title:"数电实验"}
            ],
            goods:{
              "数电实验":{list:[]},
              "EDA实验":{list:[]},
              "信号分析":{list:[]}
            },
            currentType:"数电实验",
            isShowBackTop:false,
            isTabFixed:false,
            tabOffsetTop:0,
            saveY:0
        }
    },
    computed: {
      showGoods(){
         return this.goods[this.currentType].list
      }
    },
    components: {
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop,

        HomeSwiper,
        RecommentView,
        FeatureView
    },
    created () {
        //1.请求轮播图数据
        this.getHomeMultidata()
        this.getHomeGoods("数电实验")
        this.getHomeGoods("EDA实验")
        this.getHomeGoods("信号分析")  
    },
    destroyed() {
    },
    mounted () {
      //抽到混入中
      // console.log(this.$refs.scroll);
      //   const refresh = debounce(this.$refs.scroll.refresh,500)
      //   this.itemImgListener = () => {
      //       // this.$refs.scroll.refresh
      //       refresh()
           
      //   }
      //   this.$bus.$on('itemImageLoad',this.itemImgListener)
      //   console.log(this.$refs.tabControl2.$el.offsetTop);
    },
      //记录路由的活跃状态
    activated () {
      console.log('活跃');
      console.log(this.saveY);
      console.log(this.$refs.scroll);
      
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated () {
       console.log('不活跃');
      //1.保存滑动距离
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY);
      
      //2.离开home页面取消bus监听事件
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods: {
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.currentType = "数电实验"
            break
          case 1:
            this.currentType = "EDA实验"
            break
          case 2:
            this.currentType = "信号分析"
            break   
        
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index 
        
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      //滑动不好下滑，图片问题
      // this.$refs.scroll.scrollRefresh()
      },
      backTop(){  
        // console.log(this.$refs.scroll.message);
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        // console.log(position);
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 250 ;
        //2.局等tabControl是否吸顶（position：fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop ;
      },
      swiperImageLoad(){
        //防止轮播图影响
        this.$refs.scroll.refresh()
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
   
        // console.log(this.$refs.tabControl2.$el.offsetTop);
      },
    /**
     * 网络请求
     * 
    */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res);
          var arr = JSON.parse(res);
          this.lunbotuList = arr;
          console.log(this.lunbotuList)
        })
      },
      getHomeGoods(type){
        getHomeGoods(type).then(res =>{
          // push数组的方法--es6
          this.goods[type].list.push(...JSON.parse(res));  
          // 获取完数据重新启动上拉加载
          this.$refs.scroll.finishPullUp()
        })
      }
    }  
}
</script>

<style scoped>
#home {
   /* padding-bottom: 50px; */
   /* padding-top: 44px; */
   /* vh属性--可视化界面大小 */
   height: 100vh;
   position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;

  /* position: fixed;
  left: 0;
  right: 0; 
  top: 0; 
  z-index: 9; */
 
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0
}

.tab-control{
  position: relative;
  z-index: 9
}
</style>