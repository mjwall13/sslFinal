"use strict"
var express= require("express");
var AWS = require("aws-sdk");
var app=express();
var router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

router.get("/form",function(req,res){
var html ="<label for='email'>Email:</label><input type='email' id='email' name='email'><label for='pwd'>Password:</label><input type='password' id='pwd' name='pwd'>"; 
res.send(html);
})

router.post("/awsdata",function(req,res){
var email = req.boddy.email; 
var password = req.body.password;
request("https://ixjc3wvsck.execute-api.us-east-2.amazonaws.com/form",{json:true},(err,response,body)=>{
if(err){return console.log(err)};
if(body.Count>0){ 
console.log('success!');
}else{ 
console.log('err!');
}
})
})
app.use("/",router);
app.listen("8080");



















































