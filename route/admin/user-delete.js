const {User} = require('../../model/user');

module.exports = async (req, res) => {
    const id = req.query.id;
    const role = req.query.role;

    if(role == 'admin'){
        res.redirect('/admin/user')
    }else{
        await User.findByIdAndDelete(id)
        res.redirect('/admin/user')
    } 
}
