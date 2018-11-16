const link = require("./shorten")
const user = require('./user');

module.exports = {
    shorten: link.shorten,
    createUser: user.createUser
}