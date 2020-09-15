/**
 * 创建 多级目录
 * 
 * https://www.npmjs.com/package/mkdirp
 */

const mkdirp = require('mkdirp')

mkdirp('./upload').then((made)=>{
  console.log(`made directories, starting with ${made}`)
})

// mkdirp('./uploadsss')