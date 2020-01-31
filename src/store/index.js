import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import moduleCart from './cart';
import moduleProduct from './product';


Vue.use(Vuex)

const store = new Vuex.Store ({
  state,
  getters,
  mutations,
  actions,
  modules: {
    cart: moduleCart,
    product: moduleProduct
  }
});
store.commit('increment');
export default store;
