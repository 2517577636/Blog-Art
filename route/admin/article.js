const {Article} = require('../../model/article');

const  pagination = require('mongoose-sex-page');

module.exports = async (req, res)=>{
    // Set the identy about currentLink
    req.app.locals.currentLink = 'article';

    // Set the currentPage
    let currentPage = req.query.page || 1;

    // Get all the articles
    const articles = await pagination(Article).find().page(currentPage).size(2).display(3).populate('author').exec();

    // console.log('article: ', articles);
    
    // res.send(articles);
    res.render('admin/article', {
        articles
    });
}