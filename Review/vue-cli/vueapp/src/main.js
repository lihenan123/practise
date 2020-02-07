import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入common.scss @可以直接定位到src
import '@/assets/css/common.scss'
import '@/assets/js/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
