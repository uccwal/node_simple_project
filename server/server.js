const express = require("express");
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "127.0.0.1",
    user : "root", //mysql의 id
    password : "0000", //mysql의 password
    database : "nodedata", //사용할 데이터베이스
    port: 3306
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.post("/idplz", (req,res)=>{
    const test = req.body.test;
    // console.log(req.body);
    connection.query("INSERT INTO test (test_body) values (?)",[test],
        function(err,rows,fields){
            if(err){
                console.log("실패");
                // console.log(err);
            }else{
                console.log("성공");
                // console.log(rows);
            };
        });


});

app.post("/insert", (req,res)=>{
    const { name, gender, number, code } = req.body;
    // console.log(req.body);
    connection.query("INSERT INTO sample (name, gender, number, code) values (?, ?, ?, ?)",[
        name, gender, number, code
        ],
        function(err,rows,fields){
            if(err){
                console.log("실패");
                // console.log(err);
            }else{
                console.log("성공");
                // console.log(rows);
            };
        });


});


app.get("/list", (req,res)=>{

    // console.log(req.body);
    connection.query("SELECT * FROM sample",
        function(err,rows,fields){
            if(err){
                console.log("실패");
                // console.log(err);
            }else{
                console.log("성공");
                console.log(rows);
                res.status(200).json(rows);
            };
        });


});


app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})