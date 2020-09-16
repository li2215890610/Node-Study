#### MongoDb 数据库介绍、安装、使用


##### 介绍

MongoDB是-一个介于关系数据库和非关系数据库之间的产品，**是非关系数据库当中功能最丰富，最像关系数据库的NoSql数据库**。他支持的数据结构非常松散。是类似json的bson格式，因此可以存储比较复
杂的数据类型。Mongodb 最大的特点是他 **支持的查询语合非常强大**，其语法有点类似于面向对象的查询语
言，**几乎可以实现类似关系数据库单表查询的绝大部分功能**，而且还支持对数据建立索引。它的特点是高
性能、易部署、易使用，存储数据非常方便。



[官网](https://www.mongodb.com/)
[手册](https://www.mongodb.org.cn/manual/)
[Mac下载](https://www.mongodb.com/try/download/community)


##### Mac 右键自动解压 tag文件

tag zxvf 解压文件路径 -C ./

##### 安装



```
//解压在  /usr/local 文件
//新建  MongoDB 文件，把 MongoDB解压文件 放进去

//退回最上层文件夹
cd ~
//打开输入文件
open -e .bash_profile

//输入环境变量
export PATH=${PATH}:/usr/local/MongoDB/bin

//用Command+S保存配置，关闭上面的 .bash_profile 编辑窗口，
source .bash_profile //终端输入使配置生效

//查看版本
mongod -version 

//在根目录新建
sudo mkdir -p /data/db



//运行 MongoDB
//进入
cd /usr/local/mongdb/bin/
//运行数据库
./mongod


//浏览器输入
localhost:27017 


```

##### 关闭 MongoDB
```
//在安装 mongodb/bin 文件下执行
./mongo // 进入命令行
use admin 
db.shutdownServer()
```


