import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user.js';
import cart from './modules/cart.js';
import order from './modules/order.js';
import getters from './getters.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    cart,
    order
  },
  getters
});
export default store;
