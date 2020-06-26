// require formidable
const formidable = require('formidable')
const path = require('path')
const {Article} = require('../../model/article')

module.exports = async function(req, res, next){
        // Set the identy about currentLink
        req.app.locals.currentLink = 'user';

        const id = req.query.id;

        // const article = await Article.findById(id);
        
        // Create the Parse Object
        let form = new formidable.IncomingForm();

        // Set the upload location
        form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');

        // Whether to keep the article extension
        form.keepExtensions = true;
    
        // Parse the Object form and create the article  
        form.parse(req, async (err, fields, files) => {
            await Article.updateOne({_id: id},{
                title: fields.title,
                author: fields.author,
                publishDate: fields.publishDate,
                cover: files.cover.path.split('public')[1],
                content: fields.content
            })
        })

    res.redirect('/admin/article');
}