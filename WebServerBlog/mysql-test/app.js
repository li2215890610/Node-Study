const mysql = require("mysql")

//创建连接对象
const concatDataBase = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: `87654321`,
  port: 3306,
  database: "myblog"
});

// 开始连接
concatDataBase.connect()

//执行sql
// const sql = "select * from users;"

// const sql = `update users set realname='李四1' where username='zangsanss';`
const sql = `insert into blogs (title,content,createtime,author) values ('标题B','我是内容B',1614869969453,'lisi');`

concatDataBase.query(sql,(err,result)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log(result);
})

concatDataBase.end()
