const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser")
const app = express();

//引入外部路由 
const adminRouter = require("./routes/admin");
const apiRouter = require("./routes/api");
const indexRouter = require("./routes/index");

const ___dirname = './wwwroot'
app.set('views',___dirname+'/views');

//注册html模版引擎
app.engine('html',ejs.__express);

//修改模版文件的后缀为html
app.set("view engine","html")

//配置静态目录
app.use(express.static('./wwwroot/static'));

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 解析 application/json
app.use(bodyParser.json())

//挂载模块 
app.use('/admin', adminRouter)
app.use('/', indexRouter)
app.use('/api', apiRouter)

app.listen(10086,()=>{
  console.log("node 10086 server run");
})