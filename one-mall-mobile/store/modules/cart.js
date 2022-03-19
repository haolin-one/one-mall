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
  addCart(state, goods) {
    state.cart = [...state.cart, goods];
    uni.hloRequest.post({
      url: `cart/addGoods`,
      data: goods
    });
  }
};

const actions = {
  async getCart(ctx, id) {
    const result = await uni.hloRequest.get({
      url: `cart/${id}`
    });
    ctx.commit('setCart', result);
  },

  updateCart(ctx, goods) {
    let isExist = false;
    ctx.state.cart.forEach((item) => {
      if (item.id === goods.id) {
        isExist = true;
        item.count += goods.count;
        uni.hloRequest.post({
          url: `cart/addSameGoods`,
          data: item
        });
        uni.showToast({
          title: '已添加到购物车'
        });
        return;
      }
    });
    if (!isExist) {
      uni.showToast({
        title: '已添加到购物车'
      });
      ctx.commit('addCart', goods);
    }
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
