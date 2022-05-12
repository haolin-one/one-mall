import { login, getMenusById } from '@/api/admin';
import { sessionCache } from '@/utils/cache';
import { permissionRoutes } from '@/utils/permissionRoutes';
import router, { routes as originRoutes } from '@/router';

const adminModule = {
  namespaced: true,
  state() {
    return {
      admin: [],
      menus: []
    };
  },
  mutations: {
    changeMenusList(state, menusList) {
      state.menus = menusList;
      sessionCache.setItem('menus', state.menus);
      const routes = permissionRoutes(state.menus);
      originRoutes.forEach((item) => {
        router.addRoute(item);
      });
      routes.forEach((item) => {
        router.addRoute('main', item);
      });
    },
    changeAdminInfo(state, admin) {
      state.admin = admin;
      sessionCache.setItem('admin', state.admin);
    },
    removeMenusList(state) {
      state.menus = [];
      sessionCache.removeItem('menus');
      originRoutes.forEach((item) => {
        router.addRoute(item);
      });
    },
    removeAdminInfo(state) {
      state.admin = [];
      sessionCache.removeItem('admin');
    }
  },
  actions: {
    async loginAction({ commit }, payload) {
      const admin = await login(payload.loginForm);
      const menus = await getMenusById(admin.role_id);
      commit('changeMenusList', menus);
      commit('changeAdminInfo', admin);
      return admin;
    },
    refreshLogin({ commit }) {
      const admin = sessionCache.getItem('admin');
      if (admin) {
        commit('changeAdminInfo', admin);
      }
      const menus = sessionCache.getItem('menus');
      if (menus) {
        commit('changeMenusList', menus);
      }
    },
    logoutAction({ commit }) {
      commit('removeMenusList');
      commit('removeAdminInfo');
    }
  },
  getters: {
    adminMenusList(state) {
      return state.menus;
    }
  }
};

export default adminModule;
