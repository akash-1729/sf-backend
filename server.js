require("dotenv").config();
var express = require("express");
var app = express();
var connectToDatabase = require("./config/connectToDatabase");
var cors = require("cors");
var bodyParser = require("body-parser");

let PORT = process.env.PORT || 5000;

// connect to database
connectToDatabase();

//import all routes
const user_routes = require("./routes/users");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//check api status
app.get("/", (req, res) => {
  res.send("API is working fineaaa");
});

//set routes
app.use("/users", user_routes);

app.listen(PORT, () => {
  console.log(`Backend listening on port: ${PORT}`);
});
