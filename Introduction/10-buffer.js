//Buffer 转换JSON对象

//返回一个被array的值。初始化之后的新Buffer实例
const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5])
const json = JSON.stringify(buf)

console.log(buf)
console.log(json)
console.log(JSON.parse(json).data)