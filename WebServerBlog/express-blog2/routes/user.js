var express = require('express');
var router = express.Router();
const { login} = require('../controller/user');
const { SuccessModel, ErrorModel} = require("../model/resModel");

const api = {
  login: `/login`,
  register: `/register`,
  update: `/update`,
}

/* GET users listing. */
router.post(api.login, function(req, res, next) {
  let { username, password} = req.body;

  if (!username) {
    return res.json(new ErrorModel("登陆失败,请输入正确的用户名"))
  }

  if (!password) {
    return res.json(new ErrorModel("登陆失败,请输入正确的密码"))
  }

  login({username, password}).then((data)=>{
    if (!data) {
      return res.json(new ErrorModel("登陆失败"))
    }
    
    // 设置session
    req.session.username = data.username;
    req.session.realname = data.realname;

    res.json(new SuccessModel("登陆成功"))

  })

});

/* GET users listing. */
router.post(api.register, function(req, res, next) {

  let { password, username} = req.body;

  if (!username) {
    return res.json(new ErrorModel("注册失败,请输入合法用户名"))
  }

  if (!password) {
    return res.json(new ErrorModel("注册失败,请输入合法的密码"))
  }


  let result = createUser({ username, password})
  return result.then((data)=>{

    if (data.id) {
      return res.json(new SuccessModel(data,'注册成功'))
    }

    return res.json(new ErrorModel(data))
  })
});

/* GET users listing. */
router.post(api.update, function(req, res, next) {
  let { username, oldPassword,newPassword} = req.body;
  if (!username) {
    return res.json(new ErrorModel("登陆失败,请输入正确的用户名"))
  }

  if (!oldPassword) {
    return res.json(new ErrorModel("登陆失败,请输入旧密码"))
  }

  if (!newPassword) {
    return res.json(new ErrorModel("登陆失败,请输入新密码"))
  }

  if (`${newPassword}` === `${oldPassword}`){
    return  res.json(new ErrorModel('新旧密码不能相同'))
  }


  return updateUser({ username, oldPassword, newPassword}).then((data)=>{
    if (data && data.msg) {
      return res.json(new ErrorModel(data.msg))
    }

    return res.json(new SuccessModel("修改成功"))
  })

});
module.exports = router;
