'use strict';

// MODULE DEPENDENCIES
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/note');

// SERVER VARIABLES
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}));

// ROUTES
app.get('/', (req, res, next) => {
  res.send('Server Running');
});

app.get('/notes/new', (req, res, next) => {
    res.render('new-note');
});

app.get('/notes/:id', (req, res, next) => {
  const note = Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {
      note: note
    });


  });
});

app.post('/notes', (req, res, next) => {
    Note.create( req.body, (err, note) => {
      if (err) throw err;

      res.redirect(`/notes/${note._id}`);
    });

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
