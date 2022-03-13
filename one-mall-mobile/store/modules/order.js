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
  async getOrder(ctx, id) {
    const result = await uni.hloRequest.get({
      url: `order/${id}`
    });
    console.log(result);
    ctx.commit('setOrder', result);
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
