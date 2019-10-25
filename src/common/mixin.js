import {debounce} from './utils.js'
import BackTop from 'components/content/backTop/BackTop'

export const  itemListenerMixin = {
    data() {
        return{
            itemImgListener:null
        }
    },
    mounted () {
        console.log(this.$refs.scroll);
        const refresh = debounce(this.$refs.scroll.refresh,500)
        this.itemImgListener = () => {
            // this.$refs.scroll.refresh
            refresh()
           
        }
        this.$bus.$on('itemImageLoad',this.itemImgListener)
        console.log(this.$refs.tabControl2.$el.offsetTop);
    },

}