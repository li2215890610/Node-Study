/** 轮播图增删改查 */
const router = require("koa-router")();

router.get('/',async (ctx)=>{
  ctx.render('admin/focus/index')
})

router.get("/add", async (ctx)=>{
  ctx.render('admin/focus/add')
})

router.get("/edit", async (ctx)=>{
  ctx.render('admin/focus/edit')
})


module.exports = router;