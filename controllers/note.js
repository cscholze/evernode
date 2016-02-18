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
    const note = Note.findById(req.params.id, (err, note) => {
      if (err) throw err;

      res.render('show-note', {
        note: note
      });
    });
  },


  destroy(req, res, next) {
    Note.findByIdAndRemove(req.params.id, (err) => {
      if (err) throw err;
      res.redirect('/notes');
    });
  },


  edit(req, res, next) {
    Note.findById(req.params.id, (err, note) => {
      if (err) throw err;

      res.render('new-note', {note: note});
    });
  },


  update(req, res, next) {
    Note.findByIdAndUpdate(req.params.id, req.body, (err, note) => {
      if (err) throw err;

      res.redirect('/notes');
    });
  }
}


