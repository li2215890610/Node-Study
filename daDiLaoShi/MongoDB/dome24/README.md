#### P24 24、【MongoDb高级】 MongoDB多表关联查询、aggregate聚合管道 $project 、$match 、$group


对表中的数据变换操作，得到我们需求数据

实际项目中：表关联查询、数据的统计

##### $project
```
//查询表里面的数据，只查询oreder_id、total_price
db.tablename.aggregate([{
  $project:{
    oreder_id: 1,
    total_price: 1
  }
}])
```

##### $match
```
//查询表里面的数据，只查询oreder_id、total_price,并且 total_price>=90 的数据
db.tablename.aggregate([{
  $project:{
    oreder_id: 1,
    total_price: 1
  }
},{
  $match:{
    "total_price":{$gte:90}
  }
}])
```

##### $group
```
//查询表里面的数据，只查询oreder_id里面的 total_price 总额是多少
db.tablename.aggregate([{
  $group:{
    _id: "$oredr_id",
    total: {$sum: "$total_price"}
  }
}
])
```


##### $sort
```

// $sort == -1 降序
// $sort == 1 升序
db.tablename.aggregate([{
  $project:{
    oreder_id: 1,
    total_price: 1
  }
},{
  $match:{
    "total_price":{$gte:90}
  }
},{
  $sort:{
    "total_price":-1 
  }
}])
```


##### $limit
```
// $sort == -1 降序
// $sort == 1 升序
// $limit 返回几条数据
db.tablename.aggregate([{
  $project:{
    oreder_id: 1,
    total_price: 1
  }
},{
  $match:{
    "total_price":{$gte:90}
  }
},{
  $sort:{
    "total_price":-1 
  }
},{
  $limit: 10
}
])
```

##### $skip
```
// $sort == -1 降序
// $sort == 1 升序
// $limit 返回几条数据
// $skip 跳过几条数据
db.tablename.aggregate([{
  $project:{
    oreder_id: 1,
    total_price: 1
  }
},{
  $match:{
    "total_price":{$gte:90}
  }
},{
  $sort:{
    "total_price":-1 
  }
},{
  $skip: 9
},{
  $limit: 10
}
])
```

##### $lookup
```
//组合
这样的数据
[
  {
    Order_id:"1",
    Table_no:"oooooo",
    Items:[
      {
        Title:"鼠标",
        Price:20
      },
      {
        Title:"键盘",
        Price:20
      },
    ]
  },
  {
    Order_id:"2",
    Table_no:"oooooo",
    Items:[
      {
        Title:"鼠标",
        Price:20
      },
      {
        Title:"键盘",
        Price:20
      },
      {
        Title:"显示屏",
        Price:20
      },
    ]
  },
]
```

```
// tablename 与 order_item_tablename 相关联
//
db.tablename.aggregate([
  {
    $lookup:{
      from: "order_item_tablename",
      localField: "Order_id", //主表信息id
      foreignField: "Order_id", //关联表信息id
      as: "Items"
    }
  },{
    $match:{
      "all_price":{
        $gte:90
      }
    }
  }
])

//  localFieid字段 为 tablename里面的字段
//  foreignFieid 为 order_item_tablename 里面的字段 
//  order_item_tablename 查询出来的数据,放在 as 数据里面
//  $match 查询的是 tablename 里面的字段
```
