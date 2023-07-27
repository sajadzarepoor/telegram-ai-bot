const fs = require("fs");
const path = require("path");

const messagesPath = path.join(__dirname, "messages.json");
const messages = JSON.parse(fs.readFileSync(messagesPath, "utf8"));

module.exports = messages;
