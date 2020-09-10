//事件 
var events = require("events");

var eventEmitter = new events.EventEmitter();

//绑定事件
eventEmitter.on("node1",function () {
  console.log('node1进来了');
  eventEmitter.emit("node2")
})

//监听事件 
setTimeout(function (params) {
  eventEmitter.emit("node1")
  // console.log(eventEmitter)
}, 3* 1000)

eventEmitter.on("node2",function () {
  console.log('node2进来了');
  // console.log(eventEmitter)
})



console.log(eventEmitter)


//从上到下依次执行