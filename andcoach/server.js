var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var objectives = require("./routes/objectives");

const cors = require("cors");

var port = 3001;

var app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.disable('etag');

// Set Static Folder
app.use(express.static(path.join(__dirname, "src")));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/api", objectives);

app.listen(port, function() {
  console.log("Server started on port " + port);
});
