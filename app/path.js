var path = require('path');
//路径拼接部分路径拼接成一个最终路径
console.log('join',path.join(__dirname,'a','b','c'))
//取得绝对路径resolve 
//当前的路径加上a 加上b
//..回到上一级
console.log('dir',__dirname)
console.log('resolve',path.resolve(path.resolve()))
//获取当前路径中的文件名并去掉.js
console.log('basename',path.basename(__filename,'.js'))
// 获取扩展名
console.log('extname',path.extname(__filename));
// 环境变量路径分隔符 : ;
console.log(path.delimiter);

// 目录分割符/ \
console.log(path.sep)