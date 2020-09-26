var express = require("express");
var express  = require("express");

const app = express();

app.get("/",(_,res)=>{
  // res.writeHead(200,{
  //   "Content-Type":"text/html;charset=utf-8"
  // })
  res.send('Hello World')
})


app.get("/login",(_,res)=>{
  // res.writeHead(200,{
  //   "Content-Type":"text/html;charset=utf-8"
  // })
  res.send('登陆页面')
})


app.get("/register",(_,res)=>{
  // res.writeHead(200,{
  //   "Content-Type":"text/html;charset=utf-8"
  // })
  res.send('注册页面')
})


app.post("/post",(_,result)=>{ //增加数据
  result.send("执行登陆")
})

app.put("/put",(_,res)=>{ //主要用于修改数据
  res.send("put 页面")
})

app.delete("/delete",(_,res)=>{ //主要用于删除数据
  res.send("delete 页面")
})

app.get("/article",(_,res)=>{ 
  res.send("article 页面")
})

//动态路由

app.get("/article/add",(_,res)=>{ 
  res.send("/article/add")
})


app.get("/article/:id",(req,res)=>{
  //动态路由获取值
  res.send(`/article/${req.params.id}`)
})


//get 传值
app.get("/product",(req,res)=>{

  const reqData = req.query;
  console.log(reqData);
  res.send(`/article/product`)
})



app.listen(10086,()=>{
  console.log("10086 server run ");
})