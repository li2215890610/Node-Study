const router = require('koa-router')()
const { login, updateUser, createUser} = require('../controller/user');
const { SuccessModel, ErrorModel} = require("../model/resModel");

router.prefix('/api/user');

const api = {
  login: `/login`,
  register: `/register`,
  update: `/update`,
}

router.post('/login', async (ctx, next) => {
  console.log(ctx.request.body);
  const { username, password} = ctx.request.body;

  if (!username) {
    return ctx.body = new ErrorModel("登陆失败,请输入正确的用户名")
  }

  if (!password) {
    return ctx.body = new ErrorModel("登陆失败,请输入正确的密码")
  }

  const data = await login({username, password});

  if (!data) {
    return  ctx.body = new ErrorModel("登陆失败")
  }

  // 设置session
  ctx.session.username = data.username;
  ctx.session.realname = data.realname;

  ctx.body = new SuccessModel("登陆成功");

  console.log('22222222');
})

router.post(api.update, async (ctx, next) => {
  let { username, oldPassword,newPassword} = ctx.request.body;
  if (!username) {
    return ctx.body = new ErrorModel("登陆失败,请输入正确的用户名")
  }

  if (!oldPassword) {
    return ctx.body = new ErrorModel("登陆失败,请输入旧密码")
  }

  if (!newPassword) {
    return ctx.body = new ErrorModel("登陆失败,请输入新密码")
  }

  if (`${newPassword}` === `${oldPassword}`){
    return  ctx.body = new ErrorModel('新旧密码不能相同')
  }

  const data = await updateUser({ username, oldPassword, newPassword})

  if (data && data.msg) {
    return ctx.body = new ErrorModel(data.msg)
  }

  ctx.body = new SuccessModel("修改成功")
})

router.post(api.register, async (ctx, next) => {
  const { username, password} = ctx.request.body;
  if (!username) {
    return ctx.body = new ErrorModel("注册失败,请输入合法用户名")
  }

  if (!password) {
    return  ctx.body = new ErrorModel("注册失败,请输入合法的密码")
  }

  let result = await createUser({ username, password})

  if (!result.id) {
    return ctx.body = new ErrorModel(result,'注册失败')
  }

  ctx.body = new SuccessModel('注册成功');
})


module.exports = router
