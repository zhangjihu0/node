var util = require('util');
function Parent() {
  this.name='parent'
}
Parent.prototype.say= function () {
  console.log(this.name)
}
function Child() {

}
//子类可以继承父类原型上的方法；
// Child.prototype = new Parent.prototype();
util.inherits(Child,Parent);
var child = new Child
child.say();
// 对象转化为字符串只输出constructor()中的值 Child {name:'child'}
console.log(util.inspect(child))
Object.defineProperties(obj,'age',{
  
})