const messages = require('../models/messagesStore');
const db = require("../db/queries");


async function createIndexGet(req, res) {
    const messages = await db.getAllMessages();
    console.log("rows from the table: ", messages);
    res.render("indexTemplate", { messages: messages });
}

module.exports = {
    createIndexGet
};