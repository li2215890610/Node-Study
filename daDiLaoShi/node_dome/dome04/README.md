### Nodejs中的包、npm 、第三方模块、 package.json

##### 符合Commonjs规范的包目录结构如下

- pagejson.json：包描述文件
- bin：用于存放可执行二进制文件的目录
- lib：用于存放JavaScript代码的目录
- doc：用于存放文档的目录


##### 生成 package.json文件 引入包
```
npm init ---yes 
```

##### 安装模块
```
npm install md5 
``` 
可以安装任何包，安装成功之后文件会生成  node_modules 文件

加入--save
```
npm install md5 --save 
``` 
这样安装的话，会在package.json dependencies里面出现所安装的模块

##### package.json

创建package.json
```
npm init || npm init --yes
```
