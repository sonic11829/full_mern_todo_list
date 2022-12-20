require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use('/api/todos', require('./route/api/todos'))

app.get('/api/test', (req, res) => {
    res.json({'YEAH!': 'You have located it!'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I am listening on 3001`)
})