const {Article} = require('../../model/article');

const {Comment} = require('../../model/comment');

const {Counts} = require('../../model/counts');

module.exports = async function(req, res){
    // Get id
    const id = req.query.id;
    // console.log("home article route: ", id);
    

    // Get uid
    // const uid = req.app.locals.userInfo._id;

    // console.log(uid);
    const article =  await Article.findById(id).populate('author');

    // Get all the commens in the current article
    const comments = await Comment.find({aid: id}).populate('uid');
    
    console.log('article: ', article,'comments:', comments);
    
    // Get all the count in the current article
    const counts = await Counts.findOne({aid: id});

    // console.log('counts: ', counts);
    
    // res.send(comments)
    // return
    res.render('home/article', {
        article,
        comments,
        counts
    });
}