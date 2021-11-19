const express = require('express')
const path = require('path')

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})