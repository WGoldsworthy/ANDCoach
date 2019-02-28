var Note = require("../models/Note");

class NotesController {
    // Get all notes DO NOT USE :)
    static getAllNotes(req, res) {
        Note.find((err, data) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: data});
        });
    }


    // Get single note by note id
    static getSingleNote(req, res) {
        const id = req.params.id;
        Note.find({_id: id}, (err, objs) => {
            if (err) return res.status(404).json({success: false, error: err});
            return res.json({success: true, data: objs})
        });
    }

    // Get notes by user_id
    static getAllNotesForUser(req, res) {
        const id = req.params.id;
        Note.find({user_id: id}, (err, objs) => {
            if (err) return res.json({success: false, error: err});
            if (!objs.length) return res.status(404).json({success: true, error: err});
            return res.json({success: true, data: objs})
        });
    }

    // Create note
    static createNote(req, res) {
        let note = new Note(req.body);
        note.save(err => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, note: note});
        })
    }

    // Update note
    static updateNote(req, res) {
        const id = req.params.id;

        Note.findOneAndUpdate({_id: id}, {$set: {"body": req.body.body}}, function(err, note) {
            if (err) return res.send(500, {success: false, error: err});
            return res.json({success: true});
        });


    }


    // Delete note
    static deleteNote(req, res) {
        const id = req.params.id;
        Note.deleteOne({_id: id}, function(err) {
            if (err) return res.json({success: false, error: err});
        })
        return res.json({success: true});
    }

}

module.exports = NotesController;