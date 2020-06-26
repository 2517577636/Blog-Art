const { User } = require('../../model/user');
const bcrypt = require('bcrypt');

// Note: If you want to modify the user, 
// you must to provide your password and guard the password is the same as database's password.
module.exports = async function (req, res, next) {

    // Set the identy about currentLink
    req.app.locals.currentLink = 'user';

    const id = req.query.id;

    // Get user from request
    const userReq = req.body;

    // Get user from database 
    let user = await User.findById(id);

    // Compare the difference between userReq.password and user.password
    const isValid = await bcrypt.compare(userReq.password, user.password);

    if (isValid) {
        // Update the user
        await User.updateOne({_id: id}, {
            username : userReq.username,
            email: userReq.email,
            role: userReq.role,
            state: userReq.state
        })
        
        // redirect
        res.redirect('/admin/user');
    } else {
        const obj = {
            path: '/admin/user-edit',
            msg: 'Password is not true,please enter again',
            id
        };

        return next(JSON.stringify(obj));
    }

}