/***
app.get('/', function (req, res) {
  res.send('hello world')
})
 */

let G = { };

const app = (req,res)=>{
  console.log('init app');
  if ('/login') {
    G['/login'](req,res);//
  }
}

app.get = (str,cb)=>{
  // 注册方法 
  console.log('1');
  G[str] = cb;

  /**

    G['/login'] = (req,res)=>{

    }
  */
}

//执行方法
app.get('/login',function (_,res) {
  console.log('___get___');
})

setTimeout(()=>{
  app("req","res")
}, 2* 1000)