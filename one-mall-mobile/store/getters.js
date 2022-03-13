const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  userId: (state) => state.user.userInfo.id,
  username: (state) => state.user.userInfo.username,
  nickname: (state) => state.user.userInfo.nickname,
  signature: (state) => state.user.userInfo.personalized_signature,
  address: (state) => state.user.address,
  order: (state) => state.order.order
};
export default getters;
