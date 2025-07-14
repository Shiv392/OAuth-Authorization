const mysql = require('mysql');

const mysql_connection = mysql.createConnection({
    host:'localhost',
    database:'Oauth_implement',
    password : 'Shiv@3923',
    user: 'root'
})

module.exports={mysql_connection}