//输出当前工作目录；根目录
console.log(process.cwd());
//切换到上级工作目录
process.chdir('..');
console.log(process.cwd());
/**
 * {
 *    res:17,473,536,常驻内存 17m
 *    headTotal: 7,524,096, 堆的总内存 7m 1.4g最大容量；
 *    heapUsed: 4,006,384,堆已经使用的内存量 4m
 * }
*/
console.log(process.memoryUseage());