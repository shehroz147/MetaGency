const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const express = require("express");

// Models
const User = require("../Models/User");
const Admin = require("../Models/Admin");

// Constants
const Role = require("../Constants/Role.js");
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");

// Helpers
const AdminHelper = require("../Services/AdminHelper");
const GeneralHelper = require("../Services/GeneralHelper");
const ResponseHelper = require("../Services/ResponseHelper");
const UserHelper = require("../Services/UserHelper");
const {json} = require("body-parser");

exports.login = async (req, res, next) => {
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    if (!(request.email && request.password)) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    let admin = await AdminHelper.foundAdminByEmail(request.email.toLowerCase());
    if (admin == null) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.USER_NOT_EXIST);
        return res.status(response.code).json(response);
    }
    bcrypt.compare(request.password, admin.password, (err, result) => {
        if (err) {
            response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.INVALID_PASSWORD);
            return res.status(response.code).json(response);
        }
        if (result) {
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

            let result = {
                _id: admin._id,
                role: "Admin",
                email: admin.email,
                name: request.name,
                profileImage: admin.profileImage,
            }
            response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.LOGIN_SUCCESS, result);
            // Only For Login API
            response.token = token;
            return res.status(response.code).json(response);
        }
    });
}


exports.CreateAdmin = async (req, res, next) => {
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    if (!request.email || !request.password) {
        let response = await ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    let modelAdmin = await AdminHelper.foundAdminByEmail(request.email.toLowerCase());
    if (!(modelAdmin === null)) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.EMAIL_EXIST);
        return res.status(response.code).json(response);
    }

    let password = await GeneralHelper.bcryptPassword(request.password);
    let admin = await AdminHelper.createAdmin(request.email.toLowerCase(), request.name, password, request, res);

    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, admin);
    return res.status(response.code).json(response);
};

exports.counters = async (req, res, next) => {

    let response = ResponseHelper.getDefaultResponse();
    let result = {
        "totalRegisteredUsers" : await UserHelper.totalUsers(),
        "totalGames" : await GameHelper.totalGames(),
    };
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
};
