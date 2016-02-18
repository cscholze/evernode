'use strict';

// MODULE DEPENDENCIES
const express = require('express');
const router = express.Router();

// CONTROLLER MODULES
const note = require('../controllers/note');


// ROUTES
router.get('/notes', note.index);
router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.get('/notes/:id/edit', note.edit);
router.put('/notes/:id', note.update);
router.delete('/notes/:id', note.destroy);
router.post('/notes', note.create);

module.exports = router;
