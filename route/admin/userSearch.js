const {User} = require('../../model/user')

module.exports = async (req, res) => {
    let search = req.body.search.trim();
    // console.log(typeof search);

    const reg = new RegExp(search, 'ig')

    let users = await User.find({username: { $regex:   reg}})

    // let pagesize = 2;

    // let count = users.length;

    // let total =  Math.ceil(count / pagesize);

    // // Current page
    // let currentPage =  req.query.page || 1;

    //  // Start
    // let start = (currentPage - 1) * pagesize;

    console.log(users);
    
    // res.send(users)

    res.render('admin/user', {
        users: users
        // total,
        // page: currentPage
    })
}