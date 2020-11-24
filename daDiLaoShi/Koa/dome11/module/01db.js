
var MongoClient = require('mongodb').MongoClient;

var Config = require('./config.js');

class Db {


  static getInstance() {   /* 单例类  多次new 实例化不共享的问题*/

    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }

  constructor() {

    this.dbClient = ''; /* 储存 DB 对象 */
    this.connect();   /* 实例化的时候就连接数据库 */

  }

  connect() {  /*连接数据库*/

    return new Promise((resolve, reject) => {
      if (!this.dbClient) {         /* 解决多次连接数据库的问题 */
        MongoClient.connect(Config.dbUrl,{
          useNewUrlParser:true,
          useUnifiedTopology: true
        },(err, client) => {

          if (err) {
            reject(err)
          } else {
            this.dbClient = client.db(Config.dbName);
            resolve(this.dbClient)
          }
        })

      } else {
        resolve(this.dbClient);
      }


    })

  }

  find(collectionName, json) {

    return new Promise((resolve, reject) => {

      this.connect().then((db) => {

        var result = db.collection(collectionName).find(json);

        result.toArray(function (err, docs) {

          if (err) {
            reject(err);
            return;
          }
          resolve(docs);
        })

      })
    })
  }
  update() {

  }
  insert() {


  }
}


module.exports = Db.getInstance();
