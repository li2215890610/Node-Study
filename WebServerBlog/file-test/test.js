const fs = require('fs');
const path = require('path');

//获取当前目录 __dirname 
const fileName = path.resolve(__dirname,'text.txt');
console.log(fileName);

//读取
// fs.readFile(fileName, function (err, data) {
//   if (err) return console.error(err);
//   //读取数据为 二进制 需要转成字符串
//   console.log(data.toString());
// });


// 写入

fs.writeFile(fileName,'2222222222',{
  flag:'a', //w   a追加写入 w 覆盖写入
},(err)=>{
  if (err) return console.error(err);
})

//判断文件是否存在
console.log(fs.existsSync(fileName));