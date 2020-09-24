var http = require("http");
var app = require("./module/route");
var ejs = require("ejs");
var queryString = require("querystring");
const { MongoClient,ObjectID } = require('mongodb');


//定义连接db地址
let dbUrl = "mongodb://127.0.0.1:27017";
//定义操作的数据库
const dbName = "itying";

//实例化 MongoClient
// useUnifiedTopology [https://blog.csdn.net/qq_45515863/article/details/103245010]
// const client = new MongoClient(dbUrl, { useUnifiedTopology: true });

http.createServer(app).listen(10086);

//设置静态资源目录
//在ejs文件里面就可以使用 static文件里面的资源
app.static("static");

app.get('/', (_, res) => {

  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log("数据库已创建!");

    //查询数据库名称
    const db = client.db(dbName);
    //数据库表名称
    const tableName = "user";

    db.collection(tableName).find({
    }).limit(5).toArray((err, result) => {
      if (err) {
        console.log(err);
        return
      }

      client.close();
      console.log("数据库已关闭");

      ejs.renderFile("./views/index.ejs", {
        list: result
      }, (_, data) => {
        res.writeHead(200, {
          "Content-Type": "text/html;charset=utf-8"
        })

        console.log(result);
        res.end(data)
      })

    })

  })

})

app.get('/register', (_, res) => {

  ejs.renderFile("./views/form.ejs", {
  }, (_, data) => {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    })
    res.end(data)
  })
})


app.post('/doRegister', (req, res) => {

  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log("数据库已创建!");

    //查询数据库名称
    const db = client.db(dbName);
    //数据库表名称
    const tableName = "user";
    function findDb(cb) {
      db.collection(tableName).find({
        username: req.body.username
      }).toArray((err, result) => {

        if (err) {
          console.log(err);
          return
        }
        cb(result)
      })
    }

    //如果存在 update，不存在 insert
    findDb((result) => {
      console.log(result);
      if (result.length) {
        updateOne()
      } else {
        console.log('_____');
        insertOne()
      }
    })

    function insertOne() {
      db.collection(tableName).insertOne(req.body, (err, _) => {
        if (err) {
          console.log(err);
          return
        }
        closeDb()
      })
    }

    function updateOne() {
      db.collection(tableName).updateOne({
        username: req.body.username
      }, {
        $set: {
          age: req.body.age
        }
      }, (err, _) => {
        if (err) {
          console.log(err);
          return
        }
        closeDb()
      })
    }

    function closeDb() {
      client.close();
      console.log("数据库已关闭");

      res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
      })
      res.end("增加数据成功")
    }
  })
})


app.post('/delete', (req, res) => {

  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log("数据库已创建!");

    //查询数据库名称
    const db = client.db(dbName);
    //数据库表名称
    const tableName = "user";
    function findDb(cb) {
      db.collection(tableName).find({
        username: req.body.username
      }).toArray((err, result) => {

        if (err) {
          console.log(err);
          return
        }
        cb(result[0])
      })
    }

    //如果存在 update，不存在 insert
    findDb((result) => {
      console.log(result);
      if (!result) {
        closeDb("删除失败，数据不存在")
        return 
      }
      db.collection(tableName).deleteOne({
        _id: ObjectID(result._id)
      },(err,_)=>{
        if (err) {
          console.log(err);
          return
        }

        closeDb("删除成功")
      })
    })

    function closeDb(message) {
      client.close();
      console.log("数据库已关闭");

      res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
      })
      res.end(message)
    }
  })
})

console.log('server http run 10086');