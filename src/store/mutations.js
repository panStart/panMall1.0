export default {
    addCart(state, payload) {
        let flag = false
        state.cartList.some(item => {
            if(item.iid == payload.iid){
                item.count += 1
                flag = true
                return true
            }
        })
        if(!flag){
            payload.count = 1
            state.cartList.push(payload)
        }
    }
}