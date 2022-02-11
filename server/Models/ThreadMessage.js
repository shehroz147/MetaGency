const mongoose = require("mongoose");

const threadMessageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    to: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    from: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    message: {type: String, default: null},
    createdAt: {type: Date, default: null},
    updatedAt: {type: Date, default: null},
    status: {type: String, default: 'pending'},
    isDeleted: {type: Boolean, required: true, default: false},
    deletedAt: {type: Date, default: null}
}, {timestamps: true});

module.exports = mongoose.model('ThreadMessage', threadMessageSchema);