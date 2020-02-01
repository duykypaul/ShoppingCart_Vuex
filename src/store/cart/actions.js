export default {
    handleBuyProduct({commit, state}, data){
        let cartsClone = [...state.cartList];
        let index = cartsClone.findIndex(item => item.product.id === data.product.id);
        if(index !== -1){
            data.quantity += cartsClone[index].quantity;
            cartsClone.splice(index, 1, data);
        } else {
            cartsClone.push(data);
        }
        commit('CHANGE_CART_LIST', cartsClone);
    },
    handleDelete({commit, state},data){
        let cartsClone = state.cartList.filter(item => item.product.id !== data.product.id);
        commit('CHANGE_CART_LIST', cartsClone);
    }
}
