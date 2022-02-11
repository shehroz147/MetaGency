//  JSON Web Token
const JWT = require('jsonwebtoken');

// Constants
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const admin = JWT.verify(token, process.env.JWT_SECRET);
        req.admin = admin;
        next();
    } catch (error) {
        return res.status(ResponseCode.NOT_SUCCESS).json({
            code: ResponseCode.NOT_SUCCESS,
            message: Message.AUTHENTICATION_FAILED
        });
    }
};