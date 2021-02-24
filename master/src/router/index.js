import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  { 
    path: '/',
    name: 'Index',
    redirect: "/index",
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {

  // if (
  //   localStorage.getItem('token') === undefined ||
  //   localStorage.getItem('token') === 'null' ||
  //   localStorage.getItem('token') === null
  // ) {
  //   if (
  //     to.fullPath === '/login'
  //     // ||
  //     // to.fullPath.indexOf('github') >= 0 ||
  //     // to.fullPath.indexOf('/index') >= 0
  //   ) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // } else {
  next()
  //}
})

export default router
