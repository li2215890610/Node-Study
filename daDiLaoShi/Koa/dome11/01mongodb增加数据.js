const MongoClient = require('mongodb').MongoClient;

// Connection URL
const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'koa';

MongoClient.connect(dbUrl,(err,client)=>{
  if (err) {
    console.log(err);
    return
  }

  const db = client.db(dbName);
  
  // /**
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
  // **/

})