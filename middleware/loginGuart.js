module.exports = function guard(req, res, next){
    // 判断访问的url是不是登录界面，如果不是则跳回登录界面。用户没有登录的情况下，也是如此
    if(req.url != '/login' && !req.session.username){
       res.redirect('/admin/login');
    }else{
        // 判断用户角色，如果用户是普通用户，并且url不是退出url，就跳到前台界面
        if(req.session.role == 'normal' && req.url !== "/admin/logout"){
            return res.redirect('/home/')
        }
        next();
    }
};
