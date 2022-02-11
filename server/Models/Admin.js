const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    email: {
        type: String,
        required: true,
        // unique: true, 
        // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {type: String, required: true},
    profileImage: {type: String, default: "default.jpg"},
    role: {type: String, required: true, default: "Admin"},
    isDeleted: {type: Boolean, required: true, default: false},
    deletedAt: {type: Date, default: null}
}, {timestamps: true});

module.exports = mongoose.model('Admin', adminSchema);