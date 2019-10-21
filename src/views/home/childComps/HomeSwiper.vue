<template>
  <div>
    <swiper v-if="lunbotuList.length">  
      <swiper-item v-for = "item in lunbotuList">
           <img :src="'http://47.106.248.143/app/img/'+item.img_src" alt="" >
      </swiper-item>
    </swiper>   
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    props:{
        lunbotuList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
}
</script>

<style>

</style>