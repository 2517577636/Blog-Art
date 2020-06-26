const mongoose = require('mongoose');

const countsSchema = new mongoose.Schema({
    // Article ID
    aid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
        required: true
    },
    // User ID
    uid: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required: true
        }
    ],
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0,
    }
})

const Counts = mongoose.model('Counts', countsSchema);

module.exports = {
    Counts
}