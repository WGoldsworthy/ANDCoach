var express = require('express');
var router = express.Router();
var User = require("../models/User");

router.post("/login", (req, res) => {

	if (!req.body.userId){
		return res.send(401);
	}

	let user = new User();
	const {id, userId, firstName, lastName, email, imageUrl} = req.body;

	user.id = id;
	user.userId = userId; // Google Id
	user.firstName = firstName;
	user.lastName = lastName;
	user.email = email;
	user.imageUrl = imageUrl;
	user.save(err => {
		if (err) return res.json({success: false, error: err});
		return res.json({success: true});
	});
});

module.exports = router;