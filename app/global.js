console.log('log')
console.error('error')
console.warn('warn')

console.time('cost');
for(var i=0;i<10000;i++){

}
console.timeEnd('cost')//计时器总共应用时间

console.log(__filename);//当前的模块文件绝对路径；
console.log(__dirname);//当前的模块文件夹的绝对路径；