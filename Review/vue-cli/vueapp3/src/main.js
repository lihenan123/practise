// 入口文件 
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入common.css  @ =>src文件夹
import '@/assets/css/common.scss';
// 引入rem.js
import '@/assets/js/rem.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
