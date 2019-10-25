<template>
  <div>
    <swiper v-if="lunbotuList.length">  
      <swiper-item v-for = "(item,index) in lunbotuList" :key="index">
           <img :src="'http://47.106.248.143/app/img/'+item.img_src" alt="" @load="imageLoad">
      </swiper-item>
    </swiper>   
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    data(){
      return {
        isLoad:false
      }
    },
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
    methods:{
      imageLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
}
</script>

<style>

</style>