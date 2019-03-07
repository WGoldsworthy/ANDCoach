
var User = require("../models/user");

/**
 * Helper function to check session information
 */
exports.checkSession = function(req, res) {
	if (req.session) {
		console.log(req.session.userId);
		res.send(JSON.stringify(req.session.userId));
	} else {
		console.log('No Session')
		res.redirect('/')
	}
}