import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/font_xerwk69kmgq/iconfont.css'
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$http = axios

// 配置接口根路径
axios.defaults.baseURL = 'http://175.6.115.16:8081'



// axios拦截器,有token才能获取数据
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')  //将令牌给Authorization
//   // 必须return config
//   return config;
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
