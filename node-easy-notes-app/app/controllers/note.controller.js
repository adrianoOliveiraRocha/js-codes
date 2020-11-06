const Note = require('../models/note.model')

module.exports.new = (req, res) => {
  res.render('new-form.ejs')
}

// create and save a new note
module.exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Note content cannot be empty'
    })
  }
  // Create a Note
  Note.save()
    .then(data => {
      res.send(data)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || 'Some error ocurred while creating the note'
      })
    })
}
// retrieve and return all notes from the database
module.exports.findAll = (req, res) => {
  Note.find()
    .then(notes => {
      res.send(notes)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving notes.'
      })
    })
}
// find a single note with a noteId
module.exports.findOne = (req, res) => {
  Note.findById(req.params.noteId)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'Note note found with id ' + req.params.noteId
        })
      }
      res.send(note)
    })
    .catch(error => {
      if (error.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note note found with id ' + req.params.noteId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving note with id: ' + req.params.noteId
      })
    })
}
// Update a note identified by the noteId in the request
module.exports.update = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Note content cannot be empty'
    })
  }
  // Find note and update it with the request body
  Note.findByIdAndUpdate(req.params.noteId, 
  {title: req.body.content || 'Untitled Note'},
  {new: true})
    then(note => {
      if (!note) {
        res.status(404).send({
          msaage: 'Note not found with id: ' + req.params.noteId
        })
      }
      res.send(note)
    })
    .catch(error => {
      if (error.kind === 'ObjectId') {
        return res.status(404).send({
          msaage: 'Note not found with id: ' + req.params.noteId
        })
      }
      return res.status(500).send({
        message: 'Error updating note with id ' + req.params.noteId
      })
    })
}
// Delete a note with the specified noteId in the request
module.exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.noteId)
    then(note => {
      if (!note) {
        res.status(404).send({
          msaage: 'Note not found with id: ' + req.params.noteId
        })
      }
      res.send({
        message: 'Note delete successfully'
      })
    })
    .catch(error => {
      if (error.kind === 'ObjectId' || error.name === 'NotFound') {
        return res.status(404).send({
          message: 'Cannot delete the note with id: ' + req.params.noteId
        })
              }
    })
} 
