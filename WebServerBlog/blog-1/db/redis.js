const redis = require("redis");
const { REDIS_CONF} = require("../conf/db");

//重启客户端 
//端口 连接地址
const redisClient = redis.createClient(REDIS_CONF.prot,REDIS_CONF.host)

redisClient.on('error',(e)=>{
  console.log(e);
})
                                      

function set(key,value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  redisClient.set(key,value, redis.print)
}

function get(key) {
  return new Promise((resolve,reject)=>{

    redisClient.get(key,(err,data)=>{
      if (err) {
        reject(err);
        return
      }
      if (!key) {
         resolve(null)
         return
      }
      
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(data)
      }
      
    })
  })
}

module.exports = {
  get,
  set
}