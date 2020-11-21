#### P51 09【koa教程】Koa2 art-template高性能模板引擎的使用

##### 地址
[art-template 官网](https://aui.github.io/art-template/zh-cn/index.html)


##### 二、在 Koa 中使用 art-template 模板引擎

安装模块
```

npm install --save art-template 

npm install --save koa-art-template
```

引入模块
```
const render = require('koa-art-template');
```

挂载模版
```
render(app, { 
  root: path.join(__dirname, 'views'),  //文件存放位置
  extname: '.html',  //文件后缀名
  debug: process.env.NODE_ENV !== 'production', //是否开启调试模式
});
```

加载模版
```
app.use(async (ctx)=> { 
  await ctx.render('user'); 
});
```