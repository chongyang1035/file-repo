/**
 * Node.js Buffer(缓冲区)JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
   但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
    在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
    每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 */

// const buffer1 = new Buffer("测试一下", "ascii"); // 改用法已经被遗弃
// console.log(buffer1.toString());

const buffer2 = Buffer.from("runoob", "ascii");
console.log(buffer2.toString("hex"));
console.log(buffer2.toString("base64"));
