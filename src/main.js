import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';

import router from './router/index'
import axios from 'axios'

import Storage from './utils/storage'  // 浏览器本地缓存

Vue.use(Vant);
Vue.prototype.Storage = Storage;
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app');
