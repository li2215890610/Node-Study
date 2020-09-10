

/**
 * 
 * nodejs 的开发语言就是js
 * JavaScript 语言自身只有字符串数据类型，没有二进制数据类型
 * 
 * noedjs有时候会操作一些文件，或者tcp流之类的东西，那么就必须要操作二进制数据
 * 
 * 因此，在nodejs中，有一个Buffer类，它用来创建一个专门存放二进制数据的缓存区
 * 
 * Buffer它相当于是划出了一块自己的内存
 * 
 * 支持 utf-8，base64，acsii 等编码
 */

//创建长度为10的大小
//可以理解为指定内存为10.
const buf = Buffer.alloc(10)

console.log(buf)

//向buf写入内容 
const writeLength = buf.write("1234567891011")
console.log(buf)
console.log("写入的字节数",writeLength)

 
//从内存中读取
console.log(buf.toString())
console.log(buf.toString('utf8',2,4))




