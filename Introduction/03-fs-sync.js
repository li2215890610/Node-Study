var fs = require("fs");

// sync同步读取文件 从上往下执行
var data = fs.readFileSync('text.txt');
console.log(data)
console.log(data.toString())
console.log('--------')
console.log('js ----已经执行结束')

//阻塞