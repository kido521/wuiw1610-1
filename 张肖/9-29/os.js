var os= require('os');
var mg =os.totalmem()/(1024*1024*1024)
// console.log(os)
// 返回操作系统的主机名。
// console.log(os.hostname())

// 返回操作系统名
// console.log(os.type())

//返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
// console.log(os.arch())

// 返回操作系统的发行版本。
// console.log(os.release())

//返回操作系统运行的时间，以秒为单位。
// console.log(os.uptime())

// 返回一个包含 1、5、15 分钟平均负载的数组
// console.log(os.loadavg())

// 返回系统内存总量，单位为字节。
// console.log(os.totalmem())

// 返回操作系统空闲内存量，单位是字节
// console.log(os.freemem())

// 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
//     console.log(os.cpus())

// 获得网络接口列表。
// console.log(os.networkInterfaces())
