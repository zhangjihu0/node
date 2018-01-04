/**
 * fs是实现文件的读写操作 默认返回是buffer
 */

//读文件

//同步
var fs = require('fs');
var content = fs.readFileSync('./1.txt',{encoding:'utf8'});
console.log('sync',content)
//所有的异步方法一定要晚于同步方法执行
fs.readFile('./1.txt',{encoding:'utf8'},function (err,data) {
  console.log('await',data)
})

//写文件

var result = fs.writeFileSync('./1.text','china good sound',{encoding:'utf8'})
console.log('sync',result)
//回调函数第一个参数永远是error对象，没有错误error是null
fs.writeFile('./1.text','china good sound',{encoding:'utf8'},function (err,data) {
  console.log(err)
})
fs.readFile('./1.text',{encoding:'utf8'},function (err,data) {
  console.log(data)
})
//创建文件目录
// var mkdirSycn = fs.mkdirSync('a');//同步
// fs.mkdir('./a/a/b',function (err) {
//   console.log(err)
// })
//异步
//读取文件下的所有文件，结果是个数组
fs.readdir('./a/a',function (err,files) {
  console.log('a',files);
  files.forEach(function(file) {
    fs.stat('./a/'+file,function (err,stat) {
      if(stat.isFile()){
            fs.readFile('./a/a/'+file,{encoding:'utf8'},function(err,data) {
            console.log('aa',data)
          })
      }else if(stat.isDirectory()){
        console.log('这是一个目录')
      }
    })
  })
})
// 获取文件的详情
fs.stat('./a',function (err,stat) {
  console.log(stat)
})
fs.exists('./a',function (exists) {
  console.log(exists)//true,false
})
console.log('dirname',__dirname+'\\a')//
console.log('filename',__filename)
