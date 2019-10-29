import { ADD_COUNTER,ADD_TO_CART } from './mutation-types'

export default {
    addCart(context,payload) {
        console.log(payload)
        let flag = false
        context.state.cartList.some(item => {
            if(item.iid == payload.iid){
                context.commit(ADD_COUNTER, item)
                flag = true
                return true
            }
        })

        if(!flag){
            payload.count = 1
            context.commit(ADD_TO_CART, payload)
        }
    }    
}