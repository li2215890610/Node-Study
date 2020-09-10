var events = require("events");

var eventEmitter = new events.EventEmitter();

//events 这个模块，只有一个对象，events.EventEmitter()它的核心，‘事件触发与监听’

eventEmitter.on("timeout",function () {
  console.log("timeout事件已经被触发")
})

setTimeout(function (params) {
  eventEmitter.emit("timeout")
}, 2 * 1000)