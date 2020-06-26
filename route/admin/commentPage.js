const {Comment} = require('../../model/comment');

const  pagination = require('mongoose-sex-page');


module.exports = async (req, res) => {

    // Set the identy about currentLink
    req.app.locals.currentLink = 'comment';

    // Set the currentPage
    let currentPage = req.query.page || 1;

    // Get all the articles
    const comments = await pagination(Comment).find().page(currentPage).size(2).display(3).exec();

    console.log("comments: ", comments);
    
    // res.send(comments)

    res.render('admin/comment', {
        comments
    });
}