var express = require('express');
var router = express.Router();
var Note = require("../models/Note");
const NotesController = require("../src/notesController");

/*

// Cleanse Database on start-up
Note.remove({}, function(err) {
    if (err) console.log(err);
});

// Seed data
var note = [
    {
        noteId: "123",
        body: "Test Seed Note 1",
        user_id: "0"
    },
    {
        noteId: "1234",
        body: "Test Seed Note 2",
        user_id: "0"
    },
    {
        noteId: "1235",
        body: "Test Seed Body User 4",
        user_id: "4"
    },
];


// Seeding database
Note.create(note, function(err, results) {
    if (err) console.log({success: false, error: err});
    return;
})
*/


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