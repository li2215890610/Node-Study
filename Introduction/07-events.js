var events = require("events").EventEmitter
var eventEmitter = new events();

/**
 * 可以用一个emit 触发多个on绑定的方法
 */
 
eventEmitter.on("t1",function (arg) {
  console.log('t1_____',arg);
})

eventEmitter.on("t1",function (_,arg) {
  console.log('t2_____',arg);
}) 

eventEmitter.emit("t1",'这是aaa','这是bbb')