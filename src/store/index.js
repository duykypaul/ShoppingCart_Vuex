import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import moduleCart from './cart';
import moduleProduct from './product';


Vue.use(Vuex);

const localStorage = store => {
	store.subscribe((mutation, state) => {
		window.localStorage.setItem('cartList', JSON.stringify(state.cart.cartList));
	})
}

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state,
	getters,
	mutations,
	actions,
	modules: {
		cart: moduleCart,
		product: moduleProduct
	},
	plugins: [localStorage]
});
export default store;
