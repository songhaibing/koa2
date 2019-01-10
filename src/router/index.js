import Vue from 'vue'
import Router from 'vue-router'

import ShoppingMall from '@/components/pages/ShoppingMall.vue'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {path: '/register',name: 'Register',component: Register},
    {path: '/Login',name: 'Login',component: Login},
  ]
})
