import axios from 'axios';

class HLORequest {
  constructor(config) {
    this.hloRequest = axios.create(config);
    this.showLoading = config.showLoading ?? true;
    this.interceptors = config.interceptors;

    // 添加对应实例自己的拦截器
    this.hloRequest.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.hloRequest.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有实例都有的拦截器
    this.hloRequest.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data;
        if (data.returnCode === '-1001') {
          console.log('请求失败~,错误信息');
        } else {
          return data;
        }
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404');
        }
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading();
      }

      // 相对于axios.request
      this.hloRequest
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          this.showLoading = true;
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = true;
          reject(err);
          return err;
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: 'GET' });
  }

  post(config) {
    return this.request({ ...config, method: 'POST' });
  }

  patch(config) {
    return this.request({ ...config, method: 'PATCH' });
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' });
  }
}

export default HLORequest;
