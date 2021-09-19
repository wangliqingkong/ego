import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
Vue.config.productionTip = false

//仓库注入vue实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
