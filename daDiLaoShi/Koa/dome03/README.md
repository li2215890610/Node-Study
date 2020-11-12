#### P47 05【koa教程】 Koa中间件 以及koa中间件的洋葱图执行流程

##### 一、什么是 Koa 的中间件
**通俗的讲：**中间件就是匹配路由之前或者匹配路由完成做的一系列操作，我们就可以把它叫做中间件

在 express 中间件（Middleware）是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处理请求-响应循环流程中的中间件，一 般被命名为 next 的变量。在 Koa 中中间件和 express 有点类似。

- [x] 中间件的功能包括：
  - [x] 执行任何代码。 
  - [x] 修改请求和响应对象。 
  - [x] 终结请求-响应循环。 
  - [x] 调用堆栈中的下一个中间件。


如果我的 get、post 回调函数中，没有 next 参数，那么就匹配上第一个路由，就不会往下匹 配了。如果想往下匹配的话，那么需要写 **next()**

##### 二、Koa 应用可使用如下几种中间件

- [x] 应用级中间件 
- [x] 路由级中间件 
- [x] 错误处理中间件 
- [x] 第三方中间件

###### 1、 应用级中间件
```
//详细看01.js
//koa 中间件
//匹配所有路由之前 执行中间件
app.use(async (ctx,next)=>{
  console.log(new Date());

  await next() //当前路由匹配完成以后，继续往下匹配 
})
```

###### 2、 路由中间件
```
//详细看02.js
//匹配到路由之后 继续向下匹配
koaRouter.get('/news',async (ctx,next)=>{
  ctx.body = `这是一个新闻`;
  next()
})

koaRouter.get('/news',async (ctx,next)=>{
  ctx.body = `
  中间件匹配
  这是一个新闻`;
})
```

###### 3、 错误处理中间件
```
//详细看03.js
//错误处理中间件 
// 与Express 不同到是 Express是按顺序执行，如果没有匹配到直接进入404错误中间件详细看daDiLaoShi/Express/express04/app.js
//而 Koa 是进入路由之后首先匹配 中间件，然后执行对应到路由，对应的路由执行完成之后，在回到中间件执行 next();下面的代码， 而我们想执行错误处理中间件必须判断写上404
app.use(async (ctx,next)=>{
  // 进来中间件了
  console.log('进来中间件了1');
  next(); 
  if(ctx.status==404){ //如果页面找不到 
    ctx.status = 404; 
    ctx.body="这是一个 404 页面" 
  }
  // else{
  //   // 打开注释 访问news 查看效果
  //   console.log(ctx.url,'url ___  3');
  // }
})
```
