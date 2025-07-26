const jwt = require('jsonwebtoken');
const create_jwt_token = (payload, expiry_time)=>{
return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : expiry_time});
}

const verify_jwt_token = (token)=>{
    
}

module.exports = {create_jwt_token}