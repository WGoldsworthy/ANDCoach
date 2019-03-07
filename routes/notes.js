var express = require('express');
var router = express.Router();
var Note = require("../models/Note");
const NotesController = require("../controllers/notesController");



// Get all objectives for all users
// DO NOT USE. :)
router.get("/", NotesController.getAllNotes);


// Get Notes by User id
router.get("/notes/:id", NotesController.getAllNotesForUser);

// Get Note by Note id
router.get("/note/:id", NotesController.getSingleNote);

// Create Note by User id
router.post("/create", NotesController.createNote);

// Edit Note by Note id
router.post("/update/:id", NotesController.updateNote);

// Delete Note by Note id
router.post("/delete/:id", NotesController.deleteNote);



module.exports = router;