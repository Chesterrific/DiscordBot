/*
 * Returns "I AM HERE!" in chat
 */


const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("I AM HERE!");
};

module.exports.help = {
    name: "hello"
};