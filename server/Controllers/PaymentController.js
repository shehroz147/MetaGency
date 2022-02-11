const express = require('express');
const app = express();

const ResponseHelper = require('../Services/ResponseHelper');
const Message = require('../Constants/Message');
const ResponseCode = require('../Constants/ResponseCode');
const path = require('path');
const stripe = require('stripe')('sk_test_51JLLOrICmWgBmU1qyViEG7kfgqZQSRh69XcPIyIJ5USHWOxVj1ZOokQ1v2hFKREtsieKwEJ4tiMxmP5LXcfs9HXN00U420ZZHR');
const User = require('../Models/User');

const UserHelper = require('../Services/UserHelper');
const PaymentHelper = require('../Services/PaymentHelper');
const Paypal = require("paypal-rest-sdk");

exports.createPayment = async (req, res) => {
    Paypal.configure({
        'mode': 'sandbox',
        'client_id': 'AQXIf23nc56HLxeGTEa3qrwoyDw9pC6KuxoY29FMb2yN94eR4gm6njJiJYkoJEWOVcBzdotuJXDSRoz6',
        'client_secret': 'EJAiuKK1VTZESjE11O_9VNiujBg1sn_H5aNnGqDdHBviRXiyTVHE1uOk6YvFChlXLCFAniELmOm8lg_Q'
    });
    let request = req.body;
    let response;
    let create_payment_json = await PaymentHelper.createPayment();
    Paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
}
exports.executionOfPayment = async (req, res) => {
    const payerId = req.query.PayerId;
    let paymentId = req.query.paymentId;
    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "6.00"
            }
        }]
    };
    Paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
            res.send('Success');
        }
    });
}

//STRIPE FOR CREDIT CARD
exports.createCustomerForStripe = async (req, res) => {
    let request = req.body;
    let response;
    const user = await PaymentHelper.createCustomer(request);
    let creditCard = await PaymentHelper.addCreditCard(user, {
        number: request.number,
        exp_month: request.exp_month,
        exp_year: request.exp_year,
        cvc: request.cvc,
    });
    const result = await PaymentHelper.processPayment(user, creditCard);
    response = await ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
}

//
// exports.PaymentForNewCard = async(req,res)=>{
//     let request= req.body;
//     let response;
//
//     // configure client, request and HPP settings
//     let service = new HostedService(new GpEcomConfig
//     {
//         MerchantId = "MerchantId",
//             AccountId = "internet",
//             SharedSecret = "secret",
//             ServiceUrl = "https://pay.sandbox.realexpayments.com/pay",
//             HostedPaymentConfig = new HostedPaymentConfig
//         {
//             Version = "2"
//         }
//     });
//
// // Add 3D Secure 2 Mandatory and Recommended Fields
//     var hostedPaymentData = new HostedPaymentData
//     {
//         CustomerEmail = "james.mason@example.com",
//             CustomerPhoneMobile = "44|07123456789",
//             AddressesMatch = false
//     };
//
//     var billingAddress = new Address
//     {
//         StreetAddress1 = "Flat 123",
//             StreetAddress2 = "House 456",
//             StreetAddress3 = "Unit 4",
//             City = "Halifax",
//             PostalCode = "W5 9HR",
//             Country = "826"
//     };
//
//     var shippingAddress = new Address
//     {
//         StreetAddress1 = "Apartment 825",
//             StreetAddress2 = "Complex 741",
//             StreetAddress3 = "House 963",
//             City = "Chicago",
//             State = "IL",
//             PostalCode = "50001",
//             Country = "840",
//     };
//
//     try
//     {
//         var hppJson = service.Charge(19.99m)
//     .WithCurrency("EUR")
//         .WithHostedPaymentData(hostedPaymentData)
//         .WithAddress(billingAddress, AddressType.Billing)
//         .WithAddress(shippingAddress, AddressType.Shipping)
//         .Serialize();
//
//         // TODO: pass the HPP request JSON to the JavaScript, iOS or Android Library
//     }
//
//     catch (ApiException exce)
//     {
//         // TODO: Add your error handling here
//     }
// }

