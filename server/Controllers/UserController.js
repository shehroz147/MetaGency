const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
// Helpers
const UserHelper = require("../Services/UserHelper");
const ResponseHelper = require("../Services/ResponseHelper");
const GeneralHelper = require("../Services/GeneralHelper");
const AdminHelper = require("../Services/AdminHelper");
const port = process.env.PORT || 4000;
const User = require("../Models/User");
// Constants
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");
const Role = require("../Constants/Role.js");
exports.signup = async (req, res, next) => {
    //Signup function to add a new user  when the user provides required info
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    //checking required info
    if (!request.fullName || !request.userName || !request.email || !request.password) {
        let response = await ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    //checking if the email entered by user already exists or not
    let modelUser = await UserHelper.foundUserByEmail(request.email.toLowerCase());
    if (!(modelUser == null)) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.EMAIL_EXIST);
        return res.status(response.code).json(response);
    }
    let password = await GeneralHelper.bcryptPassword(request.password);
    //adding user to database
    let user = await UserHelper.createUser(request.email.toLowerCase(), password, request.fullName, request.userName, 'user');
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL);
    return res.status(response.code).json(response);
};

exports.signupAdmin = async (req, res, next) => {
    //Signup function to add a new user  when the user provides required info
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    //checking required info
    if (!request.fullName || !request.userName || !request.email || !request.password) {
        let response = await ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    //checking if the email entered by user already exists or not
    let modelUser = await UserHelper.foundUserByEmail(request.email.toLowerCase());
    if (!(modelUser == null)) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.EMAIL_EXIST);
        return res.status(response.code).json(response);
    }
    let password = await GeneralHelper.bcryptPassword(request.password);
    //adding user to database
    let user = await UserHelper.createUser(request.email.toLowerCase(), password, request.fullName, request.userName, 'Admin');
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL);
    return res.status(response.code).json(response);
};

exports.findAllUsers = async (req, res, next) => {
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    let result = await UserHelper.findAllUsers();
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
};

exports.delete = async (req, res, next) => {
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    if (!request.id) {
        let response = await ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.User_Id_Missing);
        return res.status(response.code).json(response);
    }
    this.findUser(request, res);
    let result = await UserHelper.deleteUser(request.id);
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
};

exports.updateUser = async (req, res, next) => {
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    // if (!request._id) {
    //     let response = await ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
    //     return res.status(response.code).json(response);
    // }
    let user = await UserHelper.foundUserByEmail(request.email);
    if (user === null) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.USER_NOT_EXISTS);
        return res.status(response.code).json(response);
    }
    let result = await UserHelper.updatingUser(user, request, res);
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
};

exports.login = async (req, res, next) => {
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    let email = request.email;
    if (!request.email || !request.password) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    let user = await UserHelper.foundUserByEmail(request.email);
    if (user == null) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.USER_NOT_EXIST);
        return res.status(response.code).json(response);
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
            response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.INVALID_PASSWORD);
            return res.status(response.code).json(response);
        }
        if (result) {
            const token = jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "12h"
                });

            let result = {
                _id: user._id,
                userName: user.userName,
                email: user.email,
                fullName: user.fullName,
                profileImage: user.profileImage,
                role: user.role
            }
            // this.showMyDetails(req, res, result);
            let response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.LOGIN_SUCCESS, result);
            // Only For Login API
            response.token = token;
            return res.status(response.code).json(response);
        }
    });
};

exports.createNewUser = async (request, res) => {
    /* All validations are success so we are going to create new user */
    let detail = {
        fullName: request.fullName,
        userName: request.userName,
    };

    let passwordEncryption = await GeneralHelper.bcryptPassword(request.password);
    await UserHelper.createUser(request.email, passwordEncryption, Role.USER, detail, res);

};

exports.findUser = async (request, res) => {
    let finder = await UserHelper.foundUserCount({ id: request.id, isDeleted: false });
    if (finder) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.USER_DOES_NOT_EXIST);
        return res.status(response.code).json(response);
    }
};

exports.showSpecificUser = async (req, res, next) => {

    let request = req.body;
    let result = await UserHelper.showMyDetails(request.email);
    console.log(result);
    let response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
};

exports.checkEmailAndPassword = async (request, res) => {
    if (!(request.email && request.password)) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_EMAIL_OR_PASSWORD);
        return res.status(response.code).json(response);
    }
};

exports.showMyDetails = async (req, res, user) => {
    // let request = req.body;
    // let response = ResponseHelper.getDefaultResponse();
    // if (!request.email || !request.password) {
    //     response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
    //     return res.status(response.code).json(response);
    // }
    // let user = await UserHelper.foundUserByEmail(request.email);
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, user);
    return res.status(response.code).json(response);
};

exports.addUser = async (req, res) => {
    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    if (!request.fullName || !request.userName || !request.email) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    let modelUser = await UserHelper.foundUserByEmail(request.email.toLowerCase());
    if (!(modelUser == null)) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.EMAIL_EXIST);
        return res.status(response.code).json(response);
    }
    console.log(modelUser);
    let user = await UserHelper.addUserByAdmin(request.email.toLowerCase(), request.userName, request.fullName, request.about);
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, user);
    return res.status(response.code).json(response);
};

exports.updateMyProfile = async (req, res) => {

    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();
    if (!request._id) {
        let response = await ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    let user = await UserHelper.foundUserById(request._id);
    if (user == null) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.USER_NOT_EXISTS);
        return res.status(response.code).json(response);
    }
    let result = await UserHelper.updatingUser(user, request, res);
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
};


exports.missingParameterResponse = async (req, res) => {
    let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
    return res.status(response.code).json(response);
}
exports.noSuchUserResponse = async (req, res) => {
    let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.USER_NOT_EXISTS);
    return res.status(response.code).json(response);
}

exports.requestSuccessfulResponse = async (req, res, result = null) => {
    let response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, result);
    return res.status(response.code).json(response);
}
