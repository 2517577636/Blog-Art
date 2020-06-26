// const {Comment} = require('../../model/comment')

// module.exports = async function (req, res){
//     let id = req.body;
//     // res.send(id.comment_id)

//     let user = req.app.locals.userInfo;

//     // console.log(user);
//     let msg

//     if(user && user._id == id.commentUser_id){
//         await Comment.findByIdAndDelete(id.comment_id)
//     }else{
//         msg = "You are not the publisher of the comment"
//     }
    

//     // res.send(id)
//     // await Comment.findByIdAndDelete(id)

//     res.redirect("/home/")
// }