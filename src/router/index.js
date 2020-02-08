import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '@views/Register.vue')
  },
  {
    path: '/commodity',
    name: 'commodity',
    component: () => import(/* webpackChunkName: "about" */ '@views/Commodity.vue')
  },
  {
    path: '/commodityDetail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '@views/CommodityDetail.vue')
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import(/* webpackChunkName: "about" */ '@views/Buy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
