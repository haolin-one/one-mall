import { login, getMenusById, getAdminInfoById } from '@/api/admin';
import { sessionCache } from '@/utils/cache';
import { permissionRoutes } from '@/utils/permissionRoutes';
import router, { routes as originRoutes } from '@/router';

const adminModule = {
  namespaced: true,
  state() {
    return {
      token: sessionCache.getItem('token'),
      admin: sessionCache.getItem('admin'),
      menus: sessionCache.getItem('menus')
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

    changeToken(state, token) {
      state.token = token;
      sessionCache.setItem('token', token);
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
    },

    removeToken(state) {
      state.token = '';
      sessionCache.removeItem('token');
    }
  },
  actions: {
    async loginAction({ commit }, payload) {
      const { id, token } = await login(payload.loginForm);

      const admin = await getAdminInfoById(id);

      const menus = await getMenusById(admin.role_id);

      commit('changeToken', token);
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
      commit('removeToken');
    }
  },
  getters: {
    adminMenusList(state) {
      return state.menus;
    }
  }
};

export default adminModule;
