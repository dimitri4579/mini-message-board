const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}


async function insertMessage(username, message_post, date_posted) {
    const text = 'INSERT INTO messages (username, date_posted, message_post) VALUES ($1, $2, $3)';
    const values = [username, date_posted, message_post];
    await pool.query(text, values);
}

module.exports = {
    getAllMessages,
    insertMessage
}