const express = require("express");
const userController = require("./../Controllers/userController");
const authController = require("./../Controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get("/getallusers", userController.getAllUsers);
// router.post("/createuser", userController.createUser);
router.get("/getauser/:id", userController.getOneUser);
module.exports = router;
