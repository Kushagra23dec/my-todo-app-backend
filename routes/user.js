const express = require("express");
const userController = require("../controller/user-controller");

const router = express.Router();

router.post("/signup", userController.signup).post("/login", userController.login);

exports.router = router;
