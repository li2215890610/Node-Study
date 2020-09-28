### P30 03、【Express教程】 Express中间件 body-parser中间件接收表单Post的数据

#### 中间件
通俗的讲中间件就是匹配路由之前或者匹配路由完成做的一系列操作
##### Express 中间件分为以下几种

- [x] 应用级中间件
- [x] 路由级中间件
- [x] 错误处理中间件
- [x] 内置中间件
- [x] 第三方中间件

##### 应用级中间件
```
//应用级中间件
//匹配所有路由之前执行
//主要对应业务是 用于权限判断
app.use((request,result,next)=>{
  //result.send("中间件")

  console.log(new Date())

  next() //表示匹配完成这个中间件以后程序继续向下执行
})
```

##### 路由级中间件
```
//路由级中间件 如果首先匹配到 /news/add 并且还想往下匹配就要用next() 
app.get('/news/add', (_, res,next) => {
  // res.send('Hello /news/add!')
  next()
})
app.get('/news/:id', (req, res) => {
  console.log(req.params.id);
  res.send('Hello news!')
})
```
##### 错误处理中间件
```
//错误处理中间件
//匹配所有路由之后执行
//如果所有路由没有匹配到 就进入错误处理中间件
app.use((_,result,next)=>{
  result.status(404).send('404')
})
```

##### 内置中间件
express03里面有 **配置静态目录** 操作
```
//配置静态目录
app.use(express.static('static'));
```
