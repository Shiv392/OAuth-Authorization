const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const port = 8800;

const {mysql_connection} = require('./db/db_connection.js');


app.use(body_parser.json());
app.use(cors());

app.get('/',(req,res)=>{
    return res.send(`<h1>This is Home Route`);
})

mysql_connection.connect((err)=>{
    if(err){
        console.log('database connection failed',err);
    }
    console.log('database connection sucessfull')
})

app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
})