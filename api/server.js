const express = require('express')
const path = require('path')
const app = express()
const port = 3080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/data', (req, res) => {
    res.send('<h1>Geschafft!!</h1>')
})

app.listen(port, () => {
    console.log('Server läuft auf Port: ' + port)
})