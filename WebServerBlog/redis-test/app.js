const redis = require("redis");

//重启客户端 
                                      //端口 连接地址
const redisClient = redis.createClient(6379,'127.0.0.1',)

redisClient.on('error',(e)=>{
  console.log(e);
})

//测试
redisClient.set('myname','zhansan2', redis.print)
redisClient.get("myname",(err,data)=>{
  if (err) {
    console.error(err);
    return
  }
  console.log('val',data );

  //退出
  redisClient.quit()
})