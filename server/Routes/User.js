// Express Router
const express = require("express");
const router = express.Router();

// Middlewares
// const jwtAuth = require('../Middleware/JWTAuth');

// Controllers
const UserController = require('../Controllers/UserController');


router.post("/signup", UserController.signup);
router.post("/signup-admin", UserController.signupAdmin);
router.get("/list", UserController.findAllUsers);
router.post("/update", UserController.updateUser);
router.post("/login", UserController.login);
router.post("/delete", UserController.delete);
router.post("/showUser", UserController.showSpecificUser);
//router.post("/showDetails", UserController.showMyDetails);
router.post("/addUser", UserController.addUser);
router.post("/editProfile", UserController.updateMyProfile);


module.exports = router;
