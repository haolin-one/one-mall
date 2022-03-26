import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as icons from '@element-plus/icons-vue';
import './assets/css/index.less';
import 'normalize.css';

const app = createApp(App);

Object.keys(icons).forEach((key) => {
  app.component(key, icons[key]);
});

app.use(store).use(router).mount('#app');
