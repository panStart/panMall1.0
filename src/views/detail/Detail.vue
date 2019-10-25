<template>
  <div id="Detail">
     <detail-nav-bar class="detail-nav" /> 
     <scroll class="content" ref="scroll"
      :probe-type="3" 
      
    > 
      <detail-swiper :detailList="detailList" /> 
      <detail-base-info :goods="goods"/>
      <detail-shop-info />
      <detail-goods-info :detailInfo="detailInfo"  />
      <detail-param-info ref="params"/>
      <detail-comment-info ref="comment"/>
      <goods-list :goods="recommends" ref="recommends"/>
             
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
          <li>51</li>
          <li>52</li>
          <li>53</li>
          <li>54</li>
          <li>55</li>
          <li>56</li>
          <li>57</li>
          <li>58</li>
          <li>59</li>
          <li>60</li>
          <li>61</li>
          <li>62</li>
          <li>63</li>
          <li>64</li>
          <li>65</li>
          <li>66</li>
          <li>67</li>
          <li>68</li>
          <li>69</li>
          <li>70</li>
          <li>71</li>
          <li>72</li>
          <li>73</li>
          <li>74</li>
          <li>75</li>
          <li>76</li>
          <li>77</li>
          <li>78</li>
          <li>79</li>
          <li>80</li>
        </ul>
        
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

import {getDetail,getDetailGoods,Goods} from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name:'Detail',
  data () {
    return {
      flag:null,
      detailList:[],
      goods:{},
      detailInfo:[],
      recommends:[]
    };
  },
  components: {
     DetailNavBar,
     DetailSwiper,
     DetailBaseInfo,
     DetailShopInfo,
     DetailGoodsInfo,
     DetailParamInfo,
     DetailCommentInfo,
     GoodsList,

     Scroll
  },
  created() {
    this.getDetailSwiperdata()
    this.flag = this.$route.params.flag
    this.getDetailGoods(this.flag)
  },
  methods: {
   getDetailSwiperdata(){
      getDetail().then(res => {
        // console.log(res);
        var arr = JSON.parse(res);
        this.detailList = arr;
        this.detailInfo = arr;
        this.recommends = arr;
        // console.log(this.detailList)
      })
    },
    getDetailGoods(type){
      getDetailGoods(type).then(res => {
        var arr = JSON.parse(res);
        this.goods = new Goods(arr) 
        // console.log(this.goods);
        
      })
    },
  }
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  /* position: relative; */
  /* z-index: 9; */
  background-color: #fff;
}
/* .content{
  overflow: hidden;
  height: calc(100% - 44px);
} */
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0
} 
</style>