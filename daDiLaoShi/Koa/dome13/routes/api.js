const router = require("koa-router")();


router.get('/',async (ctx)=>{
  ctx.body = '后台管理系统'
})

router.get("/user", async (ctx)=>{
  ctx.body = '用户管理'
})

router.get("/focus", async (ctx)=>{
  ctx.body = '轮播图管理'
})

router.get("/newslist", async (ctx)=>{
  ctx.body = {
    title:"新闻列表接口"
  }
}) 

module.exports = router;