const state = {
  token: '',
  userInfo: {},
  address: []
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },

  removeToken(state) {
    state.token = null;
  },

  setUserInfo(state, result) {
    state.userInfo = result;
    uni.setStorageSync('userInfo', state.UserInfo);
  },

  removeUserInfo(state) {
    state.userInfo = {};
  },

  setAddress(state, result) {
    state.address = result;
  },

  removeAddress(state) {
    state.address = [];
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

    context.commit('setUserInfo', res);
    context.commit('setAddress', address[0]);
  },

  logout(context) {
    context.commit('removeToken');
    context.commit('removeUserInfo');
    context.commit('removeAddress');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
