const fs = require('fs');
const path = require("path");
const readline = require("readline");

//文件名
const fileName = path.join(__dirname,'../','logs/','access.log')

//创建 read stream 对象
const readStream = fs.createReadStream(fileName);

//创建 readline  对象

const rl = readline.createInterface({
  input: readStream
})

let chromeNum = 0;
let sum = 0;


rl.on('line',(lineData)=>{
  if (!lineData) {
    return 
  }

  sum++

  const arr = lineData.split(" -- ");
  if (arr[2] && arr[2].indexOf("Chrome") > 0) {
    chromeNum++
  }
})

rl.on("close",()=>{
  console.log('chrome 占比',chromeNum / sum);
})