// Express Router
const express = require("express");
const router = express.Router();

// Middlewares
const jwtAuth = require('../Middleware/JWTAuth');

// Controllers
const ProfileController = require('../Controllers/ProfileController');


// Routes
router.get("/admin-detail", jwtAuth, ProfileController.adminDetail);
router.post("/admin-update", jwtAuth, ProfileController.adminUpdate);


module.exports = router;