var express = require("express");
var router = express.Router();
const getAllUsers = require("../functions/getAllUsers");
const registerUser = require("../functions/registerUser");

router.get("/", getAllUsers);

router.post("/register", registerUser);

module.exports = router;
