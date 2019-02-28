var express = require('express');
var router = express.Router();
var Objective = require("../models/objective")
var User = require("../models/User");
const objectivesController = require("../src/objectivesController");

var sessionChecker = function(req, res, next) {
	if (req.universalCookies.get('session') && req.universalCookies.get('userId')) {
		User.find({user_id: req.universalCookies.get('userId'), session: req.universalCookies.get('session')}, (err, user) => {
			if (err) return res.send(401);
			return next();
		})
	} else {
		return res.send(401);
	}
}


// Get all objectives for all users
router.get("/objectives", objectivesController.getAllObjectives);

// Get objectives by User id
router.get("/objectives/:id", objectivesController.getAllObjectivesUser);

// Get objectives by status
router.get("/objStatus/:status", objectivesController.getObjectivesStatus);

// Get objectives by title
router.get("/objTitle/:title", objectivesController.getObjectivesTitle);

// Edit Objectives title and description
router.post("/objUpdate/:id", objectivesController.updateObjective);

// Edit Objective status
router.post("/objUpdateStatus/:id", objectivesController.updateObjectiveStatus);

// Delete Objective by id
router.post("/objDel/:id", objectivesController.deleteObjective);

//Create Objective
router.post("/create", (req, res) => {

	let objective = new Objective();
	const {title, notes, evidence, status, user_id} = req.body;
	objective.title = title;
	objective.notes = notes;
	objective.evidence = evidence;
	objective.status = status;
	objective.user_id = user_id; // Google Id
	objective.save(err => {
		if (err) return res.json({success: false, error: err});
		return res.json({success: true, objective: objective});
	})
});


// Update objective
router.post("objectives/update", (req, res) => {
	if (!req.body.id) {
		return res.send(401);
	}

	const {_id, title, evidence, status, user_id} = req.body;
})

// Get individual objective

// Delete Objective


module.exports = router;