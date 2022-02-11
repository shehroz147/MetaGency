require('dotenv').config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moment = require("moment");
const {json} = require("body-parser");
const paypal = require('paypal-rest-sdk');
const path = require('path');
const ejs = require('ejs');
const http = require('http');

//edited


// Required Routes
const adminRoutes = require('./Routes/Auth');
const passwordRoutes = require('./Routes/Password');
const userRoutes = require('./Routes/User');
const profileRoutes = require('./Routes/Profile');
const imageRoutes = require('./Routes/Image');
const paymentRoutes = require('./Routes/Payment');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/battleground';

// Connect Mongo DB
mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true}, (err) => {
    if (!err) {
        console.log('Connection Successful');
    } else {
        console.log('Connection not successful', err);
    }
});
mongoose.Promise = global.Promise;


// Middlewares
app.use(morgan("dev"));
app.use('/Uploads', express.static('Uploads'));
app.use('/Assets', express.static('Assets'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Type, Signature"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//
// app.set('view engine','ejs');
// app.use(express.static('public'));
// app.use('/', express.static(path.join(__dirname, 'public')));

// View Engine Setup
//app.set('views', path.join(__dirname, 'views'))


// Routes which should handle requests


app.use("/api/admin", adminRoutes);
app.use("/api/password", passwordRoutes);
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/payment", paymentRoutes);



// Default Route When nothing matches
app.use((req, res, next) => {
    const error = new Error("Not found :o :o");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;