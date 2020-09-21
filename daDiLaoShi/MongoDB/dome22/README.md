#### P22 22、【MongoDb进阶】 mongodb开启权限验证、 mongodb超级管理员 、mongodb用户权限管理



##### 创建超级管理员账户

```
//开启权限
./mongod --auth

use dbname 

db.createUser({
  user:"admin",
  pwd:"admin1",
  roles:[{role:"root",db:"admin"}]
})

//删除用户
db.dropUser("admin")

//查看用户
show users

//连接使用数据库
mongo dbname -u admin -p admin1


//修改用户密码
db.updateUser("admin",{pwd:"123456."})

```

