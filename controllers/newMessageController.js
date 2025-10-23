
const messages = require("../models/messagesStore");
const db = require("../db/queries");

async function createNewMessageGet(req, res) {
    res.render("form")
};

async function createMessagePost(req, res) {
    console.log("Posting message");
    await db.insertMessage(req.body.name, req.body.message, (new Date()).toLocaleString('en-US'))
    // messages.push({ text: req.body.message, user: req.body.name, added: (new Date()).toLocaleString('en-US') });
    res.redirect("/");
}


module.exports = {
    createNewMessageGet,
    createMessagePost
};