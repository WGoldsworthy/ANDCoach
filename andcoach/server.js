var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
/*var cookieParser = require('cookie-parser');*/
var session = require('express-session');
/*var FileStore = require('session-file-store')(session);*/

var index = require("./routes/index");
var objectives = require("./routes/objectives");
var users = require("./routes/users")

const cors = require("cors");

var port = 3001;

var app = express();

/*app.use(cookieParser());*/

/*app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
});*/

// Use the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

/*
// Access the session as req.session
app.get('/', function(req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
});
*/

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

app.disable('etag');

// Set Static Folder
app.use(express.static(path.join(__dirname, "src")));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/api", objectives);
app.use("/users", users)

app.listen(port, function() {
  console.log("Server started on port " + port);
});
