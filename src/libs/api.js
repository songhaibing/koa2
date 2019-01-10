'use strict'
let MockIp='https://www.easy-mock.com/mock/5af2d6572440bf0190eee11e/koa2/'
let KoaIp='http://localhost:3000/'
const API = {
  index: MockIp+'index',
  register:KoaIp+'user/register',
  login:KoaIp+'user/login',
  getDetailGoodInfo:KoaIp+'goods/getDetailGoodInfo',
  a:KoaIp+'goods/get'

}
export default API
