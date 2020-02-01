let initCartList = window.localStorage.getItem('cartList') || [];
    initCartList = JSON.parse(initCartList)

export default {
  cartList: initCartList
}
