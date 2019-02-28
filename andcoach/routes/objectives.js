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

// Get objectives by Obj id
router.get("/objectivesID/:id", objectivesController.getObjectivesID);

// Get objectives by status
router.get("/objStatus/:status", objectivesController.getObjectivesStatus);

// Get objectives by title
router.get("/objTitle/:title", objectivesController.getObjectivesTitle);

// Edit Objectives title and description
router.post("/objUpdate/:id", objectivesController.updateObjective);

// Edit evidence
router.post("/evidence/:id", objectivesController.updateEvidence);

// Edit Objective status
router.post("/objUpdateStatus/:id", objectivesController.updateObjectiveStatus);

// Delete Objective by id
router.post("/objDel/:id", objectivesController.deleteObjective);

//Create Objective
router.post("/create", objectivesController.createObjective);



module.exports = router;