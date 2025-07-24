const {mysql_connection} = require('../../db/db_connection.js');
const bcrypt = require('bcrypt');

const LoginModel = ({email,password})=>{
    return new Promise((resolve,reject)=>{
     const search_query = `select * from user where email = ?`;
     mysql_connection.query(search_query,[email],(err,user)=>{
        if(err){
            return reject({
                success : false,
                message : err
            })
        }

        if(user.length==0){
            return resolve({
                success : false,
                message : 'User not found',
                not_found : true
            })
        }

        console.log('user---->',user[0]);
        const hashpassword = user[0].password || '';

        bcrypt.compare(password,hashpassword,Number(process.env.BCRYPT_SALT_KEY),(hasherr,match)=>{
            if(hasherr){
                return reject({
                    success : false,
                    message : hasherr
                })
            }

            if(!match){
                return resolve({
                    success : false,
                    message : 'Password is wrong'
                })
            }

            return resolve({
                success : true,
                message : 'Login Successfull'
            })
        })

     })
    })
}

module.exports={LoginModel};