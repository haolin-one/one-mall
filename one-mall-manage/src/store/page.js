/* eslint-disable no-undef */
import {
  deletePageData,
  getPageListData,
  createPageData,
  updatePageData
} from '@/api/page';

const pageModule = {
  namespaced: true,
  state() {
    return {
      adminList: [],
      adminCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      goodsCateList: [],
      goodsCateCount: 0,
      orderList: [],
      orderCount: 0,
      bannerList: [],
      bannerCount: 0
    };
  },
  mutations: {
    changeAdminList(state, adminList) {
      state.adminList = adminList;
    },
    changeAdminCount(state, adminCount) {
      state.adminCount = adminCount;
    },
    changeRoleList(state, roleList) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount) {
      state.roleCount = roleCount;
    },
    changeGoodsList(state, goodsList) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount) {
      state.menuCount = menuCount;
    },
    changeGoodsCateList(state, goodsCateList) {
      state.goodsCateList = goodsCateList;
    },
    changeGoodsCateCount(state, goodsCateCount) {
      state.goodsCateCount = goodsCateCount;
    },
    changeOrderList(state, orderList) {
      state.orderList = orderList;
    },
    changeOrderCount(state, orderCount) {
      state.orderCount = orderCount;
    },
    changeBannerList(state, bannerList) {
      state.bannerList = bannerList;
    },
    changeBannerCount(state, bannerCount) {
      state.bannerCount = bannerCount;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName) => {
        return state[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName) => {
        return state[`${pageName}Count`];
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      // 1. 获取Url
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;

      // 2.对页面发送网络请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      // 3.将数据存储到state中
      const { list, totalCount } = pageResult;

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);

      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);
    },

    async deletePageDataAction({ dispatch }, payload) {
      const { pageName, id } = payload;

      const pageUrl = `/${pageName}/${id}`;

      const res = await deletePageData(pageUrl);

      ElNotification({
        message: res,
        type: 'success'
      });

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async createPageDataAction({ dispatch }, payload) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;

      const res = await createPageData(pageUrl, newData);

      ElNotification({
        message: res,
        type: 'success'
      });

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async updatePageDataAction({ dispatch }, payload) {
      const { pageName, updateData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      const res = await updatePageData(pageUrl, updateData);

      ElNotification({
        message: res,
        type: 'success'
      });

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default pageModule;
