var fs = require('fs');

// fs.createReadStream(path,[options])

// options = {
//  flags ='r',
//  encoding:null,
//  start:'用整数表示文件开始读取字节数的索引位置',
//  end:'用整数表示文件结束读取的字节数的索引位置(包含end位置)',
//  highWaterMark:'最高水位线,停止从底层资源读取当前内部缓冲区最多能存放的字节数。缺省为64kb默认值'取决于内存可分配大小

// }
//1234567890
fs.createReadStream('./1.text',{
  flags:'r',//表示打开之后想干什么，默认为r =read
  // encoding:null//得到的数据是Buffer对象，如果指定编码encoding:utf8
  start:4,//读取字符索引的开始位置
  end:6//读取字节的索引的结束位置
})
fs.setEncoding('utf8');
//可以在创建流之后指定编码
//流是EventEmitter的子类
rs.on('data',function(data){
  console.log(data)
  rs.pause(); //停止触发data事件
})
setTimeout(function(){
  rs.resume();//重新开始触发data事件
},5000)
//读完文件的时候会触发end 事件
rs.on('end',function(){
  console.log('读完了')
})
//当读取文件出错的时候可以监听error事件
rs.on('error',function (error) {
  console.log(error)
})
/**
 * 640k
 * 1.先从文件中读取64k 然后发射 rs.emit('data');
 * 1.再从文件中读取64k,然后发射 rs.emit('data');
 * **/
