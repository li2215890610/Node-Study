var fs = require("fs");

//复制文件
const readStream = fs.createReadStream("./bg.jpg");

const writeStream = fs.createWriteStream("./data/bg1.jpg");

readStream.pipe(writeStream).on("finish",()=>{
  console.log("ok")
})