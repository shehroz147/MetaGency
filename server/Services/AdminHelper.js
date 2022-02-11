// Mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Moment
const moment = require('moment');

// Models
const User = require("../Models/User");
const Admin = require("../Models/Admin");

// Helpers
const ResponseHelper = require("./ResponseHelper");
const ResponseCode = require("../Constants/ResponseCode");
const Message = require("../Constants/Message");
const {json} = require("body-parser");

exports.updateAdmin = async (findObj, setObj) => {
    return Admin.updateOne(findObj, {$set: setObj});
}

exports.profile = async (user) => {
    return Admin.findOne({user: user}).populate('user').populate('firm');
}

exports.foundAdminByEmail = async (email) => {
    return User.findOne({email: email});
}
exports.createAdmin = async (email, name, password, request, res) => {

    const admin = new Admin({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        email: email,
        password: password,
        role: "Admin",
        profileImage: "default.jpg" || request.profileImage
    });
    await admin.save();

    const token = jwt.sign(
        {
            email: admin.email,
            id: admin._id,
            role: "Admin",
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "12h"
        });

    let response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.LOGIN_SUCCESS);
    // Only For Login API
    response.token = token;
    return res.status(response.code).json(response);
}