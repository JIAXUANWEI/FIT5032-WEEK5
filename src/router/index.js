import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCount from '@/views/GetBookCount.vue'
import WeatherCheck from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBook from '@/views/GetAllBook.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true } // 需要身份验证
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
    {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCount
  },
    {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherCheck
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
    {
    path: '/GetAllBook',
    name: 'GetAllBook',
    component: GetAllBook
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 检查路由是否需要身份验证
  if (to.meta.requiresAuth) {
    // 检查用户是否已登录
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    
    if (isAuthenticated) {
      // 用户已登录，允许访问
      next()
    } else {
      // 用户未登录，重定向到拒绝访问页面
      next('/access-denied')
    }
  } else {
    // 不需要身份验证的路由，直接允许访问
    next()
  }
})

export default router