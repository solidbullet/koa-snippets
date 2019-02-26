const Koa = require('koa')
const fs = require('fs')
const router = require('./router')
const app = new Koa()



// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})