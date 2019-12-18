import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import VueCookie from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueCookie)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
