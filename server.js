const express = require('express');
const path = require('path');
const app =  express();
app.use(express.urlencoded({extended: true})) 

const mongoose = require('mongoose');

app.use('/public', express.static('public'));  //public 폴더를 쓸 것이다.
require('dotenv').config(); //env 파일을 사용할 것이다.

const http = require('http').createServer(app);

// const MONGODB_URL = "mongodb+srv://admin:11379@rbfod@cluster0.ajx3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var db;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err, client) => {
    if(err) { 
        console.log(err)
    } else {
        console.log('Connected DB Successfully');
        // db = client.db('testdb'); //todoapp 이라는 database폴더에 연결

        http.listen(process.env.PORT, function () {
            console.log('listening on 8080')
        });
    }
})

app.use(express.static(path.join(__dirname, 'ex-react-project/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/ex-react-project/bulid/index.html'));
});

//1. express 라이브러리 설치 npm init() -> package.json 설치
//2. npm install express
//3. nodemon 설치
//4. proxy 사용하여 실시간 개발과정 업데이트해보기
//5. pwa 로 react project 만들기