
const messages = require("../models/messagesStore");

async function createNewMessageGet(req, res) {
    res.render("form")
};

async function createMessagePost(req, res) {
    console.log("Posting message");
    messages.push({ text: req.body.message, user: req.body.name, added: (new Date()).toLocaleString('en-US') });
    res.redirect("/");
}


module.exports = {
    createNewMessageGet,
    createMessagePost
};