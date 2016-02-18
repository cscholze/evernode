'use strict';

// MODULE DEPENDENCIES
const express = require('express');
const router = express.Router();

// CONTROLLER MODULES
const note = require('../controllers/note');


// ROUTES
router.get('/notes', note.index);
router.post('/notes', note.create);
router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.delete('/notes/:id', note.destroy);

module.exports = router;
