const {urls} = require('../../constants/google_url');

const google_auth_redirect = (req,res)=>{

const redirect_uri = `${urls.google_auth_account}?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`;

res.redirect(redirect_uri);
}

module.exports={google_auth_redirect};