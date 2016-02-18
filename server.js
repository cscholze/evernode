'use strict';

// MODULE DEPENDENCIES
const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const routes = require('./routes/route');

// SERVER VARIABLES
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));


// ROUTES
app.use(routes);

app.get('/', (req, res, next) => {
  res.redirect('/notes');
});


// DATABASE
mongoose.connect('mongodb://localhost:27017/evernode');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connection established and open to mongoDB');
});


// START SERVER
app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
});
