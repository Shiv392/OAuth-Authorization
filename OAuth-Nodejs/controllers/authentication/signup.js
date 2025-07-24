const {SignupModel} = require('../../models/authentication/signup_model')

const SignupController = async(req,res)=>{
const {name,email,password} = req.body;
if(!name || !email || !password) return res.status(401).json({
    success : false,
    message : 'Name, Email & Password required'
});

try{
 const {success, message} = await SignupModel(req.body);
 if(!success){
    return res.status(403).json({
        success : success,
        message : message
    })
 }
 else{
    return res.status(201).json({
        success : true,
        message : message
    })
 }
}
catch(err){
    return res.status(502).json({
        success : false,
        message : err
    })
}
}
module.exports={SignupController}