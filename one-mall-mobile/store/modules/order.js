const state = {
  order: []
};

const mutations = {
  setOrder(state, result) {
    state.order = [...state.order, ...result];
  },
  clearOrder(state) {
    state.order = [];
  }
};

const actions = {
  async getOrder(ctx, { userId, order_status, size, offset }) {
    const order = await uni.hloRequest.get({
      url: `order?userId=${userId}&order_status=${order_status}&size=${size}&offset=${offset}`
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
  },
  async updateAddress(ctx, address) {
    const result = await uni.hloRequest.post({
      url: 'order/updateAddress',
      data: address
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
