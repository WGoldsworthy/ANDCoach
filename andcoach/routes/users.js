var express = require('express');
var router = express.Router();
var User = require("../models/User");

var crypto = require('crypto');

var generate_key = function() {
    var sha = crypto.createHash('sha256');
    sha.update(Math.random().toString());
    return sha.digest('hex');
};

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

router.get("/get/:id", (req, res) => {
	User.findOne({user_id: req.body.userId}, (err, user) => {
		if (err) return res.json({error: err});
		return res.json({user: user});
	})
})

router.get("/logout", (req, res) => {
	req.universalCookies.set('session', null);
	req.universalCookies.set('userId', null);
	return res.send(200);
});

router.get("/checkSession", (req, res) => {
	if (req.universalCookies.get('session') && req.universalCookies.get('userId')) {
		User.find({user_id: req.universalCookies.get('userId'), session: req.universalCookies.get('session')}, (err, user) => {
			if (err) return res.json({loggedIn: false});
			return res.json({loggedIn: true});
		})
	} else {
		return res.json({loggedIn: false});
	}
})

module.exports = router;