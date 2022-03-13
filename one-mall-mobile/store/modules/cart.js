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
    uni.hloRequest.post({
      url: `cart`,
      data: goods
    });
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
    const result = ctx.state.cart.find((item) => item.id === goods.id);
    if (result) {
      uni.showToast({
        icon: 'error',
        title: '商品已在购物车'
      });
      return;
    } else {
      uni.showToast({
        title: '已添加到购物车'
      });
    }
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
