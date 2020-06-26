const {Article} = require('../../model/article')

module.exports =  async (req, res) => {
    let search = req.body.search.trim();
    // console.log( search);

    const reg = new RegExp(search, 'ig')

    let articles = await Article.find({title: { $regex:   reg}}).populate('author');

    articles = {
        records: articles
    }

    // res.send(articles)
    
    res.render('admin/article', {
        articles
    })
}