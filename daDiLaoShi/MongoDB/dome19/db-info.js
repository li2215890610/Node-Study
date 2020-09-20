
//查看有多少个数据库
// show dbs 

//使用数据库、创建数据库
// use db_name

//给 user 表（集合）插入一条数据
// db.table.insert({"username":"zhangsan",age:20})

//查看表（集合）
// show collections

//查看user表（集合）数据
// db.table.find()

//删除 itying 数据库
// db.dropDatabase()

//删除表（集合）
// db.table.drop()

//查找数据
// db.table.find()

//查找单个数据
// db.table.find({username:"zhangsan"})


//查询小于某个值
// db.table.find({"age":{$lt:25}}) //查询小于25的值

//查询大于某个值
// db.table.find({"age":{$gt:25}}) //查询大于25的值

//查询>=某个值
// db.table.find({"age":{$gte:25}}) //查询>=25的值

//查询<=某个值
// db.table.find({"age":{$lte:25}}) //查询<=25的值


//查询 age >= 12 并且 age <= 20
// db.table.find({"age":{$lte:20,$gte:12}}) //查询<=25的值

//查询 username 中包含 zhang 的数据， 模糊查询
// db.table.find({"username":/zhang/}) 

//查找列
//db.table.find({age:{$lt:20}},{"age":1})

// 1 升序（从低到高）、  -1 降序（从高到底）
// db.table.find({age:{$gt:10}},{"age":1}).sort({"age":1})
// db.table.find({age:{$gt:10}},{"age":1}).sort({"age":-1})

//查询前几条数据
// db.table.find({age:{$gt:10}},{"age":1}).sort({"age":1}).limit(2)

//查询 2 条后的数据
// db.table.find({age:{$gt:10}},{"age":1}).sort({"age":1}).skip(2).limit(2)
