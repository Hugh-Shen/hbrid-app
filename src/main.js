import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Dialogs from '@c/dialogs/index.js'
import '@utils/filter.js'

Vue.config.productionTip = false
Vue.prototype.$dialog = Dialogs.install
Vue.use(Vuex)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
