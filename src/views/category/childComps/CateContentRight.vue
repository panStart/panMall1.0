<template>
  <div>
     <div class="content-right-nav">{{navName}}</div>
     <div class="content-right-content">
         <goods-list :goods="showGoods"  class="right-good-list"/>
     </div>
  </div>
</template>
<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name:'',
  data () {
    return {
    };
  },
  props:{
      showGoods:{
          type:Array,
          default(){
              return []
          }
      },
      navName:{
          type:String,
          default(){
              return ''
          }
      }
  },
  components: {
      GoodsList
  },
  methods: {}
}
</script>
<style scoped>


.content-right-nav {
    width: 97%;
    height:35px;
    text-align: center;
    line-height: 35px;
    border-radius:1em 1em 0 0;
    background-color: crimson;
    border: solid 1px #ccc;
    margin:0 auto;
    margin-bottom: 5px;
    color:#ffffff;
    font-size: 14px;
    
}
.right-good-list{

}
.content-right-content{
  
}
</style>