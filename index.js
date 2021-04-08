const express = require('express');
const fs = require('fs');

const users = JSON.parse(fs.readFileSync('db.json'));


const app = express();
const PORT = 3000;

app.get('/home', (req, res) => {
  res.send('home');
})

app.get('/login', (req, res) => {
  console.log(req.session);
  res.render('login', { message: req.flash('message') });
});



app.listen(PORT, () => console.log('Listening on port', PORT));