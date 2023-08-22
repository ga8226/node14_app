const app = require('express')();
const navi = require("./api/navi");
const banner = require("./api/banner");
const interview = require("./api/interview");

//const express = require('express');
//const app = express();  한 줄로 합친 코드 위 확인

// 리액트가 요청할 수 있도록 주소생성하기
app.use('/', interview);
app.use('/b', banner);
app.use('/navi', navi);
app.use((req,res)=>{
    res.status(404).sendFile(__dirname+'/frount/public/nopage.html')
})
app.listen(8000,()=>{
    console.log("서버 정상 구동중이니?")
})







