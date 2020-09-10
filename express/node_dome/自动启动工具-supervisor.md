### Nodejs 自启动工具 supervisor
supervisor会不停的watch你应用下面的所有文件，发现有文件被修改，就重新载入程序文件这样就实现了部署，修改了程序文件后马上就能看到变更后的结果。麻麻再也不用担心我的重启nodejs了!

1.首先安装supervisor
```
npm install -g supervisor
```

2. 使用supervisor代替node命令启动应用
```
supervisor xxx.js
```


