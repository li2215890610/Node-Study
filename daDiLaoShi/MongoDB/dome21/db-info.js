//查看查询时间
// db.tablename.find({"username":"zhangsan"}).explain("executionStats")
// "executionStats.executionTimeMillis" : 530,


//查看当前表有没有索引
//db.tablename.getIndexes()

//创建索引
// db.tablename.ensureIndex({"username":1})

//删除索引
// db.tablename.dropIndex({"username":1})

//设置索引 会让查询速度很快

//复合索引
// db.tablename.ensureIndex({"username":1,age:-1})
//如果你find({"age":20,"username":"zhangsan"}) 这样会命中索引
//如果你单独find({"username":"zhangsan"}) 这样也会命中索引
//如果你单独find({"age":20}) 就不命中索引

//唯一索引 如果设置了age为唯一索引这个字段的值不能重复
// db.tablename.ensureIndex({"age":1},{"unique":true})
