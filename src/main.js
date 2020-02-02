import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store  from  './store/index.js'
import Dialogs from '@c/dialogs/index.js'
import '@utils/filter.js'

Vue.config.productionTip = false
Vue.prototype.$dialog = Dialogs.install

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
