<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :lunbotuList = "lunbotuList"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata} from 'network/home'
export default {
    data () {
        return {
            lunbotuList:[],
        }
    },
    components: {
        NavBar,

        HomeSwiper
    },
    created () {
        //1.请求轮播图数据
        this.getHomeMultidata()
    },
    methods: {
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
    }
}
</script>

<style scoped>
    #home {
   /* padding-bottom: 50px; */
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
</style>