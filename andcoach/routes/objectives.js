var express = require('express');
var router = express.Router();
const Objective = require("../models/Objective")


// Cleanse Database on start-up
Objective.remove({}, function(err) {
	if (err) console.log(err);
});


// Seed data
var objective = [
{
	title: "Test",
	notes: "Notes Test",
	evidence: "Link to Google drive document",
	status: "In",
	user_id: "0"
},
{
	title: "Test Seed Objective 2",
	notes: "Notes Test",
	evidence: "Link to Google drive document",
	status: "I",
	user_id: "0"
},
{
	title: "Test Seed Objective user 4",
	notes: "Notes Test",
	evidence: "Link to Google drive document",
	status: "In Progress",
	user_id: "4"
},
]

// Seeding database
Objective.create(objective, function(err, results) {
	  if (err) return err.json({success: false, error: err});
  return;
})

// Create new objective
app.post("/objectives/Create", function(req, res) {

	Objective.create(objective, function(err, results) {
		if (err) return err.json({success: false, error: err});
		return;
	})
})

//Delete objective
router.delete("/objectives/Delete", function(req, res) {

	Objective.delete(objective, function(err, results) {
		res.send(req.body.data);
		return;
	})
})



// Get all objectives for all users
// DO NOT USE. :)
router.get("/objectives", function(req, res) {

	Objective.find((err, data) => {
		console.log(data);
		if (err) return res.json({success: false, error: err});
		return res.json({success: true, data: data});
	})
})


// Get Objectives by User id
router.get("/objectives/:id", function(req, res) {

	const id = req.params.id;

	Objective.find({user_id: id}, (err, objs) => {
		if (err) return res.json({success: false, error: err});
		return res.json({success: true, data: objs})
	});
});


//Get Objectives by Status
router.get("/objStatus/:status", function(req, res) {

	const status = req.params.status;

	Objective.find({status: status}, (err, objs) => {
		if (err) return res.json({success: false, error: err});
		return res.json({success: true, data: objs})
	});
});


//Get Objectives by Title
router.get("/objTitle/:title", function(req, res) {

	const title = req.params.title;

	Objective.find({title: title}, (err, objs) => {
		if (err) return res.json({success: false, error: err});
		return res.json({success: true, data: objs})
	});
});




// router.get("objectives/:uid/objectives/:id", function(req, res) {
// 	const {uid, id} = req.params.id;

// 	Objective.find({user_id: uid, _id: id}, (err, objs) => {
// 		if (err) return res.json({success: false, error: err});
// 		return res.json({success: true, data: objs})
// 	})
// })


module.exports = router;