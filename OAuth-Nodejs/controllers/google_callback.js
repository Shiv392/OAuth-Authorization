const axios = require('axios');
const mysql = require('../db/db_connection.js');

const google_callback_redirect = async(req,res)=>{
    const {code } = req.query; //we will get this code from the google callback url ----->

    try{
      //now call to the google api to get access token using this code ---->
      const token_response = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code'
    });

    //now google will give a token 
    console.log('token response---->',token_response);
    const {access_token,id_token} = token_response.data;

    //now get user_info using this access token --- -->
    const user_info = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo',{
        headers:{
            Authorization: `Bearer ${access_token}`
        }
    });
    console.log('user info---->',user_info);
    }
    catch(err){
    console.error('OAuth error:', err.message);
    res.status(500).send('Auth failed');
    }

}

module.exports = {google_callback_redirect}