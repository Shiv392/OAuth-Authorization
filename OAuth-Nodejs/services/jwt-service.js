const jwt = require('jsonwebtoken');
const create_jwt_token = (payload, expiry_time)=>{
return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : expiry_time});
}

const verify_jwt_token = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET,(err, user)=>{
            if(err){
                return resolve({success : false, message : 'Invalid or expired token', unauthorized : true});
            }
            
            console.log('jwt user----->',user);
            return resolve({success : true, message : 'Token is valid', user : user});
        })
    })
}

module.exports = {create_jwt_token, verify_jwt_token}