var Objective = require("../models/objective");

class objectivesController {
    // Get all objectives DO NOT USE :)
    static getAllObjectives(req, res) {
        Objective.find((err, data) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: data});
        });
    }

    // Create note
    static createObjective(req, res) {
        let objective = new Objective(req.body);
        objective.save(err => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, objective: objective});

        })
    }


    // Get objectives by user_id
    static getAllObjectivesUser(req, res) {
        const id = req.params.id;
        Objective.find({user_id: id}, (err, objs) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: objs})
        });
    }

    // Get objectives by id
    static getObjectivesID(req, res) {
        const id = req.params.id;
        Objective.find({_id: id}, (err, objs) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: objs})
        });
    }


    // Get objectives by status
    static getObjectivesStatus(req, res) {
        const status = req.params.status;
        Objective.find({status: status}, (err, objs) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: objs})
        });
    }


    // Get objectives by title
    static getObjectivesTitle(req, res) {
        const title = req.params.title;
        Objective.find({title: title}, (err, objs) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: objs})
        });
    }

    // Update objectives title and description
    static updateObjective(req, res) {
        const id = req.params.id;
        Objective.findOneAndUpdate({_id: id}, {$set: {"title": req.body.title, "notes" : req.body.notes}}, function(err) {
            if (err) return res.send(500, {error: err});
            return res.json({success: true, id: id});
        });

    }

    // Update objectives status
    static updateObjectiveStatus(req, res) {
        const id = req.params.id;
        Objective.findOneAndUpdate({_id: id}, {$set: {"status": req.body.status}}, function(err) {
            if (err) return res.send(500, {error: err});
            return res.json({success: true, id: id});
        });

    }

    // Update evidence
    static updateEvidence(req, res) {
        const id = req.params.id;
        Objective.findOneAndUpdate({_id: id}, {$set: {"evidence": req.body.evidence}}, function(err) {
            if (err) return res.send(500, {error: err});
            return res.json({success: true, id: id});
        });

    }

    // Delete
    static deleteObjective(req, res) {
        const id = req.params.id;
        console.log(id);
        Objective.deleteOne({_id: id}, function(err) {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true});
        })
    }

}

module.exports = objectivesController;