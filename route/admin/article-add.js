// require formidable
const formidable = require('formidable');
// require path
const path = require('path')

const {Article}  = require('../../model/article');

module.exports = function(req, res){
    // Create the Parse Object
    let form = new formidable.IncomingForm();

    // Set the upload location
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');

    // Whether to keep the article extension
    form.keepExtensions = true;

    // Parse the Object form and create the article  
    form.parse(req, async (err, fields, files) => {
        // console.log('article-add: ' ,fields, files);
        

        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content,
            tag:fields.tag
        })
    })

    res.redirect('/admin/article');
}