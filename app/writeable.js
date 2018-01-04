var fs = require('fs');
var ws = fs.createWriteStream('1.text',{
  flags:'a', //追加文件并写入 r =read w= write a= append
  start:1, // 从第几个字节开始写入
  highWaterMark:1 //最高水位线是1,缓存区大小
})
var flag= ws.write('d') //向流中写入数据
console.log(flag)//如果返回true就表示能继续写入,就是写入成功
ws.write('a');//向流中写入数据
ws.write('b');//向流中写入数据
ws.on('drain',function(){//数据排干后触发此事件
  console.log('drain');
  write();
})
ws.end('c');//向流中写入数据