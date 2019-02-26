var express = require('express');
var router = express.Router();
var Note = require("../models/Note");


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


// Get all objectives for all users
// DO NOT USE. :)
router.get("/notes", function(req, res) {

    Note.find((err, data) => {
        console.log(data);
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    })
});


// Get Notes by User id
router.get("/notes/:id", function(req, res) {

    const id = req.params.id;

    Note.find({user_id: id}, (err, objs) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: objs})
    });
});

// Get Note by id
router.get("/note/:id", function(req, res) {

    const id = req.params.id;

    Note.find({noteId: id}, (err, objs) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: objs})
    });
});

// Create Note by User id
router.post("/create", (req, res) => {


    let note = new Note();
    const {body, user_id} = req.body;
 //   note.id = id;
    note.body = body;
    note.user_id = user_id; // Google Id
    note.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    })
});

// Edit Note by Note id
router.post("/update/:id", (req, res) => {

    const id = req.params.id;
    let note = Note.find({noteId: id}, (err, objs) => {
        if (err) return res.json({success: false, error: err});

    const {id, body, user_id} = req.body;
    //   note.id = id;
    note.body = req.body.body;
    // note.user_id = req.body.user_id; // Google Id
    note.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    })
    });
});



// Delete Note by Note id
router.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    Note.deleteOne({noteId: id}, function(err) {
        if (err) return res.json({success: false, error: err});
    })
    return res.json({success: true});
})



module.exports = router;