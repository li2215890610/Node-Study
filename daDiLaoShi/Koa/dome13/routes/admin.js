const router = require("koa-router")();
const user = require("./admin/user");
const focus = require("./admin/focus");
const news = require("./admin/news");
router.get('/',async (ctx)=>{
  ctx.body = '后台管理系统'
})

router.use('/user',user.routes())
router.use('/focus',focus.routes())
router.use('/news',news.routes())

module.exports = router;