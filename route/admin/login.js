const bcrypt = require('bcrypt');
const { User } = require('../../model/user');

const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    // verify the email and password is suit of rule
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: 'Email or Password is not suit for the rules!!!' });
    }

    // judgement the user is true or false in the Database
    const user = await User.findOne({ email: email });

    if (user) {
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            // Store session.username
            req.session.username = user.username;

            // Store session.role
            req.session.role = user.role;
            
            // Get user info
            req.app.locals.userInfo = user;

            // console.log('login user: ', user);

            // verify the user's role
            if (user.role == 'admin') {
                // redirect to the admin
                res.redirect('/admin/user');
            } else {
                res.redirect('/home');
            }

        } else {
            return res.status(400).render('admin/error', { msg: 'Email or Password is error!!!' });
        }
    } else {
        // console.log('Not Exist');
        return res.status(400).render('admin/error', { msg: 'Email or Password is error!!!' });
    }
}

module.exports = login;