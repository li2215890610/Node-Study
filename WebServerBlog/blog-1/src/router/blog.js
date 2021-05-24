const methods = require('../../utils/method')
const { 
  getList, 
  getDetail,
  updateBlog,
  delBlog,
  createBlog
} = require("../controller/blog")
const { SuccessModel, ErrorModel} = require("../model/resModel")

//统一登陆验证函数
// 统一的登录验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
      return Promise.resolve(
          new ErrorModel('尚未登录')
      )
  }
}

const api = {
  list: `/api/blog/list`,
  detail: `/api/blog/detail`,
  create:  `/api/blog/create`,
  update: `/api/blog/update`,
  delete: `/api/blog/delete`
}

const handleBlogRouter = (req, res) =>{
  const method = req.method;
  const path = req.url.split('?')[0]

  // 新增博客
  if (method === methods.POST && path === api.create) {
    const { title, content} = req.body;
    console.log(req.body,'_________req.body__________');

    let loginCheckResult = loginCheck(req);

    if (loginCheckResult) {
      // 未登录
      return loginCheckResult
    }

    if (!title) {
      return Promise.resolve(new SuccessModel('请输入标题'))
    }
    if (!content) {
      return Promise.resolve(new SuccessModel('请输入内容'))
    }

    req.body.author = req.session.username; 
    const blogData = createBlog({...req.body});
    return blogData.then((data)=>{
      return new SuccessModel(data,'新增成功')
    })
  }

  // 删除博客
  if (method === methods.GET && path === api.delete) {
    let loginCheckResult = loginCheck(req);

    if (loginCheckResult) {
      // 未登录
      return loginCheckResult
    }

    req.query.author = req.session.username; 
    const id = req.query.id || '';
    const result = delBlog({id, author: req.query.author })
    return result.then((data)=>{
      if (!data) {
        return new ErrorModel("删除博客失败")
      }
      return new SuccessModel("删除成功")
    })
  }

  // 更新博客
  if (method === methods.POST && path === api.update) {
    let loginCheckResult = loginCheck(req);

    if (loginCheckResult) {
      // 未登录
      return loginCheckResult
    }

    const id = req.body.id || '';
    const result = updateBlog({...req.body,id})

    return result.then((data)=>{
      if (!data) {
        return new ErrorModel("更新博客失败")
      } 
      return new SuccessModel("更新成功")
    })
  }

  // 获取博客详情
  if (method === methods.GET && path === api.detail) {
    let loginCheckResult = loginCheck(req);

    if (loginCheckResult) {
      return loginCheck
    }

    const id = req.query.id || '';
    const result = getDetail({ id});
    return result.then((data)=>{
      return new SuccessModel(data, null)
    })
  }

  //获取博客列表
  if (method === methods.GET && path === api.list) {
    let author = req.query.author || '';
    const keyword = req.query.keyword || '';
    
    //如果存在 登陆管理员界面
    if (req.query.isadmin) {
      // 管理员界面
      const loginCheckResult = loginCheck(req)
      if (loginCheckResult) {
          // 未登录
          return loginCheckResult
      }
      // 强制查询自己的博客
      author = req.session.username
    }

    const result = getList({ author,keyword});
    return result.then((listData)=>{
      return new SuccessModel(listData)
    })
  }
}


module.exports = handleBlogRouter