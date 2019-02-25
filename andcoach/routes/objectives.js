var express = require('express');
var router = express.Router();
const Objective = require("../objective")



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
router.get("/objectives", function(req, res) {

	Objective.find((err, data) => {
		console.log(data);
		if (err) return res.json({success: false, error: err});
		return res.json({success: true, data: data});
	})
})

module.exports = router;