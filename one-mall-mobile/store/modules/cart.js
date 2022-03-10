const state = {
  cart: []
};

const mutations = {
  setCart(state, result) {
    state.cart = result;
  },
  removeCart(state) {
    state.cart = [];
  },
  updateCart(state, goods) {
    state.cart = [...state.cart, goods];
  }
};

const actions = {
  async getCart(ctx, id) {
    const result = await uni.hloRequest.post({
      url: `cart/${id}`
    });
    ctx.commit('setCart', result);
  },
  updateCart(ctx, goods) {
    ctx.commit('updateCart', goods);
  }
};

const getters = {
  totalCount(state) {
    let count = 0;
    state.cart.forEach((item) => {
      if (item.select_status) {
        count += item.count;
      }
    });
    return count;
  },
  totalPrice(state) {
    let price = 0;
    state.cart.forEach((item) => {
      price += item.count * item.price;
    });
    return price.toFixed(2);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
