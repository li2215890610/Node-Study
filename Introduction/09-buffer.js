//批量输出26个英文字母
const buf = Buffer.alloc(26);


for (let index = 0; index < 26; index++) {
  buf[index] = index + 97;  //
}

console.log(buf)
console.log(buf.toString())