const axios = require('axios');
const { OAuthorization } = require('../../models/oauthorization/oauthorization');
const { get_google_tokens, google_user_info } = require('../../services/google_auth_service.js')

const google_callback_redirect = async (req, res) => {
  const { code } = req.query; //we will get this code from the google callback url ----->
  console.log('code---->', code);

  if (!code) {
    return res.status(400).json({
      success: false,
      message: 'missing authorization code'
    })
  }

  try {
    const { access_token, id_token } = await get_google_tokens(code);
    if (!access_token) {
      return res.status(500).json({ success: false, message: 'Failed to get access from google' });
    }

    //now get user_info using this access token --- -->
    const user_info = await google_user_info(access_token);
    console.log('user info data---->', user_info);
    if (!user_info || !user_info.email) {
      return res.status(500).json({ success: false, message: 'Failed to get user information from google' });
    }

    const { success, message, token } = await OAuthorization(user_info);
    if (success) {
      return res.redirect(`http://localhost:8800?token=${token}`);
    }
    else {
      return res.status(500).json({
        success: false,
        message: message
      })
    }
  }
  catch (err) {
    console.error('OAuth error:', err)
    res.status(500).json({
      success: false,
      message: err.message || err
    });
  }

}

module.exports = { google_callback_redirect }