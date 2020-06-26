const { Comment } = require('../../model/comment')

module.exports = async (req, res) => {
//   Get aid, uid, content
    const { aid, uid, content } = req.body;

    await Comment.create({
        aid,
        uid,
        content,
        time: new Date()
    })

    res.redirect('/home/article?id=' + aid)
}