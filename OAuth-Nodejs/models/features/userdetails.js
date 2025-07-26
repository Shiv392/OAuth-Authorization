const {mysql_connection} = require('../../db/db_connection');
const get_user_details = (id)=>{
return new Promise((resolve,reject)=>{
    const select_user_query = `select name,email,profile from user where id =?`;
    mysql_connection.query(select_user_query,[id], (err,user)=>{
        if(err){
            return reject(err);
        }
        
        console.log('user info------>', user[0]);
        return resolve({success : true, user : user[0]});
    })
})
}
module.exports={get_user_details}