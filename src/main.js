// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HTTP from './libs/httpRequest'
import API from "./libs/api"

import {Button,Row, Col,Swipe, SwipeItem,Lazyload } from 'vant'
[Button,Row,Col,Swipe, SwipeItem,Lazyload].map(item => {
  Vue.use(item)
})

Vue.prototype.$HTTP = HTTP
Vue.prototype.$API = API
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
