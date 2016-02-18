'use strict';

const Note = require('../models/note');


module.exports.index = (req, res, next) => {
  Note.find({}, (err, notes) => {
    res.render('notes-index', {notes: notes});
  });
};


module.exports.newNote = (req, res, next) => {
  res.render('new-note');
};


module.exports.create = (req, res, next) => {
    Note.create( req.body, (err, note) => {
      if (err) throw err;

      res.redirect(`/notes/${note._id}`);
    });
};


module.exports.show = (req, res, next) => {
  const note = Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {
      note: note
    });
  });
};


module.exports.destroy = (req, res, next) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err) throw err;
    res.redirect('/notes');
  });
};

