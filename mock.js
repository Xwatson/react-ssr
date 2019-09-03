let express = require('express')
let app = express()


app.get('/api/list',(req,res)=>{
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.json({
        code:0,
        list:[
            { name:'测试数据1', id:1},
            { name:'测试数据2', id:2},
            { name:'测试数据3', id:3},
            { name:'测试数据4', id:4},
        ]    
    })
})

app.listen('3002',()=>{
    console.log('mock成功')
})