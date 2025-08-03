const {verify_access_token, create_jwt_token, verify_refresh_token} = require('../services/jwt-service');

const user_middlware = async(req, res, next)=>{
try{
const auth_token  = req.cookies && req.cookies.auth_token || null;
const refresh_token = req.cookies && req.cookies.refresh_token || null;

console.log('auth token---->',auth_token);
console.log('refresh token------>',refresh_token);

//if request has no refrsh token then login ------------>
if(!refresh_token){
    return res.status(200).json({
        success : true,
        user : null,
        message : 'Login required'
    })
}

//as we have to perform all operation using this auth token 
//so we have to verify this first rather then refresh token ------>
if(auth_token){
const {success, user} = await verify_access_token(auth_token);
if(success && user){
    req.user = user;
    return next();
}
else{ //if auth token has been expired, so create a new token---------->

//first verify the refresh token, if true then create a new auth token -------->
const {refresh_success, refresh_user, refresh_message} = await verify_refresh_token(refresh_token);
if(!refresh_success || !refresh_user){
    return res.status(401).json({
        success : false,
        message : refresh_message || 'Login required'
    })
}

const new_auth_token = create_jwt_token({id : refresh_user.id, email : refresh_user.emial}, 24*60*60*1000);
res.cookie("auth_token",new_auth_token,{
    httpOnly : true,
    maxAge : 24*60*60*1000
});
req.user = refresh_user;
return next();
}
}

const {refresh_success, refresh_user, refresh_message} = await verify_refresh_token(refresh_token);
if(!refresh_success || !refresh_user){
    return res.status(401).json({
        success : false,
        message : refresh_message || 'Login required'
    })
}
//refresh successfull, issue new auth token------>
const new_auth_token = create_jwt_token({id : refresh_user.id, email : refresh_user.emial}, 24*60*60*1000);
res.cookie("auth_token",new_auth_token,{
    httpOnly : true,
    maxAge : 24*60*60*1000
});
req.user = refresh_user;
return next();
}
catch(err){
console.log('user middleware error----->',err);
return res.status(500).json({
    success : false,
    message : err
})
}
}
module.exports=user_middlware