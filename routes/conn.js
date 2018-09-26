// 创建数据库连接代码
// 引入mysql
const mysql = require('mysql');
//创建连接
const connection =mysql.createConnection({
   host:'localhost',//主机名
   user :'root', //用户名
   password:'root', //数据库名字
   database:'admin' //数据库名字
});
//暴露在全局
module.exports=connection;