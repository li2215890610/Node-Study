const router = require('koa-router')()
const app = require('../app');
const {
  getList,
  getDetail,
  updateBlog,
  delBlog,
  createBlog
} = require("../controller/blog");
const loginCheck = require('../middleware/loginCheck');
const { SuccessModel, ErrorModel } = require("../model/resModel")

router.prefix('/api/blog');

const api = {
  list: `/list`,
  detail: `/detail`,
  create: `/create`,
  update: `/update`,
  delete: `/delete`
}

router.post(api.create, async  (ctx, next) => {
  const { title, content } = ctx.request.body;

  if (!title) {
    return ctx.body = new SuccessModel('请输入标题')
  }
  if (!content) {
    return ctx.body = new SuccessModel('请输入内容')
  }

  ctx.request.body.author = ctx.session.username;

  const data = await createBlog({ ...ctx.request.body });
  if (!data) {
    return ctx.body = new ErrorModel("新增失败")
  }

  ctx.body = new SuccessModel(data, '新增成功');
})

router.post(api.delete, loginCheck ,async  (ctx, next )=> {
  const id = ctx.query.id || '';

  if (!id) {
    return ctx.body = new ErrorModel("请传入id")
  }

  const data = await delBlog({ id, author: ctx.session.username })

  if (!data) {
    return ctx.body = new ErrorModel("删除失败")
  }

  ctx.body = new SuccessModel(data, null)
});

router.post(api.update, loginCheck, async  (ctx, next) => {
  const id = ctx.query.id || '';
  console.log({ ...ctx.request.body, id });

  if (!id) {
    return ctx.body = new ErrorModel("请传入id")
  }

  const data = await updateBlog({ ...ctx.request.body, id })

  if (!data) {
    return ctx.body = new ErrorModel("更新博客失败")
  }

  ctx.body = new SuccessModel('更新成功');
})

router.get(api.list, loginCheck, async  (ctx, next) => {

  let author = ctx.query.author || '';
  const keyword = ctx.query.keyword || '';

  // //如果存在 登陆管理员界面
  if (ctx.query.isadmin) {
    if (ctx.session.username == null) {
      // 未登陆
      return ctx.body = new ErrorModel("未登陆")
    }
    // 强制查询自己的博客
    author = ctx.session.username
  }

  const listData = await getList({ author, keyword });
  ctx.body = new SuccessModel(listData)
})

router.get(api.detail, async  (ctx, next)=>{

  const id = ctx.query.id || '';

  if (!id) {
    return ctx.body = new ErrorModel("请传入id")
  }

  const data = await getDetail({ id });
  if (!data) {
    return ctx.body = new ErrorModel("获取博客详情失败")
  }
  ctx.body = new SuccessModel(data, null);
})

module.exports = router