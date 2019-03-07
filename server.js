var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

const cookiesMiddleware = require('universal-cookie-express');

var index = require("./routes/index");
var objectives = require("./routes/objectives");
var users = require("./routes/users");
var notes = require("./routes/notes");

const cors = require("cors");

var port = 3001;

var app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true
  })
);

var mongoose = require("mongoose");
const API_PORT = 3001

var app = express();

var dbName;
if ( process.env.NODE_ENV === 'test' ) {
    dbName = 'test';
}
else {
    dbName = 'objectives';
}
    const dbRoute = "mongodb+srv://admin:admin@cluster0-isrpn.mongodb.net/" + dbName + "?retryWrites=true";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.disable('etag');

// Set Static Folder
// app.use(express.static(path.join(__dirname, "src")));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", index);

app.use(cookiesMiddleware()).use("/api", objectives);
app.use(cookiesMiddleware()).use("/users", users)
app.use("/notes", notes);


app.listen(port, function() {
  console.log("Server started on port " + port);
});
