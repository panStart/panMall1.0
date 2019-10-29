<template>
  <div >
       <ul>
            <li v-for="(item,index) in goodLists" 
            :key="index" 
            @click="tabClick(index)"
            :class="{active: index == currentIndex}">
                {{item}}
            </li>
        </ul>
  </div>
</template>
<script>

export default {
  name:'',
  data () {
    return {
        currentIndex:0
    };
  },
  props:{
      goodLists:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {},
  methods: {
      tabClick(index) {
          this.currentIndex = index
          this.$emit("tabClick",index)
      }
  }
}
</script>
<style scoped>

ul>li {
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
}
.active {
    background-color:crimson;
    color:#ffffff 
}
</style>