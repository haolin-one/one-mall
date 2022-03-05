import {
  setCache,
  getCache,
  removeCache,
  clearCache
} from '../../utils/cache.js';

const state = {
  token: '',
  userInfo: {}
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    setCache('token', token);
  },

  removeToken(state) {
    state.token = null;
    removeCache('token');
  },

  setUserInfo(state, result) {
    state.userInfo = result;
    setCache('userInfo', state.userInfo);
  },

  removeUserInfo(state) {
    state.userInfo = {};
    removeCache('userInfo');
  }
};

const actions = {
  async login(context, data) {
    const res = await uni.hloRequest.post({
      url: 'user',
      data
    });
    console.log(res);
    uni.showToast({
      title: '登陆成功~'
    });
    context.commit('setUserInfo', res);
  },

  logout(context) {
    context.commit('removeToken');
    context.commit('removeUserInfo');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
