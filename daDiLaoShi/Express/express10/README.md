### P34 07、【Express教程】Express大型企业级架构之路由模块化 以及Express应用程序生成器
### express-generator Express应用程序生成器   express10

[express-generator](https://www.npmjs.com/package/express-generator)
[express-generator中文网介绍](https://www.expressjs.com.cn/starter/generator.html)
```
sudo npm install express-generator -g
//查看是否安装成功
express -h
```

使用express 路由生成器 生成脚手架
```
// ejs 模版引擎
// myapp 项目名称
//例如，如下命令创建了一个名称为 myapp 的 Express 应用。此应用将在当前目录下的 myapp 目录中创建，并且设置为使用 ejs 模板引擎（view engine）：

express --view=ejs myapp
```

[配置自定义端口](https://blog.csdn.net/qq_44977477/article/details/106781319)