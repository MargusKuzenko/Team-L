import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ContactusView from '../views/ContactusView.vue'
import AddPost from '@/views/AddPost.vue'
import auth from '@/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: "/login",
    name: "LogIn",
    component: LoginView,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactusView
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
