console.log(Buffer)
// Buffer是存放二进制数据的；
//Buffer是全局对象即global.Buffer 
// 固定内存分配 的全局对象，也就是所放到缓存区中的字节数要提前确定
var buf1 = new Buffer(6);
//指定buffer的长度