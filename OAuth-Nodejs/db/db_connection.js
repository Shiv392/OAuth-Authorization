const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const mysql_connection = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password : process.env.DATABASE_PASSWORD,
    user: process.env.DATABASE_USER
})

module.exports={mysql_connection}