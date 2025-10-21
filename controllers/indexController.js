const messages = require('../models/messagesStore');

async function createIndexGet(req, res) {
    res.render("indexTemplate", { messages: messages });
}

module.exports = {
    createIndexGet
};