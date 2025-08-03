const jwt = require('jsonwebtoken');
const create_jwt_token = (payload, expiry_time)=>{
return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : expiry_time});
}

const verify_access_token = (token)=>{
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

const verify_refresh_token = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET,(err, refresh_user)=>{
            if(err){
                return reject({success : false, message : err})
            }

            console.log('refresh token user----->', refresh_user);
            return resolve({refresh_success : true, refresh_message : 'Refresh token valid', refresh_user : refresh_user})
        })
    })
}

module.exports = {create_jwt_token, verify_access_token, verify_refresh_token}