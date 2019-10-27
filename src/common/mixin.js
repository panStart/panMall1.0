import {debounce} from './utils.js'
import BackTop from 'components/content/backTop/BackTop'
import {BACKTOP_DISTANCE} from './const.js'
export const  itemListenerMixin = {
    data() {
        return{
            itemImgListener:null
        }
    },
    mounted () {
        // console.log(this.$refs.scroll);
        const refresh = debounce(this.$refs.scroll.refresh,500)
        this.itemImgListener = () => {
            // this.$refs.scroll.refresh
            refresh()
           
        }
        this.$bus.$on('itemImageLoad',this.itemImgListener)
        // console.log(this.$refs.tabControl2.$el.offsetTop);
        console.log("我是混入的内容");
        
    },

}

export const backTopMIXin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowBackTop:false,
        }
    },
    methods: {
        backTop(){  
            // console.log(this.$refs.scroll.message);
            this.$refs.scroll.scrollTo(0,0)
        },
        listenSHopBackTop(position){
            this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE ;
        }

    }
}