import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@views/Main.vue'
import Home from '@views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/commodity',
    name: 'commodity',
    component: () => import(/* webpackChunkName: "about" */ '@views/Commodity.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
