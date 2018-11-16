const userModel = require("../db/user_model");

function createUser(body, cb) {
    if(body.login, body.pass, body.mail) {
        let newUser = new userModel({
            login: body.login,
            pass: body.pass,
            mail: body.mail
        })
        newUser.save(function(err){
            if(err) {
                return cb(err)
            }
            cb(null, `User ${body.login} created`)
        })
    }
}

module.exports = {
    createUser: createUser
}