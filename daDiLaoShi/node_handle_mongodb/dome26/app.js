const { MongoClient } = require('mongodb');

//定义连接db地址
let dbUrl = "mongodb://127.0.0.1:27017";
//定义操作的数据库
const dbName = "itying";

//实例化 MongoClient
// useUnifiedTopology [https://blog.csdn.net/qq_45515863/article/details/103245010]
const client = new MongoClient(dbUrl, { useUnifiedTopology: true });

client.connect((err) => {
  if (err) throw err;
  console.log("数据库已创建!");

  //查询数据库名称
  const db = client.db(dbName);
  //数据库表名称
  const tableName = "user";

  /**
  //查询数据
  db.collection(tableName).find({
    "age":{ $lt:60, $gt:55 }
  }).toArray((err,data)=>{
    if (err) {
      console.log(err);
      return 
    }

    console.log(data);
    client.close();
    console.log("数据库关闭");
  });
  **/

  /**
  //插入数据
  db.collection("admin").insertOne({
    password:"222",
    username:"ssss1"
  },(err,result)=>{
    //插入失败
    if (err) {
      console.log(err);
      return
    }

    console.log("插入成功");
    console.log(result);
    client.close();
    console.log("数据库关闭");
  })
  **/

  /**
  //更新
  db.collection("admin").updateOne({
    username:"ssss"
  },{
    $set:{
      username:"ssss2",
      password: "ssss2"
    }
  },(err,result)=>{
    //更新成功
    if (err) {
      console.log(err);
      return 
    }

    //更新成功
    console.log(result);
    console.log("更新成功");
    client.close();
    console.log("数据库关闭");
  })
  **/

  /**
   //删除单条数据
  db.collection("admin").deleteOne({
    username:"ssss2",
  },(err, result)=>{
    //删除失败
    if (err) {
      console.log(err);
      return 
    }

    //删除成功
    console.log("删除成功");
    console.log(result);
    client.close();
    console.log("数据库关闭");
  })
  **/
  //删除多条数据

  db.collection("admin").deleteMany({
    username:"zhangsan",
  },(err, result)=>{
    //删除失败
    if (err) {
      console.log(err);
      return 
    }

    //删除成功
    console.log("删除多条数据成功");
    console.log(result);
    client.close();
    console.log("数据库关闭");
  })
});