import Vue from 'vue'
import Router from 'vue-router'

import ShoppingMall from '@/components/pages/ShoppingMall.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    }
  ]
})
