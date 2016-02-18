'use strict';

// DEPENDENCIES
const bodyParser = require('body-parser');
const express = require('express');

// SERVER VARIABLES
const app = express();
const port = process.env.PORT || 3000;


// MIDDLEWARE
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

// ROUTES
app.get('/', (req, res, next) => {
  res.send('Server Running');
});

app.get('/notes/new', (req, res, next) => {
    res.render('new-note');
});
app.post('/notes', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});



// START SERVER
app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
});
