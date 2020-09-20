// 查看表里面有多少数据
// db.table.count()

//分页查询 limit 是pageSize，skip 类似于是 page
// page * pageSize - 1 = skip
// db.table.find().skip(0).limit(10);
// db.table.find().skip(1).limit(10);

// or 或者查询 
//查询  ( "username" == "lisi12" || "lisi123") && age == 30 的数据 
// db.table.find({$or:[{ "username":"lisi12"},{"username":"lisi123"}],"age":30})

//查询表中第一条数据
// db.table.findOne()

//统计表中年龄大于 25 的人
// db.table.find({age:{$gt:60}}).count()



//修改数据
//修改 lisi 这条数据
// 如果$set里面的key 存在就修改，不存在就增加
// db.table.update({"username":"lisi"},{$set:{"username":"wangwu",age:50}})

//修改符合条件的所有数据
// db.table.update({"age":30},{$set:{"sex":"1",}},{multi:true})



//删除数据
// 删除 username == lisi 的数据
// db.ta b le.remove({"username":"lisi"})

//删除 age 大于30数据
// db.table.remove({"age":{$gt:30}})

//删除 age 大于30所有数据中的一条数据
// db.table.remove({"age":{$gt:29}},{justOne:true})


