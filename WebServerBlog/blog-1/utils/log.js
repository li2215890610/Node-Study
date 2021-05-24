const fs = require('fs');
const path = require('path');

const writeLog = (writeStream, log) =>{
  writeStream.write(`${log}\n`)
}

//生成 Write Stream
function createWriteStream(fileName) {

  const fullFileName = path.join(__dirname,'../','logs/',fileName)
  const writeStream = fs.createWriteStream(fullFileName,{
    flags:'a', //w   a追加写入 w 覆盖写入
  })
  return writeStream
}

const accessWriteStream = createWriteStream(`access.log`)


//写入访问日志
function access(log) {
  writeLog(accessWriteStream,log)
}


module.exports = {
  access
}