const {verify_jwt_token} = require('../services/jwt-service');
const {get_status_code } = require('../services/common-service')

const user_middlware = async(req,res,next)=>{
const auth_headers = req.headers.auth_header;
if(!auth_headers){
    req.user = null;
    next();
}

const {success, unauthorized, user, message } = await verify_jwt_token(auth_headers);
if(!success){
      return res.status(get_status_code({ unauthorized })).json({
      success: false,
      message
    });  
}

req.user = user;
next();
}
module.exports=user_middlware