import {
  setCache,
  getCache,
  removeCache,
  clearCache
} from '../../utils/cache.js';

const state = {
  token: '',
  userInfo: {},
  address: []
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    uni.setStorageSync('token', state.token);
  },

  removeToken(state) {
    state.token = null;
    removeCache('token');
  },

  setUserInfo(state, result) {
    state.userInfo = result;
    // setCache('userInfo', state.userInfo);
  },

  removeUserInfo(state) {
    state.userInfo = {};
    removeCache('userInfo');
  },

  setAddress(state, result) {
    state.address = result[0];
    console.log(state.address);
    // setCache('address', state.address);
  }
};

const actions = {
  async login(context, data) {
    const res = await uni.hloRequest.post({
      url: 'user',
      data
    });
    const address = await uni.hloRequest.post({
      url: `user/${res.id}`
    });
    uni.showToast({
      title: '登陆成功~'
    });
    context.commit('setUserInfo', res);
    context.commit('setAddress', address);
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
