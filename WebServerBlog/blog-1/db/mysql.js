let mysql = require("mysql");
const { MYSQL_CONF} = require("../conf/db");

// 创建连接对象
const concatDataBase = mysql.createConnection(MYSQL_CONF);

//开始链接
concatDataBase.connect()

//统一执行sql的函数
function exec(sql) {
  
  return new Promise((resolve,reject)=>{
    concatDataBase.query(sql,(err,result)=>{
      if (err) {
        console.log(err);
        reject(err)
        return
      }
      resolve(result)
    })
  })
}
// 关闭
// concatDataBase.end()

module.exports = {
  exec,
  escape: mysql.escape
}