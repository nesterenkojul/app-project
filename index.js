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

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.post('/', async (req, res) => {
    try {
        const {answers, guessed} = req.body
        const post = await Post.create({answers, guessed})
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