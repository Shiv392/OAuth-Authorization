const { mysql_connection } = require('../../db/db_connection.js');
const jwt = require('jsonwebtoken');

const OAuthorization = ({ id, name, email, picture }) => {
    console.log('id--->', id, 'name--->', name, 'email--->', email, 'picture--->', picture);

    let find_user = {};

    return new Promise((resolve, reject) => {
        const select_user_query = `select * from user where email = ?`;
        mysql_connection.query(select_user_query, [email], (err, user) => {
            if (err) {
                console.log('email find error----->', err);
                return reject(err);
            }

            if (user.length == 0) { //no user found with email, then create a new one --->
                const add_user_query = `insert into user(name,email,profile) values(?,?,?)`;
                mysql_connection.query(add_user_query, [name, email, picture], (add_err, new_user) => {
                    if (add_err) {
                        console.log('add user error---->', add_err);
                        return reject(add_err);
                    }

                    const newuser_id = new_user.insertId;
                    const jwt_token = jwt.sign({ user_id: newuser_id, email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    return resolve({ success: true, message: 'Login Successfull', token: jwt_token });
                })
            }
            else { //if user already exists --->
                find_user = user[0];
                console.log('stored user---->', find_user);
                const jwt_token = jwt.sign({ user_id: find_user.id, email: find_user.email }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });
                return resolve({
                    success: true,
                    message: 'Login successful',
                    token: jwt_token,
                });
            }
        })
    })
}

module.exports = { OAuthorization };