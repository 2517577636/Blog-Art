const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    // Article ID
    aid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    // User ID
    uid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // Comment time
    time:{
        type: Date
    },
    // Comment content
    content: {
        type: String
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment
}