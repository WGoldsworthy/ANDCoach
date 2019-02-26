var express = require('express');
var router = express.Router();
var User = require("../models/User");

var crypto = require('crypto');

var generate_key = function() {
    var sha = crypto.createHash('sha256');
    sha.update(Math.random().toString());
    return sha.digest('hex');
};

router.post("/login", (req, res) => {

	if (!req.body.userId){
		return res.send(401);
	}

	var emailDomain = req.body.email.substring(req.body.email.indexOf("@"));

	if (emailDomain != "@and.digital") {
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

	var sessionID = generate_key();
	user.session = sessionID;

	user.save(err => {
		if (err) {
			if (err.code == 11000) {
				User.findOneAndUpdate({user_id: userId}, user, (err) => {
					if (err) return res.send(500, { error: err });
    				return res.json({success: true, session: sessionID, userId: userId});
				});
			} else {
				return res.json({success: false, error: err});
			}
		} else {
			return res.json({success: true, session: sessionID});
		}
	});
});

module.exports = router;