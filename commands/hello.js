/*
 * Returns "I AM HERE!" in chat
 */
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("I AM HERE!");
};

//Command name
module.exports.help = {
    name: "hello"
};