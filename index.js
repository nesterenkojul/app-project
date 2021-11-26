const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Post = require('./Post.js')
const bodyParser = require('body-parser')

const PORT = process.env.PORT ?? 3000
const DB_URL = `mongodb+srv://jula:jula@cluster0.s7qku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, 'client')))

setTimeout(function(){
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})}, 100)

app.post('/', async (req, res) => {
    try {
        const {Текст1, Текст2, Текст3, Текст4, Текст5, Текст6, Текст7, Текст8,
         Текст9, Текст10, Текст11, Текст12, Текст13, Текст14, Текст15, Угадано} = req.body
        const post = await Post.create({Текст1, Текст2, Текст3, Текст4, Текст5, Текст6, Текст7, Текст8,
            Текст9, Текст10, Текст11, Текст12, Текст13, Текст14, Текст15, Угадано})
        res.json(post)
    } catch(e) {
        res.status(500).json(e)
    }
})

mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    try {
        console.log('Database is connected');
    } catch(e) {
        console.error(e);
    }

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})