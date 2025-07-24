const {LoginModel} = require('../../models/authentication/login_model');

const LoginController = async(req,res)=>{
try{
 const {success,message,not_found} = await LoginModel(req.body);
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

 return res.status(200).json({
    success : true,
    message : message
 })
}
catch(err){
    return res.status(502).json({
        success : false,
        message : err
    })
}
}
module.exports={LoginController};