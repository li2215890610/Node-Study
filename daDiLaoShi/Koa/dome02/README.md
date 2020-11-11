#### Koa路由 get传值 动态路由

##### 一、Koa 路由   

路由（Routing）是由一个 URL （或者叫路径）和特定的 HTTP 方法 （GET，POST等）组成的，涉及到应用如何响应客户端对某个网站节点的访问。

通俗的讲： 路由就是根据不同的 URL 地址，加载不同的页面实现不同的功能

Koa中的路由与 Express 有所不同，在 Express 中直接引入 Express 就可以配置路由，但是在Koa中我们需要安装对应的 koa-router路由模块来实现。

[koa Npm地址](https://www.npmjs.com/package/koa-router)

```
npm install koa-router --save
```
##### get传值   router02.js

koa2 有两种获取值的方式 query与querystring
query: 返回的是格式化好的参数对象
querystring: 返回的是请求字符串

##### 动态路由   router02.js
```
//获取动态路由的传值
koaRouter.get('/news/:id',async (ctx,next)=>{
  ctx.body = `新闻详情 ${ctx.params.id}`;
})
```