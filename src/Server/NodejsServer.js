const express=require('express');
var cors = require('cors');
const app=express();
const mysql=require('mysql2');


app.use(cors())

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"12345",
database:"CrudDatabase"
});




app.get('/',(req,res)=>{
    const sqlStatement="Insert into user_details(User_id,full_name,email,phone,address) values ('2','API TEST','test@test.com',435555552,'Test address')";
    db.query(sqlStatement,(err,result)=>{
        if (err) console.log(err);
        res.send('API HIT');
        console.log('Response sent');
    })
    db.end();
})
app.get('/update',(req,res)=>{
    //console.log(req.get('name'));

})
app.listen(3001,()=>{
    console.log('Running on port 3001');
    
})