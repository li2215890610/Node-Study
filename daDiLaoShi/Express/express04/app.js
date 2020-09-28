const express = require('express');

const app = express();

//内置中间件
app.use(express.static('static'));

//应用级中间件
//匹配所有路由之前执行
//主要对应业务是 用于权限判断
app.use((request,result,next)=>{
  console.log(new Date());
  next() //如果不调用next() 访问任意路由的时候，会卡死
})

app.get('/', (_, res) => res.send('Hello World!'))
app.get('/login', (_, res) => res.send('Hello login!'))

//路由级中间件 
//如果首先匹配到 /news/add 并且还想往下匹配就要用next() 
app.get('/news/add', (_, res,next) => {
  // res.send('Hello /news/add!')
  next()
})
app.get('/news/:id', (req, res) => {
  console.log(req.params.id);
  res.send('Hello news!')
})

//错误处理中间件
//匹配所有路由之后执行
//如果所有路由没有匹配到 就进入错误处理中间件
app.use((_,result,next)=>{
  result.status(404).send('404')
})

app.listen(10086, () => console.log("server 10086 run"))