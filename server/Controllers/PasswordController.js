// Helpers
const GeneralHelper = require("../Services/GeneralHelper");
const ResponseHelper = require("../Services/ResponseHelper");
const MailHelper = require("../Services/MailHelper");
const UserHelper = require("../Services/UserHelper");
const TokenHelper = require("../Services/TokenHelper");
const mongoose = require("mongoose");
const url = require("url");

// Constants
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");
const {request} = require("express");
//const User = require('../Models/User');


exports.forgot = async (req, res, next) => {
    const request = req.body;
    const foundUser = await UserHelper.foundUserByEmail(request.email);
    if (foundUser == null) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.EMAIL_NOT_EXIST);
        return res.status(response.code).json(response);
    }
    const forgotToken = await TokenHelper.tokenCreater(request.email);
    const FRONT_APP_URL = GeneralHelper.getFrontAppResetUrl();
    const link = `${FRONT_APP_URL}?userId=${foundUser._id}&token=${forgotToken}`;
    const BACK_APP_URL = GeneralHelper.getBackAppUrl();
    console.log(BACK_APP_URL);
    await UserHelper.updateUser({email: request.email}, {resetPasswordToken: forgotToken});
    const replacements = {
        link: `${FRONT_APP_URL}?userId=${foundUser._id}&token=${forgotToken}`,
        appName: process.env.APP_NAME,
        mailFrom: process.env.MAIL_FROM,
        assetsPath: `${BACK_APP_URL}/Assets`
    };
    await MailHelper.sendForgotPasswordEmail(request.email, replacements);
    let response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.EMAIL_RECEIVED_SHORTLY);
    return res.status(response.code).json(response);
};

exports.reset = async (req, res, next) => {

    let response = ResponseHelper.getDefaultResponse();
    const request = req.body;
    const id = req.query.userId;
    const token = req.query.token;
    console.log(id, token);
    // console.log(id);
    // console.log(token);
    if (request.newPassword !== request.confirmPassword) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.INVALID_PASSWORD);
        return res.status(response.code).json(response);
    }
    const password = await GeneralHelper.bcryptPassword(request.newPassword);
    let validResponse;
    let result;
    result = await TokenHelper.validationForPasswordChange(req, res, id, token);
    if (result === true) {
        await UserHelper.updateUserAndToken(res, id, password);
        response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL);
    } else {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.INVALID_TOKEN);
    }
    return res.status(response.code).json(response);
};

exports.change = async (req, res, next) => {
    let response = ResponseHelper.getDefaultResponse();
    const request = req.body;
    const userId = req.user.userId;
    let user = await UserHelper.foundUserById(userId);
    let matched = await GeneralHelper.comparePassword(request.oldPassword, user.password);
    if (!matched) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.INVALID_PASSWORD);
        return res.status(response.code).json(response);
    }
    const password = await GeneralHelper.bcryptPassword(request.newPassword);
    ;
    await UserHelper.updateUser({_id: user._id}, {password: password});
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL);
    return res.status(response.code).json(response);
};

exports.set = async (req, res, next) => {

    let response = ResponseHelper.getDefaultResponse();
    const request = req.body;
    const BACK_APP_URL = GeneralHelper.getBackAppUrl();
    /*const foundUser = await UserHelper.foundUserByEmail(request.email);
    if (foundUser==null) 
    {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS,Message.EMAIL_NOT_EXIST);
        return  res.status(response.code).json(response);
    }

    const forgotToken = await TokenHelper.tokenCreater(request.email);
    const FRONT_APP_URL = GeneralHelper.getFrontAppResetUrl();
    const link =  `${FRONT_APP_URL}/${foundUser._id}/${forgotToken}`;
    const BACK_APP_URL = GeneralHelper.getBackAppUrl();*/

    await UserHelper.updateUser({email: request.email}, {'forgotToken': forgotToken});

    const replacements = {
        userName: foundUser.email,
        link: link,
        appName: process.env.APP_NAME,
        mailFrom: process.env.MAIL_FROM,
        assetsPath: `${BACK_APP_URL}/Assets`,
    };

    await MailHelper.sendForgotPasswordEmail(request.email, replacements);

    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.EMAIL_RECEIVED_SHORTLY);
    return res.status(response.code).json(response);
};
exports.setForgotCode = async (userEmail, forgotCode) => {
    let user = await User.findOne({email: userEmail});
    user.forgotCode = forgotCode;
    let userModel = new User(user);
    return userModel.save().then((fulfilled) => {
        return fulfilled;
    });
};
