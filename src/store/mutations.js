import { ADD_COUNTER,ADD_TO_CART } from './mutation-types'
export default {
    [ADD_COUNTER](state, payload) {
        // console.log(state.cartList);
        
        payload.count++
        localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },
    [ADD_TO_CART](state, payload) {
        // console.log(state.cartList);
        payload.checked = true 
        state.cartList.push(payload)
        localStorage.setItem('cartList',JSON.stringify(state.cartList))
    }
}