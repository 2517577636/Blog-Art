// require bcrypt
const bcrypt = require('bcrypt');
// require querystring
const qs = require('querystring');

const { User, createUser, validateUser  } = require('../../model/user');

module.exports = async (req, res, next) => {
    const user = req.body;

    // verify the user
    const {error, value} = validateUser(user);

    if (!error) {
        // verify the mailbox exists in the database
        const emailE =  await User.findOne({email: value.email})

        if(!emailE){
            await createUser(value);
            res.redirect('/admin/user');
        }else{
            // res.redirect(`/admin/user-edit?message='Email exists in the database'`)
            return  next(JSON.stringify({
                path: '/admin/user-edit',
                message: 'Email exists in the database',
                user: qs.stringify(value, ';', ':')
            }))
            
        }
    } else {
        console.log(error.message)
        // res.redirect(`/admin/user-edit?message=${error.message}`)
        return next(JSON.stringify({
            path: '/admin/user-edit',
            message: error.message,
            user: qs.stringify(value, ';', ':')
        }))
    }

}