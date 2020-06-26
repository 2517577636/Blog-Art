const qs = require('querystring');
const { User } = require('../../model/user');

module.exports = async (req, res) => {
    // Set the identy about currentLink
    req.app.locals.currentLink = 'user';

    // Determine whether the page is modified or added
    // Add page
  
    if (!req.query.id) {
        let { message, user } = req.query;
        let userObj = qs.parse(user, ';', ':');
        
        res.render('admin/user-edit', {
            // user: req.body,
            msg: message,
            userObj,
            link: '/admin/user-edit'
        });
    }else{
        let   id = req.query.id;

        let userObj = await User.findById(id);

        // console.log("query.id userObj: ", userObj);
    
        res.render('admin/user-edit', {
            id,
            userObj,
            // msg,
            link: '/admin/user-modify?id='+ id
        })
    }
}