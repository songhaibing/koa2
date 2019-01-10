const Koa= require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect,initSchemas}=require('./database/init.js')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')//接受post的数据
app.use(bodyParser())
const cors=require('koa2-cors')
app.use(cors())
let user = require('./appApi/user')
let home = require('./appApi/home')
let goods = require('./appApi/goods')
//装载所有子路由
let router = new Router()
router.use('/user',user.routes())
router.use('/home',home.routes())
router.use('/goods',goods.routes())
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())
;(async ()=>{
  await connect()
  //把数据插入数据库
  initSchemas()
  // const User = mongoose.model('User')
  // let oneUser = new User({userName:'jspang11',password:'123456'})
  // oneUser.save().then(()=>{
  //   console.log('插入成功')
  // })
  // //查找user模块数据
  // let user =await User.findOne({}).exec()
  // console.log(user)
})()
app.use(async (ctx)=>{
  ctx.body='<h1>hello</h1>'
})
app.listen(3000,()=>{
  console.log('starting at 3000')
})
