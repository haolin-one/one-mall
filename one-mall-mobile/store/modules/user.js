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
  },

  removeUserInfo(state) {
    state.userInfo = {};
  },

  setAddress(state, result) {
    state.address = result[0];
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

    uni.showToast({
      title: '登陆成功~'
    });
    context.commit('setUserInfo', res);
    context.commit('setAddress', address);
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
