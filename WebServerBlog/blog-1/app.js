const querystring = require("querystring")
const handleBlogRouter = require("./src/router/blog")
const handleUserRouter = require("./src/router/user")
const getPostData = require("./utils/getPostData")
const method = require("./utils/method")
const { getCookieEndTime} = require("./utils/time")
const { access} = require("./utils/log")

//session 数据
let SESSION_DATA = {};

const setCookies = ({ res, userId}) => {
  // httpOnly 设置只有后端可以修改  path=/ 所有路由都可以访问  expires 设置过期时间
  res.setHeader("Set-Cookie",`userid=${userId}; path=/;httpOnly; expires=${getCookieEndTime()}`)
}

const serverHandle = async (req,res) => {
  // 记录 access log
  access(`${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`)

  res.setHeader('Content-Type','application/json');

  if (req.method === method.POST) {
    await getPostData(req).then((data)=>{
      req.body = data
    })
  }else{
    // 解析 query
    req.query = querystring.parse(req.url.split('?')[1])
  }

  //解析cookie
  const cookieStr = req.headers.cookie || ""
  req.cookie = {};
  cookieStr.split(";").forEach(e => {
    if (!e) {
      return
    }
 
    const arr = e.split("=")
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key] = val;
  });

  // 解析session 
  let needSetCookie = false;
  let userId = req.cookie.userid;
  if (userId && !SESSION_DATA[userId]) {
    SESSION_DATA[userId] = {}
  }else{
    // 没有cookie的话 根据 needSetCookie 操作 setCookies
    needSetCookie = true;

    userId = `${Date.now()}_${Math.random()}`
    SESSION_DATA[userId] = {}
  }
  req.session = SESSION_DATA[userId]

  //处理 blog 路由
  const blogResult = handleBlogRouter(req,res)
  if (blogResult) {
    blogResult.then((blog)=>{
      if (needSetCookie) {
        setCookies({res, userId})
      }
      res.end(JSON.stringify(blog))
    })
   return 
  }

  //处理 user 路由
  const userData = handleUserRouter(req,res)
  if (userData) {
    userData.then((data)=>{
      if (needSetCookie) {
        setCookies({res, userId})
      }
      console.log(req.session);

      res.end(JSON.stringify(data))
    })
    return
  }


  //未匹配路由
  res.writeHead(404,{
    'Content-Type':'text/plain;charset=utf-8'
  })
  res.write("404 页面")
  res.end()
}

module.exports = serverHandle