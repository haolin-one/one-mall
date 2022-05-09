import { createStore } from 'vuex';
import pageModule from './page';
import adminModule from './admin';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { pageModule, adminModule }
});
