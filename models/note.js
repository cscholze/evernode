'use strict';

// MODULE DEPENDENCIES
const mongoose = require('mongoose');

// MONGOOSE SCHEMA
const noteSchema = mongoose.Schema({
  title: String,
  text: String
});

// MONGOOSE MODELS
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
