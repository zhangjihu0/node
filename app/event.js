var EventEmitter = require('events');
var util = require('util');
var events = new EventEmitter;
// 给对象events 注册click事件
// 当click事件发生的时候执行对应的回调函数

function Girl(){
  this.age =15;
  this.name='王萌';
}
//on,emit 都是events 原型上的方法；
util.inherits(Girl,EventEmitter);
Gril.prototype = new EventEmitter();
var girl = new Girl();
girl.on('hungry',function () {
  console.log('吃饭')
})
girl.on('sad',function () {
  console.log('商场买东西去')
})
// 只是执行一次；
girl.once('sad',function () {
  console.log('商场买东西去')
})
girl.removeListener('hungry',function () {
  console.log('商场买东西去')
})
girl.emit('hungry');
girl.emit('sad');
events.addListener('click',function(things){
  console.log('click'+things);
  
})
//发射事件click
events.emit('click');
events.emit('click','宝宝');
