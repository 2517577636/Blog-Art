const {User}  = require('../../model/user');

module.exports = async (req, res)=>{

    // Set the identy about currentLink
    req.app.locals.currentLink = 'user';

    // Set pagesize
    let pagesize = 2;
    // Get the number of total users
    let count = await User.countDocuments({})
    // total pages
    let total = Math.ceil(count / pagesize);
    // Current page
    let currentPage =  req.query.page || 1;
    // Start
    let start = (currentPage - 1) * pagesize;

    // console.log('Count: ', count, 'total pages: ', total);
    
    // Get users
    users = await User.find().limit(pagesize).skip(start);

    res.render('admin/user', {
        users: users,
        total,
        page: currentPage
    });
}