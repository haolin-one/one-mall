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
  }
};

const actions = {
  async getCart(ctx, id) {
    const result = await uni.hloRequest.get({
      url: `cart/${id}`
    });
    ctx.commit('setCart', result);
  },

  async changeSelectCart(ctx, { c_id, status }) {
    status = status === 1 ? 0 : 1;
    await uni.hloRequest.post({
      url: `cart/changeSelectCart/${c_id}`,
      data: { status: status }
    });
  },

  async updateCart(ctx, goods) {
    let isExist = false;
    ctx.state.cart.forEach(async (item) => {
      if (item.id === goods.id) {
        isExist = true;
        item.count += goods.count;
        await uni.hloRequest.post({
          url: `cart/addSameGoods`,
          data: item
        });
        return;
      }
    });
    if (!isExist) {
      uni.showToast({
        title: '已添加到购物车'
      });
      await uni.hloRequest.post({
        url: `cart/addGoods`,
        data: goods
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
      if (item.select_status) {
        price += item.count * item.price;
      }
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
