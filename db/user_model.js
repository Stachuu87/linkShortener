const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: String,
    pass: String,
    mail: String
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;