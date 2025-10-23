require('dotenv').config();
const { Client } = require("pg");
// const { argv } = require('node:process');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    date_posted DATE DEFAULT CURRENT_DATE,
    message_post TEXT 
);

INSERT INTO messages (username, date_posted, message_post)
VALUES
    ('Amando', NOW(), 'Hi, there!'),
    ('Charles', NOW(), 'Hello World!');
`;


async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
