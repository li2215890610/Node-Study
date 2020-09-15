var fs = require("fs");

//读取文件内容
const stream = fs.createReadStream("./data/input.txt")

let count = 0;
let str = '';
stream.on("data",(data)=>{
  console.log(data);
  str += data
  count++;
})
stream.on('end',()=>{
  console.log(str)
  console.log(count);
})

stream.on('end',()=>{
  console.log(str)
  console.log(count);
})

stream.on('error',(err)=>{
  console.log(err)
  console.log(count);
})