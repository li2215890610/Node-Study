const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('./views/index', {
    title: 'Hello Koa 2!',
    name:"sss",
    isMe: true,
    list:[
      {
        title: 1,
        id: 2
      },
      {
        title: 3,
        id: 5
      }
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
