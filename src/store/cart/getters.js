export default {
    tFootInfo: state => {
        const {cartList} = state;
        let initObj = {
            countItem: 0,
            totalPrice: 0
        };
        return cartList.reduce(function (objSum, objCart) {
            let countItem = objSum.countItem + objCart.quantity;
            let totalPrice = objSum.totalPrice + objCart.quantity * objCart.product.price;
            return {countItem, totalPrice};
        }, initObj);
    }
}
