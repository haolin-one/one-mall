const state = {
  order: []
};

const mutations = {
  setOrder(state, result) {
    state.order = result.reverse();
  }
};

const actions = {
  async getOrder(ctx, { userId, order_status }) {
    const order = await uni.hloRequest.get({
      url: `order?userId=${userId}&order_status=${order_status}`
    });
    ctx.commit('setOrder', order);
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
