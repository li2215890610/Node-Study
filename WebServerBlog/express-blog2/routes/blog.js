var express = require('express');
var router = express.Router();
const {
  getList,
  getDetail,
  updateBlog,
  delBlog,
  createBlog
} = require("../controller/blog");
const loginCheck = require('../middleware/loginCheck');
const { SuccessModel, ErrorModel } = require("../model/resModel")

const api = {
  list: `/list`,
  detail: `/detail`,
  create: `/create`,
  update: `/update`,
  delete: `/delete`
}

router.post(api.create, loginCheck, function (req, res, next) {
  const { title, content } = req.body;

  if (!title) {
    return res.json(new SuccessModel('请输入标题'))
  }
  if (!content) {
    return res.json(new SuccessModel('请输入内容'))
  }

  req.body.author = req.session.username;
  createBlog({ ...req.body }).then((data) => {
    res.json(new SuccessModel(data, '新增成功'))
  })
});

router.post(api.delete, loginCheck,function (req, res, next) {
  const id = req.query.id || '';

  if (!id) {
    return res.json(new ErrorModel("请传入id"))
  }

  delBlog({ id, author: req.session.username }).then((data) => {
    res.json(new SuccessModel(data, null))
  })
});

router.get(api.detail, loginCheck,function (req, res, next) {
  const id = req.query.id || '';

  if (!id) {
    return res.json(new ErrorModel("请传入id"))
  }

  getDetail({ id }).then((data) => {
    res.json(new SuccessModel(data, null))
  })
});

/* GET users listing. */
router.post(api.update,loginCheck, function (req, res, next) {
  const id = req.query.id || '';
  console.log({ ...req.body, id });

  if (!id) {
    return res.json(new ErrorModel("请传入id"))
  }

  updateBlog({ ...req.body, id }).then((data) => {
    if (!data) {
      return res.json(new ErrorModel("更新博客失败"))
    }
    res.json(new SuccessModel("更新成功"))
  })
});

router.get(api.list, loginCheck, function (req, res, next) {

  let author = req.query.author || '';
  const keyword = req.query.keyword || '';

  // //如果存在 登陆管理员界面
  if (req.query.isadmin) {
    if (req.session.username == null) {
      // 未登陆
      return res.json(new ErrorModel("未登陆")) 
    }
    // 强制查询自己的博客
    author = req.session.username
  }

  getList({ author, keyword }).then((listData) => {
    res.json(new SuccessModel(listData))
  })
});

module.exports = router;