var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))


app.post('/login', (req, res) => {
  console.log('Servidor da empresa recebendo...');
  console.log(`User ${req.body.login} and password ${req.body.password}`)
  request.post('http://localhost:3001/passwords', {
    json: {
      login: req.body.login,
      password: req.body.password
    }
  });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Webapp is up and running');
});

app.use(express.static('views'));


