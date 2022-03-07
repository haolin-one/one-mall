const getters = {
  token: (state) => state.user.token,
  username: (state) => state.user.userInfo.username,
  nickname: (state) => state.user.userInfo.nickname,
  signature: (state) => state.user.userInfo.personalized_signature,
  address: (state) => state.user.address
};
export default getters;
