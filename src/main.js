import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import "./plugins/axios.js"//导入自己写的axios
// 导入全局样式表

import "./assets/css/global.css"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
