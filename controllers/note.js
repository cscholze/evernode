'use strict';

const Note = require('../models/note');

module.exports = {
  index(req, res, next) {
    Note.find({}, (err, notes) => {
      res.render('notes-index', {notes: notes});
    });
  },


  newNote(req, res, next) {
    res.render('new-note');
  },


  create(req, res, next) {
      Note.create( req.body, (err, note) => {
        if (err) throw err;

        res.redirect(`/notes/${note._id}`);
      });
  },


  show(req, res, next) {
      res.render('show-note', {note: req.note});
  },


  destroy(req, res, next) {
    req.note.remove((err) => {
      if (err) throw err;

      res.redirect('/notes');
    });
  },


  edit(req, res, next) {
      res.render('new-note', {note: req.note});
  },


  update(req, res, next) {
    req.note.update(req.body, (err) => {
      if (err) throw err;

      res.redirect(`/notes/${req.note._id}`);
    });
  }
}


