// Express Router
const express = require("express");
const router = express.Router();

// Middlewares
const jwtAuth = require('../Middleware/JWTAuth');
const Role = require('../Middleware/RoleAuth');

// Controllers
const AuthController = require('../Controllers/AuthController');


// Routes
router.post("/login", jwtAuth, AuthController.login);
router.post("/create", AuthController.CreateAdmin);
router.get('/counters',AuthController.counters);


module.exports = router;