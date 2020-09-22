#### P25 25、【MongoDb高级】拓展-Mongodb数据库的备份和还原

##### 以下操作首先启动数据库 ./mongod

##### 备份数据库
```
mongodump -h dbhost -d dbname -o exprot_dbname -u admin -p 123456
```
- [x] <hostname><:port> MongoDB所在服务器地址，默认为： 127.0.0.1:27017
- [x] -d dbname 数据库名称
- [x] -o exprot_dbname 设置备份数据所在位置，例如：c:\data\dump\test。
- [x] -u 用户名
- [x] -p 密码

##### 导入数据库
```
mongorestore -h <hostname><:port> -d dbname <path>
```
- [x] <hostname><:port> MongDB所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017
- [x] -d 需要备份的数据库实例，例如：test
- [x] -o 备份的数据存放位置，例如：c:\data\dump，当然该目录需要提前建立，在备份完成后，系统自动在dump目录下建立一个test目录，这个目录里面存放该数据库实例的备份数据。
- [x] -u 用户名
- [x] -p 密码

