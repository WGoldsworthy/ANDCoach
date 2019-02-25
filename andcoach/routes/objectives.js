var express = require('express');
var router = express.Router();
const Objective = require("../objective")



var mongoose = require("mongoose");
const API_PORT = 3001

const dbRoute = "mongodb+srv://admin:admin@cluster0-isrpn.mongodb.net/objectives?retryWrites=true";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

Objective.remove({}, function(err) {
	if (err) console.log(err);
});

var objective = {
	title: "test2"
}

Objective.create(objective, function(err, results) {
	  if (err) return err.json({success: false, error: err});
  return;
})



module.exports = router;