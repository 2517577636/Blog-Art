const {Article} = require('../../model/article');

module.exports = async (req, res) => {
    const id = req.query.id;
    
    // res.send(id)
    await Article.findByIdAndDelete(id)

    res.redirect('/admin/article')
}