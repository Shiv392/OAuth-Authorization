const {LoginModel} = require('../../models/authentication/login_model');
const {get_status_code} = require('../../services/common-service');

const LoginController = async(req,res)=>{
try{
 const {success,message,not_found,user,access_token, refresh_token} = await LoginModel(req.body);
 if(not_found){
    return res.status(404).json({
        success : false,
        message : message
    })
 }

 if(!success){
    return res.status(403).json({
        success : success,
        message : message
    })
 }

 res.cookie('auth_token',access_token,{
   httpOnly : true,
   maxAge : 24 * 60 * 60 * 1000 //one day 
 });
 res.cookie('refresh_token',refresh_token,{
    httpOnly : true,
    maxAge : 30*24*60*60*10000 //30 day
 })
 return res.status(200).json({
    success : true,
    message : message,
    user : user,
    auth_token : access_token
 })
}
catch(err_data){
    console.log('err--->',err_data);
    return res.status(get_status_code(err_data)).json({
        success : err_data.success,
        message : err_data.message
    })
}
}
module.exports={LoginController};