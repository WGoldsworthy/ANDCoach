var express = require('express');
var router = express.Router();
const Objective = require("../objective")
var User = require("../models/User");


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


Objective.remove({}, function(err) {
	if (err) console.log(err);
});

var objective = {
	title: "tes"
}

Objective.create(objective, function(err, results) {
	  if (err) return err.json({success: false, error: err});
  return;
})

// Requests are made to port 3001
router.get("/objectives", sessionChecker, function(req, res) {

	Objective.find((err, data) => {
		if (err) return res.json({success: false, error: err});
		return res.json({success: true, data: data});
	})
})

module.exports = router;