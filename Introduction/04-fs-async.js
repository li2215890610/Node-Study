var fs = require("fs");

//参数1  读取的文件
//参数2 读取的结果
fs.readFile("text.txt1",function (err,data) {
  if (err) {
    console.log(err);
    return err
  }
  console.log(data);
  console.log(data.toString());
});

console.log('_____________');
console.log('js执行已结束');