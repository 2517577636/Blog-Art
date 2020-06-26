module.exports =  function(req, res){
    // Clean cookies
    // console.log('exec');

    res.clearCookie('connect.sid');
    
    req.app.locals.userInfo = null;

    res.redirect('/admin/login');
}