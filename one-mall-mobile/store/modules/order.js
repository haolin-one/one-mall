const state = {
  order: []
};

const mutations = {
  setOrder(state, result) {
    state.order = result.reverse();
  }
};

const actions = {
  async getOrder(ctx, { userId, status }) {
    const result = await uni.hloRequest.get({
      url: `order?userId=${userId}&status=${status}`
    });
    ctx.commit('setOrder', result);
  },
  async addOrder(ctx, orderInfo) {
    const result = await uni.hloRequest.post({
      url: 'order',
      data: orderInfo
    });
    uni.showToast({
      title: result
    });
  }
};

const getters = {};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
};
