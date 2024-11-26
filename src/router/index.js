import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "Signup" */ '../views/SignupView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
