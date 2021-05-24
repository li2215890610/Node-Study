module.exports = getPostData = (req) => {
  //原生node 获取post数据
  return new Promise((resolve, reject) => {
      try {
          let str = '';
          req.on('data', (chunk)=> {
            str += chunk;
          })

          req.on('end', ()=> {
            resolve(JSON.parse(str))
          })

      } catch (err) {
          reject(err)
      }

  })

}