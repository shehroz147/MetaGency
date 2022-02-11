const mongoose = require("mongoose");


const transactionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: {type: String},
    transactionAmount: {type: Number, required: true},
    gemsPackage: {type: Array, default: []},
    isDeleted: {type: Boolean, required: true, default: false},
    deletedAt: {type: Date, default: null}

}, {timestamps: true});

module.exports = mongoose.model("Transaction", transactionSchema);
