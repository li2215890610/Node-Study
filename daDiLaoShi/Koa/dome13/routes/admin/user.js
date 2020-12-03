/** 用户增删改查 */

const router = require("koa-router")();

router.get('/',async (ctx)=>{
  ctx.render('admin/user/index')
})

router.get("/add", async (ctx)=>{
  ctx.render('admin/user/add')
})

router.get("/edit", async (ctx)=>{
  ctx.render('admin/user/edit')
})

module.exports = router;