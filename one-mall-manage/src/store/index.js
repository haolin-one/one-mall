import { createStore } from 'vuex';
import pageModule from './page';
import adminModule from './admin';

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { pageModule, adminModule }
});

export function refreshLogin() {
  store.dispatch('adminModule/refreshLogin');
}

export default store;
