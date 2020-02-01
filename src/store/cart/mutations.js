export default {
    HANDLE_BUY_PRODUCT(state, obj){
        state.cartList = obj.cartList;
        state.totalPrice = obj.totalPrice;
        state.totalQuantity = obj.totalQuantity;
        console.log(state.totalPrice);
        console.log(state.totalQuantity);
    }
}
