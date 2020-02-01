export default {
    handleBuyProduct({commit, state}, data){
        let cartsClone = [...state.cartList];
        let totalQuantityClone = state.totalQuantity;
        let totalPriceClone = state.totalPrice;

        totalQuantityClone += data.quantity;
        totalPriceClone += data.quantity * data.product.price;

        let index = cartsClone.findIndex(item => item.product.id === data.product.id);
        if(index !== -1){
            data.quantity += cartsClone[index].quantity;
            cartsClone.splice(index, 1, data);
        } else {
            cartsClone.push(data);
        }
        let obj = {
            cartList: cartsClone,
            totalQuantity: totalQuantityClone,
            totalPrice: totalPriceClone
        }
        commit('HANDLE_BUY_PRODUCT', obj);
    }
}
