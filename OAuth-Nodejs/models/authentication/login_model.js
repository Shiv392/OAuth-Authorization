const { mysql_connection } = require('../../db/db_connection.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {create_jwt_token} = require('../../services/jwt-service.js')

const LoginModel = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        const search_query = `select * from user where email = ?`;
        mysql_connection.query(search_query, [email], (err, user) => {
            if (err) {
                return reject({
                    success: false,
                    message: err
                })
            }

            if (user.length == 0) {
                return resolve({
                    success: false,
                    message: 'User not found',
                    not_found: true
                })
            }

            console.log('user---->', user[0]);
            const hashpassword = user[0].password || '';
            const {name,email,id} = user[0];
            delete user[0].password;

            bcrypt.compare(password, hashpassword).then(match => {
                console.log('match--->', match)
                if (!match) {
                    return resolve({
                        success: false,
                        message: 'Password is wrong',
                        user : []
                    })
                }

                const refresh_token = create_jwt_token({name : name, email : email, id : id}, '720h');
                const access_token = create_jwt_token({email : email, id : id }, '24h');

                return resolve({
                    success: true,
                    message: 'Login Successfull',
                    user : user[0],
                    access_token : access_token,
                    refresh_token : refresh_token
                })
            }).catch((hasherr) => {
                    if (hasherr) {
                        return reject({
                            success: false,
                            message: hasherr.message,
                            badrequest: true
                        })
                    }
                })

        })
    })
}

module.exports = { LoginModel };