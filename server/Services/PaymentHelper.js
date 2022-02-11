const moment = require("moment");
const express = require("express");
// Mongoose
const mongoose = require("mongoose");
const stripe = require('stripe')('sk_test_51JLLOrICmWgBmU1qyViEG7kfgqZQSRh69XcPIyIJ5USHWOxVj1ZOokQ1v2hFKREtsieKwEJ4tiMxmP5LXcfs9HXN00U420ZZHR')
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
const User = require("../Models/User");

const Payment = require("../Models/Payment");
const Paypal = require('paypal-rest-sdk');

// Constants
const Role = require("../Constants/Role");
const ResponseCode = require("../Constants/ResponseCode");
const Message = require("../Constants/Message");


// Helpers
const GeneralHelper = require("./GeneralHelper");
const AdminHelper = require("./AdminHelper");
const ResponseHelper = require("./ResponseHelper");
const {verifyPayment} = require("../Controllers/PaymentController");
const {verify} = require("jsonwebtoken");

exports.createPayment = async () => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost.4000/success",
            "cancel_url": "http://localhost.4000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Gem",
                    "sku": "001",
                    "price": "6.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "6.00"
            },
            "description": "This is the Basic credit Package"
        }]
    };

}

exports.createCustomer = async (request) => {
    const customer = await stripe.customers.create({
        email: request.email,
    });
    console.log(customer);
    return customer;
}

exports.addCreditCard = async (user, card) => {
    const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card,
    });
    console.log(paymentMethod);
    const attached = await stripe.paymentMethods.attach(paymentMethod.id, {
        customer: user.id,
    });
    console.log(attached);
    return paymentMethod;
}
exports.processPayment = async (user, card) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1250,
        customer: user.id,
        currency: 'usd',
        payment_method: card.id,
    });
    console.log(paymentIntent);
    return paymentIntent;
};