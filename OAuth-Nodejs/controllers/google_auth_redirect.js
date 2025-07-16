const google_auth_redirect = (req,res)=>{
const redirect_uri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`;

res.redirect(redirect_uri);
}

module.exports={google_auth_redirect};