export default {
    HANDLE_BUY_PRODUCT(state, obj){
        state.cartList = obj.cartList;
    },
    HANDLE_DELETE(state, cartsClone){
        state.cartList = cartsClone;
    }
}
