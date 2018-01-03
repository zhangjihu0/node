setTimeout(function(){
  console.log('a')
},1000);
//
//把参数函数放到下一个事件环中执行(顶部)
//Immediate 立即立刻
setImmediate(function(){
  console.log('setImmediate');
})
//放到当前任务列表的尾部
//nextTick
process.nextTick(function(){
  console.log('nextTick1')
  process.nextTick(function(){
    console.log('nextTick2')
    process.nextTick(function(){
      console.log('nextTick3')
    })
  });

})