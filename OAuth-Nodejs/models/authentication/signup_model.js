const {mysql_connection} = require('../../db/db_connection');
const bcrypt = require('bcrypt');

const SignupModel = ({name, email, password})=>{
    return new Promise((resolve,reject)=>{
     const search_query = `select * from user where email = ?`;
     mysql_connection.query(search_query,[email],(err,user)=>{
        if(err){
            return reject({success : false, message : err});
        }

        if(user.length!=0){ //user allready present
          return resolve({
            success : false,
            message : 'User already exists'
          })
        }

       bcrypt.hash(password,Number(process.env.BCRYPT_SALT_KEY),(hasherror, hashpassword)=>{
        if(hasherror){
            return reject({
                success : false,
                message : hasherror
            })
        }

        const add_user_query = `insert into user(name, email, password) values (?,?,?)`;
        mysql_connection.query(add_user_query,[name,email,hashpassword],(addusererr)=>{
            if(addusererr){
                return reject({
                success : false,
                message : addusererr
                })
            }

            return resolve({
                success : true,
                message : 'New user has been added successfully'
            })
        })
       })

     })
    })
}

module.exports = {SignupModel}