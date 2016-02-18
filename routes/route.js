'use strict';

// MODULE DEPENDENCIES
const express = require('express');
const router = express.Router();
const Note = require('../models/note');


// ROUTES
router.get('/', (req, res, next) => {
  res.send('Server Running');
});

router.get('/notes/new', (req, res, next) => {
    res.render('new-note');
});

router.get('/notes/:id', (req, res, next) => {
  const note = Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {
      note: note
    });


  });
});

router.post('/notes', (req, res, next) => {
    Note.create( req.body, (err, note) => {
      if (err) throw err;

      res.redirect(`/notes/${note._id}`);
    });

});

module.exports = router;
