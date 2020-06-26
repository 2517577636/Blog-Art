const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 20,
        minlength: 4,
        required: true   
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please enter Author_id']
    },
    publishDate: {
        type: Date,
        default: Date.now()
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    }
})

const Article = mongoose.model('Article', articleSchema);

module.exports = {
    Article
}