module.exports = function(req, res){
    console.log('userpage');
    
    const userInfo = req.app.locals.userInfo;

    console.log(userInfo)
    
    res.render('home/user', {
        userInfo
    })
}