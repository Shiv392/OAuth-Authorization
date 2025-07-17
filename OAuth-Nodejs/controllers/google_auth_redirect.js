const google_auth_redirect = (req,res)=>{
    const client_id='500248693783-o4pqe6ln950ulolojesr2t07upro64je.apps.googleusercontent.com';
    const redirect_url = 'http://localhost:8800/auth/google/callback';
const redirect_uri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_url}&response_type=code&scope=email%20profile`;

res.redirect(redirect_uri);
}

module.exports={google_auth_redirect};