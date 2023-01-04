const e = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql2')

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  port:3306,
  password:'Pass@5413',
  database:'patheya12'
})

connection.connect((error)=>{
  if(error){
    console.error(error)

  }else{
    console.log('connected to the databse ')
  }
})

// for getting all the data from the databse
connection.query('SELECT * FROM patheya12.student', (error,result)=>{
  if(error){
    console.error(error)
  }
  else{
    console.log(result)
  }
})

// to get specific data into database 
connection.query('SELECT * FROM patheya12.student where name="sunil"',(error,result)=>{
  if(error){
    console.error(error)
  }
  else{
    console.log(result)
  }
})

// for update purpose
connection.query('UPDATE patheya12.student SET name = "kumarr"  WHERE id = "2"',(error,result)=>{
  if(error){
    console.error(error)
  }
  else{
    console.log(result)
  }
})

// for delet purpose
connection.query('DELETE FROM patheya12.student WHERE id ="3"',(error,result)=>{
  if(error){
    console.error(error)
  }
  else{
    console.log(result)
  }
})

// for inserting purpose
connection.query('INSERT INTO patheya12.student (id,name,job_role,salary) VALUES (5,"tcss","deve","30K")',(error,result)=>{
  if(error){
    console.error(error)
  }
  else{
    console.log(result)
  }
})



module.exports = router;
