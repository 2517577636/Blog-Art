const { Article } = require('../../model/article');

module.exports = async (req, res)=>{
    // Set the identy about currentLink
    req.app.locals.currentLink = 'article';

    // Determine whether the page is modify or add
    // Add Page
    if(!req.query.id){
        let {message} = req.query;

        res.render('admin/article-edit', {
            msg: message,
            link: '/admin/article-add'
        })
    }
    else{
        let id = req.query.id;
        
        let articleObj = await Article.findById(id);

        // console.log("article-edit: ", articleObj);
        
        res.render('admin/article-edit', {
            id,
            articleObj,
            link: '/admin/article-modify?id='+ id
        })
    }
}