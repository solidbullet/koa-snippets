const Router = require('koa-router')
const OrderController = require('./controller/OrderController')
let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/api/v1/page/helloworld">/page/helloworld</a></li>
      <li><a href="/api/v1/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})

// 装载所有子路由
let router = new Router({
  prefix: '/api/v1'
});
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.get('/order',OrderController.create)    
router.post('/order',OrderController.create)    

module.exports = router