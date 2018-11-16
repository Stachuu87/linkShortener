const db_con = require("../db/db_connect");
const linkModel = require("../db/link_model");
const valid_url = require("valid-url");
const random_string = require("randomstring");

const WEBSITE_URL = "http://localhost:1400/";

function validateUrl(longUrl) {
    return valid_url.isUri(longUrl)
}

function generateHash(cb) {
    return random_string.generate(Math.round(Math.random()*10)+6);
}

function shortenUrl(longUrl, cb) {
    if(!validateUrl(longUrl)) {
        return cb(new Error("URL is not valid"))
    } else {
        linkModel.findOne({url: longUrl}).exec(function(err, url){
            if(err){
                return cb(err);
            }
            if(!url) {
                let hash = generateHash();
                const newLink = new linkModel({
                    url: longUrl,
                    short: hash
                })
                newLink.save(function(err, url){
                    if(err) {
                        return cb(err);
                    }
                    return cb(null, WEBSITE_URL + hash);
                })
            } else {
                return cb(null, WEBSITE_URL + url.short);
            }
        })
    }
}

module.exports = {
    shorten: shortenUrl
}