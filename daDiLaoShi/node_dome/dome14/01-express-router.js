
/***
app.get('/', function (req, res) {
  res.send('hello world')
})
 */

const app = ()=>{
  console.log('init app');
}

app.get = ()=>{
   console.log('get');
 }

app.post = ()=>{
  console.log('post');
}

app.get()