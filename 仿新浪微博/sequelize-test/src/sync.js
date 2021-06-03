const seq = require('./seq');
require('./model');


// 测试连接
seq.authenticate().then((data)=>{
  console.log('haole');
}).catch((err)=>{
  console.log(err);
})

//执行同步
//force: true 如果数据库中存在那个表 系统会把她删了
seq.sync({ force: true}).then(()=>{
  console.log('执行成功');
  process.exit()
})