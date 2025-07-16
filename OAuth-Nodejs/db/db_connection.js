const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const mysql_connection = mysql.createConnection({
    // host : process.env.DATABASE_HOST,
    host : 'localhost',
    // database: process.env.DATABASE_NAME,
    database : 'Oauth_implement',
    // password : process.env.DATABASE_PASSWORD,
    password : 'Shiv@3923',
    // user: process.env.DATABASE_USER
    user : 'root'
})

module.exports={mysql_connection}