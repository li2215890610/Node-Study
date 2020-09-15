var fs = require("fs");
let str = '';
//写入文件
for (let i = 0; i < 200; i++) {
  str += `我是从数据库执行的${i}`;
}

//创建一个可以写入的流，写入到文件output.txt
const createStream = fs.createWriteStream("./data/output.txt");

//写入文件 
createStream.write(str);

//设置编码
createStream.end()

//标记写入文件完成
createStream.on('finish',()=>{
  console.log("写入完成")
})

// 处理事件
