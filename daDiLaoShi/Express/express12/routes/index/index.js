const express = require("express");
const appRouter = express.Router();

appRouter.get('/',(_,result)=>{
  const userInfo = {
    username: "章三",
    age: 20
  }

  const renderHtml = `<h3>我是ejs渲染的h3 <a href='/admin' style="color:black;">点我进行登陆</a></h3>`;
  const list = [{
    name:"章三",
    age: 30
  },
  {
    name:"李四",
    age: 20
  }]
  result.render("news/news",{
    userInfo,
    renderHtml,
    flag: true,
    count: 80,
    list
  })
})

module.exports = appRouter;