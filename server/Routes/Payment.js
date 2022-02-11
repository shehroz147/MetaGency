const express = require("express");
const router = express.Router();

// Middlewares
const jwtAuth = require('../Middleware/JWTAuth');

// Controllers
const PaymentController = require('../Controllers/PaymentController');
// request.post(PAYPAL_API + '/v1/payments/payment',

// Routes

router.post("/createPayment", PaymentController.createPayment);
router.get("/successfulPayment", PaymentController.executionOfPayment);
router.post("/creditCard", PaymentController.createCustomerForStripe);


module.exports = router;