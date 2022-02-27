const baseUrl = 'http://localhost:7777/';

export const hloRequest = (config) => {
  uni.request({
    url: baseUrl + config.url,
    method: config.method || 'GET',
    data: config.data || {},
    success: (res) => {
      config.success(res);
    },
    fail: (err) => {
      uni.showToast({
        title: '请求接口失败'
      });
      console.log(err);
    }
  });
};
