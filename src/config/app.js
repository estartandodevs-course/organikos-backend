const express = require('express')

const app = express()
const Router = express.Router
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Organikos API!')
})
module.exports = { app, Router }
