#### P48 06【koa教程】 Koa2.x ejs模板引擎使用 以及ejs配置全局数据

##### 一、安装koa-views 与ejs

[koa-views npm地址](https://www.npmjs.com/package/koa-views)

[ejs npm地址](https://www.npmjs.com/package/ejs)

```
//安装
npm install koa-views --save

//安装
npm install ejs --save
```

##### 2、引入 koa-views 配置中间件

```
const views = require('koa-views'); 

//以下方式二选一
// app.use(views("views", { map: { html: 'ejs' } })); //配置这种模版引擎 views里面的文件必须是 html 后缀

app.use(views("views", { extension: 'ejs' }));// 配置这种模版引擎 views里面的文件必须是 ejs 后缀

```

##### 3、Koa 中使用 ejs：

```
router.get('/add',async (ctx)=>{ 
  let title = 'hello koa2' 
  await ctx.render(index',{ title }) 
}
```