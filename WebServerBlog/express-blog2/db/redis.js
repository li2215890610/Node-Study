const redis = require("redis");
const { REDIS_CONF} = require("../conf/db");

//重启客户端 
//端口 连接地址
const redisClient = redis.createClient(REDIS_CONF.prot,REDIS_CONF.host)

redisClient.on('error',(e)=>{
  console.log(e);
})
                                      
module.exports = redisClient