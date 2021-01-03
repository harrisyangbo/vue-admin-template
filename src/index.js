import Vue from 'vue';
import router from './router';
import store from './store';
import app from './app.vue';
import apiFn from './api/index';
import ViewUI from 'view-design';
import '@/assets/style/reset.css'
import 'view-design/dist/styles/iview.css';
const echarts = require('echarts')

Vue.use(ViewUI);
Vue.prototype.$api = apiFn;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function (err, vm, info) {
    router.push({
      name: 'error',
      params: {
        err,
        info,
        vm
      }
    });
  };
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render(h) {
    return h(app);
  }
});
