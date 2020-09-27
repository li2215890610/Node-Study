const express = require("express");

const app = express();

//express 默认集成了 ejs 模版，所以不用引入
app.set("view engine","ejs")
const ___dirname = './wwwroot'
app.set('views',___dirname+'/views');

app.get("/",(_,result)=>{

  const title = "这是标题"
  result.render("index",{
    title
  })
})


app.get("/news",(_,result)=>{

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