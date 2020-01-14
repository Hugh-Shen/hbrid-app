import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@views/Main.vue'

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
  },
  {
    path: '/CommodityDetail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '@views/CommodityDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
