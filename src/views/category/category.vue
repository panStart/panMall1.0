<template>
  <div class="category">
      <nav-bar class="nav-bar">
          <div slot="center">商品分类</div>
      </nav-bar>
      <cate-content></cate-content>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CateContent from './childComps/CateContent'
export default {
  name:'',
  data () {
    return {
          
    };
  },
  components: {
    NavBar,
    CateContent
  },
  methods: {}
}
</script>
<style scoped>
.category{
  height: 100vh;
  position: relative;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

</style>