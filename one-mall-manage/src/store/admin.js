import { login, getMenusById } from '@/api/admin';
import { sessionCache } from '@/utils/cache';
import { permissionRoutes } from '@/utils/permissionRoutes';
import router from '@/router';

const adminModule = {
  namespaced: true,
  state() {
    return {
      menus: []
    };
  },
  mutations: {
    changeMenusList(state, menusList) {
      state.menus = menusList;
      sessionCache.setItem('menus', state.menus);
      const routes = permissionRoutes(state.menus);
      routes.forEach((item) => {
        router.addRoute('main', item);
      });
    }
  },
  actions: {
    async loginAction({ commit }, payload) {
      const result = await login(payload.loginForm);
      const menus = await getMenusById(result.role_id);
      commit('changeMenusList', menus);
      return result;
    }
  },
  getters: {
    adminMenusList(state) {
      return state.menus;
    }
  }
};

export default adminModule;
