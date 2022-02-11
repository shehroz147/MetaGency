const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true,
        //unique: true,
        //match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    about:{type:String},
    membership: {type: String, default: null},
    gemsTitle: {type: String, default: null},
    password: {type: String, required: true},
    friends: [new mongoose.Schema({
        user: {type: String}
    }, {strict: false})],
    role: {type: String, default: 'user'},
    profileImage: {type: String, default: "default.jpg"},
    userName: {type: String, required: true},
    fullName: {type: String, required: true},
    credits: {type: Number, default: 0},
    gamerTag: {type: Object, default: null},
    matches: {type: Number, default: 0},
    wins: {type: Number, default: 0},
    losses: {type: Number, default: 0},
    winPercentage: {type: String, default: null},
    currentMatchDate: {type: String, default: null},
    currentMatchTime: {type: String, default: null},
    backgroundImage: {type: String, default: "default.jpg"},
    resetPasswordToken: {type: String, required: false},
    resetPasswordExpires: {type: Date, required: false},
    isDeleted: {type: Boolean, default: false},
    deletedAt: {type: Date, default: null},
}, {timestamps: true}, {strict: false});

module.exports = mongoose.model('User', userSchema);
