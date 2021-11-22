const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    answers: {type: String, required: true},
    guessed: {type: String, required: true}
})

module.exports = mongoose.model('Post', Post)