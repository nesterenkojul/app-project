const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    Текст1: {type: String, required: true},
    Текст2: {type: String, required: true},
    Текст3: {type: String, required: true},
    Текст4: {type: String, required: true},
    Текст5: {type: String, required: true},
    Текст6: {type: String, required: true},
    Текст7: {type: String, required: true},
    Текст8: {type: String, required: true},
    Текст9: {type: String, required: true},
    Текст10: {type: String, required: true},
    Текст11: {type: String, required: true},
    Текст12: {type: String, required: true},
    Текст13: {type: String, required: true},
    Текст14: {type: String, required: true},
    Текст15: {type: String, required: true},
    Угадано: {type: String, required: true}
})

module.exports = mongoose.model('Post', Post)