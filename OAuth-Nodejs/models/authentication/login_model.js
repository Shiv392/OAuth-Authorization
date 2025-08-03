const bcrypt = require('bcrypt');
const { create_jwt_token } = require('../../services/jwt-service');
const {mysql_connection} = require('../../db/db_connection') // assuming this is your MySQL connection

const LoginModel = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const search_query = `SELECT * FROM user WHERE email = ?`;

    mysql_connection.query(search_query, [email], (err, user) => {
      if (err) {
        return reject({
          success: false,
          message: err.message || 'Database error',
        });
      }

      if (!user || user.length === 0) {
        return resolve({
          success: false,
          message: 'User not found',
          not_found: true,
        });
      }

      const foundUser = user[0];
      const hashpassword = foundUser.password || '';

      bcrypt.compare(password, hashpassword)
        .then((match) => {
          if (!match) {
            return resolve({
              success: false,
              message: 'Password is incorrect',
              user: [],
            });
          }

          delete foundUser.password;

          const refresh_token = create_jwt_token(
            { name: foundUser.name, email: foundUser.email, id: foundUser.id },
            '720h'
          );
          const access_token = create_jwt_token(
            { email: foundUser.email, id: foundUser.id },
            '24h'
          );

          return resolve({
            success: true,
            message: 'Login successful',
            user: foundUser,
            access_token,
            refresh_token,
          });
        })
        .catch((compareErr) => {
          return reject({
            success: false,
            message: compareErr.message || 'Password check failed',
            badrequest: true,
          });
        });
    });
  });
};

module.exports = { LoginModel };
