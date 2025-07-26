const { verify_jwt_token } = require('../services/jwt-service');
const { get_status_code } = require('../services/common-service');

const verify_authentication = async (req, res, next) => {
  const auth_token = req.headers.auth_token;
  if (!auth_token) {
    return res.status(403).json({
      success: false,
      message: 'Unauthorized user'
    });
  }

  const { success, user, message, unauthorized } = await verify_jwt_token(auth_token);
  if (!success) {
    return res.status(get_status_code({ unauthorized })).json({
      success: false,
      message
    });
  }

  req.user = user;
  next();
};

module.exports = verify_authentication;
