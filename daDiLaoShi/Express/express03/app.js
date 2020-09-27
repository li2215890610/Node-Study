const express = require("express");
const ejs = require("ejs");
const app = express();

const ___dirname = './wwwroot'
app.set('views',___dirname+'/views');

//注册html模版引擎
app.engine('html',ejs.__express);

//修改模版文件的后缀为html
app.set("view engine","html")

//配置静态目录
app.use(express.static('static'));

app.get("/",(_,result)=>{

  const userInfo = {
    username: "章三",
    age: 20
  }

  const renderHtml = `<h3>我是ejs渲染的h3</h3>`;
  const list = [{
    name:"章三",
    age: 30
  },
  {
    name:"李四",
    age: 20
  }]
  result.render("news",{
    userInfo,
    renderHtml,
    flag: true,
    count: 80,
    list
  })
})

app.listen(10086,()=>{
  console.log("node 10086 server run");
})