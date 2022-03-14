const state = {
  order: []
};

const mutations = {
  setOrder(state, result) {
    state.order = result;
    console.log(state.order);
  }
};

const actions = {
  async getOrder(ctx, { userId, status }) {
    const result = await uni.hloRequest.get({
      url: `order?userId=${userId}&status=${status}`
    });
    ctx.commit('setOrder', result);
  },
  async addOrder(ctx) {}
};

const getters = {};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
};
