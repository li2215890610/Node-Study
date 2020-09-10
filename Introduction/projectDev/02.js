/**
 * 
 * 简单的路由就是一个spa单页应用
 * 
 * 简单的路由
 */

 const express = require("express");

 const app = express();

 app.get('/',function (_,res) {
   res.send(`
    <div>/跟路径</div>
    <div><a href='/a/b/c'>跳转 /a/b/c</a></div>
    <div><a href='/a/b'>跳转 /a/b</a></div>
  `)
 })
 app.get('/a',function (_,res) {
  res.send("/a")
})
app.get('/a/b',function (_,res) {
  res.send("/a/b")
})
app.get('/a/b/c',function (_,res) {
  res.send("/a/b/c")
})
app.get('/b',function (_,res) {
  res.send("/b")
})
app.get('/b/c',function (_,res) {
  res.send("/b/c")
})



 app.listen(10086,function () {
   console.log("node 启动了")
 })