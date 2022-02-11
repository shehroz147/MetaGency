// Helpers
const AdminHelper = require("../Services/AdminHelper");
const UserHelper = require("../Services/UserHelper");
const ResponseHelper = require("../Services/ResponseHelper");


// Constants
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");


exports.adminUpdate = async (req, res, next) => {

    let request = req.body;
    let user = req.user;
    let response = ResponseHelper.getDefaultResponse();

    if (!(request._id && request.email)) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }

    let admin = await AdminHelper.updateAdmin({user: user.userId}, {
        name: request.adminName,
        phoneNumber: request.phoneNumber
    });

    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL);
    return res.status(response.code).json(response);
};

exports.adminDetail = async (req, res, next) => {

    let request = req.body;
    let user = req.user;
    let response = ResponseHelper.getDefaultResponse();

    let admin = await AdminHelper.profile(user.userId);

    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, admin);
    return res.status(response.code).json(response);
};

exports.userUpdate = async (req, res, next) => {

    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();

    if (!(request.firstName && request.lastName && request.id)) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }
    let user = await UserHelper.updateUser({_id: request.id}, {
        firstName: request.detail.firstName,
        lastName: request.detail.lastName,
        phoneNumber: request.detail.phoneNumber
    });
    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL);
    return res.status(response.code).json(response);
};

exports.userDetail = async (req, res, next) => {

    let request = req.body;
    let response = ResponseHelper.getDefaultResponse();

    if (!request._id) {
        response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.MISSING_PARAMETER);
        return res.status(response.code).json(response);
    }

    let user = await UserHelper.profile(req.user.userId);

    response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.REQUEST_SUCCESSFUL, user);
    return res.status(response.code).json(response);
};