const methods = require("../../utils/method");
const { login, createUser, updateUser } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { set} = require("../../db/redis")
const api = {
  login: `/api/user/login`,
  register: `/api/user/register`,
  update: `/api/user/update`,
}

const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split('?')[0]

  // 注册 
  if (method === methods.POST && path === api.register) {
    let { password, username} = req.body;
    if (!username) {
      return new ErrorModel("注册失败,请输入合法用户名")
    }

    if (!password) {
      return new ErrorModel("注册失败,请输入合法的密码")
    }


    let result = createUser({ username, password})
    return result.then((data)=>{

      if (data.id) {
        return new SuccessModel(data,'注册成功')
      }

      return new ErrorModel(data)
    })
  }

  //修改密码
  if (method === methods.POST && path === api.update) {
    let { username, oldPassword,newPassword} = req.body;
    if (!username) {
      return Promise.resolve(new ErrorModel("登陆失败,请输入正确的用户名"))
    }

    if (!oldPassword) {
      return Promise.resolve(new ErrorModel("登陆失败,请输入旧密码"))
    }

    if (!newPassword) {
      return Promise.resolve(new ErrorModel("登陆失败,请输入新密码"))
    }

    if (`${newPassword}` === `${oldPassword}`){
      return  Promise.resolve(new ErrorModel('新旧密码不能相同'))
    }


    return updateUser({ username, oldPassword, newPassword}).then((data)=>{
      console.log(data,'_________data________');
      if (data && data.msg) {
        return new ErrorModel(data.msg)
      }

      return new SuccessModel("修改成功")
    })
  }

  //登陆 
  if (method === methods.POST && path === api.login) {

    let { username, password} = req.body;

    if (!username) {
      return Promise.resolve(new ErrorModel("登陆失败,请输入正确的用户名"))
    }

    if (!password) {
      return Promise.resolve(new ErrorModel("登陆失败,请输入正确的密码"))
    }


    const resultData = login({username, password});

    return resultData.then((data)=>{
      if (!data) {
        return new ErrorModel("登陆失败")
      }

      // 设置session
      req.session.username = data.username;
      req.session.realname = data.realname;
      //同步 redis 
      set(req.sessionId,req.session)
      return new SuccessModel("登陆成功")
    })
  }



  // // 登录验证的测试
  // if (method === methods.GET && path === '/api/user/login-test') {

  //   if (req.cookie.username) {
  //     return Promise.resolve(new SuccessModel())
  //   }
  //   // if (req.session.username) {
  //   //     return Promise.resolve(
  //   //         new SuccessModel({
  //   //             session: req.session
  //   //         })
  //   //     )
  //   // }

  //   // return Promise.resolve(
  //   //     new ErrorModel('尚未登录')
  //   // )

  //   return Promise.resolve(new ErrorModel('尚未登录'))
  // }

}

module.exports = handleUserRouter