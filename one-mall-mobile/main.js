import { hloRequest } from './api/index.js';
uni.hloRequest = hloRequest;
// #ifndef VUE3
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
Vue.prototype.hloRequest = hloRequest;

App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
import App from './App.vue';

Vue.prototype.hloRequest = hloRequest;

export function createApp() {
  const app = createSSRApp(App);
  return {
    app
  };
}
// #endif
