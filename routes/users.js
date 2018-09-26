var express = require('express');
var router = express.Router();
//引入数据库模块
const connection =require('./conn');
//调用连接方法
connection.connect(()=>{
  console.log('数据库连接成功')
      
})
// 接受添加账号的数据
router.post('/userAdd',(req,res)=>{
   //接受前端账号数据
   let {username,password,group}=req.body;


})


module.exports = router;
