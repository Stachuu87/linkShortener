const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    url: String,
    short: String
})

const linkModel = mongoose.model("link", linkSchema);

module.exports = linkModel;