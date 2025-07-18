const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const port = 8800;

const {mysql_connection} = require('./db/db_connection.js');
const {google_auth_routes} = require('./routes/google_auth_redirect.js');
const {google_callback_route} = require('./routes/google_callback_redirect.js')


app.use(body_parser.json());
app.use(cors());
app.use(cookie_parser());

app.get('/',(req,res)=>{
    return res.send(`<h1>This is Home Route`);
})

app.use(google_auth_routes);
app.use(google_callback_route);

mysql_connection.connect((err)=>{
    if(err){
        console.log('database connection failed',err);
    }
    console.log('database connection sucessfull')
})

app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
})