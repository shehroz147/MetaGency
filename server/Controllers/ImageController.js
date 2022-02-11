const ResponseHelper = require("../Services/ResponseHelper");
const UserHelper = require("../Services/UserHelper");
const GeneralHelper = require("../Services/GeneralHelper");
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");

exports.update = async (req, res, next) => {
    let response = ResponseHelper.getDefaultResponse();
    let userId = req.user.userId;
    if (this.findUserId(userId, res)) {
        let imageName = GeneralHelper.makeImagePath(process.env.PROFILE_DIR, req.file.filename);
        await UserHelper.updateUser({_id: this.findUserId(userId, res)._id}, {profileImage: imageName});
        response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.IMAGE_UPDATE_SUCCESS, imageName);
        res.status(response.code).json(response);
    }
};
exports.remove = async (req, res, next) => {
    let response = ResponseHelper.getDefaultResponse();
    let userId = req.body.userId;
    if (this.findUserId(userId, res)) {
        let imageName = process.env.DEFAULT_PROFILE;
        await UserHelper.updateUser({_id: this.findUserId(userId, res)._id}, {profileImage: imageName});

        response = ResponseHelper.setResponse(ResponseCode.SUCCESS, Message.IMAGE_REMOVED_SUCCESS, imageName);
        res.status(response.code).json(response);
    }
};
exports.findUserId = async (userId, res) => {
    let foundUser = await UserHelper.foundUserById(userId);
    if (foundUser == null) {
        let response = ResponseHelper.setResponse(ResponseCode.NOT_SUCCESS, Message.USER_NOT_EXIST);
        return res.status(response.code).json(response);
    }
    return foundUser;
};